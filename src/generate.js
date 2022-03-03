// @ts-check

import { defaultRenderers, generate } from "optolith-tsjsonschemamd"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

// @ts-ignore
const root = join(dirname(fileURLToPath(import.meta.url)), "..")

generate({
  sourceDir: join(root, "src", "types"),
  outputs: [
    {
      renderer: defaultRenderers.jsonSchema,
      folder: join(root, "schema")
    },
    {
      renderer: defaultRenderers.markdown,
      folder: join(root, "docs", "reference")
    }
  ],
  clean: true
})
