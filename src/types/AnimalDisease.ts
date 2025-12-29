import { Array, Entity, IncludeIdentifier, Object, Required } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { cause, Cause, DiseaseTranslation, level, resistance } from "./_DiseasePoison.js"
import { AnimalTypeIdentifier } from "./_Identifier.js"
import { src } from "./source/_PublicationRef.js"

export const AnimalDisease = Entity(import.meta.url, {
  name: "AnimalDisease",
  namePlural: "AnimalDiseases",
  type: () =>
    Object({
      level,
      resistance,
      cause,
      animal_types: Required({
        comment: `The animal types this disease applies to.

If no animal types are given, the animal disease applies to all animal types.`,
        type: Array(AnimalTypeIdentifier()),
      }),
      communicability_to_intelligent_creatures: Required({
        comment: `If and at which chance the disease can be communicated to intelligent creatures.

If no causes are given, the disease is not communicable to intelligent creatures.`,
        type: Array(IncludeIdentifier(Cause)),
      }),
      src,
      translations: NestedTranslationMap(Required, "AnimalDisease", DiseaseTranslation),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
