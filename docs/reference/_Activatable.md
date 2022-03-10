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

The number stating how often you can buy the entry. The **default** depends on
the entry type:

- **Advantage:** `1` in all cases (as specified in the **Core Rules**)
- **Disadvantage:** `1` in all cases (as specified in the **Core Rules**)
- **Special Abilities:** `1` if no options can be selected, otherwise the
  number of possible options

The maximum is only set if it differs from the defaults specified above.

- **Type:** Integer
- **Minimum:** `1`

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

- **Type:** <a href="./_Identifier.md#CombatRelatedSpecialAbilityIdentifier">CombatRelatedSpecialAbilityIdentifier</a>

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

### <a name="EnchantmentCost"></a> `EnchantmentCost`

- **Type:** Union
- **Cases:** <a href="#EnchantmentCost'ArcaneEnergyCost">EnchantmentCost'ArcaneEnergyCost</a> | <a href="#EnchantmentCost'BindingCost">EnchantmentCost'BindingCost</a>

---

### <a name="EnchantmentCost'ArcaneEnergyCost"></a> `EnchantmentCost'ArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnchantmentCost'ArcaneEnergyCost/tag">See details</a>
`ae_cost` |  | <a href="#EnchantmentCost'ArcaneEnergyCost/ae_cost">See details</a>

#### <a name="EnchantmentCost'ArcaneEnergyCost/tag"></a> `tag`

- **Constant:** `"ArcaneEnergyCost"`

#### <a name="EnchantmentCost'ArcaneEnergyCost/ae_cost"></a> `ae_cost`

- **Type:** <a href="#ArcaneEnergyCost">ArcaneEnergyCost</a>

---

### <a name="EnchantmentCost'BindingCost"></a> `EnchantmentCost'BindingCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnchantmentCost'BindingCost/tag">See details</a>
`binding_cost` |  | <a href="#EnchantmentCost'BindingCost/binding_cost">See details</a>

#### <a name="EnchantmentCost'BindingCost/tag"></a> `tag`

- **Constant:** `"BindingCost"`

#### <a name="EnchantmentCost'BindingCost/binding_cost"></a> `binding_cost`

- **Type:** <a href="#BindingCost">BindingCost</a>

---

### <a name="ArcaneEnergyCost"></a> `ArcaneEnergyCost`

The AE Cost.

- **Type:** Union
- **Cases:** <a href="#ArcaneEnergyCost'Fixed">ArcaneEnergyCost'Fixed</a> | <a href="#ArcaneEnergyCost'PerCountable">ArcaneEnergyCost'PerCountable</a> | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval">ArcaneEnergyCost'ActivationAndHalfInterval</a> | <a href="#ArcaneEnergyCost'Indefinite">ArcaneEnergyCost'Indefinite</a> | <a href="#ArcaneEnergyCost'Disjunction">ArcaneEnergyCost'Disjunction</a> | <a href="#ArcaneEnergyCost'None">ArcaneEnergyCost'None</a> | <a href="#ArcaneEnergyCost'Variable">ArcaneEnergyCost'Variable</a>

---

### <a name="ArcaneEnergyCost'Fixed"></a> `ArcaneEnergyCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Fixed/tag">See details</a>
`value` | The AE cost value. | <a href="#ArcaneEnergyCost'Fixed/value">See details</a>
`is_permanent?` | Set to `true` if the AE costs are permanent. | <a href="#ArcaneEnergyCost'Fixed/is_permanent">See details</a>
`interval?` | Specified if the AE cost `value` has to be paid for each time interval. | <a href="#ArcaneEnergyCost'Fixed/interval">See details</a>
`per_level?` | The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`). | <a href="#ArcaneEnergyCost'Fixed/per_level">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCost'Fixed/translations">See details</a>

#### <a name="ArcaneEnergyCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="ArcaneEnergyCost'Fixed/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCost'Fixed/is_permanent"></a> `is_permanent?`

Set to `true` if the AE costs are permanent.

- **Constant:** `true`

#### <a name="ArcaneEnergyCost'Fixed/interval"></a> `interval?`

Specified if the AE cost `value` has to be paid for each time interval.

- **Type:** <a href="./_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="ArcaneEnergyCost'Fixed/per_level"></a> `per_level?`

The AE cost are per level of the enchantment. It may either be displayed
in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1
AE for level I; 2 AE for level II`).

