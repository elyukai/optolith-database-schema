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

- **Type:** Integer
- **Minimum:** `1`

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

- **Type:** Union
- **Cases:** <a href="#CoreRule/content[]'ChildNode">CoreRule/content[]'ChildNode</a> | <a href="#CoreRule/content[]'TextNode">CoreRule/content[]'TextNode</a> | <a href="#CoreRule/content[]'ReferenceNode">CoreRule/content[]'ReferenceNode</a> | <a href="#CoreRule/content[]'ReferenceListNode">CoreRule/content[]'ReferenceListNode</a>

---

### <a name="CoreRule/content[]'ChildNode"></a> `CoreRule/content[]'ChildNode`

- **Type:** <a href="#ChildNode">ChildNode</a>

---

### <a name="CoreRule/content[]'TextNode"></a> `CoreRule/content[]'TextNode`

- **Type:** <a href="#TextNode">TextNode</a>

---

### <a name="CoreRule/content[]'ReferenceNode"></a> `CoreRule/content[]'ReferenceNode`

- **Type:** <a href="#ReferenceNode">ReferenceNode</a>

---

### <a name="CoreRule/content[]'ReferenceListNode"></a> `CoreRule/content[]'ReferenceListNode`

- **Type:** <a href="#ReferenceListNode">ReferenceListNode</a>

---

### <a name="CoreRule/translations[key]"></a> `CoreRule/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the optional rule. | <a href="#CoreRule/translations[key]/name">See details</a>
`errata?` |  | <a href="#CoreRule/translations[key]/errata">See details</a>

#### <a name="CoreRule/translations[key]/name"></a> `name`

The name of the optional rule.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CoreRule/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

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
`tag` |  | <a href="#ChildNode/tag">See details</a>
`id` | The nested core rule's identifier. | <a href="#ChildNode/id">See details</a>
`include` | If `true`, integrate the nested core rule's content into this core rule and add a proper heading. Otherwise create a link to a separate view of that core rule. | <a href="#ChildNode/include">See details</a>

#### <a name="ChildNode/tag"></a> `tag`

- **Constant:** `"Child"`

#### <a name="ChildNode/id"></a> `id`

The nested core rule's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ChildNode/include"></a> `include`

If `true`, integrate the nested core rule's content into this core rule and
add a proper heading. Otherwise create a link to a separate view of that
core rule.

- **Type:** Boolean

---

### <a name="TextNode"></a> `TextNode`

A simple text block, containing one or multiple paragraphs. Headings are not
allowed, they should be handled as nested core rules instead.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TextNode/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TextNode/translations">See details</a>

#### <a name="TextNode/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="TextNode/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TextNode/translations[key]">TextNode/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TextNode/translations[key]"></a> `TextNode/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text` | Markdown-formatted text. | <a href="#TextNode/translations[key]/text">See details</a>

#### <a name="TextNode/translations[key]/text"></a> `text`

Markdown-formatted text.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="ReferenceListNode"></a> `ReferenceListNode`

Generate a list or table from a specific entity type.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/tag">See details</a>
`content` |  | <a href="#ReferenceListNode/content">See details</a>

#### <a name="ReferenceListNode/tag"></a> `tag`

- **Constant:** `"DeriveMany"`

#### <a name="ReferenceListNode/content"></a> `content`

- **Type:** <a href="#ReferenceListNode/content">Object</a>

---

### <a name="ReferenceListNode/content"></a> `ReferenceListNode/content`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`source` |  | <a href="#ReferenceListNode/content/source">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ReferenceListNode/content/translations">See details</a>

#### <a name="ReferenceListNode/content/source"></a> `source`

