import { NonEmptyString } from "./_NonEmptyString.js"

/**
 * A text from the source that can be also displayed in small areas using a compressed version.
 */
export type ResponsiveText = {
  /**
   * The full text from the source.
   */
  full: NonEmptyString

  /**
   * A compressed text for use in small areas (e.g. on character sheet).
   */
  compressed: NonEmptyString
}

/**
 * A text from the source that can be also displayed in small areas using a compressed version. It is used as a replacement for a generated text while the generated text is still provided and should be used.
 */
export type ResponsiveTextReplace = {
  /**
   * The full replacement string. It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values.
   * @minLength 1
   * @pattern \$1
   */
  full: string

  /**
   * A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated string, so additional information can be provided without duplicating concrete numeric values.
   * @minLength 1
   * @pattern \$1
   */
  compressed: string
}

/**
 * A text from the source that can be also displayed in small areas using a compressed version, if available.
 */
export type ResponsiveTextOptional = {
  /**
   * The full text from the source.
   */
  full: NonEmptyString

  /**
   * A compressed text for use in small areas (e.g. on character sheet). If this is not present, it should not appear in those areas.
   */
  compressed?: NonEmptyString
}
