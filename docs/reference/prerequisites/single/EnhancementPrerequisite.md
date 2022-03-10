# [TITLE MISSING]

## Definitions

### <a name="ExternalEnhancementPrerequisite"></a> External Enhancement Prerequisite (`ExternalEnhancementPrerequisite`)

Requires a specific enhancement from a skill. This should **not** be used
for enhancements themselves; they can only require enhancements from the same
skill they enhance.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExternalEnhancementPrerequisite/tag">See details</a>
`skill_id` | The required skill's identifier. | <a href="#ExternalEnhancementPrerequisite/skill_id">See details</a>
`enhancement_id` | The required enhancement's identifier. | <a href="#ExternalEnhancementPrerequisite/enhancement_id">See details</a>
`display_option?` |  | <a href="#ExternalEnhancementPrerequisite/display_option">See details</a>

#### <a name="ExternalEnhancementPrerequisite/tag"></a> `tag`

- **Constant:** `"Enhancement"`

#### <a name="ExternalEnhancementPrerequisite/skill_id"></a> `skill_id`

The required skill's identifier.

- **Type:** <a href="../../_Identifier.md#SkillWithEnhancementsIdentifier">SkillWithEnhancementsIdentifier</a>

#### <a name="ExternalEnhancementPrerequisite/enhancement_id"></a> `enhancement_id`

The required enhancement's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExternalEnhancementPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="InternalEnhancementPrerequisite"></a> Internal Enhancement Prerequisite (`InternalEnhancementPrerequisite`)

Requires a specific enhancement from a skill. This can only be used by an
enhancement to require another enhancement from the same skill.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InternalEnhancementPrerequisite/tag">See details</a>
`id` | The enhancement's identifier. | <a href="#InternalEnhancementPrerequisite/id">See details</a>

#### <a name="InternalEnhancementPrerequisite/tag"></a> `tag`

- **Constant:** `"Enhancement"`

#### <a name="InternalEnhancementPrerequisite/id"></a> `id`

The enhancement's identifier.

- **Type:** Integer
- **Minimum:** `1`