- **Type:** Union
- **Cases:** <a href="#ReferenceListNode/content/source'Attributes">ReferenceListNode/content/source'Attributes</a> | <a href="#ReferenceListNode/content/source'QualityLevels">ReferenceListNode/content/source'QualityLevels</a> | <a href="#ReferenceListNode/content/source'Conditions">ReferenceListNode/content/source'Conditions</a> | <a href="#ReferenceListNode/content/source'States">ReferenceListNode/content/source'States</a> | <a href="#ReferenceListNode/content/source'ExperienceLevels">ReferenceListNode/content/source'ExperienceLevels</a> | <a href="#ReferenceListNode/content/source'Races">ReferenceListNode/content/source'Races</a> | <a href="#ReferenceListNode/content/source'Cultures">ReferenceListNode/content/source'Cultures</a> | <a href="#ReferenceListNode/content/source'Professions">ReferenceListNode/content/source'Professions</a> | <a href="#ReferenceListNode/content/source'Advantages">ReferenceListNode/content/source'Advantages</a> | <a href="#ReferenceListNode/content/source'Disadvantages">ReferenceListNode/content/source'Disadvantages</a> | <a href="#ReferenceListNode/content/source'CombatTechniques">ReferenceListNode/content/source'CombatTechniques</a> | <a href="#ReferenceListNode/content/source'SpecialAbilities">ReferenceListNode/content/source'SpecialAbilities</a> | <a href="#ReferenceListNode/content/source'PrimaryAttributes">ReferenceListNode/content/source'PrimaryAttributes</a> | <a href="#ReferenceListNode/content/source'DerivedCharacteristics">ReferenceListNode/content/source'DerivedCharacteristics</a> | <a href="#ReferenceListNode/content/source'StartingAge">ReferenceListNode/content/source'StartingAge</a> | <a href="#ReferenceListNode/content/source'Archetypes">ReferenceListNode/content/source'Archetypes</a> | <a href="#ReferenceListNode/content/source'RequirementsForRoutineChecks">ReferenceListNode/content/source'RequirementsForRoutineChecks</a> | <a href="#ReferenceListNode/content/source'GeneralSpecialAbilities">ReferenceListNode/content/source'GeneralSpecialAbilities</a> | <a href="#ReferenceListNode/content/source'FatePointSpecialAbilities">ReferenceListNode/content/source'FatePointSpecialAbilities</a> | <a href="#ReferenceListNode/content/source'LanguagesAndScripts">ReferenceListNode/content/source'LanguagesAndScripts</a> | <a href="#ReferenceListNode/content/source'CloseCombatBotch">ReferenceListNode/content/source'CloseCombatBotch</a> | <a href="#ReferenceListNode/content/source'DefenseBotch">ReferenceListNode/content/source'DefenseBotch</a> | <a href="#ReferenceListNode/content/source'MeleeCombatTechniques">ReferenceListNode/content/source'MeleeCombatTechniques</a> | <a href="#ReferenceListNode/content/source'RangedCombatBotch">ReferenceListNode/content/source'RangedCombatBotch</a> | <a href="#ReferenceListNode/content/source'RangedCombatDefenseBotch">ReferenceListNode/content/source'RangedCombatDefenseBotch</a> | <a href="#ReferenceListNode/content/source'RangedCombatTechniques">ReferenceListNode/content/source'RangedCombatTechniques</a> | <a href="#ReferenceListNode/content/source'CombatSpecialAbilities">ReferenceListNode/content/source'CombatSpecialAbilities</a> | <a href="#ReferenceListNode/content/source'Properties">ReferenceListNode/content/source'Properties</a> | <a href="#ReferenceListNode/content/source'SpellBotch">ReferenceListNode/content/source'SpellBotch</a> | <a href="#ReferenceListNode/content/source'Services">ReferenceListNode/content/source'Services</a> | <a href="#ReferenceListNode/content/source'ProtectiveAndWardingCircles">ReferenceListNode/content/source'ProtectiveAndWardingCircles</a> | <a href="#ReferenceListNode/content/source'Elixirs">ReferenceListNode/content/source'Elixirs</a> | <a href="#ReferenceListNode/content/source'StaffEnchantments">ReferenceListNode/content/source'StaffEnchantments</a> | <a href="#ReferenceListNode/content/source'FamiliarsTricks">ReferenceListNode/content/source'FamiliarsTricks</a> | <a href="#ReferenceListNode/content/source'Curses">ReferenceListNode/content/source'Curses</a> | <a href="#ReferenceListNode/content/source'ElvenMagicalSongs">ReferenceListNode/content/source'ElvenMagicalSongs</a> | <a href="#ReferenceListNode/content/source'MagicalSpecialAbilities">ReferenceListNode/content/source'MagicalSpecialAbilities</a> | <a href="#ReferenceListNode/content/source'Cantrips">ReferenceListNode/content/source'Cantrips</a> | <a href="#ReferenceListNode/content/source'Spells">ReferenceListNode/content/source'Spells</a> | <a href="#ReferenceListNode/content/source'Rituals">ReferenceListNode/content/source'Rituals</a> | <a href="#ReferenceListNode/content/source'Aspects">ReferenceListNode/content/source'Aspects</a> | <a href="#ReferenceListNode/content/source'LiturgyBotch">ReferenceListNode/content/source'LiturgyBotch</a> | <a href="#ReferenceListNode/content/source'KarmaSpecialAbilities">ReferenceListNode/content/source'KarmaSpecialAbilities</a> | <a href="#ReferenceListNode/content/source'Blessings">ReferenceListNode/content/source'Blessings</a> | <a href="#ReferenceListNode/content/source'LiturgicalChants">ReferenceListNode/content/source'LiturgicalChants</a> | <a href="#ReferenceListNode/content/source'Ceremonies">ReferenceListNode/content/source'Ceremonies</a> | <a href="#ReferenceListNode/content/source'SocialStatuses">ReferenceListNode/content/source'SocialStatuses</a> | <a href="#ReferenceListNode/content/source'Poisons">ReferenceListNode/content/source'Poisons</a> | <a href="#ReferenceListNode/content/source'Diseases">ReferenceListNode/content/source'Diseases</a> | <a href="#ReferenceListNode/content/source'HealingHerbs">ReferenceListNode/content/source'HealingHerbs</a> | <a href="#ReferenceListNode/content/source'VisibilityModifier">ReferenceListNode/content/source'VisibilityModifier</a> | <a href="#ReferenceListNode/content/source'Demons">ReferenceListNode/content/source'Demons</a> | <a href="#ReferenceListNode/content/source'Elementals">ReferenceListNode/content/source'Elementals</a> | <a href="#ReferenceListNode/content/source'Animals">ReferenceListNode/content/source'Animals</a> | <a href="#ReferenceListNode/content/source'Familiars">ReferenceListNode/content/source'Familiars</a> | <a href="#ReferenceListNode/content/source'AnimalSpecialAbilities">ReferenceListNode/content/source'AnimalSpecialAbilities</a> | <a href="#ReferenceListNode/content/source'EquipmentPackages">ReferenceListNode/content/source'EquipmentPackages</a> | <a href="#ReferenceListNode/content/source'Items">ReferenceListNode/content/source'Items</a> | <a href="#ReferenceListNode/content/source'OptionalRules">ReferenceListNode/content/source'OptionalRules</a> | <a href="#ReferenceListNode/content/source'ImprovementCost">ReferenceListNode/content/source'ImprovementCost</a>

