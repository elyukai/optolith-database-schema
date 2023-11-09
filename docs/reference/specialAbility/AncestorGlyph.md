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
`ae_cost` | The AE cost of the ancestor glyph. | <a href="#AncestorGlyph/ae_cost">See details</a>
`ap_value` |  | <a href="#AncestorGlyph/ap_value">See details</a>
`src` |  | <a href="#AncestorGlyph/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AncestorGlyph/translations">See details</a>

#### <a name="AncestorGlyph/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="AncestorGlyph/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="AncestorGlyph/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="AncestorGlyph/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="AncestorGlyph/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="AncestorGlyph/ae_cost"></a> `ae_cost`

The AE cost of the ancestor glyph.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AncestorGlyph/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AncestorGlyph/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AncestorGlyph/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AncestorGlyphTranslation">AncestorGlyphTranslation</a>&gt;

---

### <a name="AncestorGlyphTranslation"></a> `AncestorGlyphTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AncestorGlyphTranslation/name">See details</a>
`name_in_library?` |  | <a href="#AncestorGlyphTranslation/name_in_library">See details</a>
`rules` |  | <a href="#AncestorGlyphTranslation/rules">See details</a>
`errata?` |  | <a href="#AncestorGlyphTranslation/errata">See details</a>

#### <a name="AncestorGlyphTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="AncestorGlyphTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="AncestorGlyphTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="AncestorGlyphTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
