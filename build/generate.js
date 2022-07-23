// @ts-check

import { watch } from "fs/promises"
import { generate } from "optolith-tsjsonschemamd"
import { jsonSchema, JsonSchemaSpec, markdown } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, markdownDir, sourceDir } from "../config/directories.js"

/** @type {import("optolith-tsjsonschemamd").GeneratorOptions} */
const options = {
  sourceDir: sourceDir,
  outputs: [
    {
      targetDir: jsonSchemaDir,
      renderer: jsonSchema({ spec: JsonSchemaSpec.Draft_2019_09 }),
    },
    {
      targetDir: markdownDir,
      renderer: markdown,
    }
  ],
  clean: true
}

if (process.argv.includes("-w")) {
  try {
    generate(options)
  }
  catch (err) {
    console.error(err)
  }
  finally {
    for await (const _ of watch(sourceDir, { recursive: true })) {
      try {
        generate(options)
      }
      catch (err) {
        console.error(err)
      }
    }
  }

}
else {
  generate(options)
}
