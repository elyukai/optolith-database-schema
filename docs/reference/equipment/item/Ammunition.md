# [TITLE MISSING]

## Definitions

### <a name="Ammunition"></a> `Ammunition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Ammunition/cost">See details</a>
`src` |  | <a href="#Ammunition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Ammunition/translations">See details</a>

#### <a name="Ammunition/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="Ammunition/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Ammunition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Ammunition/translations[key]">Ammunition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Ammunition/translations[key]"></a> `Ammunition/translations[key]`

- **Type:** <a href="#AmmunitionTranslation">AmmunitionTranslation</a>

---

### <a name="AmmunitionTranslation"></a> `AmmunitionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#AmmunitionTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#AmmunitionTranslation/secondary_name">See details</a>
`errata?` |  | <a href="#AmmunitionTranslation/errata">See details</a>

#### <a name="AmmunitionTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AmmunitionTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AmmunitionTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
