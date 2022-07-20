import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"

/**
 * A reference to a music tradition with the music-tradition-specific name of
 * the entry
 */
export type MusicTraditionReference = {
  /**
   * The music tradition's identifier.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<MusicTraditionReferenceTranslation>
}

export type MusicTraditionReferenceTranslation = {
  /**
   * The music-tradition-specific name of the entry.
   */
  name: NonEmptyString
}

export type MusicDuration = {
  length: MusicLength
  reusability: MusicReusability
}

export type MusicLength =
  | { tag: "Long" }
  | { tag: "Short" }

export type MusicReusability =
  | { tag: "OneTime" }
  | { tag: "Sustainable" }
