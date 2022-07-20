# Patron Category

## Definitions

### <a name="PatronCategory"></a> Patron Category (`PatronCategory`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The patron category's identifier. An unique, increasing integer. | <a href="#PatronCategory/id">See details</a>
`primary_patron_cultures` | The list of cultures where patrons from this category can be the primary patron of. | <a href="#PatronCategory/primary_patron_cultures">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PatronCategory/translations">See details</a>

#### <a name="PatronCategory/id"></a> `id`

The patron category's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PatronCategory/primary_patron_cultures"></a> `primary_patron_cultures`

The list of cultures where patrons from this category can be the primary
patron of.

- **Type:** List
- **Items:** <a href="#PatronCategory/primary_patron_cultures[]">PatronCategory/primary_patron_cultures[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="PatronCategory/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PatronCategory/translations[key]">PatronCategory/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PatronCategory/primary_patron_cultures[]"></a> `PatronCategory/primary_patron_cultures[]`

- **Type:** <a href="./_SimpleReferences.md#CultureReference">CultureReference</a>

---

### <a name="PatronCategory/translations[key]"></a> `PatronCategory/translations[key]`

- **Type:** <a href="#PatronCategoryTranslation">PatronCategoryTranslation</a>

---

### <a name="PatronCategoryTranslation"></a> `PatronCategoryTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the patron category. | <a href="#PatronCategoryTranslation/name">See details</a>

#### <a name="PatronCategoryTranslation/name"></a> `name`

The name of the patron category.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
