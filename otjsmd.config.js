// @ts-check
import { isRecordNode } from "optolith-tsjsonschemamd/ast"
import { jsonSchema, markdown, swift } from "optolith-tsjsonschemamd/renderers"
import { jsonSchemaDir, jsonSchemaSpec, markdownDir, sourceDir, swiftDir } from "./lib/config/build.js"

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
      renderer: swift({
        packageName: "OptolithDatabaseSchema",
        forceConstantStructMembers: true,
        defaultPublic: true,
        convertIdentifiersToNamingConvention: true,
        generateStructInitializers: true,
        decodableSynthesization: {
          discriminatorKey: "tag",
        },
        addConformances: [
          {
            identifier: "EntitySubtype",
            includesDecodable: true,
            forMainTypes: false,
          },
          {
            identifier: node =>
              isRecordNode(node) && node.members.some(member => member.identifier === "translations" && member.isRequired)
                ? "LocalizableEntity"
                : "Entity",
            includesDecodable: true,
            forMainTypes: true,
          },
        ],
      }),
    },
  ],
  clean: true,
  verbose: false,
}
