# [TITLE MISSING]

## Definitions

### <a name="TargetCategory"></a> `TargetCategory`

The target category – the kind of creature or object – the skill affects.

If no target categories are given, the skill applies to all target
categories.

- **Type:** List
- **Items:** <a href="#TargetCategory[]">TargetCategory[]</a>

---

### <a name="TargetCategory[]"></a> `TargetCategory[]`

- **Type:** <a href="#SpecificTargetCategory">SpecificTargetCategory</a>

---

### <a name="SpecificTargetCategory"></a> `SpecificTargetCategory`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SpecificTargetCategory/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpecificTargetCategory/translations">See details</a>

#### <a name="SpecificTargetCategory/id"></a> `id`

- **Type:** <a href="#TargetCategoryIdentifier">TargetCategoryIdentifier</a>

#### <a name="SpecificTargetCategory/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SpecificTargetCategoryTranslation">SpecificTargetCategoryTranslation</a>&gt;

---

### <a name="SpecificTargetCategoryTranslation"></a> `SpecificTargetCategoryTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#SpecificTargetCategoryTranslation/note">See details</a>

#### <a name="SpecificTargetCategoryTranslation/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="TargetCategoryIdentifier"></a> `TargetCategoryIdentifier`

- **Type:** Union
- **Cases:** <a href="#TargetCategoryIdentifier'Self">TargetCategoryIdentifier'Self</a> | <a href="#TargetCategoryIdentifier'Zone">TargetCategoryIdentifier'Zone</a> | <a href="#TargetCategoryIdentifier'LiturgicalChantsAndCeremonies">TargetCategoryIdentifier'LiturgicalChantsAndCeremonies</a> | <a href="#TargetCategoryIdentifier'Cantrips">TargetCategoryIdentifier'Cantrips</a> | <a href="#TargetCategoryIdentifier'Predefined">TargetCategoryIdentifier'Predefined</a>

---

### <a name="TargetCategoryIdentifier'Self"></a> `TargetCategoryIdentifier'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategoryIdentifier'Self/tag">See details</a>
`self` |  | <a href="#TargetCategoryIdentifier'Self/self">See details</a>

#### <a name="TargetCategoryIdentifier'Self/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="TargetCategoryIdentifier'Self/self"></a> `self`

- **Type:** <a href="#TargetCategoryIdentifier'Self/self">Object</a>

---

### <a name="TargetCategoryIdentifier'Self/self"></a> `TargetCategoryIdentifier'Self/self`

- **Type:** Empty Object

---

### <a name="TargetCategoryIdentifier'Zone"></a> `TargetCategoryIdentifier'Zone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategoryIdentifier'Zone/tag">See details</a>
`zone` |  | <a href="#TargetCategoryIdentifier'Zone/zone">See details</a>

#### <a name="TargetCategoryIdentifier'Zone/tag"></a> `tag`

- **Constant:** `"Zone"`

#### <a name="TargetCategoryIdentifier'Zone/zone"></a> `zone`

- **Type:** <a href="#TargetCategoryIdentifier'Zone/zone">Object</a>

---

### <a name="TargetCategoryIdentifier'Zone/zone"></a> `TargetCategoryIdentifier'Zone/zone`

- **Type:** Empty Object

---

### <a name="TargetCategoryIdentifier'LiturgicalChantsAndCeremonies"></a> `TargetCategoryIdentifier'LiturgicalChantsAndCeremonies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/tag">See details</a>
`liturgical_chants_and_ceremonies` |  | <a href="#TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies">See details</a>

#### <a name="TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/tag"></a> `tag`

- **Constant:** `"LiturgicalChantsAndCeremonies"`

#### <a name="TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies"></a> `liturgical_chants_and_ceremonies`

- **Type:** <a href="#TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies">Object</a>

---

### <a name="TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies"></a> `TargetCategoryIdentifier'LiturgicalChantsAndCeremonies/liturgical_chants_and_ceremonies`

- **Type:** Empty Object

---

### <a name="TargetCategoryIdentifier'Cantrips"></a> `TargetCategoryIdentifier'Cantrips`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategoryIdentifier'Cantrips/tag">See details</a>
`cantrips` |  | <a href="#TargetCategoryIdentifier'Cantrips/cantrips">See details</a>

#### <a name="TargetCategoryIdentifier'Cantrips/tag"></a> `tag`

- **Constant:** `"Cantrips"`

#### <a name="TargetCategoryIdentifier'Cantrips/cantrips"></a> `cantrips`

- **Type:** <a href="#TargetCategoryIdentifier'Cantrips/cantrips">Object</a>

---

### <a name="TargetCategoryIdentifier'Cantrips/cantrips"></a> `TargetCategoryIdentifier'Cantrips/cantrips`

- **Type:** Empty Object

---

### <a name="TargetCategoryIdentifier'Predefined"></a> `TargetCategoryIdentifier'Predefined`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategoryIdentifier'Predefined/tag">See details</a>
`predefined` |  | <a href="#TargetCategoryIdentifier'Predefined/predefined">See details</a>

#### <a name="TargetCategoryIdentifier'Predefined/tag"></a> `tag`

- **Constant:** `"Predefined"`

#### <a name="TargetCategoryIdentifier'Predefined/predefined"></a> `predefined`

- **Type:** <a href="./_SimpleReferences.md#TargetCategoryReference">TargetCategoryReference</a>
