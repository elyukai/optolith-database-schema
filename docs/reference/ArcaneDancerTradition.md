# Arcane Dancer Tradition

## Definitions

### <a name="ArcaneDancerTradition"></a> Arcane Dancer Tradition (`ArcaneDancerTradition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The arcane dancer tradition's identifier. An unique, increasing integer. | <a href="#ArcaneDancerTradition/id">See details</a>
`prerequisites` |  | <a href="#ArcaneDancerTradition/prerequisites">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneDancerTradition/translations">See details</a>

#### <a name="ArcaneDancerTradition/id"></a> `id`

The arcane dancer tradition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneDancerTradition/prerequisites"></a> `prerequisites`

- **Type:** <a href="./_Prerequisite.md#Prerequisite/GroupCollection/ArcaneTradition">Prerequisite/GroupCollection/ArcaneTradition</a>

#### <a name="ArcaneDancerTradition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneDancerTradition/translations[key]">ArcaneDancerTradition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneDancerTradition/translations[key]"></a> `ArcaneDancerTradition/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The arcane dancer tradition's name. | <a href="#ArcaneDancerTradition/translations[key]/name">See details</a>

#### <a name="ArcaneDancerTradition/translations[key]/name"></a> `name`

The arcane dancer tradition's name.

- **Type:** String
- **Minimum Length:** `1`
