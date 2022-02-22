# Culture

## Definitions

### <a name="Culture"></a> Culture (`Culture`)

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
- **Items:** <a href="#Culture/language[]">Culture/language[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/script"></a> `script?`

A list of native scripts (usually it is only one). If the culture does not use any script, leave this field empty.

- **Type:** List
- **Items:** <a href="#Culture/script[]">Culture/script[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/area_knowledge"></a> `area_knowledge`

If the area knowledge has a fixed value or can be adjusted.

- **Type:** <a href="#AreaKnowledge">AreaKnowledge</a>

#### <a name="Culture/social_status"></a> `social_status`

A list of possible social status in the respective culture.

- **Type:** List
- **Items:** <a href="#Culture/social_status[]">Culture/social_status[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/common_professions"></a> `common_professions`

A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).

- **Type:** <a href="#CommonProfessions/Config">CommonProfessions/Config</a>

#### <a name="Culture/common_advantages"></a> `common_advantages?`

A list of common advantages.

- **Type:** List
- **Items:** <a href="#Culture/common_advantages[]">Culture/common_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/common_disadvantages"></a> `common_disadvantages?`

A list of common disadvantages.

- **Type:** List
- **Items:** <a href="#Culture/common_disadvantages[]">Culture/common_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/uncommon_advantages"></a> `uncommon_advantages?`

A list of uncommon advantages.

- **Type:** List
- **Items:** <a href="#Culture/uncommon_advantages[]">Culture/uncommon_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/uncommon_disadvantages"></a> `uncommon_disadvantages?`

A list of uncommon disadvantages.

- **Type:** List
- **Items:** <a href="#Culture/uncommon_disadvantages[]">Culture/uncommon_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/common_skills"></a> `common_skills`

A list of common skills.

- **Type:** List
- **Items:** <a href="#Culture/common_skills[]">Culture/common_skills[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/uncommon_skills"></a> `uncommon_skills?`

A list of uncommon skills.

- **Type:** List
- **Items:** <a href="#Culture/uncommon_skills[]">Culture/uncommon_skills[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/cultural_package"></a> `cultural_package`

The skill points you get for buying the culture package.

- **Type:** List
- **Items:** <a href="#Culture/cultural_package[]">Culture/cultural_package[]</a>
- **Minimum Items:** `1`

#### <a name="Culture/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Culture/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Culture/translations[key]">Culture/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Culture/language[]"></a> `Culture/language[]`

- **Type:** <a href="#Language">Language</a>

---

### <a name="Culture/script[]"></a> `Culture/script[]`

- **Type:** <a href="#Script">Script</a>

---

### <a name="Culture/social_status[]"></a> `Culture/social_status[]`

- **Type:** <a href="#SocialStatus">SocialStatus</a>

---

### <a name="Culture/common_advantages[]"></a> `Culture/common_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="Culture/common_disadvantages[]"></a> `Culture/common_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="Culture/uncommon_advantages[]"></a> `Culture/uncommon_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="Culture/uncommon_disadvantages[]"></a> `Culture/uncommon_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="Culture/common_skills[]"></a> `Culture/common_skills[]`

- **Type:** <a href="#CommonnessRatedSkill">CommonnessRatedSkill</a>

---

### <a name="Culture/uncommon_skills[]"></a> `Culture/uncommon_skills[]`

- **Type:** <a href="#CommonnessRatedSkill">CommonnessRatedSkill</a>

---

### <a name="Culture/cultural_package[]"></a> `Culture/cultural_package[]`

- **Type:** <a href="#CulturalPackageItem">CulturalPackageItem</a>

---

### <a name="Culture/translations[key]"></a> `Culture/translations[key]`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Language"></a> `Language`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The language's identifier. | <a href="#Language/id">See details</a>

#### <a name="Language/id"></a> `id`

The language's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Script"></a> `Script`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The script's identifier. | <a href="#Script/id">See details</a>

#### <a name="Script/id"></a> `id`

The script's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AreaKnowledge"></a> `AreaKnowledge`

If the area knowledge has a fixed value or can be adjusted.

- **Type:** Union
- **Cases:** <a href="AreaKnowledge'Fixed">AreaKnowledge'Fixed</a> | <a href="AreaKnowledge'Adjustable">AreaKnowledge'Adjustable</a>

---

### <a name="AreaKnowledge'Fixed"></a> `AreaKnowledge'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AreaKnowledge'Fixed/tag">See details</a>

#### <a name="AreaKnowledge'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

---

### <a name="AreaKnowledge'Adjustable"></a> `AreaKnowledge'Adjustable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AreaKnowledge'Adjustable/tag">See details</a>

#### <a name="AreaKnowledge'Adjustable/tag"></a> `tag`

- **Constant:** `"Adjustable"`

---

### <a name="SocialStatus"></a> `SocialStatus`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The social status's identifier. | <a href="#SocialStatus/id">See details</a>

#### <a name="SocialStatus/id"></a> `id`

The social status's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CommonProfessions/Profession"></a> `CommonProfessions/Profession`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession's identifier. | <a href="#CommonProfessions/Profession/id">See details</a>

#### <a name="CommonProfessions/Profession/id"></a> `id`

The profession's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CommonProfessions/ProfessionVariant"></a> `CommonProfessions/ProfessionVariant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession variant's identifier. | <a href="#CommonProfessions/ProfessionVariant/id">See details</a>

#### <a name="CommonProfessions/ProfessionVariant/id"></a> `id`

The profession variant's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CommonProfessions/Plain/Constraint"></a> `CommonProfessions/Plain/Constraint`

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

---

### <a name="CommonProfessions/Plain/T"></a> `CommonProfessions/Plain/T`

A plain list of professions.

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
- **Items:** <a href="#CommonProfessions/Plain/T/constraints[]">CommonProfessions/Plain/T/constraints[]</a>
- **Minimum Items:** `1`

---

### <a name="CommonProfessions/Plain/T/constraints[]"></a> `CommonProfessions/Plain/T/constraints[]`

- **Type:** <a href="#CommonProfessions/Plain/Constraint">CommonProfessions/Plain/Constraint</a>

---

### <a name="CommonProfessions/Grouped/Constraints/WeightedVariants"></a> `CommonProfessions/Grouped/Constraints/WeightedVariants`

Some profession variants are more common than others. There may be cultures where some variants are not represented at all.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`variants` | The list of more common variants. | <a href="#CommonProfessions/Grouped/Constraints/WeightedVariants/variants">See details</a>
`weight` | The "weight" difference compared to other variants. Some variants are simply more common (Mostly), but sometimes only specific variants are used (Only). | <a href="#CommonProfessions/Grouped/Constraints/WeightedVariants/weight">See details</a>

#### <a name="CommonProfessions/Grouped/Constraints/WeightedVariants/variants"></a> `variants`

The list of more common variants.

- **Type:** List
- **Items:** <a href="#CommonProfessions/Grouped/Constraints/WeightedVariants/variants[]">CommonProfessions/Grouped/Constraints/WeightedVariants/variants[]</a>
- **Minimum Items:** `1`

#### <a name="CommonProfessions/Grouped/Constraints/WeightedVariants/weight"></a> `weight`

The "weight" difference compared to other variants. Some variants are simply more common (Mostly), but sometimes only specific variants are used (Only).

- **Type:** <a href="#CommonProfessions/Grouped/Weight">CommonProfessions/Grouped/Weight</a>

---

### <a name="CommonProfessions/Grouped/Constraints/WeightedVariants/variants[]"></a> `CommonProfessions/Grouped/Constraints/WeightedVariants/variants[]`

- **Type:** <a href="#CommonProfessions/ProfessionVariant">CommonProfessions/ProfessionVariant</a>

---

### <a name="CommonProfessions/Grouped/Constraints/Profession"></a> `CommonProfessions/Grouped/Constraints/Profession`

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

- **Type:** <a href="#CommonProfessions/Grouped/Constraints/WeightedVariants">CommonProfessions/Grouped/Constraints/WeightedVariants</a>

#### <a name="CommonProfessions/Grouped/Constraints/Profession/rarity"></a> `rarity?`

Some professions may be found in a culture, but are not that common.

- **Type:** <a href="#CommonProfessions/Grouped/Rarity">CommonProfessions/Grouped/Rarity</a>

---

### <a name="CommonProfessions/Grouped/Weight"></a> `CommonProfessions/Grouped/Weight`

The "weight" difference compared to other variants. Some variants are simply more common (Mostly), but sometimes only specific variants are used (Only).

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Grouped/Weight'Mostly">CommonProfessions/Grouped/Weight'Mostly</a> | <a href="CommonProfessions/Grouped/Weight'Only">CommonProfessions/Grouped/Weight'Only</a>

---

### <a name="CommonProfessions/Grouped/Weight'Mostly"></a> `CommonProfessions/Grouped/Weight'Mostly`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Weight'Mostly/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Weight'Mostly/tag"></a> `tag`

- **Constant:** `"Mostly"`

---

### <a name="CommonProfessions/Grouped/Weight'Only"></a> `CommonProfessions/Grouped/Weight'Only`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Weight'Only/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Weight'Only/tag"></a> `tag`

- **Constant:** `"Only"`

---

### <a name="CommonProfessions/Grouped/Rarity"></a> `CommonProfessions/Grouped/Rarity`

Some professions may be found in a culture, but are not that common.

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Grouped/Rarity'Rare">CommonProfessions/Grouped/Rarity'Rare</a> | <a href="CommonProfessions/Grouped/Rarity'VeryRare">CommonProfessions/Grouped/Rarity'VeryRare</a>

---

### <a name="CommonProfessions/Grouped/Rarity'Rare"></a> `CommonProfessions/Grouped/Rarity'Rare`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Rarity'Rare/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Rarity'Rare/tag"></a> `tag`

- **Constant:** `"Rare"`

---

### <a name="CommonProfessions/Grouped/Rarity'VeryRare"></a> `CommonProfessions/Grouped/Rarity'VeryRare`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Rarity'VeryRare/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Rarity'VeryRare/tag"></a> `tag`

- **Constant:** `"VeryRare"`

---

### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup"></a> `CommonProfessions/Grouped/Mundane/ProfessionSubgroup`

Some professions may be found in a culture, but are not that common.

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Profane">CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Profane</a> | <a href="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Fighter">CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Fighter</a> | <a href="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Religious">CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Religious</a>

---

### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Profane"></a> `CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Profane`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Profane/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Profane/tag"></a> `tag`

- **Constant:** `"Profane"`

---

### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Fighter"></a> `CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Fighter`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Fighter/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Fighter/tag"></a> `tag`

- **Constant:** `"Fighter"`

---

### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Religious"></a> `CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Religious`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Religious/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/ProfessionSubgroup'Religious/tag"></a> `tag`

- **Constant:** `"Religious"`

---

### <a name="CommonProfessions/Grouped/Mundane/Constraint"></a> `CommonProfessions/Grouped/Mundane/Constraint`

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Grouped/Mundane/Constraint'Profession">CommonProfessions/Grouped/Mundane/Constraint'Profession</a> | <a href="CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup">CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup</a>

---

### <a name="CommonProfessions/Grouped/Mundane/Constraint'Profession"></a> `CommonProfessions/Grouped/Mundane/Constraint'Profession`

- **Type:** <a href="#CommonProfessions/Grouped/Constraints/Profession">CommonProfessions/Grouped/Constraints/Profession</a>

---

### <a name="CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup"></a> `CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup/tag">See details</a>
`subgroup` |  | <a href="#CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup/subgroup">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup/tag"></a> `tag`

- **Constant:** `"ProfessionSubgroup"`

#### <a name="CommonProfessions/Grouped/Mundane/Constraint'ProfessionSubgroup/subgroup"></a> `subgroup`

- **Type:** <a href="#CommonProfessions/Grouped/Mundane/ProfessionSubgroup">CommonProfessions/Grouped/Mundane/ProfessionSubgroup</a>

---

### <a name="CommonProfessions/Grouped/Mundane/Operation"></a> `CommonProfessions/Grouped/Mundane/Operation`

This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude).

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Grouped/Mundane/Operation'Intersection">CommonProfessions/Grouped/Mundane/Operation'Intersection</a> | <a href="CommonProfessions/Grouped/Mundane/Operation'Difference">CommonProfessions/Grouped/Mundane/Operation'Difference</a>

---

### <a name="CommonProfessions/Grouped/Mundane/Operation'Intersection"></a> `CommonProfessions/Grouped/Mundane/Operation'Intersection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/Operation'Intersection/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/Operation'Intersection/tag"></a> `tag`

- **Constant:** `"Intersection"`

---

### <a name="CommonProfessions/Grouped/Mundane/Operation'Difference"></a> `CommonProfessions/Grouped/Mundane/Operation'Difference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Mundane/Operation'Difference/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/Operation'Difference/tag"></a> `tag`

- **Constant:** `"Difference"`

---

### <a name="CommonProfessions/Grouped/Mundane/T"></a> `CommonProfessions/Grouped/Mundane/T`

A list of professions. The filter specifies how the list is applied to all mundane professions.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of professions. | <a href="#CommonProfessions/Grouped/Mundane/T/constraints">See details</a>
`operation` | This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude). | <a href="#CommonProfessions/Grouped/Mundane/T/operation">See details</a>

#### <a name="CommonProfessions/Grouped/Mundane/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Items:** <a href="#CommonProfessions/Grouped/Mundane/T/constraints[]">CommonProfessions/Grouped/Mundane/T/constraints[]</a>
- **Minimum Items:** `1`

#### <a name="CommonProfessions/Grouped/Mundane/T/operation"></a> `operation`

This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude).

- **Type:** <a href="#CommonProfessions/Grouped/Mundane/Operation">CommonProfessions/Grouped/Mundane/Operation</a>

---

### <a name="CommonProfessions/Grouped/Mundane/T/constraints[]"></a> `CommonProfessions/Grouped/Mundane/T/constraints[]`

- **Type:** <a href="#CommonProfessions/Grouped/Mundane/Constraint">CommonProfessions/Grouped/Mundane/Constraint</a>

---

### <a name="CommonProfessions/Grouped/Magic/WeightedProfessions"></a> `CommonProfessions/Grouped/Magic/WeightedProfessions`

Some professions are more common than others. There may be cultures where some professions are not represented at all.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`professions` | The list of more common variants. | <a href="#CommonProfessions/Grouped/Magic/WeightedProfessions/professions">See details</a>
`weight` | The "weight" difference compared to other professions. Some professions are simply more common (Mostly), but sometimes only specific professions are used (Only). | <a href="#CommonProfessions/Grouped/Magic/WeightedProfessions/weight">See details</a>

#### <a name="CommonProfessions/Grouped/Magic/WeightedProfessions/professions"></a> `professions`

The list of more common variants.

- **Type:** List
- **Items:** <a href="#CommonProfessions/Grouped/Magic/WeightedProfessions/professions[]">CommonProfessions/Grouped/Magic/WeightedProfessions/professions[]</a>
- **Minimum Items:** `1`

#### <a name="CommonProfessions/Grouped/Magic/WeightedProfessions/weight"></a> `weight`

The "weight" difference compared to other professions. Some professions are simply more common (Mostly), but sometimes only specific professions are used (Only).

- **Type:** <a href="#CommonProfessions/Grouped/Weight">CommonProfessions/Grouped/Weight</a>

---

### <a name="CommonProfessions/Grouped/Magic/WeightedProfessions/professions[]"></a> `CommonProfessions/Grouped/Magic/WeightedProfessions/professions[]`

- **Type:** <a href="#CommonProfessions/Profession">CommonProfessions/Profession</a>

---

### <a name="CommonProfessions/Grouped/Magic/Constraint"></a> `CommonProfessions/Grouped/Magic/Constraint`

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Grouped/Magic/Constraint'Tradition">CommonProfessions/Grouped/Magic/Constraint'Tradition</a> | <a href="CommonProfessions/Grouped/Magic/Constraint'MagicDilettante">CommonProfessions/Grouped/Magic/Constraint'MagicDilettante</a> | <a href="CommonProfessions/Grouped/Magic/Constraint'Profession">CommonProfessions/Grouped/Magic/Constraint'Profession</a>

---

### <a name="CommonProfessions/Grouped/Magic/Constraint'Tradition"></a> `CommonProfessions/Grouped/Magic/Constraint'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Magic/Constraint'Tradition/tag">See details</a>
`id` | The magical tradition's identifier. | <a href="#CommonProfessions/Grouped/Magic/Constraint'Tradition/id">See details</a>
`weighted_professions?` | Some professions are more common than others. There may be cultures where some professions are not represented at all. | <a href="#CommonProfessions/Grouped/Magic/Constraint'Tradition/weighted_professions">See details</a>
`rarity?` | Some traditions may be found in a culture, but are not that common. | <a href="#CommonProfessions/Grouped/Magic/Constraint'Tradition/rarity">See details</a>

#### <a name="CommonProfessions/Grouped/Magic/Constraint'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="CommonProfessions/Grouped/Magic/Constraint'Tradition/id"></a> `id`

The magical tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CommonProfessions/Grouped/Magic/Constraint'Tradition/weighted_professions"></a> `weighted_professions?`

Some professions are more common than others. There may be cultures where some professions are not represented at all.

- **Type:** <a href="#CommonProfessions/Grouped/Magic/WeightedProfessions">CommonProfessions/Grouped/Magic/WeightedProfessions</a>

#### <a name="CommonProfessions/Grouped/Magic/Constraint'Tradition/rarity"></a> `rarity?`

Some traditions may be found in a culture, but are not that common.

- **Type:** <a href="#CommonProfessions/Grouped/Rarity">CommonProfessions/Grouped/Rarity</a>

---

### <a name="CommonProfessions/Grouped/Magic/Constraint'MagicDilettante"></a> `CommonProfessions/Grouped/Magic/Constraint'MagicDilettante`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions/Grouped/Magic/Constraint'MagicDilettante/tag">See details</a>

#### <a name="CommonProfessions/Grouped/Magic/Constraint'MagicDilettante/tag"></a> `tag`

- **Constant:** `"MagicDilettante"`

---

### <a name="CommonProfessions/Grouped/Magic/Constraint'Profession"></a> `CommonProfessions/Grouped/Magic/Constraint'Profession`

- **Type:** <a href="#CommonProfessions/Grouped/Constraints/Profession">CommonProfessions/Grouped/Constraints/Profession</a>

---

### <a name="CommonProfessions/Grouped/Magic/T"></a> `CommonProfessions/Grouped/Magic/T`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of professions. | <a href="#CommonProfessions/Grouped/Magic/T/constraints">See details</a>

#### <a name="CommonProfessions/Grouped/Magic/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Items:** <a href="#CommonProfessions/Grouped/Magic/T/constraints[]">CommonProfessions/Grouped/Magic/T/constraints[]</a>
- **Minimum Items:** `1`

---

### <a name="CommonProfessions/Grouped/Magic/T/constraints[]"></a> `CommonProfessions/Grouped/Magic/T/constraints[]`

- **Type:** <a href="#CommonProfessions/Grouped/Magic/Constraint">CommonProfessions/Grouped/Magic/Constraint</a>

---

### <a name="CommonProfessions/Grouped/Blessed/Constraint"></a> `CommonProfessions/Grouped/Blessed/Constraint`

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

- **Type:** <a href="#CommonProfessions/Grouped/Rarity">CommonProfessions/Grouped/Rarity</a>

---

### <a name="CommonProfessions/Grouped/Blessed/T"></a> `CommonProfessions/Grouped/Blessed/T`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of professions. | <a href="#CommonProfessions/Grouped/Blessed/T/constraints">See details</a>

#### <a name="CommonProfessions/Grouped/Blessed/T/constraints"></a> `constraints`

The list of professions.

- **Type:** List
- **Items:** <a href="#CommonProfessions/Grouped/Blessed/T/constraints[]">CommonProfessions/Grouped/Blessed/T/constraints[]</a>
- **Minimum Items:** `1`

---

### <a name="CommonProfessions/Grouped/Blessed/T/constraints[]"></a> `CommonProfessions/Grouped/Blessed/T/constraints[]`

- **Type:** <a href="#CommonProfessions/Grouped/Blessed/Constraint">CommonProfessions/Grouped/Blessed/Constraint</a>

---

### <a name="CommonProfessions/Grouped/T"></a> `CommonProfessions/Grouped/T`

Lists of professions by group.

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

- **Type:** <a href="#CommonProfessions/Grouped/Mundane/T">CommonProfessions/Grouped/Mundane/T</a>

#### <a name="CommonProfessions/Grouped/T/magic"></a> `magic?`

- **Type:** <a href="#CommonProfessions/Grouped/Magic/T">CommonProfessions/Grouped/Magic/T</a>

#### <a name="CommonProfessions/Grouped/T/blessed"></a> `blessed?`

- **Type:** <a href="#CommonProfessions/Grouped/Blessed/T">CommonProfessions/Grouped/Blessed/T</a>

---

### <a name="CommonProfessions/Config"></a> `CommonProfessions/Config`

A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).

