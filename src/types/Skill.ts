/**
 * @main Skill
 */

import {
  ChildEntities,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { SkillGroupIdentifier, SkillIdentifier } from "./_Identifier.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { SkillCheck } from "./_SkillCheck.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Skill = Entity(import.meta.url, {
  name: "Skill",
  namePlural: "Skills",
  type: () =>
    Object({
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      applications: Required({
        comment:
          "Lists applications for the skill, if any. This does not necessarily include all possible applications. There may also be new applications that could be purchased via certain advantages or special abilities.",
        type: IncludeIdentifier(Applications),
      }),
      encumbrance: Required({
        comment: "Indicates whether encumbrance gives a penalty for checks with the skill.",
        type: IncludeIdentifier(EncumbranceInfluence),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      group: Required({
        comment: "The skill group this skill belongs to.",
        type: SkillGroupIdentifier(),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Skill",
        Object({
          name: Required({
            comment: "The skill’s name.",
            type: String({ minLength: 1 }),
          }),
          applications_input_label: Optional({
            comment:
              "If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty.",
            type: String({ minLength: 1 }),
          }),
          encumbrance_description: Optional({
            comment: `The text listing the certain circumstances in which the encumbrance may count. This text must be used if \`encumbrance\` is set to \`"Maybe"\`, otherwise it is ignored if defined.`,
            type: String({ minLength: 1 }),
          }),
          tools: Optional({
            comment:
              "Mentions any tools from the equipment list that are necessary to employ the skill.",
            type: String({ minLength: 1 }),
          }),
          quality: Required({
            comment: "Gives examples of the effects that various QL might provide.",
            type: String({ minLength: 1 }),
          }),
          failed: Required({
            comment: "Lists examples of results for a failed check.",
            type: String({ minLength: 1 }),
          }),
          critical: Required({
            comment: "Lists examples of results for a critical success.",
            type: String({ minLength: 1 }),
          }),
          botch: Required({
            comment: "Lists examples of results for botches.",
            type: String({ minLength: 1 }),
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
})

export const Applications = TypeAlias(import.meta.url, {
  name: "Applications",
  comment: "The skill’s applications",
  type: () =>
    Object({
      derived: Optional({
        type: IncludeIdentifier(ApplicationCategory),
      }),
      explicit: Required({
        comment: "A list of explicit applications.",
        type: ChildEntities(SkillApplication),
      }),
    }),
})

export const ApplicationCategory = Enum(import.meta.url, {
  name: "ApplicationCategory",
  comment:
    "A category. All available entries from the specified category will be included as separate applications.",
  values: () => ({
    BlessedTraditions: EnumCase({ type: null }),
    Diseases: EnumCase({ type: null }),
    Regions: EnumCase({ type: null }),
  }),
})

export const SkillApplication = Entity(import.meta.url, {
  name: "SkillApplication",
  namePlural: "SkillApplications",
  type: () =>
    Object({
      parent: Required({
        comment: "The skill this application belongs to.",
        type: SkillIdentifier(),
      }),
      translations: NestedTranslationMap(
        Required,
        "SkillApplication",
        Object({
          name: Required({
            comment: "The skill application’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  parentReferenceKey: "parent",
  instanceDisplayName: {},
  uniqueConstraints: [
    [
      { keyPath: "parent" },
      {
        entityMapKeyPath: "translations",
        keyPathInEntityMap: "name",
      },
    ],
  ],
})

export const EncumbranceInfluence = Enum(import.meta.url, {
  name: "EncumbranceInfluence",
  comment: "Indicates whether encumbrance gives a penalty for checks with the skill.",
  values: () => ({
    Yes: EnumCase({ type: null }),
    No: EnumCase({ type: null }),
    Maybe: EnumCase({ type: null }),
  }),
})
