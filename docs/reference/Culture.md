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

A list of native scripts (usually it is only one). If the culture does not
use any script, leave this field empty.

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

A list of professions that are typical for the culture, as well as
professions that are rarely practiced or encountered in the culture. The
list is either defined by group (as multiple lists) or plain (as a single
list).

- **Type:** <a href="#CommonProfessions">CommonProfessions</a>

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

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Culture/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CultureTranslation">CultureTranslation</a>&gt;

---

### <a name="Culture/language[]"></a> `Culture/language[]`

- **Type:** <a href="./_SimpleReferences.md#LanguageReference">LanguageReference</a>

---

### <a name="Culture/script[]"></a> `Culture/script[]`

- **Type:** <a href="./_SimpleReferences.md#ScriptReference">ScriptReference</a>

---

### <a name="Culture/social_status[]"></a> `Culture/social_status[]`

- **Type:** <a href="./_SimpleReferences.md#SocialStatusReference">SocialStatusReference</a>

---

### <a name="Culture/common_advantages[]"></a> `Culture/common_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="Culture/common_disadvantages[]"></a> `Culture/common_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

---

### <a name="Culture/uncommon_advantages[]"></a> `Culture/uncommon_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="Culture/uncommon_disadvantages[]"></a> `Culture/uncommon_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

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

### <a name="AreaKnowledge"></a> `AreaKnowledge`

If the area knowledge has a fixed value or can be adjusted.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_fixed` | `true` if the area knowledge has a fixed value, `false` if it can be adjusted. | <a href="#AreaKnowledge/is_fixed">See details</a>

#### <a name="AreaKnowledge/is_fixed"></a> `is_fixed`

`true` if the area knowledge has a fixed value, `false` if it can be
adjusted.

- **Type:** Boolean

---

### <a name="Weight"></a> `Weight`

The "weight" difference compared to other professions or profession variants.
Some professions or profession variants are simply more common (Mostly), but
sometimes only specific elements are used (Only).

- **Type:** Union
- **Cases:** <a href="#Weight'0">Weight'0</a> | <a href="#Weight'1">Weight'1</a>

---

### <a name="Weight'0"></a> `Weight'0`

- **Constant:** `"Mostly"`

---

### <a name="Weight'1"></a> `Weight'1`

- **Constant:** `"Only"`

---

### <a name="Weighted"></a> `Weighted<ProfessionOrVariant>`

Some professions or profession variants are more common than others. There
may be cultures where some professions or profession variants are not
represented at all.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`elements` | The list of more common professions or profession variants. | <a href="#Weighted/elements">See details</a>
`weight` | The "weight" difference compared to other professions or profession variants. Some professions or profession variants are simply more common (Mostly), but sometimes only specific elements are used (Only). | <a href="#Weighted/weight">See details</a>

#### <a name="Weighted/elements"></a> `elements`

The list of more common professions or profession variants.

- **Type:** List
- **Items:** <a href="#Weighted/elements[]">Weighted/elements[]</a>
- **Minimum Items:** `1`

#### <a name="Weighted/weight"></a> `weight`

The "weight" difference compared to other professions or profession
variants. Some professions or profession variants are simply more common
(Mostly), but sometimes only specific elements are used (Only).

- **Type:** <a href="#Weight">Weight</a>

---

### <a name="Weighted/elements[]"></a> `Weighted/elements[]`

- **Type:** <a href="#ProfessionOrVariant">ProfessionOrVariant</a>

---

### <a name="CommonProfessionConstraintsOperation"></a> `CommonProfessionConstraintsOperation`

This defines how the list of constraints should be offset against the
list of all mundane professions: Either only the professions are kept
that intersect with the constraints (include) or only the professions
are kept that are different from the constraints (exclude).

- **Type:** Union
- **Cases:** <a href="#CommonProfessionConstraintsOperation'0">CommonProfessionConstraintsOperation'0</a> | <a href="#CommonProfessionConstraintsOperation'1">CommonProfessionConstraintsOperation'1</a>

---

### <a name="CommonProfessionConstraintsOperation'0"></a> `CommonProfessionConstraintsOperation'0`

- **Constant:** `"Intersection"`

---

### <a name="CommonProfessionConstraintsOperation'1"></a> `CommonProfessionConstraintsOperation'1`

- **Constant:** `"Difference"`

---

### <a name="CommonProfessionConstraints"></a> `CommonProfessionConstraints<Constraint>`

