# Prerequisites

## Definitions

### <a name="Prerequisite/Single/DisplayOption/T"></a> Display Option (`Prerequisite/Single/DisplayOption/T`)

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Single/DisplayOption/T'Hide">Prerequisite/Single/DisplayOption/T'Hide</a> | <a href="#Prerequisite/Single/DisplayOption/T'ReplaceWith">Prerequisite/Single/DisplayOption/T'ReplaceWith</a>

---

### <a name="Prerequisite/Single/DisplayOption/T'Hide"></a> `Prerequisite/Single/DisplayOption/T'Hide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/DisplayOption/T'Hide/tag">See details</a>

#### <a name="Prerequisite/Single/DisplayOption/T'Hide/tag"></a> `tag`

- **Constant:** `"Hide"`

---

### <a name="Prerequisite/Single/DisplayOption/T'ReplaceWith"></a> `Prerequisite/Single/DisplayOption/T'ReplaceWith`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/DisplayOption/T'ReplaceWith/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Prerequisite/Single/DisplayOption/T'ReplaceWith/translations">See details</a>

#### <a name="Prerequisite/Single/DisplayOption/T'ReplaceWith/tag"></a> `tag`

- **Constant:** `"ReplaceWith"`

#### <a name="Prerequisite/Single/DisplayOption/T'ReplaceWith/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Prerequisite/Single/DisplayOption/T'ReplaceWith/translations[key]">Prerequisite/Single/DisplayOption/T'ReplaceWith/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Prerequisite/Single/DisplayOption/T'ReplaceWith/translations[key]"></a> `Prerequisite/Single/DisplayOption/T'ReplaceWith/translations[key]`

- **Type:** String

---

### <a name="Prerequisite/Single/Sex/T"></a> Sex Prerequisite (`Prerequisite/Single/Sex/T`)

Requires a specific sex.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Sex/T/tag">See details</a>
`id` |  | <a href="#Prerequisite/Single/Sex/T/id">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Sex/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Sex/T/tag"></a> `tag`

- **Constant:** `"Sex"`

#### <a name="Prerequisite/Single/Sex/T/id"></a> `id`

- **Type:** <a href="./_Sex.md#BinarySex">BinarySex</a>

#### <a name="Prerequisite/Single/Sex/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Race/T"></a> Race Prerequisite (`Prerequisite/Single/Race/T`)

Requires a specific culture or one of a specific set of cultures.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Race/T/tag">See details</a>
`id` |  | <a href="#Prerequisite/Single/Race/T/id">See details</a>
`active` |  | <a href="#Prerequisite/Single/Race/T/active">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Race/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Race/T/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="Prerequisite/Single/Race/T/id"></a> `id`

- **Type:** <a href="#Prerequisite/Single/Race/Identifier">Prerequisite/Single/Race/Identifier</a>

#### <a name="Prerequisite/Single/Race/T/active"></a> `active`

- **Type:** Boolean

#### <a name="Prerequisite/Single/Race/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Race/Identifier"></a> `Prerequisite/Single/Race/Identifier`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Single/Race/Identifier'SingleIdentifier">Prerequisite/Single/Race/Identifier'SingleIdentifier</a> | <a href="#Prerequisite/Single/Race/Identifier'MultipleIdentifiers">Prerequisite/Single/Race/Identifier'MultipleIdentifiers</a>

---

### <a name="Prerequisite/Single/Race/Identifier'SingleIdentifier"></a> `Prerequisite/Single/Race/Identifier'SingleIdentifier`

- **Type:** <a href="#Prerequisite/Single/Race/SingleIdentifier">Prerequisite/Single/Race/SingleIdentifier</a>

---

### <a name="Prerequisite/Single/Race/Identifier'MultipleIdentifiers"></a> `Prerequisite/Single/Race/Identifier'MultipleIdentifiers`

- **Type:** <a href="#Prerequisite/Single/Race/MultipleIdentifiers">Prerequisite/Single/Race/MultipleIdentifiers</a>

---

### <a name="Prerequisite/Single/Race/SingleIdentifier"></a> `Prerequisite/Single/Race/SingleIdentifier`