#### <a name="ReferenceListNode/content/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ReferenceListNode/content/translations[key]">ReferenceListNode/content/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ReferenceListNode/content/source'Attributes"></a> `ReferenceListNode/content/source'Attributes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Attributes/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Attributes/tag"></a> `tag`

- **Constant:** `"Attributes"`

---

### <a name="ReferenceListNode/content/source'QualityLevels"></a> `ReferenceListNode/content/source'QualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'QualityLevels/tag">See details</a>

#### <a name="ReferenceListNode/content/source'QualityLevels/tag"></a> `tag`

- **Constant:** `"QualityLevels"`

---

### <a name="ReferenceListNode/content/source'Conditions"></a> `ReferenceListNode/content/source'Conditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Conditions/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Conditions/tag"></a> `tag`

- **Constant:** `"Conditions"`

---

### <a name="ReferenceListNode/content/source'States"></a> `ReferenceListNode/content/source'States`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'States/tag">See details</a>

#### <a name="ReferenceListNode/content/source'States/tag"></a> `tag`

- **Constant:** `"States"`

---

### <a name="ReferenceListNode/content/source'ExperienceLevels"></a> `ReferenceListNode/content/source'ExperienceLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'ExperienceLevels/tag">See details</a>

#### <a name="ReferenceListNode/content/source'ExperienceLevels/tag"></a> `tag`

- **Constant:** `"ExperienceLevels"`

---

### <a name="ReferenceListNode/content/source'Races"></a> `ReferenceListNode/content/source'Races`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Races/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Races/tag"></a> `tag`

- **Constant:** `"Races"`

---

### <a name="ReferenceListNode/content/source'Cultures"></a> `ReferenceListNode/content/source'Cultures`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Cultures/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Cultures/tag"></a> `tag`

- **Constant:** `"Cultures"`

---

### <a name="ReferenceListNode/content/source'Professions"></a> `ReferenceListNode/content/source'Professions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Professions/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Professions/tag"></a> `tag`

