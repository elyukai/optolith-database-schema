import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../Locale.js"

export const PlayerType = DB.Entity(import.meta.url, {
  name: "PlayerType",
  namePlural: "PlayerTypes",
  comment: "Player types describe different playing styles, expectations and wishes of players.",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "PlayerType",
        DB.Object({
          name: DB.Required({
            comment: "The player type.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
