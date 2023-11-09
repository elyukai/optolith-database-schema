# Poison

## Definitions

### <a name="Poison"></a> Poison (`Poison`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The poison's identifier. An unique, increasing integer. | <a href="#Poison/id">See details</a>
`application_type` | The poison's application type(s). | <a href="#Poison/application_type">See details</a>
`source_type` | The poison's source type and dependent additional values. | <a href="#Poison/source_type">See details</a>
`resistance` | Use Spirit or Toughness as a modifier for the poison. | <a href="#Poison/resistance">See details</a>
`start` | When the poison takes effect. | <a href="#Poison/start">See details</a>
`duration` | The normal and degraded poison's duration. | <a href="#Poison/duration">See details</a>
`value` | The raw (ingredients) value, in silverthalers. | <a href="#Poison/value">See details</a>
`cost` | Price for one dose, in silverthalers. | <a href="#Poison/cost">See details</a>
`src` |  | <a href="#Poison/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Poison/translations">See details</a>

#### <a name="Poison/id"></a> `id`

The poison's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

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

- **Type:** <a href="../../_DiseasePoison.md#Resistance">Resistance</a>

#### <a name="Poison/start"></a> `start`

When the poison takes effect.

- **Type:** <a href="#PoisonStart">PoisonStart</a>

#### <a name="Poison/duration"></a> `duration`

The normal and degraded poison's duration.

- **Type:** <a href="../../_DiseasePoison.md#Reduceable">Reduceable</a>&lt;<a href="#PoisonDuration">PoisonDuration</a>&gt;

#### <a name="Poison/value"></a> `value`

The raw (ingredients) value, in silverthalers.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Poison/cost"></a> `cost`

Price for one dose, in silverthalers.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Poison/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Poison/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#PoisonTranslation">PoisonTranslation</a>&gt;

---

### <a name="Poison/application_type[]"></a> `Poison/application_type[]`

- **Type:** <a href="#PoisonApplicationType">PoisonApplicationType</a>

---

### <a name="PoisonApplicationType"></a> `PoisonApplicationType`

- **Type:** Union
- **Cases:** <a href="#PoisonApplicationType'0">PoisonApplicationType'0</a> | <a href="#PoisonApplicationType'1">PoisonApplicationType'1</a> | <a href="#PoisonApplicationType'2">PoisonApplicationType'2</a> | <a href="#PoisonApplicationType'3">PoisonApplicationType'3</a>

---

### <a name="PoisonApplicationType'0"></a> `PoisonApplicationType'0`

- **Constant:** `"Weapon"`

---

### <a name="PoisonApplicationType'1"></a> `PoisonApplicationType'1`

- **Constant:** `"Ingestion"`

---

### <a name="PoisonApplicationType'2"></a> `PoisonApplicationType'2`

- **Constant:** `"Inhalation"`

---

### <a name="PoisonApplicationType'3"></a> `PoisonApplicationType'3`

- **Constant:** `"Contact"`

---

### <a name="PoisonStart"></a> `PoisonStart`

- **Type:** Union
- **Cases:** <a href="#PoisonStart'Immediate">PoisonStart'Immediate</a> | <a href="#PoisonStart'Constant">PoisonStart'Constant</a> | <a href="#PoisonStart'DiceBased">PoisonStart'DiceBased</a>

---

### <a name="PoisonStart'Immediate"></a> `PoisonStart'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonStart'Immediate/tag">See details</a>
`immediate` |  | <a href="#PoisonStart'Immediate/immediate">See details</a>

#### <a name="PoisonStart'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="PoisonStart'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#PoisonStart'Immediate/immediate">Object</a>

---

### <a name="PoisonStart'Immediate/immediate"></a> `PoisonStart'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="PoisonStart'Constant"></a> `PoisonStart'Constant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonStart'Constant/tag">See details</a>
`constant` |  | <a href="#PoisonStart'Constant/constant">See details</a>

#### <a name="PoisonStart'Constant/tag"></a> `tag`

