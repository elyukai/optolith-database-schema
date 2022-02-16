# Ranged Combat Technique

## Definitions

### <a name="RangedCombatTechnique"></a> Ranged Combat Technique

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#RangedCombatTechnique/id">See details</a>
`primary_attribute` | The primary attribute(s). | <a href="#RangedCombatTechnique/primary_attribute">See details</a>
`breaking_point_rating` | The *Breaking Point Rating* of the respective combat technique. | <a href="#RangedCombatTechnique/breaking_point_rating">See details</a>
`improvement_cost` |  | <a href="#RangedCombatTechnique/improvement_cost">See details</a>
`src` |  | <a href="#RangedCombatTechnique/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#RangedCombatTechnique/translations">See details</a>

#### <a name="RangedCombatTechnique/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangedCombatTechnique/primary_attribute"></a> `primary_attribute`

The primary attribute(s).

- **Type:** List
- **Minimum Items:** `1`
- **Maximum Items:** `2`
- **Unique Items:** `true`

##### Items

- **Type:** <a href="#PrimaryAttribute">PrimaryAttribute</a>

#### <a name="RangedCombatTechnique/breaking_point_rating"></a> `breaking_point_rating`

The *Breaking Point Rating* of the respective combat technique.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangedCombatTechnique/improvement_cost"></a> `improvement_cost`

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="RangedCombatTechnique/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="RangedCombatTechnique/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Patterns:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="PrimaryAttribute"></a> PrimaryAttribute

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Translation"></a> Translation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the condition. | <a href="#Translation/name">See details</a>
`special?` | Additional rules for the condition, if applicable. | <a href="#Translation/special">See details</a>
`errata?` |  | <a href="#Translation/errata">See details</a>

#### <a name="Translation/name"></a> `name`

The name of the condition.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/special"></a> `special?`

Additional rules for the condition, if applicable.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/errata"></a> `errata?`

- **Type:** <a href="./_Erratum.md#Errata">Errata</a>