A list of professions. The filter specifies how the list is applied to
all mundane professions.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`constraints` | The list of constraints. | <a href="#CommonProfessionConstraints/constraints">See details</a>
`operation` | This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints (include) or only the professions are kept that are different from the constraints (exclude). | <a href="#CommonProfessionConstraints/operation">See details</a>

#### <a name="CommonProfessionConstraints/constraints"></a> `constraints`

The list of constraints.

- **Type:** List
- **Items:** <a href="#CommonProfessionConstraints/constraints[]">CommonProfessionConstraints/constraints[]</a>
- **Minimum Items:** `1`

#### <a name="CommonProfessionConstraints/operation"></a> `operation`

This defines how the list of constraints should be offset against the
list of all mundane professions: Either only the professions are kept
that intersect with the constraints (include) or only the professions
are kept that are different from the constraints (exclude).

- **Type:** <a href="#CommonProfessionConstraintsOperation">CommonProfessionConstraintsOperation</a>

---

### <a name="CommonProfessionConstraints/constraints[]"></a> `CommonProfessionConstraints/constraints[]`

- **Type:** <a href="#Constraint">Constraint</a>

---

### <a name="Rarity"></a> `Rarity`

Some professions may be found in a culture, but are not that common.

- **Type:** Union
- **Cases:** <a href="#Rarity'0">Rarity'0</a> | <a href="#Rarity'1">Rarity'1</a>

---

### <a name="Rarity'0"></a> `Rarity'0`

- **Constant:** `"Rare"`

---

### <a name="Rarity'1"></a> `Rarity'1`

- **Constant:** `"VeryRare"`

---

### <a name="ProfessionConstraint"></a> `ProfessionConstraint`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession's identifier. | <a href="#ProfessionConstraint/id">See details</a>
`weighted_variants?` | Some profession variants are more common than others. There may be cultures where some variants are not represented at all. | <a href="#ProfessionConstraint/weighted_variants">See details</a>
`rarity?` | Some professions may be found in a culture, but are not that common. | <a href="#ProfessionConstraint/rarity">See details</a>

#### <a name="ProfessionConstraint/id"></a> `id`

The profession's identifier.

- **Type:** <a href="./_Identifier.md#ProfessionIdentifier">ProfessionIdentifier</a>

#### <a name="ProfessionConstraint/weighted_variants"></a> `weighted_variants?`

Some profession variants are more common than others. There may be
cultures where some variants are not represented at all.

- **Type:** <a href="#Weighted">Weighted</a>&lt;<a href="./_SimpleReferences.md#ProfessionVariantReference">ProfessionVariantReference</a>&gt;

#### <a name="ProfessionConstraint/rarity"></a> `rarity?`

Some professions may be found in a culture, but are not that
common.

- **Type:** <a href="#Rarity">Rarity</a>

---

### <a name="MundaneProfessionSubgroupConstraint"></a> `MundaneProfessionSubgroupConstraint`

Some professions may be found in a culture, but are not that common.

- **Type:** Union
- **Cases:** <a href="#MundaneProfessionSubgroupConstraint'0">MundaneProfessionSubgroupConstraint'0</a> | <a href="#MundaneProfessionSubgroupConstraint'1">MundaneProfessionSubgroupConstraint'1</a> | <a href="#MundaneProfessionSubgroupConstraint'2">MundaneProfessionSubgroupConstraint'2</a>

---

### <a name="MundaneProfessionSubgroupConstraint'0"></a> `MundaneProfessionSubgroupConstraint'0`

- **Constant:** `"Profane"`

---

### <a name="MundaneProfessionSubgroupConstraint'1"></a> `MundaneProfessionSubgroupConstraint'1`

- **Constant:** `"Fighter"`

---

### <a name="MundaneProfessionSubgroupConstraint'2"></a> `MundaneProfessionSubgroupConstraint'2`

- **Constant:** `"Religious"`

---

### <a name="MagicalTraditionConstraint"></a> `MagicalTraditionConstraint`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition's identifier. | <a href="#MagicalTraditionConstraint/id">See details</a>
`weighted_professions?` | Some professions are more common than others. There may be cultures where some professions are not represented at all. | <a href="#MagicalTraditionConstraint/weighted_professions">See details</a>
`rarity?` | Some traditions may be found in a culture, but are not that common. | <a href="#MagicalTraditionConstraint/rarity">See details</a>

#### <a name="MagicalTraditionConstraint/id"></a> `id`

The magical tradition's identifier.

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="MagicalTraditionConstraint/weighted_professions"></a> `weighted_professions?`

Some professions are more common than others. There may be cultures
where some professions are not represented at all.

- **Type:** <a href="#Weighted">Weighted</a>&lt;<a href="./_SimpleReferences.md#ProfessionReference">ProfessionReference</a>&gt;

