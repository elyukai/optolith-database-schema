# Fool's Hat Enchantment

## Definitions

### <a name="FoolsHatEnchantment"></a> Fool's Hat Enchantment (`FoolsHatEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FoolsHatEnchantment/id">See details</a>
`levels?` |  | <a href="#FoolsHatEnchantment/levels">See details</a>
`property` |  | <a href="#FoolsHatEnchantment/property">See details</a>
`ap_value` |  | <a href="#FoolsHatEnchantment/ap_value">See details</a>
`src` |  | <a href="#FoolsHatEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FoolsHatEnchantment/translations">See details</a>

#### <a name="FoolsHatEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="FoolsHatEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="FoolsHatEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="FoolsHatEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FoolsHatEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FoolsHatEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FoolsHatEnchantment/translations[key]">FoolsHatEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FoolsHatEnchantment/translations[key]"></a> `FoolsHatEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FoolsHatEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#FoolsHatEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#FoolsHatEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#FoolsHatEnchantment/translations[key]/errata">See details</a>

#### <a name="FoolsHatEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="FoolsHatEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="FoolsHatEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="FoolsHatEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
