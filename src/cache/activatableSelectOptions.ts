import { isNotNullish } from "@optolith/helpers/nullable"
import { mapObject } from "@optolith/helpers/object"
import { assertExhaustive } from "@optolith/helpers/typeSafety"
import * as Database from "../../gen/types.js"

const PRINCIPLES_ID = 31
const PROPERTY_KNOWLEDGE_ID = 3
const ASPECT_KNOWLEDGE_ID = 1

export type ResolvedSelectOption = {
  id: Database.RequirableSelectOptionIdentifier

  /**
   * Sometimes, professions use specific text selections that are not
   * contained in described lists. This ensures you can use them for
   * professions only. They are not going to be displayed as options to the
   * user.
   */
  profession_only?: true

  /**
   * Registers new applications, which get enabled once this entry is
   * activated with its respective select option. It specifies an entry-unique
   * identifier and the skill it belongs to. A translation can be left out if
   * its name equals the name of the origin select option.
   */
  skill_applications?: SkillApplications

  /**
   * Registers uses, which get enabled once this entry is activated with its
   * respective select option. It specifies an entry-unique identifier and the
   * skill it belongs to. A translation can be left out if its name equals the
   * name of the origin select option.
   */
  skill_uses?: SkillUses

  prerequisites?: GeneralPrerequisites

  /**
   * Specific binding cost for the select option. Only has an effect if the
   * associated entry supports binding costs.
   */
  binding_cost?: number

  /**
   * Specific volume for the select option. Only has an effect if the
   * associated entry supports volume values.
   */
  volume?: number

  /**
   * Specific AP cost for the select option.
   */
  ap_value?: number

  src?: Database.PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ResolvedSelectOptionTranslation>
}

export type ResolvedSelectOptionTranslation = {
  /**
   * The name of the select option.
   */
  name: string

  /**
   * The name of the select option when displayed in a generated
   * profession text.
   */
  name_in_profession?: string

  /**
   * The description of the select option. Useful for Bad Habits, Trade
   * Secrets and other entries where a description is available.
   */
  description?: string

  errata?: Errata
}
const matchesSpecificSkillishIdList = <T>(
  id: T,
  config: Database.SpecificFromSkillSelectOptionCategoryCategory<{ id: T }>,
  equalsId: (a: T, b: T) => boolean,
): boolean => {
  switch (config.operation.kind) {
    case "Intersection":
      return config.list.some(ref => equalsId(ref.id, id))
    case "Difference":
      return !config.list.some(ref => equalsId(ref.id, id))
    default:
      return assertExhaustive(config.operation)
  }
}

const getSkillishPrerequisites = (
  ps: Database.SkillSelectOptionCategoryPrerequisite[] | undefined,
  id: SkillishIdentifier | Database.CombatTechniqueIdentifier,
): GeneralPrerequisites | undefined => {
  if (ps === undefined) {
    return undefined
  }

  return ps.map(p => {
    switch (p.tag) {
      case "Self":
        return {
          level: 1,
          prerequisite: {
            tag: "Single",
            single: {
              tag: "Rated",
              rated: {
                id,
                value: p.self.value,
              },
            },
          },
        }
      case "SelectOption":
        return {
          level: 1,
          prerequisite: {
            tag: "Single",
            single: {
              tag: "Activatable",
              activatable: {
                id: p.select_option.id,
                active: p.select_option.active,
                level: p.select_option.level,
                options: [id],
              },
            },
          },
        }
      default:
        return assertExhaustive(p)
    }
  })
}

const equalsSkillishIdGroup = (
  a: SkillIdentifierGroup | CombatTechniqueIdentifier,
  b: SkillIdentifierGroup | CombatTechniqueIdentifier,
): boolean => {
  switch (a.tag) {
    case "Skill":
      return b.tag === "Skill" && a.skill === b.skill
    case "Spell":
      return b.tag === "Spell" && a.spell === b.spell
    case "Ritual":
      return b.tag === "Ritual" && a.ritual === b.ritual
    case "LiturgicalChant":
      return b.tag === "LiturgicalChant" && a.liturgical_chant === b.liturgical_chant
    case "Ceremony":
      return b.tag === "Ceremony" && a.ceremony === b.ceremony
    case "CloseCombatTechnique":
      return (
        b.tag === "CloseCombatTechnique" && a.close_combat_technique === b.close_combat_technique
      )
    case "RangedCombatTechnique":
      return (
        b.tag === "RangedCombatTechnique" && a.ranged_combat_technique === b.ranged_combat_technique
      )
    default:
      return assertExhaustive(a)
  }
}

const getApValueForSkillish = (
  config:
    | SelectOptionsAdventurePointsValue<SkillIdentifierGroup | CombatTechniqueIdentifier>
    | undefined,
  id: SkillIdentifierGroup | CombatTechniqueIdentifier,
  ic: ImprovementCost,
): number | undefined => {
  if (config === undefined) {
    return undefined
  }

  switch (config.tag) {
    case "DerivedFromImprovementCost":
      return (
        (() => {
          switch (ic) {
            case "A":
              return 1
            case "B":
              return 2
            case "C":
              return 3
            case "D":
              return 4
            default:
              assertExhaustive(ic)
          }
        })() *
          (config.derived_from_improvement_cost.multiplier ?? 1) +
        (config.derived_from_improvement_cost.offset ?? 0)
      )
    case "Fixed":
      return (
        config.fixed.map.find(mapping => equalsSkillishIdGroup(mapping.id, id))?.ap_value ??
        config.fixed.default
      )
    default:
      return assertExhaustive(config)
  }
}

const convertSkillApplicationOrUse = (
  id: SkillIdentifier,
  applicationOrUse: SkillApplicationOrUse,
): SkillApplication | SkillUse => ({
  id: applicationOrUse.id,
  skill: { tag: "Single", single: { id } },
  translations: applicationOrUse.translations,
})