- **Type:** Number
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Race/MultipleIdentifiers"></a> `Prerequisite/Single/Race/MultipleIdentifiers`

- **Type:** List
- **Items:** <a href="#Prerequisite/Single/Race/MultipleIdentifiers[]">Prerequisite/Single/Race/MultipleIdentifiers[]</a>
- **Minimum Items:** `2`

---

### <a name="Prerequisite/Single/Race/MultipleIdentifiers[]"></a> `Prerequisite/Single/Race/MultipleIdentifiers[]`

- **Type:** <a href="#Prerequisite/Single/Race/SingleIdentifier">Prerequisite/Single/Race/SingleIdentifier</a>

---

### <a name="Prerequisite/Single/Culture/T"></a> Culture Prerequisite (`Prerequisite/Single/Culture/T`)

Requires a specific race or one of a specific set of races. You can also
provide an object to say whether the hero must meet one of the races or
if the entry does not allow one of the races.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Culture/T/tag">See details</a>
`id` |  | <a href="#Prerequisite/Single/Culture/T/id">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Culture/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Culture/T/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="Prerequisite/Single/Culture/T/id"></a> `id`

- **Type:** <a href="#Prerequisite/Single/Culture/Identifier">Prerequisite/Single/Culture/Identifier</a>

#### <a name="Prerequisite/Single/Culture/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Culture/Identifier"></a> `Prerequisite/Single/Culture/Identifier`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Single/Culture/Identifier'SingleIdentifier">Prerequisite/Single/Culture/Identifier'SingleIdentifier</a> | <a href="#Prerequisite/Single/Culture/Identifier'MultipleIdentifiers">Prerequisite/Single/Culture/Identifier'MultipleIdentifiers</a>

---

### <a name="Prerequisite/Single/Culture/Identifier'SingleIdentifier"></a> `Prerequisite/Single/Culture/Identifier'SingleIdentifier`

- **Type:** <a href="#Prerequisite/Single/Culture/SingleIdentifier">Prerequisite/Single/Culture/SingleIdentifier</a>

---

### <a name="Prerequisite/Single/Culture/Identifier'MultipleIdentifiers"></a> `Prerequisite/Single/Culture/Identifier'MultipleIdentifiers`

- **Type:** <a href="#Prerequisite/Single/Culture/MultipleIdentifiers">Prerequisite/Single/Culture/MultipleIdentifiers</a>

---

### <a name="Prerequisite/Single/Culture/SingleIdentifier"></a> `Prerequisite/Single/Culture/SingleIdentifier`

- **Type:** Number
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Culture/MultipleIdentifiers"></a> `Prerequisite/Single/Culture/MultipleIdentifiers`

- **Type:** List
- **Items:** <a href="#Prerequisite/Single/Culture/MultipleIdentifiers[]">Prerequisite/Single/Culture/MultipleIdentifiers[]</a>
- **Minimum Items:** `2`

---

### <a name="Prerequisite/Single/Culture/MultipleIdentifiers[]"></a> `Prerequisite/Single/Culture/MultipleIdentifiers[]`

- **Type:** <a href="#Prerequisite/Single/Culture/SingleIdentifier">Prerequisite/Single/Culture/SingleIdentifier</a>

---

### <a name="Prerequisite/Single/Rule/T"></a> Rule Prerequisite (`Prerequisite/Single/Rule/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Rule/T/tag">See details</a>
`id` |  | <a href="#Prerequisite/Single/Rule/T/id">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Rule/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Rule/T/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="Prerequisite/Single/Rule/T/id"></a> `id`

- **Type:** <a href="#Prerequisite/Single/Rule/Identifier">Prerequisite/Single/Rule/Identifier</a>

#### <a name="Prerequisite/Single/Rule/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Rule/Identifier"></a> `Prerequisite/Single/Rule/Identifier`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Single/Rule/Identifier'FocusRule">Prerequisite/Single/Rule/Identifier'FocusRule</a> | <a href="#Prerequisite/Single/Rule/Identifier'OptionalRule">Prerequisite/Single/Rule/Identifier'OptionalRule</a>

