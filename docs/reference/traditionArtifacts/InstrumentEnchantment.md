# Instrument Enchantment

## Definitions

### <a name="InstrumentEnchantment"></a> Instrument Enchantment (`InstrumentEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#InstrumentEnchantment/id">See details</a>
`levels?` |  | <a href="#InstrumentEnchantment/levels">See details</a>
`property` |  | <a href="#InstrumentEnchantment/property">See details</a>
`ap_value` |  | <a href="#InstrumentEnchantment/ap_value">See details</a>
`src` |  | <a href="#InstrumentEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InstrumentEnchantment/translations">See details</a>

#### <a name="InstrumentEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="InstrumentEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="InstrumentEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="InstrumentEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="InstrumentEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="InstrumentEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#InstrumentEnchantment/translations[key]">InstrumentEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="InstrumentEnchantment/translations[key]"></a> `InstrumentEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#InstrumentEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#InstrumentEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#InstrumentEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#InstrumentEnchantment/translations[key]/errata">See details</a>

#### <a name="InstrumentEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="InstrumentEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="InstrumentEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="InstrumentEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
