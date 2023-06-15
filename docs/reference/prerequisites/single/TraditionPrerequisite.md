# [TITLE MISSING]

## Definitions

### <a name="BlessedTraditionPrerequisite"></a> Blessed Tradition Prerequisite (`BlessedTraditionPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`restriction?` | The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic. | <a href="#BlessedTraditionPrerequisite/restriction">See details</a>
`display_option?` |  | <a href="#BlessedTraditionPrerequisite/display_option">See details</a>

#### <a name="BlessedTraditionPrerequisite/restriction"></a> `restriction?`

The blessed tradition prerequisite may only be satified if the blessed
tradition is either church or shamanistic.

- **Type:** <a href="#BlessedTraditionPrerequisiteRestriction">BlessedTraditionPrerequisiteRestriction</a>

#### <a name="BlessedTraditionPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="BlessedTraditionPrerequisiteRestriction"></a> `BlessedTraditionPrerequisiteRestriction`

The blessed tradition prerequisite may only be satified if the blessed
tradition is either church or shamanistic.

- **Type:** Union
- **Cases:** <a href="#BlessedTraditionPrerequisiteRestriction'0">BlessedTraditionPrerequisiteRestriction'0</a> | <a href="#BlessedTraditionPrerequisiteRestriction'1">BlessedTraditionPrerequisiteRestriction'1</a>

---

### <a name="BlessedTraditionPrerequisiteRestriction'0"></a> `BlessedTraditionPrerequisiteRestriction'0`

- **Constant:** `"Church"`

---

### <a name="BlessedTraditionPrerequisiteRestriction'1"></a> `BlessedTraditionPrerequisiteRestriction'1`

- **Constant:** `"Shamanistic"`

---

### <a name="MagicalTraditionPrerequisite"></a> Magical Tradition Prerequisite (`MagicalTraditionPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`restriction?` | The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars. | <a href="#MagicalTraditionPrerequisite/restriction">See details</a>
`display_option?` |  | <a href="#MagicalTraditionPrerequisite/display_option">See details</a>

#### <a name="MagicalTraditionPrerequisite/restriction"></a> `restriction?`

The magical tradition prerequisite may only be satified if the magical
tradition can learn rituals or can bind familiars.

- **Type:** <a href="#MagicalTraditionPrerequisiteRestriction">MagicalTraditionPrerequisiteRestriction</a>

#### <a name="MagicalTraditionPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicalTraditionPrerequisiteRestriction"></a> `MagicalTraditionPrerequisiteRestriction`

The magical tradition prerequisite may only be satified if the magical
tradition can learn rituals or can bind familiars.

- **Type:** Union
- **Cases:** <a href="#MagicalTraditionPrerequisiteRestriction'0">MagicalTraditionPrerequisiteRestriction'0</a> | <a href="#MagicalTraditionPrerequisiteRestriction'1">MagicalTraditionPrerequisiteRestriction'1</a>

---

### <a name="MagicalTraditionPrerequisiteRestriction'0"></a> `MagicalTraditionPrerequisiteRestriction'0`

- **Constant:** `"CanLearnRituals"`

---

### <a name="MagicalTraditionPrerequisiteRestriction'1"></a> `MagicalTraditionPrerequisiteRestriction'1`

- **Constant:** `"CanBindFamiliars"`
