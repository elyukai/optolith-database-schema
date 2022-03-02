# Target Category

## Definitions

### <a name="TargetCategory"></a> Target Category (`TargetCategory`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The target category's identifier. An unique, increasing integer. | <a href="#TargetCategory/id">See details</a>
`parent_id` | The identifier of a superordinate target category, if present. | <a href="#TargetCategory/parent_id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TargetCategory/translations">See details</a>

#### <a name="TargetCategory/id"></a> `id`

The target category's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="TargetCategory/parent_id"></a> `parent_id`

The identifier of a superordinate target category, if present.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="TargetCategory/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TargetCategory/translations[key]">TargetCategory/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TargetCategory/translations[key]"></a> `TargetCategory/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The target category name. | <a href="#TargetCategory/translations[key]/name">See details</a>

#### <a name="TargetCategory/translations[key]/name"></a> `name`

The target category name.

- **Type:** String
- **Minimum Length:** `1`
