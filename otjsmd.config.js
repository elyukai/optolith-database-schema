// @ts-check
import { jsonSchema, markdown } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, jsonSchemaSpec, markdownDir, sourceDir } from "./lib/config/build.js"

/** @type {import("optolith-tsjsonschemamd").GeneratorOptions} */
export default {
  sourceDir: sourceDir,
  outputs: [
    {
      targetDir: jsonSchemaDir,
      renderer: jsonSchema({ spec: jsonSchemaSpec }),
    },
    {
      targetDir: markdownDir,
      renderer: markdown(),
    }
  ],
  clean: true,
  verbose: false
}
