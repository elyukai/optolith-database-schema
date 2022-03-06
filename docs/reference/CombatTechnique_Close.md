# Close Combat Technique

## Definitions

### <a name="CloseCombatTechnique"></a> Close Combat Technique (`CloseCombatTechnique`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The close combat technique's identifier. An unique, increasing integer. | <a href="#CloseCombatTechnique/id">See details</a>
`special` | Special rules for the combat technique that apply to all weapons in this category. | <a href="#CloseCombatTechnique/special">See details</a>
`primary_attribute` | The primary attribute(s). | <a href="#CloseCombatTechnique/primary_attribute">See details</a>
`breaking_point_rating` | The *Breaking Point Rating* of the respective combat technique. | <a href="#CloseCombatTechnique/breaking_point_rating">See details</a>
`improvement_cost` |  | <a href="#CloseCombatTechnique/improvement_cost">See details</a>
`src` |  | <a href="#CloseCombatTechnique/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CloseCombatTechnique/translations">See details</a>

#### <a name="CloseCombatTechnique/id"></a> `id`

The close combat technique's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CloseCombatTechnique/special"></a> `special`

Special rules for the combat technique that apply to all weapons in this
category.

- **Type:** <a href="#CloseCombatTechnique/special">Object</a>

#### <a name="CloseCombatTechnique/primary_attribute"></a> `primary_attribute`

The primary attribute(s).

- **Type:** List
- **Items:** <a href="#CloseCombatTechnique/primary_attribute[]">CloseCombatTechnique/primary_attribute[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`
- **Unique Items:** Yes

#### <a name="CloseCombatTechnique/breaking_point_rating"></a> `breaking_point_rating`

The *Breaking Point Rating* of the respective combat technique.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CloseCombatTechnique/improvement_cost"></a> `improvement_cost`

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="CloseCombatTechnique/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CloseCombatTechnique/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CloseCombatTechnique/translations[key]">CloseCombatTechnique/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CloseCombatTechnique/special"></a> `CloseCombatTechnique/special`

Special rules for the combat technique that apply to all weapons in this
category.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`parrying` | Is parrying possible with this combat technique? | <a href="#CloseCombatTechnique/special/parrying">See details</a>

#### <a name="CloseCombatTechnique/special/parrying"></a> `parrying`

Is parrying possible with this combat technique?

- **Type:** <a href="#Parrying">Parrying</a>

---

### <a name="CloseCombatTechnique/primary_attribute[]"></a> `CloseCombatTechnique/primary_attribute[]`

- **Type:** <a href="#PrimaryAttribute">PrimaryAttribute</a>

---

### <a name="CloseCombatTechnique/translations[key]"></a> `CloseCombatTechnique/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the condition. | <a href="#CloseCombatTechnique/translations[key]/name">See details</a>
`special?` | Additional rules for the condition, if applicable. | <a href="#CloseCombatTechnique/translations[key]/special">See details</a>
`errata?` |  | <a href="#CloseCombatTechnique/translations[key]/errata">See details</a>

#### <a name="CloseCombatTechnique/translations[key]/name"></a> `name`

The name of the condition.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CloseCombatTechnique/translations[key]/special"></a> `special?`

Additional rules for the condition, if applicable.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="CloseCombatTechnique/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Parrying"></a> `Parrying`

Is parrying possible with this combat technique?

- **Type:** Union
- **Cases:** <a href="#Parrying'Possible">Parrying'Possible</a> | <a href="#Parrying'Impossible">Parrying'Impossible</a>

---

### <a name="Parrying'Possible"></a> `Parrying'Possible`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Parrying'Possible/tag">See details</a>

#### <a name="Parrying'Possible/tag"></a> `tag`

- **Constant:** `"Possible"`

---

### <a name="Parrying'Impossible"></a> `Parrying'Impossible`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Parrying'Impossible/tag">See details</a>

#### <a name="Parrying'Impossible/tag"></a> `tag`

- **Constant:** `"Impossible"`

---

### <a name="PrimaryAttribute"></a> `PrimaryAttribute`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`