- **Type:** Union
- **Cases:** <a href="CommonProfessions/Config'T">CommonProfessions/Config'T</a> | <a href="CommonProfessions/Config'T">CommonProfessions/Config'T</a>

---

### <a name="CommonProfessions/Config'T"></a> `CommonProfessions/Config'T`

- **Type:** <a href="#CommonProfessions/Plain/T">CommonProfessions/Plain/T</a>

---

### <a name="CommonProfessions/Config'T"></a> `CommonProfessions/Config'T`

- **Type:** <a href="#CommonProfessions/Grouped/T">CommonProfessions/Grouped/T</a>

---

### <a name="CommonnessRatedSkill"></a> `CommonnessRatedSkill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CommonnessRatedSkill/id">See details</a>

#### <a name="CommonnessRatedSkill/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CulturalPackageItem"></a> `CulturalPackageItem`

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

### <a name="Translation"></a> `Translation`

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

### <a name="AreaKnowledgeTranslation"></a> `AreaKnowledgeTranslation`

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
- **Items:** <a href="#AreaKnowledgeTranslation/examples[]">AreaKnowledgeTranslation/examples[]</a>
- **Minimum Items:** `1`

---

### <a name="AreaKnowledgeTranslation/examples[]"></a> `AreaKnowledgeTranslation/examples[]`

