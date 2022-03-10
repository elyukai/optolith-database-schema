# [TITLE MISSING]

## Definitions

### <a name="PactPrerequisite"></a> Pact Prerequisite (`PactPrerequisite`)

Requires a specific pact.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactPrerequisite/tag">See details</a>
`category_id` | The required pact category's identifier. | <a href="#PactPrerequisite/category_id">See details</a>
`domain_id?` | The required domains' identifiers. | <a href="#PactPrerequisite/domain_id">See details</a>
`level?` | The required pact level. | <a href="#PactPrerequisite/level">See details</a>
`display_option?` |  | <a href="#PactPrerequisite/display_option">See details</a>

#### <a name="PactPrerequisite/tag"></a> `tag`

- **Constant:** `"Pact"`

#### <a name="PactPrerequisite/category_id"></a> `category_id`

The required pact category's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactPrerequisite/domain_id"></a> `domain_id?`

The required domains' identifiers.

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

- **Type:** <a href="#DomainId">DomainId</a>

---

### <a name="DomainId"></a> `DomainId`

A domain's identifier.

- **Type:** Integer
- **Minimum:** `1`
