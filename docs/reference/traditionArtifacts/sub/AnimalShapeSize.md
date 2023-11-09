# Animal Shape Size

## Definitions

### <a name="AnimalShapeSize"></a> Animal Shape Size (`AnimalShapeSize`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal shape's identifier. An unique, increasing integer. | <a href="#AnimalShapeSize/id">See details</a>
`volume` | The volume points the animal shape needs. | <a href="#AnimalShapeSize/volume">See details</a>
`ap_value` | The adventure point value of the animal shape. | <a href="#AnimalShapeSize/ap_value">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalShapeSize/translations">See details</a>

#### <a name="AnimalShapeSize/id"></a> `id`

The animal shape's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShapeSize/volume"></a> `volume`

The volume points the animal shape needs.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShapeSize/ap_value"></a> `ap_value`

The adventure point value of the animal shape.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShapeSize/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimalShapeSizeTranslation">AnimalShapeSizeTranslation</a>&gt;

---

### <a name="AnimalShapeSizeTranslation"></a> `AnimalShapeSizeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The animal shape size name. | <a href="#AnimalShapeSizeTranslation/name">See details</a>

#### <a name="AnimalShapeSizeTranslation/name"></a> `name`

The animal shape size name.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
