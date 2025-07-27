import FileDB

export const MusicTraditionReference = (traditionIdentifier: ReferenceIdentifier) =>
  TypeAlias(import.meta.url, {
    name: traditionIdentifier.entity.name + "Reference",
    comment:
      "A reference to a music tradition with the music-tradition-specific name of the entry.",
    type: () =>
      Object({
        id: Required({
          comment: "The music tradition’s identifier.",
          type: traditionIdentifier,
        }),
        translations: NestedLocaleMap(
          Required,
          traditionIdentifier.entity.name + "ReferenceTranslation",
          Object({
            name: Required({
              comment: "The music-tradition-specific name of the entry.",
              type: String({ minLength: 1 }),
            }),
          })
        ),
      }),
  })

@Embedded
public struct MusicDuration {
      length: Required({
        type: IncludeIdentifier(MusicLength),
      }),
      reusability: Required({
        type: IncludeIdentifier(MusicReusability),
      }),
  }

@ModelEnum
public enum MusicLength {
    case Long
    case Short
}

@ModelEnum
public enum MusicReusability {
    case OneTime
    case Sustainable
}
