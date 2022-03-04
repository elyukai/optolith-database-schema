// @ts-check

import { generate } from "optolith-tsjsonschemamd"
import { jsonSchema, markdown } from "optolith-tsjsonschemamd/renderers"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

// @ts-ignore
const root = join(dirname(fileURLToPath(import.meta.url)), "..")

generate({
  sourceDir: join(root, "src", "types"),
  outputs: [
    {
      targetDir: join(root, "schema"),
      renderer: jsonSchema,
    },
    {
      targetDir: join(root, "docs", "reference"),
      renderer: markdown,
    }
  ],
  clean: true
})
