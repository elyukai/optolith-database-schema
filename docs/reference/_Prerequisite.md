# Prerequisites

## Definitions

### <a name="Single/DisplayOption/T"></a> Display Option (`Single/DisplayOption/T`)

- **Type:** Union
- **Cases:** <a href="#Single/DisplayOption/T'Hide">Single/DisplayOption/T'Hide</a> | <a href="#Single/DisplayOption/T'ReplaceWith">Single/DisplayOption/T'ReplaceWith</a>

---

### <a name="Single/DisplayOption/T'Hide"></a> `Single/DisplayOption/T'Hide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/DisplayOption/T'Hide/tag">See details</a>

#### <a name="Single/DisplayOption/T'Hide/tag"></a> `tag`

- **Constant:** `"Hide"`

---

### <a name="Single/DisplayOption/T'ReplaceWith"></a> `Single/DisplayOption/T'ReplaceWith`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/DisplayOption/T'ReplaceWith/tag">See details</a>
`value` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Single/DisplayOption/T'ReplaceWith/value">See details</a>

#### <a name="Single/DisplayOption/T'ReplaceWith/tag"></a> `tag`

- **Constant:** `"ReplaceWith"`

#### <a name="Single/DisplayOption/T'ReplaceWith/value"></a> `value`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Single/DisplayOption/T'ReplaceWith/value[key]">Single/DisplayOption/T'ReplaceWith/value[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Single/DisplayOption/T'ReplaceWith/value[key]"></a> `Single/DisplayOption/T'ReplaceWith/value[key]`

- **Type:** String

---

### <a name="Single/Sex/T"></a> Sex Prerequisite (`Single/Sex/T`)

Requires a specific sex.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Sex/T/tag">See details</a>
`id` |  | <a href="#Single/Sex/T/id">See details</a>
`display_option?` |  | <a href="#Single/Sex/T/display_option">See details</a>

#### <a name="Single/Sex/T/tag"></a> `tag`

- **Constant:** `"Sex"`

#### <a name="Single/Sex/T/id"></a> `id`

- **Type:** <a href="./_Sex.md#BinarySex">BinarySex</a>

#### <a name="Single/Sex/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/Race/T"></a> Race Prerequisite (`Single/Race/T`)

Requires a specific culture or one of a specific set of cultures.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Race/T/tag">See details</a>
`id` |  | <a href="#Single/Race/T/id">See details</a>
`active` |  | <a href="#Single/Race/T/active">See details</a>
`display_option?` |  | <a href="#Single/Race/T/display_option">See details</a>

#### <a name="Single/Race/T/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="Single/Race/T/id"></a> `id`

- **Type:** <a href="#Single/Race/Identifier">Single/Race/Identifier</a>

#### <a name="Single/Race/T/active"></a> `active`

- **Type:** Boolean

#### <a name="Single/Race/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/Race/Identifier"></a> `Single/Race/Identifier`

- **Type:** Union
- **Cases:** <a href="#Single/Race/Identifier'SingleIdentifier">Single/Race/Identifier'SingleIdentifier</a> | <a href="#Single/Race/Identifier'MultipleIdentifiers">Single/Race/Identifier'MultipleIdentifiers</a>

---

### <a name="Single/Race/Identifier'SingleIdentifier"></a> `Single/Race/Identifier'SingleIdentifier`

- **Type:** <a href="#Single/Race/SingleIdentifier">Single/Race/SingleIdentifier</a>

---

### <a name="Single/Race/Identifier'MultipleIdentifiers"></a> `Single/Race/Identifier'MultipleIdentifiers`

- **Type:** <a href="#Single/Race/MultipleIdentifiers">Single/Race/MultipleIdentifiers</a>

---

### <a name="Single/Race/SingleIdentifier"></a> `Single/Race/SingleIdentifier`

- **Type:** Number
- **Minimum:** `1`

---

### <a name="Single/Race/MultipleIdentifiers"></a> `Single/Race/MultipleIdentifiers`

- **Type:** List
- **Items:** <a href="#Single/Race/MultipleIdentifiers[]">Single/Race/MultipleIdentifiers[]</a>
- **Minimum Items:** `2`

---

### <a name="Single/Race/MultipleIdentifiers[]"></a> `Single/Race/MultipleIdentifiers[]`

- **Type:** <a href="#Single/Race/SingleIdentifier">Single/Race/SingleIdentifier</a>

---

### <a name="Single/Culture/T"></a> Culture Prerequisite (`Single/Culture/T`)

Requires a specific race or one of a specific set of races. You can also provide an object to say whether the hero must meet one of the races or if the entry does not allow one of the races.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Culture/T/tag">See details</a>
`id` |  | <a href="#Single/Culture/T/id">See details</a>
`display_option?` |  | <a href="#Single/Culture/T/display_option">See details</a>

