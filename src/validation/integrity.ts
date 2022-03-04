export interface ReferencialIntegrityValidators {
  checkLocaleId: (localeId: string) => boolean
}

export const getReferencialIntegrityErrors =
  <T extends string | number>(ids: T[], check: (id: T) => boolean) =>
    ids.filter(id => !check(id))

export const getReferencialIntegrityErrorsWith =
  <T, U extends string | number>(elements: T[], transform: (element: T) => U, check: (id: U) => boolean) =>
    elements.filter(element => !check(transform(element)))

interface Translatable<T> {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    [localeId: string]: T
  }
}

export const getReferencialIntegrityErrorsForTranslatable =
  <T>(translatable: Translatable<T>, checkLocaleId: (id: string) => boolean) =>
    getReferencialIntegrityErrors(Object.keys(translatable.translations), checkLocaleId)
