import FileDB

/// A text from the source that can be also displayed in small areas using a compressed version.
@Embedded
public struct ResponsiveText {
  /// The full text from the source.
  @MinLength(1)
  let full: String

  /// A compressed text for use in small areas (e.g. on character sheet).
  @MinLength(1)
  let compressed: String
  }

/// A text from the source that can be also displayed in small areas using a compressed version. It is used as a replacement for a generated text while the generated text is still provided and should be used.
@Embedded
public struct ResponsiveTextReplace {
  /// The full replacement string. It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values.
  @MinLength(1)
  @Pattern("\\$1")
  let full: String

  /// A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values.
  @MinLength(1)
  @Pattern("\\$1")
  let compressed: String
  }

/// A text from the source that can be also displayed in small areas using a compressed version, if available.
@Embedded
public struct ResponsiveTextOptional {
  /// The full text from the source.
  @MinLength(1)
  let full: String

  /// A compressed text for use in small areas (e.g. on character sheet). If this is not present, it should not appear in those areas.
  @MinLength(1)
  let compressed: String?
  }
