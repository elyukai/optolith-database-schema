# Item Group

## Definitions

### <a name="ItemGroup"></a> Item Group (`ItemGroup`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The item group's identifier. An unique, increasing integer. | <a href="#ItemGroup/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ItemGroup/translations">See details</a>

#### <a name="ItemGroup/id"></a> `id`

The item group's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ItemGroup/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ItemGroup/translations[key]">ItemGroup/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ItemGroup/translations[key]"></a> `ItemGroup/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item group. | <a href="#ItemGroup/translations[key]/name">See details</a>

#### <a name="ItemGroup/translations[key]/name"></a> `name`

The name of the item group.

- **Type:** String
- **Minimum Length:** `1`
