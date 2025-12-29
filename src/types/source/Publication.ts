import {
  Boolean,
  Date,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"
import { PublicationPrerequisites } from "../_Prerequisite.js"

export const Publication = Entity(import.meta.url, {
  name: "Publication",
  namePlural: "Publications",
  comment:
    "A (usually physical) self-contained document with rules and crunch elements relevant for character creation, character development, and game play.",
  type: () =>
    Object({
      category: Required({
        comment: "The publication category.",
        type: IncludeIdentifier(PublicationCategory),
      }),
      containsAdultContent: Required({
        comment: "If the publication may contain adult content.",
        type: Boolean(),
      }),
      isMissingImplementation: Required({
        comment:
          "If the publication is not (fully) implemented and thus needs to be excluded from stable releases.",
        type: Boolean(),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(PublicationPrerequisites),
      }),
      translations: NestedTranslationMap(
        Required,
        "Publication",
        Object({
          publisherId: Optional({
            comment: "The publisher’s publication identifier.",
            type: String({ minLength: 1 }),
          }),
          name: Required({
            comment: "The publication’s name.",
            type: String({ minLength: 1 }),
          }),
          abbreviation: Required({
            comment: "The publication’s abbreviation.",
            type: String({ minLength: 1 }),
          }),
          release_date: Optional({
            comment: "The publication’s release date.",
            type: Date(),
          }),
          isMissingImplementation: Required({
            comment:
              "If this publication translation is not (fully) implemented and thus needs to be excluded from stable releases.",
            type: Boolean(),
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

export const PublicationCategory = Enum(import.meta.url, {
  name: "PublicationCategory",
  values: () => ({
    CoreRules: EnumCase({ type: null }),
    ExpansionRules: EnumCase({ type: null }),
    Sourcebook: EnumCase({ type: null }),
    RegionalSourcebook: EnumCase({ type: null }),
    Adventure: EnumCase({ type: null }),
  }),
})
