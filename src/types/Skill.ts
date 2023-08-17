/**
 * @main Skill
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { ImprovementCost } from "./_ImprovementCost.js"
import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "./_NonEmptyString.js"
import { SkillGroupReference } from "./_SimpleReferences.js"
import { SkillCheck } from "./_SkillCheck.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Skill
 */
export type Skill = {
  /**
   * The skill's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Lists the linked three attributes used to make a skill check.
   */
  check: SkillCheck

  /**
   * Lists applications for the skill, if any. This does not necessarily include
   * all possible applications. There may also be new applications that could be
   * purchased via certain advantages or special abilities.
   */
  applications: Applications

  /**
   * Indicates whether encumbrance gives a penalty for checks with the skill.
   */
  encumbrance: Encumbrance

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  /**
   * The skill group this skill belongs to.
   */
  group: SkillGroupReference

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<SkillTranslation>
}

export type SkillTranslation = {
  /**
   * The name of the skill.
   */
  name: NonEmptyString

  /**
   * If there are options available that can not be put into a selection
   * list (like different cults), provide the label text for the input
   * element here. Otherwise leave empty.
   */
  applications_input_label?: NonEmptyString

  /**
   * The text listing the certain circumstances in which the encumbrance may
   * count. This text must be used if `encumbrance` is set to `"Maybe"`,
   * otherwise it is ignored if defined.
   */
  encumbrance_description?: NonEmptyString

  /**
   * Mentions any tools from the equipment list that are necessary to employ
   * the skill.
   */
  tools?: NonEmptyMarkdown

  /**
   * Gives examples of the effects that various QL might provide.
   */
  quality: NonEmptyMarkdown

  /**
   * Lists examples of results for a failed check.
   */
  failed: NonEmptyMarkdown

  /**
   * Lists examples of results for a critical success.
   */
  critical: NonEmptyMarkdown

  /**
   * Lists examples of results for botches.
   */
  botch: NonEmptyMarkdown

  errata?: Errata
}

/**
 * A category. All available entries from the specified category will be
 * included as separate applications.
 */
export type ApplicationCategory =
  | "BlessedTraditions"
  | "Diseases"
  | "Regions"

/**
 * The skill's applications.
 */
export type Applications =
  | { tag: "Derived"; derived: ApplicationCategory }
  | { tag: "Explicit"; explicit: SpecificApplications }

/**
 * A list of explicit applications.
 */
export type SpecificApplications = Application[]

/**
 * An explicit skill application.
 */
export type Application = {
  /**
   * The skill application's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ApplicationTranslation>
}

export type ApplicationTranslation = {
  /**
   * The skill application's name.
   */
  name: NonEmptyString
}

/**
 * Indicates whether encumbrance gives a penalty for checks with the skill.
 */
export type Encumbrance =
  | "True"
  | "False"
  | "Maybe"

export const config: TypeConfig<Skill> = {
  name: "Skill",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Skill"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
