# Core Rule

## Definitions

### <a name="CoreRule"></a> Core Rule (`CoreRule`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The core rule's identifier. An unique, increasing integer. | <a href="#CoreRule/id">See details</a>
`content` |  | <a href="#CoreRule/content">See details</a>
`src` |  | <a href="#CoreRule/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CoreRule/translations">See details</a>

#### <a name="CoreRule/id"></a> `id`

The core rule's identifier. An unique, increasing integer.

- **Type:** <a href="../_Identifier.md#CoreRuleIdentifier">CoreRuleIdentifier</a>

#### <a name="CoreRule/content"></a> `content`

- **Type:** List
- **Items:** <a href="#CoreRule/content[]">CoreRule/content[]</a>
- **Minimum Items:** `1`

#### <a name="CoreRule/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CoreRule/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CoreRule/translations[key]">CoreRule/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CoreRule/content[]"></a> `CoreRule/content[]`

- **Type:** <a href="#ContentNode">ContentNode</a>

---

### <a name="CoreRule/translations[key]"></a> `CoreRule/translations[key]`

- **Type:** <a href="#CoreRuleTranslation">CoreRuleTranslation</a>

---

### <a name="CoreRuleTranslation"></a> `CoreRuleTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the optional rule. | <a href="#CoreRuleTranslation/name">See details</a>
`errata?` |  | <a href="#CoreRuleTranslation/errata">See details</a>

#### <a name="CoreRuleTranslation/name"></a> `name`

The name of the optional rule.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CoreRuleTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ContentNode"></a> `ContentNode`

- **Type:** Union
- **Cases:** <a href="#ContentNode'Child">ContentNode'Child</a> | <a href="#ContentNode'Text">ContentNode'Text</a> | <a href="#ContentNode'Reference">ContentNode'Reference</a> | <a href="#ContentNode'ReferenceList">ContentNode'ReferenceList</a>

---

### <a name="ContentNode'Child"></a> `ContentNode'Child`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ContentNode'Child/tag">See details</a>
`child` |  | <a href="#ContentNode'Child/child">See details</a>

#### <a name="ContentNode'Child/tag"></a> `tag`

- **Constant:** `"Child"`

#### <a name="ContentNode'Child/child"></a> `child`

- **Type:** <a href="#ChildNode">ChildNode</a>

---

### <a name="ContentNode'Text"></a> `ContentNode'Text`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ContentNode'Text/tag">See details</a>
`text` |  | <a href="#ContentNode'Text/text">See details</a>

#### <a name="ContentNode'Text/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="ContentNode'Text/text"></a> `text`

- **Type:** <a href="#TextNode">TextNode</a>

---

### <a name="ContentNode'Reference"></a> `ContentNode'Reference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ContentNode'Reference/tag">See details</a>
`reference` |  | <a href="#ContentNode'Reference/reference">See details</a>

#### <a name="ContentNode'Reference/tag"></a> `tag`

- **Constant:** `"Reference"`

#### <a name="ContentNode'Reference/reference"></a> `reference`

- **Type:** <a href="#ReferenceNode">ReferenceNode</a>

---

### <a name="ContentNode'ReferenceList"></a> `ContentNode'ReferenceList`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ContentNode'ReferenceList/tag">See details</a>
`reference_list` |  | <a href="#ContentNode'ReferenceList/reference_list">See details</a>

#### <a name="ContentNode'ReferenceList/tag"></a> `tag`

- **Constant:** `"ReferenceList"`

#### <a name="ContentNode'ReferenceList/reference_list"></a> `reference_list`

- **Type:** <a href="#ReferenceListNode">ReferenceListNode</a>

---

### <a name="ChildNode"></a> `ChildNode`

A core rule nested inside this core rule. It may be displayed as a separate
page or its content may be included in this rule's text, which will
automatically generate a proper heading. No content node of a type other than
`Child` should follow a child node, since then it may look like the the text
may be part of the child node.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The nested core rule's identifier. | <a href="#ChildNode/id">See details</a>
`include` | If the nested core rule's content should be integrated into this core rule and a proper heading should be added. Otherwise create a link to a separate view of that core rule. | <a href="#ChildNode/include">See details</a>

#### <a name="ChildNode/id"></a> `id`

The nested core rule's identifier.

- **Type:** <a href="../_Identifier.md#CoreRuleIdentifier">CoreRuleIdentifier</a>

#### <a name="ChildNode/include"></a> `include`

If the nested core rule's content should be integrated into this core rule
and a proper heading should be added. Otherwise create a link to a separate
view of that core rule.

- **Type:** Boolean

---

### <a name="TextNode"></a> `TextNode`

A simple text block, containing one or multiple paragraphs. Headings are not
allowed, they should be handled as nested core rules instead.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TextNode/translations">See details</a>

#### <a name="TextNode/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TextNode/translations[key]">TextNode/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TextNode/translations[key]"></a> `TextNode/translations[key]`

- **Type:** <a href="#TextNodeTranslation">TextNodeTranslation</a>

---

### <a name="TextNodeTranslation"></a> `TextNodeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text` | Markdown-formatted text. | <a href="#TextNodeTranslation/text">See details</a>

#### <a name="TextNodeTranslation/text"></a> `text`

Markdown-formatted text.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ReferenceListNode"></a> `ReferenceListNode`

Generate a list or table from a specific entity type.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`source` |  | <a href="#ReferenceListNode/source">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ReferenceListNode/translations">See details</a>

#### <a name="ReferenceListNode/source"></a> `source`

- **Type:** <a href="#ReferenceListNodeSource">ReferenceListNodeSource</a>

#### <a name="ReferenceListNode/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ReferenceListNode/translations[key]">ReferenceListNode/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ReferenceListNode/translations[key]"></a> `ReferenceListNode/translations[key]`

- **Type:** <a href="#ReferenceListNodeTranslation">ReferenceListNodeTranslation</a>

---

### <a name="ReferenceListNodeSource"></a> `ReferenceListNodeSource`

