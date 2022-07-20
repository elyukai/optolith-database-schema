# [TITLE MISSING]

## Definitions

### <a name="PactPrerequisite"></a> Pact Prerequisite (`PactPrerequisite`)

Requires a specific pact.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`category` | The required pact category. | <a href="#PactPrerequisite/category">See details</a>
`domain_id?` | The required domain(s). | <a href="#PactPrerequisite/domain_id">See details</a>
`level?` | The required pact level. | <a href="#PactPrerequisite/level">See details</a>
`display_option?` |  | <a href="#PactPrerequisite/display_option">See details</a>

#### <a name="PactPrerequisite/category"></a> `category`

The required pact category.

- **Type:** <a href="../../_SimpleReferences.md#PactCategoryReference">PactCategoryReference</a>

#### <a name="PactPrerequisite/domain_id"></a> `domain_id?`

The required domain(s).

- **Type:** List
- **Items:** <a href="#PactPrerequisite/domain_id[]">PactPrerequisite/domain_id[]</a>

#### <a name="PactPrerequisite/level"></a> `level?`

The required pact level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="PactPrerequisite/domain_id[]"></a> `PactPrerequisite/domain_id[]`

- **Type:** <a href="../../_SimpleReferences.md#PactDomainReference">PactDomainReference</a>