---

### <a name="Prerequisite/Single/Rule/Identifier'FocusRule"></a> `Prerequisite/Single/Rule/Identifier'FocusRule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Rule/Identifier'FocusRule/tag">See details</a>
`value` |  | <a href="#Prerequisite/Single/Rule/Identifier'FocusRule/value">See details</a>

#### <a name="Prerequisite/Single/Rule/Identifier'FocusRule/tag"></a> `tag`

- **Constant:** `"FocusRule"`

#### <a name="Prerequisite/Single/Rule/Identifier'FocusRule/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Rule/Identifier'OptionalRule"></a> `Prerequisite/Single/Rule/Identifier'OptionalRule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Rule/Identifier'OptionalRule/tag">See details</a>
`value` |  | <a href="#Prerequisite/Single/Rule/Identifier'OptionalRule/value">See details</a>

#### <a name="Prerequisite/Single/Rule/Identifier'OptionalRule/tag"></a> `tag`

- **Constant:** `"OptionalRule"`

#### <a name="Prerequisite/Single/Rule/Identifier'OptionalRule/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Publication/T"></a> Publication Prerequisite (`Prerequisite/Single/Publication/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Publication/T/tag">See details</a>
`id` |  | <a href="#Prerequisite/Single/Publication/T/id">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Publication/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Publication/T/tag"></a> `tag`

- **Constant:** `"Publication"`

#### <a name="Prerequisite/Single/Publication/T/id"></a> `id`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Prerequisite/Single/Publication/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/PrimaryAttribute/T"></a> Primary Attribute Prerequisite (`Prerequisite/Single/PrimaryAttribute/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/PrimaryAttribute/T/tag">See details</a>
`category` | Is the required primary attribute for spellcasters or blessed ones? | <a href="#Prerequisite/Single/PrimaryAttribute/T/category">See details</a>
`value` | Required value of the attribute | <a href="#Prerequisite/Single/PrimaryAttribute/T/value">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/PrimaryAttribute/T/display_option">See details</a>

#### <a name="Prerequisite/Single/PrimaryAttribute/T/tag"></a> `tag`

- **Constant:** `"PrimaryAttribute"`

#### <a name="Prerequisite/Single/PrimaryAttribute/T/category"></a> `category`

Is the required primary attribute for spellcasters or blessed ones?

- **Type:** <a href="#Prerequisite/Single/PrimaryAttribute/Category">Prerequisite/Single/PrimaryAttribute/Category</a>

#### <a name="Prerequisite/Single/PrimaryAttribute/T/value"></a> `value`

Required value of the attribute

- **Type:** Integer
- **Minimum:** `9`

#### <a name="Prerequisite/Single/PrimaryAttribute/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/PrimaryAttribute/Category"></a> `Prerequisite/Single/PrimaryAttribute/Category`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Single/PrimaryAttribute/Category'Blessed">Prerequisite/Single/PrimaryAttribute/Category'Blessed</a> | <a href="#Prerequisite/Single/PrimaryAttribute/Category'Magical">Prerequisite/Single/PrimaryAttribute/Category'Magical</a>

---

### <a name="Prerequisite/Single/PrimaryAttribute/Category'Blessed"></a> `Prerequisite/Single/PrimaryAttribute/Category'Blessed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/PrimaryAttribute/Category'Blessed/tag">See details</a>

#### <a name="Prerequisite/Single/PrimaryAttribute/Category'Blessed/tag"></a> `tag`

- **Constant:** `"Blessed"`

---

### <a name="Prerequisite/Single/PrimaryAttribute/Category'Magical"></a> `Prerequisite/Single/PrimaryAttribute/Category'Magical`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/PrimaryAttribute/Category'Magical/tag">See details</a>

#### <a name="Prerequisite/Single/PrimaryAttribute/Category'Magical/tag"></a> `tag`

- **Constant:** `"Magical"`

---

### <a name="Prerequisite/Single/Pact/T"></a> Pact Prerequisite (`Prerequisite/Single/Pact/T`)

