# HerbalAid

## Definitions

### <a name="HerbalAid"></a> HerbalAid (`HerbalAid`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The aid's identifier. An unique, increasing integer. | <a href="#HerbalAid/id">See details</a>
`main_ingredient` | The main ingredient, a herb. | <a href="#HerbalAid/main_ingredient">See details</a>
`alternative_main_ingredient?` | An alternative main ingredient, a herb. | <a href="#HerbalAid/alternative_main_ingredient">See details</a>
`production_difficulty` | Modifier for plant lore check when making the aid. | <a href="#HerbalAid/production_difficulty">See details</a>
`translation` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#HerbalAid/translation">See details</a>
`src` |  | <a href="#HerbalAid/src">See details</a>

#### <a name="HerbalAid/id"></a> `id`

The aid's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="HerbalAid/main_ingredient"></a> `main_ingredient`

The main ingredient, a herb.

- **Type:** <a href="../../_SimpleReferences.md#HerbReference">HerbReference</a>

#### <a name="HerbalAid/alternative_main_ingredient"></a> `alternative_main_ingredient?`

An alternative main ingredient, a herb.

- **Type:** <a href="../../_SimpleReferences.md#HerbReference">HerbReference</a>

#### <a name="HerbalAid/production_difficulty"></a> `production_difficulty`

Modifier for plant lore check when making the aid.

- **Type:** Integer

#### <a name="HerbalAid/translation"></a> `translation`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#HerbalAidTranslation">HerbalAidTranslation</a>&gt;

#### <a name="HerbalAid/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="HerbalAidTranslation"></a> `HerbalAidTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the preservation method. | <a href="#HerbalAidTranslation/name">See details</a>
`description` | Description of the production method and/or effect. | <a href="#HerbalAidTranslation/description">See details</a>
`additional_ingredients?` | Ingredients beside the main ingredient. | <a href="#HerbalAidTranslation/additional_ingredients">See details</a>
`typical_tools` | Tools and aids used in the production process. | <a href="#HerbalAidTranslation/typical_tools">See details</a>
`errata?` |  | <a href="#HerbalAidTranslation/errata">See details</a>

#### <a name="HerbalAidTranslation/name"></a> `name`

Name of the preservation method.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbalAidTranslation/description"></a> `description`

Description of the production method and/or effect.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbalAidTranslation/additional_ingredients"></a> `additional_ingredients?`

Ingredients beside the main ingredient.

- **Type:** List
- **Items:** <a href="#HerbalAidTranslation/additional_ingredients[]">HerbalAidTranslation/additional_ingredients[]</a>
- **Minimum Items:** `1`

#### <a name="HerbalAidTranslation/typical_tools"></a> `typical_tools`

Tools and aids used in the production process.

- **Type:** List
- **Items:** <a href="#HerbalAidTranslation/typical_tools[]">HerbalAidTranslation/typical_tools[]</a>

#### <a name="HerbalAidTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="HerbalAidTranslation/additional_ingredients[]"></a> `HerbalAidTranslation/additional_ingredients[]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="HerbalAidTranslation/typical_tools[]"></a> `HerbalAidTranslation/typical_tools[]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
