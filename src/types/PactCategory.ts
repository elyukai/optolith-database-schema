import { Array, Entity, IncludeIdentifier, Object, Required, String } from "tsondb/schema/def"
import { PactCategoryIdentifier, PactDomainIdentifier, PactTypeIdentifier } from "./_Identifier.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const PactCategory = Entity(import.meta.url, {
  name: "PactCategory",
  namePlural: "PactCategories",
  type: () =>
    Object({
      types: Required({
        comment: "Types of creatures in this category.",
        type: Array(PactTypeIdentifier(), { minItems: 1 }),
      }),
      domains: Required({
        comment: "Domains in this category.",
        type: Array(PactDomainIdentifier(), { minItems: 1 }),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "PactCategoryTranslation",
        Object({
          name: Required({
            comment: "The pact category’s name.",
            type: String({ minLength: 1 }),
          }),
          errata: Required({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

export const PactType = Entity(import.meta.url, {
  name: "PactType",
  namePlural: "PactTypes",
  type: () =>
    Object({
      parent: Required({
        comment: "The pact category this type belongs to.",
        type: PactCategoryIdentifier(),
      }),
      translations: NestedLocaleMap(
        Required,
        "PactTypeTranslation",
        Object({
          name: Required({
            comment: "The type’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})

export const PactDomain = Entity(import.meta.url, {
  name: "PactDomain",
  namePlural: "PactDomains",
  type: () =>
    Object({
      parent: Required({
        comment: "The pact category this domain belongs to.",
        type: PactCategoryIdentifier(),
      }),
      translations: NestedLocaleMap(
        Required,
        "PactDomainTranslation",
        Object({
          name: Required({
            comment: "The domain’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
