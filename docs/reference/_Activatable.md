# Activatable

General type specifications used by multiple activatable entries.

## Definitions

### <a name="Id"></a> `Id`

The activatable entry's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Name"></a> `Name`

The name of the activatable entry.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="NameInLibrary"></a> `NameInLibrary`

The full name of the entry as stated in the sources. Only use when `name`
needs to be different from full name for text generation purposes.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Levels"></a> `Levels`

Number of available levels.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="Maximum"></a> `Maximum`

- **Constant:** `""`

---

### <a name="Options"></a> `Options`

- **Constant:** `""`

---

### <a name="Rules"></a> `Rules`

The rule text.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect"></a> `Effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="CombatSpecialAbilityType"></a> `CombatSpecialAbilityType`

The definition of how the combat special ability can be used in combat.

- **Type:** Union
- **Cases:** <a href="#CombatSpecialAbilityType'Passive">CombatSpecialAbilityType'Passive</a> | <a href="#CombatSpecialAbilityType'BasicManeuver">CombatSpecialAbilityType'BasicManeuver</a> | <a href="#CombatSpecialAbilityType'SpecialManeuver">CombatSpecialAbilityType'SpecialManeuver</a>

---

### <a name="CombatSpecialAbilityType'Passive"></a> `CombatSpecialAbilityType'Passive`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatSpecialAbilityType'Passive/tag">See details</a>

#### <a name="CombatSpecialAbilityType'Passive/tag"></a> `tag`

- **Constant:** `"Passive"`

---

### <a name="CombatSpecialAbilityType'BasicManeuver"></a> `CombatSpecialAbilityType'BasicManeuver`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatSpecialAbilityType'BasicManeuver/tag">See details</a>

#### <a name="CombatSpecialAbilityType'BasicManeuver/tag"></a> `tag`

- **Constant:** `"BasicManeuver"`

---

### <a name="CombatSpecialAbilityType'SpecialManeuver"></a> `CombatSpecialAbilityType'SpecialManeuver`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatSpecialAbilityType'SpecialManeuver/tag">See details</a>

#### <a name="CombatSpecialAbilityType'SpecialManeuver/tag"></a> `tag`

- **Constant:** `"SpecialManeuver"`

---

### <a name="SkillApplications"></a> `SkillApplications`

Registers new skill applications, which get enabled once this entry is
activated. It specifies an entry-unique identifier and the skill it belongs
to. A translation can be left out if its name equals the name of the origin
activatable entry.

