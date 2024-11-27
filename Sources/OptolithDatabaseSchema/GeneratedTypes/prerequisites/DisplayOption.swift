//
//  DisplayOption.swift
//  OptolithDatabaseSchema
//

public enum DisplayOption: EntitySubtype {
    case hide
    case replaceWith(ReplacementDisplayOption)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case hide = "hide"
        case replaceWith = "replace_with"
    }

    private enum Discriminator: String, Decodable {
        case hide = "Hide"
        case replaceWith = "ReplaceWith"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .hide:
            self = .hide
        case .replaceWith:
            self = .replaceWith(try container.decode(ReplacementDisplayOption.self, forKey: .replaceWith))
        }
    }
}

public struct ReplacementDisplayOption: EntitySubtype {
    /// If the replacement text is a sentence or sentence-like fragment, this property ensures it is integrated into the prerequisite string correctly.
    /// 
    /// A standalone sentence is connected to the previous prerequisite string with a period and a period is also added at the end of the sentence automatically, if it is not present. A connected sentence is connected to the previous prerequisite string with a semicolon and a period is not added to the end of the sentence. In this case, if there are prerequisites after this one, they will be connected using a semicolon again, unless a different punctuation mark is present at the end of the given text.
    public let sentenceType: SentenceType?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<NonEmptyString>

    public init(sentenceType: SentenceType? = nil, translations: LocaleMap<NonEmptyString>) {
        self.sentenceType = sentenceType
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case sentenceType = "sentence_type"
        case translations = "translations"
    }
}