- **Constant:** `"Constant"`

#### <a name="PoisonStart'Constant/constant"></a> `constant`

- **Type:** <a href="#ConstantPoisonTime">ConstantPoisonTime</a>

---

### <a name="PoisonStart'DiceBased"></a> `PoisonStart'DiceBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonStart'DiceBased/tag">See details</a>
`dice_based` |  | <a href="#PoisonStart'DiceBased/dice_based">See details</a>

#### <a name="PoisonStart'DiceBased/tag"></a> `tag`

- **Constant:** `"DiceBased"`

#### <a name="PoisonStart'DiceBased/dice_based"></a> `dice_based`

- **Type:** <a href="#DiceBasedPoisonTime">DiceBasedPoisonTime</a>

---

### <a name="PoisonDuration"></a> `PoisonDuration`

- **Type:** Union
- **Cases:** <a href="#PoisonDuration'Constant">PoisonDuration'Constant</a> | <a href="#PoisonDuration'DiceBased">PoisonDuration'DiceBased</a> | <a href="#PoisonDuration'Indefinite">PoisonDuration'Indefinite</a>

---

### <a name="PoisonDuration'Constant"></a> `PoisonDuration'Constant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonDuration'Constant/tag">See details</a>
`constant` |  | <a href="#PoisonDuration'Constant/constant">See details</a>

#### <a name="PoisonDuration'Constant/tag"></a> `tag`

- **Constant:** `"Constant"`

#### <a name="PoisonDuration'Constant/constant"></a> `constant`

- **Type:** <a href="#ConstantPoisonTime">ConstantPoisonTime</a>

---

### <a name="PoisonDuration'DiceBased"></a> `PoisonDuration'DiceBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonDuration'DiceBased/tag">See details</a>
`dice_based` |  | <a href="#PoisonDuration'DiceBased/dice_based">See details</a>

#### <a name="PoisonDuration'DiceBased/tag"></a> `tag`

- **Constant:** `"DiceBased"`

#### <a name="PoisonDuration'DiceBased/dice_based"></a> `dice_based`

- **Type:** <a href="#DiceBasedPoisonTime">DiceBasedPoisonTime</a>

---

### <a name="PoisonDuration'Indefinite"></a> `PoisonDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#PoisonDuration'Indefinite/indefinite">See details</a>

#### <a name="PoisonDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PoisonDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefinitePoisonTime">IndefinitePoisonTime</a>

---

### <a name="ConstantPoisonTime"></a> `ConstantPoisonTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#ConstantPoisonTime/value">See details</a>
`unit` |  | <a href="#ConstantPoisonTime/unit">See details</a>

#### <a name="ConstantPoisonTime/value"></a> `value`

- **Type:** Number

#### <a name="ConstantPoisonTime/unit"></a> `unit`

- **Type:** <a href="#PoisonTimeUnit">PoisonTimeUnit</a>

---

### <a name="DiceBasedPoisonTime"></a> `DiceBasedPoisonTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`dice` |  | <a href="#DiceBasedPoisonTime/dice">See details</a>
`unit` |  | <a href="#DiceBasedPoisonTime/unit">See details</a>

#### <a name="DiceBasedPoisonTime/dice"></a> `dice`

- **Type:** <a href="../../_Dice.md#Dice">Dice</a>

#### <a name="DiceBasedPoisonTime/unit"></a> `unit`

- **Type:** <a href="#PoisonTimeUnit">PoisonTimeUnit</a>

---

### <a name="PoisonTimeUnit"></a> `PoisonTimeUnit`

- **Type:** Union
- **Cases:** <a href="#PoisonTimeUnit'0">PoisonTimeUnit'0</a> | <a href="#PoisonTimeUnit'1">PoisonTimeUnit'1</a> | <a href="#PoisonTimeUnit'2">PoisonTimeUnit'2</a> | <a href="#PoisonTimeUnit'3">PoisonTimeUnit'3</a>

---

### <a name="PoisonTimeUnit'0"></a> `PoisonTimeUnit'0`

