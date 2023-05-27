// @ts-check

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url))

const typesDir = main => join(root, main, "types")

export const sourceDir = typesDir("src")
export const libDir = typesDir("lib")
export const jsonSchemaDir = join(root, "schema")
export const markdownDir = join(root, "docs", "reference")