- **Constant:** `"Professions"`

---

### <a name="ReferenceListNode/content/source'Advantages"></a> `ReferenceListNode/content/source'Advantages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Advantages/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Advantages/tag"></a> `tag`

- **Constant:** `"Advantages"`

---

### <a name="ReferenceListNode/content/source'Disadvantages"></a> `ReferenceListNode/content/source'Disadvantages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Disadvantages/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Disadvantages/tag"></a> `tag`

- **Constant:** `"Disadvantages"`

---

### <a name="ReferenceListNode/content/source'CombatTechniques"></a> `ReferenceListNode/content/source'CombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'CombatTechniques/tag">See details</a>

#### <a name="ReferenceListNode/content/source'CombatTechniques/tag"></a> `tag`

- **Constant:** `"CombatTechniques"`

---

### <a name="ReferenceListNode/content/source'SpecialAbilities"></a> `ReferenceListNode/content/source'SpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'SpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'SpecialAbilities/tag"></a> `tag`

- **Constant:** `"SpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'PrimaryAttributes"></a> `ReferenceListNode/content/source'PrimaryAttributes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'PrimaryAttributes/tag">See details</a>

#### <a name="ReferenceListNode/content/source'PrimaryAttributes/tag"></a> `tag`

- **Constant:** `"PrimaryAttributes"`

---

### <a name="ReferenceListNode/content/source'DerivedCharacteristics"></a> `ReferenceListNode/content/source'DerivedCharacteristics`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'DerivedCharacteristics/tag">See details</a>

#### <a name="ReferenceListNode/content/source'DerivedCharacteristics/tag"></a> `tag`

- **Constant:** `"DerivedCharacteristics"`

---

### <a name="ReferenceListNode/content/source'StartingAge"></a> `ReferenceListNode/content/source'StartingAge`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'StartingAge/tag">See details</a>

#### <a name="ReferenceListNode/content/source'StartingAge/tag"></a> `tag`

- **Constant:** `"StartingAge"`

---

### <a name="ReferenceListNode/content/source'Archetypes"></a> `ReferenceListNode/content/source'Archetypes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Archetypes/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Archetypes/tag"></a> `tag`

- **Constant:** `"Archetypes"`

---

### <a name="ReferenceListNode/content/source'RequirementsForRoutineChecks"></a> `ReferenceListNode/content/source'RequirementsForRoutineChecks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'RequirementsForRoutineChecks/tag">See details</a>

#### <a name="ReferenceListNode/content/source'RequirementsForRoutineChecks/tag"></a> `tag`

- **Constant:** `"RequirementsForRoutineChecks"`

---

### <a name="ReferenceListNode/content/source'GeneralSpecialAbilities"></a> `ReferenceListNode/content/source'GeneralSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'GeneralSpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'GeneralSpecialAbilities/tag"></a> `tag`

- **Constant:** `"GeneralSpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'FatePointSpecialAbilities"></a> `ReferenceListNode/content/source'FatePointSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'FatePointSpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'FatePointSpecialAbilities/tag"></a> `tag`

- **Constant:** `"FatePointSpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'LanguagesAndScripts"></a> `ReferenceListNode/content/source'LanguagesAndScripts`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'LanguagesAndScripts/tag">See details</a>

#### <a name="ReferenceListNode/content/source'LanguagesAndScripts/tag"></a> `tag`

- **Constant:** `"LanguagesAndScripts"`

---

### <a name="ReferenceListNode/content/source'CloseCombatBotch"></a> `ReferenceListNode/content/source'CloseCombatBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'CloseCombatBotch/tag">See details</a>

#### <a name="ReferenceListNode/content/source'CloseCombatBotch/tag"></a> `tag`

- **Constant:** `"CloseCombatBotch"`

---

### <a name="ReferenceListNode/content/source'DefenseBotch"></a> `ReferenceListNode/content/source'DefenseBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'DefenseBotch/tag">See details</a>

#### <a name="ReferenceListNode/content/source'DefenseBotch/tag"></a> `tag`

- **Constant:** `"DefenseBotch"`

---

### <a name="ReferenceListNode/content/source'MeleeCombatTechniques"></a> `ReferenceListNode/content/source'MeleeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'MeleeCombatTechniques/tag">See details</a>

#### <a name="ReferenceListNode/content/source'MeleeCombatTechniques/tag"></a> `tag`

