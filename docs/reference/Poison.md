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

- **Type:** Union
- **Cases:** <a href="#Poison/level'QualityLevel">Poison/level'QualityLevel</a> | <a href="#Poison/level'Fixed">Poison/level'Fixed</a>

#### <a name="Poison/application_type"></a> `application_type`

The poison's application type(s).

- **Type:** List
- **Items:** <a href="#Poison/application_type[]">Poison/application_type[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="Poison/source_type"></a> `source_type`

The poison's source type and dependent additional values.

- **Type:** Union
- **Cases:** <a href="#Poison/source_type'AnimalVenom">Poison/source_type'AnimalVenom</a> | <a href="#Poison/source_type'PlantPoison">Poison/source_type'PlantPoison</a> | <a href="#Poison/source_type'AlchemicalPoison">Poison/source_type'AlchemicalPoison</a> | <a href="#Poison/source_type'MineralPoison">Poison/source_type'MineralPoison</a>

#### <a name="Poison/resistance"></a> `resistance`

Use Spirit or Toughness as a modifier for the poison.

- **Type:** Union
- **Cases:** <a href="#Poison/resistance'Spirit">Poison/resistance'Spirit</a> | <a href="#Poison/resistance'Toughness">Poison/resistance'Toughness</a>

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

### <a name="Poison/level'QualityLevel"></a> `Poison/level'QualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/level'QualityLevel/tag">See details</a>

#### <a name="Poison/level'QualityLevel/tag"></a> `tag`

- **Constant:** `"QualityLevel"`

---

### <a name="Poison/level'Fixed"></a> `Poison/level'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/level'Fixed/tag">See details</a>
`value` |  | <a href="#Poison/level'Fixed/value">See details</a>

#### <a name="Poison/level'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Poison/level'Fixed/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Poison/application_type[]"></a> `Poison/application_type[]`

- **Type:** Union
- **Cases:** <a href="#Poison/application_type[]'Weapon">Poison/application_type[]'Weapon</a> | <a href="#Poison/application_type[]'Ingestion">Poison/application_type[]'Ingestion</a> | <a href="#Poison/application_type[]'Inhalation">Poison/application_type[]'Inhalation</a> | <a href="#Poison/application_type[]'Contact">Poison/application_type[]'Contact</a>

---

### <a name="Poison/application_type[]'Weapon"></a> `Poison/application_type[]'Weapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/application_type[]'Weapon/tag">See details</a>

#### <a name="Poison/application_type[]'Weapon/tag"></a> `tag`

- **Constant:** `"Weapon"`

---

### <a name="Poison/application_type[]'Ingestion"></a> `Poison/application_type[]'Ingestion`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/application_type[]'Ingestion/tag">See details</a>

#### <a name="Poison/application_type[]'Ingestion/tag"></a> `tag`

- **Constant:** `"Ingestion"`

---

### <a name="Poison/application_type[]'Inhalation"></a> `Poison/application_type[]'Inhalation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/application_type[]'Inhalation/tag">See details</a>

#### <a name="Poison/application_type[]'Inhalation/tag"></a> `tag`

- **Constant:** `"Inhalation"`

---

### <a name="Poison/application_type[]'Contact"></a> `Poison/application_type[]'Contact`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/application_type[]'Contact/tag">See details</a>

#### <a name="Poison/application_type[]'Contact/tag"></a> `tag`

- **Constant:** `"Contact"`

---

### <a name="Poison/source_type'AnimalVenom"></a> `Poison/source_type'AnimalVenom`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'AnimalVenom/tag">See details</a>

#### <a name="Poison/source_type'AnimalVenom/tag"></a> `tag`

- **Constant:** `"AnimalVenom"`

---

### <a name="Poison/source_type'PlantPoison"></a> `Poison/source_type'PlantPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'PlantPoison/tag">See details</a>
`category` | The plant poison category and dependent additional values. | <a href="#Poison/source_type'PlantPoison/category">See details</a>

#### <a name="Poison/source_type'PlantPoison/tag"></a> `tag`

- **Constant:** `"PlantPoison"`

#### <a name="Poison/source_type'PlantPoison/category"></a> `category`

The plant poison category and dependent additional values.

- **Type:** Union
- **Cases:** <a href="#Poison/source_type'PlantPoison/category'Default">Poison/source_type'PlantPoison/category'Default</a> | <a href="#Poison/source_type'PlantPoison/category'Intoxicant">Poison/source_type'PlantPoison/category'Intoxicant</a>

---

### <a name="Poison/source_type'PlantPoison/category'Default"></a> `Poison/source_type'PlantPoison/category'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'PlantPoison/category'Default/tag">See details</a>

#### <a name="Poison/source_type'PlantPoison/category'Default/tag"></a> `tag`

- **Constant:** `"Default"`

---

### <a name="Poison/source_type'PlantPoison/category'Intoxicant"></a> `Poison/source_type'PlantPoison/category'Intoxicant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/tag">See details</a>
`legality` | Whether the use of the intoxicant is legal or not. | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/legality">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations">See details</a>

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/tag"></a> `tag`

- **Constant:** `"Intoxicant"`

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/legality"></a> `legality`

Whether the use of the intoxicant is legal or not.

- **Type:** Union
- **Cases:** <a href="#Poison/source_type'PlantPoison/category'Intoxicant/legality'Legal">Poison/source_type'PlantPoison/category'Intoxicant/legality'Legal</a> | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/legality'Illegal">Poison/source_type'PlantPoison/category'Intoxicant/legality'Illegal</a>

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations[key]">Poison/source_type'PlantPoison/category'Intoxicant/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Poison/source_type'PlantPoison/category'Intoxicant/legality'Legal"></a> `Poison/source_type'PlantPoison/category'Intoxicant/legality'Legal`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/legality'Legal/tag">See details</a>

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/legality'Legal/tag"></a> `tag`

- **Constant:** `"Legal"`

---

### <a name="Poison/source_type'PlantPoison/category'Intoxicant/legality'Illegal"></a> `Poison/source_type'PlantPoison/category'Intoxicant/legality'Illegal`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/legality'Illegal/tag">See details</a>

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/legality'Illegal/tag"></a> `tag`

- **Constant:** `"Illegal"`

---

### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations[key]"></a> `Poison/source_type'PlantPoison/category'Intoxicant/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ingestion` | How to ingest the intoxicant. | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/ingestion">See details</a>
`side_effect?` | The intoxicants side effects, if any. | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/side_effect">See details</a>
`overdose` | What happens if the intoxicant has been overdosed. | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/overdose">See details</a>
`special?` |  | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/special">See details</a>
`addiction?` |  | <a href="#Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/addiction">See details</a>

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/ingestion"></a> `ingestion`

How to ingest the intoxicant.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/side_effect"></a> `side_effect?`

The intoxicants side effects, if any.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/overdose"></a> `overdose`

What happens if the intoxicant has been overdosed.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/special"></a> `special?`

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Poison/source_type'PlantPoison/category'Intoxicant/translations[key]/addiction"></a> `addiction?`

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Poison/source_type'AlchemicalPoison"></a> `Poison/source_type'AlchemicalPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'AlchemicalPoison/tag">See details</a>

#### <a name="Poison/source_type'AlchemicalPoison/tag"></a> `tag`

- **Constant:** `"AlchemicalPoison"`

---

### <a name="Poison/source_type'MineralPoison"></a> `Poison/source_type'MineralPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/source_type'MineralPoison/tag">See details</a>

#### <a name="Poison/source_type'MineralPoison/tag"></a> `tag`

- **Constant:** `"MineralPoison"`

---

### <a name="Poison/resistance'Spirit"></a> `Poison/resistance'Spirit`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/resistance'Spirit/tag">See details</a>

#### <a name="Poison/resistance'Spirit/tag"></a> `tag`

- **Constant:** `"Spirit"`

---

### <a name="Poison/resistance'Toughness"></a> `Poison/resistance'Toughness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Poison/resistance'Toughness/tag">See details</a>

#### <a name="Poison/resistance'Toughness/tag"></a> `tag`

- **Constant:** `"Toughness"`

---

### <a name="Poison/translations[key]"></a> `Poison/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the poison. | <a href="#Poison/translations[key]/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#Poison/translations[key]/alternative_names">See details</a>
`effect` | The normal and degraded poison's effects. | <a href="#Poison/translations[key]/effect">See details</a>
`start` | When the poison takes effect. | <a href="#Poison/translations[key]/start">See details</a>
`duration` | The normal and degraded poison's duration. | <a href="#Poison/translations[key]/duration">See details</a>
`errata?` |  | <a href="#Poison/translations[key]/errata">See details</a>

#### <a name="Poison/translations[key]/name"></a> `name`

The name of the poison.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Poison/translations[key]/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#Poison/translations[key]/alternative_names[]">Poison/translations[key]/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="Poison/translations[key]/effect"></a> `effect`

The normal and degraded poison's effects.

- **Type:** <a href="#Poison/translations[key]/effect">Object</a>

#### <a name="Poison/translations[key]/start"></a> `start`

When the poison takes effect.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Poison/translations[key]/duration"></a> `duration`

The normal and degraded poison's duration.

- **Type:** <a href="#Poison/translations[key]/duration">Object</a>

#### <a name="Poison/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Poison/translations[key]/alternative_names[]"></a> `Poison/translations[key]/alternative_names[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | An alternative name of the poison. | <a href="#Poison/translations[key]/alternative_names[]/name">See details</a>
`region?` | The region where this alternative name is used. | <a href="#Poison/translations[key]/alternative_names[]/region">See details</a>

#### <a name="Poison/translations[key]/alternative_names[]/name"></a> `name`

An alternative name of the poison.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Poison/translations[key]/alternative_names[]/region"></a> `region?`

The region where this alternative name is used.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Poison/translations[key]/effect"></a> `Poison/translations[key]/effect`

The normal and degraded poison's effects.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The poison’s effects. | <a href="#Poison/translations[key]/effect/default">See details</a>
`degraded?` | The degraded poison’s effects. | <a href="#Poison/translations[key]/effect/degraded">See details</a>

#### <a name="Poison/translations[key]/effect/default"></a> `default`

The poison’s effects.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Poison/translations[key]/effect/degraded"></a> `degraded?`

The degraded poison’s effects.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Poison/translations[key]/duration"></a> `Poison/translations[key]/duration`

The normal and degraded poison's duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The poison’s duration. | <a href="#Poison/translations[key]/duration/default">See details</a>
`degraded` | The degraded poison’s duration. | <a href="#Poison/translations[key]/duration/degraded">See details</a>

#### <a name="Poison/translations[key]/duration/default"></a> `default`

The poison’s duration.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Poison/translations[key]/duration/degraded"></a> `degraded`

The degraded poison’s duration.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`
