# Equipment Package

## Definitions

### <a name="EquipmentPackage"></a> Equipment Package (`EquipmentPackage`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The equipment package's identifier. An unique, increasing integer. | <a href="#EquipmentPackage/id">See details</a>
`items` | All items in the package. You have to provide the item (template) identifier and you can optionally provide the number of how often an item is included in the package. | <a href="#EquipmentPackage/items">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EquipmentPackage/translations">See details</a>

#### <a name="EquipmentPackage/id"></a> `id`

The equipment package's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="EquipmentPackage/items"></a> `items`

All items in the package. You have to provide the item (template)
identifier and you can optionally provide the number of how often an item
is included in the package.

- **Type:** List
- **Items:** <a href="#EquipmentPackage/items[]">EquipmentPackage/items[]</a>
- **Minimum Items:** `2`

#### <a name="EquipmentPackage/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EquipmentPackage/translations[key]">EquipmentPackage/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EquipmentPackage/items[]"></a> `EquipmentPackage/items[]`

- **Type:** <a href="#EquipmentPackageItem">EquipmentPackageItem</a>

---

### <a name="EquipmentPackage/translations[key]"></a> `EquipmentPackage/translations[key]`

- **Type:** <a href="#EquipmentPackageTranslation">EquipmentPackageTranslation</a>

---

### <a name="EquipmentPackageItem"></a> `EquipmentPackageItem`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The item's identifier. | <a href="#EquipmentPackageItem/id">See details</a>
`number?` | The number of how often the item is included in the package. | <a href="#EquipmentPackageItem/number">See details</a>

#### <a name="EquipmentPackageItem/id"></a> `id`

The item's identifier.

- **Type:** <a href="../_Identifier.md#EquipmentIdentifier">EquipmentIdentifier</a>

#### <a name="EquipmentPackageItem/number"></a> `number?`

The number of how often the item is included in the package.

- **Type:** Integer
- **Default:** `1`
- **Minimum:** `2`

---

### <a name="EquipmentPackageTranslation"></a> `EquipmentPackageTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the equipment package. | <a href="#EquipmentPackageTranslation/name">See details</a>

#### <a name="EquipmentPackageTranslation/name"></a> `name`

The name of the equipment package.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
