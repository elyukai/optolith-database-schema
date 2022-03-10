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
`has_no_maximum_spent_influence?` | Does this disadvantage not count towards the maximum of AP to be granted by disadvantages? | <a href="#Disadvantage/has_no_maximum_spent_influence">See details</a>
`is_exclusive_to_arcane_spellworks?` | Does this disadvantage exclusively applies to arcane spellworks but not to magical actions and applications? | <a href="#Disadvantage/is_exclusive_to_arcane_spellworks">See details</a>
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

#### <a name="Disadvantage/has_no_maximum_spent_influence"></a> `has_no_maximum_spent_influence?`

Does this disadvantage not count towards the maximum of AP to be granted by
disadvantages?

- **Constant:** `true`

#### <a name="Disadvantage/is_exclusive_to_arcane_spellworks"></a> `is_exclusive_to_arcane_spellworks?`

Does this disadvantage exclusively applies to arcane spellworks but not
to magical actions and applications?

- **Constant:** `true`

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Disadvantage/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#Disadvantage/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#Disadvantage/translations[key]/rules">See details</a>
`range?` | The range. | <a href="#Disadvantage/translations[key]/range">See details</a>
`errata?` |  | <a href="#Disadvantage/translations[key]/errata">See details</a>

#### <a name="Disadvantage/translations[key]/name"></a> `name`

- **Type:** <a href="./_Activatable.md#Name">Name</a>

#### <a name="Disadvantage/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="./_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="Disadvantage/translations[key]/rules"></a> `rules`

- **Type:** <a href="./_Activatable.md#Rules">Rules</a>

#### <a name="Disadvantage/translations[key]/range"></a> `range?`

The range.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disadvantage/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