- **Constant:** `"CombatRounds"`

---

### <a name="PoisonTimeUnit'1"></a> `PoisonTimeUnit'1`

- **Constant:** `"Minutes"`

---

### <a name="PoisonTimeUnit'2"></a> `PoisonTimeUnit'2`

- **Constant:** `"Hours"`

---

### <a name="PoisonTimeUnit'3"></a> `PoisonTimeUnit'3`

- **Constant:** `"Days"`

---

### <a name="IndefinitePoisonTime"></a> `IndefinitePoisonTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefinitePoisonTime/translations">See details</a>

#### <a name="IndefinitePoisonTime/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#IndefinitePoisonTimeTranslation">IndefinitePoisonTimeTranslation</a>&gt;

---

### <a name="IndefinitePoisonTimeTranslation"></a> `IndefinitePoisonTimeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#IndefinitePoisonTimeTranslation/description">See details</a>

#### <a name="IndefinitePoisonTimeTranslation/description"></a> `description`

A description of the duration.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="PoisonSourceType"></a> `PoisonSourceType`

- **Type:** Union
- **Cases:** <a href="#PoisonSourceType'AnimalVenom">PoisonSourceType'AnimalVenom</a> | <a href="#PoisonSourceType'AlchemicalPoison">PoisonSourceType'AlchemicalPoison</a> | <a href="#PoisonSourceType'MineralPoison">PoisonSourceType'MineralPoison</a> | <a href="#PoisonSourceType'PlantPoison">PoisonSourceType'PlantPoison</a> | <a href="#PoisonSourceType'DemonicPoison">PoisonSourceType'DemonicPoison</a>

---

### <a name="PoisonSourceType'AnimalVenom"></a> `PoisonSourceType'AnimalVenom`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'AnimalVenom/tag">See details</a>
`animal_venom` |  | <a href="#PoisonSourceType'AnimalVenom/animal_venom">See details</a>

#### <a name="PoisonSourceType'AnimalVenom/tag"></a> `tag`

- **Constant:** `"AnimalVenom"`

#### <a name="PoisonSourceType'AnimalVenom/animal_venom"></a> `animal_venom`

- **Type:** <a href="#AnimalVenom">AnimalVenom</a>

---

### <a name="PoisonSourceType'AlchemicalPoison"></a> `PoisonSourceType'AlchemicalPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'AlchemicalPoison/tag">See details</a>
`alchemical_poison` |  | <a href="#PoisonSourceType'AlchemicalPoison/alchemical_poison">See details</a>

#### <a name="PoisonSourceType'AlchemicalPoison/tag"></a> `tag`

- **Constant:** `"AlchemicalPoison"`

#### <a name="PoisonSourceType'AlchemicalPoison/alchemical_poison"></a> `alchemical_poison`

- **Type:** <a href="#AlchemicalPoison">AlchemicalPoison</a>

---

### <a name="PoisonSourceType'MineralPoison"></a> `PoisonSourceType'MineralPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'MineralPoison/tag">See details</a>
`mineral_poison` |  | <a href="#PoisonSourceType'MineralPoison/mineral_poison">See details</a>

#### <a name="PoisonSourceType'MineralPoison/tag"></a> `tag`

- **Constant:** `"MineralPoison"`

#### <a name="PoisonSourceType'MineralPoison/mineral_poison"></a> `mineral_poison`

- **Type:** <a href="#MineralPoison">MineralPoison</a>

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

### <a name="PoisonSourceType'DemonicPoison"></a> `PoisonSourceType'DemonicPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PoisonSourceType'DemonicPoison/tag">See details</a>
`demonic_poison` |  | <a href="#PoisonSourceType'DemonicPoison/demonic_poison">See details</a>

#### <a name="PoisonSourceType'DemonicPoison/tag"></a> `tag`

- **Constant:** `"DemonicPoison"`

#### <a name="PoisonSourceType'DemonicPoison/demonic_poison"></a> `demonic_poison`

