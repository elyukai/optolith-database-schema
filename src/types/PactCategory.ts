import * as DB from "tsondb/schema/dsl"
import { PactCategoryIdentifier } from "./_Identifier.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const PactCategory = DB.Entity(import.meta.url, {
  name: "PactCategory",
  namePlural: "PactCategories",
  type: () =>
    DB.Object({
      types: DB.Required({
        comment: "Types of creatures in this category.",
        type: DB.ChildEntities(PactType),
      }),
      domains: DB.Required({
        comment: "Domains in this category.",
        type: DB.ChildEntities(PactDomain),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "PactCategory",
        DB.Object({
          name: DB.Required({
            comment: "The pact category’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
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

export const PactType = DB.Entity(import.meta.url, {
  name: "PactType",
  namePlural: "PactTypes",
  type: () =>
    DB.Object({
      parent: DB.Required({
        comment: "The pact category this type belongs to.",
        type: PactCategoryIdentifier(),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "PactType",
        DB.Object({
          name: DB.Required({
            comment: "The type’s name.",
            type: DB.String({ minLength: 1 }),
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
    name: `${getDisplayNameForInstanceId("PactCategory", instance.parent)?.name ?? ""} — ${instanceDisplayName}`,
    localeId: instanceDisplayNameLocaleId,
  }),
  uniqueConstraints: [
    [
      {
        keyPath: "parent",
      },
      {
        entityMapKeyPath: "translations",
        keyPathInEntityMap: "name",
      },
    ],
  ],
})

export const PactDomain = DB.Entity(import.meta.url, {
  name: "PactDomain",
  namePlural: "PactDomains",
  type: () =>
    DB.Object({
      parent: DB.Required({
        comment: "The pact category this domain belongs to.",
        type: PactCategoryIdentifier(),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "PactDomain",
        DB.Object({
          name: DB.Required({
            comment: "The domain’s name.",
            type: DB.String({ minLength: 1 }),
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
    name: `${getDisplayNameForInstanceId("PactCategory", instance.parent)?.name ?? ""} — ${instanceDisplayName}`,
    localeId: instanceDisplayNameLocaleId,
  }),
  uniqueConstraints: [
    [
      {
        keyPath: "parent",
      },
      {
        entityMapKeyPath: "translations",
        keyPathInEntityMap: "name",
      },
    ],
  ],
})
