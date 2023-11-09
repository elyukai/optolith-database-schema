# Brew

## Definitions

### <a name="Brew"></a> Brew (`Brew`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The brew's identifier. An unique, increasing integer. | <a href="#Brew/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Brew/translations">See details</a>

#### <a name="Brew/id"></a> `id`

The brew's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Brew/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#BrewTranslation">BrewTranslation</a>&gt;

---

### <a name="BrewTranslation"></a> `BrewTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The brew name. | <a href="#BrewTranslation/name">See details</a>

#### <a name="BrewTranslation/name"></a> `name`

The brew name.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