- **Type:** <a href="#AreaKnowledgeExample">AreaKnowledgeExample</a>

---

### <a name="AreaKnowledgeExample"></a> `AreaKnowledgeExample`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CommonNames"></a> `CommonNames`

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
- **Items:** <a href="#CommonNames/first_name_groups[]">CommonNames/first_name_groups[]</a>
- **Minimum Items:** `1`

#### <a name="CommonNames/last_name_groups"></a> `last_name_groups?`

Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.

- **Type:** List
- **Items:** <a href="#CommonNames/last_name_groups[]">CommonNames/last_name_groups[]</a>
- **Minimum Items:** `1`

#### <a name="CommonNames/naming_rules"></a> `naming_rules?`

Special naming rules.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CommonNames/first_name_groups[]"></a> `CommonNames/first_name_groups[]`

- **Type:** <a href="#NameGroup">NameGroup</a>

---

### <a name="CommonNames/last_name_groups[]"></a> `CommonNames/last_name_groups[]`

- **Type:** <a href="#NameGroup">NameGroup</a>

---

### <a name="NameGroup"></a> `NameGroup`

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
- **Items:** <a href="#NameGroup/names[]">NameGroup/names[]</a>
- **Minimum Items:** `1`

---

### <a name="NameGroup/names[]"></a> `NameGroup/names[]`

- **Type:** <a href="#Name">Name</a>

---

### <a name="Name"></a> `Name`

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
