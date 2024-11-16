# Armor Type

## Definitions

### <a name="ArmorType"></a> Armor Type (`ArmorType`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The armor type's identifier. An unique, increasing integer. | <a href="#ArmorType/id">See details</a>
`sturdiness_rating?` | An armor type can have a *sturdiness rating*. The higher the rating, the more durable the armor. Rolling higher than this rating during a sturdiness check means the armor receives one level of the new condition *Wear*. | <a href="#ArmorType/sturdiness_rating">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArmorType/translations">See details</a>

#### <a name="ArmorType/id"></a> `id`

The armor type's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArmorType/sturdiness_rating"></a> `sturdiness_rating?`

An armor type can have a *sturdiness rating*. The higher the rating, the more durable the armor. Rolling higher than this rating during a sturdiness check means the armor receives one level of the new condition *Wear*.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArmorType/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ArmorTypeTranslation">ArmorTypeTranslation</a>&gt;

---

### <a name="ArmorTypeTranslation"></a> `ArmorTypeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the armor type. | <a href="#ArmorTypeTranslation/name">See details</a>

#### <a name="ArmorTypeTranslation/name"></a> `name`

The name of the armor type.

- **Type:** <a href="../../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
