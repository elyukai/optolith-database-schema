# [TITLE MISSING]

## Definitions

### <a name="Vehicle"></a> `Vehicle`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Vehicle/cost">See details</a>
`src` |  | <a href="#Vehicle/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Vehicle/translations">See details</a>

#### <a name="Vehicle/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="Vehicle/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Vehicle/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Vehicle/translations[key]">Vehicle/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Vehicle/translations[key]"></a> `Vehicle/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>
