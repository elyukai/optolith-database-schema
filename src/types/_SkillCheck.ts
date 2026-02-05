import * as DB from "tsondb/schema/dsl"
import { AttributeIdentifier } from "./_Identifier.js"

export const SkillCheck = DB.TypeAlias(import.meta.url, {
  name: "SkillCheck",
  comment: "The attributes’ identifiers of the skill check.",
  type: () =>
    DB.Array(AttributeIdentifier(), {
      minItems: 3,
      maxItems: 3,
    }),
})

export const SkillCheckPenalty = DB.Enum(import.meta.url, {
  name: "SkillCheckPenalty",
  comment: "A specific value that represents a penalty for the associated skill check.",
  values: () => ({
    Spirit: DB.EnumCase({ type: null }),
    HalfOfSpirit: DB.EnumCase({ type: null }),
    Toughness: DB.EnumCase({ type: null }),
    HigherOfSpiritAndToughness: DB.EnumCase({ type: null }),
    SummoningDifficulty: DB.EnumCase({ type: null }),
    CreationDifficulty: DB.EnumCase({ type: null }),
    Object: DB.EnumCase({ type: null }),
  }),
})
