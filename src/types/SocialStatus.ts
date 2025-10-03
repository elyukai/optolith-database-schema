import { Entity, Integer, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const SocialStatus = Entity(import.meta.url, {
  name: "SocialStatus",
  namePlural: "SocialStatuses",
  type: () =>
    Object({
      order: Required({
        comment:
          "The social status’ order. The higher the order, the more powerful the social status. This has to be a unique value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Required,
        "SocialStatusTranslation",
        Object({
          name: Required({
            comment: "The social status’ name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
