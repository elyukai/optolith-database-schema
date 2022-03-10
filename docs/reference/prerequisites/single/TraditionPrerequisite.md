# [TITLE MISSING]

## Definitions

### <a name="BlessedTraditionPrerequisite"></a> Blessed Tradition Prerequisite (`BlessedTraditionPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionPrerequisite/tag">See details</a>
`restriction?` | The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic. | <a href="#BlessedTraditionPrerequisite/restriction">See details</a>
`display_option?` |  | <a href="#BlessedTraditionPrerequisite/display_option">See details</a>

#### <a name="BlessedTraditionPrerequisite/tag"></a> `tag`

- **Constant:** `"BlessedTradition"`

#### <a name="BlessedTraditionPrerequisite/restriction"></a> `restriction?`

The blessed tradition prerequisite may only be satified if the blessed
tradition is either church or shamanistic.

- **Type:** Union
- **Cases:** <a href="#BlessedTraditionPrerequisite/restriction'Church">BlessedTraditionPrerequisite/restriction'Church</a> | <a href="#BlessedTraditionPrerequisite/restriction'Shamanistic">BlessedTraditionPrerequisite/restriction'Shamanistic</a>

#### <a name="BlessedTraditionPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="BlessedTraditionPrerequisite/restriction'Church"></a> `BlessedTraditionPrerequisite/restriction'Church`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionPrerequisite/restriction'Church/tag">See details</a>

#### <a name="BlessedTraditionPrerequisite/restriction'Church/tag"></a> `tag`

- **Constant:** `"Church"`

---

### <a name="BlessedTraditionPrerequisite/restriction'Shamanistic"></a> `BlessedTraditionPrerequisite/restriction'Shamanistic`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionPrerequisite/restriction'Shamanistic/tag">See details</a>

#### <a name="BlessedTraditionPrerequisite/restriction'Shamanistic/tag"></a> `tag`

- **Constant:** `"Shamanistic"`

---

### <a name="MagicalTraditionPrerequisite"></a> Magical Tradition Prerequisite (`MagicalTraditionPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalTraditionPrerequisite/tag">See details</a>
`restriction?` | The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars. | <a href="#MagicalTraditionPrerequisite/restriction">See details</a>
`display_option?` |  | <a href="#MagicalTraditionPrerequisite/display_option">See details</a>

#### <a name="MagicalTraditionPrerequisite/tag"></a> `tag`

- **Constant:** `"MagicalTradition"`

#### <a name="MagicalTraditionPrerequisite/restriction"></a> `restriction?`

The magical tradition prerequisite may only be satified if the magical
tradition can learn rituals or can bind familiars.

- **Type:** Union
- **Cases:** <a href="#MagicalTraditionPrerequisite/restriction'CanLearnRituals">MagicalTraditionPrerequisite/restriction'CanLearnRituals</a> | <a href="#MagicalTraditionPrerequisite/restriction'CanBindFamiliars">MagicalTraditionPrerequisite/restriction'CanBindFamiliars</a>

#### <a name="MagicalTraditionPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicalTraditionPrerequisite/restriction'CanLearnRituals"></a> `MagicalTraditionPrerequisite/restriction'CanLearnRituals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalTraditionPrerequisite/restriction'CanLearnRituals/tag">See details</a>

#### <a name="MagicalTraditionPrerequisite/restriction'CanLearnRituals/tag"></a> `tag`

- **Constant:** `"CanLearnRituals"`

---

### <a name="MagicalTraditionPrerequisite/restriction'CanBindFamiliars"></a> `MagicalTraditionPrerequisite/restriction'CanBindFamiliars`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalTraditionPrerequisite/restriction'CanBindFamiliars/tag">See details</a>

#### <a name="MagicalTraditionPrerequisite/restriction'CanBindFamiliars/tag"></a> `tag`

- **Constant:** `"CanBindFamiliars"`
