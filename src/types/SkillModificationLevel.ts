/**
 * @main SkillModificationLevel
 */

import {
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const SkillModificationLevel = Entity(import.meta.url, {
  name: "SkillModificationLevel",
  namePlural: "SkillModificationLevels",
  type: () =>
    Object({
      fast: Required({
        comment: "Configuration for this level for fast skills (spells, liturgical chants).",
        type: IncludeIdentifier(FastSkillModificationLevelConfig),
      }),
      slow: Required({
        comment: "Configuration for this level for slow skills (rituals, ceremonies).",
        type: IncludeIdentifier(SlowSkillModificationLevelConfig),
      }),
      translations: NestedTranslationMap(
        Optional,
        "SkillModificationLevel",
        Object(
          {
            fast: Optional({
              comment:
                "Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text.",
              type: IncludeIdentifier(LevelTypeConfigTranslation),
            }),
            slow: Optional({
              comment:
                "Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text.",
              type: IncludeIdentifier(LevelTypeConfigTranslation),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
  displayName: null,
  displayNameCustomizer: ({ instance, locales }) => ({
    name: `${instance.fast.casting_time.toString()} Act. / ${instance.slow.casting_time.value.toString()} ${instance.slow.casting_time.unit.kind} (fast/slow) — ${
      instance.fast.range === instance.slow.range
        ? instance.fast.range.toString()
        : `${instance.fast.range.toString()}/${instance.slow.range.toString()} (fast/slow)`
    } m — ${instance.fast.cost.toString()}/${instance.slow.cost.toString()} (fast/slow) AE or KP`,
    localeId: locales[0],
  }),
})

const FastSkillModificationLevelConfig = TypeAlias(import.meta.url, {
  name: "FastSkillModificationLevelConfig",
  type: () =>
    Object({
      casting_time: Required({
        comment: "The casting time in actions.",
        type: Integer({ minimum: 1 }),
      }),
      range: Required({
        comment: "The range in meters.",
        type: Integer({ minimum: 1 }),
      }),
      cost: Required({
        comment: "The cost in AE/KP.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const SlowSkillModificationLevelConfig = TypeAlias(import.meta.url, {
  name: "SlowSkillModificationLevelConfig",
  type: () =>
    Object({
      casting_time: Required({
        comment: "The casting time.",
        type: IncludeIdentifier(SlowSkillCastingTime),
      }),
      range: Required({
        comment: "The range in meters.",
        type: Integer({ minimum: 1 }),
      }),
      cost: Required({
        comment: "The cost in AE/KP.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const SlowSkillCastingTime = TypeAlias(import.meta.url, {
  name: "SlowSkillCastingTime",
  type: () =>
    Object({
      value: Required({
        comment: "The (unitless) casting time.",
        type: Integer({ minimum: 1 }),
      }),
      unit: Required({
        comment: "The unit for the `value`.",
        type: IncludeIdentifier(SlowSkillCastingTimeUnit),
      }),
    }),
})

export const SlowSkillCastingTimeUnit = Enum(import.meta.url, {
  name: "SlowSkillCastingTimeUnit",
  values: () => ({
    Minutes: EnumCase({ type: null }),
    Hours: EnumCase({ type: null }),
  }),
})

const LevelTypeConfigTranslation = TypeAlias(import.meta.url, {
  name: "LevelTypeConfigTranslation",
  comment:
    "Configuration translation of a type for a level. Values set here override the default generated text.",
  type: () =>
    Object({
      range: Required({
        type: String({ minLength: 1 }),
      }),
    }),
})