#### <a name="Single/Culture/T/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="Single/Culture/T/id"></a> `id`

- **Type:** <a href="#Single/Culture/Identifier">Single/Culture/Identifier</a>

#### <a name="Single/Culture/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/Culture/Identifier"></a> `Single/Culture/Identifier`

- **Type:** Union
- **Cases:** <a href="#Single/Culture/Identifier'SingleIdentifier">Single/Culture/Identifier'SingleIdentifier</a> | <a href="#Single/Culture/Identifier'MultipleIdentifiers">Single/Culture/Identifier'MultipleIdentifiers</a>

---

### <a name="Single/Culture/Identifier'SingleIdentifier"></a> `Single/Culture/Identifier'SingleIdentifier`

- **Type:** <a href="#Single/Culture/SingleIdentifier">Single/Culture/SingleIdentifier</a>

---

### <a name="Single/Culture/Identifier'MultipleIdentifiers"></a> `Single/Culture/Identifier'MultipleIdentifiers`

- **Type:** <a href="#Single/Culture/MultipleIdentifiers">Single/Culture/MultipleIdentifiers</a>

---

### <a name="Single/Culture/SingleIdentifier"></a> `Single/Culture/SingleIdentifier`

- **Type:** Number
- **Minimum:** `1`

---

### <a name="Single/Culture/MultipleIdentifiers"></a> `Single/Culture/MultipleIdentifiers`

- **Type:** List
- **Items:** <a href="#Single/Culture/MultipleIdentifiers[]">Single/Culture/MultipleIdentifiers[]</a>
- **Minimum Items:** `2`

---

### <a name="Single/Culture/MultipleIdentifiers[]"></a> `Single/Culture/MultipleIdentifiers[]`

- **Type:** <a href="#Single/Culture/SingleIdentifier">Single/Culture/SingleIdentifier</a>

---

### <a name="Single/Rule/T"></a> Rule Prerequisite (`Single/Rule/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/T/tag">See details</a>
`id` |  | <a href="#Single/Rule/T/id">See details</a>
`display_option?` |  | <a href="#Single/Rule/T/display_option">See details</a>

#### <a name="Single/Rule/T/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="Single/Rule/T/id"></a> `id`

- **Type:** <a href="#Single/Rule/Identifier">Single/Rule/Identifier</a>

#### <a name="Single/Rule/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/Rule/Identifier"></a> `Single/Rule/Identifier`

- **Type:** Union
- **Cases:** <a href="#Single/Rule/Identifier'FocusRule">Single/Rule/Identifier'FocusRule</a> | <a href="#Single/Rule/Identifier'OptionalRule">Single/Rule/Identifier'OptionalRule</a>

---

### <a name="Single/Rule/Identifier'FocusRule"></a> `Single/Rule/Identifier'FocusRule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Identifier'FocusRule/tag">See details</a>
`value` |  | <a href="#Single/Rule/Identifier'FocusRule/value">See details</a>

#### <a name="Single/Rule/Identifier'FocusRule/tag"></a> `tag`

- **Constant:** `"FocusRule"`

#### <a name="Single/Rule/Identifier'FocusRule/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Single/Rule/Identifier'OptionalRule"></a> `Single/Rule/Identifier'OptionalRule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Identifier'OptionalRule/tag">See details</a>
`value` |  | <a href="#Single/Rule/Identifier'OptionalRule/value">See details</a>

#### <a name="Single/Rule/Identifier'OptionalRule/tag"></a> `tag`

- **Constant:** `"OptionalRule"`

#### <a name="Single/Rule/Identifier'OptionalRule/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Single/Publication/T"></a> Publication Prerequisite (`Single/Publication/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Publication/T/tag">See details</a>
`id` |  | <a href="#Single/Publication/T/id">See details</a>
`display_option?` |  | <a href="#Single/Publication/T/display_option">See details</a>

#### <a name="Single/Publication/T/tag"></a> `tag`

- **Constant:** `"Publication"`

#### <a name="Single/Publication/T/id"></a> `id`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Single/Publication/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/PrimaryAttribute/T"></a> Primary Attribute Prerequisite (`Single/PrimaryAttribute/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/PrimaryAttribute/T/tag">See details</a>
`category` | Is the required primary attribute for spellcasters or blessed ones? | <a href="#Single/PrimaryAttribute/T/category">See details</a>
`value` | Required value of the attribute | <a href="#Single/PrimaryAttribute/T/value">See details</a>
`display_option?` |  | <a href="#Single/PrimaryAttribute/T/display_option">See details</a>

#### <a name="Single/PrimaryAttribute/T/tag"></a> `tag`

