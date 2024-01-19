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
`recipes` | The recipes the herb is used in. | <a href="#Herb/recipes">See details</a>
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

#### <a name="Herb/recipes"></a> `recipes`

The recipes the herb is used in.

- **Type:** List
- **Items:** <a href="#Herb/recipes[]">Herb/recipes[]</a>
- **Unique Items:** Yes

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

### <a name="LandscapeTypePrevalences"></a> `LandscapeTypePrevalences`

- **Type:** Union
- **Cases:** <a href="#LandscapeTypePrevalences'PrevalenceFarNorth">LandscapeTypePrevalences'PrevalenceFarNorth</a> | <a href="#LandscapeTypePrevalences'PevalenceVeld">LandscapeTypePrevalences'PevalenceVeld</a> | <a href="#LandscapeTypePrevalences'PevalenceMarsh">LandscapeTypePrevalences'PevalenceMarsh</a> | <a href="#LandscapeTypePrevalences'PevalenceWoods">LandscapeTypePrevalences'PevalenceWoods</a> | <a href="#LandscapeTypePrevalences'PevalenceRainForest">LandscapeTypePrevalences'PevalenceRainForest</a> | <a href="#LandscapeTypePrevalences'PevalenceMountains">LandscapeTypePrevalences'PevalenceMountains</a> | <a href="#LandscapeTypePrevalences'PevalenceDesert">LandscapeTypePrevalences'PevalenceDesert</a> | <a href="#LandscapeTypePrevalences'PevalenceMaraskan">LandscapeTypePrevalences'PevalenceMaraskan</a>

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

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceVeld"></a> `LandscapeTypePrevalences'PevalenceVeld`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceVeld/tag">See details</a>
`prevalence_veld` |  | <a href="#LandscapeTypePrevalences'PevalenceVeld/prevalence_veld">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceVeld/tag"></a> `tag`

- **Constant:** `"PevalenceVeld"`

#### <a name="LandscapeTypePrevalences'PevalenceVeld/prevalence_veld"></a> `prevalence_veld`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceMarsh"></a> `LandscapeTypePrevalences'PevalenceMarsh`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceMarsh/tag">See details</a>
`prevalence_marsh` |  | <a href="#LandscapeTypePrevalences'PevalenceMarsh/prevalence_marsh">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceMarsh/tag"></a> `tag`

- **Constant:** `"PevalenceMarsh"`

#### <a name="LandscapeTypePrevalences'PevalenceMarsh/prevalence_marsh"></a> `prevalence_marsh`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceWoods"></a> `LandscapeTypePrevalences'PevalenceWoods`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceWoods/tag">See details</a>
`prevalence_woods` |  | <a href="#LandscapeTypePrevalences'PevalenceWoods/prevalence_woods">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceWoods/tag"></a> `tag`

- **Constant:** `"PevalenceWoods"`

#### <a name="LandscapeTypePrevalences'PevalenceWoods/prevalence_woods"></a> `prevalence_woods`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceRainForest"></a> `LandscapeTypePrevalences'PevalenceRainForest`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceRainForest/tag">See details</a>
`prevalence_rain_forest` |  | <a href="#LandscapeTypePrevalences'PevalenceRainForest/prevalence_rain_forest">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceRainForest/tag"></a> `tag`

- **Constant:** `"PevalenceRainForest"`

#### <a name="LandscapeTypePrevalences'PevalenceRainForest/prevalence_rain_forest"></a> `prevalence_rain_forest`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceMountains"></a> `LandscapeTypePrevalences'PevalenceMountains`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceMountains/tag">See details</a>
`prevalence_mountains` |  | <a href="#LandscapeTypePrevalences'PevalenceMountains/prevalence_mountains">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceMountains/tag"></a> `tag`

- **Constant:** `"PevalenceMountains"`

#### <a name="LandscapeTypePrevalences'PevalenceMountains/prevalence_mountains"></a> `prevalence_mountains`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceDesert"></a> `LandscapeTypePrevalences'PevalenceDesert`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceDesert/tag">See details</a>
`prevalence_desert` |  | <a href="#LandscapeTypePrevalences'PevalenceDesert/prevalence_desert">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceDesert/tag"></a> `tag`

- **Constant:** `"PevalenceDesert"`

#### <a name="LandscapeTypePrevalences'PevalenceDesert/prevalence_desert"></a> `prevalence_desert`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalences'PevalenceMaraskan"></a> `LandscapeTypePrevalences'PevalenceMaraskan`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalences'PevalenceMaraskan/tag">See details</a>
`prevalence_maraskan` |  | <a href="#LandscapeTypePrevalences'PevalenceMaraskan/prevalence_maraskan">See details</a>

#### <a name="LandscapeTypePrevalences'PevalenceMaraskan/tag"></a> `tag`

- **Constant:** `"PevalenceMaraskan"`

#### <a name="LandscapeTypePrevalences'PevalenceMaraskan/prevalence_maraskan"></a> `prevalence_maraskan`

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="LandscapeTypePrevalence"></a> `LandscapeTypePrevalence`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`prevalences` | Prevalence(s) in a certain landscape. | <a href="#LandscapeTypePrevalence/prevalences">See details</a>

#### <a name="LandscapeTypePrevalence/prevalences"></a> `prevalences`

Prevalence(s) in a certain landscape.

- **Type:** List
- **Items:** <a href="#LandscapeTypePrevalence/prevalences[]">LandscapeTypePrevalence/prevalences[]</a>
- **Minimum Items:** `1`

---

### <a name="LandscapeTypePrevalence/prevalences[]"></a> `LandscapeTypePrevalence/prevalences[]`

- **Type:** <a href="#Prevalence">Prevalence</a>

---

### <a name="Prevalence"></a> `Prevalence`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`preval` | Simple or conditional prevalence. | <a href="#Prevalence/preval">See details</a>
`condition?` |  | <a href="#Prevalence/condition">See details</a>

#### <a name="Prevalence/preval"></a> `preval`

Simple or conditional prevalence.

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

#### <a name="Prevalence/condition"></a> `condition?`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PrevalenceClass"></a> `PrevalenceClass`

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
