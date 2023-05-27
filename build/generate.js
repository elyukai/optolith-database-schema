// @ts-check

import { watch } from "node:fs/promises"
import { generate } from "optolith-tsjsonschemamd"
import { jsonSchema, markdown } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, jsonSchemaSpec, markdownDir, sourceDir } from "./config.js"

/** @type {import("optolith-tsjsonschemamd").GeneratorOptions} */
const options = {
  sourceDir: sourceDir,
  outputs: [
    {
      targetDir: jsonSchemaDir,
      renderer: jsonSchema({ spec: jsonSchemaSpec }),
    },
    {
      targetDir: markdownDir,
      renderer: markdown,
    }
  ],
  clean: true,
  verbose: false
}

if (process.argv.includes("-w")) {
  try {
    generate(options)
  }
  catch (err) {
    console.error(err)
  }
  finally {
    console.log("Watching for changes ...")

    const generate$ = debounce(generate, 300)

    for await (const _ of watch(sourceDir, { recursive: true })) {
      try {
        generate$(options)
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

/**
 * @template {any[]} T
 * @param {(...args: T) => void} f
 * @param {number} timeout
 * @returns {(...args: T) => void}
 */
function debounce(f, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { f.apply(this, args); }, timeout);
  }
}
