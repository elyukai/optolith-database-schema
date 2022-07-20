# [TITLE MISSING]

## Definitions

### <a name="SkillTradition"></a> `SkillTradition`

- **Type:** Union
- **Cases:** <a href="#SkillTradition'GeneralAspect">SkillTradition'GeneralAspect</a> | <a href="#SkillTradition'Tradition">SkillTradition'Tradition</a>

---

### <a name="SkillTradition'GeneralAspect"></a> `SkillTradition'GeneralAspect`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillTradition'GeneralAspect/tag">See details</a>
`general_aspect` |  | <a href="#SkillTradition'GeneralAspect/general_aspect">See details</a>

#### <a name="SkillTradition'GeneralAspect/tag"></a> `tag`

- **Constant:** `"GeneralAspect"`

#### <a name="SkillTradition'GeneralAspect/general_aspect"></a> `general_aspect`

- **Type:** <a href="./_SimpleReferences.md#AspectReference">AspectReference</a>

---

### <a name="SkillTradition'Tradition"></a> `SkillTradition'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillTradition'Tradition/tag">See details</a>
`tradition` |  | <a href="#SkillTradition'Tradition/tradition">See details</a>

#### <a name="SkillTradition'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="SkillTradition'Tradition/tradition"></a> `tradition`

- **Type:** <a href="#SkillTraditionWithAspects">SkillTraditionWithAspects</a>

---

### <a name="SkillTraditionWithAspects"></a> `SkillTraditionWithAspects`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tradition` | The blessed tradition. | <a href="#SkillTraditionWithAspects/tradition">See details</a>
`aspects?` | The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified. | <a href="#SkillTraditionWithAspects/aspects">See details</a>

#### <a name="SkillTraditionWithAspects/tradition"></a> `tradition`

The blessed tradition.

- **Type:** <a href="./_SimpleReferences.md#BlessedTraditionReference">BlessedTraditionReference</a>

#### <a name="SkillTraditionWithAspects/aspects"></a> `aspects?`

The aspect(s) from the tradition the ceremony belongs to. Note that not
all traditions have aspects. Traditions with aspects must have at least one
aspect specified.

- **Type:** List
- **Items:** <a href="#SkillTraditionWithAspects/aspects[]">SkillTraditionWithAspects/aspects[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`

---

### <a name="SkillTraditionWithAspects/aspects[]"></a> `SkillTraditionWithAspects/aspects[]`

- **Type:** <a href="./_SimpleReferences.md#AspectReference">AspectReference</a>
