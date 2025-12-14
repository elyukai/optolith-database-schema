import { Entity } from "tsondb/schema/def"
import { ArcaneTraditionType } from "./_ArcaneTradition.js"

export const ArcaneBardTradition = Entity(import.meta.url, {
  name: "ArcaneBardTradition",
  namePlural: "ArcaneBardTraditions",
  type: ArcaneTraditionType("ArcaneBardTraditionTranslation"),
  displayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
