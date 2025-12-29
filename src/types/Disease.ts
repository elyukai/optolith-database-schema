import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { cause, DiseaseTranslation, level, resistance } from "./_DiseasePoison.js"
import { RecipeTradeSecret } from "./equipment/item/_Herbary.js"
import { src } from "./source/_PublicationRef.js"

export const Disease = Entity(import.meta.url, {
  name: "Disease",
  namePlural: "Diseases",
  type: () =>
    Object({
      level,
      resistance,
      cause,
      trade_secret: Optional({
        comment: "AP value and prerequisites of the disease’s trade secret.",
        type: IncludeIdentifier(RecipeTradeSecret),
      }),
      src,
      translations: NestedTranslationMap(Required, "Disease", DiseaseTranslation),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
