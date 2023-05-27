// @ts-check

import { JsonSchemaSpec } from "optolith-tsjsonschemamd/renderers";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// @ts-ignore
const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const typesDir = main => join(root, main, "types")

export const sourceDir = typesDir("src")
export const libDir = typesDir("lib")
export const jsonSchemaDir = join(root, "schema")
export const markdownDir = join(root, "docs", "reference")

/**
 * @type {import("optolith-tsjsonschemamd/renderers").JsonSchemaSpec}
 */
export const jsonSchemaSpec = JsonSchemaSpec.Draft_2019_09
