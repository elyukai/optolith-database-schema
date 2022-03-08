# Ring Enchantment

## Definitions

### <a name="RingEnchantment"></a> Ring Enchantment (`RingEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#RingEnchantment/id">See details</a>
`levels?` |  | <a href="#RingEnchantment/levels">See details</a>
`property` |  | <a href="#RingEnchantment/property">See details</a>
`ap_value` |  | <a href="#RingEnchantment/ap_value">See details</a>
`src` |  | <a href="#RingEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#RingEnchantment/translations">See details</a>

#### <a name="RingEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="RingEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="RingEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="RingEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="RingEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="RingEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#RingEnchantment/translations[key]">RingEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="RingEnchantment/translations[key]"></a> `RingEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#RingEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#RingEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#RingEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#RingEnchantment/translations[key]/errata">See details</a>

#### <a name="RingEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="RingEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="RingEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="RingEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
