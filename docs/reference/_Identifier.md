# [TITLE MISSING]

## Definitions

### <a name="Identifier/Tag/Activatable"></a> `Identifier/Tag/Activatable`

- **Possible values:** `"Advantage"`, `"Disadvantage"`, `"GeneralSpecialAbility"`, `"FatePointSpecialAbility"`, `"CombatSpecialAbility"`, `"MagicalSpecialAbility"`, `"StaffEnchantment"`, `"FamiliarSpecialAbility"`, `"KarmaSpecialAbility"`, `"ProtectiveWardingCircleSpecialAbility"`, `"CombatStyleSpecialAbility"`, `"AdvancedCombatSpecialAbility"`, `"CommandSpecialAbility"`, `"MagicStyleSpecialAbility"`, `"AdvancedMagicalSpecialAbility"`, `"SpellSwordEnchantment"`, `"DaggerRitual"`, `"InstrumentEnchantment"`, `"AttireEnchantment"`, `"OrbEnchantment"`, `"WandEnchantment"`, `"BrawlingSpecialAbility"`, `"AncestorGlyph"`, `"CeremonialItemSpecialAbility"`, `"Sermon"`, `"LiturgicalStyleSpecialAbility"`, `"AdvancedKarmaSpecialAbility"`, `"Vision"`, `"MagicalTradition"`, `"BlessedTradition"`, `"PactGift"`, `"SikaryanDrainSpecialAbility"`, `"LycantropicGift"`, `"SkillStyleSpecialAbility"`, `"AdvancedSkillSpecialAbility"`, `"ArcaneOrbEnchantment"`, `"CauldronEnchantment"`, `"FoolsHatEnchantment"`, `"ToyEnchantment"`, `"BowlEnchantment"`, `"FatePointSexSpecialAbility"`, `"SexSpecialAbility"`, `"WeaponEnchantment"`, `"SickleRitual"`, `"RingEnchantment"`, `"ChronicleEnchantment"`

---

### <a name="Identifier/Tag/Rated"></a> `Identifier/Tag/Rated`

- **Possible values:** `"Attribute"`, `"Skill"`, `"CloseCombatTechnique"`, `"RangedCombatTechnique"`, `"Spell"`, `"Ritual"`, `"LiturgicalChant"`, `"Ceremony"`

---

### <a name="Identifier/Tag/AdvancedSpecialAbilityRestrictedOption"></a> `Identifier/Tag/AdvancedSpecialAbilityRestrictedOption`

- **Possible values:** `"General"`, `"Element"`

---

### <a name="Identifier/Tag/CombatTechnique"></a> `Identifier/Tag/CombatTechnique`

- **Possible values:** `"CloseCombatTechnique"`, `"RangedCombatTechnique"`

---

### <a name="Identifier/Group/Activatable"></a> `Identifier/Group/Activatable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Group/Activatable/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#Identifier/Group/Activatable/value">See details</a>

#### <a name="Identifier/Group/Activatable/tag"></a> `tag`

- **Type:** <a href="#Identifier/Tag/Activatable">Identifier/Tag/Activatable</a>

#### <a name="Identifier/Group/Activatable/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

---

### <a name="Identifier/Group/Rated"></a> `Identifier/Group/Rated`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Group/Rated/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#Identifier/Group/Rated/value">See details</a>

#### <a name="Identifier/Group/Rated/tag"></a> `tag`

- **Type:** <a href="#Identifier/Tag/Rated">Identifier/Tag/Rated</a>

#### <a name="Identifier/Group/Rated/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

---

### <a name="Identifier/Group/AdvancedSpecialAbilityRestrictedOption"></a> `Identifier/Group/AdvancedSpecialAbilityRestrictedOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Group/AdvancedSpecialAbilityRestrictedOption/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#Identifier/Group/AdvancedSpecialAbilityRestrictedOption/value">See details</a>

#### <a name="Identifier/Group/AdvancedSpecialAbilityRestrictedOption/tag"></a> `tag`

- **Type:** <a href="#Identifier/Tag/AdvancedSpecialAbilityRestrictedOption">Identifier/Tag/AdvancedSpecialAbilityRestrictedOption</a>

#### <a name="Identifier/Group/AdvancedSpecialAbilityRestrictedOption/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

---

### <a name="Identifier/Group/CombatTechnique"></a> `Identifier/Group/CombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Identifier/Group/CombatTechnique/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#Identifier/Group/CombatTechnique/value">See details</a>

#### <a name="Identifier/Group/CombatTechnique/tag"></a> `tag`

- **Type:** <a href="#Identifier/Tag/CombatTechnique">Identifier/Tag/CombatTechnique</a>

#### <a name="Identifier/Group/CombatTechnique/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`
