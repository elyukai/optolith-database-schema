# Culture

## Definitions

### <a name="Culture"></a> Culture

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#Culture/id">See details</a>
`language` | A list of native languages (usually it is only one). | <a href="#Culture/language">See details</a>
`script?` | A list of native scripts (usually it is only one). If the culture does not use any script, leave this field empty. | <a href="#Culture/script">See details</a>
`area_knowledge` | If the area knowledge has a fixed value or can be adjusted. | <a href="#Culture/area_knowledge">See details</a>
`social_status` | A list of possible social status in the respective culture. | <a href="#Culture/social_status">See details</a>
`common_professions` | A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list). | <a href="#Culture/common_professions">See details</a>
`common_advantages?` | A list of common advantages. | <a href="#Culture/common_advantages">See details</a>
`common_disadvantages?` | A list of common disadvantages. | <a href="#Culture/common_disadvantages">See details</a>
`uncommon_advantages?` | A list of uncommon advantages. | <a href="#Culture/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | A list of uncommon disadvantages. | <a href="#Culture/uncommon_disadvantages">See details</a>
`common_skills` | A list of common skills. | <a href="#Culture/common_skills">See details</a>
`uncommon_skills?` | A list of uncommon skills. | <a href="#Culture/uncommon_skills">See details</a>
`cultural_package` | The skill points you get for buying the culture package. | <a href="#Culture/cultural_package">See details</a>
`src` |  | <a href="#Culture/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Culture/translations">See details</a>

#### <a name="Culture/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Culture/language"></a> `language`

A list of native languages (usually it is only one).

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Language">Language</a>

#### <a name="Culture/script"></a> `script?`

A list of native scripts (usually it is only one). If the culture does not use any script, leave this field empty.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Script">Script</a>

#### <a name="Culture/area_knowledge"></a> `area_knowledge`

If the area knowledge has a fixed value or can be adjusted.

- **Type:** <a href="#AreaKnowledge">AreaKnowledge</a>

#### <a name="Culture/social_status"></a> `social_status`

A list of possible social status in the respective culture.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#SocialStatus">SocialStatus</a>

#### <a name="Culture/common_professions"></a> `common_professions`

A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).

- **Type:** <a href="#CommonProfessions/Config">Config</a>

#### <a name="Culture/common_advantages"></a> `common_advantages?`

A list of common advantages.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Culture/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Culture/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Culture/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

#### <a name="Culture/common_skills"></a> `common_skills`

A list of common skills.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#CommonnessRatedSkill">CommonnessRatedSkill</a>

#### <a name="Culture/uncommon_skills"></a> `uncommon_skills?`

A list of uncommon skills.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#CommonnessRatedSkill">CommonnessRatedSkill</a>

#### <a name="Culture/cultural_package"></a> `cultural_package`

The skill points you get for buying the culture package.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#CulturalPackageItem">CulturalPackageItem</a>

#### <a name="Culture/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Culture/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Language"></a> Language

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The language's identifier. | <a href="#Language/id">See details</a>

#### <a name="Language/id"></a> `id`

The language's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Script"></a> Script

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The script's identifier. | <a href="#Script/id">See details</a>

#### <a name="Script/id"></a> `id`

The script's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AreaKnowledge"></a> AreaKnowledge

If the area knowledge has a fixed value or can be adjusted.

- **Type:** Union

#### Case: Fixed

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AreaKnowledge`0/tag">See details</a>

##### <a name="AreaKnowledge`0/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### Case: Adjustable

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AreaKnowledge`1/tag">See details</a>

##### <a name="AreaKnowledge`1/tag"></a> `tag`

- **Constant:** `"Adjustable"`

---

### <a name="SocialStatus"></a> SocialStatus

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The social status's identifier. | <a href="#SocialStatus/id">See details</a>

#### <a name="SocialStatus/id"></a> `id`

The social status's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CommonProfessions"></a> Common Professions

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession's identifier. | <a href="#CommonProfessions/Profession/id">See details</a>

