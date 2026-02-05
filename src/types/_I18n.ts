import { Object, Optional, Required, String, TypeAlias } from "tsondb/schema/dsl"

export const PluralizationCategories = TypeAlias(import.meta.url, {
  name: "PluralizationCategories",
  comment: `The item can be present in multiple pluralization categories; this object unifies handling of them. Not all of the options must be present, however, every possible category for that language should be defined. This means, that different languages may have a different amount of properties defined here. More information on pluralization and the Intl.PluralRules API on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules, https://unicode-org.github.io/cldr/ldml/tr35-numbers.html#Language_Plural_Rules and http://cldr.unicode.org/index/cldr-spec/plural-rules.

From the third link:

> The minimal pairs are those that are required for correct grammar. So
> because 0 and 1 don't have to form a minimal pair (it is ok—even though
> often not optimal—to say '0 people') , 0 doesn't establish a separate
> category. However, implementations are encouraged to provide the ability to
> have special plural messages for 0 in particular, so that more natural
> language can be used:
>
> — None of your friends are online.
>
> rather than
>
> — You have 0 friends online.`,
  type: () =>
    Object({
      zero: Optional({
        type: String({ minLength: 1 }),
      }),
      one: Optional({
        type: String({ minLength: 1 }),
      }),
      two: Optional({
        type: String({ minLength: 1 }),
      }),
      few: Optional({
        type: String({ minLength: 1 }),
      }),
      many: Optional({
        type: String({ minLength: 1 }),
      }),
      other: Required({
        type: String({ minLength: 1 }),
      }),
    }),
})

export const VaryBySystem = TypeAlias(import.meta.url, {
  name: "VaryBySystem",
  comment: "The item can be different for each operating system.",
  type: () =>
    Object({
      mac: Required({
        type: String({ minLength: 1 }),
      }),
      windows: Required({
        type: String({ minLength: 1 }),
      }),
      linux: Required({
        type: String({ minLength: 1 }),
      }),
    }),
})
