import { join } from "node:path"
import type { GenerationConfig } from "tsondb/config"
import { TypeScriptOutput } from "tsondb/renderer/ts"
import { schema } from "./lib/main.js"

const config: GenerationConfig = {
  schema: schema,
  outputs: [
    TypeScriptOutput({
      targetPath: join(import.meta.dirname, "gen", "types.d.ts"),
      rendererOptions: {
        generateEntityMapType: true,
      },
    }),
    // JsonSchemaOutput({
    //   targetPath: join(import.meta.dirname, "gen", "types.schema.json"),
    //   rendererOptions: {
    //     preserveFiles: true,
    //   },
    // }),
  ],
}

export default config
