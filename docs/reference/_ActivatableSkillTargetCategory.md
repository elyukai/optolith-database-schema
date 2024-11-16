# [TITLE MISSING]

## Definitions

### <a name="AffectedTargetCategories"></a> `AffectedTargetCategories`

The target category – the kind of creature or object – the skill affects.

If no target categories are given, the skill applies to all target categories.

- **Type:** List
- **Items:** <a href="#AffectedTargetCategories[]">AffectedTargetCategories[]</a>

---

### <a name="AffectedTargetCategories[]"></a> `AffectedTargetCategories[]`

- **Type:** <a href="#SpecificAffectedTargetCategory">SpecificAffectedTargetCategory</a>

---

### <a name="SpecificAffectedTargetCategory"></a> `SpecificAffectedTargetCategory`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SpecificAffectedTargetCategory/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpecificAffectedTargetCategory/translations">See details</a>

#### <a name="SpecificAffectedTargetCategory/id"></a> `id`

- **Type:** <a href="#SpecificAffectedTargetCategoryIdentifier">SpecificAffectedTargetCategoryIdentifier</a>

#### <a name="SpecificAffectedTargetCategory/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SpecificAffectedTargetCategoryTranslation">SpecificAffectedTargetCategoryTranslation</a>&gt;

---

### <a name="SpecificAffectedTargetCategoryTranslation"></a> `SpecificAffectedTargetCategoryTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#SpecificAffectedTargetCategoryTranslation/note">See details</a>

#### <a name="SpecificAffectedTargetCategoryTranslation/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="SpecificAffectedTargetCategoryIdentifier"></a> `SpecificAffectedTargetCategoryIdentifier`

- **Type:** Union
- **Cases:** <a href="#SpecificAffectedTargetCategoryIdentifier'Self">SpecificAffectedTargetCategoryIdentifier'Self</a> | <a href="#SpecificAffectedTargetCategoryIdentifier'Zone">SpecificAffectedTargetCategoryIdentifier'Zone</a> | <a href="#SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies">SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies</a> | <a href="#SpecificAffectedTargetCategoryIdentifier'Cantrips">SpecificAffectedTargetCategoryIdentifier'Cantrips</a> | <a href="#SpecificAffectedTargetCategoryIdentifier'Predefined">SpecificAffectedTargetCategoryIdentifier'Predefined</a>

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Self"></a> `SpecificAffectedTargetCategoryIdentifier'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Self/tag">See details</a>
`self` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Self/self">See details</a>

#### <a name="SpecificAffectedTargetCategoryIdentifier'Self/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="SpecificAffectedTargetCategoryIdentifier'Self/self"></a> `self`

- **Type:** <a href="#SpecificAffectedTargetCategoryIdentifier'Self/self">Object</a>

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Self/self"></a> `SpecificAffectedTargetCategoryIdentifier'Self/self`

- **Type:** Empty Object

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Zone"></a> `SpecificAffectedTargetCategoryIdentifier'Zone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Zone/tag">See details</a>
`zone` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Zone/zone">See details</a>

#### <a name="SpecificAffectedTargetCategoryIdentifier'Zone/tag"></a> `tag`

- **Constant:** `"Zone"`

#### <a name="SpecificAffectedTargetCategoryIdentifier'Zone/zone"></a> `zone`

- **Type:** <a href="#SpecificAffectedTargetCategoryIdentifier'Zone/zone">Object</a>

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Zone/zone"></a> `SpecificAffectedTargetCategoryIdentifier'Zone/zone`

- **Type:** Empty Object

---

### <a name="SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies"></a> `SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/tag">See details</a>
`liturgical_chants_and_ceremonies` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies">See details</a>

#### <a name="SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/tag"></a> `tag`

- **Constant:** `"LiturgicalChantsAndCeremonies"`

#### <a name="SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies"></a> `liturgical_chants_and_ceremonies`

- **Type:** <a href="#SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies">Object</a>

---

### <a name="SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies"></a> `SpecificAffectedTargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies`

- **Type:** Empty Object

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Cantrips"></a> `SpecificAffectedTargetCategoryIdentifier'Cantrips`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Cantrips/tag">See details</a>
`cantrips` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Cantrips/cantrips">See details</a>

#### <a name="SpecificAffectedTargetCategoryIdentifier'Cantrips/tag"></a> `tag`

- **Constant:** `"Cantrips"`

#### <a name="SpecificAffectedTargetCategoryIdentifier'Cantrips/cantrips"></a> `cantrips`

- **Type:** <a href="#SpecificAffectedTargetCategoryIdentifier'Cantrips/cantrips">Object</a>

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Cantrips/cantrips"></a> `SpecificAffectedTargetCategoryIdentifier'Cantrips/cantrips`

- **Type:** Empty Object

---

### <a name="SpecificAffectedTargetCategoryIdentifier'Predefined"></a> `SpecificAffectedTargetCategoryIdentifier'Predefined`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Predefined/tag">See details</a>
`predefined` |  | <a href="#SpecificAffectedTargetCategoryIdentifier'Predefined/predefined">See details</a>

#### <a name="SpecificAffectedTargetCategoryIdentifier'Predefined/tag"></a> `tag`

- **Constant:** `"Predefined"`

#### <a name="SpecificAffectedTargetCategoryIdentifier'Predefined/predefined"></a> `predefined`

- **Type:** <a href="./_SimpleReferences.md#TargetCategoryReference">TargetCategoryReference</a>
