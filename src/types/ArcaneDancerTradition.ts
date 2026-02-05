import * as DB from "tsondb/schema/dsl"
import { ArcaneTraditionType } from "./_ArcaneTradition.js"

export const ArcaneDancerTradition = DB.Entity(import.meta.url, {
  name: "ArcaneDancerTradition",
  namePlural: "ArcaneDancerTraditions",
  type: ArcaneTraditionType("ArcaneDancerTraditionTranslation"),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