- **Type:** Union
- **Cases:** <a href="#ArcaneEnergyCost'Fixed/per_level'Compressed">ArcaneEnergyCost'Fixed/per_level'Compressed</a> | <a href="#ArcaneEnergyCost'Fixed/per_level'Verbose">ArcaneEnergyCost'Fixed/per_level'Verbose</a>

#### <a name="ArcaneEnergyCost'Fixed/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCost'Fixed/translations[key]">ArcaneEnergyCost'Fixed/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCost'Fixed/per_level'Compressed"></a> `ArcaneEnergyCost'Fixed/per_level'Compressed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Fixed/per_level'Compressed/tag">See details</a>

#### <a name="ArcaneEnergyCost'Fixed/per_level'Compressed/tag"></a> `tag`

- **Constant:** `"Compressed"`

---

### <a name="ArcaneEnergyCost'Fixed/per_level'Verbose"></a> `ArcaneEnergyCost'Fixed/per_level'Verbose`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Fixed/per_level'Verbose/tag">See details</a>

#### <a name="ArcaneEnergyCost'Fixed/per_level'Verbose/tag"></a> `tag`

- **Constant:** `"Verbose"`

---

### <a name="ArcaneEnergyCost'Fixed/translations[key]"></a> `ArcaneEnergyCost'Fixed/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated string in parenthesis. | <a href="#ArcaneEnergyCost'Fixed/translations[key]/note">See details</a>

#### <a name="ArcaneEnergyCost'Fixed/translations[key]/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="#ArcaneEnergyCost'Fixed/translations[key]/note">Object</a>

---

### <a name="ArcaneEnergyCost'Fixed/translations[key]/note"></a> `ArcaneEnergyCost'Fixed/translations[key]/note`

A note, appended to the generated string in parenthesis.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full note. | <a href="#ArcaneEnergyCost'Fixed/translations[key]/note/default">See details</a>
`compressed?` | A compressed note, if applicable. If not specified it should not be displayed in small location. | <a href="#ArcaneEnergyCost'Fixed/translations[key]/note/compressed">See details</a>

#### <a name="ArcaneEnergyCost'Fixed/translations[key]/note/default"></a> `default`

The full note.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ArcaneEnergyCost'Fixed/translations[key]/note/compressed"></a> `compressed?`

A compressed note, if applicable. If not specified it should not
be displayed in small location.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneEnergyCost'PerCountable"></a> `ArcaneEnergyCost'PerCountable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'PerCountable/tag">See details</a>
`value` | The AE cost value that has to be per a specific countable entity. | <a href="#ArcaneEnergyCost'PerCountable/value">See details</a>
`base_value?` | If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count. | <a href="#ArcaneEnergyCost'PerCountable/base_value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCost'PerCountable/translations">See details</a>

#### <a name="ArcaneEnergyCost'PerCountable/tag"></a> `tag`

- **Constant:** `"PerCountable"`

#### <a name="ArcaneEnergyCost'PerCountable/value"></a> `value`

The AE cost value that has to be per a specific countable entity.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCost'PerCountable/base_value"></a> `base_value?`

If defined, in addition to the cost per entity you have to pay a flat
amount, regardless of the entity count.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCost'PerCountable/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCost'PerCountable/translations[key]">ArcaneEnergyCost'PerCountable/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCost'PerCountable/translations[key]"></a> `ArcaneEnergyCost'PerCountable/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per` | The cost have to be per a specific countable entity, e.g. `8 AE per person`. | <a href="#ArcaneEnergyCost'PerCountable/translations[key]/per">See details</a>
`note?` | A note, appended to the generated string in parenthesis. | <a href="#ArcaneEnergyCost'PerCountable/translations[key]/note">See details</a>

