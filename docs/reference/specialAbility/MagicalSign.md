# Magical Sign

## Definitions

### <a name="MagicalSign"></a> Magical Sign (`MagicalSign`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicalSign/id">See details</a>
`prerequisites?` |  | <a href="#MagicalSign/prerequisites">See details</a>
`property` | The associated magic property. | <a href="#MagicalSign/property">See details</a>
`ap_value` | The adventure points value. | <a href="#MagicalSign/ap_value">See details</a>
`src` |  | <a href="#MagicalSign/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalSign/translations">See details</a>

#### <a name="MagicalSign/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="MagicalSign/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="MagicalSign/property"></a> `property`

The associated magic property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="MagicalSign/ap_value"></a> `ap_value`

The adventure points value.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="MagicalSign/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalSign/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicalSignTranslation">MagicalSignTranslation</a>&gt;

---

### <a name="MagicalSignTranslation"></a> `MagicalSignTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#MagicalSignTranslation/name">See details</a>
`name_in_library?` |  | <a href="#MagicalSignTranslation/name_in_library">See details</a>
`effect` |  | <a href="#MagicalSignTranslation/effect">See details</a>
`errata?` |  | <a href="#MagicalSignTranslation/errata">See details</a>

#### <a name="MagicalSignTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="MagicalSignTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="MagicalSignTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="MagicalSignTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
