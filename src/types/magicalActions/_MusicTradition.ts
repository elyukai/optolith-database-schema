import { LocaleMap } from "../_LocaleMap.js"

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
   * @minProperties 1
   */
  translations: LocaleMap<{
    /**
     * The music-tradition-specific name of the entry.
     * @minLength 1
     */
    name: string
  }>
}
