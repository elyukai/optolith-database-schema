/**
 * @main Publication
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyString } from "../_NonEmptyString.js"
import { PublicationPrerequisites } from "../_Prerequisite.js"

/**
 * @title Publication
 */
export type Publication = {
  /**
   * The publication's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The publication category.
   */
  category: Category

  /**
   * If the publication may contain adult content.
   */
  contains_adult_content: boolean

  /**
   * If the publication is not (fully) implemented and thus needs to be excluded
   * from * stable releases.
   */
  is_missing_implementation: boolean

  /**
   * The specific other publications this publication depends on data from.
   */
  prerequisites?: PublicationPrerequisites

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<PublicationTranslation>
}

export type PublicationTranslation = {
  /**
   * The publisher's publication identifier.
   * @minLength 1
   * @example US25001
   */
  id?: string

  /**
   * The publication's name.
   */
  name: NonEmptyString

  /**
   * The publication's abbreviation.
   */
  abbreviation: NonEmptyString

  /**
   * The publication's release date.
   * @format date
   */
  release_date?: string

  /**
   * If this publication translation is not (fully) implemented and thus needs
   * to be excluded from stable releases.
   */
  is_missing_implementation: boolean
}

/**
 * The publication category.
 */
export enum Category {
  CoreRules = "CoreRules",
  ExpansionRules = "ExpansionRules",
  Sourcebook = "Sourcebook",
  RegionalSourcebook = "RegionalSourcebook",
}

export const validateSchema = validateSchemaCreator<Publication>(import.meta.url)