Requires a specific pact.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Pact/T/tag">See details</a>
`category_id` | The required pact category's identifier. | <a href="#Prerequisite/Single/Pact/T/category_id">See details</a>
`domain_id?` | The required domains' identifiers. | <a href="#Prerequisite/Single/Pact/T/domain_id">See details</a>
`level?` | The required pact level. | <a href="#Prerequisite/Single/Pact/T/level">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Pact/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Pact/T/tag"></a> `tag`

- **Constant:** `"Pact"`

#### <a name="Prerequisite/Single/Pact/T/category_id"></a> `category_id`

The required pact category's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Prerequisite/Single/Pact/T/domain_id"></a> `domain_id?`

The required domains' identifiers.

- **Type:** List
- **Items:** <a href="#Prerequisite/Single/Pact/T/domain_id[]">Prerequisite/Single/Pact/T/domain_id[]</a>

#### <a name="Prerequisite/Single/Pact/T/level"></a> `level?`

The required pact level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Prerequisite/Single/Pact/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Pact/T/domain_id[]"></a> `Prerequisite/Single/Pact/T/domain_id[]`

- **Type:** <a href="#Prerequisite/Single/Pact/DomainId">Prerequisite/Single/Pact/DomainId</a>

---

### <a name="Prerequisite/Single/Pact/DomainId"></a> `Prerequisite/Single/Pact/DomainId`

A domain's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/SocialStatus/T"></a> Social Status Prerequisite (`Prerequisite/Single/SocialStatus/T`)

Requires a minimum social status.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/SocialStatus/T/tag">See details</a>
`id` | The minimum social status' identifier. | <a href="#Prerequisite/Single/SocialStatus/T/id">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/SocialStatus/T/display_option">See details</a>

#### <a name="Prerequisite/Single/SocialStatus/T/tag"></a> `tag`

- **Constant:** `"SocialStatus"`

#### <a name="Prerequisite/Single/SocialStatus/T/id"></a> `id`

The minimum social status' identifier.

- **Type:** Integer
- **Minimum:** `2`
- **Maximum:** `5`

#### <a name="Prerequisite/Single/SocialStatus/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Influence/T"></a> Influence Prerequisite (`Prerequisite/Single/Influence/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Influence/T/tag">See details</a>
`id` | The influence's identifier. | <a href="#Prerequisite/Single/Influence/T/id">See details</a>
`active` | If the referenced influence must or must not be chosen. | <a href="#Prerequisite/Single/Influence/T/active">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Influence/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Influence/T/tag"></a> `tag`

- **Constant:** `"Influence"`

#### <a name="Prerequisite/Single/Influence/T/id"></a> `id`

The influence's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Prerequisite/Single/Influence/T/active"></a> `active`

If the referenced influence must or must not be chosen.

- **Type:** Boolean

#### <a name="Prerequisite/Single/Influence/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Activatable/T"></a> Activatable Prerequisite (`Prerequisite/Single/Activatable/T`)

Requires a specific advantage, disadvantage, special ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Activatable/T/tag">See details</a>
`id` | The activatable entry's identifier. | <a href="#Prerequisite/Single/Activatable/T/id">See details</a>
`active` | If the required entry should be required to be active or inactive. | <a href="#Prerequisite/Single/Activatable/T/active">See details</a>
`level?` | The required minimum level of the entry. | <a href="#Prerequisite/Single/Activatable/T/level">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Activatable/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Activatable/T/tag"></a> `tag`

- **Constant:** `"Activatable"`

#### <a name="Prerequisite/Single/Activatable/T/id"></a> `id`

The activatable entry's identifier.

- **Type:** <a href="./_Identifier.md#Identifier/Group/Activatable">Identifier/Group/Activatable</a>

#### <a name="Prerequisite/Single/Activatable/T/active"></a> `active`

If the required entry should be required to be active or inactive.

- **Type:** Boolean

#### <a name="Prerequisite/Single/Activatable/T/level"></a> `level?`

