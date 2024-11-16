import { isNotNullish } from "@optolith/helpers/nullable"
import { assertExhaustive } from "@optolith/helpers/typeSafety"
import { AstTransformer, Renderer } from "optolith-tsjsonschemamd"
import {
  ChildNode,
  Doc,
  isLiteralNode,
  isRecordNode,
  isReferenceNode,
  LiteralNode,
  NodeKind,
  QualifiedName,
  StatementNode,
  TokenKind,
  TypeParameterNode,
} from "optolith-tsjsonschemamd/ast"
import { ignoreNode } from "optolith-tsjsonschemamd/utils/ignoreNode"
import { basename } from "path"

const IGNORE_ENV = "swift"
const ERROR_TYPE = "<<error type>>"

const prefixLines = (prefix: string, text: string): string =>
  text
    .split("\n")
    .map(line => prefix + line)
    .join("\n")

const applyIndentation = (indentLevel: number, text: string): string =>
  prefixLines("    ".repeat(indentLevel), text)

const renderQualifiedName = (name: QualifiedName): string =>
  name.right === undefined ? name.segment : renderQualifiedName(name.right)

const renderDocumentation = (jsDoc?: Doc): string =>
  jsDoc?.comment === undefined ? "" : prefixLines("/// ", jsDoc.comment) + "\n"

const snakeToCamel = (name: string): string =>
  name.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())

const pascalToCamel = (name: string): string =>
  name === "" ? "" : name[0]!.toLowerCase() + name.slice(1)

const keywords = new Set(["throw", "throws", "default", "self", "true", "false", "nil", "as"])
const safeIdentifier = (name: string): string =>
  /[^a-zA-Z0-9]/.test(name) || keywords.has(name) ? `\`${name}\`` : name

const renderChild = (child: ChildNode): string => {
  switch (child.kind) {
    case NodeKind.Record:
      return ERROR_TYPE
    // throw new Error("Unnamed structs are not supported in Swift")
    case NodeKind.Dictionary:
      return `[String: ${renderChild(child.children)}]`
    case NodeKind.Token:
      switch (child.token) {
        case TokenKind.Boolean:
          return "Bool"
        case TokenKind.Number:
          return child.jsDoc?.tags.integer ? "Int" : "Double"
        case TokenKind.String:
          return "String"
        default:
          return assertExhaustive(child.token)
      }
    case NodeKind.Reference:
      return (
        renderQualifiedName(child.name) +
        (child.typeArguments ? "<" + child.typeArguments.map(renderChild).join(", ") + ">" : "")
      )
    case NodeKind.Array:
      return `[${renderChild(child.children)}]`
    case NodeKind.Union:
      return ERROR_TYPE
    // throw new Error("Unnamed enums are not supported in Swift")
    case NodeKind.Literal:
      if (typeof child.value === "string") {
        return `"${child.value}"`
      } else if (typeof child.value === "number") {
        return child.value.toString()
      } else {
        return "Bool"
      }
    case NodeKind.Tuple:
      return `(${child.children.map(renderChild).join(", ")})`
    case NodeKind.Intersection:
      return child.children.map(renderChild).join(" & ")
    default:
      return assertExhaustive(child)
  }
}

const renderTypeParameters = (
  typeParameters: TypeParameterNode[] | undefined,
  addConformance?: string
): string =>
  typeParameters === undefined
    ? ""
    : `<${typeParameters
        .map(param => `${param.name}${addConformance ? `: ${addConformance}` : ""}`)
        .join(", ")}>`

