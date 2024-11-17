// @ts-check
import { jsonSchema, markdown } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, jsonSchemaSpec, markdownDir, sourceDir, swiftDir } from "./lib/config/build.js"
import { swiftRenderer } from "./lib/rendering/swift.js"

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
    },
    {
      targetDir: swiftDir,
      renderer: swiftRenderer("OptolithDatabaseSchema"),
    }
  ],
  clean: true,
  verbose: false
}
