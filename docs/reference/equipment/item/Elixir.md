# [TITLE MISSING]

## Definitions

### <a name="Elixir"></a> `Elixir`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The elixir's identifier. An unique, increasing integer. | <a href="#Elixir/id">See details</a>
`cost_per_ingredient_level` | The cost per ingredient level in silverthalers. | <a href="#Elixir/cost_per_ingredient_level">See details</a>
`laboratory` | The laboratory level needed to brew the elixir. | <a href="#Elixir/laboratory">See details</a>
`brewing_difficulty` | The brewing difficulty, which represents the challenge of creating an elixir. | <a href="#Elixir/brewing_difficulty">See details</a>
`trade_secret` | AP value and prerequisites of the elixir recipe’s trade secret. | <a href="#Elixir/trade_secret">See details</a>
`src` |  | <a href="#Elixir/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Elixir/translations">See details</a>

#### <a name="Elixir/id"></a> `id`

The elixir's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Elixir/cost_per_ingredient_level"></a> `cost_per_ingredient_level`

The cost per ingredient level in silverthalers.

- **Type:** Number

#### <a name="Elixir/laboratory"></a> `laboratory`

The laboratory level needed to brew the elixir.

- **Type:** <a href="./_Herbary.md#LaboratoryLevel">LaboratoryLevel</a>

#### <a name="Elixir/brewing_difficulty"></a> `brewing_difficulty`

The brewing difficulty, which represents the challenge of creating an
elixir.

- **Type:** Integer

#### <a name="Elixir/trade_secret"></a> `trade_secret`

AP value and prerequisites of the elixir recipe’s trade secret.

- **Type:** <a href="./_Herbary.md#RecipeTradeSecret">RecipeTradeSecret</a>

#### <a name="Elixir/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Elixir/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Elixir/translations[key]">Elixir/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Elixir/translations[key]"></a> `Elixir/translations[key]`

- **Type:** <a href="#ElixirTranslation">ElixirTranslation</a>

---

### <a name="ElixirTranslation"></a> `ElixirTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the elixir. | <a href="#ElixirTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#ElixirTranslation/alternative_names">See details</a>
`common_ingredients` | A list of common ingredients. | <a href="#ElixirTranslation/common_ingredients">See details</a>
`brewing_process_prerequisites?` | Prerequsites for the brewing process, if any. | <a href="#ElixirTranslation/brewing_process_prerequisites">See details</a>
`quality_levels` | The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on. | <a href="#ElixirTranslation/quality_levels">See details</a>
`errata?` |  | <a href="#ElixirTranslation/errata">See details</a>

#### <a name="ElixirTranslation/name"></a> `name`

The name of the elixir.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ElixirTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#ElixirTranslation/alternative_names[]">ElixirTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="ElixirTranslation/common_ingredients"></a> `common_ingredients`

A list of common ingredients.

- **Type:** List
- **Items:** <a href="#ElixirTranslation/common_ingredients[]">ElixirTranslation/common_ingredients[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="ElixirTranslation/brewing_process_prerequisites"></a> `brewing_process_prerequisites?`

Prerequsites for the brewing process, if any.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ElixirTranslation/quality_levels"></a> `quality_levels`

The list of effects for each quality level. The first element
represents QL 1, the second element QL 2, and so on.

- **Type:** Tuple
- **Items:** [<a href="ElixirTranslation/quality_levels[0]">ElixirTranslation/quality_levels[0]</a>, <a href="ElixirTranslation/quality_levels[1]">ElixirTranslation/quality_levels[1]</a>, <a href="ElixirTranslation/quality_levels[2]">ElixirTranslation/quality_levels[2]</a>, <a href="ElixirTranslation/quality_levels[3]">ElixirTranslation/quality_levels[3]</a>, <a href="ElixirTranslation/quality_levels[4]">ElixirTranslation/quality_levels[4]</a>, <a href="ElixirTranslation/quality_levels[5]">ElixirTranslation/quality_levels[5]</a>]

#### <a name="ElixirTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ElixirTranslation/alternative_names[]"></a> `ElixirTranslation/alternative_names[]`

- **Type:** <a href="../../_AlternativeNames.md#AlternativeName">AlternativeName</a>

---

### <a name="ElixirTranslation/common_ingredients[]"></a> `ElixirTranslation/common_ingredients[]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ElixirTranslation/quality_levels[0]"></a> `ElixirTranslation/quality_levels[0]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ElixirTranslation/quality_levels[1]"></a> `ElixirTranslation/quality_levels[1]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ElixirTranslation/quality_levels[2]"></a> `ElixirTranslation/quality_levels[2]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ElixirTranslation/quality_levels[3]"></a> `ElixirTranslation/quality_levels[3]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ElixirTranslation/quality_levels[4]"></a> `ElixirTranslation/quality_levels[4]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ElixirTranslation/quality_levels[5]"></a> `ElixirTranslation/quality_levels[5]`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
