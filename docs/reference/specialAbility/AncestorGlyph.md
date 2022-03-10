# Ancestor Glyph

## Definitions

### <a name="AncestorGlyph"></a> Ancestor Glyph (`AncestorGlyph`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AncestorGlyph/id">See details</a>
`levels?` |  | <a href="#AncestorGlyph/levels">See details</a>
`select_options?` |  | <a href="#AncestorGlyph/select_options">See details</a>
`maximum?` |  | <a href="#AncestorGlyph/maximum">See details</a>
`prerequisites?` |  | <a href="#AncestorGlyph/prerequisites">See details</a>
`ap_value` |  | <a href="#AncestorGlyph/ap_value">See details</a>
`src` |  | <a href="#AncestorGlyph/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AncestorGlyph/translations">See details</a>

#### <a name="AncestorGlyph/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="AncestorGlyph/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="AncestorGlyph/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="AncestorGlyph/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="AncestorGlyph/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="AncestorGlyph/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AncestorGlyph/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AncestorGlyph/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AncestorGlyph/translations[key]">AncestorGlyph/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AncestorGlyph/translations[key]"></a> `AncestorGlyph/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AncestorGlyph/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#AncestorGlyph/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#AncestorGlyph/translations[key]/rules">See details</a>
`errata?` |  | <a href="#AncestorGlyph/translations[key]/errata">See details</a>

#### <a name="AncestorGlyph/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="AncestorGlyph/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="AncestorGlyph/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="AncestorGlyph/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
