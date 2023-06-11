/**
 * @main BlessedTradition
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { AspectReference, AttributeReference, BlessingReference, CombatTechniqueReference, SkillReference } from "../_SimpleReferences.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { SpecialRule } from "./_Tradition.js"

/**
 * @title Blessed Tradition
 */
export type BlessedTradition = {
  id: Activatable.Id

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  /**
   * The tradition's primary attribute. Leave empty if the tradition does not
   * have one.
   */
  primary?: AttributeReference

  /**
   * The tradition's aspects, if any.
   */
  aspects?: [AspectReference, AspectReference]

  /**
   * If a tradition restricts the possible blessings, the blessings that are
   * **not** allowed.
   */
  restricted_blessings?: RestrictedBlessings

  /**
   * A list of favored combat techniques.
   */
  favored_combat_techniques?: FavoredCombatTechniques

  /**
   * A list of favored skills.
   * @minItems 1
   */
  favored_skills: SkillReference[]

  /**
   * On activation of the tradition, a specific number of skills from a list of
   * skills must be selected as being favored.
   */
  favored_skills_selection?: FavoredSkillsSelection

  /**
   * Is this a schamanistic tradition?
   */
  is_shamanistic: boolean

  /**
   * The select option's identifier of the disadvantage *Principles* that
   * represent this tradition's code, if any.
   */
  associated_principles_id?: number

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<BlessedTraditionTranslation>
}

/**
 * If a tradition restricts the possible blessings, the blessings that are
 * **not** allowed.
 */
export type RestrictedBlessings =
  | { tag: "Three"; three: ThreeRestrictedBlessings }
  | { tag: "Six"; six: SixRestrictedBlessings }

/**
 * @uniqueItems
 */
export type ThreeRestrictedBlessings = [
  BlessingReference,
  BlessingReference,
  BlessingReference,
]

/**
 * @uniqueItems
 */
export type SixRestrictedBlessings = [
  BlessingReference,
  BlessingReference,
  BlessingReference,
  BlessingReference,
  BlessingReference,
  BlessingReference,
]

export type FavoredCombatTechniques =
  | { tag: "All"; all: {} }
  | { tag: "AllClose"; all_close: {} }
  | { tag: "AllUsedInHunting"; all_used_in_hunting: {} }
  | { tag: "Specific"; specific: SpecificFavoredCombatTechniques }

export type SpecificFavoredCombatTechniques = {
  /**
   * A list of specific favored combat techniques.
   * @minItems 1
   * @uniqueItems
   */
  list: CombatTechniqueReference[]
}

export type FavoredSkillsSelection = {
  /**
   * The number of skills that can be selected.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The possible set of skills.
   * @minItems 2
   * @uniqueItems
   */
  options: SkillReference[]
}

export type BlessedTraditionTranslation = {
  name: Activatable.Name

  /**
   * A shorter name of the tradition's name, used in liturgical chant
   * descriptions.
   * @minLength 1
   */
  name_compressed?: string

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  /**
   * The special rules of the tradition. They should be sorted like they are
   * in the book.
   * @minItems 1
   */
  special_rules: SpecialRule[]

  errata?: Errata
}

export const config: TypeConfig<BlessedTradition> = {
  name: "BlessedTradition",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("BlessedTradition"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
