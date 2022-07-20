# [TITLE MISSING]

## Definitions

### <a name="SkillCheck"></a> Skill Check (`SkillCheck`)

The attributes' identifiers of the skill check.

- **Type:** Tuple
- **Items:** [<a href="SkillCheck[0]">SkillCheck[0]</a>, <a href="SkillCheck[1]">SkillCheck[1]</a>, <a href="SkillCheck[2]">SkillCheck[2]</a>]

---

### <a name="SkillCheck[0]"></a> `SkillCheck[0]`

- **Type:** <a href="./_SimpleReferences.md#AttributeReference">AttributeReference</a>

---

### <a name="SkillCheck[1]"></a> `SkillCheck[1]`

- **Type:** <a href="./_SimpleReferences.md#AttributeReference">AttributeReference</a>

---

### <a name="SkillCheck[2]"></a> `SkillCheck[2]`

- **Type:** <a href="./_SimpleReferences.md#AttributeReference">AttributeReference</a>

---

### <a name="SkillCheckPenalty"></a> Skill Check Penalty (`SkillCheckPenalty`)

A specific value that represents a penalty for the associated skill check.

- **Type:** Union
- **Cases:** <a href="#SkillCheckPenalty'SPI">SkillCheckPenalty'SPI</a> | <a href="#SkillCheckPenalty'SPI/2">SkillCheckPenalty'SPI/2</a> | <a href="#SkillCheckPenalty'TOU">SkillCheckPenalty'TOU</a> | <a href="#SkillCheckPenalty'SPI/TOU">SkillCheckPenalty'SPI/TOU</a>

---

### <a name="SkillCheckPenalty'SPI"></a> `SkillCheckPenalty'SPI`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillCheckPenalty'SPI/tag">See details</a>

#### <a name="SkillCheckPenalty'SPI/tag"></a> `tag`

- **Constant:** `"SPI"`

---

### <a name="SkillCheckPenalty'SPI/2"></a> `SkillCheckPenalty'SPI/2`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillCheckPenalty'SPI/2/tag">See details</a>

#### <a name="SkillCheckPenalty'SPI/2/tag"></a> `tag`

- **Constant:** `"SPI/2"`

---

### <a name="SkillCheckPenalty'TOU"></a> `SkillCheckPenalty'TOU`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillCheckPenalty'TOU/tag">See details</a>

#### <a name="SkillCheckPenalty'TOU/tag"></a> `tag`

- **Constant:** `"TOU"`

---

### <a name="SkillCheckPenalty'SPI/TOU"></a> `SkillCheckPenalty'SPI/TOU`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillCheckPenalty'SPI/TOU/tag">See details</a>

#### <a name="SkillCheckPenalty'SPI/TOU/tag"></a> `tag`

- **Constant:** `"SPI/TOU"`
