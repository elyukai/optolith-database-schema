import {
  Boolean,
  Entity,
  MemberDecl,
  NestedEntityMap,
  Object,
  ObjectType,
  Required,
  String,
  Type,
} from "tsondb/schema/def"

export const Locale = Entity(import.meta.url, {
  name: "Locale",
  namePlural: "Locales",
  comment:
    "A supported locale. The locale is used to identify the language and region of the content.",
  type: () =>
    Object({
      name: Required({
        comment: "Name of the language in its language.",
        type: String({ minLength: 1 }),
      }),
      region: Required({
        comment: "Region in which the language is spoken in its language.",
        type: String({ minLength: 1 }),
      }),
      is_missing_implementation: Required({
        comment:
          "The language is not (fully) implemented and thus needs to be excluded from stable releases.",
        type: Boolean(),
      }),
    }),
})

export const NestedLocaleMap = <
  Name extends string,
  T extends Record<string, MemberDecl<Type, boolean>>,
  R extends boolean
>(
  MemberDeclCreator: <T extends Type>(options: {
    comment?: string
    isDeprecated?: boolean
    type: T
  }) => MemberDecl<T, R>,
  name: Name,
  type: ObjectType<T>
) =>
  MemberDeclCreator({
    comment: "All translations for the entry, identified by IETF language tag (BCP47).",
    type: NestedEntityMap({
      name,
      secondaryEntity: Locale,
      type,
    }),
  })