#### <a name="ArcaneEnergyCost'PerCountable/translations[key]/per"></a> `per`

The cost have to be per a specific countable entity, e.g. `8 AE per
person`.

- **Type:** <a href="#ArcaneEnergyCost'PerCountable/translations[key]/per">Object</a>

#### <a name="ArcaneEnergyCost'PerCountable/translations[key]/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="#ArcaneEnergyCost'PerCountable/translations[key]/note">Object</a>

---

### <a name="ArcaneEnergyCost'PerCountable/translations[key]/per"></a> `ArcaneEnergyCost'PerCountable/translations[key]/per`

The cost have to be per a specific countable entity, e.g. `8 AE per
person`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full countable entity name. | <a href="#ArcaneEnergyCost'PerCountable/translations[key]/per/default">See details</a>
`compressed` | The compressed countable entity name. | <a href="#ArcaneEnergyCost'PerCountable/translations[key]/per/compressed">See details</a>

#### <a name="ArcaneEnergyCost'PerCountable/translations[key]/per/default"></a> `default`

The full countable entity name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ArcaneEnergyCost'PerCountable/translations[key]/per/compressed"></a> `compressed`

The compressed countable entity name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneEnergyCost'PerCountable/translations[key]/note"></a> `ArcaneEnergyCost'PerCountable/translations[key]/note`

A note, appended to the generated string in parenthesis.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full note. | <a href="#ArcaneEnergyCost'PerCountable/translations[key]/note/default">See details</a>
`compressed?` | A compressed note, if applicable. If not specified it should not be displayed in small location. | <a href="#ArcaneEnergyCost'PerCountable/translations[key]/note/compressed">See details</a>

#### <a name="ArcaneEnergyCost'PerCountable/translations[key]/note/default"></a> `default`

The full note.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ArcaneEnergyCost'PerCountable/translations[key]/note/compressed"></a> `compressed?`

A compressed note, if applicable. If not specified it should not
be displayed in small location.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneEnergyCost'ActivationAndHalfInterval"></a> `ArcaneEnergyCost'ActivationAndHalfInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval/tag">See details</a>
`value` | The AE cost value that has to be payed for activation. Half of this value has to be payed each interval. | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval/value">See details</a>
`interval` | The time interval for which the AE cost `value` has to be paid. | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval/interval">See details</a>

#### <a name="ArcaneEnergyCost'ActivationAndHalfInterval/tag"></a> `tag`

- **Constant:** `"ActivationAndHalfInterval"`

#### <a name="ArcaneEnergyCost'ActivationAndHalfInterval/value"></a> `value`

The AE cost value that has to be payed for activation. Half of this value
has to be payed each interval.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

#### <a name="ArcaneEnergyCost'ActivationAndHalfInterval/interval"></a> `interval`

The time interval for which the AE cost `value` has to be paid.

- **Type:** <a href="./_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="ArcaneEnergyCost'Indefinite"></a> `ArcaneEnergyCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Indefinite/tag">See details</a>
`modifier` | The indefinite AE cost may be modified by a certain value. | <a href="#ArcaneEnergyCost'Indefinite/modifier">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCost'Indefinite/translations">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="ArcaneEnergyCost'Indefinite/modifier"></a> `modifier`

The indefinite AE cost may be modified by a certain value.

- **Type:** <a href="#ArcaneEnergyCost'Indefinite/modifier">Object</a>

#### <a name="ArcaneEnergyCost'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCost'Indefinite/translations[key]">ArcaneEnergyCost'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCost'Indefinite/modifier"></a> `ArcaneEnergyCost'Indefinite/modifier`

The indefinite AE cost may be modified by a certain value.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`arithmetic` | The arithmetic how to apply the `value` to the indefinite base value. | <a href="#ArcaneEnergyCost'Indefinite/modifier/arithmetic">See details</a>
`value` | The value that is applied to the indefinite base value using the defined `arithmetic`. | <a href="#ArcaneEnergyCost'Indefinite/modifier/value">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/modifier/arithmetic"></a> `arithmetic`