const getDerivedSelectOptions = (
  selectOptionCategory: SelectOptionCategory,
  entryId: ActivatableIdentifier,
  database: ValidResults,
): ResolvedSelectOption[] => {
  switch (selectOptionCategory.tag) {
    case "Blessings":
      return database.blessings.map(([_, blessing]) => ({
        id: { tag: "Blessing", blessing: blessing.id },
        src: blessing.src,
        translations: mapObject(blessing.translations, t10n => ({ name: t10n.name })),
      }))

    case "Cantrips":
      return database.cantrips.map(([_, cantrip]) => ({
        id: { tag: "Cantrip", cantrip: cantrip.id },
        src: cantrip.src,
        translations: mapObject(cantrip.translations, t10n => ({ name: t10n.name })),
      }))

    case "TradeSecrets":
      return database.tradeSecrets.map(([_, tradeSecret]) => ({
        id: { tag: "TradeSecret", trade_secret: tradeSecret.id },
        prerequisites: tradeSecret.prerequisites,
        ap_value: tradeSecret.ap_value,
        src: tradeSecret.src,
        translations: mapObject(tradeSecret.translations, t10n => ({
          name: t10n.name,
          errata: t10n.errata,
        })),
      }))

    case "Scripts":
      return database.scripts.map(([_, script]) => ({
        id: { tag: "Script", script: script.id },
        ap_value: script.ap_value,
        src: script.src,
        translations: mapObject(script.translations, t10n => ({
          name: t10n.name,
          errata: t10n.errata,
        })),
      }))

    case "AnimalShapes": {
      const pathsWithOrderedIds = database.animalShapePaths.reduce<Record<number, number[]>>(
        (acc, [id, _path]) => ({
          ...acc,
          [id]: database.animalShapes
            .toSorted(([_1, a], [_2, b]) => a.size.id - b.size.id)
            .map(([id]) => id),
        }),
        {},
      )

      return database.animalShapes.map(([_, animalShape]) => {
        const path = database.animalShapePaths.find(([id]) => id === animalShape.path.id)?.[1]
        const size = database.animalShapeSizes.find(([id]) => id === animalShape.size.id)?.[1]
        const pathIndex =
          path !== undefined ? (pathsWithOrderedIds[path.id]?.indexOf(animalShape.id) ?? -1) : -1
        return {
          id: { tag: "AnimalShape", animal_shape: animalShape.id },
          prerequisites:
            pathIndex >= 0
              ? pathIndex === 0
                ? database.animalShapePaths
                    .filter(
                      ([id]) =>
                        id !== animalShape.path.id && pathsWithOrderedIds[id]?.[0] !== undefined,
                    )
                    .map(([id]) => ({
                      level: 1,
                      prerequisite: {
                        tag: "Single",
                        single: {
                          tag: "Activatable",
                          activatable: {
                            id: entryId,
                            active: false,
                            options: [
                              { tag: "AnimalShape", animal_shape: pathsWithOrderedIds[id]![0]! },
                            ],
                          },
                        },
                      },
                    }))
                : [
                    {
                      level: 1,
                      prerequisite: {
                        tag: "Single",
                        single: {
                          tag: "Activatable",
                          activatable: {
                            id: entryId,
                            active: true,
                            options: [
                              {
                                tag: "AnimalShape",
                                animal_shape: pathsWithOrderedIds[path!.id]![pathIndex - 1]!,
                              },
                            ],
                          },
                        },
                      },
                    },
                  ]
              : undefined,
          volume: size?.volume,
          ap_value: size?.ap_value,
          translations: mapObject(animalShape.translations, (t10n, lang) => ({
            name:
              path?.translations[lang] !== undefined
                ? `${t10n.name} (${path.translations[lang]!.name})`
                : t10n.name,
          })),
        }
      })
    }

    case "ArcaneBardTraditions":
      return database.arcaneBardTraditions.map(([_, arcaneBardTradition]) => ({
        id: { tag: "ArcaneBardTradition", arcane_bard_tradition: arcaneBardTradition.id },
        prerequisites: arcaneBardTradition.prerequisites.map(p => ({
          level: 1,
          prerequisite: p,
        })),
        translations: mapObject(arcaneBardTradition.translations, t10n => ({
          name: t10n.name,
        })),
      }))

    case "ArcaneDancerTraditions":
      return database.arcaneDancerTraditions.map(([_, arcaneDancerTradition]) => ({
        id: { tag: "ArcaneDancerTradition", arcane_dancer_tradition: arcaneDancerTradition.id },
        prerequisites: arcaneDancerTradition.prerequisites.map(p => ({
          level: 1,
          prerequisite: p,
        })),
        translations: mapObject(arcaneDancerTradition.translations, t10n => ({
          name: t10n.name,
        })),
      }))

    case "SexPractices":
      return database.sexPractices.map(([_, sexPractice]) => ({
        id: { tag: "SexPractice", sex_practice: sexPractice.id },
        src: sexPractice.src,
        translations: mapObject(sexPractice.translations, t10n => ({
          name: t10n.name,
        })),
      }))

    case "Races":
      return database.races.map(([_, race]) => ({
        id: { tag: "Race", race: race.id },
        src: race.src,
        translations: mapObject(race.translations, t10n => ({
          name: t10n.name,
        })),
      }))

    case "Cultures":
      return database.cultures.map(([_, culture]) => ({
        id: { tag: "Culture", culture: culture.id },
        src: culture.src,
        translations: mapObject(culture.translations, t10n => ({
          name: t10n.name,
        })),
      }))

    case "RacesAndCultures":
      return [
        ...database.races.map(
          ([_, race]): ResolvedSelectOption => ({
            id: { tag: "Race", race: race.id },
            src: race.src,
            translations: mapObject(race.translations, t10n => ({
              name: t10n.name,
            })),
          }),
        ),
        ...database.cultures.map(
          ([_, culture]): ResolvedSelectOption => ({
            id: { tag: "Culture", culture: culture.id },
            src: culture.src,
            translations: mapObject(culture.translations, t10n => ({
              name: t10n.name,
            })),
          }),
        ),
      ]

    case "BlessedTraditions": {
      const getPrerequisites = (
        blessedTradition: BlessedTradition,
      ): GeneralPrerequisites | undefined => {
        if (
          selectOptionCategory.blessed_traditions.require_principles &&
          blessedTradition.associated_principles_id !== undefined
        ) {
          return [
            {
              level: 1,
              prerequisite: {
                tag: "Single",
                single: {
                  tag: "Activatable",
                  activatable: {
                    id: { tag: "Disadvantage", disadvantage: PRINCIPLES_ID },
                    active: true,
                    options: [
                      { tag: "General", general: blessedTradition.associated_principles_id },
                    ],
                  },
                },
              },
            },
          ]
        }
      }

      return database.blessedTraditions.map(([_, blessedTradition]) => ({
        id: { tag: "BlessedTradition", blessed_tradition: blessedTradition.id },
        prerequisites: getPrerequisites(blessedTradition),
        src: blessedTradition.src,
        translations: mapObject(blessedTradition.translations, t10n => ({
          name: t10n.name,
        })),
      }))
    }

    case "Elements": {
      const mapToResolvedSelectOption = ([_, element]: [
        number,
        Element,
      ]): ResolvedSelectOption => ({
        id: { tag: "Element", element: element.id },
        translations: mapObject(element.translations, t10n => ({
          name: t10n.name,
        })),
      })

      if (selectOptionCategory.elements.specific) {
        return database.elements
          .filter(([id]) =>
            selectOptionCategory.elements.specific!.some(ref => ref.id.element === id),
          )
          .map(mapToResolvedSelectOption)
      }

      return database.elements.map(mapToResolvedSelectOption)
    }

    case "Properties": {
      const getPrerequisites = (property: Property): GeneralPrerequisites | undefined => {
        if (
          selectOptionCategory.properties.require_knowledge !== undefined ||
          selectOptionCategory.properties.require_minimum_spellworks_on !== undefined
        ) {
          const knowledgePrerequisite: PrerequisiteForLevel<GeneralPrerequisiteGroup> | undefined =
            selectOptionCategory.properties.require_knowledge !== undefined
              ? {
                  level: 1,
                  prerequisite: {
                    tag: "Single",
                    single: {
                      tag: "Activatable",
                      activatable: {
                        id: {
                          tag: "MagicalSpecialAbility",
                          magical_special_ability: PROPERTY_KNOWLEDGE_ID,
                        },
                        active: true,
                        options: [{ tag: "Property", property: property.id }],
                      },
                    },
                  },
                }
              : undefined

          const minimumSpellworksPrerequisite:
            | PrerequisiteForLevel<GeneralPrerequisiteGroup>
            | undefined =
            selectOptionCategory.properties.require_minimum_spellworks_on !== undefined
              ? {
                  level: 1,
                  prerequisite: {
                    tag: "Single",
                    single: {
                      tag: "RatedMinimumNumber",
                      rated_minimum_number: {
                        number:
                          selectOptionCategory.properties.require_minimum_spellworks_on.number,
                        value: selectOptionCategory.properties.require_minimum_spellworks_on.rating,
                        targets: {
                          tag: "Spellworks",
                          spellworks: {
                            id: { tag: "Property", property: property.id },
                          },
                        },
                      },
                    },
                  },
                }
              : undefined
          return [knowledgePrerequisite, minimumSpellworksPrerequisite].filter(isNotNullish)
        }
      }

      return database.properties.map(([_, property]) => ({
        id: { tag: "Property", property: property.id },
        prerequisites: getPrerequisites(property),
        translations: mapObject(property.translations, t10n => ({
          name: t10n.name,
        })),
      }))
    }

    case "Aspects": {
      const getPrerequisites = (aspect: Aspect): GeneralPrerequisites | undefined => {
        if (
          selectOptionCategory.aspects.require_knowledge !== undefined ||
          selectOptionCategory.aspects.require_minimum_liturgies_on !== undefined
        ) {
          const knowledgePrerequisite: PrerequisiteForLevel<GeneralPrerequisiteGroup> | undefined =
            selectOptionCategory.aspects.require_knowledge !== undefined
              ? {
                  level: 1,
                  prerequisite: {
                    tag: "Single",
                    single: {
                      tag: "Activatable",
                      activatable: {
                        id: {
                          tag: "KarmaSpecialAbility",
                          karma_special_ability: ASPECT_KNOWLEDGE_ID,
                        },
                        active: true,
                        options: [{ tag: "Property", property: aspect.id }],
                      },
                    },
                  },
                }
              : undefined

          const minimumSpellworksPrerequisite:
            | PrerequisiteForLevel<GeneralPrerequisiteGroup>
            | undefined =
            selectOptionCategory.aspects.require_minimum_liturgies_on !== undefined
              ? {
                  level: 1,
                  prerequisite: {
                    tag: "Single",
                    single: {
                      tag: "RatedMinimumNumber",
                      rated_minimum_number: {
                        number: selectOptionCategory.aspects.require_minimum_liturgies_on.number,
                        value: selectOptionCategory.aspects.require_minimum_liturgies_on.rating,
                        targets: {
                          tag: "Liturgies",
                          liturgies: {
                            id: { tag: "Aspect", aspect: aspect.id },
                          },
                        },
                      },
                    },
                  },
                }
              : undefined
          return [knowledgePrerequisite, minimumSpellworksPrerequisite].filter(isNotNullish)
        }
      }

      if (selectOptionCategory.aspects.use_master_of_suffix_as_name === true) {
        return database.aspects
          .map(
            ([_, aspect]): ResolvedSelectOption => ({
              id: { tag: "Aspect", aspect: aspect.id },
              prerequisites: getPrerequisites(aspect),
              translations: mapObject(aspect.translations, t10n =>
                t10n.master_of_aspect_suffix === undefined
                  ? undefined
                  : {
                      name: t10n.master_of_aspect_suffix,
                    },
              ),
            }),
          )
          .filter(value => Object.keys(value.translations).length > 0)
      }

      return database.aspects.map(([_, aspect]) => ({
        id: { tag: "Aspect", aspect: aspect.id },
        prerequisites: getPrerequisites(aspect),
        translations: mapObject(aspect.translations, t10n => ({
          name: t10n.name,
        })),
      }))
    }

    case "Diseases":
      return database.diseases.map(([_, disease]) => ({
        id: { tag: "Disease", disease: disease.id },
        ap_value:
          selectOptionCategory.diseases.use_half_level_as_ap_value === true
            ? Math.round(disease.level / 3)
            : disease.level,
        src: disease.src,
        translations: mapObject(disease.translations, t10n => ({
          name: t10n.name,
        })),
      }))

    case "Poisons": {
      const getLevel = (poison: Poison): number => {
        switch (poison.source_type.tag) {
          case "AnimalVenom":
            return poison.source_type.animal_venom.level
          case "AlchemicalPoison":
            return 6
          case "MineralPoison":
            return poison.source_type.mineral_poison.level
          case "PlantPoison":
            return poison.source_type.plant_poison.level
          case "DemonicPoison":
            switch (poison.source_type.demonic_poison.level.tag) {
              case "Constant":
                return poison.source_type.demonic_poison.level.constant.value
              case "QualityLevel":
                return 6
              default:
                return assertExhaustive(poison.source_type.demonic_poison.level)
            }
          default:
            return assertExhaustive(poison.source_type)
        }
      }

      return database.poisons.map(([_, poison]) => ({
        id: { tag: "Poison", poison: poison.id },
        ap_value:
          selectOptionCategory.poisons.use_half_level_as_ap_value === true
            ? Math.round(getLevel(poison) / 3)
            : getLevel(poison),
        src: poison.src,
        translations: mapObject(poison.translations, t10n => ({
          name: t10n.name,
        })),
      }))
    }

    case "Languages": {
      const getPrerequisites = (language: Language): GeneralPrerequisites | undefined => {
        if (selectOptionCategory.languages.prerequisites !== undefined) {
          return selectOptionCategory.languages.prerequisites.map(config => ({
            level: 1,
            prerequisite: {
              tag: "Single",
              single: {
                tag: "Activatable",
                activatable: {
                  id: config.select_option.id,
                  active: config.select_option.active,
                  level: config.select_option.level,
                  options: [{ tag: "Language", language: language.id }],
                },
              },
            },
          }))
        }
      }

      return database.languages.map(([_, language]) => ({
        id: { tag: "Language", language: language.id },
        prerequisites: getPrerequisites(language),
        src: language.src,
        translations: mapObject(language.translations, t10n => ({
          name: t10n.name,
        })),
      }))
    }

    case "Skills": {
      const apValueGen = selectOptionCategory.skills.ap_value

      return selectOptionCategory.skills.categories.flatMap(category => {
        switch (category.tag) {
          case "Skills":
            return database.skills
              .filter(([_, skill]) => {
                const matchesGroupRequirement =
                  category.skills.groups === undefined ||
                  category.skills.groups.some(
                    ref => ref.id.skill_group === skill.group.id.skill_group,
                  )

                const matchesIdRequirement =
                  category.skills.specific === undefined ||
                  matchesSpecificSkillishIdList<SkillIdentifier>(
                    { tag: "Skill", skill: skill.id },
                    category.skills.specific,
                    equalsSkillishIdGroup,
                  )

                return matchesGroupRequirement && matchesIdRequirement
              })
              .map(([_, skill]): ResolvedSelectOption => {
                const id: SkillIdentifier = { tag: "Skill", skill: skill.id }
                return {
                  id,
                  skill_uses: category.skills.skill_uses?.map(use =>
                    convertSkillApplicationOrUse(id, use),
                  ),
                  skill_applications: category.skills.skill_applications?.map(use =>
                    convertSkillApplicationOrUse(id, use),
                  ),
                  prerequisites: getSkillishPrerequisites(category.skills.prerequisites, id),
                  ap_value: getApValueForSkillish(
                    category.skills.ap_value ?? apValueGen,
                    id,
                    skill.improvement_cost,
                  ),
                  src: skill.src,
                  translations: mapObject(skill.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          case "Spells":
            return database.spells
              .filter(
                ([_, spell]) =>
                  category.spells.specific === undefined ||
                  matchesSpecificSkillishIdList<SpellIdentifier>(
                    { tag: "Spell", spell: spell.id },
                    category.spells.specific,
                    equalsSkillishIdGroup,
                  ),
              )
              .map(([_, spell]): ResolvedSelectOption => {
                const id: SpellIdentifier = { tag: "Spell", spell: spell.id }
                return {
                  id,
                  prerequisites: getSkillishPrerequisites(category.spells.prerequisites, id),
                  ap_value: getApValueForSkillish(apValueGen, id, spell.improvement_cost),
                  src: spell.src,
                  translations: mapObject(spell.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          case "Rituals":
            return database.rituals
              .filter(
                ([_, ritual]) =>
                  category.rituals.specific === undefined ||
                  matchesSpecificSkillishIdList<RitualIdentifier>(
                    { tag: "Ritual", ritual: ritual.id },
                    category.rituals.specific,
                    equalsSkillishIdGroup,
                  ),
              )
              .map(([_, ritual]): ResolvedSelectOption => {
                const id: RitualIdentifier = { tag: "Ritual", ritual: ritual.id }
                return {
                  id,
                  prerequisites: getSkillishPrerequisites(category.rituals.prerequisites, id),
                  ap_value: getApValueForSkillish(apValueGen, id, ritual.improvement_cost),
                  src: ritual.src,
                  translations: mapObject(ritual.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          case "LiturgicalChants":
            return database.liturgicalChants
              .filter(
                ([_, liturgicalChant]) =>
                  category.liturgical_chants.specific === undefined ||
                  matchesSpecificSkillishIdList<LiturgicalChantIdentifier>(
                    { tag: "LiturgicalChant", liturgical_chant: liturgicalChant.id },
                    category.liturgical_chants.specific,
                    equalsSkillishIdGroup,
                  ),
              )
              .map(([_, liturgicalChant]): ResolvedSelectOption => {
                const id: LiturgicalChantIdentifier = {
                  tag: "LiturgicalChant",
                  liturgical_chant: liturgicalChant.id,
                }
                return {
                  id,
                  prerequisites: getSkillishPrerequisites(
                    category.liturgical_chants.prerequisites,
                    id,
                  ),
                  ap_value: getApValueForSkillish(apValueGen, id, liturgicalChant.improvement_cost),
                  src: liturgicalChant.src,
                  translations: mapObject(liturgicalChant.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          case "Ceremonies":
            return database.ceremonies
              .filter(
                ([_, ceremony]) =>
                  category.ceremonies.specific === undefined ||
                  matchesSpecificSkillishIdList<CeremonyIdentifier>(
                    { tag: "Ceremony", ceremony: ceremony.id },
                    category.ceremonies.specific,
                    equalsSkillishIdGroup,
                  ),
              )
              .map(([_, ceremony]): ResolvedSelectOption => {
                const id: CeremonyIdentifier = { tag: "Ceremony", ceremony: ceremony.id }
                return {
                  id,
                  prerequisites: getSkillishPrerequisites(category.ceremonies.prerequisites, id),
                  ap_value: getApValueForSkillish(apValueGen, id, ceremony.improvement_cost),
                  src: ceremony.src,
                  translations: mapObject(ceremony.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          default:
            return assertExhaustive(category)
        }
      })
    }

    case "CombatTechniques": {
      const apValueGen = selectOptionCategory.combat_techniques.ap_value

      return selectOptionCategory.combat_techniques.categories.flatMap(category => {
        switch (category.tag) {
          case "CloseCombatTechniques":
            return database.closeCombatTechniques
              .filter(
                ([_, closeCombatTechnique]) =>
                  category.close_combat_techniques.specific === undefined ||
                  matchesSpecificSkillishIdList<CloseCombatTechniqueIdentifier>(
                    {
                      tag: "CloseCombatTechnique",
                      close_combat_technique: closeCombatTechnique.id,
                    },
                    category.close_combat_techniques.specific,
                    equalsSkillishIdGroup,
                  ),
              )
              .map(([_, closeCombatTechnique]): ResolvedSelectOption => {
                const id: CloseCombatTechniqueIdentifier = {
                  tag: "CloseCombatTechnique",
                  close_combat_technique: closeCombatTechnique.id,
                }
                return {
                  id,
                  prerequisites: getSkillishPrerequisites(
                    category.close_combat_techniques.prerequisites,
                    id,
                  ),
                  ap_value: getApValueForSkillish(
                    apValueGen,
                    id,
                    closeCombatTechnique.improvement_cost,
                  ),
                  src: closeCombatTechnique.src,
                  translations: mapObject(closeCombatTechnique.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          case "RangedCombatTechniques":
            return database.rangedCombatTechniques
              .filter(
                ([_, rangedCombatTechnique]) =>
                  category.ranged_combat_techniques.specific === undefined ||
                  matchesSpecificSkillishIdList<RangedCombatTechniqueIdentifier>(
                    {
                      tag: "RangedCombatTechnique",
                      ranged_combat_technique: rangedCombatTechnique.id,
                    },
                    category.ranged_combat_techniques.specific,
                    equalsSkillishIdGroup,
                  ),
              )
              .map(([_, rangedCombatTechnique]): ResolvedSelectOption => {
                const id: RangedCombatTechniqueIdentifier = {
                  tag: "RangedCombatTechnique",
                  ranged_combat_technique: rangedCombatTechnique.id,
                }
                return {
                  id,
                  prerequisites: getSkillishPrerequisites(
                    category.ranged_combat_techniques.prerequisites,
                    id,
                  ),
                  ap_value: getApValueForSkillish(
                    apValueGen,
                    id,
                    rangedCombatTechnique.improvement_cost,
                  ),
                  src: rangedCombatTechnique.src,
                  translations: mapObject(rangedCombatTechnique.translations, t10n => ({
                    name: t10n.name,
                  })),
                }
              })
          default:
            return assertExhaustive(category)
        }
      })
    }

    case "TargetCategories": {
      const mapToResolvedSelectOption = (
        targetCategory: TargetCategory,
        specificTargetCategory?: SpecificTargetCategory,
      ): ResolvedSelectOption => ({
        id: { tag: "TargetCategory", target_category: targetCategory.id },
        volume: specificTargetCategory?.volume,
        translations: mapObject(targetCategory.translations, t10n => ({
          name: t10n.name,
        })),
      })

      if (selectOptionCategory.target_categories.list) {
        return database.targetCategories
          .filter(([id]) =>
            selectOptionCategory.target_categories.list!.some(ref => ref.id.target_category === id),
          )
          .map(([id, targetCategory]) =>
            mapToResolvedSelectOption(
              targetCategory,
              selectOptionCategory.target_categories.list!.find(
                ref => ref.id.target_category === id,
              ),
            ),
          )
      }

      return database.targetCategories.map(p => mapToResolvedSelectOption(p[1]))
    }

    default:
      return assertExhaustive(selectOptionCategory)
  }
}

const joinLocaleMaps = <T, U, V>(
  a: LocaleMap<T>,
  b: LocaleMap<U>,
  join: (a?: T, b?: U) => V,
): LocaleMap<NonNullable<V>> => {
  const combinedLocaleMap: LocaleMap<NonNullable<V>> = {}
  for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const newValue = join(a[key], b[key])
    if (newValue != null) {
      combinedLocaleMap[key] = newValue
    }
  }
  return combinedLocaleMap
}

const getExplicitSelectOptions = (
  explicitSelectOptions: ExplicitSelectOption[],
  database: ValidResults,
): ResolvedSelectOption[] =>
  explicitSelectOptions
    .map((explicitSelectOption): ResolvedSelectOption | undefined => {
      switch (explicitSelectOption.tag) {
        case "General":
          return {
            ...explicitSelectOption.general,
            id: { tag: "General", general: explicitSelectOption.general.id },
          }
        case "Skill": {
          const skill = database.skills.find(p => p[0] === explicitSelectOption.skill.id.skill)?.[1]
          if (skill === undefined) {
            return undefined
          }
          const id: SkillIdentifier = { tag: "Skill", skill: explicitSelectOption.skill.id.skill }
          return {
            ...explicitSelectOption.skill,
            id,
            skill_applications: explicitSelectOption.skill.skill_applications?.map(use =>
              convertSkillApplicationOrUse(id, use),
            ),
            skill_uses: explicitSelectOption.skill.skill_uses?.map(use =>
              convertSkillApplicationOrUse(id, use),
            ),
            translations: joinLocaleMaps(
              explicitSelectOption.skill.translations ?? {},
              skill.translations,
              (explicit, base) =>
                base === undefined ? undefined : { ...explicit, name: base.name },
            ),
          }
        }
        case "CombatTechnique":
          switch (explicitSelectOption.combat_technique.id.tag) {
            case "CloseCombatTechnique": {
              const id = explicitSelectOption.combat_technique.id.close_combat_technique
              const closeCombatTechnique = database.closeCombatTechniques.find(
                p => p[0] === id,
              )?.[1]
              if (closeCombatTechnique === undefined) {
                return undefined
              }
              return {
                ...explicitSelectOption.combat_technique,
                id: { tag: "CloseCombatTechnique", close_combat_technique: id },
                translations: joinLocaleMaps(
                  explicitSelectOption.combat_technique.translations ?? {},
                  closeCombatTechnique.translations,
                  (explicit, base) =>
                    base === undefined ? undefined : { ...explicit, name: base.name },
                ),
              }
            }
            case "RangedCombatTechnique": {
              const id = explicitSelectOption.combat_technique.id.ranged_combat_technique
              const rangedCombatTechnique = database.rangedCombatTechniques.find(
                p => p[0] === id,
              )?.[1]
              if (rangedCombatTechnique === undefined) {
                return undefined
              }
              return {
                ...explicitSelectOption.combat_technique,
                id: { tag: "RangedCombatTechnique", ranged_combat_technique: id },
                translations: joinLocaleMaps(
                  explicitSelectOption.combat_technique.translations ?? {},
                  rangedCombatTechnique.translations,
                  (explicit, base) =>
                    base === undefined ? undefined : { ...explicit, name: base.name },
                ),
              }
            }
            default:
              return assertExhaustive(explicitSelectOption.combat_technique.id)
          }
        default:
          return assertExhaustive(explicitSelectOption)
      }
    })
    .filter(isNotNullish)

const getSelectOptions = (
  selectOptions: SelectOptions,
  id: ActivatableIdentifier,
  database: ValidResults,
): ResolvedSelectOption[] => [
  ...(selectOptions.derived === undefined
    ? []
    : getDerivedSelectOptions(selectOptions.derived, id, database)),
  ...(selectOptions.explicit === undefined
    ? []
    : getExplicitSelectOptions(selectOptions.explicit, database)),
]

const getSelectOptionsForResults = (
  database: ValidResults,
  idTag: ActivatableIdentifier["tag"],
  results: [id: number, data: { select_options?: SelectOptions }][],
) =>
  results.reduce<{
    [id: number]: ResolvedSelectOption[]
  }>((acc, [id, data]) => {
    const options = getSelectOptions(
      data.select_options ?? {},
      (() => {
        switch (idTag) {
          case "Advantage":
            return { tag: "Advantage", advantage: id }
          case "Disadvantage":
            return { tag: "Disadvantage", disadvantage: id }
          case "GeneralSpecialAbility":
            return { tag: "GeneralSpecialAbility", general_special_ability: id }
          case "FatePointSpecialAbility":
            return { tag: "FatePointSpecialAbility", fate_point_special_ability: id }
          case "CombatSpecialAbility":
            return { tag: "CombatSpecialAbility", combat_special_ability: id }
          case "MagicalSpecialAbility":
            return { tag: "MagicalSpecialAbility", magical_special_ability: id }
          case "StaffEnchantment":
            return { tag: "StaffEnchantment", staff_enchantment: id }
          case "FamiliarSpecialAbility":
            return { tag: "FamiliarSpecialAbility", familiar_special_ability: id }
          case "KarmaSpecialAbility":
            return { tag: "KarmaSpecialAbility", karma_special_ability: id }
          case "ProtectiveWardingCircleSpecialAbility":
            return {
              tag: "ProtectiveWardingCircleSpecialAbility",
              protective_warding_circle_special_ability: id,
            }
          case "CombatStyleSpecialAbility":
            return { tag: "CombatStyleSpecialAbility", combat_style_special_ability: id }
          case "AdvancedCombatSpecialAbility":
            return { tag: "AdvancedCombatSpecialAbility", advanced_combat_special_ability: id }
          case "CommandSpecialAbility":
            return { tag: "CommandSpecialAbility", command_special_ability: id }
          case "MagicStyleSpecialAbility":
            return { tag: "MagicStyleSpecialAbility", magic_style_special_ability: id }
          case "AdvancedMagicalSpecialAbility":
            return { tag: "AdvancedMagicalSpecialAbility", advanced_magical_special_ability: id }
          case "SpellSwordEnchantment":
            return { tag: "SpellSwordEnchantment", spell_sword_enchantment: id }
          case "DaggerRitual":
            return { tag: "DaggerRitual", dagger_ritual: id }
          case "InstrumentEnchantment":
            return { tag: "InstrumentEnchantment", instrument_enchantment: id }
          case "AttireEnchantment":
            return { tag: "AttireEnchantment", attire_enchantment: id }
          case "OrbEnchantment":
            return { tag: "OrbEnchantment", orb_enchantment: id }
          case "WandEnchantment":
            return { tag: "WandEnchantment", wand_enchantment: id }
          case "BrawlingSpecialAbility":
            return { tag: "BrawlingSpecialAbility", brawling_special_ability: id }
          case "AncestorGlyph":
            return { tag: "AncestorGlyph", ancestor_glyph: id }
          case "CeremonialItemSpecialAbility":
            return { tag: "CeremonialItemSpecialAbility", ceremonial_item_special_ability: id }
          case "Sermon":
            return { tag: "Sermon", sermon: id }
          case "LiturgicalStyleSpecialAbility":
            return { tag: "LiturgicalStyleSpecialAbility", liturgical_style_special_ability: id }
          case "AdvancedKarmaSpecialAbility":
            return { tag: "AdvancedKarmaSpecialAbility", advanced_karma_special_ability: id }
          case "Vision":
            return { tag: "Vision", vision: id }
          case "MagicalTradition":
            return { tag: "MagicalTradition", magical_tradition: id }
          case "BlessedTradition":
            return { tag: "BlessedTradition", blessed_tradition: id }
          case "PactGift":
            return { tag: "PactGift", pact_gift: id }
          case "SikaryanDrainSpecialAbility":
            return { tag: "SikaryanDrainSpecialAbility", sikaryan_drain_special_ability: id }
          case "VampiricGift":
            return { tag: "VampiricGift", vampiric_gift: id }
          case "LycantropicGift":
            return { tag: "LycantropicGift", lycantropic_gift: id }
          case "SkillStyleSpecialAbility":
            return { tag: "SkillStyleSpecialAbility", skill_style_special_ability: id }
          case "AdvancedSkillSpecialAbility":
            return { tag: "AdvancedSkillSpecialAbility", advanced_skill_special_ability: id }
          case "ArcaneOrbEnchantment":
            return { tag: "ArcaneOrbEnchantment", arcane_orb_enchantment: id }
          case "CauldronEnchantment":
            return { tag: "CauldronEnchantment", cauldron_enchantment: id }
          case "FoolsHatEnchantment":
            return { tag: "FoolsHatEnchantment", fools_hat_enchantment: id }
          case "ToyEnchantment":
            return { tag: "ToyEnchantment", toy_enchantment: id }
          case "BowlEnchantment":
            return { tag: "BowlEnchantment", bowl_enchantment: id }
          case "FatePointSexSpecialAbility":
            return { tag: "FatePointSexSpecialAbility", fate_point_sex_special_ability: id }
          case "SexSpecialAbility":
            return { tag: "SexSpecialAbility", sex_special_ability: id }
          case "WeaponEnchantment":
            return { tag: "WeaponEnchantment", weapon_enchantment: id }
          case "SickleRitual":
            return { tag: "SickleRitual", sickle_ritual: id }
          case "RingEnchantment":
            return { tag: "RingEnchantment", ring_enchantment: id }
          case "ChronicleEnchantment":
            return { tag: "ChronicleEnchantment", chronicle_enchantment: id }
          case "Krallenkettenzauber":
            return { tag: "Krallenkettenzauber", krallenkettenzauber: id }
          case "Trinkhornzauber":
            return { tag: "Trinkhornzauber", trinkhornzauber: id }
          case "MagicalSign":
            return { tag: "MagicalSign", magical_sign: id }
          default:
            return assertExhaustive(idTag)
        }
      })(),
      database,
    )
    if (options.length > 0) {
      acc[id] = options
    }
    return acc
  }, {})

export type ActivatableSelectOptionsCacheKeys = {
  [K in keyof TypeMap]: TypeMap[K] extends { select_options?: SelectOptions } ? K : never
}[keyof TypeMap]

export type ActivatableSelectOptionsCache = {
  [K in ActivatableSelectOptionsCacheKeys]: {
    [id: number]: ResolvedSelectOption[]
  }
}

// prettier-ignore
export const config: CacheConfig<ActivatableSelectOptionsCache> = {
  builder(database) {
    return {
      advancedCombatSpecialAbilities: getSelectOptionsForResults(database, "AdvancedCombatSpecialAbility", database.advancedCombatSpecialAbilities),
      advancedKarmaSpecialAbilities: getSelectOptionsForResults(database, "AdvancedKarmaSpecialAbility", database.advancedKarmaSpecialAbilities),
      advancedMagicalSpecialAbilities: getSelectOptionsForResults(database, "AdvancedMagicalSpecialAbility", database.advancedMagicalSpecialAbilities),
      advancedSkillSpecialAbilities: getSelectOptionsForResults(database, "AdvancedSkillSpecialAbility", database.advancedSkillSpecialAbilities),
      advantages: getSelectOptionsForResults(database, "Advantage", database.advantages),
      ancestorGlyphs: getSelectOptionsForResults(database, "AncestorGlyph", database.ancestorGlyphs),
      arcaneOrbEnchantments: getSelectOptionsForResults(database, "ArcaneOrbEnchantment", database.arcaneOrbEnchantments),
      attireEnchantments: getSelectOptionsForResults(database, "AttireEnchantment", database.attireEnchantments),
      blessedTraditions: getSelectOptionsForResults(database, "BlessedTradition", database.blessedTraditions),
      bowlEnchantments: getSelectOptionsForResults(database, "BowlEnchantment", database.bowlEnchantments),
      brawlingSpecialAbilities: getSelectOptionsForResults(database, "BrawlingSpecialAbility", database.brawlingSpecialAbilities),
      cauldronEnchantments: getSelectOptionsForResults(database, "CauldronEnchantment", database.cauldronEnchantments),
      ceremonialItemSpecialAbilities: getSelectOptionsForResults(database, "CeremonialItemSpecialAbility", database.ceremonialItemSpecialAbilities),
      chronicleEnchantments: getSelectOptionsForResults(database, "ChronicleEnchantment", database.chronicleEnchantments),
      combatSpecialAbilities: getSelectOptionsForResults(database, "CombatSpecialAbility", database.combatSpecialAbilities),
      combatStyleSpecialAbilities: getSelectOptionsForResults(database, "CombatStyleSpecialAbility", database.combatStyleSpecialAbilities),
      commandSpecialAbilities: getSelectOptionsForResults(database, "CommandSpecialAbility", database.commandSpecialAbilities),
      daggerRituals: getSelectOptionsForResults(database, "DaggerRitual", database.daggerRituals),
      disadvantages: getSelectOptionsForResults(database, "Disadvantage", database.disadvantages),
      familiarSpecialAbilities: getSelectOptionsForResults(database, "FamiliarSpecialAbility", database.familiarSpecialAbilities),
      fatePointSexSpecialAbilities: getSelectOptionsForResults(database, "FatePointSexSpecialAbility", database.fatePointSexSpecialAbilities),
      fatePointSpecialAbilities: getSelectOptionsForResults(database, "FatePointSpecialAbility", database.fatePointSpecialAbilities),
      foolsHatEnchantments: getSelectOptionsForResults(database, "FoolsHatEnchantment", database.foolsHatEnchantments),
      generalSpecialAbilities: getSelectOptionsForResults(database, "GeneralSpecialAbility", database.generalSpecialAbilities),
      instrumentEnchantments: getSelectOptionsForResults(database, "InstrumentEnchantment", database.instrumentEnchantments),
      karmaSpecialAbilities: getSelectOptionsForResults(database, "KarmaSpecialAbility", database.karmaSpecialAbilities),
      krallenkettenzauber: getSelectOptionsForResults(database, "Krallenkettenzauber", database.krallenkettenzauber),
      liturgicalStyleSpecialAbilities: getSelectOptionsForResults(database, "LiturgicalStyleSpecialAbility", database.liturgicalStyleSpecialAbilities),
      lycantropicGifts: getSelectOptionsForResults(database, "LycantropicGift", database.lycantropicGifts),
      magicalSpecialAbilities: getSelectOptionsForResults(database, "MagicalSpecialAbility", database.magicalSpecialAbilities),
      magicalTraditions: getSelectOptionsForResults(database, "MagicalTradition", database.magicalTraditions),
      magicStyleSpecialAbilities: getSelectOptionsForResults(database, "MagicStyleSpecialAbility", database.magicStyleSpecialAbilities),
      orbEnchantments: getSelectOptionsForResults(database, "OrbEnchantment", database.orbEnchantments),
      pactGifts: getSelectOptionsForResults(database, "PactGift", database.pactGifts),
      protectiveWardingCircleSpecialAbilities: getSelectOptionsForResults(database, "ProtectiveWardingCircleSpecialAbility", database.protectiveWardingCircleSpecialAbilities),
      ringEnchantments: getSelectOptionsForResults(database, "RingEnchantment", database.ringEnchantments),
      sermons: getSelectOptionsForResults(database, "Sermon", database.sermons),
      sexSpecialAbilities: getSelectOptionsForResults(database, "SexSpecialAbility", database.sexSpecialAbilities),
      sickleRituals: getSelectOptionsForResults(database, "SickleRitual", database.sickleRituals),
      sikaryanDrainSpecialAbilities: getSelectOptionsForResults(database, "SikaryanDrainSpecialAbility", database.sikaryanDrainSpecialAbilities),
      staffEnchantments: getSelectOptionsForResults(database, "StaffEnchantment", database.staffEnchantments),
      skillStyleSpecialAbilities: getSelectOptionsForResults(database, "SkillStyleSpecialAbility", database.skillStyleSpecialAbilities),
      spellSwordEnchantments: getSelectOptionsForResults(database, "SpellSwordEnchantment", database.spellSwordEnchantments),
      toyEnchantments: getSelectOptionsForResults(database, "ToyEnchantment", database.toyEnchantments),
      trinkhornzauber: getSelectOptionsForResults(database, "Trinkhornzauber", database.trinkhornzauber),
      vampiricGifts: getSelectOptionsForResults(database, "VampiricGift", database.vampiricGifts),
      visions: getSelectOptionsForResults(database, "Vision", database.visions),
      wandEnchantments: getSelectOptionsForResults(database, "WandEnchantment", database.wandEnchantments),
      weaponEnchantments: getSelectOptionsForResults(database, "WeaponEnchantment", database.weaponEnchantments),
    }
  },
}
