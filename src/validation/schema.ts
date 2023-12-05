import AjvModule, { AnySchemaObject, Options } from "ajv"
import addFormatsModule from "ajv-formats"
import Ajv2019Module from "ajv/dist/2019.js"
import Ajv2020Module from "ajv/dist/2020.js"
import { JsonSchemaSpec } from "optolith-tsjsonschemamd/renderers/jsonSchema"
import "../helpers/array.js"
import { isHiddenFileName, readDirectoryRec, readJsonFile } from "../helpers/io.js"
import { assertExhaustive } from "../helpers/typeSafety.js"

// import resolution fixes for TypeScript
type Ajv = AjvModule.default
const Ajv2019 = Ajv2019Module.default
const Ajv2020 = Ajv2020Module.default
const addFormats = addFormatsModule.default

const createSchemaValidator = (jsonSchemaSpec: JsonSchemaSpec, validatorOptions: Options = {}) => {
  switch (jsonSchemaSpec) {
    case "Draft_07":
    case "Draft_2019_09":
      return new Ajv2019(validatorOptions)

    case "Draft_2020_12":
      return new Ajv2020(validatorOptions)

    default:
      assertExhaustive(jsonSchemaSpec)
  }
}

const registerAllJsonSchemaDocuments = async (jsonSchemaDir: string, validator: Ajv) => {
  for await (const jsonSchemaPath of readDirectoryRec(jsonSchemaDir, isHiddenFileName)) {
    const jsonSchema = await readJsonFile(jsonSchemaPath)
    validator.addSchema(jsonSchema as AnySchemaObject)
  }
}

export const getPreparedSchemaValidator = async (jsonSchemaSpec: JsonSchemaSpec, validatorOptions: Options = {}, jsonSchemaDir: string) => {
  const validator = createSchemaValidator(jsonSchemaSpec, validatorOptions)
  await registerAllJsonSchemaDocuments(jsonSchemaDir, validator)
  addFormats(validator)
  return validator
}
