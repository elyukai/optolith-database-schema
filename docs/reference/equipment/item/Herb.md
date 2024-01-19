# Herb

## Definitions

### <a name="Herb"></a> Herb (`Herb`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The herb's identifier. An unique, increasing integer. | <a href="#Herb/id">See details</a>
`effect_types` | Effect type(s) of the plant's effect(s) and usage(s). | <a href="#Herb/effect_types">See details</a>
`prevalence` | The herb's prevalence per landscape type. | <a href="#Herb/prevalence">See details</a>
`search_difficulty` | Modifier for plant lore check when searching for the plant. | <a href="#Herb/search_difficulty">See details</a>
`identification_difficulty` | Modifier for plant lore check when identifying the plant. | <a href="#Herb/identification_difficulty">See details</a>
`uses` | Doses of plant material found with a search check per quality level. | <a href="#Herb/uses">See details</a>
`value` | Value per dose, in silverthalers. | <a href="#Herb/value">See details</a>
`cost` | Price per dose, in silverthalers. | <a href="#Herb/cost">See details</a>
`recipes?` | The recipes the herb is used in. | <a href="#Herb/recipes">See details</a>
`storage_life` | The Storage life of the raw herb. | <a href="#Herb/storage_life">See details</a>
`preservation_methods` | The preservation options and respective storage life. | <a href="#Herb/preservation_methods">See details</a>
`src` |  | <a href="#Herb/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Herb/translations">See details</a>

#### <a name="Herb/id"></a> `id`

The herb's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Herb/effect_types"></a> `effect_types`

Effect type(s) of the plant's effect(s) and usage(s).

