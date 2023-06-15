# [TITLE MISSING]

## Definitions

### <a name="MusicalSkillReference"></a> `MusicalSkillReference`

A reference to a skill used for performing melodies.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#MusicalSkillReference/id">See details</a>

#### <a name="MusicalSkillReference/id"></a> `id`

The skill's identifier.

- **Type:** <a href="#MusicalSkillReference/id">Object</a>

---

### <a name="MusicalSkillReference/id"></a> `MusicalSkillReference/id`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MusicalSkillReference/id/tag">See details</a>
`skill` | The skill’s identifier. | <a href="#MusicalSkillReference/id/skill">See details</a>

#### <a name="MusicalSkillReference/id/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="MusicalSkillReference/id/skill"></a> `skill`

The skill’s identifier.

- **Type:** <a href="#SkillIdentifierValue">SkillIdentifierValue</a>

---

### <a name="SkillIdentifierValue"></a> `SkillIdentifierValue`

- **Type:** Union
- **Cases:** <a href="#SkillIdentifierValue'0">SkillIdentifierValue'0</a> | <a href="#SkillIdentifierValue'1">SkillIdentifierValue'1</a>

---

### <a name="SkillIdentifierValue'0"></a> `SkillIdentifierValue'0`

- **Constant:** `9`

---

### <a name="SkillIdentifierValue'1"></a> `SkillIdentifierValue'1`

- **Constant:** `56`