The required minimum level of the entry.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Prerequisite/Single/Activatable/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Rated/T"></a> Rated Prerequisite (`Prerequisite/Single/Rated/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Rated/T/tag">See details</a>
`id` | The rated entry's identifier. | <a href="#Prerequisite/Single/Rated/T/id">See details</a>
`value` | The required minimum value. | <a href="#Prerequisite/Single/Rated/T/value">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Rated/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Rated/T/tag"></a> `tag`

- **Constant:** `"Rated"`

#### <a name="Prerequisite/Single/Rated/T/id"></a> `id`

The rated entry's identifier.

- **Type:** <a href="./_Identifier.md#Identifier/Group/Rated">Identifier/Group/Rated</a>

#### <a name="Prerequisite/Single/Rated/T/value"></a> `value`

The required minimum value.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="Prerequisite/Single/Rated/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Enhancement/T"></a> Enhancement Prerequisite (`Prerequisite/Single/Enhancement/T`)

Requires a specific enhancement from a skill.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Enhancement/T/tag">See details</a>
`skill` | The required skill's identifier. | <a href="#Prerequisite/Single/Enhancement/T/skill">See details</a>
`enhancement` | The required enhancement's identifier. | <a href="#Prerequisite/Single/Enhancement/T/enhancement">See details</a>
`display_option?` |  | <a href="#Prerequisite/Single/Enhancement/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Enhancement/T/tag"></a> `tag`

- **Constant:** `"Enhancement"`

#### <a name="Prerequisite/Single/Enhancement/T/skill"></a> `skill`

The required skill's identifier.

- **Type:** <a href="#Prerequisite/Single/Enhancement/T/skill">Object</a>

#### <a name="Prerequisite/Single/Enhancement/T/enhancement"></a> `enhancement`

The required enhancement's identifier.

- **Type:** <a href="#Prerequisite/Single/Enhancement/T/enhancement">Object</a>

#### <a name="Prerequisite/Single/Enhancement/T/display_option"></a> `display_option?`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Single/Enhancement/T/skill"></a> `Prerequisite/Single/Enhancement/T/skill`

The required skill's identifier.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Enhancement/T/skill/tag">See details</a>
`id` | The skill's identifier. | <a href="#Prerequisite/Single/Enhancement/T/skill/id">See details</a>

#### <a name="Prerequisite/Single/Enhancement/T/skill/tag"></a> `tag`

- **Type:** <a href="#Prerequisite/Single/Enhancement/SkillCategoryWithEnhancements">Prerequisite/Single/Enhancement/SkillCategoryWithEnhancements</a>

#### <a name="Prerequisite/Single/Enhancement/T/skill/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Enhancement/T/enhancement"></a> `Prerequisite/Single/Enhancement/T/enhancement`

The required enhancement's identifier.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The enhancement's identifier. | <a href="#Prerequisite/Single/Enhancement/T/enhancement/id">See details</a>

#### <a name="Prerequisite/Single/Enhancement/T/enhancement/id"></a> `id`

The enhancement's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Enhancement/SkillCategoryWithEnhancements"></a> `Prerequisite/Single/Enhancement/SkillCategoryWithEnhancements`

- **Possible values:** `"Spell"`, `"Ritual"`, `"LiturgicalChant"`, `"Ceremony"`

---

### <a name="Prerequisite/Single/EnhancementInternal/T"></a> Internal Enhancement Prerequisite (`Prerequisite/Single/EnhancementInternal/T`)

Requires a specific enhancement from a skill. This can only be used by an
enhancement to require another enhancement from the same skill.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/EnhancementInternal/T/tag">See details</a>
`id` | The enhancement's identifier. | <a href="#Prerequisite/Single/EnhancementInternal/T/id">See details</a>

#### <a name="Prerequisite/Single/EnhancementInternal/T/tag"></a> `tag`

- **Constant:** `"EnhancementInternal"`

#### <a name="Prerequisite/Single/EnhancementInternal/T/id"></a> `id`

The enhancement's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Prerequisite/Single/Ineligible/T"></a> Ineligible Prerequisite (`Prerequisite/Single/Ineligible/T`)

This is a placeholder for required things that can never happen with the
current set of crunch elements and rules, e. g. if a race is required
that does not yet exist as a crunch element.