- **Type:** Union
- **Cases:** <a href="#ReferenceListNodeSource'Attributes">ReferenceListNodeSource'Attributes</a> | <a href="#ReferenceListNodeSource'QualityLevels">ReferenceListNodeSource'QualityLevels</a> | <a href="#ReferenceListNodeSource'Conditions">ReferenceListNodeSource'Conditions</a> | <a href="#ReferenceListNodeSource'States">ReferenceListNodeSource'States</a> | <a href="#ReferenceListNodeSource'ExperienceLevels">ReferenceListNodeSource'ExperienceLevels</a> | <a href="#ReferenceListNodeSource'Races">ReferenceListNodeSource'Races</a> | <a href="#ReferenceListNodeSource'Cultures">ReferenceListNodeSource'Cultures</a> | <a href="#ReferenceListNodeSource'Professions">ReferenceListNodeSource'Professions</a> | <a href="#ReferenceListNodeSource'Advantages">ReferenceListNodeSource'Advantages</a> | <a href="#ReferenceListNodeSource'Disadvantages">ReferenceListNodeSource'Disadvantages</a> | <a href="#ReferenceListNodeSource'CombatTechniques">ReferenceListNodeSource'CombatTechniques</a> | <a href="#ReferenceListNodeSource'SpecialAbilities">ReferenceListNodeSource'SpecialAbilities</a> | <a href="#ReferenceListNodeSource'PrimaryAttributes">ReferenceListNodeSource'PrimaryAttributes</a> | <a href="#ReferenceListNodeSource'DerivedCharacteristics">ReferenceListNodeSource'DerivedCharacteristics</a> | <a href="#ReferenceListNodeSource'StartingAge">ReferenceListNodeSource'StartingAge</a> | <a href="#ReferenceListNodeSource'Archetypes">ReferenceListNodeSource'Archetypes</a> | <a href="#ReferenceListNodeSource'RequirementsForRoutineChecks">ReferenceListNodeSource'RequirementsForRoutineChecks</a> | <a href="#ReferenceListNodeSource'GeneralSpecialAbilities">ReferenceListNodeSource'GeneralSpecialAbilities</a> | <a href="#ReferenceListNodeSource'FatePointSpecialAbilities">ReferenceListNodeSource'FatePointSpecialAbilities</a> | <a href="#ReferenceListNodeSource'LanguagesAndScripts">ReferenceListNodeSource'LanguagesAndScripts</a> | <a href="#ReferenceListNodeSource'CloseCombatBotch">ReferenceListNodeSource'CloseCombatBotch</a> | <a href="#ReferenceListNodeSource'DefenseBotch">ReferenceListNodeSource'DefenseBotch</a> | <a href="#ReferenceListNodeSource'MeleeCombatTechniques">ReferenceListNodeSource'MeleeCombatTechniques</a> | <a href="#ReferenceListNodeSource'RangedCombatBotch">ReferenceListNodeSource'RangedCombatBotch</a> | <a href="#ReferenceListNodeSource'RangedCombatDefenseBotch">ReferenceListNodeSource'RangedCombatDefenseBotch</a> | <a href="#ReferenceListNodeSource'RangedCombatTechniques">ReferenceListNodeSource'RangedCombatTechniques</a> | <a href="#ReferenceListNodeSource'CombatSpecialAbilities">ReferenceListNodeSource'CombatSpecialAbilities</a> | <a href="#ReferenceListNodeSource'Properties">ReferenceListNodeSource'Properties</a> | <a href="#ReferenceListNodeSource'SpellBotch">ReferenceListNodeSource'SpellBotch</a> | <a href="#ReferenceListNodeSource'Services">ReferenceListNodeSource'Services</a> | <a href="#ReferenceListNodeSource'ProtectiveAndWardingCircles">ReferenceListNodeSource'ProtectiveAndWardingCircles</a> | <a href="#ReferenceListNodeSource'Elixirs">ReferenceListNodeSource'Elixirs</a> | <a href="#ReferenceListNodeSource'StaffEnchantments">ReferenceListNodeSource'StaffEnchantments</a> | <a href="#ReferenceListNodeSource'FamiliarsTricks">ReferenceListNodeSource'FamiliarsTricks</a> | <a href="#ReferenceListNodeSource'Curses">ReferenceListNodeSource'Curses</a> | <a href="#ReferenceListNodeSource'ElvenMagicalSongs">ReferenceListNodeSource'ElvenMagicalSongs</a> | <a href="#ReferenceListNodeSource'MagicalSpecialAbilities">ReferenceListNodeSource'MagicalSpecialAbilities</a> | <a href="#ReferenceListNodeSource'Cantrips">ReferenceListNodeSource'Cantrips</a> | <a href="#ReferenceListNodeSource'Spells">ReferenceListNodeSource'Spells</a> | <a href="#ReferenceListNodeSource'Rituals">ReferenceListNodeSource'Rituals</a> | <a href="#ReferenceListNodeSource'Aspects">ReferenceListNodeSource'Aspects</a> | <a href="#ReferenceListNodeSource'LiturgyBotch">ReferenceListNodeSource'LiturgyBotch</a> | <a href="#ReferenceListNodeSource'KarmaSpecialAbilities">ReferenceListNodeSource'KarmaSpecialAbilities</a> | <a href="#ReferenceListNodeSource'Blessings">ReferenceListNodeSource'Blessings</a> | <a href="#ReferenceListNodeSource'LiturgicalChants">ReferenceListNodeSource'LiturgicalChants</a> | <a href="#ReferenceListNodeSource'Ceremonies">ReferenceListNodeSource'Ceremonies</a> | <a href="#ReferenceListNodeSource'SocialStatuses">ReferenceListNodeSource'SocialStatuses</a> | <a href="#ReferenceListNodeSource'Poisons">ReferenceListNodeSource'Poisons</a> | <a href="#ReferenceListNodeSource'Diseases">ReferenceListNodeSource'Diseases</a> | <a href="#ReferenceListNodeSource'HealingHerbs">ReferenceListNodeSource'HealingHerbs</a> | <a href="#ReferenceListNodeSource'VisibilityModifier">ReferenceListNodeSource'VisibilityModifier</a> | <a href="#ReferenceListNodeSource'Demons">ReferenceListNodeSource'Demons</a> | <a href="#ReferenceListNodeSource'Elementals">ReferenceListNodeSource'Elementals</a> | <a href="#ReferenceListNodeSource'Animals">ReferenceListNodeSource'Animals</a> | <a href="#ReferenceListNodeSource'Familiars">ReferenceListNodeSource'Familiars</a> | <a href="#ReferenceListNodeSource'AnimalSpecialAbilities">ReferenceListNodeSource'AnimalSpecialAbilities</a> | <a href="#ReferenceListNodeSource'EquipmentPackages">ReferenceListNodeSource'EquipmentPackages</a> | <a href="#ReferenceListNodeSource'Items">ReferenceListNodeSource'Items</a> | <a href="#ReferenceListNodeSource'OptionalRules">ReferenceListNodeSource'OptionalRules</a> | <a href="#ReferenceListNodeSource'ImprovementCost">ReferenceListNodeSource'ImprovementCost</a>

---

### <a name="ReferenceListNodeSource'Attributes"></a> `ReferenceListNodeSource'Attributes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Attributes/tag">See details</a>
`attributes` |  | <a href="#ReferenceListNodeSource'Attributes/attributes">See details</a>

#### <a name="ReferenceListNodeSource'Attributes/tag"></a> `tag`

- **Constant:** `"Attributes"`

#### <a name="ReferenceListNodeSource'Attributes/attributes"></a> `attributes`

- **Type:** <a href="#ReferenceListNodeSource'Attributes/attributes">Object</a>

---

### <a name="ReferenceListNodeSource'Attributes/attributes"></a> `ReferenceListNodeSource'Attributes/attributes`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'QualityLevels"></a> `ReferenceListNodeSource'QualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'QualityLevels/tag">See details</a>
`quality_levels` |  | <a href="#ReferenceListNodeSource'QualityLevels/quality_levels">See details</a>

#### <a name="ReferenceListNodeSource'QualityLevels/tag"></a> `tag`

- **Constant:** `"QualityLevels"`

#### <a name="ReferenceListNodeSource'QualityLevels/quality_levels"></a> `quality_levels`

- **Type:** <a href="#ReferenceListNodeSource'QualityLevels/quality_levels">Object</a>

---

### <a name="ReferenceListNodeSource'QualityLevels/quality_levels"></a> `ReferenceListNodeSource'QualityLevels/quality_levels`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Conditions"></a> `ReferenceListNodeSource'Conditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Conditions/tag">See details</a>
`conditions` |  | <a href="#ReferenceListNodeSource'Conditions/conditions">See details</a>

