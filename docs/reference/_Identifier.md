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
