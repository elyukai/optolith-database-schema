/**
 * @main SkillModificationLevel
 */

import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const SkillModificationLevel = DB.Entity(import.meta.url, {
  name: "SkillModificationLevel",
  namePlural: "SkillModificationLevels",
  type: () =>
    DB.Object({
      fast: DB.Required({
        comment: "Configuration for this level for fast skills (spells, liturgical chants).",
        type: DB.IncludeIdentifier(FastSkillModificationLevelConfig),
      }),
      slow: DB.Required({
        comment: "Configuration for this level for slow skills (rituals, ceremonies).",
        type: DB.IncludeIdentifier(SlowSkillModificationLevelConfig),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "SkillModificationLevel",
        DB.Object(
          {
            fast: DB.Optional({
              comment:
                "Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text.",
              type: DB.IncludeIdentifier(LevelTypeConfigTranslation),
            }),
            slow: DB.Optional({
              comment:
                "Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text.",
              type: DB.IncludeIdentifier(LevelTypeConfigTranslation),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
  instanceDisplayName: null,
  instanceDisplayNameCustomizer: ({ instance, locales }) => {
    const getRangeTranslationOrNormalValue = (type: "slow" | "fast") => {
      const translation =
        locales.reduce(
          (acc: string | undefined, locale) =>
            acc ?? instance.translations?.[locale]?.[type]?.range,
          undefined,
        ) ?? instance[type].range

      return typeof translation === "number" ? `${translation.toString()} m` : translation
    }

    return {
      name: `${instance.fast.casting_time.toString()} Act. / ${instance.slow.casting_time.value.toString()} ${instance.slow.casting_time.unit.kind} (fast/slow) — ${
        instance.fast.range === instance.slow.range
          ? getRangeTranslationOrNormalValue("fast")
          : `${getRangeTranslationOrNormalValue("fast")}/${getRangeTranslationOrNormalValue("slow")} (fast/slow)`
      } — ${instance.fast.cost.toString()}/${instance.slow.cost.toString()} (fast/slow) AE or KP`,
      localeId: locales[0],
    }
  },
  sortOrder: {
    keyPath: "fast.cost",
  },
  uniqueConstraints: [
    { keyPath: ["fast", "casting_time"] },
    { keyPath: ["fast", "range"] },
    { keyPath: ["fast", "cost"] },
    { keyPath: ["slow", "casting_time"] },
    { keyPath: ["slow", "range"] },
    { keyPath: ["slow", "cost"] },
  ],
})

const FastSkillModificationLevelConfig = DB.TypeAlias(import.meta.url, {
  name: "FastSkillModificationLevelConfig",
  type: () =>
    DB.Object({
      casting_time: DB.Required({
        comment: "The casting time in actions.",
        type: DB.Integer({ minimum: 1 }),
      }),
      range: DB.Required({
        comment: "The range in meters.",
        type: DB.Integer({ minimum: 1 }),
      }),
      cost: DB.Required({
        comment: "The cost in AE/KP.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const SlowSkillModificationLevelConfig = DB.TypeAlias(import.meta.url, {
  name: "SlowSkillModificationLevelConfig",
  type: () =>
    DB.Object({
      casting_time: DB.Required({
        comment: "The casting time.",
        type: DB.IncludeIdentifier(SlowSkillCastingTime),
      }),
      range: DB.Required({
        comment: "The range in meters.",
        type: DB.Integer({ minimum: 1 }),
      }),
      cost: DB.Required({
        comment: "The cost in AE/KP.",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const SlowSkillCastingTime = DB.TypeAlias(import.meta.url, {
  name: "SlowSkillCastingTime",
  type: () =>
    DB.Object({
      value: DB.Required({
        comment: "The (unitless) casting time.",
        type: DB.Integer({ minimum: 1 }),
      }),
      unit: DB.Required({
        comment: "The unit for the `value`.",
        type: DB.IncludeIdentifier(SlowSkillCastingTimeUnit),
      }),
    }),
})

export const SlowSkillCastingTimeUnit = DB.Enum(import.meta.url, {
  name: "SlowSkillCastingTimeUnit",
  values: () => ({
    Minutes: DB.EnumCase({ type: null }),
    Hours: DB.EnumCase({ type: null }),
  }),
})

const LevelTypeConfigTranslation = DB.TypeAlias(import.meta.url, {
  name: "LevelTypeConfigTranslation",
  comment:
    "Configuration translation of a type for a level. Values set here override the default generated text.",
  type: () =>
    DB.Object({
      range: DB.Required({
        type: DB.String({ minLength: 1 }),
      }),
    }),
})
