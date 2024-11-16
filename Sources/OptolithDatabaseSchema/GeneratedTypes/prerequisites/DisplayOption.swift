//
//  DisplayOption.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum DisplayOption: EntitySubtype {
    case hide
    case replaceWith(ReplacementDisplayOption)
}

public struct ReplacementDisplayOption: EntitySubtype {
    /// If the replacement text is a sentence or sentence-like fragment, this
    /// property ensures it is integrated into the prerequisite string correctly.
    /// 
    /// A standalone sentence is connected to the previous prerequisite string with
    /// a period and a period is also added at the end of the sentence
    /// automatically, if it is not present. A connected sentence is connected to
    /// the previous prerequisite string with a semicolon and a period is not added
    /// to the end of the sentence. In this case, if there are prerequisites after
    /// this one, they will be connected using a semicolon again, unless a
    /// different punctuation mark is present at the end of the given text.
    public let sentenceType: SentenceType?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<NonEmptyString>    
    
    private enum CodingKeys: String, CodingKey {
        case sentenceType = "sentence_type"
        case translations = "translations"
    }
}
