import {
  Array,
  ChildEntities,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { SkillIdentifier } from "./_Identifier.js"
import { NewSkillApplicationOrUseParentIdentifier } from "./_IdentifierGroup.js"

export const NewSkillApplication = Entity(import.meta.url, {
  name: "NewSkillApplication",
  namePlural: "NewSkillApplications",
  comment:
    "Registers new skill applications, which get enabled once the referenced entry is activated. It specifies the skill(s) it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () =>
    Object({
      parent: Required({
        comment: "The entry that enables the new skill application.",
        type: IncludeIdentifier(NewSkillApplicationOrUseParentIdentifier),
      }),
      skills: Required({
        comment: "The skill(s) this application belongs to.",
        type: Array(SkillIdentifier(), { minItems: 1 }),
      }),
      required_skill_rating: Optional({
        comment:
          "If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "NewSkillApplication",
        Object({
          name: Required({
            comment: "The name of the application if different from the activatable entry’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  parentReferenceKey: "parent",
  instanceDisplayName: {},
  instanceDisplayNameCustomizer: ({
    instance,
    instanceDisplayName,
    instanceDisplayNameLocaleId,
    getDisplayNameForInstanceId,
  }) => ({
    name:
      instanceDisplayName.length > 0
        ? instanceDisplayName
        : (getDisplayNameForInstanceId(instance.parent)?.name ?? ""),
    localeId: instanceDisplayNameLocaleId,
  }),
})

export const skill_applications = Required({
  comment:
    "Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: ChildEntities(NewSkillApplication),
})

export const SkillUse = Entity(import.meta.url, {
  name: "SkillUse",
  namePlural: "SkillUses",
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies the skill(s) it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: () =>
    Object({
      parent: Required({
        comment: "The entry that enables the use.",
        type: IncludeIdentifier(NewSkillApplicationOrUseParentIdentifier),
      }),
      skills: Required({
        comment: "The skill(s) this use belongs to.",
        type: Array(SkillIdentifier(), { minItems: 1 }),
      }),
      required_skill_rating: Optional({
        comment:
          "If a use applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "SkillUse",
        Object({
          name: Required({
            comment: "The name of the use if different from the activatable entry’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  parentReferenceKey: "parent",
  instanceDisplayName: {},
  instanceDisplayNameCustomizer: ({
    instance,
    instanceDisplayName,
    instanceDisplayNameLocaleId,
    getDisplayNameForInstanceId,
  }) => ({
    name:
      instanceDisplayName.length > 0
        ? instanceDisplayName
        : (getDisplayNameForInstanceId(instance.parent)?.name ?? ""),
    localeId: instanceDisplayNameLocaleId,
  }),
})

export const skill_uses = Required({
  comment:
    "Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.",
  type: ChildEntities(SkillUse),
})