#### <a name="MagicalTraditionConstraint/rarity"></a> `rarity?`

Some traditions may be found in a culture, but are not that common.

- **Type:** <a href="#Rarity">Rarity</a>

---

### <a name="BlessedTraditionConstraint"></a> `BlessedTraditionConstraint`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition's identifier. | <a href="#BlessedTraditionConstraint/id">See details</a>
`weighted_professions?` | Some professions are more common than others. There may be cultures where some professions are not represented at all. | <a href="#BlessedTraditionConstraint/weighted_professions">See details</a>
`rarity?` | Some traditions may be found in a culture, but are not that common. | <a href="#BlessedTraditionConstraint/rarity">See details</a>

#### <a name="BlessedTraditionConstraint/id"></a> `id`

The magical tradition's identifier.

- **Type:** <a href="./_Identifier.md#BlessedTraditionIdentifier">BlessedTraditionIdentifier</a>

#### <a name="BlessedTraditionConstraint/weighted_professions"></a> `weighted_professions?`

Some professions are more common than others. There may be cultures
where some professions are not represented at all.

- **Type:** <a href="#Weighted">Weighted</a>&lt;<a href="./_SimpleReferences.md#ProfessionReference">ProfessionReference</a>&gt;

#### <a name="BlessedTraditionConstraint/rarity"></a> `rarity?`

Some traditions may be found in a culture, but are not that common.

- **Type:** <a href="#Rarity">Rarity</a>

---

### <a name="MundaneCommonProfessionConstraint"></a> `MundaneCommonProfessionConstraint`

- **Type:** Union
- **Cases:** <a href="#MundaneCommonProfessionConstraint'Profession">MundaneCommonProfessionConstraint'Profession</a> | <a href="#MundaneCommonProfessionConstraint'ProfessionSubgroup">MundaneCommonProfessionConstraint'ProfessionSubgroup</a>

---

### <a name="MundaneCommonProfessionConstraint'Profession"></a> `MundaneCommonProfessionConstraint'Profession`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MundaneCommonProfessionConstraint'Profession/tag">See details</a>
`profession` |  | <a href="#MundaneCommonProfessionConstraint'Profession/profession">See details</a>

#### <a name="MundaneCommonProfessionConstraint'Profession/tag"></a> `tag`

- **Constant:** `"Profession"`

#### <a name="MundaneCommonProfessionConstraint'Profession/profession"></a> `profession`

- **Type:** <a href="#ProfessionConstraint">ProfessionConstraint</a>

---

### <a name="MundaneCommonProfessionConstraint'ProfessionSubgroup"></a> `MundaneCommonProfessionConstraint'ProfessionSubgroup`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MundaneCommonProfessionConstraint'ProfessionSubgroup/tag">See details</a>
`profession_subgroup` |  | <a href="#MundaneCommonProfessionConstraint'ProfessionSubgroup/profession_subgroup">See details</a>

#### <a name="MundaneCommonProfessionConstraint'ProfessionSubgroup/tag"></a> `tag`

- **Constant:** `"ProfessionSubgroup"`

#### <a name="MundaneCommonProfessionConstraint'ProfessionSubgroup/profession_subgroup"></a> `profession_subgroup`

- **Type:** <a href="#MundaneProfessionSubgroupConstraint">MundaneProfessionSubgroupConstraint</a>

---

### <a name="MagicCommonProfessionConstraint"></a> `MagicCommonProfessionConstraint`

- **Type:** Union
- **Cases:** <a href="#MagicCommonProfessionConstraint'Tradition">MagicCommonProfessionConstraint'Tradition</a> | <a href="#MagicCommonProfessionConstraint'MagicDilettante">MagicCommonProfessionConstraint'MagicDilettante</a> | <a href="#MagicCommonProfessionConstraint'Profession">MagicCommonProfessionConstraint'Profession</a>

---

### <a name="MagicCommonProfessionConstraint'Tradition"></a> `MagicCommonProfessionConstraint'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicCommonProfessionConstraint'Tradition/tag">See details</a>
`tradition` |  | <a href="#MagicCommonProfessionConstraint'Tradition/tradition">See details</a>

#### <a name="MagicCommonProfessionConstraint'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="MagicCommonProfessionConstraint'Tradition/tradition"></a> `tradition`

- **Type:** <a href="#MagicalTraditionConstraint">MagicalTraditionConstraint</a>

---