#### <a name="CommonProfessions/Profession/id"></a> `id`

The profession's identifier.

- **Type:** Integer
- **Minimum:** `1`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession variant's identifier. | <a href="#CommonProfessions/ProfessionVariant/id">See details</a>

#### <a name="CommonProfessions/ProfessionVariant/id"></a> `id`

The profession variant's identifier.

- **Type:** Integer
- **Minimum:** `1`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Plain/Constraint/tag">See details</a>
`id` | The profession's identifier. | <a href="#CommonProfessions/Plain/Constraint/id">See details</a>

#### <a name="CommonProfessions/Plain/Constraint/tag"></a> `tag`

- **Constant:** `"Profession"`

#### <a name="CommonProfessions/Plain/Constraint/id"></a> `id`

The profession's identifier.

- **Type:** Integer
- **Minimum:** `1`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Plain/T/tag">See details</a>
`constraints` | The list of professions. | <a href="#CommonProfessions/Plain/T/constraints">See details</a>

#### <a name="CommonProfessions/Plain/T/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="CommonProfessions/Plain/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Plain/CommonProfessions/Constraint">Constraint</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`variants` | The list of more common variants. | <a href="#CommonProfessions/Grouped/Constraints/WeightedVariants/variants">See details</a>
`weight` | The "weight" difference compared to other variants. Some variants are simply more common (Mostly), but sometimes only specific variants are used (Only). | <a href="#CommonProfessions/Grouped/Constraints/WeightedVariants/weight">See details</a>

#### <a name="CommonProfessions/Grouped/Constraints/WeightedVariants/variants"></a> `variants`

The list of more common variants.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#CommonProfessions/ProfessionVariant">ProfessionVariant</a>

#### <a name="CommonProfessions/Grouped/Constraints/WeightedVariants/weight"></a> `weight`

The "weight" difference compared to other variants. Some variants are simply more common (Mostly), but sometimes only specific variants are used (Only).

- **Type:** <a href="#Grouped/CommonProfessions/Weight">Weight</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Constraints/Profession/tag">See details</a>
`id` | The profession's identifier. | <a href="#CommonProfessions/Grouped/Constraints/Profession/id">See details</a>
`weighted_variants?` | Some profession variants are more common than others. There may be cultures where some variants are not represented at all. | <a href="#CommonProfessions/Grouped/Constraints/Profession/weighted_variants">See details</a>
`rarity?` | Some professions may be found in a culture, but are not that common. | <a href="#CommonProfessions/Grouped/Constraints/Profession/rarity">See details</a>

#### <a name="CommonProfessions/Grouped/Constraints/Profession/tag"></a> `tag`

- **Constant:** `"Profession"`

#### <a name="CommonProfessions/Grouped/Constraints/Profession/id"></a> `id`

The profession's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CommonProfessions/Grouped/Constraints/Profession/weighted_variants"></a> `weighted_variants?`

Some profession variants are more common than others. There may be cultures where some variants are not represented at all.

- **Type:** <a href="#Constraints/Grouped/CommonProfessions/WeightedVariants">WeightedVariants</a>

#### <a name="CommonProfessions/Grouped/Constraints/Profession/rarity"></a> `rarity?`

Some professions may be found in a culture, but are not that common.

- **Type:** <a href="#Grouped/CommonProfessions/Rarity">Rarity</a>

- **Type:** Union

#### Case: Mostly

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Weight`0/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Weight`0/tag"></a> `tag`

- **Constant:** `"Mostly"`

#### Case: Only

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Weight`1/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Weight`1/tag"></a> `tag`

- **Constant:** `"Only"`

- **Type:** Union

#### Case: Rare

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Rarity`0/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Rarity`0/tag"></a> `tag`

- **Constant:** `"Rare"`

#### Case: VeryRare

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Rarity`1/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Rarity`1/tag"></a> `tag`

- **Constant:** `"VeryRare"`

