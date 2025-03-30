# [TITLE MISSING]

## Definitions

### <a name="ExternalEnhancementPrerequisite"></a> External Enhancement Prerequisite (`ExternalEnhancementPrerequisite`)

Requires a specific enhancement from a skill. This should **not** be used for enhancements themselves; they can only require enhancements from the same skill they enhance.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`skill` | The required skill. | <a href="#ExternalEnhancementPrerequisite/skill">See details</a>
`enhancement` | The required enhancement. | <a href="#ExternalEnhancementPrerequisite/enhancement">See details</a>
`display_option?` |  | <a href="#ExternalEnhancementPrerequisite/display_option">See details</a>

#### <a name="ExternalEnhancementPrerequisite/skill"></a> `skill`

The required skill.

- **Type:** <a href="#SkillWithEnhancementsReference">SkillWithEnhancementsReference</a>

#### <a name="ExternalEnhancementPrerequisite/enhancement"></a> `enhancement`

The required enhancement.

- **Type:** <a href="#EnhancementsReference">EnhancementsReference</a>

#### <a name="ExternalEnhancementPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillWithEnhancementsReference"></a> `SkillWithEnhancementsReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#SkillWithEnhancementsReference/id">See details</a>

#### <a name="SkillWithEnhancementsReference/id"></a> `id`

The skill's identifier.

- **Type:** <a href="../../_IdentifierGroup.md#SkillWithEnhancementsIdentifier">SkillWithEnhancementsIdentifier</a>

---

### <a name="EnhancementsReference"></a> `EnhancementsReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The enhancement's identifier. | <a href="#EnhancementsReference/id">See details</a>

#### <a name="EnhancementsReference/id"></a> `id`

The enhancement's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="InternalEnhancementPrerequisite"></a> Internal Enhancement Prerequisite (`InternalEnhancementPrerequisite`)

Requires a specific enhancement from a skill. This can only be used by an enhancement to require another enhancement from the same skill.

- **Type:** <a href="#EnhancementsReference">EnhancementsReference</a>
