import { Entity, Integer, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const ExperienceLevel = Entity(import.meta.url, {
  name: "ExperienceLevel",
  namePlural: "ExperienceLevels",
  comment: "Adventure Points and maximum values at hero creation.",
  type: () =>
    Object({
      adventure_points: Required({
        comment: "The AP value you get.",
        type: Integer(),
      }),
      max_attribute_value: Required({
        comment: "The highest possible attribute value.",
        type: Integer(),
      }),
      max_skill_rating: Required({
        comment: "The highest possible skill rating.",
        type: Integer(),
      }),
      max_combat_technique_rating: Required({
        comment: "The highest possible combat technique rating.",
        type: Integer(),
      }),
      max_attribute_total: Required({
        comment: "The limit for the sum of all attribute values.",
        type: Integer(),
      }),
      max_number_of_spells_liturgical_chants: Required({
        comment: "The maximum of spells/chants you can activate.",
        type: Integer(),
      }),
      max_number_of_unfamiliar_spells: Required({
        comment: "The maximum of spells of an unfamiliar tradition you can activate.",
        type: Integer(),
      }),
      translations: NestedTranslationMap(
        Required,
        "ExperienceLevel",
        Object({
          name: Required({
            comment: "The experience level’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
