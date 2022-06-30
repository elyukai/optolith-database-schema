# Patron

## Definitions

### <a name="Patron"></a> Patron (`Patron`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The patron's identifier. An unique, increasing integer. | <a href="#Patron/id">See details</a>
`category` | The patron's category. | <a href="#Patron/category">See details</a>
`skills` | The patron-specific skills. | <a href="#Patron/skills">See details</a>
`culture` | The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures (difference). | <a href="#Patron/culture">See details</a>
`primary_patron_cultures?` | The list of cultures where patrons from this category can be the primary patron of. | <a href="#Patron/primary_patron_cultures">See details</a>
`powers?` | The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons. | <a href="#Patron/powers">See details</a>
`ae_cost?` | The patron-specific AE cost. Used by several animist forces for animal patrons. | <a href="#Patron/ae_cost">See details</a>
`improvement_cost?` | The patron-specific improvement cost. Used by several animist forces for animal patrons. | <a href="#Patron/improvement_cost">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Patron/translations">See details</a>

#### <a name="Patron/id"></a> `id`

The patron's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Patron/category"></a> `category`

The patron's category.

- **Type:** <a href="#Patron/category">Object</a>

#### <a name="Patron/skills"></a> `skills`

The patron-specific skills.

- **Type:** Tuple
- **Items:** [<a href="Patron/skills[0]">Patron/skills[0]</a>, <a href="Patron/skills[1]">Patron/skills[1]</a>, <a href="Patron/skills[2]">Patron/skills[2]</a>]

#### <a name="Patron/culture"></a> `culture`

The patron is only available to a certain set of cultures. It may be
available to all, it may be available to only specific ones (intersection)
and it may be available to all except specific ones to the listed cultures
(difference).

- **Type:** Union
- **Cases:** <a href="#Patron/culture'All">Patron/culture'All</a> | <a href="#Patron/culture'Intersection">Patron/culture'Intersection</a> | <a href="#Patron/culture'Difference">Patron/culture'Difference</a>

#### <a name="Patron/primary_patron_cultures"></a> `primary_patron_cultures?`

The list of cultures where patrons from this category can be the primary
patron of.

