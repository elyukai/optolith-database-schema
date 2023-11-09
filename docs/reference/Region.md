# Region

## Definitions

### <a name="Region"></a> Region (`Region`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The region's identifier. An unique, increasing integer. | <a href="#Region/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Region/translations">See details</a>

#### <a name="Region/id"></a> `id`

The region's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Region/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RegionTranslation">RegionTranslation</a>&gt;

---

### <a name="RegionTranslation"></a> `RegionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The region name. | <a href="#RegionTranslation/name">See details</a>

#### <a name="RegionTranslation/name"></a> `name`

The region name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