- **Type:** Union

#### Case: Profane

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup`0/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup`0/tag"></a> `tag`

- **Constant:** `"Profane"`

#### Case: Fighter

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup`1/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup`1/tag"></a> `tag`

- **Constant:** `"Fighter"`

#### Case: Religious

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup`2/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup`2/tag"></a> `tag`

- **Constant:** `"Religious"`

- **Type:** Union

#### Case: Profession

- **Type:** <a href="#Constraints/Grouped/CommonProfessions/Profession">Profession</a>

#### Case: ProfessionSubgroup

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/Constraint`1/tag">See details</a>
`subgroup` |  | <a href="#CommonProfessions/Grouped/Mundane/Constraint`1/subgroup">See details</a>

##### <a name="CommonProfessions/Grouped/Mundane/Constraint`1/tag"></a> `tag`

- **Constant:** `"ProfessionSubgroup"`

##### <a name="CommonProfessions/Grouped/Mundane/Constraint`1/subgroup"></a> `subgroup`

- **Type:** <a href="#Mundane/Grouped/CommonProfessions/ProfessionSubgroup">ProfessionSubgroup</a>

- **Type:** Union

#### Case: Intersection

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/Operation`0/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Mundane/Operation`0/tag"></a> `tag`

- **Constant:** `"Intersection"`

#### Case: Difference

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/Operation`1/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Mundane/Operation`1/tag"></a> `tag`

- **Constant:** `"Difference"`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of professions. | <a href="#CommonProfessions/Grouped/Mundane/T/constraints">See details</a>
`operation` | This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude). | <a href="#CommonProfessions/Grouped/Mundane/T/operation">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Mundane/Grouped/CommonProfessions/Constraint">Constraint</a>

#### <a name="CommonProfessions/Grouped/Mundane/T/operation"></a> `operation`

This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude).

- **Type:** <a href="#Mundane/Grouped/CommonProfessions/Operation">Operation</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`professions` | The list of more common variants. | <a href="#CommonProfessions/Grouped/Magic/WeightedProfessions/professions">See details</a>
`weight` | The "weight" difference compared to other professions. Some professions are simply more common (Mostly), but sometimes only specific professions are used (Only). | <a href="#CommonProfessions/Grouped/Magic/WeightedProfessions/weight">See details</a>

#### <a name="CommonProfessions/Grouped/Magic/WeightedProfessions/professions"></a> `professions`

The list of more common variants.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#CommonProfessions/Profession">Profession</a>

#### <a name="CommonProfessions/Grouped/Magic/WeightedProfessions/weight"></a> `weight`

The "weight" difference compared to other professions. Some professions are simply more common (Mostly), but sometimes only specific professions are used (Only).

- **Type:** <a href="#Grouped/CommonProfessions/Weight">Weight</a>

- **Type:** Union

#### Case: Tradition

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Magic/Constraint`0/tag">See details</a>
`id` | The magical tradition's identifier. | <a href="#CommonProfessions/Grouped/Magic/Constraint`0/id">See details</a>
`weighted_professions?` | Some professions are more common than others. There may be cultures where some professions are not represented at all. | <a href="#CommonProfessions/Grouped/Magic/Constraint`0/weighted_professions">See details</a>
`rarity?` | Some traditions may be found in a culture, but are not that common. | <a href="#CommonProfessions/Grouped/Magic/Constraint`0/rarity">See details</a>

##### <a name="CommonProfessions/Grouped/Magic/Constraint`0/tag"></a> `tag`

- **Constant:** `"Tradition"`

##### <a name="CommonProfessions/Grouped/Magic/Constraint`0/id"></a> `id`

The magical tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

##### <a name="CommonProfessions/Grouped/Magic/Constraint`0/weighted_professions"></a> `weighted_professions?`

Some professions are more common than others. There may be cultures where some professions are not represented at all.

- **Type:** <a href="#Magic/Grouped/CommonProfessions/WeightedProfessions">WeightedProfessions</a>

