// @ts-check

import { generate } from "optolith-tsjsonschemamd"
import { jsonSchema, markdown } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, markdownDir, sourceDir } from "./directories.js"

generate({
  sourceDir: sourceDir,
  outputs: [
    {
      targetDir: jsonSchemaDir,
      renderer: jsonSchema,
    },
    {
      targetDir: markdownDir,
      renderer: markdown,
    }
  ],
  clean: true
})