The arithmetic how to apply the `value` to the indefinite base value.

- **Type:** Union
- **Cases:** <a href="#ArcaneEnergyCost'Indefinite/modifier/arithmetic'Add">ArcaneEnergyCost'Indefinite/modifier/arithmetic'Add</a> | <a href="#ArcaneEnergyCost'Indefinite/modifier/arithmetic'Multiply">ArcaneEnergyCost'Indefinite/modifier/arithmetic'Multiply</a>

#### <a name="ArcaneEnergyCost'Indefinite/modifier/value"></a> `value`

The value that is applied to the indefinite base value using the
defined `arithmetic`.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ArcaneEnergyCost'Indefinite/modifier/arithmetic'Add"></a> `ArcaneEnergyCost'Indefinite/modifier/arithmetic'Add`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Indefinite/modifier/arithmetic'Add/tag">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/modifier/arithmetic'Add/tag"></a> `tag`

- **Constant:** `"Add"`

---

### <a name="ArcaneEnergyCost'Indefinite/modifier/arithmetic'Multiply"></a> `ArcaneEnergyCost'Indefinite/modifier/arithmetic'Multiply`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Indefinite/modifier/arithmetic'Multiply/tag">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/modifier/arithmetic'Multiply/tag"></a> `tag`

- **Constant:** `"Multiply"`

---

### <a name="ArcaneEnergyCost'Indefinite/translations[key]"></a> `ArcaneEnergyCost'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of where the cost come from. | <a href="#ArcaneEnergyCost'Indefinite/translations[key]/description">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/translations[key]/description"></a> `description`

A description of where the cost come from.

- **Type:** <a href="#ArcaneEnergyCost'Indefinite/translations[key]/description">Object</a>

---

### <a name="ArcaneEnergyCost'Indefinite/translations[key]/description"></a> `ArcaneEnergyCost'Indefinite/translations[key]/description`

A description of where the cost come from.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of where the cost come from. | <a href="#ArcaneEnergyCost'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of where the cost come from for use in small areas (e.g. on character sheet). | <a href="#ArcaneEnergyCost'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/translations[key]/description/default"></a> `default`

