# Ranged Combat Technique

## Definitions

### <a name="RangedCombatTechnique"></a> Ranged Combat Technique (`RangedCombatTechnique`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The ranged combat technique's identifier. An unique, increasing integer. | <a href="#RangedCombatTechnique/id">See details</a>
`special` | Special rules for the combat technique that apply to all weapons in this category. | <a href="#RangedCombatTechnique/special">See details</a>
`primary_attribute` | The primary attribute(s). | <a href="#RangedCombatTechnique/primary_attribute">See details</a>
`breaking_point_rating` | The *Breaking Point Rating* of the respective combat technique. | <a href="#RangedCombatTechnique/breaking_point_rating">See details</a>
`improvement_cost` |  | <a href="#RangedCombatTechnique/improvement_cost">See details</a>
`src` |  | <a href="#RangedCombatTechnique/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#RangedCombatTechnique/translations">See details</a>

#### <a name="RangedCombatTechnique/id"></a> `id`

The ranged combat technique's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangedCombatTechnique/special"></a> `special`

Special rules for the combat technique that apply to all weapons in this category.

- **Type:** <a href="#RangedCombatTechniqueSpecialRules">RangedCombatTechniqueSpecialRules</a>

#### <a name="RangedCombatTechnique/primary_attribute"></a> `primary_attribute`

The primary attribute(s).

- **Type:** List
- **Items:** <a href="#RangedCombatTechnique/primary_attribute[]">RangedCombatTechnique/primary_attribute[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`
- **Unique Items:** Yes

#### <a name="RangedCombatTechnique/breaking_point_rating"></a> `breaking_point_rating`

The *Breaking Point Rating* of the respective combat technique.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RangedCombatTechnique/improvement_cost"></a> `improvement_cost`

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="RangedCombatTechnique/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="RangedCombatTechnique/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RangedCombatTechniqueTranslation">RangedCombatTechniqueTranslation</a>&gt;

---

### <a name="RangedCombatTechnique/primary_attribute[]"></a> `RangedCombatTechnique/primary_attribute[]`

- **Type:** <a href="./_SimpleReferences.md#AttributeReference">AttributeReference</a>

---

### <a name="RangedCombatTechniqueSpecialRules"></a> `RangedCombatTechniqueSpecialRules`

Special rules for the combat technique that apply to all weapons in this category.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`has_ammunition` |  | <a href="#RangedCombatTechniqueSpecialRules/has_ammunition">See details</a>

#### <a name="RangedCombatTechniqueSpecialRules/has_ammunition"></a> `has_ammunition`

- **Type:** Boolean

---

### <a name="RangedCombatTechniqueTranslation"></a> `RangedCombatTechniqueTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the condition. | <a href="#RangedCombatTechniqueTranslation/name">See details</a>
`special?` | Additional rules for the condition, if applicable. | <a href="#RangedCombatTechniqueTranslation/special">See details</a>
`errata?` |  | <a href="#RangedCombatTechniqueTranslation/errata">See details</a>

#### <a name="RangedCombatTechniqueTranslation/name"></a> `name`

The name of the condition.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RangedCombatTechniqueTranslation/special"></a> `special?`

Additional rules for the condition, if applicable.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="RangedCombatTechniqueTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
