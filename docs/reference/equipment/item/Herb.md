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
`list` | The recipes the herb is used in. | <a href="#Herb/list">See details</a>
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

#### <a name="Herb/list"></a> `list`

The recipes the herb is used in.

- **Type:** List
- **Items:** <a href="#Herb/list[]">Herb/list[]</a>
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

- **Type:** <a href="#LandscapeTypePrevalence">LandscapeTypePrevalence</a>

---

### <a name="Herb/uses[]"></a> `Herb/uses[]`

- **Type:** Number

---

### <a name="Herb/list[]"></a> `Herb/list[]`

- **Type:** <a href="../../_SimpleReferences.md#RecipeReference">RecipeReference</a>

---

### <a name="LandscapeTypePrevalence"></a> `LandscapeTypePrevalence`

- **Type:** Union
- **Cases:** <a href="#LandscapeTypePrevalence'PrevalenceFarNorth">LandscapeTypePrevalence'PrevalenceFarNorth</a> | <a href="#LandscapeTypePrevalence'PevalenceVeld">LandscapeTypePrevalence'PevalenceVeld</a> | <a href="#LandscapeTypePrevalence'PevalenceMarsh">LandscapeTypePrevalence'PevalenceMarsh</a> | <a href="#LandscapeTypePrevalence'PevalenceWoods">LandscapeTypePrevalence'PevalenceWoods</a> | <a href="#LandscapeTypePrevalence'PevalenceRainForest">LandscapeTypePrevalence'PevalenceRainForest</a> | <a href="#LandscapeTypePrevalence'PevalenceMountains">LandscapeTypePrevalence'PevalenceMountains</a> | <a href="#LandscapeTypePrevalence'PevalenceDesert">LandscapeTypePrevalence'PevalenceDesert</a> | <a href="#LandscapeTypePrevalence'PevalenceMaraskan">LandscapeTypePrevalence'PevalenceMaraskan</a>

---

### <a name="LandscapeTypePrevalence'PrevalenceFarNorth"></a> `LandscapeTypePrevalence'PrevalenceFarNorth`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PrevalenceFarNorth/tag">See details</a>
`prevalence_far_north` |  | <a href="#LandscapeTypePrevalence'PrevalenceFarNorth/prevalence_far_north">See details</a>

#### <a name="LandscapeTypePrevalence'PrevalenceFarNorth/tag"></a> `tag`

- **Constant:** `"PrevalenceFarNorth"`

#### <a name="LandscapeTypePrevalence'PrevalenceFarNorth/prevalence_far_north"></a> `prevalence_far_north`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceVeld"></a> `LandscapeTypePrevalence'PevalenceVeld`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceVeld/tag">See details</a>
`prevalence_veld` |  | <a href="#LandscapeTypePrevalence'PevalenceVeld/prevalence_veld">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceVeld/tag"></a> `tag`

- **Constant:** `"PevalenceVeld"`

#### <a name="LandscapeTypePrevalence'PevalenceVeld/prevalence_veld"></a> `prevalence_veld`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceMarsh"></a> `LandscapeTypePrevalence'PevalenceMarsh`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceMarsh/tag">See details</a>
`prevalence_marsh` |  | <a href="#LandscapeTypePrevalence'PevalenceMarsh/prevalence_marsh">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceMarsh/tag"></a> `tag`

- **Constant:** `"PevalenceMarsh"`

#### <a name="LandscapeTypePrevalence'PevalenceMarsh/prevalence_marsh"></a> `prevalence_marsh`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceWoods"></a> `LandscapeTypePrevalence'PevalenceWoods`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceWoods/tag">See details</a>
`prevalence_woods` |  | <a href="#LandscapeTypePrevalence'PevalenceWoods/prevalence_woods">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceWoods/tag"></a> `tag`

- **Constant:** `"PevalenceWoods"`

#### <a name="LandscapeTypePrevalence'PevalenceWoods/prevalence_woods"></a> `prevalence_woods`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceRainForest"></a> `LandscapeTypePrevalence'PevalenceRainForest`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceRainForest/tag">See details</a>
`prevalence_rain_forest` |  | <a href="#LandscapeTypePrevalence'PevalenceRainForest/prevalence_rain_forest">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceRainForest/tag"></a> `tag`

- **Constant:** `"PevalenceRainForest"`

#### <a name="LandscapeTypePrevalence'PevalenceRainForest/prevalence_rain_forest"></a> `prevalence_rain_forest`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceMountains"></a> `LandscapeTypePrevalence'PevalenceMountains`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceMountains/tag">See details</a>
`prevalence_mountains` |  | <a href="#LandscapeTypePrevalence'PevalenceMountains/prevalence_mountains">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceMountains/tag"></a> `tag`

- **Constant:** `"PevalenceMountains"`

#### <a name="LandscapeTypePrevalence'PevalenceMountains/prevalence_mountains"></a> `prevalence_mountains`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceDesert"></a> `LandscapeTypePrevalence'PevalenceDesert`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceDesert/tag">See details</a>
`prevalence_desert` |  | <a href="#LandscapeTypePrevalence'PevalenceDesert/prevalence_desert">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceDesert/tag"></a> `tag`

- **Constant:** `"PevalenceDesert"`

#### <a name="LandscapeTypePrevalence'PevalenceDesert/prevalence_desert"></a> `prevalence_desert`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

---

### <a name="LandscapeTypePrevalence'PevalenceMaraskan"></a> `LandscapeTypePrevalence'PevalenceMaraskan`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LandscapeTypePrevalence'PevalenceMaraskan/tag">See details</a>
`prevalence_maraskan` |  | <a href="#LandscapeTypePrevalence'PevalenceMaraskan/prevalence_maraskan">See details</a>

#### <a name="LandscapeTypePrevalence'PevalenceMaraskan/tag"></a> `tag`

- **Constant:** `"PevalenceMaraskan"`

#### <a name="LandscapeTypePrevalence'PevalenceMaraskan/prevalence_maraskan"></a> `prevalence_maraskan`

- **Type:** <a href="#PrevalenceClass">PrevalenceClass</a>

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
