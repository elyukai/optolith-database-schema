import * as DB from "tsondb/schema/dsl"
import { ArcaneTraditionType } from "./_ArcaneTradition.js"

export const ArcaneBardTradition = DB.Entity(import.meta.url, {
  name: "ArcaneBardTradition",
  namePlural: "ArcaneBardTraditions",
  type: ArcaneTraditionType("ArcaneBardTraditionTranslation"),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
