import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"

export const TextPrerequisite = DB.TypeAlias(import.meta.url, {
  name: "TextPrerequisite",
  comment:
    "A prerequisite that is either not verifyable in general – e.g. roleplay or background information – or the referenced entities were not made available for use yet – e.g. races –, but which should be displayed, because it is part of the prerequisite string from the sources.",
  type: () =>
    DB.Object({
      verification: DB.Required({
        comment:
          "The method how the prerequisite should be verified. Either is passes all verification text or it denies all verification tests. The latter results in the associated entry to never be available for purchase.",
        type: DB.IncludeIdentifier(TextVerificationRule),
      }),
      sentence_type: DB.Optional({
        comment: `If the text is a sentence or sentence-like fragment, this property ensures it is integrated into the prerequisite string correctly.

A standalone sentence is connected to the previous prerequisite string with a period and a period is also added at the end of the sentence automatically, if it is not present. A connected sentence is connected to the previous prerequisite string with a semicolon and a period is not added to the end of the sentence. In this case, if there are prerequisites after this one, they will be connected using a semicolon again, unless a different punctuation mark is present at the end of the given text.`,
        type: DB.IncludeIdentifier(SentenceType),
      }),
      is_meta: DB.Optional({
        comment: `If the text does not represent an actual prerequisite but a prerequisite for the use of certain aspects or the entry the prerequisite is associated with, or something like that, this property is set to \`true\`.

If all prerequisites of an entry are marked as meta, the entry is considered to have no prerequisites and thus the string \`none\` must be rendered before the list of meta prerequisites.

This is the only use case for this property.`,
        type: DB.Boolean(),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "TextPrerequisite",
        DB.Object({
          text: DB.Required({
            comment: "The displayed text.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
        }),
      ),
    }),
})

const TextVerificationRule = DB.Enum(import.meta.url, {
  name: "TextVerificationRule",
  values: () => ({
    Pass: DB.EnumCase({ type: null }),
    Deny: DB.EnumCase({ type: null }),
  }),
})

export const SentenceType = DB.Enum(import.meta.url, {
  name: "SentenceType",
  comment:
    "If the text is a sentence or sentence-like fragment, this defines how it is integrated into the prerequisite string correctly.",
  values: () => ({
    Standalone: DB.EnumCase({
      comment:
        "A standalone sentence is connected to the previous prerequisite string with a period and a period is also added at the end of the sentence automatically, if it is not present.",
      type: null,
    }),
    Connected: DB.EnumCase({
      comment:
        "A connected sentence is connected to the previous prerequisite string with a semicolon and a period is not added to the end of the sentence. In this case, if there are prerequisites after this one, they will be connected using a semicolon again, unless a different punctuation mark is present at the end of the given text.",
      type: null,
    }),
  }),
})