const renderDeclaration = (
  name: String,
  jsDoc: Doc | undefined,
  typeParameters: TypeParameterNode[] | undefined,
  child: ChildNode,
  main: string | undefined
): string => {
  switch (child.kind) {
    case NodeKind.Record: {
      if (
        child.members.find(member => member.identifier === "tag")?.value.kind === NodeKind.Literal
      ) {
        return renderDeclaration(
          name,
          jsDoc,
          typeParameters,
          {
            kind: NodeKind.Union,
            jsDoc: child.jsDoc,
            fileName: child.fileName,
            children: [child],
          },
          main
        )
      }

      return `${renderDocumentation(jsDoc)}public struct ${name}${renderTypeParameters(
        typeParameters,
        "EntitySubtype"
      )}: ${
        name === main
          ? child.members.find(member => member.identifier === "translations")?.isRequired === true
            ? "LocalizableEntity"
            : "Entity"
          : "EntitySubtype"
      } {
${applyIndentation(
  1,
  child.members
    .map(({ identifier: key, isRequired, value, jsDoc }) => {
      const deprecated = jsDoc?.tags.deprecated
      return `${renderDocumentation(jsDoc)}${
        deprecated !== undefined
          ? deprecated.length === 0
            ? `@available(*, deprecated)\n`
            : `@available(*, deprecated, message: "${deprecated}")\n`
          : ""
      }public let ${safeIdentifier(snakeToCamel(key))}: ${renderChild(value)}${
        isRequired ? "" : "?"
      }`
    })
    .join("\n\n")
)}${
        child.members.some(({ identifier: key }) => key.includes("_"))
          ? applyIndentation(
              1,
              `\n\nprivate enum CodingKeys: String, CodingKey {
${applyIndentation(
  1,
  child.members
    .map(({ identifier: key }) => `case ${safeIdentifier(snakeToCamel(key))} = "${key}"`)
    .join("\n")
)}
}`
            )
          : ""
      }
}`
    }
    case NodeKind.Dictionary:
      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters,
        "EntitySubtype"
      )} = ${renderChild(child)}`
    case NodeKind.Token:
      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters,
        "EntitySubtype"
      )} = ${renderChild(child)}`
    case NodeKind.Reference:
      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters,
        "EntitySubtype"
      )} = ${renderChild(child)}`
    case NodeKind.Array:
      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters,
        "EntitySubtype"
      )} = ${renderChild(child)}`
    case NodeKind.Union:
      if (
        child.children.every(caseNode => {
          const tagMember =
            caseNode.kind === NodeKind.Record
              ? caseNode.members.find(member => member.identifier === "tag")
              : undefined
          return (
            tagMember?.value.kind === NodeKind.Literal && typeof tagMember.value.value === "string"
          )
        })
      ) {
        return `${renderDocumentation(jsDoc)}@DiscriminatedEnum
public enum ${name}${renderTypeParameters(typeParameters, "EntitySubtype")}: EntitySubtype {
${applyIndentation(
  1,
  child.children
    .filter(isRecordNode)
    .map(record => {
      const tag = (record.members.find(member => member.identifier === "tag")!.value as LiteralNode)
        .value as string
      const caseName = safeIdentifier(tag[0]!.toLowerCase() + tag.slice(1))
      const value = record.members.find(member => member.identifier !== "tag")!.value

      if (value.kind === NodeKind.Record && value.members.length === 0) {
        return `case ${caseName}`
      } else {
        return `case ${caseName}(${renderChild(value)})`
      }
    })
    .join("\n")
)}
}`
      }

      if (child.children.every(isReferenceNode)) {
        return `${renderDocumentation(jsDoc)}public enum ${name}${renderTypeParameters(
          typeParameters,
          "EntitySubtype"
        )}: EntitySubtype {
${applyIndentation(
  1,
  child.children
    .map(
      ref =>
        `case ${safeIdentifier(pascalToCamel(renderQualifiedName(ref.name)))}(${renderChild(ref)})`
    )
    .join("\n")
)}

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

${applyIndentation(
  2,
  child.children
    .map((ref, i) => {
      const camel = safeIdentifier(pascalToCamel(renderQualifiedName(ref.name)))
      const type = renderChild(ref)
      return `${i === 0 ? "" : " else "}if let ${camel} = try? container.decode(${type}.self) {
    self = .${camel}(${camel})
}`
    })
    .join("")
)} else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No ${name} type found")
        }
    }
}`
      }

      if (
        child.children.every(isLiteralNode) &&
        child.children.every(node => typeof node.value === "string")
      ) {
        return `${renderDocumentation(jsDoc)}public enum ${name}: String, EntitySubtype {
${applyIndentation(
  1,
  child.children
    .map(
      literal =>
        `case ${safeIdentifier(pascalToCamel(literal.value as string))} = ${renderChild(literal)}`
    )
    .join("\n")
)}
}`
      }

      if (
        child.children.every(isLiteralNode) &&
        child.children.every(node => typeof node.value === "number")
      ) {
        return `${renderDocumentation(jsDoc)}public enum ${name}: Int, EntitySubtype {
${applyIndentation(
  1,
  child.children.map(literal => `case _${literal.value} = ${renderChild(literal)}`).join("\n")
)}
}`
      }

      return `${renderDocumentation(jsDoc)}public enum ${name}${renderTypeParameters(
        typeParameters
      )} = ${ERROR_TYPE}`
    case NodeKind.Literal:
      if (typeof child.value === "string" || typeof child.value === "number") {
        return renderDeclaration(
          name,
          jsDoc,
          typeParameters,
          {
            kind: NodeKind.Union,
            jsDoc: child.jsDoc,
            fileName: child.fileName,
            children: [child],
          },
          main
        )
      }

      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters
      )} = ${ERROR_TYPE}`
    case NodeKind.Tuple:
      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters
      )} = ${renderChild(child)}`
    case NodeKind.Intersection:
      return `${renderDocumentation(jsDoc)}public typealias ${name}${renderTypeParameters(
        typeParameters
      )} = ${renderChild(child)}`
    default:
      return assertExhaustive(child)
  }
}

