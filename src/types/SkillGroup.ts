import { Entity, IncludeIdentifier, Object, Required, String } from "tsondb/schema/def"
import { SkillCheck } from "./_SkillCheck.js"
import { NestedTranslationMap } from "./Locale.js"

export const SkillGroup = Entity(import.meta.url, {
  name: "SkillGroup",
  namePlural: "SkillGroups",
  type: () =>
    Object({
      check: Required({
        comment: "The skill group’s skill check attributes",
        type: IncludeIdentifier(SkillCheck),
      }),
      translations: NestedTranslationMap(
        Required,
        "SkillGroup",
        Object({
          name: Required({
            comment: "The skill group’s name.",
            type: String({ minLength: 1 }),
          }),
          longName: Required({
            comment: "The skill group’s long name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
})