- **Type:** List
- **Items:** <a href="#SkillApplications[]">SkillApplications[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillApplications[]"></a> `SkillApplications[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The application's identifier. An entry-unique, increasing integer. | <a href="#SkillApplications[]/id">See details</a>
`skill` | The skill(s) this application belongs to. | <a href="#SkillApplications[]/skill">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillApplications[]/translations">See details</a>

#### <a name="SkillApplications[]/id"></a> `id`

The application's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillApplications[]/skill"></a> `skill`

The skill(s) this application belongs to.

- **Type:** Union
- **Cases:** <a href="#SkillApplications[]/skill'Single">SkillApplications[]/skill'Single</a> | <a href="#SkillApplications[]/skill'Multiple">SkillApplications[]/skill'Multiple</a>

#### <a name="SkillApplications[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillApplications[]/translations[key]">SkillApplications[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillApplications[]/skill'Single"></a> `SkillApplications[]/skill'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillApplications[]/skill'Single/tag">See details</a>
`id` | The referenced skill's identifier. | <a href="#SkillApplications[]/skill'Single/id">See details</a>

#### <a name="SkillApplications[]/skill'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SkillApplications[]/skill'Single/id"></a> `id`

The referenced skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillApplications[]/skill'Multiple"></a> `SkillApplications[]/skill'Multiple`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillApplications[]/skill'Multiple/tag">See details</a>
`list` | The skills this application belongs to. | <a href="#SkillApplications[]/skill'Multiple/list">See details</a>
`required_skill_rating?` | If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite. | <a href="#SkillApplications[]/skill'Multiple/required_skill_rating">See details</a>

#### <a name="SkillApplications[]/skill'Multiple/tag"></a> `tag`

- **Constant:** `"Multiple"`

#### <a name="SkillApplications[]/skill'Multiple/list"></a> `list`

The skills this application belongs to.

- **Type:** List
- **Items:** <a href="#SkillApplications[]/skill'Multiple/list[]">SkillApplications[]/skill'Multiple/list[]</a>
- **Minimum Items:** `2`

#### <a name="SkillApplications[]/skill'Multiple/required_skill_rating"></a> `required_skill_rating?`

If an application applies to multiple skills, it may need to ensure the
respective skill is on a certain skill rating if the activatable entry
cannot ensure this prerequisite.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillApplications[]/skill'Multiple/list[]"></a> `SkillApplications[]/skill'Multiple/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The referenced skill's identifier. | <a href="#SkillApplications[]/skill'Multiple/list[]/id">See details</a>

#### <a name="SkillApplications[]/skill'Multiple/list[]/id"></a> `id`

The referenced skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillApplications[]/translations[key]"></a> `SkillApplications[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the application if different from the activatable entry's name. | <a href="#SkillApplications[]/translations[key]/name">See details</a>

#### <a name="SkillApplications[]/translations[key]/name"></a> `name`

The name of the application if different from the activatable entry's
name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="SkillUses"></a> `SkillUses`

Registers uses, which get enabled once this entry is activated. It specifies
an entry-unique identifier and the skill it belongs to. A translation can be
left out if its name equals the name of the origin activatable entry.

- **Type:** List
- **Items:** <a href="#SkillUses[]">SkillUses[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillUses[]"></a> `SkillUses[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The use's identifier. An entry-unique, increasing integer. | <a href="#SkillUses[]/id">See details</a>
`skill` | The skill(s) this use belongs to. | <a href="#SkillUses[]/skill">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillUses[]/translations">See details</a>

#### <a name="SkillUses[]/id"></a> `id`

The use's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillUses[]/skill"></a> `skill`

The skill(s) this use belongs to.

- **Type:** Union
- **Cases:** <a href="#SkillUses[]/skill'Single">SkillUses[]/skill'Single</a> | <a href="#SkillUses[]/skill'Multiple">SkillUses[]/skill'Multiple</a>

#### <a name="SkillUses[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillUses[]/translations[key]">SkillUses[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillUses[]/skill'Single"></a> `SkillUses[]/skill'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillUses[]/skill'Single/tag">See details</a>
`id` | The referenced skill's identifier. | <a href="#SkillUses[]/skill'Single/id">See details</a>

#### <a name="SkillUses[]/skill'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SkillUses[]/skill'Single/id"></a> `id`

The referenced skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillUses[]/skill'Multiple"></a> `SkillUses[]/skill'Multiple`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillUses[]/skill'Multiple/tag">See details</a>
`list` | The skills this use belongs to. | <a href="#SkillUses[]/skill'Multiple/list">See details</a>

#### <a name="SkillUses[]/skill'Multiple/tag"></a> `tag`

- **Constant:** `"Multiple"`

#### <a name="SkillUses[]/skill'Multiple/list"></a> `list`

The skills this use belongs to.

- **Type:** List
- **Items:** <a href="#SkillUses[]/skill'Multiple/list[]">SkillUses[]/skill'Multiple/list[]</a>
- **Minimum Items:** `2`

---

### <a name="SkillUses[]/skill'Multiple/list[]"></a> `SkillUses[]/skill'Multiple/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The referenced skill's identifier. | <a href="#SkillUses[]/skill'Multiple/list[]/id">See details</a>

#### <a name="SkillUses[]/skill'Multiple/list[]/id"></a> `id`

The referenced skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillUses[]/translations[key]"></a> `SkillUses[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the use if different from the activatable entry's name. | <a href="#SkillUses[]/translations[key]/name">See details</a>

#### <a name="SkillUses[]/translations[key]/name"></a> `name`

The name of the use if different from the activatable entry's name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Penalty"></a> `Penalty`

The penalty the special ability gives when used.

- **Type:** Union
- **Cases:** <a href="#Penalty'Single">Penalty'Single</a> | <a href="#Penalty'ByHandedness">Penalty'ByHandedness</a> | <a href="#Penalty'ByActivation">Penalty'ByActivation</a> | <a href="#Penalty'Selection">Penalty'Selection</a> | <a href="#Penalty'ByLevel">Penalty'ByLevel</a> | <a href="#Penalty'ByAttack">Penalty'ByAttack</a> | <a href="#Penalty'DependsOnHitZone">Penalty'DependsOnHitZone</a>

---

### <a name="Penalty'Single"></a> `Penalty'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'Single/tag">See details</a>
`value` | The penalty value. | <a href="#Penalty'Single/value">See details</a>
`applies_to_parry?` | Set to `true` if the penalty applies to the parry instead of the attack. | <a href="#Penalty'Single/applies_to_parry">See details</a>

#### <a name="Penalty'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="Penalty'Single/value"></a> `value`

The penalty value.

- **Type:** Integer

#### <a name="Penalty'Single/applies_to_parry"></a> `applies_to_parry?`

Set to `true` if the penalty applies to the parry instead of the attack.

- **Constant:** `true`

---

### <a name="Penalty'ByHandedness"></a> `Penalty'ByHandedness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByHandedness/tag">See details</a>
`one_handed` | The penalty value for one-handed weapons. | <a href="#Penalty'ByHandedness/one_handed">See details</a>
`two_handed` | The penalty value for two-handed weapons. | <a href="#Penalty'ByHandedness/two_handed">See details</a>
`applies_to_parry?` | Set to `true` if the penalty applies to the parry instead of the attack. | <a href="#Penalty'ByHandedness/applies_to_parry">See details</a>

#### <a name="Penalty'ByHandedness/tag"></a> `tag`

- **Constant:** `"ByHandedness"`

#### <a name="Penalty'ByHandedness/one_handed"></a> `one_handed`

The penalty value for one-handed weapons.

- **Type:** Integer

#### <a name="Penalty'ByHandedness/two_handed"></a> `two_handed`

The penalty value for two-handed weapons.

- **Type:** Integer

#### <a name="Penalty'ByHandedness/applies_to_parry"></a> `applies_to_parry?`

Set to `true` if the penalty applies to the parry instead of the attack.

- **Constant:** `true`

---

### <a name="Penalty'ByActivation"></a> `Penalty'ByActivation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByActivation/tag">See details</a>
`active` | The penalty value if the entry has been bought by the character. | <a href="#Penalty'ByActivation/active">See details</a>
`inactive` | The penalty value if the entry has not been bought by the character. | <a href="#Penalty'ByActivation/inactive">See details</a>
`applies_to_parry?` | Set to `true` if the penalty applies to the parry instead of the attack. | <a href="#Penalty'ByActivation/applies_to_parry">See details</a>

#### <a name="Penalty'ByActivation/tag"></a> `tag`

- **Constant:** `"ByActivation"`

#### <a name="Penalty'ByActivation/active"></a> `active`

The penalty value if the entry has been bought by the character.

- **Type:** Integer

#### <a name="Penalty'ByActivation/inactive"></a> `inactive`

The penalty value if the entry has not been bought by the character.

- **Type:** Integer

#### <a name="Penalty'ByActivation/applies_to_parry"></a> `applies_to_parry?`

Set to `true` if the penalty applies to the parry instead of the attack.

- **Constant:** `true`

---

### <a name="Penalty'Selection"></a> `Penalty'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'Selection/tag">See details</a>
`options` |  | <a href="#Penalty'Selection/options">See details</a>

#### <a name="Penalty'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="Penalty'Selection/options"></a> `options`

- **Type:** Union
- **Cases:** <a href="#Penalty'Selection/options'Specific">Penalty'Selection/options'Specific</a> | <a href="#Penalty'Selection/options'Range">Penalty'Selection/options'Range</a>

---

### <a name="Penalty'Selection/options'Specific"></a> `Penalty'Selection/options'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'Selection/options'Specific/tag">See details</a>
`list` | The list of specific penalty options. | <a href="#Penalty'Selection/options'Specific/list">See details</a>

#### <a name="Penalty'Selection/options'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="Penalty'Selection/options'Specific/list"></a> `list`

The list of specific penalty options.

- **Type:** List
- **Items:** <a href="#Penalty'Selection/options'Specific/list[]">Penalty'Selection/options'Specific/list[]</a>
- **Minimum Items:** `2`
- **Unique Items:** Yes

---

### <a name="Penalty'Selection/options'Specific/list[]"></a> `Penalty'Selection/options'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value. | <a href="#Penalty'Selection/options'Specific/list[]/value">See details</a>

#### <a name="Penalty'Selection/options'Specific/list[]/value"></a> `value`

The penalty value.

- **Type:** Integer

---

### <a name="Penalty'Selection/options'Range"></a> `Penalty'Selection/options'Range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'Selection/options'Range/tag">See details</a>
`minimum` | The minimum penalty value. | <a href="#Penalty'Selection/options'Range/minimum">See details</a>
`maximum` | The maximum penalty value. | <a href="#Penalty'Selection/options'Range/maximum">See details</a>

#### <a name="Penalty'Selection/options'Range/tag"></a> `tag`

- **Constant:** `"Range"`

#### <a name="Penalty'Selection/options'Range/minimum"></a> `minimum`

The minimum penalty value.

- **Type:** Integer

#### <a name="Penalty'Selection/options'Range/maximum"></a> `maximum`

The maximum penalty value.

- **Type:** Integer

---

### <a name="Penalty'ByLevel"></a> `Penalty'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByLevel/tag">See details</a>
`levels` | A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on. | <a href="#Penalty'ByLevel/levels">See details</a>
`external_id?` | The identifier of the combat-related special ability of which the level defines the penalty instead. | <a href="#Penalty'ByLevel/external_id">See details</a>

#### <a name="Penalty'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="Penalty'ByLevel/levels"></a> `levels`

A continuous range of penalties for each level. The first element is the
penalty for the first level, the second element is the penalty for the
second level, and so on.

- **Type:** List
- **Items:** <a href="#Penalty'ByLevel/levels[]">Penalty'ByLevel/levels[]</a>
- **Minimum Items:** `2`

#### <a name="Penalty'ByLevel/external_id"></a> `external_id?`

The identifier of the combat-related special ability of which the level
defines the penalty instead.

- **Type:** <a href="./_Identifier.md#Identifier/Group/CombatRelatedSpecialAbility">Identifier/Group/CombatRelatedSpecialAbility</a>

---

### <a name="Penalty'ByLevel/levels[]"></a> `Penalty'ByLevel/levels[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value for this level. | <a href="#Penalty'ByLevel/levels[]/value">See details</a>

#### <a name="Penalty'ByLevel/levels[]/value"></a> `value`

The penalty value for this level.

- **Type:** Integer

---

### <a name="Penalty'ByAttack"></a> `Penalty'ByAttack`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByAttack/tag">See details</a>
`list` | A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on. | <a href="#Penalty'ByAttack/list">See details</a>
`initial_order?` | The order of the first element in the `list` of penalties. | <a href="#Penalty'ByAttack/initial_order">See details</a>
`attack_replacement?` | Set if a predefined different word should be used instead of the word `attack` for display purposes. | <a href="#Penalty'ByAttack/attack_replacement">See details</a>

#### <a name="Penalty'ByAttack/tag"></a> `tag`

- **Constant:** `"ByAttack"`

#### <a name="Penalty'ByAttack/list"></a> `list`

A list of penalties for subsequent attacks. The first element is the
penalty for the first attack, the second element is the penalty for the
second attack, and so on. The order of the first element may be changed
using `initial_order`, so that e.g. if set to `2`, the first element is
the penalty for the second attack, the second element is the penalty for
the third attack, and so on.

- **Type:** List
- **Items:** <a href="#Penalty'ByAttack/list[]">Penalty'ByAttack/list[]</a>
- **Minimum Items:** `1`

#### <a name="Penalty'ByAttack/initial_order"></a> `initial_order?`

The order of the first element in the `list` of penalties.

- **Type:** Number

#### <a name="Penalty'ByAttack/attack_replacement"></a> `attack_replacement?`

Set if a predefined different word should be used instead of the word
`attack` for display purposes.

- **Type:** Union
- **Cases:** <a href="#Penalty'ByAttack/attack_replacement'Throw">Penalty'ByAttack/attack_replacement'Throw</a>

---

### <a name="Penalty'ByAttack/list[]"></a> `Penalty'ByAttack/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value for this order. | <a href="#Penalty'ByAttack/list[]/value">See details</a>

#### <a name="Penalty'ByAttack/list[]/value"></a> `value`

The penalty value for this order.

- **Type:** Integer

---

### <a name="Penalty'ByAttack/attack_replacement'Throw"></a> `Penalty'ByAttack/attack_replacement'Throw`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByAttack/attack_replacement'Throw/tag">See details</a>

#### <a name="Penalty'ByAttack/attack_replacement'Throw/tag"></a> `tag`

- **Constant:** `"Throw"`

---

### <a name="Penalty'DependsOnHitZone"></a> `Penalty'DependsOnHitZone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'DependsOnHitZone/tag">See details</a>

#### <a name="Penalty'DependsOnHitZone/tag"></a> `tag`

- **Constant:** `"DependsOnHitZone"`

---

### <a name="ArcaneEnergyCost"></a> `ArcaneEnergyCost`

The AE Cost.

- **Constant:** `""`

---

### <a name="Volume"></a> `Volume`

The volume points the enchantment needs.

- **Constant:** `""`

---

### <a name="BindingCost"></a> `BindingCost`

The binding cost for an enchantment.

- **Constant:** `""`

---

### <a name="Property"></a> `Property`

The magic property's identifier. `DependingOnProperty` can only be used if
the special ability has an option to select a property.

- **Type:** Union
- **Cases:** <a href="#Property'DependingOnProperty">Property'DependingOnProperty</a> | <a href="#Property'Fixed">Property'Fixed</a>

---

### <a name="Property'DependingOnProperty"></a> `Property'DependingOnProperty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Property'DependingOnProperty/tag">See details</a>

#### <a name="Property'DependingOnProperty/tag"></a> `tag`

- **Constant:** `"DependingOnProperty"`

---

### <a name="Property'Fixed"></a> `Property'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Property'Fixed/tag">See details</a>
`id` | The property's identifier. | <a href="#Property'Fixed/id">See details</a>

#### <a name="Property'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Property'Fixed/id"></a> `id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Aspect"></a> `Aspect`

The blessed aspect's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbility"></a> `AdvancedSpecialAbility`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#AdvancedSpecialAbility'General">AdvancedSpecialAbility'General</a> | <a href="#AdvancedSpecialAbility'RestrictOptions">AdvancedSpecialAbility'RestrictOptions</a> | <a href="#AdvancedSpecialAbility'OneOf">AdvancedSpecialAbility'OneOf</a> | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption">AdvancedSpecialAbility'DeriveFromExternalOption</a>

---

### <a name="AdvancedSpecialAbility'General"></a> `AdvancedSpecialAbility'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbility'General/tag">See details</a>
`id` | The advanced special ability's numeric identifier. | <a href="#AdvancedSpecialAbility'General/id">See details</a>

#### <a name="AdvancedSpecialAbility'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="AdvancedSpecialAbility'General/id"></a> `id`

The advanced special ability's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbility'RestrictOptions"></a> `AdvancedSpecialAbility'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbility'RestrictOptions/tag">See details</a>
`id` | The advanced special ability's numeric identifier. | <a href="#AdvancedSpecialAbility'RestrictOptions/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#AdvancedSpecialAbility'RestrictOptions/option">See details</a>

#### <a name="AdvancedSpecialAbility'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="AdvancedSpecialAbility'RestrictOptions/id"></a> `id`

The advanced special ability's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AdvancedSpecialAbility'RestrictOptions/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#AdvancedSpecialAbility'RestrictOptions/option[]">AdvancedSpecialAbility'RestrictOptions/option[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvancedSpecialAbility'RestrictOptions/option[]"></a> `AdvancedSpecialAbility'RestrictOptions/option[]`

- **Type:** <a href="./_Identifier.md#Identifier/Group/AdvancedSpecialAbilityRestrictedOption">Identifier/Group/AdvancedSpecialAbilityRestrictedOption</a>

---

### <a name="AdvancedSpecialAbility'OneOf"></a> `AdvancedSpecialAbility'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbility'OneOf/tag">See details</a>
`options` | The possible advanced special abilities. | <a href="#AdvancedSpecialAbility'OneOf/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose on when buying the special ability? Otherwise the decision can be made later. | <a href="#AdvancedSpecialAbility'OneOf/is_selection_required_on_purchase">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#AdvancedSpecialAbility'OneOf/option">See details</a>
`display_option?` |  | <a href="#AdvancedSpecialAbility'OneOf/display_option">See details</a>

#### <a name="AdvancedSpecialAbility'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="AdvancedSpecialAbility'OneOf/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#AdvancedSpecialAbility'OneOf/options">Object</a>

#### <a name="AdvancedSpecialAbility'OneOf/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose on when buying the special ability? Otherwise the
decision can be made later.

- **Type:** Boolean

#### <a name="AdvancedSpecialAbility'OneOf/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#AdvancedSpecialAbility'OneOf/option[]">AdvancedSpecialAbility'OneOf/option[]</a>
- **Minimum Items:** `1`

#### <a name="AdvancedSpecialAbility'OneOf/display_option"></a> `display_option?`

- **Type:** <a href="./_Prerequisite.md#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

---

### <a name="AdvancedSpecialAbility'OneOf/options"></a> `AdvancedSpecialAbility'OneOf/options`

The possible advanced special abilities.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability's numeric identifier. | <a href="#AdvancedSpecialAbility'OneOf/options/id">See details</a>

#### <a name="AdvancedSpecialAbility'OneOf/options/id"></a> `id`

The advanced special ability's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbility'OneOf/option[]"></a> `AdvancedSpecialAbility'OneOf/option[]`

- **Type:** <a href="./_Identifier.md#Identifier/Group/AdvancedSpecialAbilityRestrictedOption">Identifier/Group/AdvancedSpecialAbilityRestrictedOption</a>

---

### <a name="AdvancedSpecialAbility'DeriveFromExternalOption"></a> `AdvancedSpecialAbility'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/tag">See details</a>
`external_entry` | The possible advanced special abilities. | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/external_entry">See details</a>
`mappings` |  | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/mappings">See details</a>
`display_option?` |  | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/display_option">See details</a>
`is_selection_required_on_purchase` | Do have to choose on when buying the special ability? Otherwise the decision can be made later. | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/is_selection_required_on_purchase">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/option">See details</a>

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="#AdvancedSpecialAbilityDerivedExternalEntryId">AdvancedSpecialAbilityDerivedExternalEntryId</a>

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/mappings"></a> `mappings`

- **Type:** List
- **Items:** <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]">AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]</a>
- **Minimum Items:** `0`

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/display_option"></a> `display_option?`

- **Type:** <a href="./_Prerequisite.md#Prerequisite/Single/DisplayOption/T">Prerequisite/Single/DisplayOption/T</a>

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose on when buying the special ability? Otherwise the
decision can be made later.

- **Type:** Boolean

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/option[]">AdvancedSpecialAbility'DeriveFromExternalOption/option[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]"></a> `AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced">See details</a>

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="#AdvancedSpecialAbilityDerivedExternalEntryOptionId">AdvancedSpecialAbilityDerivedExternalEntryOptionId</a>

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced">Object</a>

---

### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced"></a> `AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced`

The advanced special ability's identifier.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability's numeric identifier. | <a href="#AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced/id">See details</a>

#### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/mappings[]/to_advanced/id"></a> `id`

The advanced special ability's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbility'DeriveFromExternalOption/option[]"></a> `AdvancedSpecialAbility'DeriveFromExternalOption/option[]`

- **Type:** <a href="./_Identifier.md#Identifier/Group/AdvancedSpecialAbilityRestrictedOption">Identifier/Group/AdvancedSpecialAbilityRestrictedOption</a>

---

### <a name="AdvancedSpecialAbilityDerivedExternalEntryId"></a> `AdvancedSpecialAbilityDerivedExternalEntryId`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbilityDerivedExternalEntryId/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#AdvancedSpecialAbilityDerivedExternalEntryId/value">See details</a>

#### <a name="AdvancedSpecialAbilityDerivedExternalEntryId/tag"></a> `tag`

- **Constant:** `"MagicalTradition"`

#### <a name="AdvancedSpecialAbilityDerivedExternalEntryId/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbilityDerivedExternalEntryOptionId"></a> `AdvancedSpecialAbilityDerivedExternalEntryOptionId`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvancedSpecialAbilityDerivedExternalEntryOptionId/tag">See details</a>
`value` | The referenced entry's numeric identifier. | <a href="#AdvancedSpecialAbilityDerivedExternalEntryOptionId/value">See details</a>

#### <a name="AdvancedSpecialAbilityDerivedExternalEntryOptionId/tag"></a> `tag`

- **Constant:** `"Patron"`

#### <a name="AdvancedSpecialAbilityDerivedExternalEntryOptionId/value"></a> `value`

The referenced entry's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdvancedSpecialAbilities"></a> `AdvancedSpecialAbilities`

The Advanced Special Abilities for the respective Style Special Ability.
Sometimes, only a specific select option or a set of select options of an
entry is allowed, which can be modelled by the option property. It can also
be that you can choose from a set of special abilities, but then you can't
specify an option.

- **Type:** Tuple
- **Items:** [<a href="AdvancedSpecialAbilities[0]">AdvancedSpecialAbilities[0]</a>, <a href="AdvancedSpecialAbilities[1]">AdvancedSpecialAbilities[1]</a>, <a href="AdvancedSpecialAbilities[2]">AdvancedSpecialAbilities[2]</a>]

---

### <a name="AdvancedSpecialAbilities[0]"></a> `AdvancedSpecialAbilities[0]`

- **Type:** <a href="#AdvancedSpecialAbility">AdvancedSpecialAbility</a>

---

### <a name="AdvancedSpecialAbilities[1]"></a> `AdvancedSpecialAbilities[1]`

- **Type:** <a href="#AdvancedSpecialAbility">AdvancedSpecialAbility</a>

---

### <a name="AdvancedSpecialAbilities[2]"></a> `AdvancedSpecialAbilities[2]`

- **Type:** <a href="#AdvancedSpecialAbility">AdvancedSpecialAbility</a>

---

### <a name="ApplicableCombatTechniques"></a> `ApplicableCombatTechniques`

- **Type:** Union
- **Cases:** <a href="#ApplicableCombatTechniques'None">ApplicableCombatTechniques'None</a> | <a href="#ApplicableCombatTechniques'DependingOnCombatStyle">ApplicableCombatTechniques'DependingOnCombatStyle</a> | <a href="#ApplicableCombatTechniques'All">ApplicableCombatTechniques'All</a> | <a href="#ApplicableCombatTechniques'AllClose">ApplicableCombatTechniques'AllClose</a> | <a href="#ApplicableCombatTechniques'AllRanged">ApplicableCombatTechniques'AllRanged</a> | <a href="#ApplicableCombatTechniques'Specific">ApplicableCombatTechniques'Specific</a>

---

### <a name="ApplicableCombatTechniques'None"></a> `ApplicableCombatTechniques'None`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'None/tag">See details</a>

#### <a name="ApplicableCombatTechniques'None/tag"></a> `tag`

- **Constant:** `"None"`

---

### <a name="ApplicableCombatTechniques'DependingOnCombatStyle"></a> `ApplicableCombatTechniques'DependingOnCombatStyle`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'DependingOnCombatStyle/tag">See details</a>

#### <a name="ApplicableCombatTechniques'DependingOnCombatStyle/tag"></a> `tag`

- **Constant:** `"DependingOnCombatStyle"`

---

### <a name="ApplicableCombatTechniques'All"></a> `ApplicableCombatTechniques'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'All/tag">See details</a>
`restrictions?` |  | <a href="#ApplicableCombatTechniques'All/restrictions">See details</a>

#### <a name="ApplicableCombatTechniques'All/tag"></a> `tag`

- **Constant:** `"All"`

#### <a name="ApplicableCombatTechniques'All/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#ApplicableCombatTechniques'All/restrictions[]">ApplicableCombatTechniques'All/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="ApplicableCombatTechniques'All/restrictions[]"></a> `ApplicableCombatTechniques'All/restrictions[]`

- **Type:** <a href="#ApplicableAllCombatTechniquesRestriction">ApplicableAllCombatTechniquesRestriction</a>

---

### <a name="ApplicableCombatTechniques'AllClose"></a> `ApplicableCombatTechniques'AllClose`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'AllClose/tag">See details</a>
`restrictions?` |  | <a href="#ApplicableCombatTechniques'AllClose/restrictions">See details</a>

#### <a name="ApplicableCombatTechniques'AllClose/tag"></a> `tag`

- **Constant:** `"AllClose"`

#### <a name="ApplicableCombatTechniques'AllClose/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#ApplicableCombatTechniques'AllClose/restrictions[]">ApplicableCombatTechniques'AllClose/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="ApplicableCombatTechniques'AllClose/restrictions[]"></a> `ApplicableCombatTechniques'AllClose/restrictions[]`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction">ApplicableCloseCombatTechniquesRestriction</a>

---

### <a name="ApplicableCombatTechniques'AllRanged"></a> `ApplicableCombatTechniques'AllRanged`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'AllRanged/tag">See details</a>
`restrictions?` |  | <a href="#ApplicableCombatTechniques'AllRanged/restrictions">See details</a>

#### <a name="ApplicableCombatTechniques'AllRanged/tag"></a> `tag`

- **Constant:** `"AllRanged"`

#### <a name="ApplicableCombatTechniques'AllRanged/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#ApplicableCombatTechniques'AllRanged/restrictions[]">ApplicableCombatTechniques'AllRanged/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="ApplicableCombatTechniques'AllRanged/restrictions[]"></a> `ApplicableCombatTechniques'AllRanged/restrictions[]`

- **Type:** <a href="#ApplicableRangedCombatTechniquesRestriction">ApplicableRangedCombatTechniquesRestriction</a>

---

### <a name="ApplicableCombatTechniques'Specific"></a> `ApplicableCombatTechniques'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'Specific/tag">See details</a>
`list` |  | <a href="#ApplicableCombatTechniques'Specific/list">See details</a>

#### <a name="ApplicableCombatTechniques'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="ApplicableCombatTechniques'Specific/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ApplicableCombatTechniques'Specific/list[]">ApplicableCombatTechniques'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="ApplicableCombatTechniques'Specific/list[]"></a> `ApplicableCombatTechniques'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ApplicableCombatTechniques'Specific/list[]/id">See details</a>
`restrictions?` |  | <a href="#ApplicableCombatTechniques'Specific/list[]/restrictions">See details</a>

#### <a name="ApplicableCombatTechniques'Specific/list[]/id"></a> `id`

- **Type:** <a href="./_Identifier.md#Identifier/Group/CombatTechnique">Identifier/Group/CombatTechnique</a>

#### <a name="ApplicableCombatTechniques'Specific/list[]/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#ApplicableCombatTechniques'Specific/list[]/restrictions[]">ApplicableCombatTechniques'Specific/list[]/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="ApplicableCombatTechniques'Specific/list[]/restrictions[]"></a> `ApplicableCombatTechniques'Specific/list[]/restrictions[]`

- **Type:** <a href="#ApplicableSpecificCombatTechniquesRestriction">ApplicableSpecificCombatTechniquesRestriction</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction"></a> `ApplicableAllCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableAllCombatTechniquesRestriction'Improvised">ApplicableAllCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableAllCombatTechniquesRestriction'PointedBlade">ApplicableAllCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableAllCombatTechniquesRestriction'Mount">ApplicableAllCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableAllCombatTechniquesRestriction'Race">ApplicableAllCombatTechniquesRestriction'Race</a> | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques">ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'Improvised"></a> `ApplicableAllCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Improvised/tag">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

---

### <a name="ApplicableAllCombatTechniquesRestriction'PointedBlade"></a> `ApplicableAllCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'PointedBlade/tag">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

---

### <a name="ApplicableAllCombatTechniquesRestriction'Mount"></a> `ApplicableAllCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Mount/tag">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

---

### <a name="ApplicableAllCombatTechniquesRestriction'Race"></a> `ApplicableAllCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Race/tag">See details</a>
`id` | The race's numeric identifier. | <a href="#ApplicableAllCombatTechniquesRestriction'Race/id">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableAllCombatTechniquesRestriction'Race/id"></a> `id`

The race's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques"></a> `ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/tag">See details</a>
`list` | The combat techniques this combat special ability is **not** applicable to. | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/list">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/tag"></a> `tag`

- **Constant:** `"ExcludeCombatTechniques"`

#### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/list"></a> `list`

The combat techniques this combat special ability is **not** applicable
to.

- **Type:** List
- **Items:** <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/list[]">ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/list[]"></a> `ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/list[]`

- **Type:** <a href="./_Identifier.md#Identifier/Group/CombatTechnique">Identifier/Group/CombatTechnique</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction"></a> `ApplicableCloseCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableCloseCombatTechniquesRestriction'Improvised">ApplicableCloseCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'PointedBlade">ApplicableCloseCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'Mount">ApplicableCloseCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'HasParry">ApplicableCloseCombatTechniquesRestriction'HasParry</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'OneHanded">ApplicableCloseCombatTechniquesRestriction'OneHanded</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'ParryingWeapon">ApplicableCloseCombatTechniquesRestriction'ParryingWeapon</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'Race">ApplicableCloseCombatTechniquesRestriction'Race</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques">ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Improvised"></a> `ApplicableCloseCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Improvised/tag">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'PointedBlade"></a> `ApplicableCloseCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'PointedBlade/tag">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Mount"></a> `ApplicableCloseCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Mount/tag">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'HasParry"></a> `ApplicableCloseCombatTechniquesRestriction'HasParry`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'HasParry/tag">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'HasParry/tag"></a> `tag`

- **Constant:** `"HasParry"`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'OneHanded"></a> `ApplicableCloseCombatTechniquesRestriction'OneHanded`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'OneHanded/tag">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'OneHanded/tag"></a> `tag`

- **Constant:** `"OneHanded"`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ParryingWeapon"></a> `ApplicableCloseCombatTechniquesRestriction'ParryingWeapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/tag">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/tag"></a> `tag`

- **Constant:** `"ParryingWeapon"`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Race"></a> `ApplicableCloseCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Race/tag">See details</a>
`id` | The race's numeric identifier. | <a href="#ApplicableCloseCombatTechniquesRestriction'Race/id">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'Race/id"></a> `id`

The race's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques"></a> `ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/tag">See details</a>
`list` | The combat techniques this combat special ability is **not** applicable to. | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/tag"></a> `tag`

- **Constant:** `"ExcludeCombatTechniques"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list"></a> `list`

The combat techniques this combat special ability is **not** applicable
to.

- **Type:** List
- **Items:** <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list[]">ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list[]"></a> `ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The close combat technique's numeric identifier. | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list[]/id">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/list[]/id"></a> `id`

The close combat technique's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableRangedCombatTechniquesRestriction"></a> `ApplicableRangedCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableRangedCombatTechniquesRestriction'Improvised">ApplicableRangedCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'PointedBlade">ApplicableRangedCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'Mount">ApplicableRangedCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'Race">ApplicableRangedCombatTechniquesRestriction'Race</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques">ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Improvised"></a> `ApplicableRangedCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Improvised/tag">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

---

### <a name="ApplicableRangedCombatTechniquesRestriction'PointedBlade"></a> `ApplicableRangedCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'PointedBlade/tag">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Mount"></a> `ApplicableRangedCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Mount/tag">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Race"></a> `ApplicableRangedCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Race/tag">See details</a>
`id` | The race's numeric identifier. | <a href="#ApplicableRangedCombatTechniquesRestriction'Race/id">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'Race/id"></a> `id`

The race's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques"></a> `ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/tag">See details</a>
`list` | The combat techniques this combat special ability is **not** applicable to. | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/tag"></a> `tag`

- **Constant:** `"ExcludeCombatTechniques"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list"></a> `list`

The combat techniques this combat special ability is **not** applicable
to.

- **Type:** List
- **Items:** <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list[]">ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list[]"></a> `ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The ranged combat technique's numeric identifier. | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list[]/id">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/list[]/id"></a> `id`

The ranged combat technique's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableSpecificCombatTechniquesRestriction"></a> `ApplicableSpecificCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableSpecificCombatTechniquesRestriction'Improvised">ApplicableSpecificCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'PointedBlade">ApplicableSpecificCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Mount">ApplicableSpecificCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Race">ApplicableSpecificCombatTechniquesRestriction'Race</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Level">ApplicableSpecificCombatTechniquesRestriction'Level</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons">ApplicableSpecificCombatTechniquesRestriction'Weapons</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Improvised"></a> `ApplicableSpecificCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Improvised/tag">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'PointedBlade"></a> `ApplicableSpecificCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'PointedBlade/tag">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Mount"></a> `ApplicableSpecificCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Mount/tag">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Race"></a> `ApplicableSpecificCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Race/tag">See details</a>
`id` | The race's numeric identifier. | <a href="#ApplicableSpecificCombatTechniquesRestriction'Race/id">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Race/id"></a> `id`

The race's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Level"></a> `ApplicableSpecificCombatTechniquesRestriction'Level`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Level/tag">See details</a>
`level` | The combat special ability is only applicable on a certain level. | <a href="#ApplicableSpecificCombatTechniquesRestriction'Level/level">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Level/tag"></a> `tag`

- **Constant:** `"Level"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Level/level"></a> `level`

The combat special ability is only applicable on a certain level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons"></a> `ApplicableSpecificCombatTechniquesRestriction'Weapons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons/tag">See details</a>
`list` | The specific weapons this combat special ability is only applicable to. | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons/list">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons/tag"></a> `tag`

- **Constant:** `"Weapons"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons/list"></a> `list`

The specific weapons this combat special ability is only applicable to.

- **Type:** List
- **Items:** <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons/list[]">ApplicableSpecificCombatTechniquesRestriction'Weapons/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons/list[]"></a> `ApplicableSpecificCombatTechniquesRestriction'Weapons/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The weapon's numeric identifier. | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons/list[]/id">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons/list[]/id"></a> `id`

The weapon's numeric identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AdventurePointsValue"></a> `AdventurePointsValue`

- **Type:** Union
- **Cases:** <a href="#AdventurePointsValue'Fixed">AdventurePointsValue'Fixed</a> | <a href="#AdventurePointsValue'ByLevel">AdventurePointsValue'ByLevel</a> | <a href="#AdventurePointsValue'ByImprovementCost">AdventurePointsValue'ByImprovementCost</a> | <a href="#AdventurePointsValue'Indefinite">AdventurePointsValue'Indefinite</a>

---

### <a name="AdventurePointsValue'Fixed"></a> `AdventurePointsValue'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdventurePointsValue'Fixed/tag">See details</a>
`value` | A fixed adventure points value. If the entry has levels, this is the cost for each level as well. | <a href="#AdventurePointsValue'Fixed/value">See details</a>

#### <a name="AdventurePointsValue'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="AdventurePointsValue'Fixed/value"></a> `value`

A fixed adventure points value. If the entry has levels, this is the cost
for each level as well.

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

---

### <a name="AdventurePointsValue'ByLevel"></a> `AdventurePointsValue'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdventurePointsValue'ByLevel/tag">See details</a>
`values` | An entry with levels may have different costs for each level. The length of the list must match the amount of levels the special ability has. | <a href="#AdventurePointsValue'ByLevel/values">See details</a>

#### <a name="AdventurePointsValue'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="AdventurePointsValue'ByLevel/values"></a> `values`

An entry with levels may have different costs for each level. The length
of the list must match the amount of levels the special ability has.

- **Type:** List
- **Items:** <a href="#AdventurePointsValue'ByLevel/values[]">AdventurePointsValue'ByLevel/values[]</a>
- **Minimum Items:** `2`

---

### <a name="AdventurePointsValue'ByLevel/values[]"></a> `AdventurePointsValue'ByLevel/values[]`

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

---

### <a name="AdventurePointsValue'ByImprovementCost"></a> `AdventurePointsValue'ByImprovementCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdventurePointsValue'ByImprovementCost/tag">See details</a>
`values` | An entry with a selection of skills may have different costs for different improvement costs of the selected skill. | <a href="#AdventurePointsValue'ByImprovementCost/values">See details</a>

#### <a name="AdventurePointsValue'ByImprovementCost/tag"></a> `tag`

- **Constant:** `"ByImprovementCost"`

#### <a name="AdventurePointsValue'ByImprovementCost/values"></a> `values`

An entry with a selection of skills may have different costs for
different improvement costs of the selected skill.

If the select options will not have entries with improvement cost A
(combat techniques only), you may leave out A.

- **Type:** <a href="#AdventurePointsValue'ByImprovementCost/values">Object</a>

---

### <a name="AdventurePointsValue'ByImprovementCost/values"></a> `AdventurePointsValue'ByImprovementCost/values`

An entry with a selection of skills may have different costs for
different improvement costs of the selected skill.

If the select options will not have entries with improvement cost A
(combat techniques only), you may leave out A.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`A?` |  | <a href="#AdventurePointsValue'ByImprovementCost/values/A">See details</a>
`B` |  | <a href="#AdventurePointsValue'ByImprovementCost/values/B">See details</a>
`C` |  | <a href="#AdventurePointsValue'ByImprovementCost/values/C">See details</a>
`D` |  | <a href="#AdventurePointsValue'ByImprovementCost/values/D">See details</a>

#### <a name="AdventurePointsValue'ByImprovementCost/values/A"></a> `A?`

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

#### <a name="AdventurePointsValue'ByImprovementCost/values/B"></a> `B`

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

#### <a name="AdventurePointsValue'ByImprovementCost/values/C"></a> `C`

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

#### <a name="AdventurePointsValue'ByImprovementCost/values/D"></a> `D`

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

---

### <a name="AdventurePointsValue'Indefinite"></a> `AdventurePointsValue'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` | Used if AP value is defined by the selected option(s) or special rules. | <a href="#AdventurePointsValue'Indefinite/tag">See details</a>

#### <a name="AdventurePointsValue'Indefinite/tag"></a> `tag`

Used if AP value is defined by the selected option(s) or special rules.

- **Constant:** `"Indefinite"`

---

### <a name="AdventurePointsSingleValue"></a> `AdventurePointsSingleValue`

A single adventure points value.

- **Type:** Integer
- **Minimum:** `0`