const renderStatement = (
  stmt: StatementNode,
  indentLevel: number,
  main: string | undefined
): string | undefined => {
  switch (stmt.kind) {
    case NodeKind.Group:
      return applyIndentation(
        indentLevel,
        `public enum ${stmt.name} {
    ${stmt.children
      .map(stmt => renderStatement(stmt, indentLevel + 1, main))
      .filter(isNotNullish)
      .join("\n" + "    ".repeat(indentLevel + 1))}
}`
      )
    case NodeKind.Enumeration:
      return applyIndentation(
        indentLevel,
        `public enum ${stmt.name}: String, Decodable {
    case ${stmt.children
      .map(enumCase => `.${enumCase.name} = ${JSON.stringify(enumCase.value)}`)
      .join(", ")}
}`
      )
    case NodeKind.TypeDefinition:
      return applyIndentation(
        indentLevel,
        renderDeclaration(stmt.name, stmt.jsDoc, stmt.typeParameters, stmt.definition, main)
      )
    case NodeKind.ExportAssignment:
      return applyIndentation(
        indentLevel,
        renderDeclaration(stmt.name, stmt.jsDoc, undefined, stmt.expression, main)
      )
    default:
      return assertExhaustive(stmt)
  }
}

const transformer: AstTransformer = (ast, meta) => {
  const date = new Date()
  const main = ast.jsDoc?.tags.main
  const ignoreFile = ignoreNode(ast, IGNORE_ENV)

  const fileHeader = `//
//  ${basename(meta.absolutePath)}
//  OptolithDatabaseSchema
//`

  if (ignoreFile) {
    return fileHeader + "\n\n/* This file has been marked as ignored for generating Swift code. */"
  }

  return `${fileHeader}

import DiscriminatedEnum

${ast.children
  .map(stmt => renderStatement(stmt, 0, main))
  .filter(isNotNullish)
  .join("\n\n")}\n`
}

export const swiftRenderer = (): Renderer => ({
  fileExtension: ".swift",
  transformer: transformer,
  resolveTypeParameters: false,
})
