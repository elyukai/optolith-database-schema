# Advantage

## Definitions

### <a name="Advantage"></a> Advantage (`Advantage`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Advantage/id">See details</a>
`levels?` |  | <a href="#Advantage/levels">See details</a>
`select_options?` |  | <a href="#Advantage/select_options">See details</a>
`skill_applications?` |  | <a href="#Advantage/skill_applications">See details</a>
`skill_uses?` |  | <a href="#Advantage/skill_uses">See details</a>
`maximum?` |  | <a href="#Advantage/maximum">See details</a>
`prerequisites?` |  | <a href="#Advantage/prerequisites">See details</a>
`ap_value` |  | <a href="#Advantage/ap_value">See details</a>
`has_maximum_spent_influence` | Does this advantage count towards the maximum of AP to be spent on advantages? | <a href="#Advantage/has_maximum_spent_influence">See details</a>
`is_exclusive_to_arcane_spellworks` | Does this advantage exclusively applies to arcane spellworks and not to magical actions and magical applications? | <a href="#Advantage/is_exclusive_to_arcane_spellworks">See details</a>
`src` |  | <a href="#Advantage/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Advantage/translations">See details</a>

#### <a name="Advantage/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="Advantage/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="Advantage/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="Advantage/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="Advantage/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="Advantage/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="Advantage/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#AdvantageDisadvantagePrerequisites">AdvantageDisadvantagePrerequisites</a>

#### <a name="Advantage/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Advantage/has_maximum_spent_influence"></a> `has_maximum_spent_influence`

Does this advantage count towards the maximum of AP to be spent on advantages?

- **Type:** Boolean
- **Default:** `true`

#### <a name="Advantage/is_exclusive_to_arcane_spellworks"></a> `is_exclusive_to_arcane_spellworks`

Does this advantage exclusively applies to arcane spellworks and not to magical actions and magical applications?

- **Type:** Boolean
- **Default:** `false`

#### <a name="Advantage/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Advantage/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AdvantageTranslation">AdvantageTranslation</a>&gt;

---

### <a name="AdvantageTranslation"></a> `AdvantageTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AdvantageTranslation/name">See details</a>
`name_in_library?` |  | <a href="#AdvantageTranslation/name_in_library">See details</a>
`input?` | A string that is used as a label for an input field. | <a href="#AdvantageTranslation/input">See details</a>
`rules` |  | <a href="#AdvantageTranslation/rules">See details</a>
`range?` | The range. | <a href="#AdvantageTranslation/range">See details</a>
`ap_value?` |  | <a href="#AdvantageTranslation/ap_value">See details</a>
`ap_value_append?` | A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced. | <a href="#AdvantageTranslation/ap_value_append">See details</a>
`errata?` |  | <a href="#AdvantageTranslation/errata">See details</a>

#### <a name="AdvantageTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="AdvantageTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="AdvantageTranslation/input"></a> `input?`

A string that is used as a label for an input field.

- **Type:** <a href="#Input">Input</a>

#### <a name="AdvantageTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="AdvantageTranslation/range"></a> `range?`

The range.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AdvantageTranslation/ap_value"></a> `ap_value?`

- **Type:** <a href="#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="AdvantageTranslation/ap_value_append"></a> `ap_value_append?`

A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced.

- **Type:** <a href="#AdventurePointsValueAppend">AdventurePointsValueAppend</a>

#### <a name="AdvantageTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
