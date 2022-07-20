# Target Category

## Definitions

### <a name="TargetCategory"></a> Target Category (`TargetCategory`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The target category's identifier. An unique, increasing integer. | <a href="#TargetCategory/id">See details</a>
`parent?` | A superordinate target category, if present. | <a href="#TargetCategory/parent">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TargetCategory/translations">See details</a>

#### <a name="TargetCategory/id"></a> `id`

The target category's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="TargetCategory/parent"></a> `parent?`

A superordinate target category, if present.

- **Type:** <a href="#TargetCategoryParent">TargetCategoryParent</a>

#### <a name="TargetCategory/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TargetCategory/translations[key]">TargetCategory/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TargetCategory/translations[key]"></a> `TargetCategory/translations[key]`

- **Type:** <a href="#TargetCategoryTranslation">TargetCategoryTranslation</a>

---

### <a name="TargetCategoryParent"></a> `TargetCategoryParent`

A superordinate target category, if present.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the superordinate target category. | <a href="#TargetCategoryParent/id">See details</a>

#### <a name="TargetCategoryParent/id"></a> `id`

The identifier of the superordinate target category.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="TargetCategoryTranslation"></a> `TargetCategoryTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The target category name. | <a href="#TargetCategoryTranslation/name">See details</a>

#### <a name="TargetCategoryTranslation/name"></a> `name`

The target category name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
