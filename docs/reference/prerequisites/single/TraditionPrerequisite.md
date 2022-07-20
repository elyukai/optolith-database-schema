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
- **Cases:** <a href="#BlessedTraditionPrerequisiteRestriction'Church">BlessedTraditionPrerequisiteRestriction'Church</a> | <a href="#BlessedTraditionPrerequisiteRestriction'Shamanistic">BlessedTraditionPrerequisiteRestriction'Shamanistic</a>

---

### <a name="BlessedTraditionPrerequisiteRestriction'Church"></a> `BlessedTraditionPrerequisiteRestriction'Church`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionPrerequisiteRestriction'Church/tag">See details</a>

#### <a name="BlessedTraditionPrerequisiteRestriction'Church/tag"></a> `tag`

- **Constant:** `"Church"`

---

### <a name="BlessedTraditionPrerequisiteRestriction'Shamanistic"></a> `BlessedTraditionPrerequisiteRestriction'Shamanistic`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionPrerequisiteRestriction'Shamanistic/tag">See details</a>

#### <a name="BlessedTraditionPrerequisiteRestriction'Shamanistic/tag"></a> `tag`

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
- **Cases:** <a href="#MagicalTraditionPrerequisiteRestriction'CanLearnRituals">MagicalTraditionPrerequisiteRestriction'CanLearnRituals</a> | <a href="#MagicalTraditionPrerequisiteRestriction'CanBindFamiliars">MagicalTraditionPrerequisiteRestriction'CanBindFamiliars</a>

---

### <a name="MagicalTraditionPrerequisiteRestriction'CanLearnRituals"></a> `MagicalTraditionPrerequisiteRestriction'CanLearnRituals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalTraditionPrerequisiteRestriction'CanLearnRituals/tag">See details</a>

#### <a name="MagicalTraditionPrerequisiteRestriction'CanLearnRituals/tag"></a> `tag`

- **Constant:** `"CanLearnRituals"`

---

### <a name="MagicalTraditionPrerequisiteRestriction'CanBindFamiliars"></a> `MagicalTraditionPrerequisiteRestriction'CanBindFamiliars`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalTraditionPrerequisiteRestriction'CanBindFamiliars/tag">See details</a>

#### <a name="MagicalTraditionPrerequisiteRestriction'CanBindFamiliars/tag"></a> `tag`

- **Constant:** `"CanBindFamiliars"`
