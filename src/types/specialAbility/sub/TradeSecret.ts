import {
  Boolean,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { PlainGeneralPrerequisites } from "../../_Prerequisite.js"
import { NestedLocaleMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"

export const TradeSecret = Entity(import.meta.url, {
  name: "TradeSecret",
  namePlural: "TradeSecrets",
  type: () =>
    Object({
      ap_value: Optional({
        comment: "The trade secret’s adventure point value",
        type: Integer({ minimum: 1 }),
      }),
      is_secret_knowledge: Required({
        comment: "Is this trade secret considered secret knowledge?",
        type: Boolean(),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(PlainGeneralPrerequisites),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "TradeSecretTranslation",
        Object({
          name: Required({
            comment: "The trade secret’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Optional({
            comment: "The description of the trade secret.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