#### <a name="ReferenceListNodeSource'Conditions/tag"></a> `tag`

- **Constant:** `"Conditions"`

#### <a name="ReferenceListNodeSource'Conditions/conditions"></a> `conditions`

- **Type:** <a href="#ReferenceListNodeSource'Conditions/conditions">Object</a>

---

### <a name="ReferenceListNodeSource'Conditions/conditions"></a> `ReferenceListNodeSource'Conditions/conditions`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'States"></a> `ReferenceListNodeSource'States`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'States/tag">See details</a>
`states` |  | <a href="#ReferenceListNodeSource'States/states">See details</a>

#### <a name="ReferenceListNodeSource'States/tag"></a> `tag`

- **Constant:** `"States"`

#### <a name="ReferenceListNodeSource'States/states"></a> `states`

- **Type:** <a href="#ReferenceListNodeSource'States/states">Object</a>

---

### <a name="ReferenceListNodeSource'States/states"></a> `ReferenceListNodeSource'States/states`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'ExperienceLevels"></a> `ReferenceListNodeSource'ExperienceLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'ExperienceLevels/tag">See details</a>
`experience_levels` |  | <a href="#ReferenceListNodeSource'ExperienceLevels/experience_levels">See details</a>

#### <a name="ReferenceListNodeSource'ExperienceLevels/tag"></a> `tag`

- **Constant:** `"ExperienceLevels"`

#### <a name="ReferenceListNodeSource'ExperienceLevels/experience_levels"></a> `experience_levels`

- **Type:** <a href="#ReferenceListNodeSource'ExperienceLevels/experience_levels">Object</a>

---

### <a name="ReferenceListNodeSource'ExperienceLevels/experience_levels"></a> `ReferenceListNodeSource'ExperienceLevels/experience_levels`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Races"></a> `ReferenceListNodeSource'Races`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Races/tag">See details</a>
`races` |  | <a href="#ReferenceListNodeSource'Races/races">See details</a>

#### <a name="ReferenceListNodeSource'Races/tag"></a> `tag`

- **Constant:** `"Races"`

#### <a name="ReferenceListNodeSource'Races/races"></a> `races`

- **Type:** <a href="#ReferenceListNodeSource'Races/races">Object</a>

---

### <a name="ReferenceListNodeSource'Races/races"></a> `ReferenceListNodeSource'Races/races`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Cultures"></a> `ReferenceListNodeSource'Cultures`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Cultures/tag">See details</a>
`cultures` |  | <a href="#ReferenceListNodeSource'Cultures/cultures">See details</a>

#### <a name="ReferenceListNodeSource'Cultures/tag"></a> `tag`

- **Constant:** `"Cultures"`

#### <a name="ReferenceListNodeSource'Cultures/cultures"></a> `cultures`

- **Type:** <a href="#ReferenceListNodeSource'Cultures/cultures">Object</a>

---

### <a name="ReferenceListNodeSource'Cultures/cultures"></a> `ReferenceListNodeSource'Cultures/cultures`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Professions"></a> `ReferenceListNodeSource'Professions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Professions/tag">See details</a>
`professions` |  | <a href="#ReferenceListNodeSource'Professions/professions">See details</a>

#### <a name="ReferenceListNodeSource'Professions/tag"></a> `tag`

- **Constant:** `"Professions"`

#### <a name="ReferenceListNodeSource'Professions/professions"></a> `professions`

- **Type:** <a href="#ReferenceListNodeSource'Professions/professions">Object</a>

---

### <a name="ReferenceListNodeSource'Professions/professions"></a> `ReferenceListNodeSource'Professions/professions`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Advantages"></a> `ReferenceListNodeSource'Advantages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Advantages/tag">See details</a>
`advantages` |  | <a href="#ReferenceListNodeSource'Advantages/advantages">See details</a>

#### <a name="ReferenceListNodeSource'Advantages/tag"></a> `tag`

- **Constant:** `"Advantages"`

#### <a name="ReferenceListNodeSource'Advantages/advantages"></a> `advantages`

- **Type:** <a href="#ReferenceListNodeSource'Advantages/advantages">Object</a>

---

### <a name="ReferenceListNodeSource'Advantages/advantages"></a> `ReferenceListNodeSource'Advantages/advantages`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Disadvantages"></a> `ReferenceListNodeSource'Disadvantages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Disadvantages/tag">See details</a>
`disadvantages` |  | <a href="#ReferenceListNodeSource'Disadvantages/disadvantages">See details</a>

#### <a name="ReferenceListNodeSource'Disadvantages/tag"></a> `tag`

- **Constant:** `"Disadvantages"`

#### <a name="ReferenceListNodeSource'Disadvantages/disadvantages"></a> `disadvantages`

- **Type:** <a href="#ReferenceListNodeSource'Disadvantages/disadvantages">Object</a>

---

### <a name="ReferenceListNodeSource'Disadvantages/disadvantages"></a> `ReferenceListNodeSource'Disadvantages/disadvantages`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'CombatTechniques"></a> `ReferenceListNodeSource'CombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'CombatTechniques/tag">See details</a>
`combat_techniques` |  | <a href="#ReferenceListNodeSource'CombatTechniques/combat_techniques">See details</a>

#### <a name="ReferenceListNodeSource'CombatTechniques/tag"></a> `tag`

- **Constant:** `"CombatTechniques"`

#### <a name="ReferenceListNodeSource'CombatTechniques/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ReferenceListNodeSource'CombatTechniques/combat_techniques">Object</a>

---

### <a name="ReferenceListNodeSource'CombatTechniques/combat_techniques"></a> `ReferenceListNodeSource'CombatTechniques/combat_techniques`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'SpecialAbilities"></a> `ReferenceListNodeSource'SpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'SpecialAbilities/tag">See details</a>
`special_abilities` |  | <a href="#ReferenceListNodeSource'SpecialAbilities/special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'SpecialAbilities/tag"></a> `tag`

- **Constant:** `"SpecialAbilities"`

#### <a name="ReferenceListNodeSource'SpecialAbilities/special_abilities"></a> `special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'SpecialAbilities/special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'SpecialAbilities/special_abilities"></a> `ReferenceListNodeSource'SpecialAbilities/special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'PrimaryAttributes"></a> `ReferenceListNodeSource'PrimaryAttributes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'PrimaryAttributes/tag">See details</a>
`primary_attributes` |  | <a href="#ReferenceListNodeSource'PrimaryAttributes/primary_attributes">See details</a>

#### <a name="ReferenceListNodeSource'PrimaryAttributes/tag"></a> `tag`

- **Constant:** `"PrimaryAttributes"`

#### <a name="ReferenceListNodeSource'PrimaryAttributes/primary_attributes"></a> `primary_attributes`

- **Type:** <a href="#ReferenceListNodeSource'PrimaryAttributes/primary_attributes">Object</a>

---

### <a name="ReferenceListNodeSource'PrimaryAttributes/primary_attributes"></a> `ReferenceListNodeSource'PrimaryAttributes/primary_attributes`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'DerivedCharacteristics"></a> `ReferenceListNodeSource'DerivedCharacteristics`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'DerivedCharacteristics/tag">See details</a>
`derived_characteristics` |  | <a href="#ReferenceListNodeSource'DerivedCharacteristics/derived_characteristics">See details</a>

#### <a name="ReferenceListNodeSource'DerivedCharacteristics/tag"></a> `tag`

