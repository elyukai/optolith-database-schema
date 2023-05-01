# Disadvantage

## Definitions

### <a name="Disadvantage"></a> Disadvantage (`Disadvantage`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Disadvantage/id">See details</a>
`levels?` |  | <a href="#Disadvantage/levels">See details</a>
`select_options?` |  | <a href="#Disadvantage/select_options">See details</a>
`maximum?` |  | <a href="#Disadvantage/maximum">See details</a>
`prerequisites?` |  | <a href="#Disadvantage/prerequisites">See details</a>
`ap_value` |  | <a href="#Disadvantage/ap_value">See details</a>
`has_maximum_spent_influence` | Does this disadvantage count towards the maximum of AP to be spent on disadvantages? | <a href="#Disadvantage/has_maximum_spent_influence">See details</a>
`is_exclusive_to_arcane_spellworks` | Does this disadvantage exclusively applies to arcane spellworks and not to magical actions and magical applications? | <a href="#Disadvantage/is_exclusive_to_arcane_spellworks">See details</a>
`src` |  | <a href="#Disadvantage/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Disadvantage/translations">See details</a>

#### <a name="Disadvantage/id"></a> `id`

- **Type:** <a href="./_Activatable.md#Id">Id</a>

#### <a name="Disadvantage/levels"></a> `levels?`

- **Type:** <a href="./_Activatable.md#Levels">Levels</a>

#### <a name="Disadvantage/select_options"></a> `select_options?`

- **Type:** <a href="./_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="Disadvantage/maximum"></a> `maximum?`

- **Type:** <a href="./_Activatable.md#Maximum">Maximum</a>

#### <a name="Disadvantage/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#AdvantageDisadvantagePrerequisites">AdvantageDisadvantagePrerequisites</a>

#### <a name="Disadvantage/ap_value"></a> `ap_value`

- **Type:** <a href="./_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Disadvantage/has_maximum_spent_influence"></a> `has_maximum_spent_influence`

Does this disadvantage count towards the maximum of AP to be spent on
disadvantages?

- **Type:** Boolean

#### <a name="Disadvantage/is_exclusive_to_arcane_spellworks"></a> `is_exclusive_to_arcane_spellworks`

Does this disadvantage exclusively applies to arcane spellworks and not
to magical actions and magical applications?

- **Type:** Boolean

#### <a name="Disadvantage/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Disadvantage/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Disadvantage/translations[key]">Disadvantage/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Disadvantage/translations[key]"></a> `Disadvantage/translations[key]`

- **Type:** <a href="#DisadvantageTranslation">DisadvantageTranslation</a>

---

### <a name="DisadvantageTranslation"></a> `DisadvantageTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#DisadvantageTranslation/name">See details</a>
`name_in_library?` |  | <a href="#DisadvantageTranslation/name_in_library">See details</a>
`input?` | A string that is used as a label for an input field. | <a href="#DisadvantageTranslation/input">See details</a>
`rules` |  | <a href="#DisadvantageTranslation/rules">See details</a>
`range?` | The range. | <a href="#DisadvantageTranslation/range">See details</a>
`ap_value_append?` | A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced. | <a href="#DisadvantageTranslation/ap_value_append">See details</a>
`errata?` |  | <a href="#DisadvantageTranslation/errata">See details</a>

#### <a name="DisadvantageTranslation/name"></a> `name`

- **Type:** <a href="./_Activatable.md#Name">Name</a>

#### <a name="DisadvantageTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="./_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="DisadvantageTranslation/input"></a> `input?`

A string that is used as a label for an input field.

- **Type:** <a href="./_Activatable.md#Input">Input</a>

#### <a name="DisadvantageTranslation/rules"></a> `rules`

- **Type:** <a href="./_Activatable.md#Rules">Rules</a>

#### <a name="DisadvantageTranslation/range"></a> `range?`

The range.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="DisadvantageTranslation/ap_value_append"></a> `ap_value_append?`

A string that gets appended to the default AP Value text with a preceding
space. This always happens if present, even if the generated AP Value text
is replaced.

- **Type:** <a href="./_Activatable.md#AdventurePointsValueAppend">AdventurePointsValueAppend</a>

#### <a name="DisadvantageTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
