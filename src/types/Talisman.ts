import {
  Array,
  Entity,
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  IncludeIdentifier,
  Integer,
  NestedEntityMap,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { Dice } from "./_Dice.js"
import { BlessedTraditionIdentifier } from "./_Identifier.js"
import { MathOperation } from "./_MathExpression.js"
import { CloseCombatTechnique, RangedCombatTechnique } from "./CombatTechnique.js"
import { GenMeleeWeapon } from "./equipment/item/_MeleeWeapon.js"
import { GenRangedWeapon } from "./equipment/item/_RangedWeapon.js"
import { checkWeaponCombatTechniqueIntegrity } from "./equipment/item/_Weapon.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Talisman = Entity(import.meta.url, {
  name: "Talisman",
  namePlural: "Talismans",
  type: () =>
    Object({
      tradition: Required({
        comment: "The tradition(s) the talisman belongs to.",
        type: Array(BlessedTraditionIdentifier(), { minItems: 1 }),
      }),
      type: Optional({
        comment: "The talisman type, if any.",
        type: IncludeIdentifier(TalismanType),
      }),
      ap_value: Optional({
        comment: "The AP value for the required trade secret, if possible.",
        type: Integer({ minimum: 5, multipleOf: 5 }),
      }),
      meleeUses: Optional({
        comment:
          "A list of stat blocks for each close combat technique this talisman can be used with.",
        type: NestedEntityMap({
          name: "MeleeTalismanUse",
          namePlural: "MeleeTalismanUses",
          secondaryEntity: CloseCombatTechnique,
          type: IncludeIdentifier(TalismanMeleeWeapon),
        }),
      }),
      rangedUses: Optional({
        comment:
          "A list of stat blocks for each ranged combat technique this talisman can be used with.",
        type: NestedEntityMap({
          name: "RangedTalismanUse",
          namePlural: "RangedTalismanUses",
          secondaryEntity: RangedCombatTechnique,
          type: IncludeIdentifier(TalismanRangedWeapon),
        }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Talisman",
        Object({
          name: Required({
            comment: "The talisman’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment: "The effect description.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          activation: Optional({
            comment: "The activation parameters.",
            type: IncludeIdentifier(TalismanActivationTranslation),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
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
  customConstraints: ({ instanceContent, getInstanceById, getDisplayNameWithId }) =>
    checkWeaponCombatTechniqueIntegrity(
      {
        instanceContent: {
          melee_uses: instanceContent.meleeUses,
          ranged_uses: instanceContent.rangedUses,
        },
        getDisplayNameWithId,
        getInstanceById,
      },
      true,
    ),
})

const TalismanMeleeWeapon = TypeAlias(import.meta.url, {
  name: "TalismanMeleeWeapon",
  type: () => GenIncludeIdentifier(GenMeleeWeapon, [IncludeIdentifier(TalismanDamage)]),
})

const TalismanRangedWeapon = TypeAlias(import.meta.url, {
  name: "TalismanRangedWeapon",
  type: () => GenIncludeIdentifier(GenRangedWeapon, [IncludeIdentifier(TalismanDamage)]),
})

const TalismanDamage = TypeAlias(import.meta.url, {
  name: "TalismanDamage",
  type: () => GenIncludeIdentifier(MathOperation, [IncludeIdentifier(TalismanDamageOption)]),
})

const TalismanDamageOption = Enum(import.meta.url, {
  name: "TalismanDamageOption",
  values: () => ({
    Random: EnumCase({ type: IncludeIdentifier(Dice) }),
    Constant: EnumCase({ type: null }),
    QualityLevels: EnumCase({ type: null }),
  }),
})

const TalismanType = Enum(import.meta.url, {
  name: "TalismanType",
  values: () => ({
    MainTalisman: EnumCase({ type: null }),
    Talisman: EnumCase({ type: null }),
    MinorTalisman: EnumCase({ type: null }),
    Regalia: EnumCase({ type: null }),
    PowerfulTalisman: EnumCase({ type: null }),
  }),
})

const TalismanActivationTranslation = TypeAlias(import.meta.url, {
  name: "TalismanActivationTranslation",
  type: () =>
    Object({
      cost: Required({
        comment: "The KP cost.",
        type: Integer({ minimum: 0 }),
      }),
      duration: Required({
        comment: "The duration.",
        type: String({ minLength: 1 }),
      }),
    }),
})