##### <a name="CommonProfessions/Grouped/Magic/Constraint`0/rarity"></a> `rarity?`

Some traditions may be found in a culture, but are not that common.

- **Type:** <a href="#Grouped/CommonProfessions/Rarity">Rarity</a>

#### Case: MagicDilettante

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Magic/Constraint`1/tag">See details</a>

##### <a name="CommonProfessions/Grouped/Magic/Constraint`1/tag"></a> `tag`

- **Constant:** `"MagicDilettante"`

#### Case: Profession

- **Type:** <a href="#Constraints/Grouped/CommonProfessions/Profession">Profession</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of professions. | <a href="#CommonProfessions/Grouped/Magic/T/constraints">See details</a>

#### <a name="CommonProfessions/Grouped/Magic/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Magic/Grouped/CommonProfessions/Constraint">Constraint</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Blessed/Constraint/tag">See details</a>
`id` | The blessed tradition's identifier. | <a href="#CommonProfessions/Grouped/Blessed/Constraint/id">See details</a>
`rarity?` | Some traditions may be found in a culture, but are not that common. | <a href="#CommonProfessions/Grouped/Blessed/Constraint/rarity">See details</a>

#### <a name="CommonProfessions/Grouped/Blessed/Constraint/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="CommonProfessions/Grouped/Blessed/Constraint/id"></a> `id`

The blessed tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CommonProfessions/Grouped/Blessed/Constraint/rarity"></a> `rarity?`

Some traditions may be found in a culture, but are not that common.

- **Type:** <a href="#Grouped/CommonProfessions/Rarity">Rarity</a>

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of professions. | <a href="#CommonProfessions/Grouped/Blessed/T/constraints">See details</a>

#### <a name="CommonProfessions/Grouped/Blessed/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Blessed/Grouped/CommonProfessions/Constraint">Constraint</a>

- **Type:** Object
- **Minimum Properties:** `2`

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/T/tag">See details</a>
`mundane?` | A list of professions. The filter specifies how the list is applied to all mundane professions. | <a href="#CommonProfessions/Grouped/T/mundane">See details</a>
`magic?` |  | <a href="#CommonProfessions/Grouped/T/magic">See details</a>
`blessed?` |  | <a href="#CommonProfessions/Grouped/T/blessed">See details</a>

#### <a name="CommonProfessions/Grouped/T/tag"></a> `tag`

- **Constant:** `"Grouped"`

#### <a name="CommonProfessions/Grouped/T/mundane"></a> `mundane?`

A list of professions. The filter specifies how the list is applied to all mundane professions.

- **Type:** <a href="#Mundane/Grouped/CommonProfessions/T">T</a>

#### <a name="CommonProfessions/Grouped/T/magic"></a> `magic?`

- **Type:** <a href="#Magic/Grouped/CommonProfessions/T">T</a>

#### <a name="CommonProfessions/Grouped/T/blessed"></a> `blessed?`

- **Type:** <a href="#Blessed/Grouped/CommonProfessions/T">T</a>

- **Type:** Union

#### Case: T

- **Type:** <a href="#Plain/CommonProfessions/T">T</a>

#### Case: T

- **Type:** <a href="#Grouped/CommonProfessions/T">T</a>

---

### <a name="CommonnessRatedSkill"></a> CommonnessRatedSkill

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CommonnessRatedSkill/id">See details</a>

#### <a name="CommonnessRatedSkill/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CulturalPackageItem"></a> CulturalPackageItem

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CulturalPackageItem/id">See details</a>
`points` | The skill points for the respective skill you get for buying the cultural package. | <a href="#CulturalPackageItem/points">See details</a>

#### <a name="CulturalPackageItem/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CulturalPackageItem/points"></a> `points`

The skill points for the respective skill you get for buying the cultural package.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `2`

---

