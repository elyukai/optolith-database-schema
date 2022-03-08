# Attire Enchantment

## Definitions

### <a name="AttireEnchantment"></a> Attire Enchantment (`AttireEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AttireEnchantment/id">See details</a>
`levels?` |  | <a href="#AttireEnchantment/levels">See details</a>
`property` |  | <a href="#AttireEnchantment/property">See details</a>
`ap_value` |  | <a href="#AttireEnchantment/ap_value">See details</a>
`src` |  | <a href="#AttireEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AttireEnchantment/translations">See details</a>

#### <a name="AttireEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="AttireEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="AttireEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="AttireEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AttireEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AttireEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AttireEnchantment/translations[key]">AttireEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AttireEnchantment/translations[key]"></a> `AttireEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AttireEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#AttireEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#AttireEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#AttireEnchantment/translations[key]/errata">See details</a>

#### <a name="AttireEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="AttireEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="AttireEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="AttireEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
