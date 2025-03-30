# [TITLE MISSING]

## Definitions

### <a name="MusicTraditionReference"></a> `MusicTraditionReference`

A reference to a music tradition with the music-tradition-specific name of the entry

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The music tradition's identifier. | <a href="#MusicTraditionReference/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MusicTraditionReference/translations">See details</a>

#### <a name="MusicTraditionReference/id"></a> `id`

The music tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MusicTraditionReference/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MusicTraditionReferenceTranslation">MusicTraditionReferenceTranslation</a>&gt;

---

### <a name="MusicTraditionReferenceTranslation"></a> `MusicTraditionReferenceTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The music-tradition-specific name of the entry. | <a href="#MusicTraditionReferenceTranslation/name">See details</a>

#### <a name="MusicTraditionReferenceTranslation/name"></a> `name`

The music-tradition-specific name of the entry.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="MusicDuration"></a> `MusicDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`length` |  | <a href="#MusicDuration/length">See details</a>
`reusability` |  | <a href="#MusicDuration/reusability">See details</a>

#### <a name="MusicDuration/length"></a> `length`

- **Type:** <a href="#MusicLength">MusicLength</a>

#### <a name="MusicDuration/reusability"></a> `reusability`

- **Type:** <a href="#MusicReusability">MusicReusability</a>

---

### <a name="MusicLength"></a> `MusicLength`

- **Type:** Union
- **Cases:** <a href="#MusicLength'0">MusicLength'0</a> | <a href="#MusicLength'1">MusicLength'1</a>

---

### <a name="MusicLength'0"></a> `MusicLength'0`

- **Constant:** `"Long"`

---

### <a name="MusicLength'1"></a> `MusicLength'1`

- **Constant:** `"Short"`

---

### <a name="MusicReusability"></a> `MusicReusability`

- **Type:** Union
- **Cases:** <a href="#MusicReusability'0">MusicReusability'0</a> | <a href="#MusicReusability'1">MusicReusability'1</a>

---

### <a name="MusicReusability'0"></a> `MusicReusability'0`

- **Constant:** `"OneTime"`

---

### <a name="MusicReusability'1"></a> `MusicReusability'1`

- **Constant:** `"Sustainable"`