- **Constant:** `"PrimaryAttribute"`

#### <a name="Single/PrimaryAttribute/T/category"></a> `category`

Is the required primary attribute for spellcasters or blessed ones?

- **Type:** <a href="#Single/PrimaryAttribute/Category">Single/PrimaryAttribute/Category</a>

#### <a name="Single/PrimaryAttribute/T/value"></a> `value`

Required value of the attribute

- **Type:** Integer
- **Minimum:** `9`

#### <a name="Single/PrimaryAttribute/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/PrimaryAttribute/Category"></a> `Single/PrimaryAttribute/Category`

- **Type:** Union
- **Cases:** <a href="#Single/PrimaryAttribute/Category'Blessed">Single/PrimaryAttribute/Category'Blessed</a> | <a href="#Single/PrimaryAttribute/Category'Magical">Single/PrimaryAttribute/Category'Magical</a>

---

### <a name="Single/PrimaryAttribute/Category'Blessed"></a> `Single/PrimaryAttribute/Category'Blessed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/PrimaryAttribute/Category'Blessed/tag">See details</a>

#### <a name="Single/PrimaryAttribute/Category'Blessed/tag"></a> `tag`

- **Constant:** `"Blessed"`

---

### <a name="Single/PrimaryAttribute/Category'Magical"></a> `Single/PrimaryAttribute/Category'Magical`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/PrimaryAttribute/Category'Magical/tag">See details</a>

#### <a name="Single/PrimaryAttribute/Category'Magical/tag"></a> `tag`

- **Constant:** `"Magical"`

---

### <a name="Single/Pact/T"></a> Pact Prerequisite (`Single/Pact/T`)

Requires a specific pact.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Pact/T/tag">See details</a>
`category_id` | The required pact category's identifier. | <a href="#Single/Pact/T/category_id">See details</a>
`domain_id?` | The required domains' identifiers. | <a href="#Single/Pact/T/domain_id">See details</a>
`level?` | The required pact level. | <a href="#Single/Pact/T/level">See details</a>
`display_option?` |  | <a href="#Single/Pact/T/display_option">See details</a>

#### <a name="Single/Pact/T/tag"></a> `tag`

- **Constant:** `"Pact"`

#### <a name="Single/Pact/T/category_id"></a> `category_id`

The required pact category's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Single/Pact/T/domain_id"></a> `domain_id?`

The required domains' identifiers.

- **Type:** List
- **Items:** <a href="#Single/Pact/T/domain_id[]">Single/Pact/T/domain_id[]</a>

#### <a name="Single/Pact/T/level"></a> `level?`

The required pact level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Single/Pact/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/Pact/T/domain_id[]"></a> `Single/Pact/T/domain_id[]`

- **Type:** <a href="#Single/Pact/DomainId">Single/Pact/DomainId</a>

---

### <a name="Single/Pact/DomainId"></a> `Single/Pact/DomainId`

A domain's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Single/SocialStatus/T"></a> Social Status Prerequisite (`Single/SocialStatus/T`)

Requires a minimum social status.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/SocialStatus/T/tag">See details</a>
`id` | The minimum social status' identifier. | <a href="#Single/SocialStatus/T/id">See details</a>
`display_option?` |  | <a href="#Single/SocialStatus/T/display_option">See details</a>

#### <a name="Single/SocialStatus/T/tag"></a> `tag`

- **Constant:** `"SocialStatus"`

#### <a name="Single/SocialStatus/T/id"></a> `id`

The minimum social status' identifier.

- **Type:** Integer
- **Minimum:** `2`
- **Maximum:** `5`

#### <a name="Single/SocialStatus/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Single/Influence/T"></a> Influence Prerequisite (`Single/Influence/T`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Influence/T/tag">See details</a>
`id` | The influence' identifier. | <a href="#Single/Influence/T/id">See details</a>
`active` | If the referenced influence must or must not be chosen. | <a href="#Single/Influence/T/active">See details</a>
`display_option?` |  | <a href="#Single/Influence/T/display_option">See details</a>

#### <a name="Single/Influence/T/tag"></a> `tag`

- **Constant:** `"Influence"`

#### <a name="Single/Influence/T/id"></a> `id`

The influence' identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Single/Influence/T/active"></a> `active`

If the referenced influence must or must not be chosen.

- **Type:** Boolean

#### <a name="Single/Influence/T/display_option"></a> `display_option?`

- **Type:** <a href="#Single/DisplayOption/T">Single/DisplayOption/T</a>

---

### <a name="Group/DerivedCharacteristic"></a> `Group/DerivedCharacteristic`

- **Type:** Union
- **Cases:** <a href="#Group/DerivedCharacteristic'T">Group/DerivedCharacteristic'T</a>

