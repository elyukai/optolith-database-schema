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

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#TradeSecretTranslation">TradeSecretTranslation</a>&gt;

---

### <a name="TradeSecretTranslation"></a> `TradeSecretTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the trade secret. | <a href="#TradeSecretTranslation/name">See details</a>
`description?` | The description of the trade secret. | <a href="#TradeSecretTranslation/description">See details</a>
`errata?` |  | <a href="#TradeSecretTranslation/errata">See details</a>

#### <a name="TradeSecretTranslation/name"></a> `name`

The name of the trade secret.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="TradeSecretTranslation/description"></a> `description?`

The description of the trade secret.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="TradeSecretTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
