/**
 * General type specifications used by multiple activatable entries.
 */

import { Integer, Optional, Required, String } from "tsondb/schema/dsl"

export const name = Required({
  comment: "Name of the activatable entry.",
  type: String({ minLength: 1 }),
})

export const name_in_library = Optional({
  comment:
    "The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.",
  type: String({ minLength: 1 }),
})

export const levels = Optional({
  comment: "Number of available levels.",
  type: Integer({ minimum: 2 }),
})

export const maximum = Optional({
  comment: `The number stating how often you can buy the entry. The **default** depends on the entry type:

- **Advantage:** \`1\` in all cases (as specified in the **Core Rules**)
- **Disadvantage:** \`1\` in all cases (as specified in the **Core Rules**)
- **Special Abilities:** \`1\` if no options can be selected, otherwise the number of possible options

The maximum is only set if it differs from the defaults specified above.`,
  type: Integer({ minimum: 1 }),
})

export const rules = Required({
  comment: "The rule text.",
  type: String({ minLength: 1, isMarkdown: true }),
})

export const effect = Required({
  comment: "The effect description.",
  type: String({ minLength: 1, isMarkdown: true }),
})

export const range_l10n = Optional({
  comment: "The range of the advantage.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

export const input = Optional({
  comment: "A string that is used as a label for an input field.",
  type: String({ minLength: 1 }),
})