- **Type:** List
- **Items:** <a href="#Herb/effect_types[]">Herb/effect_types[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="Herb/prevalence"></a> `prevalence`

The herb's prevalence per landscape type.

- **Type:** List
- **Items:** <a href="#Herb/prevalence[]">Herb/prevalence[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="Herb/search_difficulty"></a> `search_difficulty`

Modifier for plant lore check when searching for the plant.

- **Type:** Integer

#### <a name="Herb/identification_difficulty"></a> `identification_difficulty`

Modifier for plant lore check when identifying the plant.

- **Type:** Integer

#### <a name="Herb/uses"></a> `uses`

Doses of plant material found with a search check per quality level.

- **Type:** List
- **Items:** <a href="#Herb/uses[]">Herb/uses[]</a>
- **Minimum Items:** `6`
- **Maximum Items:** `6`

#### <a name="Herb/value"></a> `value`

Value per dose, in silverthalers.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Herb/cost"></a> `cost`

Price per dose, in silverthalers.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Herb/recipes"></a> `recipes?`

The recipes the herb is used in.

- **Type:** List
- **Items:** <a href="#Herb/recipes[]">Herb/recipes[]</a>
- **Unique Items:** Yes

#### <a name="Herb/storage_life"></a> `storage_life`

The Storage life of the raw herb.

- **Type:** <a href="#StorageLifeRaw">StorageLifeRaw</a>

#### <a name="Herb/preservation_methods"></a> `preservation_methods`

The preservation options and respective storage life.

- **Type:** List
- **Items:** <a href="#Herb/preservation_methods[]">Herb/preservation_methods[]</a>

#### <a name="Herb/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Herb/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#HerbTranslation">HerbTranslation</a>&gt;

---

### <a name="Herb/effect_types[]"></a> `Herb/effect_types[]`

- **Type:** <a href="./_Herbary.md#EffectType">EffectType</a>

---

### <a name="Herb/prevalence[]"></a> `Herb/prevalence[]`

- **Type:** <a href="#LandscapeTypePrevalences">LandscapeTypePrevalences</a>

---

### <a name="Herb/uses[]"></a> `Herb/uses[]`

- **Type:** Number

---

### <a name="Herb/recipes[]"></a> `Herb/recipes[]`

- **Type:** <a href="../../_SimpleReferences.md#RecipeReference">RecipeReference</a>

---

### <a name="Herb/preservation_methods[]"></a> `Herb/preservation_methods[]`

- **Type:** <a href="#PreservationMethod">PreservationMethod</a>

---

### <a name="LandscapeTypePrevalences"></a> `LandscapeTypePrevalences`

Prevalence and/or conditional prevalence(s) per landscape type.

- **Type:** Union
- **Cases:** <a href="#LandscapeTypePrevalences'PrevalenceFarNorth">LandscapeTypePrevalences'PrevalenceFarNorth</a> | <a href="#LandscapeTypePrevalences'PrevalenceVeld">LandscapeTypePrevalences'PrevalenceVeld</a> | <a href="#LandscapeTypePrevalences'PrevalenceMarsh">LandscapeTypePrevalences'PrevalenceMarsh</a> | <a href="#LandscapeTypePrevalences'PrevalenceWoods">LandscapeTypePrevalences'PrevalenceWoods</a> | <a href="#LandscapeTypePrevalences'PrevalenceRainForest">LandscapeTypePrevalences'PrevalenceRainForest</a> | <a href="#LandscapeTypePrevalences'PrevalenceMountains">LandscapeTypePrevalences'PrevalenceMountains</a> | <a href="#LandscapeTypePrevalences'PrevalenceDesert">LandscapeTypePrevalences'PrevalenceDesert</a> | <a href="#LandscapeTypePrevalences'PrevalenceMaraskan">LandscapeTypePrevalences'PrevalenceMaraskan</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceFarNorth"></a> `LandscapeTypePrevalences'PrevalenceFarNorth`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceFarNorth/tag">See details</a>
`prevalence_far_north` |  | <a href="#LandscapeTypePrevalences'PrevalenceFarNorth/prevalence_far_north">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceFarNorth/tag"></a> `tag`

- **Constant:** `"PrevalenceFarNorth"`

#### <a name="LandscapeTypePrevalences'PrevalenceFarNorth/prevalence_far_north"></a> `prevalence_far_north`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceFarNorth/prevalence_far_north[]">LandscapeTypePrevalences'PrevalenceFarNorth/prevalence_far_north[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceFarNorth/prevalence_far_north[]"></a> `LandscapeTypePrevalences'PrevalenceFarNorth/prevalence_far_north[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceVeld"></a> `LandscapeTypePrevalences'PrevalenceVeld`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceVeld/tag">See details</a>
`prevalence_veld` |  | <a href="#LandscapeTypePrevalences'PrevalenceVeld/prevalence_veld">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceVeld/tag"></a> `tag`

- **Constant:** `"PrevalenceVeld"`

#### <a name="LandscapeTypePrevalences'PrevalenceVeld/prevalence_veld"></a> `prevalence_veld`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceVeld/prevalence_veld[]">LandscapeTypePrevalences'PrevalenceVeld/prevalence_veld[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceVeld/prevalence_veld[]"></a> `LandscapeTypePrevalences'PrevalenceVeld/prevalence_veld[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceMarsh"></a> `LandscapeTypePrevalences'PrevalenceMarsh`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceMarsh/tag">See details</a>
`prevalence_marsh` |  | <a href="#LandscapeTypePrevalences'PrevalenceMarsh/prevalence_marsh">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceMarsh/tag"></a> `tag`

- **Constant:** `"PrevalenceMarsh"`

#### <a name="LandscapeTypePrevalences'PrevalenceMarsh/prevalence_marsh"></a> `prevalence_marsh`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceMarsh/prevalence_marsh[]">LandscapeTypePrevalences'PrevalenceMarsh/prevalence_marsh[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceMarsh/prevalence_marsh[]"></a> `LandscapeTypePrevalences'PrevalenceMarsh/prevalence_marsh[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceWoods"></a> `LandscapeTypePrevalences'PrevalenceWoods`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceWoods/tag">See details</a>
`prevalence_woods` |  | <a href="#LandscapeTypePrevalences'PrevalenceWoods/prevalence_woods">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceWoods/tag"></a> `tag`

- **Constant:** `"PrevalenceWoods"`

#### <a name="LandscapeTypePrevalences'PrevalenceWoods/prevalence_woods"></a> `prevalence_woods`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceWoods/prevalence_woods[]">LandscapeTypePrevalences'PrevalenceWoods/prevalence_woods[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceWoods/prevalence_woods[]"></a> `LandscapeTypePrevalences'PrevalenceWoods/prevalence_woods[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceRainForest"></a> `LandscapeTypePrevalences'PrevalenceRainForest`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceRainForest/tag">See details</a>
`prevalence_rain_forest` |  | <a href="#LandscapeTypePrevalences'PrevalenceRainForest/prevalence_rain_forest">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceRainForest/tag"></a> `tag`

- **Constant:** `"PrevalenceRainForest"`

#### <a name="LandscapeTypePrevalences'PrevalenceRainForest/prevalence_rain_forest"></a> `prevalence_rain_forest`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceRainForest/prevalence_rain_forest[]">LandscapeTypePrevalences'PrevalenceRainForest/prevalence_rain_forest[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceRainForest/prevalence_rain_forest[]"></a> `LandscapeTypePrevalences'PrevalenceRainForest/prevalence_rain_forest[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceMountains"></a> `LandscapeTypePrevalences'PrevalenceMountains`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceMountains/tag">See details</a>
`prevalence_mountains` |  | <a href="#LandscapeTypePrevalences'PrevalenceMountains/prevalence_mountains">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceMountains/tag"></a> `tag`

- **Constant:** `"PrevalenceMountains"`

#### <a name="LandscapeTypePrevalences'PrevalenceMountains/prevalence_mountains"></a> `prevalence_mountains`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceMountains/prevalence_mountains[]">LandscapeTypePrevalences'PrevalenceMountains/prevalence_mountains[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceMountains/prevalence_mountains[]"></a> `LandscapeTypePrevalences'PrevalenceMountains/prevalence_mountains[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceDesert"></a> `LandscapeTypePrevalences'PrevalenceDesert`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceDesert/tag">See details</a>
`prevalence_desert` |  | <a href="#LandscapeTypePrevalences'PrevalenceDesert/prevalence_desert">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceDesert/tag"></a> `tag`

- **Constant:** `"PrevalenceDesert"`

#### <a name="LandscapeTypePrevalences'PrevalenceDesert/prevalence_desert"></a> `prevalence_desert`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceDesert/prevalence_desert[]">LandscapeTypePrevalences'PrevalenceDesert/prevalence_desert[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceDesert/prevalence_desert[]"></a> `LandscapeTypePrevalences'PrevalenceDesert/prevalence_desert[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceMaraskan"></a> `LandscapeTypePrevalences'PrevalenceMaraskan`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PrevalenceMaraskan/tag">See details</a>
`prevalence_maraskan` |  | <a href="#LandscapeTypePrevalences'PrevalenceMaraskan/prevalence_maraskan">See details</a>

#### <a name="LandscapeTypePrevalences'PrevalenceMaraskan/tag"></a> `tag`

- **Constant:** `"PrevalenceMaraskan"`

#### <a name="LandscapeTypePrevalences'PrevalenceMaraskan/prevalence_maraskan"></a> `prevalence_maraskan`

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalences'PrevalenceMaraskan/prevalence_maraskan[]">LandscapeTypePrevalences'PrevalenceMaraskan/prevalence_maraskan[]</a>

---

### <a name="LandscapeTypePrevalences'PrevalenceMaraskan/prevalence_maraskan[]"></a> `LandscapeTypePrevalences'PrevalenceMaraskan/prevalence_maraskan[]`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalence"></a> `LandscapeTypePrevalence`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`prevalence` | Prevalence class. | <a href="#LandscapeTypePrevalence/prevalence">See details</a>
`condition?` | Condition or restrictions concerning the prevalence. | <a href="#LandscapeTypePrevalence/condition">See details</a>

#### <a name="LandscapeTypePrevalence/prevalence"></a> `prevalence`

Prevalence class.

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

#### <a name="LandscapeTypePrevalence/condition"></a> `condition?`

Condition or restrictions concerning the prevalence.

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>&gt;

---

### <a name="PrevalenceClass"></a> `PrevalenceClass`

Prevalence class from 5 (common) down to 1 (very rare)

- **Type:** Union
- **Cases:** <a href="#PrevalenceClass'0">PrevalenceClass'0</a> | <a href="#PrevalenceClass'1">PrevalenceClass'1</a> | <a href="#PrevalenceClass'2">PrevalenceClass'2</a> | <a href="#PrevalenceClass'3">PrevalenceClass'3</a> | <a href="#PrevalenceClass'4">PrevalenceClass'4</a>

---

### <a name="PrevalenceClass'0"></a> `PrevalenceClass'0`

- **Constant:** `"Common"`

---

### <a name="PrevalenceClass'1"></a> `PrevalenceClass'1`

- **Constant:** `"Occasional"`

---

### <a name="PrevalenceClass'2"></a> `PrevalenceClass'2`

- **Constant:** `"NowAndThen"`

---

### <a name="PrevalenceClass'3"></a> `PrevalenceClass'3`

- **Constant:** `"Rare"`

---

### <a name="PrevalenceClass'4"></a> `PrevalenceClass'4`

- **Constant:** `"VeryRare"`

---

### <a name="StorageLifeRaw"></a> `StorageLifeRaw`

The Storage life of a raw herb.

- **Type:** Union
- **Cases:** <a href="#StorageLifeRaw'Default">StorageLifeRaw'Default</a> | <a href="#StorageLifeRaw'Special">StorageLifeRaw'Special</a>

---

### <a name="StorageLifeRaw'Default"></a> `StorageLifeRaw'Default`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#StorageLifeRaw'Default/tag">See details</a>
`default` |  | <a href="#StorageLifeRaw'Default/default">See details</a>

#### <a name="StorageLifeRaw'Default/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="StorageLifeRaw'Default/default"></a> `default`

- **Type:** <a href="#StorageLifeRaw'Default/default">Object</a>

---

### <a name="StorageLifeRaw'Default/default"></a> `StorageLifeRaw'Default/default`

- **Type:** Empty Object

---

### <a name="StorageLifeRaw'Special"></a> `StorageLifeRaw'Special`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#StorageLifeRaw'Special/tag">See details</a>
`special` |  | <a href="#StorageLifeRaw'Special/special">See details</a>

#### <a name="StorageLifeRaw'Special/tag"></a> `tag`

- **Constant:** `"Special"`

#### <a name="StorageLifeRaw'Special/special"></a> `special`

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>&gt;

---

### <a name="PreservationMethod"></a> `PreservationMethod`

The preservation options of a herb and respective storage life.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`method` |  | <a href="#PreservationMethod/method">See details</a>
`storage_life` |  | <a href="#PreservationMethod/storage_life">See details</a>

#### <a name="PreservationMethod/method"></a> `method`

- **Type:** <a href="#PreservationMethodDescription">PreservationMethodDescription</a>

#### <a name="PreservationMethod/storage_life"></a> `storage_life`

- **Type:** <a href="./_Herbary.md#StorageLife">StorageLife</a>

---

### <a name="PreservationMethodDescription"></a> `PreservationMethodDescription`

Details on the preservation method of a herb.

- **Type:** Union
- **Cases:** <a href="#PreservationMethodDescription'HerbalAidReference">PreservationMethodDescription'HerbalAidReference</a> | <a href="#PreservationMethodDescription'HerbalPreserveReference">PreservationMethodDescription'HerbalPreserveReference</a> | <a href="#PreservationMethodDescription'Special">PreservationMethodDescription'Special</a>

---

### <a name="PreservationMethodDescription'HerbalAidReference"></a> `PreservationMethodDescription'HerbalAidReference`

- **Type:** <a href="../../_SimpleReferences.md#HerbalAidReference">HerbalAidReference</a>

---

### <a name="PreservationMethodDescription'HerbalPreserveReference"></a> `PreservationMethodDescription'HerbalPreserveReference`

- **Type:** <a href="../../_SimpleReferences.md#HerbalPreserveReference">HerbalPreserveReference</a>

---

### <a name="PreservationMethodDescription'Special"></a> `PreservationMethodDescription'Special`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PreservationMethodDescription'Special/tag">See details</a>
`special` |  | <a href="#PreservationMethodDescription'Special/special">See details</a>

#### <a name="PreservationMethodDescription'Special/tag"></a> `tag`

- **Constant:** `"Special"`

#### <a name="PreservationMethodDescription'Special/special"></a> `special`

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>&gt;

---

### <a name="HerbTranslation"></a> `HerbTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the herb. | <a href="#HerbTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#HerbTranslation/alternative_names">See details</a>
`description?` | The plant's description. | <a href="#HerbTranslation/description">See details</a>
`effect_touch?` | The raw plant's effect(s) when touched. | <a href="#HerbTranslation/effect_touch">See details</a>
`effect_inhale?` | The raw plant's effect(s) when inhaled. | <a href="#HerbTranslation/effect_inhale">See details</a>
`effect_ingest?` | The raw plant's effect(s) when ingested. | <a href="#HerbTranslation/effect_ingest">See details</a>
`prevalence_remarks?` | Additional remarks on the prevalence per landscape type of the herb. | <a href="#HerbTranslation/prevalence_remarks">See details</a>
`prevalence_regions` | Description of the plant's regional prevalence. | <a href="#HerbTranslation/prevalence_regions">See details</a>
`legend_tradition` | Description of traditonal use of and legends about the herb. | <a href="#HerbTranslation/legend_tradition">See details</a>
`errata?` |  | <a href="#HerbTranslation/errata">See details</a>

#### <a name="HerbTranslation/name"></a> `name`

The name of the herb.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#HerbTranslation/alternative_names[]">HerbTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="HerbTranslation/description"></a> `description?`

The plant's description.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/effect_touch"></a> `effect_touch?`

The raw plant's effect(s) when touched.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/effect_inhale"></a> `effect_inhale?`

The raw plant's effect(s) when inhaled.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/effect_ingest"></a> `effect_ingest?`

The raw plant's effect(s) when ingested.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/prevalence_remarks"></a> `prevalence_remarks?`

Additional remarks on the prevalence per landscape type of the herb.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/prevalence_regions"></a> `prevalence_regions`

Description of the plant's regional prevalence.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/legend_tradition"></a> `legend_tradition`

Description of traditonal use of and legends about the herb.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="HerbTranslation/alternative_names[]"></a> `HerbTranslation/alternative_names[]`

- **Type:** <a href="../../_AlternativeNames.md#AlternativeName">AlternativeName</a>
