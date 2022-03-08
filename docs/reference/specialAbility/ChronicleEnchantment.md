# Chronicle Enchantment

## Definitions

### <a name="ChronicleEnchantment"></a> Chronicle Enchantment (`ChronicleEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ChronicleEnchantment/id">See details</a>
`levels?` |  | <a href="#ChronicleEnchantment/levels">See details</a>
`property` |  | <a href="#ChronicleEnchantment/property">See details</a>
`ap_value` |  | <a href="#ChronicleEnchantment/ap_value">See details</a>
`src` |  | <a href="#ChronicleEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ChronicleEnchantment/translations">See details</a>

#### <a name="ChronicleEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="ChronicleEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="ChronicleEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="ChronicleEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="ChronicleEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ChronicleEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ChronicleEnchantment/translations[key]">ChronicleEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ChronicleEnchantment/translations[key]"></a> `ChronicleEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#ChronicleEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#ChronicleEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#ChronicleEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#ChronicleEnchantment/translations[key]/errata">See details</a>

#### <a name="ChronicleEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="ChronicleEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="ChronicleEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="ChronicleEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
