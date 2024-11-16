# Zibilja Ritual

## Definitions

### <a name="ZibiljaRitual"></a> Zibilja Ritual (`ZibiljaRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The zibilja ritual's identifier. An unique, increasing integer. | <a href="#ZibiljaRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#ZibiljaRitual/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#ZibiljaRitual/check_penalty">See details</a>
`parameters` | Measurable parameters of a zibilja ritual. | <a href="#ZibiljaRitual/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#ZibiljaRitual/target">See details</a>
`property` | The associated property. | <a href="#ZibiljaRitual/property">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#ZibiljaRitual/improvement_cost">See details</a>
`src` |  | <a href="#ZibiljaRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ZibiljaRitual/translations">See details</a>

#### <a name="ZibiljaRitual/id"></a> `id`

The zibilja ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ZibiljaRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="ZibiljaRitual/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="ZibiljaRitual/parameters"></a> `parameters`

Measurable parameters of a zibilja ritual.

- **Type:** <a href="#ZibiljaRitualPerformanceParameters">ZibiljaRitualPerformanceParameters</a>

#### <a name="ZibiljaRitual/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkillTargetCategory.md#AffectedTargetCategories">AffectedTargetCategories</a>

#### <a name="ZibiljaRitual/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="ZibiljaRitual/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="ZibiljaRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ZibiljaRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ZibiljaRitualTranslation">ZibiljaRitualTranslation</a>&gt;

---

### <a name="ZibiljaRitualTranslation"></a> `ZibiljaRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the zibilja ritual. | <a href="#ZibiljaRitualTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#ZibiljaRitualTranslation/effect">See details</a>
`casting_time` |  | <a href="#ZibiljaRitualTranslation/casting_time">See details</a>
`cost` |  | <a href="#ZibiljaRitualTranslation/cost">See details</a>
`range` |  | <a href="#ZibiljaRitualTranslation/range">See details</a>
`duration` |  | <a href="#ZibiljaRitualTranslation/duration">See details</a>
`target` |  | <a href="#ZibiljaRitualTranslation/target">See details</a>
`errata?` |  | <a href="#ZibiljaRitualTranslation/errata">See details</a>

#### <a name="ZibiljaRitualTranslation/name"></a> `name`

The name of the zibilja ritual.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ZibiljaRitualTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="ZibiljaRitualTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="ZibiljaRitualTranslation/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="ZibiljaRitualTranslation/range"></a> `range`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="ZibiljaRitualTranslation/duration"></a> `duration`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="ZibiljaRitualTranslation/target"></a> `target`

- **Type:** String

#### <a name="ZibiljaRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ZibiljaRitualPerformanceParameters"></a> `ZibiljaRitualPerformanceParameters`

- **Type:** <a href="../_ActivatableSkill.md#OneTimePerformanceParameters">OneTimePerformanceParameters</a>&lt;<a href="../_ActivatableSkillCastingTime.md#CastingTime">CastingTime</a>&gt;