- **Type:** <a href="#DemonicPoison">DemonicPoison</a>

---

### <a name="AnimalVenom"></a> `AnimalVenom`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` | The poison’s level. | <a href="#AnimalVenom/level">See details</a>
`is_extractable?` | If `false`, the poison cannot be extracted. | <a href="#AnimalVenom/is_extractable">See details</a>

#### <a name="AnimalVenom/level"></a> `level`

The poison’s level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="AnimalVenom/is_extractable"></a> `is_extractable?`

If `false`, the poison cannot be extracted.

- **Constant:** `false`

---

### <a name="AlchemicalPoison"></a> `AlchemicalPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`effect_types` | Effect type(s) of an alchemical poison. | <a href="#AlchemicalPoison/effect_types">See details</a>
`cost_per_ingredient_level` | The cost per ingredient level in silverthalers. | <a href="#AlchemicalPoison/cost_per_ingredient_level">See details</a>
`laboratory` | The laboratory level needed to brew the elixir. | <a href="#AlchemicalPoison/laboratory">See details</a>
`brewing_difficulty` | The brewing difficulty, which represents the challenge of creating an elixir. | <a href="#AlchemicalPoison/brewing_difficulty">See details</a>
`trade_secret` | AP value and prerequisites of the elixir recipe’s trade secret. | <a href="#AlchemicalPoison/trade_secret">See details</a>
`intoxicant?` | Additional information if the poison is an intoxicant. | <a href="#AlchemicalPoison/intoxicant">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AlchemicalPoison/translations">See details</a>

#### <a name="AlchemicalPoison/effect_types"></a> `effect_types`

Effect type(s) of an alchemical poison.

