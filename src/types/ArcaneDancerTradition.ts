import { Entity } from "tsondb/schema/def"
import { ArcaneTraditionType } from "./_ArcaneTradition.js"

export const ArcaneDancerTradition = Entity(import.meta.url, {
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
