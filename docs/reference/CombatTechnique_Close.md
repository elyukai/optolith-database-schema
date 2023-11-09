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

- **Type:** <a href="#CloseCombatTechniqueSpecialRules">CloseCombatTechniqueSpecialRules</a>

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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CloseCombatTechniqueTranslation">CloseCombatTechniqueTranslation</a>&gt;

---

### <a name="CloseCombatTechnique/primary_attribute[]"></a> `CloseCombatTechnique/primary_attribute[]`

- **Type:** <a href="./_SimpleReferences.md#AttributeReference">AttributeReference</a>

---

### <a name="CloseCombatTechniqueSpecialRules"></a> `CloseCombatTechniqueSpecialRules`

Special rules for the combat technique that apply to all weapons in this
category.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`can_parry` | Is parrying possible with this combat technique? | <a href="#CloseCombatTechniqueSpecialRules/can_parry">See details</a>
`has_damage_threshold` |  | <a href="#CloseCombatTechniqueSpecialRules/has_damage_threshold">See details</a>
`has_reach` |  | <a href="#CloseCombatTechniqueSpecialRules/has_reach">See details</a>
`has_length` |  | <a href="#CloseCombatTechniqueSpecialRules/has_length">See details</a>
`has_shield_size` |  | <a href="#CloseCombatTechniqueSpecialRules/has_shield_size">See details</a>

#### <a name="CloseCombatTechniqueSpecialRules/can_parry"></a> `can_parry`

Is parrying possible with this combat technique?

- **Type:** Boolean

#### <a name="CloseCombatTechniqueSpecialRules/has_damage_threshold"></a> `has_damage_threshold`

- **Type:** Boolean

#### <a name="CloseCombatTechniqueSpecialRules/has_reach"></a> `has_reach`

- **Type:** Boolean

#### <a name="CloseCombatTechniqueSpecialRules/has_length"></a> `has_length`

- **Type:** Boolean

#### <a name="CloseCombatTechniqueSpecialRules/has_shield_size"></a> `has_shield_size`

- **Type:** Boolean

---

### <a name="CloseCombatTechniqueTranslation"></a> `CloseCombatTechniqueTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the condition. | <a href="#CloseCombatTechniqueTranslation/name">See details</a>
`special?` | Additional rules for the condition, if applicable. | <a href="#CloseCombatTechniqueTranslation/special">See details</a>
`errata?` |  | <a href="#CloseCombatTechniqueTranslation/errata">See details</a>

#### <a name="CloseCombatTechniqueTranslation/name"></a> `name`

The name of the condition.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CloseCombatTechniqueTranslation/special"></a> `special?`

Additional rules for the condition, if applicable.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="CloseCombatTechniqueTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
