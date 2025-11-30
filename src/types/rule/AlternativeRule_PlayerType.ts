import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"

export const PlayerType = Entity(import.meta.url, {
  name: "PlayerType",
  namePlural: "PlayerTypes",
  comment: "Player types describe different playing styles, expectations and wishes of players.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "PlayerType",
        Object({
          name: Required({
            comment: "The player type.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
})
