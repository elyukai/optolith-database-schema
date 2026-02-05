import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const ExperienceLevel = DB.Entity(import.meta.url, {
  name: "ExperienceLevel",
  namePlural: "ExperienceLevels",
  comment: "Adventure Points and maximum values at hero creation.",
  type: () =>
    DB.Object({
      adventure_points: DB.Required({
        comment: "The AP value you get.",
        type: DB.Integer(),
      }),
      max_attribute_value: DB.Required({
        comment: "The highest possible attribute value.",
        type: DB.Integer(),
      }),
      max_skill_rating: DB.Required({
        comment: "The highest possible skill rating.",
        type: DB.Integer(),
      }),
      max_combat_technique_rating: DB.Required({
        comment: "The highest possible combat technique rating.",
        type: DB.Integer(),
      }),
      max_attribute_total: DB.Required({
        comment: "The limit for the sum of all attribute values.",
        type: DB.Integer(),
      }),
      max_number_of_spells_liturgical_chants: DB.Required({
        comment: "The maximum of spells/chants you can activate.",
        type: DB.Integer(),
      }),
      max_number_of_unfamiliar_spells: DB.Required({
        comment: "The maximum of spells of an unfamiliar tradition you can activate.",
        type: DB.Integer(),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "ExperienceLevel",
        DB.Object({
          name: DB.Required({
            comment: "The experience level’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  sortOrder: {
    keyPath: "adventure_points",
  },
  uniqueConstraints: [
    {
      keyPath: "adventure_points",
    },
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
