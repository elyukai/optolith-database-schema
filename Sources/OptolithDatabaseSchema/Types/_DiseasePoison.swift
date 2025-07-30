/**
 * This file defines some shared types for different diseases and poisons.
 */

import FileDB

/// Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty.
@ModelEnum
public enum Resistance {
    case Spirit
    case Toughness
    case LowerOfSpiritAndToughness
}

/// What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection.
@Embedded
public struct Cause {

  /// The chance to get infected by this cause, in percent.
  @Minimum(5)
  @Maximum(100)
  @MultipleOf(5)
  let chance: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // CauseTranslation

        /// The cause’s name.
        @MinLength(1)
        let name: String
          /// The chance to get infected by this cause. If present for this language, this overrides the universal `chance` field; they cannot be used at the same time.
          @MinLength(1)
          let chance: String?

        /// An additional note about this cause.
        @MinLength(1)
        let note: String?
      }
  }

/// An effect or other parameter that may be reduced by a failed disease check for lessening or a degraded poison.
///
/// This streamlines the wording for diseases and poison by using a unified wording for *lessened* (disease) and *degraded* (poison).
@Embedded
public struct Reduceable<Content> {
  /// The default value. In the source, it's the text before the slash.
  let `default`: Content

  /// The reduced value. In the source, it's the text after the slash. Some entries may not have a reduced value.
  let reduced: Content?
  }

/// An effect text or other non-empty Markdown parameter that may be reduced by a failed disease check for lessening or a degraded poison.
///
/// This streamlines the wording for diseases and poison by using a unified wording for *lessened* (disease) and *degraded* (poison).
@Embedded
public struct ReduceableNonEmptyMarkdown {
  /// The default value. In the source, it's the text before the slash.
  @MinLength(1)
  @Markdown
  let `default`: String

  /// The reduced value. In the source, it's the text after the slash. Some entries may not have a reduced value.
  @MinLength(1)
  @Markdown
  let reduced: String?
  }
