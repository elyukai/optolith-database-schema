# [TITLE MISSING]

## Definitions

### <a name="RatedSumPrerequisite"></a> Rated Sum Prerequisite (`RatedSumPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`sum` | The minimum required sum of the targets’ ratings. | <a href="#RatedSumPrerequisite/sum">See details</a>
`targets` | The targets that are included in calculating the sum. | <a href="#RatedSumPrerequisite/targets">See details</a>
`display_option?` |  | <a href="#RatedSumPrerequisite/display_option">See details</a>

#### <a name="RatedSumPrerequisite/sum"></a> `sum`

The minimum required sum of the targets’ ratings.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatedSumPrerequisite/targets"></a> `targets`

The targets that are included in calculating the sum.

- **Type:** List
- **Items:** <a href="#RatedSumPrerequisite/targets[]">RatedSumPrerequisite/targets[]</a>
- **Minimum Items:** `2`

#### <a name="RatedSumPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="RatedSumPrerequisite/targets[]"></a> `RatedSumPrerequisite/targets[]`

- **Type:** <a href="../../_Identifier.md#SkillIdentifier">SkillIdentifier</a>
