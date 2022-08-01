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

- **Possible values:** `"Church"`, `"Shamanistic"`

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

- **Possible values:** `"CanLearnRituals"`, `"CanBindFamiliars"`
