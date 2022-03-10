# [TITLE MISSING]

## Definitions

### <a name="ActivatableTag"></a> `ActivatableTag`

- **Possible values:** `"Advantage"`, `"Disadvantage"`, `"GeneralSpecialAbility"`, `"FatePointSpecialAbility"`, `"CombatSpecialAbility"`, `"MagicalSpecialAbility"`, `"StaffEnchantment"`, `"FamiliarSpecialAbility"`, `"KarmaSpecialAbility"`, `"ProtectiveWardingCircleSpecialAbility"`, `"CombatStyleSpecialAbility"`, `"AdvancedCombatSpecialAbility"`, `"CommandSpecialAbility"`, `"MagicStyleSpecialAbility"`, `"AdvancedMagicalSpecialAbility"`, `"SpellSwordEnchantment"`, `"DaggerRitual"`, `"InstrumentEnchantment"`, `"AttireEnchantment"`, `"OrbEnchantment"`, `"WandEnchantment"`, `"BrawlingSpecialAbility"`, `"AncestorGlyph"`, `"CeremonialItemSpecialAbility"`, `"Sermon"`, `"LiturgicalStyleSpecialAbility"`, `"AdvancedKarmaSpecialAbility"`, `"Vision"`, `"MagicalTradition"`, `"BlessedTradition"`, `"PactGift"`, `"SikaryanDrainSpecialAbility"`, `"LycantropicGift"`, `"SkillStyleSpecialAbility"`, `"AdvancedSkillSpecialAbility"`, `"ArcaneOrbEnchantment"`, `"CauldronEnchantment"`, `"FoolsHatEnchantment"`, `"ToyEnchantment"`, `"BowlEnchantment"`, `"FatePointSexSpecialAbility"`, `"SexSpecialAbility"`, `"WeaponEnchantment"`, `"SickleRitual"`, `"RingEnchantment"`, `"ChronicleEnchantment"`

---

### <a name="CombatRelatedSpecialAbilityTag"></a> `CombatRelatedSpecialAbilityTag`

- **Possible values:** `"CombatSpecialAbility"`, `"CombatStyleSpecialAbility"`, `"AdvancedCombatSpecialAbility"`, `"CommandSpecialAbility"`

---

### <a name="RatedTag"></a> `RatedTag`

- **Possible values:** `"Attribute"`, `"Skill"`, `"CloseCombatTechnique"`, `"RangedCombatTechnique"`, `"Spell"`, `"Ritual"`, `"LiturgicalChant"`, `"Ceremony"`

---

### <a name="AdvancedSpecialAbilityRestrictedOptionTag"></a> `AdvancedSpecialAbilityRestrictedOptionTag`

- **Possible values:** `"General"`, `"Element"`

---

### <a name="VolumePointsOptionReferenceTag"></a> `VolumePointsOptionReferenceTag`

- **Possible values:** `"General"`, `"AnimalShapeSize"`

---

### <a name="CombatTechniqueTag"></a> `CombatTechniqueTag`

- **Possible values:** `"CloseCombatTechnique"`, `"RangedCombatTechnique"`

---

### <a name="MagicalTraditionTag"></a> `MagicalTraditionTag`

- **Possible values:** `"MagicalTradition"`

---

### <a name="PatronTag"></a> `PatronTag`

- **Possible values:** `"Patron"`

---

### <a name="ExtensionRuleTag"></a> `ExtensionRuleTag`

- **Possible values:** `"FocusRule"`, `"OptionalRule"`

---

### <a name="SkillWithEnhancementsTag"></a> `SkillWithEnhancementsTag`

- **Possible values:** `"Spell"`, `"Ritual"`, `"LiturgicalChant"`, `"Ceremony"`

---

### <a name="RequirableSelectOptionTag"></a> `RequirableSelectOptionTag`

- **Possible values:** `"General"`, `"Skill"`, `"CloseCombatTechnique"`, `"RangedCombatTechnique"`

---

### <a name="ActivatableIdentifier"></a> `ActivatableIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ActivatableIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#ActivatableIdentifier/value">See details</a>

#### <a name="ActivatableIdentifier/tag"></a> `tag`

- **Type:** <a href="#ActivatableTag">ActivatableTag</a>

#### <a name="ActivatableIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CombatRelatedSpecialAbilityIdentifier"></a> `CombatRelatedSpecialAbilityIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatRelatedSpecialAbilityIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#CombatRelatedSpecialAbilityIdentifier/value">See details</a>

#### <a name="CombatRelatedSpecialAbilityIdentifier/tag"></a> `tag`

- **Type:** <a href="#CombatRelatedSpecialAbilityTag">CombatRelatedSpecialAbilityTag</a>

#### <a name="CombatRelatedSpecialAbilityIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RatedIdentifier"></a> `RatedIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#RatedIdentifier/value">See details</a>

#### <a name="RatedIdentifier/tag"></a> `tag`