- **Constant:** `"DerivedCharacteristics"`

#### <a name="ReferenceListNodeSource'DerivedCharacteristics/derived_characteristics"></a> `derived_characteristics`

- **Type:** <a href="#ReferenceListNodeSource'DerivedCharacteristics/derived_characteristics">Object</a>

---

### <a name="ReferenceListNodeSource'DerivedCharacteristics/derived_characteristics"></a> `ReferenceListNodeSource'DerivedCharacteristics/derived_characteristics`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'StartingAge"></a> `ReferenceListNodeSource'StartingAge`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'StartingAge/tag">See details</a>
`starting_age` |  | <a href="#ReferenceListNodeSource'StartingAge/starting_age">See details</a>

#### <a name="ReferenceListNodeSource'StartingAge/tag"></a> `tag`

- **Constant:** `"StartingAge"`

#### <a name="ReferenceListNodeSource'StartingAge/starting_age"></a> `starting_age`

- **Type:** <a href="#ReferenceListNodeSource'StartingAge/starting_age">Object</a>

---

### <a name="ReferenceListNodeSource'StartingAge/starting_age"></a> `ReferenceListNodeSource'StartingAge/starting_age`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Archetypes"></a> `ReferenceListNodeSource'Archetypes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Archetypes/tag">See details</a>
`archetypes` |  | <a href="#ReferenceListNodeSource'Archetypes/archetypes">See details</a>

#### <a name="ReferenceListNodeSource'Archetypes/tag"></a> `tag`

- **Constant:** `"Archetypes"`

#### <a name="ReferenceListNodeSource'Archetypes/archetypes"></a> `archetypes`

- **Type:** <a href="#ReferenceListNodeSource'Archetypes/archetypes">Object</a>

---

### <a name="ReferenceListNodeSource'Archetypes/archetypes"></a> `ReferenceListNodeSource'Archetypes/archetypes`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'RequirementsForRoutineChecks"></a> `ReferenceListNodeSource'RequirementsForRoutineChecks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'RequirementsForRoutineChecks/tag">See details</a>
`requirements_for_routine_checks` |  | <a href="#ReferenceListNodeSource'RequirementsForRoutineChecks/requirements_for_routine_checks">See details</a>

#### <a name="ReferenceListNodeSource'RequirementsForRoutineChecks/tag"></a> `tag`

- **Constant:** `"RequirementsForRoutineChecks"`

#### <a name="ReferenceListNodeSource'RequirementsForRoutineChecks/requirements_for_routine_checks"></a> `requirements_for_routine_checks`

- **Type:** <a href="#ReferenceListNodeSource'RequirementsForRoutineChecks/requirements_for_routine_checks">Object</a>

---

### <a name="ReferenceListNodeSource'RequirementsForRoutineChecks/requirements_for_routine_checks"></a> `ReferenceListNodeSource'RequirementsForRoutineChecks/requirements_for_routine_checks`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'GeneralSpecialAbilities"></a> `ReferenceListNodeSource'GeneralSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'GeneralSpecialAbilities/tag">See details</a>
`general_special_abilities` |  | <a href="#ReferenceListNodeSource'GeneralSpecialAbilities/general_special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'GeneralSpecialAbilities/tag"></a> `tag`

- **Constant:** `"GeneralSpecialAbilities"`

#### <a name="ReferenceListNodeSource'GeneralSpecialAbilities/general_special_abilities"></a> `general_special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'GeneralSpecialAbilities/general_special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'GeneralSpecialAbilities/general_special_abilities"></a> `ReferenceListNodeSource'GeneralSpecialAbilities/general_special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'FatePointSpecialAbilities"></a> `ReferenceListNodeSource'FatePointSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'FatePointSpecialAbilities/tag">See details</a>
`fate_point_special_abilities` |  | <a href="#ReferenceListNodeSource'FatePointSpecialAbilities/fate_point_special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'FatePointSpecialAbilities/tag"></a> `tag`

- **Constant:** `"FatePointSpecialAbilities"`

#### <a name="ReferenceListNodeSource'FatePointSpecialAbilities/fate_point_special_abilities"></a> `fate_point_special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'FatePointSpecialAbilities/fate_point_special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'FatePointSpecialAbilities/fate_point_special_abilities"></a> `ReferenceListNodeSource'FatePointSpecialAbilities/fate_point_special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'LanguagesAndScripts"></a> `ReferenceListNodeSource'LanguagesAndScripts`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'LanguagesAndScripts/tag">See details</a>
`languages_and_scripts` |  | <a href="#ReferenceListNodeSource'LanguagesAndScripts/languages_and_scripts">See details</a>

#### <a name="ReferenceListNodeSource'LanguagesAndScripts/tag"></a> `tag`

- **Constant:** `"LanguagesAndScripts"`

#### <a name="ReferenceListNodeSource'LanguagesAndScripts/languages_and_scripts"></a> `languages_and_scripts`

- **Type:** <a href="#ReferenceListNodeSource'LanguagesAndScripts/languages_and_scripts">Object</a>

---

### <a name="ReferenceListNodeSource'LanguagesAndScripts/languages_and_scripts"></a> `ReferenceListNodeSource'LanguagesAndScripts/languages_and_scripts`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'CloseCombatBotch"></a> `ReferenceListNodeSource'CloseCombatBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'CloseCombatBotch/tag">See details</a>
`close_combat_botch` |  | <a href="#ReferenceListNodeSource'CloseCombatBotch/close_combat_botch">See details</a>

#### <a name="ReferenceListNodeSource'CloseCombatBotch/tag"></a> `tag`

- **Constant:** `"CloseCombatBotch"`

#### <a name="ReferenceListNodeSource'CloseCombatBotch/close_combat_botch"></a> `close_combat_botch`

- **Type:** <a href="#ReferenceListNodeSource'CloseCombatBotch/close_combat_botch">Object</a>

---

### <a name="ReferenceListNodeSource'CloseCombatBotch/close_combat_botch"></a> `ReferenceListNodeSource'CloseCombatBotch/close_combat_botch`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'DefenseBotch"></a> `ReferenceListNodeSource'DefenseBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'DefenseBotch/tag">See details</a>
`defense_botch` |  | <a href="#ReferenceListNodeSource'DefenseBotch/defense_botch">See details</a>

#### <a name="ReferenceListNodeSource'DefenseBotch/tag"></a> `tag`

- **Constant:** `"DefenseBotch"`

#### <a name="ReferenceListNodeSource'DefenseBotch/defense_botch"></a> `defense_botch`

- **Type:** <a href="#ReferenceListNodeSource'DefenseBotch/defense_botch">Object</a>

---

### <a name="ReferenceListNodeSource'DefenseBotch/defense_botch"></a> `ReferenceListNodeSource'DefenseBotch/defense_botch`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'MeleeCombatTechniques"></a> `ReferenceListNodeSource'MeleeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'MeleeCombatTechniques/tag">See details</a>
`melee_combat_techniques` |  | <a href="#ReferenceListNodeSource'MeleeCombatTechniques/melee_combat_techniques">See details</a>

#### <a name="ReferenceListNodeSource'MeleeCombatTechniques/tag"></a> `tag`

- **Constant:** `"MeleeCombatTechniques"`

#### <a name="ReferenceListNodeSource'MeleeCombatTechniques/melee_combat_techniques"></a> `melee_combat_techniques`

