# Arcane Bard Tradition

## Definitions

### <a name="ArcaneBardTradition"></a> Arcane Bard Tradition (`ArcaneBardTradition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The arcane bard tradition's identifier. An unique, increasing integer. | <a href="#ArcaneBardTradition/id">See details</a>
`prerequisites` |  | <a href="#ArcaneBardTradition/prerequisites">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneBardTradition/translations">See details</a>

#### <a name="ArcaneBardTradition/id"></a> `id`

The arcane bard tradition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneBardTradition/prerequisites"></a> `prerequisites`

- **Type:** <a href="./_Prerequisite.md#Prerequisite/GroupCollection/ArcaneTradition">Prerequisite/GroupCollection/ArcaneTradition</a>

#### <a name="ArcaneBardTradition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneBardTradition/translations[key]">ArcaneBardTradition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneBardTradition/translations[key]"></a> `ArcaneBardTradition/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The arcane bard tradition's name. | <a href="#ArcaneBardTradition/translations[key]/name">See details</a>

#### <a name="ArcaneBardTradition/translations[key]/name"></a> `name`

The arcane bard tradition's name.

- **Type:** String
- **Minimum Length:** `1`