The full description of where the cost come from.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ArcaneEnergyCost'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of where the cost come from for use in
small areas (e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneEnergyCost'Disjunction"></a> `ArcaneEnergyCost'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Disjunction/tag">See details</a>
`interval?` | Specified if the selected AE cost option has to be paid for each time interval. | <a href="#ArcaneEnergyCost'Disjunction/interval">See details</a>
`options` | The possible AE cost values. | <a href="#ArcaneEnergyCost'Disjunction/options">See details</a>

#### <a name="ArcaneEnergyCost'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="ArcaneEnergyCost'Disjunction/interval"></a> `interval?`

Specified if the selected AE cost option has to be paid for each time
interval.

- **Type:** <a href="#ArcaneEnergyCost'Disjunction/interval">Object</a>

#### <a name="ArcaneEnergyCost'Disjunction/options"></a> `options`

The possible AE cost values.

- **Type:** List
- **Items:** <a href="#ArcaneEnergyCost'Disjunction/options[]">ArcaneEnergyCost'Disjunction/options[]</a>

---

### <a name="ArcaneEnergyCost'Disjunction/interval"></a> `ArcaneEnergyCost'Disjunction/interval`

Specified if the selected AE cost option has to be paid for each time
interval.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The interval itself. | <a href="#ArcaneEnergyCost'Disjunction/interval/value">See details</a>
`activation_value` | The AE cost value for activation. | <a href="#ArcaneEnergyCost'Disjunction/interval/activation_value">See details</a>
`after_activation` | Set to `true` if the action where the enchantment is casted does **not** as a part of the first interval that has to be payed, so that the first interval payment needs to be done after the activation. | <a href="#ArcaneEnergyCost'Disjunction/interval/after_activation">See details</a>

#### <a name="ArcaneEnergyCost'Disjunction/interval/value"></a> `value`

The interval itself.

- **Type:** <a href="./_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="ArcaneEnergyCost'Disjunction/interval/activation_value"></a> `activation_value`

The AE cost value for activation.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCost'Disjunction/interval/after_activation"></a> `after_activation`

Set to `true` if the action where the enchantment is casted does
**not** as a part of the first interval that has to be payed, so that
the first interval payment needs to be done after the activation.

This works different than other sustained spells, since for them the
end of the cast usually already counts as part of the first interval.

- **Type:** Boolean

---

### <a name="ArcaneEnergyCost'Disjunction/options[]"></a> `ArcaneEnergyCost'Disjunction/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | A possible AE cost value. | <a href="#ArcaneEnergyCost'Disjunction/options[]/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCost'Disjunction/options[]/translations">See details</a>

#### <a name="ArcaneEnergyCost'Disjunction/options[]/value"></a> `value`

A possible AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCost'Disjunction/options[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCost'Disjunction/options[]/translations[key]">ArcaneEnergyCost'Disjunction/options[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCost'Disjunction/options[]/translations[key]"></a> `ArcaneEnergyCost'Disjunction/options[]/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated option string in parenthesis. | <a href="#ArcaneEnergyCost'Disjunction/options[]/translations[key]/note">See details</a>

#### <a name="ArcaneEnergyCost'Disjunction/options[]/translations[key]/note"></a> `note?`

A note, appended to the generated option string in parenthesis.

- **Type:** <a href="#ArcaneEnergyCost'Disjunction/options[]/translations[key]/note">Object</a>

---

### <a name="ArcaneEnergyCost'Disjunction/options[]/translations[key]/note"></a> `ArcaneEnergyCost'Disjunction/options[]/translations[key]/note`

A note, appended to the generated option string in parenthesis.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full note. | <a href="#ArcaneEnergyCost'Disjunction/options[]/translations[key]/note/default">See details</a>
`compressed?` | A compressed note, if applicable. If not specified it should not be displayed in small location. | <a href="#ArcaneEnergyCost'Disjunction/options[]/translations[key]/note/compressed">See details</a>

#### <a name="ArcaneEnergyCost'Disjunction/options[]/translations[key]/note/default"></a> `default`

The full note.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ArcaneEnergyCost'Disjunction/options[]/translations[key]/note/compressed"></a> `compressed?`

A compressed note, if applicable. If not specified it should not
be displayed in small location.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneEnergyCost'None"></a> `ArcaneEnergyCost'None`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'None/tag">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCost'None/translations">See details</a>

#### <a name="ArcaneEnergyCost'None/tag"></a> `tag`

- **Constant:** `"None"`

#### <a name="ArcaneEnergyCost'None/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCost'None/translations[key]">ArcaneEnergyCost'None/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCost'None/translations[key]"></a> `ArcaneEnergyCost'None/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated string in parenthesis. | <a href="#ArcaneEnergyCost'None/translations[key]/note">See details</a>

#### <a name="ArcaneEnergyCost'None/translations[key]/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="#ArcaneEnergyCost'None/translations[key]/note">Object</a>

---

### <a name="ArcaneEnergyCost'None/translations[key]/note"></a> `ArcaneEnergyCost'None/translations[key]/note`

A note, appended to the generated string in parenthesis.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full note. | <a href="#ArcaneEnergyCost'None/translations[key]/note/default">See details</a>
`compressed?` | A compressed note, if applicable. If not specified it should not be displayed in small location. | <a href="#ArcaneEnergyCost'None/translations[key]/note/compressed">See details</a>

#### <a name="ArcaneEnergyCost'None/translations[key]/note/default"></a> `default`

The full note.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ArcaneEnergyCost'None/translations[key]/note/compressed"></a> `compressed?`

A compressed note, if applicable. If not specified it should not
be displayed in small location.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneEnergyCost'Variable"></a> `ArcaneEnergyCost'Variable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Variable/tag">See details</a>

#### <a name="ArcaneEnergyCost'Variable/tag"></a> `tag`

- **Constant:** `"Variable"`

---

### <a name="Volume"></a> `Volume`

The volume points the enchantment needs.

- **Type:** Union
- **Cases:** <a href="#Volume'Fixed">Volume'Fixed</a> | <a href="#Volume'PerLevel">Volume'PerLevel</a> | <a href="#Volume'ByLevel">Volume'ByLevel</a> | <a href="#Volume'Map">Volume'Map</a>

---

### <a name="Volume'Fixed"></a> `Volume'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'Fixed/tag">See details</a>
`points` | The volume points. | <a href="#Volume'Fixed/points">See details</a>

#### <a name="Volume'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Volume'Fixed/points"></a> `points`

The volume points.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Volume'PerLevel"></a> `Volume'PerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'PerLevel/tag">See details</a>
`points` | The volume points per level. | <a href="#Volume'PerLevel/points">See details</a>

#### <a name="Volume'PerLevel/tag"></a> `tag`

- **Constant:** `"PerLevel"`

#### <a name="Volume'PerLevel/points"></a> `points`

The volume points per level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Volume'ByLevel"></a> `Volume'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'ByLevel/tag">See details</a>
`list` | The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on. | <a href="#Volume'ByLevel/list">See details</a>

#### <a name="Volume'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="Volume'ByLevel/list"></a> `list`

The volume points for each level. The first element is the volume points
for the first level, the second element is the volume points for the
second level, and so on.

- **Type:** List
- **Items:** <a href="#Volume'ByLevel/list[]">Volume'ByLevel/list[]</a>
- **Minimum Items:** `2`

---

### <a name="Volume'ByLevel/list[]"></a> `Volume'ByLevel/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The volume points for this level. | <a href="#Volume'ByLevel/list[]/points">See details</a>

#### <a name="Volume'ByLevel/list[]/points"></a> `points`

The volume points for this level.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Volume'Map"></a> `Volume'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'Map/tag">See details</a>
`map` |  | <a href="#Volume'Map/map">See details</a>

#### <a name="Volume'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="Volume'Map/map"></a> `map`

- **Type:** <a href="#VolumeMap">VolumeMap</a>

---

### <a name="VolumeMap"></a> `VolumeMap`

A content that is `3/4/5 Points for Chimera, Daimonid, Golems, Undead /
Fairies, Ghosts / Demons, Elementals` may be respresented as the following
map:

```yaml
options:
  - points: 3
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Chimera, Daimonid, Golems, Undead"
        label_standalone: "Chimera/Daimonid/Golems/Undead"
  - points: 4
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Fairies, Ghosts"
        label_standalone: "Fairies/Ghosts"
  - points: 5
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Demons, Elementals"
        label_standalone: "Demons/Elementals"
```

This will generate the exact same string as seen above. The associated
options are not present in the example, but they link to the options the
volume specification is meant for.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible costs and associated labels. | <a href="#VolumeMap/options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#VolumeMap/translations">See details</a>

#### <a name="VolumeMap/options"></a> `options`

The possible costs and associated labels.

- **Type:** List
- **Items:** <a href="#VolumeMap/options[]">VolumeMap/options[]</a>
- **Minimum Items:** `2`

#### <a name="VolumeMap/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#VolumeMap/translations[key]">VolumeMap/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="VolumeMap/options[]"></a> `VolumeMap/options[]`

- **Type:** <a href="#VolumeMapOption">VolumeMapOption</a>

---

### <a name="VolumeMap/translations[key]"></a> `VolumeMap/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list_prepend?` | Place a string between the `for` and the grouped map option labels. | <a href="#VolumeMap/translations[key]/list_prepend">See details</a>
`list_append?` | Place a string after the grouped map option labels. | <a href="#VolumeMap/translations[key]/list_append">See details</a>
`replacement?` | If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players. | <a href="#VolumeMap/translations[key]/replacement">See details</a>

#### <a name="VolumeMap/translations[key]/list_prepend"></a> `list_prepend?`

Place a string between the `for` and the grouped map option labels.

- **Type:** String

#### <a name="VolumeMap/translations[key]/list_append"></a> `list_append?`

Place a string after the grouped map option labels.

- **Type:** String

#### <a name="VolumeMap/translations[key]/replacement"></a> `replacement?`

If the string from the book cannot be generated using the default
generation technique, use this string. All options still need to be
inserted propertly, since it may be used by in-game tools to provide a
selection to players.

- **Type:** String

---

### <a name="VolumeMapOption"></a> `VolumeMapOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The full permanent AE cost value for this option. | <a href="#VolumeMapOption/points">See details</a>
`associated_options` | Links to the options this volume specification is meant for. | <a href="#VolumeMapOption/associated_options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#VolumeMapOption/translations">See details</a>

#### <a name="VolumeMapOption/points"></a> `points`

The full permanent AE cost value for this option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="VolumeMapOption/associated_options"></a> `associated_options`

Links to the options this volume specification is meant for.

- **Type:** List
- **Items:** <a href="#VolumeMapOption/associated_options[]">VolumeMapOption/associated_options[]</a>

#### <a name="VolumeMapOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#VolumeMapOption/translations[key]">VolumeMapOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="VolumeMapOption/associated_options[]"></a> `VolumeMapOption/associated_options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The option's identifier. | <a href="#VolumeMapOption/associated_options[]/id">See details</a>

#### <a name="VolumeMapOption/associated_options[]/id"></a> `id`

The option's identifier.

- **Type:** <a href="./_Identifier.md#VolumePointsOptionReferenceIdentifier">VolumePointsOptionReferenceIdentifier</a>

---

### <a name="VolumeMapOption/translations[key]"></a> `VolumeMapOption/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label` | The description of the option for cost string generation. | <a href="#VolumeMapOption/translations[key]/label">See details</a>
`label_standalone?` | The description of the option if used standalone. Only used if different from `label`. | <a href="#VolumeMapOption/translations[key]/label_standalone">See details</a>

#### <a name="VolumeMapOption/translations[key]/label"></a> `label`

The description of the option for cost string generation.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="VolumeMapOption/translations[key]/label_standalone"></a> `label_standalone?`

The description of the option if used standalone. Only used if
different from `label`.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="BindingCost"></a> `BindingCost`

The binding cost for an enchantment.

- **Type:** Union
- **Cases:** <a href="#BindingCost'Fixed">BindingCost'Fixed</a> | <a href="#BindingCost'PerLevel">BindingCost'PerLevel</a> | <a href="#BindingCost'Map">BindingCost'Map</a>

---

### <a name="BindingCost'Fixed"></a> `BindingCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BindingCost'Fixed/tag">See details</a>
`permanent_value` | The permanent AE cost. | <a href="#BindingCost'Fixed/permanent_value">See details</a>

#### <a name="BindingCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="BindingCost'Fixed/permanent_value"></a> `permanent_value`

The permanent AE cost.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BindingCost'PerLevel"></a> `BindingCost'PerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BindingCost'PerLevel/tag">See details</a>
`permanent_value` | The permanent AE cost per level. | <a href="#BindingCost'PerLevel/permanent_value">See details</a>

#### <a name="BindingCost'PerLevel/tag"></a> `tag`

- **Constant:** `"PerLevel"`

#### <a name="BindingCost'PerLevel/permanent_value"></a> `permanent_value`

The permanent AE cost per level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BindingCost'Map"></a> `BindingCost'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BindingCost'Map/tag">See details</a>
`map` |  | <a href="#BindingCost'Map/map">See details</a>

#### <a name="BindingCost'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="BindingCost'Map/map"></a> `map`

- **Type:** <a href="#BindingCostMap">BindingCostMap</a>

---

### <a name="BindingCostMap"></a> `BindingCostMap`

A content that is `2/4/8 permanent AE for spell-swords with the combat
technique Daggers, Swords, or Two-Handed Swords` may be respresented as the
following map:

```yaml
options:
  - permanent_value: 2
    translations:
      en-US:
        label: "Daggers"
        label_standalone: "Dagger"
  - permanent_value: 4
    translations:
      en-US:
        label: "Swords"
        label_standalone: "Sword"
  - permanent_value: 8
    translations:
      en-US:
        label: "Two-Handed Swords"
        label_standalone: "Two-Handed Sword"
list_prepend: "spell-swords with the combat technique"
```

This will generate the exact same string as seen above.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible costs and associated labels. | <a href="#BindingCostMap/options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BindingCostMap/translations">See details</a>

#### <a name="BindingCostMap/options"></a> `options`

The possible costs and associated labels.

- **Type:** List
- **Items:** <a href="#BindingCostMap/options[]">BindingCostMap/options[]</a>
- **Minimum Items:** `2`

#### <a name="BindingCostMap/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BindingCostMap/translations[key]">BindingCostMap/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BindingCostMap/options[]"></a> `BindingCostMap/options[]`

- **Type:** <a href="#VolumeMapOption">VolumeMapOption</a>

---

### <a name="BindingCostMap/translations[key]"></a> `BindingCostMap/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list_prepend?` | Place a string between the `for` and the grouped map option labels. | <a href="#BindingCostMap/translations[key]/list_prepend">See details</a>
`list_append?` | Place a string after the grouped map option labels. | <a href="#BindingCostMap/translations[key]/list_append">See details</a>
`replacement?` | If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players. | <a href="#BindingCostMap/translations[key]/replacement">See details</a>

#### <a name="BindingCostMap/translations[key]/list_prepend"></a> `list_prepend?`

Place a string between the `for` and the grouped map option labels.

- **Type:** String

#### <a name="BindingCostMap/translations[key]/list_append"></a> `list_append?`

Place a string after the grouped map option labels.

- **Type:** String

#### <a name="BindingCostMap/translations[key]/replacement"></a> `replacement?`

If the string from the book cannot be generated using the default
generation technique, use this string. All options still need to be
inserted propertly, since it may be used by in-game tools to provide a
selection to players.

- **Type:** String

---

### <a name="BindingCostMapOption"></a> `BindingCostMapOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`permanent_value` | The full permanent AE cost value for this option. | <a href="#BindingCostMapOption/permanent_value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BindingCostMapOption/translations">See details</a>

#### <a name="BindingCostMapOption/permanent_value"></a> `permanent_value`

The full permanent AE cost value for this option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="BindingCostMapOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BindingCostMapOption/translations[key]">BindingCostMapOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BindingCostMapOption/translations[key]"></a> `BindingCostMapOption/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label` | The description of the option for cost string generation. | <a href="#BindingCostMapOption/translations[key]/label">See details</a>
`label_standalone?` | The description of the option if used standalone. Only used if different from `label`. | <a href="#BindingCostMapOption/translations[key]/label_standalone">See details</a>

#### <a name="BindingCostMapOption/translations[key]/label"></a> `label`

The description of the option for cost string generation.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="BindingCostMapOption/translations[key]/label_standalone"></a> `label_standalone?`

The description of the option if used standalone. Only used if
different from `label`.

- **Type:** String
- **Minimum Length:** `1`

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

- **Type:** <a href="./_Identifier.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

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

- **Type:** <a href="./_Identifier.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

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

- **Type:** <a href="./_Identifier.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="AdvancedSpecialAbilityDerivedExternalEntryId"></a> `AdvancedSpecialAbilityDerivedExternalEntryId`

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

---

### <a name="AdvancedSpecialAbilityDerivedExternalEntryOptionId"></a> `AdvancedSpecialAbilityDerivedExternalEntryOptionId`

- **Type:** <a href="./_Identifier.md#PatronIdentifier">PatronIdentifier</a>

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

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

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

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

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
