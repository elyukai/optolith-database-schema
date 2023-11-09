# Animal Shape Path

## Definitions

### <a name="AnimalShapePath"></a> Animal Shape Path (`AnimalShapePath`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal shape path's identifier. An unique, increasing integer. | <a href="#AnimalShapePath/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalShapePath/translations">See details</a>

#### <a name="AnimalShapePath/id"></a> `id`

The animal shape path's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShapePath/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimalShapePathTranslation">AnimalShapePathTranslation</a>&gt;

---

### <a name="AnimalShapePathTranslation"></a> `AnimalShapePathTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The animal shape path's name. | <a href="#AnimalShapePathTranslation/name">See details</a>

#### <a name="AnimalShapePathTranslation/name"></a> `name`

The animal shape path's name.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