### <a name="MagicCommonProfessionConstraint'MagicDilettante"></a> `MagicCommonProfessionConstraint'MagicDilettante`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicCommonProfessionConstraint'MagicDilettante/tag">See details</a>
`magic_dilettante` |  | <a href="#MagicCommonProfessionConstraint'MagicDilettante/magic_dilettante">See details</a>

#### <a name="MagicCommonProfessionConstraint'MagicDilettante/tag"></a> `tag`

- **Constant:** `"MagicDilettante"`

#### <a name="MagicCommonProfessionConstraint'MagicDilettante/magic_dilettante"></a> `magic_dilettante`

- **Type:** <a href="#MagicCommonProfessionConstraint'MagicDilettante/magic_dilettante">Object</a>

---

### <a name="MagicCommonProfessionConstraint'MagicDilettante/magic_dilettante"></a> `MagicCommonProfessionConstraint'MagicDilettante/magic_dilettante`

- **Type:** Empty Object

---

### <a name="MagicCommonProfessionConstraint'Profession"></a> `MagicCommonProfessionConstraint'Profession`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicCommonProfessionConstraint'Profession/tag">See details</a>
`profession` |  | <a href="#MagicCommonProfessionConstraint'Profession/profession">See details</a>

#### <a name="MagicCommonProfessionConstraint'Profession/tag"></a> `tag`

- **Constant:** `"Profession"`

#### <a name="MagicCommonProfessionConstraint'Profession/profession"></a> `profession`

- **Type:** <a href="#ProfessionConstraint">ProfessionConstraint</a>

---

### <a name="BlessedCommonProfessionConstraint"></a> `BlessedCommonProfessionConstraint`

- **Type:** Union
- **Cases:** <a href="#BlessedCommonProfessionConstraint'Tradition">BlessedCommonProfessionConstraint'Tradition</a>

---

### <a name="BlessedCommonProfessionConstraint'Tradition"></a> `BlessedCommonProfessionConstraint'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedCommonProfessionConstraint'Tradition/tag">See details</a>
`tradition` |  | <a href="#BlessedCommonProfessionConstraint'Tradition/tradition">See details</a>

#### <a name="BlessedCommonProfessionConstraint'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="BlessedCommonProfessionConstraint'Tradition/tradition"></a> `tradition`

- **Type:** <a href="#BlessedTraditionConstraint">BlessedTraditionConstraint</a>

---

### <a name="PlainCommonProfessions"></a> `PlainCommonProfessions`

- **Type:** <a href="#CommonProfessionConstraints">CommonProfessionConstraints</a>&lt;<a href="./_SimpleReferences.md#ProfessionReference">ProfessionReference</a>&gt;

---

### <a name="GroupedCommonProfessions"></a> `GroupedCommonProfessions`

Lists of professions by group.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`mundane?` |  | <a href="#GroupedCommonProfessions/mundane">See details</a>
`magic?` |  | <a href="#GroupedCommonProfessions/magic">See details</a>
`blessed?` |  | <a href="#GroupedCommonProfessions/blessed">See details</a>

#### <a name="GroupedCommonProfessions/mundane"></a> `mundane?`

- **Type:** <a href="#CommonProfessionConstraints">CommonProfessionConstraints</a>&lt;<a href="#MundaneCommonProfessionConstraint">MundaneCommonProfessionConstraint</a>&gt;

#### <a name="GroupedCommonProfessions/magic"></a> `magic?`

- **Type:** <a href="#CommonProfessionConstraints">CommonProfessionConstraints</a>&lt;<a href="#MagicCommonProfessionConstraint">MagicCommonProfessionConstraint</a>&gt;

#### <a name="GroupedCommonProfessions/blessed"></a> `blessed?`

- **Type:** <a href="#CommonProfessionConstraints">CommonProfessionConstraints</a>&lt;<a href="#BlessedCommonProfessionConstraint">BlessedCommonProfessionConstraint</a>&gt;

---

### <a name="CommonProfessions"></a> `CommonProfessions`

A list of professions that are typical for the culture, as well as
professions that are rarely practiced or encountered in the culture. The
list is either defined by group (as multiple lists) or plain (as a single
list).

- **Type:** Union
- **Cases:** <a href="#CommonProfessions'Plain">CommonProfessions'Plain</a> | <a href="#CommonProfessions'Grouped">CommonProfessions'Grouped</a>

---

### <a name="CommonProfessions'Plain"></a> `CommonProfessions'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions'Plain/tag">See details</a>
`plain` |  | <a href="#CommonProfessions'Plain/plain">See details</a>

#### <a name="CommonProfessions'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="CommonProfessions'Plain/plain"></a> `plain`

