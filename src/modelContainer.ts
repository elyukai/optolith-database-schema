import { join } from "node:path"
import { generateValidateAndServe, ModelContainer } from "tsondb/modelcontainer"
import { JsonSchemaOutput } from "tsondb/renderer/jsonschema"
import { TypeScriptOutput } from "tsondb/renderer/ts"
import { Schema } from "tsondb/schema"
import { Attribute } from "./types/Attribute.js"
import { Blessing } from "./types/Blessing.js"
import { Condition } from "./types/Condition.js"
import { Continent } from "./types/Continent.js"
import { Locale } from "./types/Locale.js"
import { MetaCondition } from "./types/MetaCondition.js"
import { PactCategory } from "./types/PactCategory.js"
import { Property } from "./types/Property.js"
import { Service } from "./types/Service.js"
import { Skill } from "./types/Skill.js"
import { State } from "./types/State.js"

const OptolithModelContainer = ModelContainer({
  schema: Schema(
    [
      Attribute,
      Blessing,
      Condition,
      Continent,
      FocusRule,
      MetaCondition,
      OptionalRule,
      PactCategory,
      Property,
      Service,
      Skill,
      State,
    ],
    Locale
  ),
  outputs: [
    TypeScriptOutput({
      targetPath: join(import.meta.dirname, "..", "gen", "types.d.ts"),
      rendererOptions: {
        preserveFiles: false,
      },
    }),
    JsonSchemaOutput({
      targetPath: join(import.meta.dirname, "..", "gen", "types.schema.json"),
      rendererOptions: {
        preserveFiles: true,
      },
    }),
  ],
  dataRootPath: join(import.meta.dirname, "..", "data"),
})

await generateValidateAndServe(OptolithModelContainer)
