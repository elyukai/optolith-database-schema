# Animal Shape

## Definitions

### <a name="AnimalShape"></a> Animal Shape (`AnimalShape`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal shape's identifier. An unique, increasing integer. | <a href="#AnimalShape/id">See details</a>
`path` | The animal shape's path. | <a href="#AnimalShape/path">See details</a>
`size` | The animal shape's size. | <a href="#AnimalShape/size">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalShape/translations">See details</a>

#### <a name="AnimalShape/id"></a> `id`

The animal shape's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalShape/path"></a> `path`

The animal shape's path.

- **Type:** <a href="#AnimalShapePathReference">AnimalShapePathReference</a>

#### <a name="AnimalShape/size"></a> `size`

The animal shape's size.

- **Type:** <a href="#AnimalShapeSizeReference">AnimalShapeSizeReference</a>

#### <a name="AnimalShape/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimalShapeTranslation">AnimalShapeTranslation</a>&gt;

---

### <a name="AnimalShapePathReference"></a> `AnimalShapePathReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the animal shape's path. | <a href="#AnimalShapePathReference/id">See details</a>

#### <a name="AnimalShapePathReference/id"></a> `id`

The identifier of the animal shape's path.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalShapeSizeReference"></a> `AnimalShapeSizeReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the animal shape's size. | <a href="#AnimalShapeSizeReference/id">See details</a>

#### <a name="AnimalShapeSizeReference/id"></a> `id`

The identifier of the animal shape's size.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalShapeTranslation"></a> `AnimalShapeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The animal shape name. | <a href="#AnimalShapeTranslation/name">See details</a>

#### <a name="AnimalShapeTranslation/name"></a> `name`

The animal shape name.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