- **Type:** <a href="#PlainCommonProfessions">PlainCommonProfessions</a>

---

### <a name="CommonProfessions'Grouped"></a> `CommonProfessions'Grouped`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonProfessions'Grouped/tag">See details</a>
`grouped` |  | <a href="#CommonProfessions'Grouped/grouped">See details</a>

#### <a name="CommonProfessions'Grouped/tag"></a> `tag`

- **Constant:** `"Grouped"`

#### <a name="CommonProfessions'Grouped/grouped"></a> `grouped`

- **Type:** <a href="#GroupedCommonProfessions">GroupedCommonProfessions</a>

---

### <a name="CommonnessRatedSkill"></a> `CommonnessRatedSkill`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="CulturalPackageItem"></a> `CulturalPackageItem`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CulturalPackageItem/id">See details</a>
`points` | The skill points for the respective skill you get for buying the cultural package. | <a href="#CulturalPackageItem/points">See details</a>

#### <a name="CulturalPackageItem/id"></a> `id`

The skill's identifier.

- **Type:** <a href="./_Identifier.md#SkillIdentifier">SkillIdentifier</a>

#### <a name="CulturalPackageItem/points"></a> `points`

The skill points for the respective skill you get for buying the cultural
package.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `2`

---

### <a name="CultureTranslation"></a> `CultureTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the state. | <a href="#CultureTranslation/name">See details</a>
`area_knowledge` | The description of the area knowledge. | <a href="#CultureTranslation/area_knowledge">See details</a>
`common_advantages?` | The respective common advantages text from the source book. | <a href="#CultureTranslation/common_advantages">See details</a>
`common_disadvantages?` | The respective common disadvantages text from the source book. | <a href="#CultureTranslation/common_disadvantages">See details</a>
`uncommon_advantages?` | The respective uncommon advantages text from the source book. | <a href="#CultureTranslation/uncommon_advantages">See details</a>
`uncommon_disadvantages?` | The respective uncommon disadvantages text from the source book. | <a href="#CultureTranslation/uncommon_disadvantages">See details</a>
`common_names` | Structured description of common names. | <a href="#CultureTranslation/common_names">See details</a>
`errata?` |  | <a href="#CultureTranslation/errata">See details</a>

#### <a name="CultureTranslation/name"></a> `name`

The name of the state.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CultureTranslation/area_knowledge"></a> `area_knowledge`

The description of the area knowledge.

- **Type:** <a href="#AreaKnowledgeTranslation">AreaKnowledgeTranslation</a>

#### <a name="CultureTranslation/common_advantages"></a> `common_advantages?`

The respective common advantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CultureTranslation/common_disadvantages"></a> `common_disadvantages?`

The respective common disadvantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CultureTranslation/uncommon_advantages"></a> `uncommon_advantages?`

The respective uncommon advantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CultureTranslation/uncommon_disadvantages"></a> `uncommon_disadvantages?`

The respective uncommon disadvantages text from the source book.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CultureTranslation/common_names"></a> `common_names`

Structured description of common names.

- **Type:** <a href="#CommonNames">CommonNames</a>

#### <a name="CultureTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

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

A shorter version of the description, used in input fields and other UI
elements where the space might be to small to use the full description.

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`area` |  | <a href="#AreaKnowledgeExample/area">See details</a>

#### <a name="AreaKnowledgeExample/area"></a> `area`

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

First names can be gender-neutral, but they can also be for a specific
binary sex. They are sorted into groups.

- **Type:** List
- **Items:** <a href="#CommonNames/first_name_groups[]">CommonNames/first_name_groups[]</a>
- **Minimum Items:** `1`

#### <a name="CommonNames/last_name_groups"></a> `last_name_groups?`

Last names can be gender-neutral, like family names, but they can also be
for a specific binary sex. They are sorted into groups.

- **Type:** List
- **Items:** <a href="#CommonNames/last_name_groups[]">CommonNames/last_name_groups[]</a>
- **Minimum Items:** `1`

#### <a name="CommonNames/naming_rules"></a> `naming_rules?`

Special naming rules.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

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
`sex?` | The binary sex if the group is only for a certain binary sex. | <a href="#NameGroup/sex">See details</a>
`names` | The names from the group. | <a href="#NameGroup/names">See details</a>

#### <a name="NameGroup/label"></a> `label`

The group label.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="NameGroup/sex"></a> `sex?`

The binary sex if the group is only for a certain binary sex.

- **Type:** <a href="./_Sex.md#BinarySex">BinarySex</a>

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

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="Name/note"></a> `note?`

Additional information about the name, appended in parenthesis.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
