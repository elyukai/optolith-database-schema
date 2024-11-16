/**
 * @main Cantrip
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { CastingTimeDuringLovemaking } from "./_ActivatableSkillCastingTime.js"
import { DurationUnit } from "./_ActivatableSkillDuration.js"
import { FixedRange } from "./_ActivatableSkillRange.js"
import { AffectedTargetCategories } from "./_ActivatableSkillTargetCategory.js"
import { Enhancements } from "./_Enhancements.js"
import { MagicalTraditionIdentifier } from "./_Identifier.js"
import { LocaleMap } from "./_LocaleMap.js"
import { ResponsiveText } from "./_ResponsiveText.js"
import {
  CurriculumReference,
  MagicalTraditionReference,
  PropertyReference,
} from "./_SimpleReferences.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

/**
 * @title Cantrip
 */
export type Cantrip = {
  /**
   * The cantrip's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Measurable parameters of a cantrip.
   */
  parameters: CantripPerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: AffectedTargetCategories

  /**
   * The associated property.
   */
  property: PropertyReference

  /**
   * A note specifying the dissemination of the cantrip in different traditions.
   * Sometimes a cantrip is exclusively available to one or more specific
   * traditions, but usually one the academies and traditions are listed the
   * cantrip is most commonly teached in.
   */
  note?: CantripNote

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CantripTranslation>

  enhancements?: Enhancements
}

export type CantripNote =
  | { tag: "Exclusive"; exclusive: ExclusiveCantripNote }
  | { tag: "Common"; common: CommonCantripNotes }

export type ExclusiveCantripNote = {
  /**
   * The traditions the cantrip is exclusively available to.
   * @minItems 1
   * @uniqueItems
   */
  traditions: MagicalTraditionReference[]
}

export type CommonCantripNotes = {
  /**
   * The academies and traditions the cantrip is commonly teached in.
   * @minItems 1
   * @uniqueItems
   */
  list: CommonCantripNote[]
}

export type CommonCantripNote =
  | { tag: "Academy"; academy: CurriculumReference }
  | { tag: "Tradition"; tradition: CommonCantripTraditionNote }

export type CommonCantripTraditionNote = {
  /**
   * The magical tradition's identifier.
   */
  id: MagicalTraditionIdentifier

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<CommonCantripTraditionNoteTranslation>
}

export type CommonCantripTraditionNoteTranslation = {
  /**
   * A note, appended to the generated string in parenthesis.
   * @minLength 1
   */
  note: string
}

export type CantripTranslation = {
  /**
   * The name of the spell.
   * @minLength 1
   */
  name: string

  /**
   * The effect description.
   * @markdown
   * @minLength 1
   */
  effect: string

  /**
   * @deprecated
   */
  range: string

  /**
   * @deprecated
   */
  duration: string

  /**
   * @deprecated
   */
  target: string

  errata?: Errata
}

/**
 * Measurable parameters of a blessing.
 */
export type CantripPerformanceParameters = {
  range: CantripRange
  duration: CantripDuration
}

export type CantripRange =
  | { tag: "Self"; self: {} }
  | { tag: "Touch"; touch: {} }
  | { tag: "Fixed"; fixed: FixedRange }

export type CantripDuration =
  | { tag: "Immediate"; immediate: {} }
  | { tag: "Fixed"; fixed: FixedCantripDuration }
  | { tag: "DuringLovemaking"; during_lovemaking: CastingTimeDuringLovemaking }
  | { tag: "Indefinite"; indefinite: IndefiniteCantripDuration }

export type FixedCantripDuration = {
  /**
   * If `true`, the duration is a maximum duration.
   */
  is_maximum?: true

  /**
   * The (unitless) duration.
   * @integer
   * @minimum 1
   */
  value: number

  /**
   * The duration unit.
   */
  unit: DurationUnit
}

export type IndefiniteCantripDuration = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<IndefiniteCantripDurationTranslation>
}

export type IndefiniteCantripDurationTranslation = {
  /**
   * A description of the duration.
   */
  description: ResponsiveText
}

export const config: TypeConfig<Cantrip, Cantrip["id"], "Cantrip"> = {
  name: "Cantrip",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Cantrip"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