- **Type:** List
- **Items:** <a href="#Patron/primary_patron_cultures[]">Patron/primary_patron_cultures[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="Patron/powers"></a> `powers?`

The patron-specific powers. Used by animist power Animal Powers I–III and
should only be present on animal patrons.

- **Type:** Tuple
- **Items:** [<a href="Patron/powers[0]">Patron/powers[0]</a>, <a href="Patron/powers[1]">Patron/powers[1]</a>, <a href="Patron/powers[2]">Patron/powers[2]</a>]

#### <a name="Patron/ae_cost"></a> `ae_cost?`

The patron-specific AE cost. Used by several animist forces for animal
patrons.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

#### <a name="Patron/improvement_cost"></a> `improvement_cost?`

The patron-specific improvement cost. Used by several animist forces for
animal patrons.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Patron/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Patron/translations[key]">Patron/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Patron/category"></a> `Patron/category`

The patron's category.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The patron's category identifier. | <a href="#Patron/category/id">See details</a>

#### <a name="Patron/category/id"></a> `id`

The patron's category identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Patron/skills[0]"></a> `Patron/skills[0]`

- **Type:** <a href="#SkillReference">SkillReference</a>

---

### <a name="Patron/skills[1]"></a> `Patron/skills[1]`

- **Type:** <a href="#SkillReference">SkillReference</a>

---

### <a name="Patron/skills[2]"></a> `Patron/skills[2]`

- **Type:** <a href="#SkillReference">SkillReference</a>

---

### <a name="Patron/culture'All"></a> `Patron/culture'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Patron/culture'All/tag">See details</a>

#### <a name="Patron/culture'All/tag"></a> `tag`

- **Constant:** `"All"`

---

### <a name="Patron/culture'Intersection"></a> `Patron/culture'Intersection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Patron/culture'Intersection/tag">See details</a>
`list` |  | <a href="#Patron/culture'Intersection/list">See details</a>

#### <a name="Patron/culture'Intersection/tag"></a> `tag`

- **Constant:** `"Intersection"`

#### <a name="Patron/culture'Intersection/list"></a> `list`

- **Type:** List
- **Items:** <a href="#Patron/culture'Intersection/list[]">Patron/culture'Intersection/list[]</a>

---

### <a name="Patron/culture'Intersection/list[]"></a> `Patron/culture'Intersection/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The culture's identifier. | <a href="#Patron/culture'Intersection/list[]/id">See details</a>

#### <a name="Patron/culture'Intersection/list[]/id"></a> `id`

The culture's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Patron/culture'Difference"></a> `Patron/culture'Difference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Patron/culture'Difference/tag">See details</a>
`list` |  | <a href="#Patron/culture'Difference/list">See details</a>

#### <a name="Patron/culture'Difference/tag"></a> `tag`

- **Constant:** `"Difference"`

#### <a name="Patron/culture'Difference/list"></a> `list`

- **Type:** List
- **Items:** <a href="#Patron/culture'Difference/list[]">Patron/culture'Difference/list[]</a>

---

### <a name="Patron/culture'Difference/list[]"></a> `Patron/culture'Difference/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The culture's identifier. | <a href="#Patron/culture'Difference/list[]/id">See details</a>

#### <a name="Patron/culture'Difference/list[]/id"></a> `id`

The culture's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Patron/primary_patron_cultures[]"></a> `Patron/primary_patron_cultures[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The culture's identifier. | <a href="#Patron/primary_patron_cultures[]/id">See details</a>

#### <a name="Patron/primary_patron_cultures[]/id"></a> `id`

The culture's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Patron/powers[0]"></a> `Patron/powers[0]`

- **Type:** <a href="#AnimalPowersLevel1">AnimalPowersLevel1</a>

---

### <a name="Patron/powers[1]"></a> `Patron/powers[1]`

- **Type:** <a href="#AnimalPowersLevel2">AnimalPowersLevel2</a>

---

### <a name="Patron/powers[2]"></a> `Patron/powers[2]`

- **Type:** <a href="#AnimalPowersLevel3">AnimalPowersLevel3</a>

---

### <a name="Patron/translations[key]"></a> `Patron/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the patron. | <a href="#Patron/translations[key]/name">See details</a>

#### <a name="Patron/translations[key]/name"></a> `name`

The name of the patron.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="SkillReference"></a> `SkillReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#SkillReference/id">See details</a>

#### <a name="SkillReference/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowerLevel1"></a> `AnimalPowerLevel1`

- **Type:** Union
- **Cases:** <a href="#AnimalPowerLevel1'Advantage">AnimalPowerLevel1'Advantage</a> | <a href="#AnimalPowerLevel1'Skill">AnimalPowerLevel1'Skill</a>

---

### <a name="AnimalPowerLevel1'Advantage"></a> `AnimalPowerLevel1'Advantage`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel1'Advantage/tag">See details</a>
`id` | The advantage's identifier. | <a href="#AnimalPowerLevel1'Advantage/id">See details</a>
`level?` | It grants a higher level of the advantage. | <a href="#AnimalPowerLevel1'Advantage/level">See details</a>
`option?` | It grants a specific general option of the advantage. | <a href="#AnimalPowerLevel1'Advantage/option">See details</a>

#### <a name="AnimalPowerLevel1'Advantage/tag"></a> `tag`

- **Constant:** `"Advantage"`

#### <a name="AnimalPowerLevel1'Advantage/id"></a> `id`

The advantage's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalPowerLevel1'Advantage/level"></a> `level?`

It grants a higher level of the advantage.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="AnimalPowerLevel1'Advantage/option"></a> `option?`

It grants a specific general option of the advantage.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowerLevel1'Skill"></a> `AnimalPowerLevel1'Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel1'Skill/tag">See details</a>
`id` | The skill's identifier. | <a href="#AnimalPowerLevel1'Skill/id">See details</a>
`points` | The points that gets added to the skill's rating. | <a href="#AnimalPowerLevel1'Skill/points">See details</a>

#### <a name="AnimalPowerLevel1'Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="AnimalPowerLevel1'Skill/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalPowerLevel1'Skill/points"></a> `points`

The points that gets added to the skill's rating.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowersLevel1"></a> `AnimalPowersLevel1`

- **Type:** List
- **Items:** <a href="#AnimalPowersLevel1[]">AnimalPowersLevel1[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalPowersLevel1[]"></a> `AnimalPowersLevel1[]`

- **Type:** <a href="#AnimalPowerLevel1">AnimalPowerLevel1</a>

---

### <a name="AnimalPowerLevel2"></a> `AnimalPowerLevel2`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/tag">See details</a>
`id` | The combat value. | <a href="#AnimalPowerLevel2/id">See details</a>
`value` | The value that gets added to the combat value. | <a href="#AnimalPowerLevel2/value">See details</a>

#### <a name="AnimalPowerLevel2/tag"></a> `tag`

- **Constant:** `"Combat"`

#### <a name="AnimalPowerLevel2/id"></a> `id`

The combat value.

- **Type:** Union
- **Cases:** <a href="#AnimalPowerLevel2/id'Attack">AnimalPowerLevel2/id'Attack</a> | <a href="#AnimalPowerLevel2/id'Parry">AnimalPowerLevel2/id'Parry</a> | <a href="#AnimalPowerLevel2/id'RangedCombat">AnimalPowerLevel2/id'RangedCombat</a> | <a href="#AnimalPowerLevel2/id'Dodge">AnimalPowerLevel2/id'Dodge</a> | <a href="#AnimalPowerLevel2/id'DamagePoints">AnimalPowerLevel2/id'DamagePoints</a> | <a href="#AnimalPowerLevel2/id'Protection">AnimalPowerLevel2/id'Protection</a>

#### <a name="AnimalPowerLevel2/value"></a> `value`

The value that gets added to the combat value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowerLevel2/id'Attack"></a> `AnimalPowerLevel2/id'Attack`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/id'Attack/tag">See details</a>

#### <a name="AnimalPowerLevel2/id'Attack/tag"></a> `tag`

- **Constant:** `"Attack"`

---

### <a name="AnimalPowerLevel2/id'Parry"></a> `AnimalPowerLevel2/id'Parry`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/id'Parry/tag">See details</a>

#### <a name="AnimalPowerLevel2/id'Parry/tag"></a> `tag`

- **Constant:** `"Parry"`

---

### <a name="AnimalPowerLevel2/id'RangedCombat"></a> `AnimalPowerLevel2/id'RangedCombat`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/id'RangedCombat/tag">See details</a>

#### <a name="AnimalPowerLevel2/id'RangedCombat/tag"></a> `tag`

- **Constant:** `"RangedCombat"`

---

### <a name="AnimalPowerLevel2/id'Dodge"></a> `AnimalPowerLevel2/id'Dodge`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/id'Dodge/tag">See details</a>

#### <a name="AnimalPowerLevel2/id'Dodge/tag"></a> `tag`

- **Constant:** `"Dodge"`

---

### <a name="AnimalPowerLevel2/id'DamagePoints"></a> `AnimalPowerLevel2/id'DamagePoints`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/id'DamagePoints/tag">See details</a>

#### <a name="AnimalPowerLevel2/id'DamagePoints/tag"></a> `tag`

- **Constant:** `"DamagePoints"`

---

### <a name="AnimalPowerLevel2/id'Protection"></a> `AnimalPowerLevel2/id'Protection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2/id'Protection/tag">See details</a>

#### <a name="AnimalPowerLevel2/id'Protection/tag"></a> `tag`

- **Constant:** `"Protection"`

---

### <a name="AnimalPowersLevel2"></a> `AnimalPowersLevel2`

- **Type:** List
- **Items:** <a href="#AnimalPowersLevel2[]">AnimalPowersLevel2[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalPowersLevel2[]"></a> `AnimalPowersLevel2[]`

- **Type:** <a href="#AnimalPowerLevel2">AnimalPowerLevel2</a>

---

### <a name="AnimalPowerLevel3"></a> `AnimalPowerLevel3`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel3/tag">See details</a>
`id` | The attribute's identifier. | <a href="#AnimalPowerLevel3/id">See details</a>
`value` | The value that gets added to the attribute. | <a href="#AnimalPowerLevel3/value">See details</a>

#### <a name="AnimalPowerLevel3/tag"></a> `tag`

- **Constant:** `"Attribute"`

#### <a name="AnimalPowerLevel3/id"></a> `id`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalPowerLevel3/value"></a> `value`

The value that gets added to the attribute.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowersLevel3"></a> `AnimalPowersLevel3`

- **Type:** List
- **Items:** <a href="#AnimalPowersLevel3[]">AnimalPowersLevel3[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalPowersLevel3[]"></a> `AnimalPowersLevel3[]`

- **Type:** <a href="#AnimalPowerLevel3">AnimalPowerLevel3</a>
