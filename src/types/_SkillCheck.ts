import { Array, Enum, EnumCase, TypeAlias } from "tsondb/schema/def"
import { AttributeIdentifier } from "./_Identifier.js"

export const SkillCheck = TypeAlias(import.meta.url, {
  name: "SkillCheck",
  comment: "The attributes’ identifiers of the skill check.",
  type: () =>
    Array(AttributeIdentifier(), {
      minItems: 3,
      maxItems: 3,
    }),
})

export const SkillCheckPenalty = Enum(import.meta.url, {
  name: "SkillCheckPenalty",
  comment: "A specific value that represents a penalty for the associated skill check.",
  values: () => ({
    Spirit: EnumCase({ type: null }),
    HalfOfSpirit: EnumCase({ type: null }),
    Toughness: EnumCase({ type: null }),
    HigherOfSpiritAndToughness: EnumCase({ type: null }),
    SummoningDifficulty: EnumCase({ type: null }),
    CreationDifficulty: EnumCase({ type: null }),
  }),
})
