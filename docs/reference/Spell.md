# Spell

## Definitions

### <a name="Spell"></a> Spell (`Spell`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The spell's identifier. An unique, increasing integer. | <a href="#Spell/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Spell/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#Spell/check_penalty">See details</a>
`parameters` | Measurable parameters of a spell. | <a href="#Spell/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Spell/target">See details</a>
`property` | The associated property. | <a href="#Spell/property">See details</a>
`traditions` | The tradition(s) the spell is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions. | <a href="#Spell/traditions">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#Spell/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#Spell/prerequisites">See details</a>
`src` |  | <a href="#Spell/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Spell/translations">See details</a>
`enhancements?` |  | <a href="#Spell/enhancements">See details</a>

#### <a name="Spell/id"></a> `id`

The spell's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Spell/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Spell/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="./_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="Spell/parameters"></a> `parameters`

Measurable parameters of a spell.

- **Type:** <a href="./_ActivatableSkill.md#FastPerformanceParameters">FastPerformanceParameters</a>

#### <a name="Spell/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkillTargetCategory.md#AffectedTargetCategories">AffectedTargetCategories</a>

#### <a name="Spell/property"></a> `property`

The associated property.

- **Type:** <a href="./_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="Spell/traditions"></a> `traditions`

The tradition(s) the spell is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.

- **Type:** <a href="./_Spellwork.md#Traditions">Traditions</a>

#### <a name="Spell/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Spell/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#SpellworkPrerequisites">SpellworkPrerequisites</a>

#### <a name="Spell/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Spell/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SpellTranslation">SpellTranslation</a>&gt;

#### <a name="Spell/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="SpellTranslation"></a> `SpellTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the spell. | <a href="#SpellTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#SpellTranslation/effect">See details</a>
`casting_time` |  | <a href="#SpellTranslation/casting_time">See details</a>
`cost` |  | <a href="#SpellTranslation/cost">See details</a>
`range` |  | <a href="#SpellTranslation/range">See details</a>
`duration` |  | <a href="#SpellTranslation/duration">See details</a>
`target` |  | <a href="#SpellTranslation/target">See details</a>
`errata?` |  | <a href="#SpellTranslation/errata">See details</a>

#### <a name="SpellTranslation/name"></a> `name`

The name of the spell.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SpellTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="./_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="SpellTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="SpellTranslation/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="SpellTranslation/range"></a> `range`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="SpellTranslation/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="SpellTranslation/target"></a> `target`

- **Type:** String

#### <a name="SpellTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