- **Type:** <a href="#ReferenceListNodeSource'MeleeCombatTechniques/melee_combat_techniques">Object</a>

---

### <a name="ReferenceListNodeSource'MeleeCombatTechniques/melee_combat_techniques"></a> `ReferenceListNodeSource'MeleeCombatTechniques/melee_combat_techniques`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'RangedCombatBotch"></a> `ReferenceListNodeSource'RangedCombatBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'RangedCombatBotch/tag">See details</a>
`ranged_combat_botch` |  | <a href="#ReferenceListNodeSource'RangedCombatBotch/ranged_combat_botch">See details</a>

#### <a name="ReferenceListNodeSource'RangedCombatBotch/tag"></a> `tag`

- **Constant:** `"RangedCombatBotch"`

#### <a name="ReferenceListNodeSource'RangedCombatBotch/ranged_combat_botch"></a> `ranged_combat_botch`

- **Type:** <a href="#ReferenceListNodeSource'RangedCombatBotch/ranged_combat_botch">Object</a>

---

### <a name="ReferenceListNodeSource'RangedCombatBotch/ranged_combat_botch"></a> `ReferenceListNodeSource'RangedCombatBotch/ranged_combat_botch`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'RangedCombatDefenseBotch"></a> `ReferenceListNodeSource'RangedCombatDefenseBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'RangedCombatDefenseBotch/tag">See details</a>
`ranged_combat_defense_botch` |  | <a href="#ReferenceListNodeSource'RangedCombatDefenseBotch/ranged_combat_defense_botch">See details</a>

#### <a name="ReferenceListNodeSource'RangedCombatDefenseBotch/tag"></a> `tag`

- **Constant:** `"RangedCombatDefenseBotch"`

#### <a name="ReferenceListNodeSource'RangedCombatDefenseBotch/ranged_combat_defense_botch"></a> `ranged_combat_defense_botch`

- **Type:** <a href="#ReferenceListNodeSource'RangedCombatDefenseBotch/ranged_combat_defense_botch">Object</a>

---

### <a name="ReferenceListNodeSource'RangedCombatDefenseBotch/ranged_combat_defense_botch"></a> `ReferenceListNodeSource'RangedCombatDefenseBotch/ranged_combat_defense_botch`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'RangedCombatTechniques"></a> `ReferenceListNodeSource'RangedCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'RangedCombatTechniques/tag">See details</a>
`ranged_combat_techniques` |  | <a href="#ReferenceListNodeSource'RangedCombatTechniques/ranged_combat_techniques">See details</a>

#### <a name="ReferenceListNodeSource'RangedCombatTechniques/tag"></a> `tag`

- **Constant:** `"RangedCombatTechniques"`

#### <a name="ReferenceListNodeSource'RangedCombatTechniques/ranged_combat_techniques"></a> `ranged_combat_techniques`

- **Type:** <a href="#ReferenceListNodeSource'RangedCombatTechniques/ranged_combat_techniques">Object</a>

---

### <a name="ReferenceListNodeSource'RangedCombatTechniques/ranged_combat_techniques"></a> `ReferenceListNodeSource'RangedCombatTechniques/ranged_combat_techniques`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'CombatSpecialAbilities"></a> `ReferenceListNodeSource'CombatSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'CombatSpecialAbilities/tag">See details</a>
`combat_special_abilities` |  | <a href="#ReferenceListNodeSource'CombatSpecialAbilities/combat_special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'CombatSpecialAbilities/tag"></a> `tag`

- **Constant:** `"CombatSpecialAbilities"`

#### <a name="ReferenceListNodeSource'CombatSpecialAbilities/combat_special_abilities"></a> `combat_special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'CombatSpecialAbilities/combat_special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'CombatSpecialAbilities/combat_special_abilities"></a> `ReferenceListNodeSource'CombatSpecialAbilities/combat_special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Properties"></a> `ReferenceListNodeSource'Properties`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Properties/tag">See details</a>
`properties` |  | <a href="#ReferenceListNodeSource'Properties/properties">See details</a>

#### <a name="ReferenceListNodeSource'Properties/tag"></a> `tag`

- **Constant:** `"Properties"`

#### <a name="ReferenceListNodeSource'Properties/properties"></a> `properties`

- **Type:** <a href="#ReferenceListNodeSource'Properties/properties">Object</a>

---

### <a name="ReferenceListNodeSource'Properties/properties"></a> `ReferenceListNodeSource'Properties/properties`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'SpellBotch"></a> `ReferenceListNodeSource'SpellBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'SpellBotch/tag">See details</a>
`spell_botch` |  | <a href="#ReferenceListNodeSource'SpellBotch/spell_botch">See details</a>

#### <a name="ReferenceListNodeSource'SpellBotch/tag"></a> `tag`

- **Constant:** `"SpellBotch"`

#### <a name="ReferenceListNodeSource'SpellBotch/spell_botch"></a> `spell_botch`

- **Type:** <a href="#ReferenceListNodeSource'SpellBotch/spell_botch">Object</a>

---

### <a name="ReferenceListNodeSource'SpellBotch/spell_botch"></a> `ReferenceListNodeSource'SpellBotch/spell_botch`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Services"></a> `ReferenceListNodeSource'Services`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Services/tag">See details</a>
`services` |  | <a href="#ReferenceListNodeSource'Services/services">See details</a>

#### <a name="ReferenceListNodeSource'Services/tag"></a> `tag`

- **Constant:** `"Services"`

#### <a name="ReferenceListNodeSource'Services/services"></a> `services`

- **Type:** <a href="#ReferenceListNodeSource'Services/services">Object</a>

---

### <a name="ReferenceListNodeSource'Services/services"></a> `ReferenceListNodeSource'Services/services`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'ProtectiveAndWardingCircles"></a> `ReferenceListNodeSource'ProtectiveAndWardingCircles`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'ProtectiveAndWardingCircles/tag">See details</a>
`protective_and_warding_circles` |  | <a href="#ReferenceListNodeSource'ProtectiveAndWardingCircles/protective_and_warding_circles">See details</a>

#### <a name="ReferenceListNodeSource'ProtectiveAndWardingCircles/tag"></a> `tag`

- **Constant:** `"ProtectiveAndWardingCircles"`

#### <a name="ReferenceListNodeSource'ProtectiveAndWardingCircles/protective_and_warding_circles"></a> `protective_and_warding_circles`

- **Type:** <a href="#ReferenceListNodeSource'ProtectiveAndWardingCircles/protective_and_warding_circles">Object</a>

---

### <a name="ReferenceListNodeSource'ProtectiveAndWardingCircles/protective_and_warding_circles"></a> `ReferenceListNodeSource'ProtectiveAndWardingCircles/protective_and_warding_circles`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Elixirs"></a> `ReferenceListNodeSource'Elixirs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Elixirs/tag">See details</a>
`elixirs` |  | <a href="#ReferenceListNodeSource'Elixirs/elixirs">See details</a>

#### <a name="ReferenceListNodeSource'Elixirs/tag"></a> `tag`

- **Constant:** `"Elixirs"`

#### <a name="ReferenceListNodeSource'Elixirs/elixirs"></a> `elixirs`

- **Type:** <a href="#ReferenceListNodeSource'Elixirs/elixirs">Object</a>

---