- **Type:** List
- **Items:** <a href="#AlchemicalPoison/effect_types[]">AlchemicalPoison/effect_types[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="AlchemicalPoison/cost_per_ingredient_level"></a> `cost_per_ingredient_level`

The cost per ingredient level in silverthalers.

- **Type:** Number

#### <a name="AlchemicalPoison/laboratory"></a> `laboratory`

The laboratory level needed to brew the elixir.

- **Type:** <a href="./_Herbary.md#LaboratoryLevel">LaboratoryLevel</a>

#### <a name="AlchemicalPoison/brewing_difficulty"></a> `brewing_difficulty`

The brewing difficulty, which represents the challenge of creating an
elixir.

- **Type:** Integer

#### <a name="AlchemicalPoison/trade_secret"></a> `trade_secret`

AP value and prerequisites of the elixir recipe’s trade secret.

- **Type:** <a href="./_Herbary.md#RecipeTradeSecret">RecipeTradeSecret</a>

#### <a name="AlchemicalPoison/intoxicant"></a> `intoxicant?`

Additional information if the poison is an intoxicant.

- **Type:** <a href="#Intoxicant">Intoxicant</a>

#### <a name="AlchemicalPoison/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AlchemicalPoisonTranslation">AlchemicalPoisonTranslation</a>&gt;

---

### <a name="AlchemicalPoison/effect_types[]"></a> `AlchemicalPoison/effect_types[]`

- **Type:** <a href="./_Herbary.md#EffectType">EffectType</a>

---

### <a name="AlchemicalPoisonTranslation"></a> `AlchemicalPoisonTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`typical_ingredients` | A list of typical ingredients. | <a href="#AlchemicalPoisonTranslation/typical_ingredients">See details</a>
`brewing_process_prerequisites?` | Prerequsites for the brewing process, if any. | <a href="#AlchemicalPoisonTranslation/brewing_process_prerequisites">See details</a>

#### <a name="AlchemicalPoisonTranslation/typical_ingredients"></a> `typical_ingredients`

A list of typical ingredients.

- **Type:** List
- **Items:** <a href="#AlchemicalPoisonTranslation/typical_ingredients[]">AlchemicalPoisonTranslation/typical_ingredients[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="AlchemicalPoisonTranslation/brewing_process_prerequisites"></a> `brewing_process_prerequisites?`

Prerequsites for the brewing process, if any.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="AlchemicalPoisonTranslation/typical_ingredients[]"></a> `AlchemicalPoisonTranslation/typical_ingredients[]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="MineralPoison"></a> `MineralPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` | The poison’s level. | <a href="#MineralPoison/level">See details</a>

#### <a name="MineralPoison/level"></a> `level`

The poison’s level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="PlantPoison"></a> `PlantPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`effect_types` | Effect type(s) of a plant poison. | <a href="#PlantPoison/effect_types">See details</a>
`level` | The poison’s level. | <a href="#PlantPoison/level">See details</a>
`intoxicant?` | Additional information if the poison is an intoxicant. | <a href="#PlantPoison/intoxicant">See details</a>

#### <a name="PlantPoison/effect_types"></a> `effect_types`

Effect type(s) of a plant poison.

- **Type:** List
- **Items:** <a href="#PlantPoison/effect_types[]">PlantPoison/effect_types[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="PlantPoison/level"></a> `level`

The poison’s level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="PlantPoison/intoxicant"></a> `intoxicant?`

Additional information if the poison is an intoxicant.

- **Type:** <a href="#Intoxicant">Intoxicant</a>

---

### <a name="PlantPoison/effect_types[]"></a> `PlantPoison/effect_types[]`

- **Type:** <a href="./_Herbary.md#EffectType">EffectType</a>

---

### <a name="DemonicPoison"></a> `DemonicPoison`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` | The poison’s level. | <a href="#DemonicPoison/level">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DemonicPoison/translations">See details</a>

#### <a name="DemonicPoison/level"></a> `level`

The poison’s level.

- **Type:** <a href="#DemonicPoisonLevel">DemonicPoisonLevel</a>

#### <a name="DemonicPoison/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#DemonicPoisonTranslation">DemonicPoisonTranslation</a>&gt;

---

### <a name="DemonicPoisonLevel"></a> `DemonicPoisonLevel`

- **Type:** Union
- **Cases:** <a href="#DemonicPoisonLevel'QualityLevel">DemonicPoisonLevel'QualityLevel</a> | <a href="#DemonicPoisonLevel'Constant">DemonicPoisonLevel'Constant</a>

---

### <a name="DemonicPoisonLevel'QualityLevel"></a> `DemonicPoisonLevel'QualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DemonicPoisonLevel'QualityLevel/tag">See details</a>
`quality_level` |  | <a href="#DemonicPoisonLevel'QualityLevel/quality_level">See details</a>

#### <a name="DemonicPoisonLevel'QualityLevel/tag"></a> `tag`

- **Constant:** `"QualityLevel"`

#### <a name="DemonicPoisonLevel'QualityLevel/quality_level"></a> `quality_level`

- **Type:** <a href="#QualityLevelDemonicPoisonLevel">QualityLevelDemonicPoisonLevel</a>

---

### <a name="DemonicPoisonLevel'Constant"></a> `DemonicPoisonLevel'Constant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DemonicPoisonLevel'Constant/tag">See details</a>
`constant` |  | <a href="#DemonicPoisonLevel'Constant/constant">See details</a>

#### <a name="DemonicPoisonLevel'Constant/tag"></a> `tag`

- **Constant:** `"Constant"`

#### <a name="DemonicPoisonLevel'Constant/constant"></a> `constant`

- **Type:** <a href="#ConstantDemonicPoisonLevel">ConstantDemonicPoisonLevel</a>

---

### <a name="QualityLevelDemonicPoisonLevel"></a> `QualityLevelDemonicPoisonLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`source` |  | <a href="#QualityLevelDemonicPoisonLevel/source">See details</a>

#### <a name="QualityLevelDemonicPoisonLevel/source"></a> `source`

- **Type:** <a href="#QualityLevelDemonicPoisonLevelSource">QualityLevelDemonicPoisonLevelSource</a>

---

### <a name="QualityLevelDemonicPoisonLevelSource"></a> `QualityLevelDemonicPoisonLevelSource`

- **Type:** Union
- **Cases:** <a href="#QualityLevelDemonicPoisonLevelSource'0">QualityLevelDemonicPoisonLevelSource'0</a>

---

### <a name="QualityLevelDemonicPoisonLevelSource'0"></a> `QualityLevelDemonicPoisonLevelSource'0`

- **Constant:** `"Spellwork"`

---

### <a name="ConstantDemonicPoisonLevel"></a> `ConstantDemonicPoisonLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The poison’s level. | <a href="#ConstantDemonicPoisonLevel/value">See details</a>

#### <a name="ConstantDemonicPoisonLevel/value"></a> `value`

The poison’s level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="DemonicPoisonTranslation"></a> `DemonicPoisonTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, if any. | <a href="#DemonicPoisonTranslation/note">See details</a>

#### <a name="DemonicPoisonTranslation/note"></a> `note?`

A note, if any.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="Intoxicant"></a> `Intoxicant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`legality` | Whether the use of the intoxicant is legal or not, usually from the perspective of most middle-Aventurian an northern-Aventurian nations. | <a href="#Intoxicant/legality">See details</a>
`addiction?` | The chance of getting addicted after an ingestion in addition to the maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms. | <a href="#Intoxicant/addiction">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Intoxicant/translations">See details</a>

#### <a name="Intoxicant/legality"></a> `legality`

Whether the use of the intoxicant is legal or not, usually from the
perspective of most middle-Aventurian an northern-Aventurian nations.

- **Type:** <a href="#IntoxicantLegality">IntoxicantLegality</a>

#### <a name="Intoxicant/addiction"></a> `addiction?`

The chance of getting addicted after an ingestion in addition to the
maximum interval at which it, while addicted, must be ingested to not
suffer from withdrawal symptoms.

- **Type:** <a href="#IntoxicantAddiction">IntoxicantAddiction</a>

#### <a name="Intoxicant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#IntoxicantTranslation">IntoxicantTranslation</a>&gt;

---

### <a name="IntoxicantLegality"></a> `IntoxicantLegality`

Whether the use of the intoxicant is legal or not, usually from the
perspective of most middle-Aventurian an northern-Aventurian nations.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_legal` |  | <a href="#IntoxicantLegality/is_legal">See details</a>

#### <a name="IntoxicantLegality/is_legal"></a> `is_legal`

- **Type:** Boolean

---

### <a name="IntoxicantAddiction"></a> `IntoxicantAddiction`

The chance of getting addicted after an ingestion in addition to the maximum
interval at which it, while addicted, must be ingested to not suffer from
withdrawal symptoms.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`chance` | The chance of getting addicted after an ingestion. | <a href="#IntoxicantAddiction/chance">See details</a>
`interval` | The maximum interval at which it, while addicted, must be ingested to not suffer from withdrawal symptoms. | <a href="#IntoxicantAddiction/interval">See details</a>

#### <a name="IntoxicantAddiction/chance"></a> `chance`

The chance of getting addicted after an ingestion.

- **Type:** Number

#### <a name="IntoxicantAddiction/interval"></a> `interval`

The maximum interval at which it, while addicted, must be ingested to not
suffer from withdrawal symptoms.

- **Type:** <a href="#IntoxicantAddictionInterval">IntoxicantAddictionInterval</a>

---

### <a name="IntoxicantAddictionInterval"></a> `IntoxicantAddictionInterval`

The maximum interval at which it, while addicted, must be ingested to not
suffer from withdrawal symptoms.

- **Type:** Union
- **Cases:** <a href="#IntoxicantAddictionInterval'Constant">IntoxicantAddictionInterval'Constant</a> | <a href="#IntoxicantAddictionInterval'DiceBased">IntoxicantAddictionInterval'DiceBased</a>

---

### <a name="IntoxicantAddictionInterval'Constant"></a> `IntoxicantAddictionInterval'Constant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#IntoxicantAddictionInterval'Constant/tag">See details</a>
`constant` |  | <a href="#IntoxicantAddictionInterval'Constant/constant">See details</a>

#### <a name="IntoxicantAddictionInterval'Constant/tag"></a> `tag`

- **Constant:** `"Constant"`

#### <a name="IntoxicantAddictionInterval'Constant/constant"></a> `constant`

- **Type:** <a href="#ConstantIntoxicantAddictionInterval">ConstantIntoxicantAddictionInterval</a>

---

### <a name="IntoxicantAddictionInterval'DiceBased"></a> `IntoxicantAddictionInterval'DiceBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#IntoxicantAddictionInterval'DiceBased/tag">See details</a>
`dice_based` |  | <a href="#IntoxicantAddictionInterval'DiceBased/dice_based">See details</a>

#### <a name="IntoxicantAddictionInterval'DiceBased/tag"></a> `tag`

- **Constant:** `"DiceBased"`

#### <a name="IntoxicantAddictionInterval'DiceBased/dice_based"></a> `dice_based`

- **Type:** <a href="#DiceBasedIntoxicantAddictionInterval">DiceBasedIntoxicantAddictionInterval</a>

---

### <a name="ConstantIntoxicantAddictionInterval"></a> `ConstantIntoxicantAddictionInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The interval value in days. | <a href="#ConstantIntoxicantAddictionInterval/value">See details</a>

#### <a name="ConstantIntoxicantAddictionInterval/value"></a> `value`

The interval value in days.

- **Type:** Number

---

### <a name="DiceBasedIntoxicantAddictionInterval"></a> `DiceBasedIntoxicantAddictionInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`dice` | The dice that define the interval value in days. | <a href="#DiceBasedIntoxicantAddictionInterval/dice">See details</a>

#### <a name="DiceBasedIntoxicantAddictionInterval/dice"></a> `dice`

The dice that define the interval value in days.

- **Type:** <a href="../../_Dice.md#Dice">Dice</a>

---

### <a name="IntoxicantTranslation"></a> `IntoxicantTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ingestion` | How to ingest the intoxicant. | <a href="#IntoxicantTranslation/ingestion">See details</a>
`side_effect?` | The intoxicants side effects that always happen, no matter whether the intoxicant has the default or the reduced effect. | <a href="#IntoxicantTranslation/side_effect">See details</a>
`overdose` | What happens if the intoxicant has been overdosed, that is, it has been ingested another time within the duration. | <a href="#IntoxicantTranslation/overdose">See details</a>
`special?` | Special information about the intoxicant. | <a href="#IntoxicantTranslation/special">See details</a>

#### <a name="IntoxicantTranslation/ingestion"></a> `ingestion`

How to ingest the intoxicant.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="IntoxicantTranslation/side_effect"></a> `side_effect?`

The intoxicants side effects that always happen, no matter whether the
intoxicant has the default or the reduced effect.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="IntoxicantTranslation/overdose"></a> `overdose`

What happens if the intoxicant has been overdosed, that is, it has been
ingested another time within the duration.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="IntoxicantTranslation/special"></a> `special?`

Special information about the intoxicant.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="PoisonTranslation"></a> `PoisonTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the poison. | <a href="#PoisonTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#PoisonTranslation/alternative_names">See details</a>
`effect` | The normal and degraded poison's effects. | <a href="#PoisonTranslation/effect">See details</a>
`errata?` |  | <a href="#PoisonTranslation/errata">See details</a>

#### <a name="PoisonTranslation/name"></a> `name`

The name of the poison.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="PoisonTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#PoisonTranslation/alternative_names[]">PoisonTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="PoisonTranslation/effect"></a> `effect`

The normal and degraded poison's effects.

- **Type:** <a href="../../_DiseasePoison.md#Reduceable">Reduceable</a>

#### <a name="PoisonTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="PoisonTranslation/alternative_names[]"></a> `PoisonTranslation/alternative_names[]`

- **Type:** <a href="../../_AlternativeNames.md#AlternativeName">AlternativeName</a>
