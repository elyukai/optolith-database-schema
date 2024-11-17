import SwiftCompilerPlugin
import SwiftDiagnostics
import SwiftSyntax
import SwiftSyntaxBuilder
import SwiftSyntaxMacros

public struct IdentifierObjectMacro: DeclarationMacro {
    public static func expansion(of node: some FreestandingMacroExpansionSyntax,
                                 in context: some MacroExpansionContext) throws -> [SwiftSyntax.DeclSyntax] {
        let entityNameSyntax = node.arguments.first(where: { $0.label?.text == "entity" })!
        let uppercasedName = entityNameSyntax.expression.as(StringLiteralExprSyntax.self)?.representedLiteralValue ?? ""
        let lowercasedName = uppercasedName.pascalCaseToCamelCase()
        let snakeName = lowercasedName.camelCaseToSnakeCase()

        return [DeclSyntax("""
        public let \(raw: lowercasedName): Int
        public var numericId: Int { \(raw: lowercasedName) }

        enum CodingKeys: String, CodingKey {
            case tag
            case \(raw: lowercasedName) = \(literal: snakeName)
        }

        public init(_ id: Int) {
            self.\(raw: lowercasedName) = id
        }

        public init(from decoder: any Decoder) throws {
            let container = try decoder.container(keyedBy: CodingKeys.self)
            let tag = try container.decode(String.self, forKey: .tag)
            guard tag == \(literal: uppercasedName) else { throw DecodingError.dataCorruptedError(forKey: .tag, in: container, debugDescription: "Expected \(raw: uppercasedName) tag")}
            self.\(raw: lowercasedName) = try container.decode(Int.self, forKey: .\(raw: lowercasedName))
        }
        """)]
    }
}

//enum IdentifierObjectError: String, DiagnosticMessage {
//    case onlyApplicableToEnum
//
//    var severity: DiagnosticSeverity { return .error }
//
//    var message: String {
//        switch self {
//        case .onlyApplicableToEnum: return "'@DiscriminatedEnum' can only be applied to an 'enum'"
//        case .atLeastOneCase: return "The enumeration must define at least one case."
//        case .invalidAssociatedType: return "A case with associated values may only have one parameter, which must be unnamed."
//        }
//    }
//
//    var diagnosticID: MessageID {
//        MessageID(domain: "OptolithDatabaseSchemaMacros", id: rawValue)
//    }
//}

extension String {
    func camelCaseToSnakeCase() -> String {
        guard !self.isEmpty else { return self }

        let withSimpleTransformed = self.replacing(/([A-Z][a-z])/) { match in
            "_\(match.output.1.lowercased())"
        }

        let withAllCapsTransformed = withSimpleTransformed.replacing(/([A-Z]+)/) { match in
            "_\(match.output.1.lowercased())"
        }

        return withAllCapsTransformed
    }

    func pascalCaseToCamelCase() -> String {
        guard !self.isEmpty else { return self }

        return self.first!.lowercased() + self.dropFirst()
    }
}

@main
struct OptolithDatabaseSchemaPlugin: CompilerPlugin {
    let providingMacros: [Macro.Type] = [
        IdentifierObjectMacro.self,
    ]
}