### <a name="ReferenceListNodeSource'Elixirs/elixirs"></a> `ReferenceListNodeSource'Elixirs/elixirs`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'StaffEnchantments"></a> `ReferenceListNodeSource'StaffEnchantments`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'StaffEnchantments/tag">See details</a>
`staff_enchantments` |  | <a href="#ReferenceListNodeSource'StaffEnchantments/staff_enchantments">See details</a>

#### <a name="ReferenceListNodeSource'StaffEnchantments/tag"></a> `tag`

- **Constant:** `"StaffEnchantments"`

#### <a name="ReferenceListNodeSource'StaffEnchantments/staff_enchantments"></a> `staff_enchantments`

- **Type:** <a href="#ReferenceListNodeSource'StaffEnchantments/staff_enchantments">Object</a>

---

### <a name="ReferenceListNodeSource'StaffEnchantments/staff_enchantments"></a> `ReferenceListNodeSource'StaffEnchantments/staff_enchantments`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'FamiliarsTricks"></a> `ReferenceListNodeSource'FamiliarsTricks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'FamiliarsTricks/tag">See details</a>
`familiars_tricks` |  | <a href="#ReferenceListNodeSource'FamiliarsTricks/familiars_tricks">See details</a>

#### <a name="ReferenceListNodeSource'FamiliarsTricks/tag"></a> `tag`

- **Constant:** `"FamiliarsTricks"`

#### <a name="ReferenceListNodeSource'FamiliarsTricks/familiars_tricks"></a> `familiars_tricks`

- **Type:** <a href="#ReferenceListNodeSource'FamiliarsTricks/familiars_tricks">Object</a>

---

### <a name="ReferenceListNodeSource'FamiliarsTricks/familiars_tricks"></a> `ReferenceListNodeSource'FamiliarsTricks/familiars_tricks`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Curses"></a> `ReferenceListNodeSource'Curses`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Curses/tag">See details</a>
`curses` |  | <a href="#ReferenceListNodeSource'Curses/curses">See details</a>

#### <a name="ReferenceListNodeSource'Curses/tag"></a> `tag`

- **Constant:** `"Curses"`

#### <a name="ReferenceListNodeSource'Curses/curses"></a> `curses`

- **Type:** <a href="#ReferenceListNodeSource'Curses/curses">Object</a>

---

### <a name="ReferenceListNodeSource'Curses/curses"></a> `ReferenceListNodeSource'Curses/curses`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'ElvenMagicalSongs"></a> `ReferenceListNodeSource'ElvenMagicalSongs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'ElvenMagicalSongs/tag">See details</a>
`elven_magical_songs` |  | <a href="#ReferenceListNodeSource'ElvenMagicalSongs/elven_magical_songs">See details</a>

#### <a name="ReferenceListNodeSource'ElvenMagicalSongs/tag"></a> `tag`

- **Constant:** `"ElvenMagicalSongs"`

#### <a name="ReferenceListNodeSource'ElvenMagicalSongs/elven_magical_songs"></a> `elven_magical_songs`

- **Type:** <a href="#ReferenceListNodeSource'ElvenMagicalSongs/elven_magical_songs">Object</a>

---

### <a name="ReferenceListNodeSource'ElvenMagicalSongs/elven_magical_songs"></a> `ReferenceListNodeSource'ElvenMagicalSongs/elven_magical_songs`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'MagicalSpecialAbilities"></a> `ReferenceListNodeSource'MagicalSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'MagicalSpecialAbilities/tag">See details</a>
`magical_special_abilities` |  | <a href="#ReferenceListNodeSource'MagicalSpecialAbilities/magical_special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'MagicalSpecialAbilities/tag"></a> `tag`

- **Constant:** `"MagicalSpecialAbilities"`

#### <a name="ReferenceListNodeSource'MagicalSpecialAbilities/magical_special_abilities"></a> `magical_special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'MagicalSpecialAbilities/magical_special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'MagicalSpecialAbilities/magical_special_abilities"></a> `ReferenceListNodeSource'MagicalSpecialAbilities/magical_special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Cantrips"></a> `ReferenceListNodeSource'Cantrips`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Cantrips/tag">See details</a>
`cantrips` |  | <a href="#ReferenceListNodeSource'Cantrips/cantrips">See details</a>

#### <a name="ReferenceListNodeSource'Cantrips/tag"></a> `tag`

- **Constant:** `"Cantrips"`

#### <a name="ReferenceListNodeSource'Cantrips/cantrips"></a> `cantrips`

- **Type:** <a href="#ReferenceListNodeSource'Cantrips/cantrips">Object</a>

---

### <a name="ReferenceListNodeSource'Cantrips/cantrips"></a> `ReferenceListNodeSource'Cantrips/cantrips`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Spells"></a> `ReferenceListNodeSource'Spells`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Spells/tag">See details</a>
`spells` |  | <a href="#ReferenceListNodeSource'Spells/spells">See details</a>

#### <a name="ReferenceListNodeSource'Spells/tag"></a> `tag`

- **Constant:** `"Spells"`

#### <a name="ReferenceListNodeSource'Spells/spells"></a> `spells`

- **Type:** <a href="#ReferenceListNodeSource'Spells/spells">Object</a>

---

### <a name="ReferenceListNodeSource'Spells/spells"></a> `ReferenceListNodeSource'Spells/spells`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Rituals"></a> `ReferenceListNodeSource'Rituals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Rituals/tag">See details</a>
`rituals` |  | <a href="#ReferenceListNodeSource'Rituals/rituals">See details</a>

#### <a name="ReferenceListNodeSource'Rituals/tag"></a> `tag`

- **Constant:** `"Rituals"`

#### <a name="ReferenceListNodeSource'Rituals/rituals"></a> `rituals`

- **Type:** <a href="#ReferenceListNodeSource'Rituals/rituals">Object</a>

---

### <a name="ReferenceListNodeSource'Rituals/rituals"></a> `ReferenceListNodeSource'Rituals/rituals`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Aspects"></a> `ReferenceListNodeSource'Aspects`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Aspects/tag">See details</a>
`aspects` |  | <a href="#ReferenceListNodeSource'Aspects/aspects">See details</a>

#### <a name="ReferenceListNodeSource'Aspects/tag"></a> `tag`

- **Constant:** `"Aspects"`

#### <a name="ReferenceListNodeSource'Aspects/aspects"></a> `aspects`

- **Type:** <a href="#ReferenceListNodeSource'Aspects/aspects">Object</a>

---

### <a name="ReferenceListNodeSource'Aspects/aspects"></a> `ReferenceListNodeSource'Aspects/aspects`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'LiturgyBotch"></a> `ReferenceListNodeSource'LiturgyBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'LiturgyBotch/tag">See details</a>
`liturgy_botch` |  | <a href="#ReferenceListNodeSource'LiturgyBotch/liturgy_botch">See details</a>

#### <a name="ReferenceListNodeSource'LiturgyBotch/tag"></a> `tag`

- **Constant:** `"LiturgyBotch"`

#### <a name="ReferenceListNodeSource'LiturgyBotch/liturgy_botch"></a> `liturgy_botch`

- **Type:** <a href="#ReferenceListNodeSource'LiturgyBotch/liturgy_botch">Object</a>

---

### <a name="ReferenceListNodeSource'LiturgyBotch/liturgy_botch"></a> `ReferenceListNodeSource'LiturgyBotch/liturgy_botch`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'KarmaSpecialAbilities"></a> `ReferenceListNodeSource'KarmaSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'KarmaSpecialAbilities/tag">See details</a>
`karma_special_abilities` |  | <a href="#ReferenceListNodeSource'KarmaSpecialAbilities/karma_special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'KarmaSpecialAbilities/tag"></a> `tag`