A display option must be set.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/Single/Ineligible/T/tag">See details</a>
`display_option` |  | <a href="#Prerequisite/Single/Ineligible/T/display_option">See details</a>

#### <a name="Prerequisite/Single/Ineligible/T/tag"></a> `tag`

- **Constant:** `"Ineligible"`

#### <a name="Prerequisite/Single/Ineligible/T/display_option"></a> `display_option`

- **Type:** <a href="#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="Prerequisite/Group/DerivedCharacteristic"></a> `Prerequisite/Group/DerivedCharacteristic`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/DerivedCharacteristic'T">Prerequisite/Group/DerivedCharacteristic'T</a>

---

### <a name="Prerequisite/Group/DerivedCharacteristic'T"></a> `Prerequisite/Group/DerivedCharacteristic'T`

- **Type:** <a href="#Prerequisite/Single/Rule/T">Prerequisite/Single/Rule/T</a>

---

### <a name="Prerequisite/Group/Publication"></a> `Prerequisite/Group/Publication`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/Publication'T">Prerequisite/Group/Publication'T</a>

---

### <a name="Prerequisite/Group/Publication'T"></a> `Prerequisite/Group/Publication'T`

- **Type:** <a href="#Prerequisite/Single/Publication/T">Prerequisite/Single/Publication/T</a>

---

### <a name="Prerequisite/Group/ArcaneTradition"></a> `Prerequisite/Group/ArcaneTradition`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/ArcaneTradition'T">Prerequisite/Group/ArcaneTradition'T</a> | <a href="#Prerequisite/Group/ArcaneTradition'T">Prerequisite/Group/ArcaneTradition'T</a>

---

### <a name="Prerequisite/Group/ArcaneTradition'T"></a> `Prerequisite/Group/ArcaneTradition'T`

- **Type:** <a href="#Prerequisite/Single/Sex/T">Prerequisite/Single/Sex/T</a>

---

### <a name="Prerequisite/Group/ArcaneTradition'T"></a> `Prerequisite/Group/ArcaneTradition'T`

- **Type:** <a href="#Prerequisite/Single/Culture/T">Prerequisite/Single/Culture/T</a>

---

### <a name="Prerequisite/Group/Spellwork"></a> `Prerequisite/Group/Spellwork`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/Spellwork'T">Prerequisite/Group/Spellwork'T</a> | <a href="#Prerequisite/Group/Spellwork'T">Prerequisite/Group/Spellwork'T</a>

---

### <a name="Prerequisite/Group/Spellwork'T"></a> `Prerequisite/Group/Spellwork'T`

- **Type:** <a href="#Prerequisite/Single/Rule/T">Prerequisite/Single/Rule/T</a>

---

### <a name="Prerequisite/Group/Spellwork'T"></a> `Prerequisite/Group/Spellwork'T`

- **Type:** <a href="#Prerequisite/Single/Rated/T">Prerequisite/Single/Rated/T</a>

---

### <a name="Prerequisite/Group/Liturgy"></a> `Prerequisite/Group/Liturgy`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/Liturgy'T">Prerequisite/Group/Liturgy'T</a>

---

### <a name="Prerequisite/Group/Liturgy'T"></a> `Prerequisite/Group/Liturgy'T`

- **Type:** <a href="#Prerequisite/Single/Rule/T">Prerequisite/Single/Rule/T</a>

---

### <a name="Prerequisite/Group/Language"></a> `Prerequisite/Group/Language`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/Language'T">Prerequisite/Group/Language'T</a> | <a href="#Prerequisite/Group/Language'T">Prerequisite/Group/Language'T</a> | <a href="#Prerequisite/Group/Language'T">Prerequisite/Group/Language'T</a>

---

### <a name="Prerequisite/Group/Language'T"></a> `Prerequisite/Group/Language'T`

- **Type:** <a href="#Prerequisite/Single/Ineligible/T">Prerequisite/Single/Ineligible/T</a>

---

### <a name="Prerequisite/Group/Language'T"></a> `Prerequisite/Group/Language'T`

