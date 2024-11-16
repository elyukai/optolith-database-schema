/**
 * @main Book
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"

export type Book = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight: Weight

  /**
   * The complexity of crafting the item.
   */
  complexity: Complexity

  /**
   * The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<BookTranslation>
}

export type BookTranslation = {
  /**
   * The name of the item.
   */
  name: NonEmptyString

  /**
   * An auxiliary name or label of the item, if available.
   */
  secondary_name?: NonEmptyString

  /**
   * The language the book is written in.
   */
  language: NonEmptyString

  /**
   * The script that was used for the book.
   */
  script: NonEmptyString

  /**
   * Note text.
   */
  note?: NonEmptyMarkdown

  /**
   * Special rules text.
   */
  rules?: NonEmptyMarkdown

  errata?: Errata
}

export const config: TypeConfig<Book, number, "Book"> = {
  name: "Book",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Book"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