- **Constant:** `"KarmaSpecialAbilities"`

#### <a name="ReferenceListNodeSource'KarmaSpecialAbilities/karma_special_abilities"></a> `karma_special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'KarmaSpecialAbilities/karma_special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'KarmaSpecialAbilities/karma_special_abilities"></a> `ReferenceListNodeSource'KarmaSpecialAbilities/karma_special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Blessings"></a> `ReferenceListNodeSource'Blessings`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Blessings/tag">See details</a>
`blessings` |  | <a href="#ReferenceListNodeSource'Blessings/blessings">See details</a>

#### <a name="ReferenceListNodeSource'Blessings/tag"></a> `tag`

- **Constant:** `"Blessings"`

#### <a name="ReferenceListNodeSource'Blessings/blessings"></a> `blessings`

- **Type:** <a href="#ReferenceListNodeSource'Blessings/blessings">Object</a>

---

### <a name="ReferenceListNodeSource'Blessings/blessings"></a> `ReferenceListNodeSource'Blessings/blessings`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'LiturgicalChants"></a> `ReferenceListNodeSource'LiturgicalChants`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'LiturgicalChants/tag">See details</a>
`liturgical_chants` |  | <a href="#ReferenceListNodeSource'LiturgicalChants/liturgical_chants">See details</a>

#### <a name="ReferenceListNodeSource'LiturgicalChants/tag"></a> `tag`

- **Constant:** `"LiturgicalChants"`

#### <a name="ReferenceListNodeSource'LiturgicalChants/liturgical_chants"></a> `liturgical_chants`

- **Type:** <a href="#ReferenceListNodeSource'LiturgicalChants/liturgical_chants">Object</a>

---

### <a name="ReferenceListNodeSource'LiturgicalChants/liturgical_chants"></a> `ReferenceListNodeSource'LiturgicalChants/liturgical_chants`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Ceremonies"></a> `ReferenceListNodeSource'Ceremonies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Ceremonies/tag">See details</a>
`ceremonies` |  | <a href="#ReferenceListNodeSource'Ceremonies/ceremonies">See details</a>

#### <a name="ReferenceListNodeSource'Ceremonies/tag"></a> `tag`

- **Constant:** `"Ceremonies"`

#### <a name="ReferenceListNodeSource'Ceremonies/ceremonies"></a> `ceremonies`

- **Type:** <a href="#ReferenceListNodeSource'Ceremonies/ceremonies">Object</a>

---

### <a name="ReferenceListNodeSource'Ceremonies/ceremonies"></a> `ReferenceListNodeSource'Ceremonies/ceremonies`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'SocialStatuses"></a> `ReferenceListNodeSource'SocialStatuses`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'SocialStatuses/tag">See details</a>
`social_statuses` |  | <a href="#ReferenceListNodeSource'SocialStatuses/social_statuses">See details</a>

#### <a name="ReferenceListNodeSource'SocialStatuses/tag"></a> `tag`

- **Constant:** `"SocialStatuses"`

#### <a name="ReferenceListNodeSource'SocialStatuses/social_statuses"></a> `social_statuses`

- **Type:** <a href="#ReferenceListNodeSource'SocialStatuses/social_statuses">Object</a>

---

### <a name="ReferenceListNodeSource'SocialStatuses/social_statuses"></a> `ReferenceListNodeSource'SocialStatuses/social_statuses`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Poisons"></a> `ReferenceListNodeSource'Poisons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Poisons/tag">See details</a>
`poisons` |  | <a href="#ReferenceListNodeSource'Poisons/poisons">See details</a>

#### <a name="ReferenceListNodeSource'Poisons/tag"></a> `tag`

- **Constant:** `"Poisons"`

#### <a name="ReferenceListNodeSource'Poisons/poisons"></a> `poisons`

- **Type:** <a href="#ReferenceListNodeSource'Poisons/poisons">Object</a>

---

### <a name="ReferenceListNodeSource'Poisons/poisons"></a> `ReferenceListNodeSource'Poisons/poisons`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Diseases"></a> `ReferenceListNodeSource'Diseases`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Diseases/tag">See details</a>
`diseases` |  | <a href="#ReferenceListNodeSource'Diseases/diseases">See details</a>

#### <a name="ReferenceListNodeSource'Diseases/tag"></a> `tag`

- **Constant:** `"Diseases"`

#### <a name="ReferenceListNodeSource'Diseases/diseases"></a> `diseases`

- **Type:** <a href="#ReferenceListNodeSource'Diseases/diseases">Object</a>

---

### <a name="ReferenceListNodeSource'Diseases/diseases"></a> `ReferenceListNodeSource'Diseases/diseases`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'HealingHerbs"></a> `ReferenceListNodeSource'HealingHerbs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'HealingHerbs/tag">See details</a>
`healing_herbs` |  | <a href="#ReferenceListNodeSource'HealingHerbs/healing_herbs">See details</a>

#### <a name="ReferenceListNodeSource'HealingHerbs/tag"></a> `tag`

- **Constant:** `"HealingHerbs"`

#### <a name="ReferenceListNodeSource'HealingHerbs/healing_herbs"></a> `healing_herbs`

- **Type:** <a href="#ReferenceListNodeSource'HealingHerbs/healing_herbs">Object</a>

---

### <a name="ReferenceListNodeSource'HealingHerbs/healing_herbs"></a> `ReferenceListNodeSource'HealingHerbs/healing_herbs`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'VisibilityModifier"></a> `ReferenceListNodeSource'VisibilityModifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'VisibilityModifier/tag">See details</a>
`visibility_modifier` |  | <a href="#ReferenceListNodeSource'VisibilityModifier/visibility_modifier">See details</a>

#### <a name="ReferenceListNodeSource'VisibilityModifier/tag"></a> `tag`

- **Constant:** `"VisibilityModifier"`

#### <a name="ReferenceListNodeSource'VisibilityModifier/visibility_modifier"></a> `visibility_modifier`

- **Type:** <a href="#ReferenceListNodeSource'VisibilityModifier/visibility_modifier">Object</a>

---

### <a name="ReferenceListNodeSource'VisibilityModifier/visibility_modifier"></a> `ReferenceListNodeSource'VisibilityModifier/visibility_modifier`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Demons"></a> `ReferenceListNodeSource'Demons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Demons/tag">See details</a>
`demons` |  | <a href="#ReferenceListNodeSource'Demons/demons">See details</a>

#### <a name="ReferenceListNodeSource'Demons/tag"></a> `tag`

- **Constant:** `"Demons"`

#### <a name="ReferenceListNodeSource'Demons/demons"></a> `demons`

- **Type:** <a href="#ReferenceListNodeSource'Demons/demons">Object</a>

---

### <a name="ReferenceListNodeSource'Demons/demons"></a> `ReferenceListNodeSource'Demons/demons`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Elementals"></a> `ReferenceListNodeSource'Elementals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Elementals/tag">See details</a>
`elementals` |  | <a href="#ReferenceListNodeSource'Elementals/elementals">See details</a>

#### <a name="ReferenceListNodeSource'Elementals/tag"></a> `tag`

- **Constant:** `"Elementals"`