- **Constant:** `"MeleeCombatTechniques"`

---

### <a name="ReferenceListNode/content/source'RangedCombatBotch"></a> `ReferenceListNode/content/source'RangedCombatBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'RangedCombatBotch/tag">See details</a>

#### <a name="ReferenceListNode/content/source'RangedCombatBotch/tag"></a> `tag`

- **Constant:** `"RangedCombatBotch"`

---

### <a name="ReferenceListNode/content/source'RangedCombatDefenseBotch"></a> `ReferenceListNode/content/source'RangedCombatDefenseBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'RangedCombatDefenseBotch/tag">See details</a>

#### <a name="ReferenceListNode/content/source'RangedCombatDefenseBotch/tag"></a> `tag`

- **Constant:** `"RangedCombatDefenseBotch"`

---

### <a name="ReferenceListNode/content/source'RangedCombatTechniques"></a> `ReferenceListNode/content/source'RangedCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'RangedCombatTechniques/tag">See details</a>

#### <a name="ReferenceListNode/content/source'RangedCombatTechniques/tag"></a> `tag`

- **Constant:** `"RangedCombatTechniques"`

---

### <a name="ReferenceListNode/content/source'CombatSpecialAbilities"></a> `ReferenceListNode/content/source'CombatSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'CombatSpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'CombatSpecialAbilities/tag"></a> `tag`

- **Constant:** `"CombatSpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'Properties"></a> `ReferenceListNode/content/source'Properties`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Properties/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Properties/tag"></a> `tag`

- **Constant:** `"Properties"`

---

### <a name="ReferenceListNode/content/source'SpellBotch"></a> `ReferenceListNode/content/source'SpellBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'SpellBotch/tag">See details</a>

#### <a name="ReferenceListNode/content/source'SpellBotch/tag"></a> `tag`

- **Constant:** `"SpellBotch"`

---

### <a name="ReferenceListNode/content/source'Services"></a> `ReferenceListNode/content/source'Services`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Services/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Services/tag"></a> `tag`

- **Constant:** `"Services"`

---

### <a name="ReferenceListNode/content/source'ProtectiveAndWardingCircles"></a> `ReferenceListNode/content/source'ProtectiveAndWardingCircles`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'ProtectiveAndWardingCircles/tag">See details</a>

#### <a name="ReferenceListNode/content/source'ProtectiveAndWardingCircles/tag"></a> `tag`

- **Constant:** `"ProtectiveAndWardingCircles"`

---

### <a name="ReferenceListNode/content/source'Elixirs"></a> `ReferenceListNode/content/source'Elixirs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Elixirs/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Elixirs/tag"></a> `tag`

- **Constant:** `"Elixirs"`

---

### <a name="ReferenceListNode/content/source'StaffEnchantments"></a> `ReferenceListNode/content/source'StaffEnchantments`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'StaffEnchantments/tag">See details</a>

#### <a name="ReferenceListNode/content/source'StaffEnchantments/tag"></a> `tag`

- **Constant:** `"StaffEnchantments"`

---

### <a name="ReferenceListNode/content/source'FamiliarsTricks"></a> `ReferenceListNode/content/source'FamiliarsTricks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'FamiliarsTricks/tag">See details</a>

#### <a name="ReferenceListNode/content/source'FamiliarsTricks/tag"></a> `tag`

- **Constant:** `"FamiliarsTricks"`

---

### <a name="ReferenceListNode/content/source'Curses"></a> `ReferenceListNode/content/source'Curses`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Curses/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Curses/tag"></a> `tag`

- **Constant:** `"Curses"`

---

### <a name="ReferenceListNode/content/source'ElvenMagicalSongs"></a> `ReferenceListNode/content/source'ElvenMagicalSongs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'ElvenMagicalSongs/tag">See details</a>

#### <a name="ReferenceListNode/content/source'ElvenMagicalSongs/tag"></a> `tag`

- **Constant:** `"ElvenMagicalSongs"`

---

### <a name="ReferenceListNode/content/source'MagicalSpecialAbilities"></a> `ReferenceListNode/content/source'MagicalSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'MagicalSpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'MagicalSpecialAbilities/tag"></a> `tag`

- **Constant:** `"MagicalSpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'Cantrips"></a> `ReferenceListNode/content/source'Cantrips`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Cantrips/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Cantrips/tag"></a> `tag`

