import { Entity, IncludeIdentifier, Object, Optional, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { Cost } from "./_Item.js"

export const Ammunition = Entity(import.meta.url, {
  name: "Ammunition",
  namePlural: "Ammunitions",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Ammunition",
        Object({
          name: Required({
            comment: "The item’s name.",
            type: String({ minLength: 1 }),
          }),
          secondary_name: Optional({
            comment: "An auxiliary name or label of the item, if available.",
            type: String({ minLength: 1 }),
          }),
          note: Optional({
            comment: "Note text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          rules: Optional({
            comment: "Special rules text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})
