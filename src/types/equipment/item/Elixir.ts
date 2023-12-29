/**
 * @main Elixir
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LaboratoryLevel, RecipeTradeSecret } from "./_Herbary.js"

export type Elixir = {
  /**
   * The elixir's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The cost per ingredient level in silverthalers.
   */
  cost_per_ingredient_level: number

  /**
   * The laboratory level needed to brew the elixir.
   */
  laboratory: LaboratoryLevel

  /**
   * The brewing difficulty, which represents the challenge of creating an
   * elixir.
   * @integer
   */
  brewing_difficulty: number

  /**
   * AP value and prerequisites of the elixir recipe’s trade secret.
   */
  trade_secret: RecipeTradeSecret

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ElixirTranslation>
}

export type ElixirTranslation = {
  /**
   * The name of the elixir.
   */
  name: NonEmptyString

  /**
   * A list of alternative names.
   * @minItems 1
   */
  alternative_names?: AlternativeName[]

  /**
   * A list of typical ingredients.
   * @minItems 1
   * @uniqueItems
   */
  typical_ingredients: NonEmptyString[]

  /**
   * Prerequsites for the brewing process, if any.
   */
  brewing_process_prerequisites?: NonEmptyMarkdown

  /**
   * The list of effects for each quality level. The first element
   * represents QL 1, the second element QL 2, and so on.
   */
  quality_levels: [
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
    NonEmptyMarkdown,
  ]

  errata?: Errata
}

export const config: TypeConfig<Elixir, number, "Elixir"> = {
  name: "Elixir",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Elixir"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
