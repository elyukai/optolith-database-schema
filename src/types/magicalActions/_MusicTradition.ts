import {
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  ReferenceIdentifier,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"

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
        translations: NestedTranslationMap(
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

export const MusicDuration = TypeAlias(import.meta.url, {
  name: "MusicDuration",
  type: () =>
    Object({
      length: Required({
        type: IncludeIdentifier(MusicLength),
      }),
      reusability: Required({
        type: IncludeIdentifier(MusicReusability),
      }),
    }),
})

const MusicLength = Enum(import.meta.url, {
  name: "MusicLength",
  values: () => ({
    Long: EnumCase({ type: null }),
    Short: EnumCase({ type: null }),
  }),
})

const MusicReusability = Enum(import.meta.url, {
  name: "MusicReusability",
  values: () => ({
    OneTime: EnumCase({ type: null }),
    Sustainable: EnumCase({ type: null }),
  }),
})
