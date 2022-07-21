# Poison

## Definitions

### <a name="Poison"></a> Poison (`Poison`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The poison's identifier. An unique, increasing integer. | <a href="#Poison/id">See details</a>
`level` | The poison's level. | <a href="#Poison/level">See details</a>
`application_type` | The poison's application type(s). | <a href="#Poison/application_type">See details</a>
`source_type` | The poison's source type and dependent additional values. | <a href="#Poison/source_type">See details</a>
`resistance` | Use Spirit or Toughness as a modifier for the poison. | <a href="#Poison/resistance">See details</a>
`value` | The raw (ingredients) value, in silverthalers. | <a href="#Poison/value">See details</a>
`cost` | Price for one dose, in silverthalers. | <a href="#Poison/cost">See details</a>
`src` |  | <a href="#Poison/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Poison/translations">See details</a>

#### <a name="Poison/id"></a> `id`

The poison's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Poison/level"></a> `level`

The poison's level.

- **Type:** <a href="#PoisonLevel">PoisonLevel</a>

#### <a name="Poison/application_type"></a> `application_type`

The poison's application type(s).

- **Type:** List
- **Items:** <a href="#Poison/application_type[]">Poison/application_type[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="Poison/source_type"></a> `source_type`

The poison's source type and dependent additional values.

- **Type:** <a href="#PoisonSourceType">PoisonSourceType</a>

#### <a name="Poison/resistance"></a> `resistance`

Use Spirit or Toughness as a modifier for the poison.

- **Type:** <a href="./_DiseasePoison.md#Resistance">Resistance</a>

#### <a name="Poison/value"></a> `value`

The raw (ingredients) value, in silverthalers.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Poison/cost"></a> `cost`

Price for one dose, in silverthalers.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Poison/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Poison/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Poison/translations[key]">Poison/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Poison/application_type[]"></a> `Poison/application_type[]`

- **Type:** <a href="#PoisonApplicationType">PoisonApplicationType</a>

---

### <a name="Poison/translations[key]"></a> `Poison/translations[key]`

- **Type:** <a href="#PoisonTranslation">PoisonTranslation</a>

---

### <a name="PoisonLevel"></a> `PoisonLevel`

- **Type:** Union
- **Cases:** <a href="#PoisonLevel'QualityLevel">PoisonLevel'QualityLevel</a> | <a href="#PoisonLevel'Fixed">PoisonLevel'Fixed</a>

---

### <a name="PoisonLevel'QualityLevel"></a> `PoisonLevel'QualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonLevel'QualityLevel/tag">See details</a>

#### <a name="PoisonLevel'QualityLevel/tag"></a> `tag`

- **Constant:** `"QualityLevel"`

---

### <a name="PoisonLevel'Fixed"></a> `PoisonLevel'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonLevel'Fixed/tag">See details</a>
`fixed` |  | <a href="#PoisonLevel'Fixed/fixed">See details</a>

#### <a name="PoisonLevel'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PoisonLevel'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedPoisonLevel">FixedPoisonLevel</a>

---

### <a name="FixedPoisonLevel"></a> `FixedPoisonLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#FixedPoisonLevel/value">See details</a>

#### <a name="FixedPoisonLevel/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PoisonApplicationType"></a> `PoisonApplicationType`

- **Type:** Union
- **Cases:** <a href="#PoisonApplicationType'Weapon">PoisonApplicationType'Weapon</a> | <a href="#PoisonApplicationType'Ingestion">PoisonApplicationType'Ingestion</a> | <a href="#PoisonApplicationType'Inhalation">PoisonApplicationType'Inhalation</a> | <a href="#PoisonApplicationType'Contact">PoisonApplicationType'Contact</a>

---

### <a name="PoisonApplicationType'Weapon"></a> `PoisonApplicationType'Weapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonApplicationType'Weapon/tag">See details</a>

#### <a name="PoisonApplicationType'Weapon/tag"></a> `tag`

- **Constant:** `"Weapon"`

---

### <a name="PoisonApplicationType'Ingestion"></a> `PoisonApplicationType'Ingestion`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonApplicationType'Ingestion/tag">See details</a>

#### <a name="PoisonApplicationType'Ingestion/tag"></a> `tag`

- **Constant:** `"Ingestion"`

---

### <a name="PoisonApplicationType'Inhalation"></a> `PoisonApplicationType'Inhalation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonApplicationType'Inhalation/tag">See details</a>

#### <a name="PoisonApplicationType'Inhalation/tag"></a> `tag`

- **Constant:** `"Inhalation"`

---

### <a name="PoisonApplicationType'Contact"></a> `PoisonApplicationType'Contact`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonApplicationType'Contact/tag">See details</a>

#### <a name="PoisonApplicationType'Contact/tag"></a> `tag`

- **Constant:** `"Contact"`

---

### <a name="PoisonSourceType"></a> `PoisonSourceType`

- **Type:** Union
- **Cases:** <a href="#PoisonSourceType'AnimalVenom">PoisonSourceType'AnimalVenom</a> | <a href="#PoisonSourceType'AlchemicalPoison">PoisonSourceType'AlchemicalPoison</a> | <a href="#PoisonSourceType'MineralPoison">PoisonSourceType'MineralPoison</a> | <a href="#PoisonSourceType'PlantPoison">PoisonSourceType'PlantPoison</a>

---

### <a name="PoisonSourceType'AnimalVenom"></a> `PoisonSourceType'AnimalVenom`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'AnimalVenom/tag">See details</a>

#### <a name="PoisonSourceType'AnimalVenom/tag"></a> `tag`

- **Constant:** `"AnimalVenom"`

---

### <a name="PoisonSourceType'AlchemicalPoison"></a> `PoisonSourceType'AlchemicalPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'AlchemicalPoison/tag">See details</a>

#### <a name="PoisonSourceType'AlchemicalPoison/tag"></a> `tag`

- **Constant:** `"AlchemicalPoison"`

---

### <a name="PoisonSourceType'MineralPoison"></a> `PoisonSourceType'MineralPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'MineralPoison/tag">See details</a>

#### <a name="PoisonSourceType'MineralPoison/tag"></a> `tag`

- **Constant:** `"MineralPoison"`

---

### <a name="PoisonSourceType'PlantPoison"></a> `PoisonSourceType'PlantPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'PlantPoison/tag">See details</a>
`plant_poison` |  | <a href="#PoisonSourceType'PlantPoison/plant_poison">See details</a>

#### <a name="PoisonSourceType'PlantPoison/tag"></a> `tag`

- **Constant:** `"PlantPoison"`

#### <a name="PoisonSourceType'PlantPoison/plant_poison"></a> `plant_poison`

- **Type:** <a href="#PlantPoison">PlantPoison</a>

---

### <a name="PlantPoison"></a> `PlantPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`category` | The plant poison category and dependent additional values. | <a href="#PlantPoison/category">See details</a>

#### <a name="PlantPoison/category"></a> `category`

The plant poison category and dependent additional values.

- **Type:** <a href="#PlantPoisonCategory">PlantPoisonCategory</a>

---

### <a name="PlantPoisonCategory"></a> `PlantPoisonCategory`

- **Type:** Union
- **Cases:** <a href="#PlantPoisonCategory'Default">PlantPoisonCategory'Default</a> | <a href="#PlantPoisonCategory'Intoxicant">PlantPoisonCategory'Intoxicant</a>

---

### <a name="PlantPoisonCategory'Default"></a> `PlantPoisonCategory'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PlantPoisonCategory'Default/tag">See details</a>

#### <a name="PlantPoisonCategory'Default/tag"></a> `tag`

- **Constant:** `"Default"`

---

### <a name="PlantPoisonCategory'Intoxicant"></a> `PlantPoisonCategory'Intoxicant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PlantPoisonCategory'Intoxicant/tag">See details</a>
`intoxicant` |  | <a href="#PlantPoisonCategory'Intoxicant/intoxicant">See details</a>

#### <a name="PlantPoisonCategory'Intoxicant/tag"></a> `tag`

- **Constant:** `"Intoxicant"`

#### <a name="PlantPoisonCategory'Intoxicant/intoxicant"></a> `intoxicant`

- **Type:** <a href="#Intoxicant">Intoxicant</a>

---

### <a name="Intoxicant"></a> `Intoxicant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`legality` | Whether the use of the intoxicant is legal or not. | <a href="#Intoxicant/legality">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Intoxicant/translations">See details</a>

#### <a name="Intoxicant/legality"></a> `legality`

Whether the use of the intoxicant is legal or not.

- **Type:** <a href="#IntoxicantLegality">IntoxicantLegality</a>

#### <a name="Intoxicant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Intoxicant/translations[key]">Intoxicant/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Intoxicant/translations[key]"></a> `Intoxicant/translations[key]`

- **Type:** <a href="#IntoxicantTranslation">IntoxicantTranslation</a>

---

### <a name="IntoxicantLegality"></a> `IntoxicantLegality`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_legal` |  | <a href="#IntoxicantLegality/is_legal">See details</a>

#### <a name="IntoxicantLegality/is_legal"></a> `is_legal`

- **Type:** Boolean

---

### <a name="IntoxicantTranslation"></a> `IntoxicantTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ingestion` | How to ingest the intoxicant. | <a href="#IntoxicantTranslation/ingestion">See details</a>
`side_effect?` | The intoxicants side effects, if any. | <a href="#IntoxicantTranslation/side_effect">See details</a>
`overdose` | What happens if the intoxicant has been overdosed. | <a href="#IntoxicantTranslation/overdose">See details</a>
`special?` |  | <a href="#IntoxicantTranslation/special">See details</a>
`addiction?` |  | <a href="#IntoxicantTranslation/addiction">See details</a>

#### <a name="IntoxicantTranslation/ingestion"></a> `ingestion`

How to ingest the intoxicant.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="IntoxicantTranslation/side_effect"></a> `side_effect?`

The intoxicants side effects, if any.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="IntoxicantTranslation/overdose"></a> `overdose`

What happens if the intoxicant has been overdosed.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="IntoxicantTranslation/special"></a> `special?`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="IntoxicantTranslation/addiction"></a> `addiction?`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="PoisonTranslation"></a> `PoisonTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the poison. | <a href="#PoisonTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#PoisonTranslation/alternative_names">See details</a>
`effect` | The normal and degraded poison's effects. | <a href="#PoisonTranslation/effect">See details</a>
`start` | When the poison takes effect. | <a href="#PoisonTranslation/start">See details</a>
`duration` | The normal and degraded poison's duration. | <a href="#PoisonTranslation/duration">See details</a>
`errata?` |  | <a href="#PoisonTranslation/errata">See details</a>

#### <a name="PoisonTranslation/name"></a> `name`

The name of the poison.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="PoisonTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#PoisonTranslation/alternative_names[]">PoisonTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="PoisonTranslation/effect"></a> `effect`

The normal and degraded poison's effects.

- **Type:** <a href="./_DiseasePoison.md#Reduceable">Reduceable</a>

#### <a name="PoisonTranslation/start"></a> `start`

When the poison takes effect.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PoisonTranslation/duration"></a> `duration`

The normal and degraded poison's duration.

- **Type:** <a href="./_DiseasePoison.md#Reduceable">Reduceable</a>

#### <a name="PoisonTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="PoisonTranslation/alternative_names[]"></a> `PoisonTranslation/alternative_names[]`

- **Type:** <a href="./_AlternativeNames.md#AlternativeName">AlternativeName</a>
