import {
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedLocaleMap } from "../Locale.js"
import { SentenceType } from "./single/TextPrerequisite.js"

export const DisplayOption = Enum(import.meta.url, {
  name: "DisplayOption",
  values: () => ({
    Hide: EnumCase({ type: null }),
    ReplaceWith: EnumCase({ type: IncludeIdentifier(ReplacementDisplayOption) }),
  }),
})

const ReplacementDisplayOption = TypeAlias(import.meta.url, {
  name: "ReplacementDisplayOption",
  type: () =>
    Object({
      sentence_type: Optional({
        comment: `If the replacement text is a sentence or sentence-like fragment, this property ensures it is integrated into the prerequisite string correctly.

A standalone sentence is connected to the previous prerequisite string with a period and a period is also added at the end of the sentence automatically, if it is not present. A connected sentence is connected to the previous prerequisite string with a semicolon and a period is not added to the end of the sentence. In this case, if there are prerequisites after this one, they will be connected using a semicolon again, unless a different punctuation mark is present at the end of the given text.`,
        type: IncludeIdentifier(SentenceType),
      }),
      translations: NestedLocaleMap(
        Required,
        "ReplacementDisplayOptionTranslation",
        Object({
          replacement: Required({
            comment: "The replacement text.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
})
