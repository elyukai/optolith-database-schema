import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { JsonSchemaSpec } from "optolith-tsjsonschemamd/renderers/jsonSchema"

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..")

export const sourceDir     = join(root, "src", "types")
export const libDir        = join(root, "lib", "types")
export const jsonSchemaDir = join(root, "schema")
export const markdownDir   = join(root, "docs", "reference")

export const jsonSchemaSpec: JsonSchemaSpec = JsonSchemaSpec.Draft_2019_09