- **Type:** <a href="#Prerequisite/Single/Race/T">Prerequisite/Single/Race/T</a>

---

### <a name="Prerequisite/Group/Language'T"></a> `Prerequisite/Group/Language'T`

- **Type:** <a href="#Prerequisite/Single/Activatable/T">Prerequisite/Single/Activatable/T</a>

---

### <a name="Prerequisite/Group/GeodeRitual"></a> `Prerequisite/Group/GeodeRitual`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/GeodeRitual'T">Prerequisite/Group/GeodeRitual'T</a>

---

### <a name="Prerequisite/Group/GeodeRitual'T"></a> `Prerequisite/Group/GeodeRitual'T`

- **Type:** <a href="#Prerequisite/Single/Influence/T">Prerequisite/Single/Influence/T</a>

---

### <a name="Prerequisite/Group/Enhancement"></a> `Prerequisite/Group/Enhancement`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/Group/Enhancement'T">Prerequisite/Group/Enhancement'T</a>

---

### <a name="Prerequisite/Group/Enhancement'T"></a> `Prerequisite/Group/Enhancement'T`

- **Type:** <a href="#Prerequisite/Single/EnhancementInternal/T">Prerequisite/Single/EnhancementInternal/T</a>

---

### <a name="Prerequisite/GroupCollection/DerivedCharacteristic"></a> `Prerequisite/GroupCollection/DerivedCharacteristic`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/DerivedCharacteristic/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/DerivedCharacteristic/value">See details</a>

#### <a name="Prerequisite/GroupCollection/DerivedCharacteristic/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/DerivedCharacteristic/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/DerivedCharacteristic/value[]">Prerequisite/GroupCollection/DerivedCharacteristic/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/DerivedCharacteristic/value[]"></a> `Prerequisite/GroupCollection/DerivedCharacteristic/value[]`

- **Type:** <a href="#Prerequisite/Group/DerivedCharacteristic">Prerequisite/Group/DerivedCharacteristic</a>

---

### <a name="Prerequisite/GroupCollection/Publication"></a> `Prerequisite/GroupCollection/Publication`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/Publication/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/Publication/value">See details</a>

#### <a name="Prerequisite/GroupCollection/Publication/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/Publication/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Publication/value[]">Prerequisite/GroupCollection/Publication/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/Publication/value[]"></a> `Prerequisite/GroupCollection/Publication/value[]`

- **Type:** <a href="#Prerequisite/Group/Publication">Prerequisite/Group/Publication</a>

---

### <a name="Prerequisite/GroupCollection/ArcaneTradition"></a> `Prerequisite/GroupCollection/ArcaneTradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/ArcaneTradition/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/ArcaneTradition/value">See details</a>

#### <a name="Prerequisite/GroupCollection/ArcaneTradition/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/ArcaneTradition/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/ArcaneTradition/value[]">Prerequisite/GroupCollection/ArcaneTradition/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/ArcaneTradition/value[]"></a> `Prerequisite/GroupCollection/ArcaneTradition/value[]`

- **Type:** <a href="#Prerequisite/Group/ArcaneTradition">Prerequisite/Group/ArcaneTradition</a>

---

### <a name="Prerequisite/GroupCollection/Spellwork"></a> `Prerequisite/GroupCollection/Spellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/Spellwork/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/Spellwork/value">See details</a>

#### <a name="Prerequisite/GroupCollection/Spellwork/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/Spellwork/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Spellwork/value[]">Prerequisite/GroupCollection/Spellwork/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/Spellwork/value[]"></a> `Prerequisite/GroupCollection/Spellwork/value[]`

- **Type:** <a href="#Prerequisite/Group/Spellwork">Prerequisite/Group/Spellwork</a>

---

### <a name="Prerequisite/GroupCollection/Liturgy"></a> `Prerequisite/GroupCollection/Liturgy`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/Liturgy/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/Liturgy/value">See details</a>

#### <a name="Prerequisite/GroupCollection/Liturgy/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/Liturgy/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Liturgy/value[]">Prerequisite/GroupCollection/Liturgy/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/Liturgy/value[]"></a> `Prerequisite/GroupCollection/Liturgy/value[]`