---

### <a name="Group/DerivedCharacteristic'T"></a> `Group/DerivedCharacteristic'T`

- **Type:** <a href="#Single/Rule/T">Single/Rule/T</a>

---

### <a name="Group/Publication"></a> `Group/Publication`

- **Type:** Union
- **Cases:** <a href="#Group/Publication'T">Group/Publication'T</a>

---

### <a name="Group/Publication'T"></a> `Group/Publication'T`

- **Type:** <a href="#Single/Publication/T">Single/Publication/T</a>

---

### <a name="Group/ArcaneTradition"></a> `Group/ArcaneTradition`

- **Type:** Union
- **Cases:** <a href="#Group/ArcaneTradition'T">Group/ArcaneTradition'T</a> | <a href="#Group/ArcaneTradition'T">Group/ArcaneTradition'T</a>

---

### <a name="Group/ArcaneTradition'T"></a> `Group/ArcaneTradition'T`

- **Type:** <a href="#Single/Sex/T">Single/Sex/T</a>

---

### <a name="Group/ArcaneTradition'T"></a> `Group/ArcaneTradition'T`

- **Type:** <a href="#Single/Culture/T">Single/Culture/T</a>

---

### <a name="Group/GeodeRitual"></a> `Group/GeodeRitual`

- **Type:** Union
- **Cases:** <a href="#Group/GeodeRitual'T">Group/GeodeRitual'T</a>

---

### <a name="Group/GeodeRitual'T"></a> `Group/GeodeRitual'T`

- **Type:** <a href="#Single/Influence/T">Single/Influence/T</a>

---

### <a name="GroupCollection/DerivedCharacteristic"></a> `GroupCollection/DerivedCharacteristic`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GroupCollection/DerivedCharacteristic/tag">See details</a>
`value` |  | <a href="#GroupCollection/DerivedCharacteristic/value">See details</a>

#### <a name="GroupCollection/DerivedCharacteristic/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GroupCollection/DerivedCharacteristic/value"></a> `value`

- **Type:** List
- **Items:** <a href="#GroupCollection/DerivedCharacteristic/value[]">GroupCollection/DerivedCharacteristic/value[]</a>
- **Minimum Items:** `1`

---

### <a name="GroupCollection/DerivedCharacteristic/value[]"></a> `GroupCollection/DerivedCharacteristic/value[]`

- **Type:** <a href="#Group/DerivedCharacteristic">Group/DerivedCharacteristic</a>

---

### <a name="GroupCollection/Publication"></a> `GroupCollection/Publication`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GroupCollection/Publication/tag">See details</a>
`value` |  | <a href="#GroupCollection/Publication/value">See details</a>

#### <a name="GroupCollection/Publication/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GroupCollection/Publication/value"></a> `value`

- **Type:** List
- **Items:** <a href="#GroupCollection/Publication/value[]">GroupCollection/Publication/value[]</a>
- **Minimum Items:** `1`

---

### <a name="GroupCollection/Publication/value[]"></a> `GroupCollection/Publication/value[]`

- **Type:** <a href="#Group/Publication">Group/Publication</a>

---

### <a name="GroupCollection/ArcaneTradition"></a> `GroupCollection/ArcaneTradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GroupCollection/ArcaneTradition/tag">See details</a>
`value` |  | <a href="#GroupCollection/ArcaneTradition/value">See details</a>

#### <a name="GroupCollection/ArcaneTradition/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GroupCollection/ArcaneTradition/value"></a> `value`

- **Type:** List
- **Items:** <a href="#GroupCollection/ArcaneTradition/value[]">GroupCollection/ArcaneTradition/value[]</a>
- **Minimum Items:** `1`

---

### <a name="GroupCollection/ArcaneTradition/value[]"></a> `GroupCollection/ArcaneTradition/value[]`

- **Type:** <a href="#Group/ArcaneTradition">Group/ArcaneTradition</a>

---

### <a name="GroupCollection/GeodeRitual"></a> `GroupCollection/GeodeRitual`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GroupCollection/GeodeRitual/tag">See details</a>
`value` |  | <a href="#GroupCollection/GeodeRitual/value">See details</a>

#### <a name="GroupCollection/GeodeRitual/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GroupCollection/GeodeRitual/value"></a> `value`

- **Type:** List
- **Items:** <a href="#GroupCollection/GeodeRitual/value[]">GroupCollection/GeodeRitual/value[]</a>
- **Minimum Items:** `1`

---

### <a name="GroupCollection/GeodeRitual/value[]"></a> `GroupCollection/GeodeRitual/value[]`

- **Type:** <a href="#Group/GeodeRitual">Group/GeodeRitual</a>
