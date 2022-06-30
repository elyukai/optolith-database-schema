// @ts-check

import { watch } from "fs/promises"
import { generate } from "optolith-tsjsonschemamd"
import { jsonSchema, markdown } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, markdownDir, sourceDir } from "../config/directories.js"

const generate$ = () => generate({
  sourceDir: sourceDir,
  outputs: [
    {
      targetDir: jsonSchemaDir,
      renderer: jsonSchema(),
    },
    {
      targetDir: markdownDir,
      renderer: markdown,
    }
  ],
  clean: true
})

if (process.argv.includes("-w")) {
  generate$()

  for await (const _ of watch(sourceDir, { recursive: true })) {
    generate$()
  }
}
else {
  generate$()
}