- **Type:** <a href="#Prerequisite/Group/Liturgy">Prerequisite/Group/Liturgy</a>

---

### <a name="Prerequisite/GroupCollection/Language"></a> `Prerequisite/GroupCollection/Language`

- **Type:** Union
- **Cases:** <a href="#Prerequisite/GroupCollection/Language'Plain">Prerequisite/GroupCollection/Language'Plain</a> | <a href="#Prerequisite/GroupCollection/Language'ByLevel">Prerequisite/GroupCollection/Language'ByLevel</a>

---

### <a name="Prerequisite/GroupCollection/Language'Plain"></a> `Prerequisite/GroupCollection/Language'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/Language'Plain/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/Language'Plain/value">See details</a>

#### <a name="Prerequisite/GroupCollection/Language'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/Language'Plain/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Language'Plain/value[]">Prerequisite/GroupCollection/Language'Plain/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/Language'Plain/value[]"></a> `Prerequisite/GroupCollection/Language'Plain/value[]`

- **Type:** <a href="#Prerequisite/Group/Language">Prerequisite/Group/Language</a>

---

### <a name="Prerequisite/GroupCollection/Language'ByLevel"></a> `Prerequisite/GroupCollection/Language'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/Language'ByLevel/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/Language'ByLevel/value">See details</a>

#### <a name="Prerequisite/GroupCollection/Language'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="Prerequisite/GroupCollection/Language'ByLevel/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Language'ByLevel/value[]">Prerequisite/GroupCollection/Language'ByLevel/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/Language'ByLevel/value[]"></a> `Prerequisite/GroupCollection/Language'ByLevel/value[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#Prerequisite/GroupCollection/Language'ByLevel/value[]/level">See details</a>
`prerequisites` |  | <a href="#Prerequisite/GroupCollection/Language'ByLevel/value[]/prerequisites">See details</a>

#### <a name="Prerequisite/GroupCollection/Language'ByLevel/value[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Prerequisite/GroupCollection/Language'ByLevel/value[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Language'ByLevel/value[]/prerequisites[]">Prerequisite/GroupCollection/Language'ByLevel/value[]/prerequisites[]</a>

---

### <a name="Prerequisite/GroupCollection/Language'ByLevel/value[]/prerequisites[]"></a> `Prerequisite/GroupCollection/Language'ByLevel/value[]/prerequisites[]`

- **Type:** <a href="#Prerequisite/Group/Language">Prerequisite/Group/Language</a>

---

### <a name="Prerequisite/GroupCollection/GeodeRitual"></a> `Prerequisite/GroupCollection/GeodeRitual`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/GeodeRitual/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/GeodeRitual/value">See details</a>

#### <a name="Prerequisite/GroupCollection/GeodeRitual/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/GeodeRitual/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/GeodeRitual/value[]">Prerequisite/GroupCollection/GeodeRitual/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/GeodeRitual/value[]"></a> `Prerequisite/GroupCollection/GeodeRitual/value[]`

- **Type:** <a href="#Prerequisite/Group/GeodeRitual">Prerequisite/Group/GeodeRitual</a>

---

### <a name="Prerequisite/GroupCollection/Enhancement"></a> `Prerequisite/GroupCollection/Enhancement`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Prerequisite/GroupCollection/Enhancement/tag">See details</a>
`value` |  | <a href="#Prerequisite/GroupCollection/Enhancement/value">See details</a>

#### <a name="Prerequisite/GroupCollection/Enhancement/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Prerequisite/GroupCollection/Enhancement/value"></a> `value`

- **Type:** List
- **Items:** <a href="#Prerequisite/GroupCollection/Enhancement/value[]">Prerequisite/GroupCollection/Enhancement/value[]</a>
- **Minimum Items:** `1`

---

### <a name="Prerequisite/GroupCollection/Enhancement/value[]"></a> `Prerequisite/GroupCollection/Enhancement/value[]`

- **Type:** <a href="#Prerequisite/Group/Enhancement">Prerequisite/Group/Enhancement</a>
