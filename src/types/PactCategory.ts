import {
  ChildEntities,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { PactCategoryIdentifier } from "./_Identifier.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const PactCategory = Entity(import.meta.url, {
  name: "PactCategory",
  namePlural: "PactCategories",
  type: () =>
    Object({
      types: Required({
        comment: "Types of creatures in this category.",
        type: ChildEntities(PactType),
      }),
      domains: Required({
        comment: "Domains in this category.",
        type: ChildEntities(PactDomain),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "PactCategory",
        Object({
          name: Required({
            comment: "The pact category’s name.",
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
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
      translations: NestedTranslationMap(
        Required,
        "PactType",
        Object({
          name: Required({
            comment: "The type’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  parentReferenceKey: "parent",
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
      translations: NestedTranslationMap(
        Required,
        "PactDomain",
        Object({
          name: Required({
            comment: "The domain’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  parentReferenceKey: "parent",
  displayName: {},
})