- **Constant:** `"Cantrips"`

---

### <a name="ReferenceListNode/content/source'Spells"></a> `ReferenceListNode/content/source'Spells`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Spells/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Spells/tag"></a> `tag`

- **Constant:** `"Spells"`

---

### <a name="ReferenceListNode/content/source'Rituals"></a> `ReferenceListNode/content/source'Rituals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Rituals/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Rituals/tag"></a> `tag`

- **Constant:** `"Rituals"`

---

### <a name="ReferenceListNode/content/source'Aspects"></a> `ReferenceListNode/content/source'Aspects`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Aspects/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Aspects/tag"></a> `tag`

- **Constant:** `"Aspects"`

---

### <a name="ReferenceListNode/content/source'LiturgyBotch"></a> `ReferenceListNode/content/source'LiturgyBotch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'LiturgyBotch/tag">See details</a>

#### <a name="ReferenceListNode/content/source'LiturgyBotch/tag"></a> `tag`

- **Constant:** `"LiturgyBotch"`

---

### <a name="ReferenceListNode/content/source'KarmaSpecialAbilities"></a> `ReferenceListNode/content/source'KarmaSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'KarmaSpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'KarmaSpecialAbilities/tag"></a> `tag`

- **Constant:** `"KarmaSpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'Blessings"></a> `ReferenceListNode/content/source'Blessings`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Blessings/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Blessings/tag"></a> `tag`

- **Constant:** `"Blessings"`

---

### <a name="ReferenceListNode/content/source'LiturgicalChants"></a> `ReferenceListNode/content/source'LiturgicalChants`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'LiturgicalChants/tag">See details</a>

#### <a name="ReferenceListNode/content/source'LiturgicalChants/tag"></a> `tag`

- **Constant:** `"LiturgicalChants"`

---

### <a name="ReferenceListNode/content/source'Ceremonies"></a> `ReferenceListNode/content/source'Ceremonies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Ceremonies/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Ceremonies/tag"></a> `tag`

- **Constant:** `"Ceremonies"`

---

### <a name="ReferenceListNode/content/source'SocialStatuses"></a> `ReferenceListNode/content/source'SocialStatuses`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'SocialStatuses/tag">See details</a>

#### <a name="ReferenceListNode/content/source'SocialStatuses/tag"></a> `tag`

- **Constant:** `"SocialStatuses"`

---

### <a name="ReferenceListNode/content/source'Poisons"></a> `ReferenceListNode/content/source'Poisons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Poisons/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Poisons/tag"></a> `tag`

- **Constant:** `"Poisons"`

---

### <a name="ReferenceListNode/content/source'Diseases"></a> `ReferenceListNode/content/source'Diseases`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Diseases/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Diseases/tag"></a> `tag`

- **Constant:** `"Diseases"`

---

### <a name="ReferenceListNode/content/source'HealingHerbs"></a> `ReferenceListNode/content/source'HealingHerbs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'HealingHerbs/tag">See details</a>

#### <a name="ReferenceListNode/content/source'HealingHerbs/tag"></a> `tag`

- **Constant:** `"HealingHerbs"`

---

### <a name="ReferenceListNode/content/source'VisibilityModifier"></a> `ReferenceListNode/content/source'VisibilityModifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'VisibilityModifier/tag">See details</a>

#### <a name="ReferenceListNode/content/source'VisibilityModifier/tag"></a> `tag`

- **Constant:** `"VisibilityModifier"`

---

### <a name="ReferenceListNode/content/source'Demons"></a> `ReferenceListNode/content/source'Demons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Demons/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Demons/tag"></a> `tag`

- **Constant:** `"Demons"`

---

### <a name="ReferenceListNode/content/source'Elementals"></a> `ReferenceListNode/content/source'Elementals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Elementals/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Elementals/tag"></a> `tag`

- **Constant:** `"Elementals"`

---

### <a name="ReferenceListNode/content/source'Animals"></a> `ReferenceListNode/content/source'Animals`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Animals/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Animals/tag"></a> `tag`

- **Constant:** `"Animals"`

---

### <a name="ReferenceListNode/content/source'Familiars"></a> `ReferenceListNode/content/source'Familiars`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Familiars/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Familiars/tag"></a> `tag`

- **Constant:** `"Familiars"`

---

### <a name="ReferenceListNode/content/source'AnimalSpecialAbilities"></a> `ReferenceListNode/content/source'AnimalSpecialAbilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'AnimalSpecialAbilities/tag">See details</a>

