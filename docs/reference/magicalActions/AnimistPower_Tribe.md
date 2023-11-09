# Tribe

## Definitions

### <a name="Tribe"></a> Tribe (`Tribe`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The tribe's identifier. An unique, increasing integer. | <a href="#Tribe/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Tribe/translations">See details</a>

#### <a name="Tribe/id"></a> `id`

The tribe's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Tribe/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#TribeTranslation">TribeTranslation</a>&gt;

---

### <a name="TribeTranslation"></a> `TribeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The tribe name. | <a href="#TribeTranslation/name">See details</a>

#### <a name="TribeTranslation/name"></a> `name`

The tribe name.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