### <a name="Translation"></a> Translation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the state. | <a href="#Translation/name">See details</a>
`area_knowledge` | The description of the area knowledge. | <a href="#Translation/area_knowledge">See details</a>
`common_advantages?` | The respective common advantages text from the source book. | <a href="#Translation/common_advantages">See details</a>
`common_disadvantages?` | The respective common disadvantages text from the source book. | <a href="#Translation/common_disadvantages">See details</a>
`uncommon_advantages?` | The respective uncommon advantages text from the source book. | <a href="#Translation/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | The respective uncommon disadvantages text from the source book. | <a href="#Translation/uncommon_disadvantages">See details</a>
`common_names` | Structured description of common names. | <a href="#Translation/common_names">See details</a>
`errata?` |  | <a href="#Translation/errata">See details</a>

#### <a name="Translation/name"></a> `name`

The name of the state.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/area_knowledge"></a> `area_knowledge`

The description of the area knowledge.

- **Type:** <a href="#AreaKnowledgeTranslation">AreaKnowledgeTranslation</a>

#### <a name="Translation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/common_names"></a> `common_names`

Structured description of common names.

- **Type:** <a href="#CommonNames">CommonNames</a>

#### <a name="Translation/errata"></a> `errata?`

- **Type:** <a href="./_Erratum.md#Errata">Errata</a>

---

### <a name="AreaKnowledgeTranslation"></a> AreaKnowledgeTranslation

Description and examples of the area knowledge.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | The full description without examples in parenthesis. | <a href="#AreaKnowledgeTranslation/description">See details</a>
`abbreviated` | A shorter version of the description, used in input fields and other UI elements where the space might be to small to use the full description. | <a href="#AreaKnowledgeTranslation/abbreviated">See details</a>
`examples?` | Examples of areas, if applicable. | <a href="#AreaKnowledgeTranslation/examples">See details</a>

#### <a name="AreaKnowledgeTranslation/description"></a> `description`

The full description without examples in parenthesis.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AreaKnowledgeTranslation/abbreviated"></a> `abbreviated`

A shorter version of the description, used in input fields and other UI elements where the space might be to small to use the full description.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AreaKnowledgeTranslation/examples"></a> `examples?`

Examples of areas, if applicable.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#AreaKnowledgeExample">AreaKnowledgeExample</a>

---

### <a name="AreaKnowledgeExample"></a> AreaKnowledgeExample

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CommonNames"></a> CommonNames

Structured description of common names.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`first_name_groups?` | First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups. | <a href="#CommonNames/first_name_groups">See details</a>
`last_name_groups?` | Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups. | <a href="#CommonNames/last_name_groups">See details</a>
`naming_rules?` | Special naming rules. | <a href="#CommonNames/naming_rules">See details</a>

#### <a name="CommonNames/first_name_groups"></a> `first_name_groups?`

First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#NameGroup">NameGroup</a>

#### <a name="CommonNames/last_name_groups"></a> `last_name_groups?`

Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#NameGroup">NameGroup</a>

#### <a name="CommonNames/naming_rules"></a> `naming_rules?`

Special naming rules.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="NameGroup"></a> NameGroup

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label` | The group label. | <a href="#NameGroup/label">See details</a>
`sex` | The binary sex if the group is only for a certain binary sex. | <a href="#NameGroup/sex">See details</a>
`names` | The names from the group. | <a href="#NameGroup/names">See details</a>

#### <a name="NameGroup/label"></a> `label`

The group label.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="NameGroup/sex"></a> `sex`

The binary sex if the group is only for a certain binary sex.

- **Type:** <a href="./_Sex.md#Sex">Sex</a>

#### <a name="NameGroup/names"></a> `names`

The names from the group.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Name">Name</a>

---

### <a name="Name"></a> Name

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Name/name">See details</a>
`note?` | Additional information about the name, appended in parenthesis. | <a href="#Name/note">See details</a>

#### <a name="Name/name"></a> `name`

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Name/note"></a> `note?`

Additional information about the name, appended in parenthesis.

- **Type:** String
- **Minimum Length:** `1`