#### <a name="ReferenceListNodeSource'Elementals/elementals"></a> `elementals`

- **Type:** <a href="#ReferenceListNodeSource'Elementals/elementals">Object</a>

---

### <a name="ReferenceListNodeSource'Elementals/elementals"></a> `ReferenceListNodeSource'Elementals/elementals`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Animals"></a> `ReferenceListNodeSource'Animals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Animals/tag">See details</a>
`animals` |  | <a href="#ReferenceListNodeSource'Animals/animals">See details</a>

#### <a name="ReferenceListNodeSource'Animals/tag"></a> `tag`

- **Constant:** `"Animals"`

#### <a name="ReferenceListNodeSource'Animals/animals"></a> `animals`

- **Type:** <a href="#ReferenceListNodeSource'Animals/animals">Object</a>

---

### <a name="ReferenceListNodeSource'Animals/animals"></a> `ReferenceListNodeSource'Animals/animals`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Familiars"></a> `ReferenceListNodeSource'Familiars`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Familiars/tag">See details</a>
`familiars` |  | <a href="#ReferenceListNodeSource'Familiars/familiars">See details</a>

#### <a name="ReferenceListNodeSource'Familiars/tag"></a> `tag`

- **Constant:** `"Familiars"`

#### <a name="ReferenceListNodeSource'Familiars/familiars"></a> `familiars`

- **Type:** <a href="#ReferenceListNodeSource'Familiars/familiars">Object</a>

---

### <a name="ReferenceListNodeSource'Familiars/familiars"></a> `ReferenceListNodeSource'Familiars/familiars`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'AnimalSpecialAbilities"></a> `ReferenceListNodeSource'AnimalSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'AnimalSpecialAbilities/tag">See details</a>
`animal_special_abilities` |  | <a href="#ReferenceListNodeSource'AnimalSpecialAbilities/animal_special_abilities">See details</a>

#### <a name="ReferenceListNodeSource'AnimalSpecialAbilities/tag"></a> `tag`

- **Constant:** `"AnimalSpecialAbilities"`

#### <a name="ReferenceListNodeSource'AnimalSpecialAbilities/animal_special_abilities"></a> `animal_special_abilities`

- **Type:** <a href="#ReferenceListNodeSource'AnimalSpecialAbilities/animal_special_abilities">Object</a>

---

### <a name="ReferenceListNodeSource'AnimalSpecialAbilities/animal_special_abilities"></a> `ReferenceListNodeSource'AnimalSpecialAbilities/animal_special_abilities`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'EquipmentPackages"></a> `ReferenceListNodeSource'EquipmentPackages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'EquipmentPackages/tag">See details</a>
`equipment_packages` |  | <a href="#ReferenceListNodeSource'EquipmentPackages/equipment_packages">See details</a>

#### <a name="ReferenceListNodeSource'EquipmentPackages/tag"></a> `tag`

- **Constant:** `"EquipmentPackages"`

#### <a name="ReferenceListNodeSource'EquipmentPackages/equipment_packages"></a> `equipment_packages`

- **Type:** <a href="#ReferenceListNodeSource'EquipmentPackages/equipment_packages">Object</a>

---

### <a name="ReferenceListNodeSource'EquipmentPackages/equipment_packages"></a> `ReferenceListNodeSource'EquipmentPackages/equipment_packages`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'Items"></a> `ReferenceListNodeSource'Items`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'Items/tag">See details</a>
`items` |  | <a href="#ReferenceListNodeSource'Items/items">See details</a>

#### <a name="ReferenceListNodeSource'Items/tag"></a> `tag`

- **Constant:** `"Items"`

#### <a name="ReferenceListNodeSource'Items/items"></a> `items`

- **Type:** <a href="#ReferenceListNodeSource'Items/items">Object</a>

---

### <a name="ReferenceListNodeSource'Items/items"></a> `ReferenceListNodeSource'Items/items`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'OptionalRules"></a> `ReferenceListNodeSource'OptionalRules`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'OptionalRules/tag">See details</a>
`optional_rules` |  | <a href="#ReferenceListNodeSource'OptionalRules/optional_rules">See details</a>

#### <a name="ReferenceListNodeSource'OptionalRules/tag"></a> `tag`

- **Constant:** `"OptionalRules"`

#### <a name="ReferenceListNodeSource'OptionalRules/optional_rules"></a> `optional_rules`

- **Type:** <a href="#ReferenceListNodeSource'OptionalRules/optional_rules">Object</a>

---

### <a name="ReferenceListNodeSource'OptionalRules/optional_rules"></a> `ReferenceListNodeSource'OptionalRules/optional_rules`

- **Type:** Empty Object

---

### <a name="ReferenceListNodeSource'ImprovementCost"></a> `ReferenceListNodeSource'ImprovementCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNodeSource'ImprovementCost/tag">See details</a>
`improvement_cost` |  | <a href="#ReferenceListNodeSource'ImprovementCost/improvement_cost">See details</a>

#### <a name="ReferenceListNodeSource'ImprovementCost/tag"></a> `tag`

- **Constant:** `"ImprovementCost"`

#### <a name="ReferenceListNodeSource'ImprovementCost/improvement_cost"></a> `improvement_cost`

- **Type:** <a href="#ReferenceListNodeImprovementCostSource">ReferenceListNodeImprovementCostSource</a>

---

### <a name="ReferenceListNodeImprovementCostSource"></a> `ReferenceListNodeImprovementCostSource`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`target` | Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost. | <a href="#ReferenceListNodeImprovementCostSource/target">See details</a>
`maximum_rating` | The highest value the improvement cost are displayed for. | <a href="#ReferenceListNodeImprovementCostSource/maximum_rating">See details</a>

#### <a name="ReferenceListNodeImprovementCostSource/target"></a> `target`

Define if the cost for attributes or skills should be defined. The
cost for attributes start with value 9, while the cost for skills
start with 1 in addition to possible activation cost.

- **Type:** <a href="#ReferenceListNodeImprovementCostSourceTarget">ReferenceListNodeImprovementCostSourceTarget</a>

#### <a name="ReferenceListNodeImprovementCostSource/maximum_rating"></a> `maximum_rating`

The highest value the improvement cost are displayed for.

The minimum maximum value should depend on what is the upper bound of
the range of adventure point cost that are equal across multiple
values (value increases for attributes are always 15 up to (and
including) value 14, while value increases for skills are always 1 to
4, depending on the improvement cost, up to (and including) value
12), since those ranges should be combined into a single table row.

- **Type:** Integer
- **Minimum:** `12`

---

### <a name="ReferenceListNodeImprovementCostSourceTarget"></a> `ReferenceListNodeImprovementCostSourceTarget`

- **Possible values:** `"Attributes"`, `"Skills"`

---

### <a name="ReferenceListNodeTranslation"></a> `ReferenceListNodeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text` | Markdown-formatted text. | <a href="#ReferenceListNodeTranslation/text">See details</a>

#### <a name="ReferenceListNodeTranslation/text"></a> `text`

Markdown-formatted text.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ReferenceNode"></a> `ReferenceNode`

Generate the full text for a single entry as part of this core rule's text.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ReferenceNode/id">See details</a>

#### <a name="ReferenceNode/id"></a> `id`

- **Type:** <a href="../_IdentifierGroup.md#CoreRuleDerivableContentIdentifier">CoreRuleDerivableContentIdentifier</a>
