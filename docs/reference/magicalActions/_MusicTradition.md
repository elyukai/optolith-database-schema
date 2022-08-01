# [TITLE MISSING]

## Definitions

### <a name="MusicTraditionReference"></a> `MusicTraditionReference`

A reference to a music tradition with the music-tradition-specific name of
the entry

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

- **Type:** Dictionary
- **Property Values:** <a href="#MusicTraditionReference/translations[key]">MusicTraditionReference/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MusicTraditionReference/translations[key]"></a> `MusicTraditionReference/translations[key]`

- **Type:** <a href="#MusicTraditionReferenceTranslation">MusicTraditionReferenceTranslation</a>

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

- **Possible values:** `"Long"`, `"Short"`

---

### <a name="MusicReusability"></a> `MusicReusability`

- **Possible values:** `"OneTime"`, `"Sustainable"`
