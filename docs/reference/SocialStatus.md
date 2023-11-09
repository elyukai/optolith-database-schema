# Social Status

## Definitions

### <a name="SocialStatus"></a> Social Status (`SocialStatus`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The social status' identifier. An unique, increasing integer. | <a href="#SocialStatus/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SocialStatus/translations">See details</a>

#### <a name="SocialStatus/id"></a> `id`

The social status' identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SocialStatus/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SocialStatusTranslation">SocialStatusTranslation</a>&gt;

---

### <a name="SocialStatusTranslation"></a> `SocialStatusTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The social status name. | <a href="#SocialStatusTranslation/name">See details</a>

#### <a name="SocialStatusTranslation/name"></a> `name`

The social status name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
