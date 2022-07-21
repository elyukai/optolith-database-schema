# [TITLE MISSING]

## Definitions

### <a name="Animal"></a> `Animal`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Animal/cost">See details</a>
`src` |  | <a href="#Animal/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Animal/translations">See details</a>

#### <a name="Animal/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="Animal/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Animal/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Animal/translations[key]">Animal/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Animal/translations[key]"></a> `Animal/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>
