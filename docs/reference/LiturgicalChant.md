# Liturgical Chant

## Definitions

### <a name="LiturgicalChant"></a> Liturgical Chant (`LiturgicalChant`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The liturgical chant's identifier. An unique, increasing integer. | <a href="#LiturgicalChant/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#LiturgicalChant/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#LiturgicalChant/check_penalty">See details</a>
`parameters` | Measurable parameters of a liturgical chant. | <a href="#LiturgicalChant/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#LiturgicalChant/target">See details</a>
`traditions` | The tradition(s) the liturgical chant is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way. | <a href="#LiturgicalChant/traditions">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#LiturgicalChant/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#LiturgicalChant/prerequisites">See details</a>
`src` |  | <a href="#LiturgicalChant/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgicalChant/translations">See details</a>
`enhancements?` |  | <a href="#LiturgicalChant/enhancements">See details</a>

#### <a name="LiturgicalChant/id"></a> `id`

The liturgical chant's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LiturgicalChant/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="LiturgicalChant/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="./_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="LiturgicalChant/parameters"></a> `parameters`

Measurable parameters of a liturgical chant.

- **Type:** <a href="./_ActivatableSkill.md#FastPerformanceParameters">FastPerformanceParameters</a>

#### <a name="LiturgicalChant/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkillTargetCategory.md#AffectedTargetCategories">AffectedTargetCategories</a>

#### <a name="LiturgicalChant/traditions"></a> `traditions`

The tradition(s) the liturgical chant is available for. Note that general
aspects do not have an associated tradition and thus need to be defined in
a special way.

- **Type:** List
- **Items:** <a href="#LiturgicalChant/traditions[]">LiturgicalChant/traditions[]</a>
- **Minimum Items:** `1`

#### <a name="LiturgicalChant/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="LiturgicalChant/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#LiturgyPrerequisites">LiturgyPrerequisites</a>

#### <a name="LiturgicalChant/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="LiturgicalChant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#LiturgicalChantTranslation">LiturgicalChantTranslation</a>&gt;

#### <a name="LiturgicalChant/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="LiturgicalChant/traditions[]"></a> `LiturgicalChant/traditions[]`

- **Type:** <a href="./_Blessed.md#SkillTradition">SkillTradition</a>

---

### <a name="LiturgicalChantTranslation"></a> `LiturgicalChantTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the liturgical chant. | <a href="#LiturgicalChantTranslation/name">See details</a>
`name_compressed?` | A compressed name of the liturgical chant for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet. | <a href="#LiturgicalChantTranslation/name_compressed">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#LiturgicalChantTranslation/effect">See details</a>
`casting_time` |  | <a href="#LiturgicalChantTranslation/casting_time">See details</a>
`cost` |  | <a href="#LiturgicalChantTranslation/cost">See details</a>
`range` |  | <a href="#LiturgicalChantTranslation/range">See details</a>
`duration` |  | <a href="#LiturgicalChantTranslation/duration">See details</a>
`target` |  | <a href="#LiturgicalChantTranslation/target">See details</a>
`errata?` |  | <a href="#LiturgicalChantTranslation/errata">See details</a>

#### <a name="LiturgicalChantTranslation/name"></a> `name`

The name of the liturgical chant.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="LiturgicalChantTranslation/name_compressed"></a> `name_compressed?`

A compressed name of the liturgical chant for use in small areas (e.g.
on character sheet). Should only be defined if the `name` does not fit
on character sheet.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="LiturgicalChantTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="./_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="LiturgicalChantTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="LiturgicalChantTranslation/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="LiturgicalChantTranslation/range"></a> `range`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="LiturgicalChantTranslation/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="LiturgicalChantTranslation/target"></a> `target`

- **Type:** String

#### <a name="LiturgicalChantTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
