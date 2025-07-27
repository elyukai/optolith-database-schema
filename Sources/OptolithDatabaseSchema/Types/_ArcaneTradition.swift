import FileDB

export const ArcaneTraditionType =
  <TN extends string>(translationName: TN) =>
  () =>
    Object({
      prerequisites: Required({
        type: IncludeIdentifier(ArcaneTraditionPrerequisites),
      }),
      translations: NestedLocaleMap(
        Required,
        translationName,
        Object({

        /// The arcane tradition’s name.
        let name: String({ minLength: 1 })
        })
      ),
    })
