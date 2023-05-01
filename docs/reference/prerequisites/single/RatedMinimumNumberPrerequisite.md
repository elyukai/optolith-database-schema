# [TITLE MISSING]

## Definitions

### <a name="RatedMinimumNumberPrerequisite"></a> Rated Minimum Number Prerequisite (`RatedMinimumNumberPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The minimum number of skills that need to be on the defined minimum skill rating. | <a href="#RatedMinimumNumberPrerequisite/number">See details</a>
`value` | The minimum skill rating the defined minimum number of skills need to be on. | <a href="#RatedMinimumNumberPrerequisite/value">See details</a>
`targets` | The targets that contribute to satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisite/targets">See details</a>
`display_option?` |  | <a href="#RatedMinimumNumberPrerequisite/display_option">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/number"></a> `number`

The minimum number of skills that need to be on the defined minimum skill
rating.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatedMinimumNumberPrerequisite/value"></a> `value`

The minimum skill rating the defined minimum number of skills need to be
on.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatedMinimumNumberPrerequisite/targets"></a> `targets`

The targets that contribute to satisfying the prerequisite.

- **Type:** <a href="#RatedMinimumNumberPrerequisiteTarget">RatedMinimumNumberPrerequisiteTarget</a>

#### <a name="RatedMinimumNumberPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="RatedMinimumNumberPrerequisiteTarget"></a> `RatedMinimumNumberPrerequisiteTarget`

- **Type:** Union
- **Cases:** <a href="#RatedMinimumNumberPrerequisiteTarget'Skills">RatedMinimumNumberPrerequisiteTarget'Skills</a> | <a href="#RatedMinimumNumberPrerequisiteTarget'CombatTechniques">RatedMinimumNumberPrerequisiteTarget'CombatTechniques</a> | <a href="#RatedMinimumNumberPrerequisiteTarget'Spellworks">RatedMinimumNumberPrerequisiteTarget'Spellworks</a> | <a href="#RatedMinimumNumberPrerequisiteTarget'Liturgies">RatedMinimumNumberPrerequisiteTarget'Liturgies</a>

---

### <a name="RatedMinimumNumberPrerequisiteTarget'Skills"></a> `RatedMinimumNumberPrerequisiteTarget'Skills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'Skills/tag">See details</a>
`skills` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'Skills/skills">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteTarget'Skills/tag"></a> `tag`

- **Constant:** `"Skills"`

#### <a name="RatedMinimumNumberPrerequisiteTarget'Skills/skills"></a> `skills`

- **Type:** <a href="#RatedMinimumNumberPrerequisiteSkillsTarget">RatedMinimumNumberPrerequisiteSkillsTarget</a>

---

### <a name="RatedMinimumNumberPrerequisiteTarget'CombatTechniques"></a> `RatedMinimumNumberPrerequisiteTarget'CombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'CombatTechniques/tag">See details</a>
`combat_techniques` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'CombatTechniques/combat_techniques">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteTarget'CombatTechniques/tag"></a> `tag`

- **Constant:** `"CombatTechniques"`

#### <a name="RatedMinimumNumberPrerequisiteTarget'CombatTechniques/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#CombatTechniquesTarget">CombatTechniquesTarget</a>

---

### <a name="RatedMinimumNumberPrerequisiteTarget'Spellworks"></a> `RatedMinimumNumberPrerequisiteTarget'Spellworks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'Spellworks/tag">See details</a>
`spellworks` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'Spellworks/spellworks">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteTarget'Spellworks/tag"></a> `tag`

- **Constant:** `"Spellworks"`

#### <a name="RatedMinimumNumberPrerequisiteTarget'Spellworks/spellworks"></a> `spellworks`

- **Type:** <a href="../../_SimpleReferences.md#PropertyReference">PropertyReference</a>

---

### <a name="RatedMinimumNumberPrerequisiteTarget'Liturgies"></a> `RatedMinimumNumberPrerequisiteTarget'Liturgies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'Liturgies/tag">See details</a>
`liturgies` |  | <a href="#RatedMinimumNumberPrerequisiteTarget'Liturgies/liturgies">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteTarget'Liturgies/tag"></a> `tag`

- **Constant:** `"Liturgies"`

#### <a name="RatedMinimumNumberPrerequisiteTarget'Liturgies/liturgies"></a> `liturgies`

- **Type:** <a href="../../_SimpleReferences.md#AspectReference">AspectReference</a>

---

### <a name="RatedMinimumNumberPrerequisiteSkillsTarget"></a> `RatedMinimumNumberPrerequisiteSkillsTarget`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The skills that are taken into account for satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisiteSkillsTarget/list">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteSkillsTarget/list"></a> `list`

The skills that are taken into account for satisfying the prerequisite.

- **Type:** List
- **Items:** <a href="#RatedMinimumNumberPrerequisiteSkillsTarget/list[]">RatedMinimumNumberPrerequisiteSkillsTarget/list[]</a>
- **Minimum Items:** `2`
- **Unique Items:** Yes

---

### <a name="RatedMinimumNumberPrerequisiteSkillsTarget/list[]"></a> `RatedMinimumNumberPrerequisiteSkillsTarget/list[]`

- **Type:** <a href="../../_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="CombatTechniquesTarget"></a> `CombatTechniquesTarget`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`group` |  | <a href="#CombatTechniquesTarget/group">See details</a>

#### <a name="CombatTechniquesTarget/group"></a> `group`

- **Type:** <a href="#CombatTechniquesTargetGroup">CombatTechniquesTargetGroup</a>

---

### <a name="CombatTechniquesTargetGroup"></a> `CombatTechniquesTargetGroup`

- **Possible values:** `"All"`, `"Close"`, `"Ranged"`

---

### <a name="RatedMinimumNumberPrerequisiteSpellworksTarget"></a> `RatedMinimumNumberPrerequisiteSpellworksTarget`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`property` | The skills that are taken into account for satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisiteSpellworksTarget/property">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteSpellworksTarget/property"></a> `property`

The skills that are taken into account for satisfying the prerequisite.

- **Type:** <a href="../../_SimpleReferences.md#PropertyReference">PropertyReference</a>

---

### <a name="RatedMinimumNumberPrerequisiteLiturgiesTarget"></a> `RatedMinimumNumberPrerequisiteLiturgiesTarget`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`aspect` | The skills that are taken into account for satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisiteLiturgiesTarget/aspect">See details</a>

#### <a name="RatedMinimumNumberPrerequisiteLiturgiesTarget/aspect"></a> `aspect`

The skills that are taken into account for satisfying the prerequisite.

- **Type:** <a href="../../_SimpleReferences.md#AspectReference">AspectReference</a>