- **Type:** <a href="#RatedTag">RatedTag</a>

#### <a name="RatedIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbilityRestrictedOptionIdentifier"></a> `AdvancedSpecialAbilityRestrictedOptionIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbilityRestrictedOptionIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#AdvancedSpecialAbilityRestrictedOptionIdentifier/value">See details</a>

#### <a name="AdvancedSpecialAbilityRestrictedOptionIdentifier/tag"></a> `tag`

- **Type:** <a href="#AdvancedSpecialAbilityRestrictedOptionTag">AdvancedSpecialAbilityRestrictedOptionTag</a>

#### <a name="AdvancedSpecialAbilityRestrictedOptionIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="VolumePointsOptionReferenceIdentifier"></a> `VolumePointsOptionReferenceIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VolumePointsOptionReferenceIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#VolumePointsOptionReferenceIdentifier/value">See details</a>

#### <a name="VolumePointsOptionReferenceIdentifier/tag"></a> `tag`

- **Type:** <a href="#VolumePointsOptionReferenceTag">VolumePointsOptionReferenceTag</a>

#### <a name="VolumePointsOptionReferenceIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CombatTechniqueIdentifier"></a> `CombatTechniqueIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatTechniqueIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#CombatTechniqueIdentifier/value">See details</a>

#### <a name="CombatTechniqueIdentifier/tag"></a> `tag`

- **Type:** <a href="#CombatTechniqueTag">CombatTechniqueTag</a>

#### <a name="CombatTechniqueIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="MagicalTraditionIdentifier"></a> `MagicalTraditionIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalTraditionIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#MagicalTraditionIdentifier/value">See details</a>

#### <a name="MagicalTraditionIdentifier/tag"></a> `tag`

- **Type:** <a href="#MagicalTraditionTag">MagicalTraditionTag</a>

#### <a name="MagicalTraditionIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PatronIdentifier"></a> `PatronIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PatronIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#PatronIdentifier/value">See details</a>

#### <a name="PatronIdentifier/tag"></a> `tag`

- **Type:** <a href="#PatronTag">PatronTag</a>

#### <a name="PatronIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ExtensionRuleIdentifier"></a> `ExtensionRuleIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExtensionRuleIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#ExtensionRuleIdentifier/value">See details</a>

#### <a name="ExtensionRuleIdentifier/tag"></a> `tag`

- **Type:** <a href="#ExtensionRuleTag">ExtensionRuleTag</a>

#### <a name="ExtensionRuleIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillWithEnhancementsIdentifier"></a> `SkillWithEnhancementsIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillWithEnhancementsIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#SkillWithEnhancementsIdentifier/value">See details</a>

#### <a name="SkillWithEnhancementsIdentifier/tag"></a> `tag`

- **Type:** <a href="#SkillWithEnhancementsTag">SkillWithEnhancementsTag</a>

#### <a name="SkillWithEnhancementsIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="RequirableSelectOptionIdentifier"></a> `RequirableSelectOptionIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RequirableSelectOptionIdentifier/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#RequirableSelectOptionIdentifier/value">See details</a>

#### <a name="RequirableSelectOptionIdentifier/tag"></a> `tag`

- **Type:** <a href="#RequirableSelectOptionTag">RequirableSelectOptionTag</a>

#### <a name="RequirableSelectOptionIdentifier/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="OneOrManyNumericIdentifiers"></a> `OneOrManyNumericIdentifiers`

- **Type:** Union
- **Cases:** <a href="#OneOrManyNumericIdentifiers'OneNumericIdentifier">OneOrManyNumericIdentifiers'OneNumericIdentifier</a> | <a href="#OneOrManyNumericIdentifiers'ManyNumericIdentifiers">OneOrManyNumericIdentifiers'ManyNumericIdentifiers</a>

---

### <a name="OneOrManyNumericIdentifiers'OneNumericIdentifier"></a> `OneOrManyNumericIdentifiers'OneNumericIdentifier`

- **Type:** <a href="#OneNumericIdentifier">OneNumericIdentifier</a>

---

### <a name="OneOrManyNumericIdentifiers'ManyNumericIdentifiers"></a> `OneOrManyNumericIdentifiers'ManyNumericIdentifiers`

- **Type:** <a href="#ManyNumericIdentifiers">ManyNumericIdentifiers</a>

---

### <a name="OneNumericIdentifier"></a> `OneNumericIdentifier`

- **Type:** Number
- **Minimum:** `1`

---

### <a name="ManyNumericIdentifiers"></a> `ManyNumericIdentifiers`

- **Type:** List
- **Items:** <a href="#ManyNumericIdentifiers[]">ManyNumericIdentifiers[]</a>
- **Minimum Items:** `2`

---

### <a name="ManyNumericIdentifiers[]"></a> `ManyNumericIdentifiers[]`

- **Type:** <a href="#OneNumericIdentifier">OneNumericIdentifier</a>
