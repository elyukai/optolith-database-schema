# Trade Secret

## Definitions

### <a name="TradeSecret"></a> Trade Secret (`TradeSecret`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The trade secret's identifier. An unique, increasing integer. | <a href="#TradeSecret/id">See details</a>
`ap_value` | The adventure points value of the trade secret. | <a href="#TradeSecret/ap_value">See details</a>
`is_secret_knowledge` | Is this trade secret considered secret knowledge? | <a href="#TradeSecret/is_secret_knowledge">See details</a>
`prerequisites?` |  | <a href="#TradeSecret/prerequisites">See details</a>
`src` |  | <a href="#TradeSecret/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TradeSecret/translations">See details</a>

#### <a name="TradeSecret/id"></a> `id`

The trade secret's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="TradeSecret/ap_value"></a> `ap_value`

The adventure points value of the trade secret.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="TradeSecret/is_secret_knowledge"></a> `is_secret_knowledge`

Is this trade secret considered secret knowledge?

- **Type:** Boolean

#### <a name="TradeSecret/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="TradeSecret/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="TradeSecret/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TradeSecret/translations[key]">TradeSecret/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TradeSecret/translations[key]"></a> `TradeSecret/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the trade secret. | <a href="#TradeSecret/translations[key]/name">See details</a>
`description?` | The description of the trade secret. | <a href="#TradeSecret/translations[key]/description">See details</a>
`errata?` |  | <a href="#TradeSecret/translations[key]/errata">See details</a>

#### <a name="TradeSecret/translations[key]/name"></a> `name`

The name of the trade secret.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="TradeSecret/translations[key]/description"></a> `description?`

The description of the trade secret.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="TradeSecret/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