#### <a name="ReferenceListNode/content/source'AnimalSpecialAbilities/tag"></a> `tag`

- **Constant:** `"AnimalSpecialAbilities"`

---

### <a name="ReferenceListNode/content/source'EquipmentPackages"></a> `ReferenceListNode/content/source'EquipmentPackages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'EquipmentPackages/tag">See details</a>

#### <a name="ReferenceListNode/content/source'EquipmentPackages/tag"></a> `tag`

- **Constant:** `"EquipmentPackages"`

---

### <a name="ReferenceListNode/content/source'Items"></a> `ReferenceListNode/content/source'Items`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'Items/tag">See details</a>

#### <a name="ReferenceListNode/content/source'Items/tag"></a> `tag`

- **Constant:** `"Items"`

---

### <a name="ReferenceListNode/content/source'OptionalRules"></a> `ReferenceListNode/content/source'OptionalRules`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'OptionalRules/tag">See details</a>

#### <a name="ReferenceListNode/content/source'OptionalRules/tag"></a> `tag`

- **Constant:** `"OptionalRules"`

---

### <a name="ReferenceListNode/content/source'ImprovementCost"></a> `ReferenceListNode/content/source'ImprovementCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'ImprovementCost/tag">See details</a>
`target` | Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost. | <a href="#ReferenceListNode/content/source'ImprovementCost/target">See details</a>
`maximum_rating` | The highest value the improvement cost are displayed for. | <a href="#ReferenceListNode/content/source'ImprovementCost/maximum_rating">See details</a>

#### <a name="ReferenceListNode/content/source'ImprovementCost/tag"></a> `tag`

- **Constant:** `"ImprovementCost"`

#### <a name="ReferenceListNode/content/source'ImprovementCost/target"></a> `target`

Define if the cost for attributes or skills should be defined. The
cost for attributes start with value 9, while the cost for skills
start with 1 in addition to possible activation cost.

- **Type:** Union
- **Cases:** <a href="#ReferenceListNode/content/source'ImprovementCost/target'Attributes">ReferenceListNode/content/source'ImprovementCost/target'Attributes</a> | <a href="#ReferenceListNode/content/source'ImprovementCost/target'Skills">ReferenceListNode/content/source'ImprovementCost/target'Skills</a>

#### <a name="ReferenceListNode/content/source'ImprovementCost/maximum_rating"></a> `maximum_rating`

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

### <a name="ReferenceListNode/content/source'ImprovementCost/target'Attributes"></a> `ReferenceListNode/content/source'ImprovementCost/target'Attributes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'ImprovementCost/target'Attributes/tag">See details</a>

#### <a name="ReferenceListNode/content/source'ImprovementCost/target'Attributes/tag"></a> `tag`

- **Constant:** `"Attributes"`

---

### <a name="ReferenceListNode/content/source'ImprovementCost/target'Skills"></a> `ReferenceListNode/content/source'ImprovementCost/target'Skills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceListNode/content/source'ImprovementCost/target'Skills/tag">See details</a>

#### <a name="ReferenceListNode/content/source'ImprovementCost/target'Skills/tag"></a> `tag`

- **Constant:** `"Skills"`

---

### <a name="ReferenceListNode/content/translations[key]"></a> `ReferenceListNode/content/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`caption` | The list's or table's caption. | <a href="#ReferenceListNode/content/translations[key]/caption">See details</a>

#### <a name="ReferenceListNode/content/translations[key]/caption"></a> `caption`

The list's or table's caption.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ReferenceNode"></a> `ReferenceNode`

Generate the full text for a single entry as part of this core rule's text.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ReferenceNode/tag">See details</a>
`source` |  | <a href="#ReferenceNode/source">See details</a>

#### <a name="ReferenceNode/tag"></a> `tag`

- **Constant:** `"DeriveOne"`

#### <a name="ReferenceNode/source"></a> `source`

- **Type:** <a href="#ReferenceNode/source">Object</a>

---

### <a name="ReferenceNode/source"></a> `ReferenceNode/source`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ReferenceNode/source/id">See details</a>

#### <a name="ReferenceNode/source/id"></a> `id`

- **Type:** <a href="../_Identifier.md#CoreRuleDerivableContentIdentifier">CoreRuleDerivableContentIdentifier</a>
