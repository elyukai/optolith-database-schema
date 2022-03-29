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

### <a name="SelectOptions"></a> `SelectOptions`

Definitions for possible options for the activatable entry. They can either
be derived from entry categories or be defined explicitly. Both can happen as
well, but if there is an explicitly defined select option and a derived
select option has the same identifier (which may only happen if skill or
combat technique identifiers are used for explicit select options), the
explicit definition overwrites the derived option.

Note that this is only a full definition of options for simple logic that can
be made explicit using the more detailed configuration for both derived
categories and explicit options. There are quite a few entries whose option
logic cannot be fully represented here, so that it needs to be implemented
manually.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`derived?` | An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then. | <a href="#SelectOptions/derived">See details</a>
`explicit?` | A list of explicit select options. If the identifier has a specific type, its entry is the base of this select option, where values defined here override values from the base. Define the `src` property if the options are not derived from the rules text of the advantage/disadvantage/special ability but instead are listed in a separate block and/or on a separate page. | <a href="#SelectOptions/explicit">See details</a>

#### <a name="SelectOptions/derived"></a> `derived?`

An entry category with optional further configuration. All available
entries from the specified categories will be included as separate select
options. You can also specify a set of groups that should only be
included. Groups not mentioned will be excluded then.

- **Type:** <a href="#CategoryOption">CategoryOption</a>

#### <a name="SelectOptions/explicit"></a> `explicit?`

A list of explicit select options. If the identifier has a specific type,
its entry is the base of this select option, where values defined here
override values from the base. Define the `src` property if the options
are not derived from the rules text of the advantage/disadvantage/special
ability but instead are listed in a separate block and/or on a separate
page.

- **Type:** List
- **Items:** <a href="#SelectOptions/explicit[]">SelectOptions/explicit[]</a>
- **Minimum Items:** `1`

---

### <a name="SelectOptions/explicit[]"></a> `SelectOptions/explicit[]`

- **Type:** <a href="#ExplicitOption">ExplicitOption</a>

---

### <a name="CategoryOption"></a> `CategoryOption`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Blessings">CategoryOption'Blessings</a> | <a href="#CategoryOption'Cantrips">CategoryOption'Cantrips</a> | <a href="#CategoryOption'TradeSecrets">CategoryOption'TradeSecrets</a> | <a href="#CategoryOption'Scripts">CategoryOption'Scripts</a> | <a href="#CategoryOption'AnimalShapes">CategoryOption'AnimalShapes</a> | <a href="#CategoryOption'ArcaneBardTraditions">CategoryOption'ArcaneBardTraditions</a> | <a href="#CategoryOption'ArcaneDancerTraditions">CategoryOption'ArcaneDancerTraditions</a> | <a href="#CategoryOption'SexPractices">CategoryOption'SexPractices</a> | <a href="#CategoryOption'Races">CategoryOption'Races</a> | <a href="#CategoryOption'Cultures">CategoryOption'Cultures</a> | <a href="#CategoryOption'BlessedTraditions">CategoryOption'BlessedTraditions</a> | <a href="#CategoryOption'Elements">CategoryOption'Elements</a> | <a href="#CategoryOption'Properties">CategoryOption'Properties</a> | <a href="#CategoryOption'Aspects">CategoryOption'Aspects</a> | <a href="#CategoryOption'Diseases">CategoryOption'Diseases</a> | <a href="#CategoryOption'Poisons">CategoryOption'Poisons</a> | <a href="#CategoryOption'Languages">CategoryOption'Languages</a> | <a href="#CategoryOption'Skills">CategoryOption'Skills</a>

---

### <a name="CategoryOption'Blessings"></a> `CategoryOption'Blessings`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Blessings/tag">See details</a>

#### <a name="CategoryOption'Blessings/tag"></a> `tag`

- **Constant:** `"Blessings"`

---

### <a name="CategoryOption'Cantrips"></a> `CategoryOption'Cantrips`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Cantrips/tag">See details</a>

#### <a name="CategoryOption'Cantrips/tag"></a> `tag`

- **Constant:** `"Cantrips"`

---

### <a name="CategoryOption'TradeSecrets"></a> `CategoryOption'TradeSecrets`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'TradeSecrets/tag">See details</a>

#### <a name="CategoryOption'TradeSecrets/tag"></a> `tag`

- **Constant:** `"TradeSecrets"`

---

### <a name="CategoryOption'Scripts"></a> `CategoryOption'Scripts`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Scripts/tag">See details</a>

#### <a name="CategoryOption'Scripts/tag"></a> `tag`

- **Constant:** `"Scripts"`

---

### <a name="CategoryOption'AnimalShapes"></a> `CategoryOption'AnimalShapes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'AnimalShapes/tag">See details</a>

#### <a name="CategoryOption'AnimalShapes/tag"></a> `tag`

- **Constant:** `"AnimalShapes"`

---

### <a name="CategoryOption'ArcaneBardTraditions"></a> `CategoryOption'ArcaneBardTraditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'ArcaneBardTraditions/tag">See details</a>

#### <a name="CategoryOption'ArcaneBardTraditions/tag"></a> `tag`

- **Constant:** `"ArcaneBardTraditions"`

---

### <a name="CategoryOption'ArcaneDancerTraditions"></a> `CategoryOption'ArcaneDancerTraditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'ArcaneDancerTraditions/tag">See details</a>

#### <a name="CategoryOption'ArcaneDancerTraditions/tag"></a> `tag`

- **Constant:** `"ArcaneDancerTraditions"`

---

### <a name="CategoryOption'SexPractices"></a> `CategoryOption'SexPractices`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'SexPractices/tag">See details</a>

#### <a name="CategoryOption'SexPractices/tag"></a> `tag`

- **Constant:** `"SexPractices"`

---

### <a name="CategoryOption'Races"></a> `CategoryOption'Races`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Races/tag">See details</a>

#### <a name="CategoryOption'Races/tag"></a> `tag`

- **Constant:** `"Races"`

---

### <a name="CategoryOption'Cultures"></a> `CategoryOption'Cultures`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Cultures/tag">See details</a>

#### <a name="CategoryOption'Cultures/tag"></a> `tag`

- **Constant:** `"Cultures"`

---

### <a name="CategoryOption'BlessedTraditions"></a> `CategoryOption'BlessedTraditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'BlessedTraditions/tag">See details</a>
`require_principles?` | Should the principles (code) of the tradition be required to select the respective tradition? | <a href="#CategoryOption'BlessedTraditions/require_principles">See details</a>

#### <a name="CategoryOption'BlessedTraditions/tag"></a> `tag`

- **Constant:** `"BlessedTraditions"`

#### <a name="CategoryOption'BlessedTraditions/require_principles"></a> `require_principles?`

Should the principles (code) of the tradition be required to select the
respective tradition?

- **Constant:** `true`

---

### <a name="CategoryOption'Elements"></a> `CategoryOption'Elements`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Elements/tag">See details</a>
`specific?` | Only include entries with the listed identifiers. | <a href="#CategoryOption'Elements/specific">See details</a>

#### <a name="CategoryOption'Elements/tag"></a> `tag`

- **Constant:** `"Elements"`

#### <a name="CategoryOption'Elements/specific"></a> `specific?`

Only include entries with the listed identifiers.

- **Type:** List
- **Items:** <a href="#CategoryOption'Elements/specific[]">CategoryOption'Elements/specific[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="CategoryOption'Elements/specific[]"></a> `CategoryOption'Elements/specific[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The element's identifier. | <a href="#CategoryOption'Elements/specific[]/id">See details</a>

#### <a name="CategoryOption'Elements/specific[]/id"></a> `id`

The element's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="CategoryOption'Properties"></a> `CategoryOption'Properties`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Properties/tag">See details</a>
`require_knowledge?` | Does each property require it's corresponding property knowledge? | <a href="#CategoryOption'Properties/require_knowledge">See details</a>
`require_minimum_spellworks_on?` | Require a minimum number of spellworks of the respective property to be on a minimum skill rating. | <a href="#CategoryOption'Properties/require_minimum_spellworks_on">See details</a>

#### <a name="CategoryOption'Properties/tag"></a> `tag`

- **Constant:** `"Properties"`

#### <a name="CategoryOption'Properties/require_knowledge"></a> `require_knowledge?`

Does each property require it's corresponding property knowledge?

- **Constant:** `true`

#### <a name="CategoryOption'Properties/require_minimum_spellworks_on"></a> `require_minimum_spellworks_on?`

Require a minimum number of spellworks of the respective property to be
on a minimum skill rating.

- **Type:** <a href="#CategoryOption'Properties/require_minimum_spellworks_on">Object</a>

---

### <a name="CategoryOption'Properties/require_minimum_spellworks_on"></a> `CategoryOption'Properties/require_minimum_spellworks_on`

Require a minimum number of spellworks of the respective property to be
on a minimum skill rating.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The minimum number of spellworks that need to be on the defined minimum skill rating. | <a href="#CategoryOption'Properties/require_minimum_spellworks_on/number">See details</a>
`value` | The minimum skill rating the defined minimum number of spellworks need to be on. | <a href="#CategoryOption'Properties/require_minimum_spellworks_on/value">See details</a>

#### <a name="CategoryOption'Properties/require_minimum_spellworks_on/number"></a> `number`

The minimum number of spellworks that need to be on the defined minimum
skill rating.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CategoryOption'Properties/require_minimum_spellworks_on/value"></a> `value`

The minimum skill rating the defined minimum number of spellworks need
to be on.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CategoryOption'Aspects"></a> `CategoryOption'Aspects`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Aspects/tag">See details</a>
`require_knowledge?` | Does each aspect require it's corresponding aspect knowledge? | <a href="#CategoryOption'Aspects/require_knowledge">See details</a>
`use_master_of_suffix_as_name?` | The generated name should be the *Master of (Aspect)* suffix for this aspect instead of the aspect's name. If an aspect does not provide a suffix (such as the General aspect), it is automatically excluded from the list. | <a href="#CategoryOption'Aspects/use_master_of_suffix_as_name">See details</a>
`require_minimum_liturgies_on?` | Require a minimum number of liturgies of the respective aspect to be on a minimum skill rating. | <a href="#CategoryOption'Aspects/require_minimum_liturgies_on">See details</a>

#### <a name="CategoryOption'Aspects/tag"></a> `tag`

- **Constant:** `"Aspects"`

#### <a name="CategoryOption'Aspects/require_knowledge"></a> `require_knowledge?`

Does each aspect require it's corresponding aspect knowledge?

- **Constant:** `true`

#### <a name="CategoryOption'Aspects/use_master_of_suffix_as_name"></a> `use_master_of_suffix_as_name?`

The generated name should be the *Master of (Aspect)* suffix for this
aspect instead of the aspect's name. If an aspect does not provide a
suffix (such as the General aspect), it is automatically excluded from
the list.

- **Constant:** `true`

#### <a name="CategoryOption'Aspects/require_minimum_liturgies_on"></a> `require_minimum_liturgies_on?`

Require a minimum number of liturgies of the respective aspect to be on a
minimum skill rating.

- **Type:** <a href="#CategoryOption'Aspects/require_minimum_liturgies_on">Object</a>

---

### <a name="CategoryOption'Aspects/require_minimum_liturgies_on"></a> `CategoryOption'Aspects/require_minimum_liturgies_on`

Require a minimum number of liturgies of the respective aspect to be on a
minimum skill rating.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The minimum number of liturgies that need to be on the defined minimum skill rating. | <a href="#CategoryOption'Aspects/require_minimum_liturgies_on/number">See details</a>
`value` | The minimum skill rating the defined minimum number of liturgies need to be on. | <a href="#CategoryOption'Aspects/require_minimum_liturgies_on/value">See details</a>

#### <a name="CategoryOption'Aspects/require_minimum_liturgies_on/number"></a> `number`

The minimum number of liturgies that need to be on the defined minimum
skill rating.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CategoryOption'Aspects/require_minimum_liturgies_on/value"></a> `value`

The minimum skill rating the defined minimum number of liturgies need
to be on.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CategoryOption'Diseases"></a> `CategoryOption'Diseases`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Diseases/tag">See details</a>
`use_half_level_as_ap_value?` | Only convert half the disease level into the AP value. | <a href="#CategoryOption'Diseases/use_half_level_as_ap_value">See details</a>

#### <a name="CategoryOption'Diseases/tag"></a> `tag`

- **Constant:** `"Diseases"`

#### <a name="CategoryOption'Diseases/use_half_level_as_ap_value"></a> `use_half_level_as_ap_value?`

Only convert half the disease level into the AP value.

- **Constant:** `true`

---

### <a name="CategoryOption'Poisons"></a> `CategoryOption'Poisons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Poisons/tag">See details</a>
`use_half_level_as_ap_value?` | Only convert half the poison level into the AP value. | <a href="#CategoryOption'Poisons/use_half_level_as_ap_value">See details</a>

#### <a name="CategoryOption'Poisons/tag"></a> `tag`

- **Constant:** `"Poisons"`

#### <a name="CategoryOption'Poisons/use_half_level_as_ap_value"></a> `use_half_level_as_ap_value?`

Only convert half the poison level into the AP value.

- **Constant:** `true`

---

### <a name="CategoryOption'Languages"></a> `CategoryOption'Languages`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Languages/tag">See details</a>
`prerequisites?` | Generate prerequisites for each entry of the category. | <a href="#CategoryOption'Languages/prerequisites">See details</a>

#### <a name="CategoryOption'Languages/tag"></a> `tag`

- **Constant:** `"Languages"`

#### <a name="CategoryOption'Languages/prerequisites"></a> `prerequisites?`

Generate prerequisites for each entry of the category.

- **Type:** List
- **Items:** <a href="#CategoryOption'Languages/prerequisites[]">CategoryOption'Languages/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="CategoryOption'Languages/prerequisites[]"></a> `CategoryOption'Languages/prerequisites[]`

- **Type:** <a href="#OptionOptionPrerequisite">OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills"></a> `CategoryOption'Skills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/tag">See details</a>
`categories` | A list of skill categories. | <a href="#CategoryOption'Skills/categories">See details</a>
`ap_value?` | Generate AP values for each entry. | <a href="#CategoryOption'Skills/ap_value">See details</a>

#### <a name="CategoryOption'Skills/tag"></a> `tag`

- **Constant:** `"Skills"`

#### <a name="CategoryOption'Skills/categories"></a> `categories`

A list of skill categories.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]">CategoryOption'Skills/categories[]</a>
- **Minimum Items:** `1`

#### <a name="CategoryOption'Skills/ap_value"></a> `ap_value?`

Generate AP values for each entry.

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/ap_value'0">CategoryOption'Skills/ap_value'0</a> | <a href="#CategoryOption'Skills/ap_value'CombatTechniques">CategoryOption'Skills/ap_value'CombatTechniques</a>

---

### <a name="CategoryOption'Skills/categories[]"></a> `CategoryOption'Skills/categories[]`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/categories[]'Skills">CategoryOption'Skills/categories[]'Skills</a> | <a href="#CategoryOption'Skills/categories[]'1">CategoryOption'Skills/categories[]'1</a>

---

### <a name="CategoryOption'Skills/categories[]'Skills"></a> `CategoryOption'Skills/categories[]'Skills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/categories[]'Skills/tag">See details</a>
`groups?` | Only include entries of the specified groups. | <a href="#CategoryOption'Skills/categories[]'Skills/groups">See details</a>
`specific?` | Only include (`Intersection`) or exclude (`Difference`) specific skills. | <a href="#CategoryOption'Skills/categories[]'Skills/specific">See details</a>
`skill_applications?` | Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry. | <a href="#CategoryOption'Skills/categories[]'Skills/skill_applications">See details</a>
`skill_uses?` | Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry. | <a href="#CategoryOption'Skills/categories[]'Skills/skill_uses">See details</a>
`prerequisites?` | Generate prerequisites for each entry of the category. | <a href="#CategoryOption'Skills/categories[]'Skills/prerequisites">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/tag"></a> `tag`

- **Constant:** `"Skills"`

#### <a name="CategoryOption'Skills/categories[]'Skills/groups"></a> `groups?`

Only include entries of the specified groups.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'Skills/groups[]">CategoryOption'Skills/categories[]'Skills/groups[]</a>
- **Minimum Items:** `1`

#### <a name="CategoryOption'Skills/categories[]'Skills/specific"></a> `specific?`

Only include (`Intersection`) or exclude (`Difference`) specific
skills.

- **Type:** <a href="#CategoryOption'Skills/categories[]'Skills/specific">Object</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_applications"></a> `skill_applications?`

Registers new applications, which get enabled once this entry is
activated with its respective select option. It specifies an
entry-unique identifier, the skill it belongs to is derived from the
select option automatically. A translation can be left out if its
name equals the name of the origin entry.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'Skills/skill_applications[]">CategoryOption'Skills/categories[]'Skills/skill_applications[]</a>
- **Minimum Items:** `1`

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_uses"></a> `skill_uses?`

Registers uses, which get enabled once this entry is activated with
its respective select option. It specifies an entry-unique
identifier, the skill it belongs to is derived from the select option
automatically. A translation can be left out if its name equals the
name of the origin entry.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'Skills/skill_uses[]">CategoryOption'Skills/categories[]'Skills/skill_uses[]</a>
- **Minimum Items:** `1`

#### <a name="CategoryOption'Skills/categories[]'Skills/prerequisites"></a> `prerequisites?`

Generate prerequisites for each entry of the category.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'Skills/prerequisites[]">CategoryOption'Skills/categories[]'Skills/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="CategoryOption'Skills/categories[]'Skills/groups[]"></a> `CategoryOption'Skills/categories[]'Skills/groups[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill group's identifier. | <a href="#CategoryOption'Skills/categories[]'Skills/groups[]/id">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/groups[]/id"></a> `id`

The skill group's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `5`

---

### <a name="CategoryOption'Skills/categories[]'Skills/specific"></a> `CategoryOption'Skills/categories[]'Skills/specific`

Only include (`Intersection`) or exclude (`Difference`) specific
skills.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`operation` |  | <a href="#CategoryOption'Skills/categories[]'Skills/specific/operation">See details</a>
`list` | The list of specific skills. | <a href="#CategoryOption'Skills/categories[]'Skills/specific/list">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/specific/operation"></a> `operation`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/categories[]'Skills/specific/operation'Intersection">CategoryOption'Skills/categories[]'Skills/specific/operation'Intersection</a> | <a href="#CategoryOption'Skills/categories[]'Skills/specific/operation'Difference">CategoryOption'Skills/categories[]'Skills/specific/operation'Difference</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/specific/list"></a> `list`

The list of specific skills.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'Skills/specific/list[]">CategoryOption'Skills/categories[]'Skills/specific/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="CategoryOption'Skills/categories[]'Skills/specific/operation'Intersection"></a> `CategoryOption'Skills/categories[]'Skills/specific/operation'Intersection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/categories[]'Skills/specific/operation'Intersection/tag">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/specific/operation'Intersection/tag"></a> `tag`

- **Constant:** `"Intersection"`

---

### <a name="CategoryOption'Skills/categories[]'Skills/specific/operation'Difference"></a> `CategoryOption'Skills/categories[]'Skills/specific/operation'Difference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/categories[]'Skills/specific/operation'Difference/tag">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/specific/operation'Difference/tag"></a> `tag`

- **Constant:** `"Difference"`

---

### <a name="CategoryOption'Skills/categories[]'Skills/specific/list[]"></a> `CategoryOption'Skills/categories[]'Skills/specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CategoryOption'Skills/categories[]'Skills/specific/list[]/id">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/specific/list[]/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `59`

---

### <a name="CategoryOption'Skills/categories[]'Skills/skill_applications[]"></a> `CategoryOption'Skills/categories[]'Skills/skill_applications[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The application's identifier. An entry-unique, increasing integer. | <a href="#CategoryOption'Skills/categories[]'Skills/skill_applications[]/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_applications[]/id"></a> `id`

The application's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations[key]">CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations[key]"></a> `CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the application if different from the activatable entry's name. | <a href="#CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations[key]/name">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_applications[]/translations[key]/name"></a> `name`

The name of the application if different from the activatable
entry's
name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CategoryOption'Skills/categories[]'Skills/skill_uses[]"></a> `CategoryOption'Skills/categories[]'Skills/skill_uses[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The use's identifier. An entry-unique, increasing integer. | <a href="#CategoryOption'Skills/categories[]'Skills/skill_uses[]/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_uses[]/id"></a> `id`

The use's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations[key]">CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations[key]"></a> `CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the use if different from the activatable entry's name. | <a href="#CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations[key]/name">See details</a>

#### <a name="CategoryOption'Skills/categories[]'Skills/skill_uses[]/translations[key]/name"></a> `name`

The name of the use if different from the activatable entry's
name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CategoryOption'Skills/categories[]'Skills/prerequisites[]"></a> `CategoryOption'Skills/categories[]'Skills/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionSkillSelfPrerequisite">CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionSkillSelfPrerequisite</a> | <a href="#CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionOptionPrerequisite">CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionSkillSelfPrerequisite"></a> `CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionSkillSelfPrerequisite`

- **Type:** <a href="#OptionSkillSelfPrerequisite">OptionSkillSelfPrerequisite</a>

---

### <a name="CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionOptionPrerequisite"></a> `CategoryOption'Skills/categories[]'Skills/prerequisites[]'OptionOptionPrerequisite`

- **Type:** <a href="#OptionOptionPrerequisite">OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills/categories[]'1"></a> `CategoryOption'Skills/categories[]'1`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/categories[]'1/tag">See details</a>
`specific?` | Only include (`Intersection`) or exclude (`Difference`) specific entries. | <a href="#CategoryOption'Skills/categories[]'1/specific">See details</a>
`prerequisites?` | Generate prerequisites for each entry of the category. | <a href="#CategoryOption'Skills/categories[]'1/prerequisites">See details</a>

#### <a name="CategoryOption'Skills/categories[]'1/tag"></a> `tag`

- **Type:** <a href="#SkillWithEnhancementsCategory">SkillWithEnhancementsCategory</a>

#### <a name="CategoryOption'Skills/categories[]'1/specific"></a> `specific?`

Only include (`Intersection`) or exclude (`Difference`) specific
entries.

- **Type:** <a href="#CategoryOption'Skills/categories[]'1/specific">Object</a>

#### <a name="CategoryOption'Skills/categories[]'1/prerequisites"></a> `prerequisites?`

Generate prerequisites for each entry of the category.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'1/prerequisites[]">CategoryOption'Skills/categories[]'1/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="CategoryOption'Skills/categories[]'1/specific"></a> `CategoryOption'Skills/categories[]'1/specific`

Only include (`Intersection`) or exclude (`Difference`) specific
entries.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`operation` |  | <a href="#CategoryOption'Skills/categories[]'1/specific/operation">See details</a>
`list` | The list of specific entries. | <a href="#CategoryOption'Skills/categories[]'1/specific/list">See details</a>

#### <a name="CategoryOption'Skills/categories[]'1/specific/operation"></a> `operation`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/categories[]'1/specific/operation'Intersection">CategoryOption'Skills/categories[]'1/specific/operation'Intersection</a> | <a href="#CategoryOption'Skills/categories[]'1/specific/operation'Difference">CategoryOption'Skills/categories[]'1/specific/operation'Difference</a>

#### <a name="CategoryOption'Skills/categories[]'1/specific/list"></a> `list`

The list of specific entries.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/categories[]'1/specific/list[]">CategoryOption'Skills/categories[]'1/specific/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="CategoryOption'Skills/categories[]'1/specific/operation'Intersection"></a> `CategoryOption'Skills/categories[]'1/specific/operation'Intersection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/categories[]'1/specific/operation'Intersection/tag">See details</a>

#### <a name="CategoryOption'Skills/categories[]'1/specific/operation'Intersection/tag"></a> `tag`

- **Constant:** `"Intersection"`

---

### <a name="CategoryOption'Skills/categories[]'1/specific/operation'Difference"></a> `CategoryOption'Skills/categories[]'1/specific/operation'Difference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/categories[]'1/specific/operation'Difference/tag">See details</a>

#### <a name="CategoryOption'Skills/categories[]'1/specific/operation'Difference/tag"></a> `tag`

- **Constant:** `"Difference"`

---

### <a name="CategoryOption'Skills/categories[]'1/specific/list[]"></a> `CategoryOption'Skills/categories[]'1/specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The entry's identifier. | <a href="#CategoryOption'Skills/categories[]'1/specific/list[]/id">See details</a>

#### <a name="CategoryOption'Skills/categories[]'1/specific/list[]/id"></a> `id`

The entry's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `59`

---

### <a name="CategoryOption'Skills/categories[]'1/prerequisites[]"></a> `CategoryOption'Skills/categories[]'1/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/categories[]'1/prerequisites[]'OptionSkillSelfPrerequisite">CategoryOption'Skills/categories[]'1/prerequisites[]'OptionSkillSelfPrerequisite</a> | <a href="#CategoryOption'Skills/categories[]'1/prerequisites[]'OptionOptionPrerequisite">CategoryOption'Skills/categories[]'1/prerequisites[]'OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills/categories[]'1/prerequisites[]'OptionSkillSelfPrerequisite"></a> `CategoryOption'Skills/categories[]'1/prerequisites[]'OptionSkillSelfPrerequisite`

- **Type:** <a href="#OptionSkillSelfPrerequisite">OptionSkillSelfPrerequisite</a>

---

### <a name="CategoryOption'Skills/categories[]'1/prerequisites[]'OptionOptionPrerequisite"></a> `CategoryOption'Skills/categories[]'1/prerequisites[]'OptionOptionPrerequisite`

- **Type:** <a href="#OptionOptionPrerequisite">OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills/ap_value'0"></a> `CategoryOption'Skills/ap_value'0`

Generate AP values for each entry.

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost">CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost</a> | <a href="#CategoryOption'Skills/ap_value'0'Fixed">CategoryOption'Skills/ap_value'0'Fixed</a>

---

### <a name="CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost"></a> `CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost/tag">See details</a>
`multiplier?` | This number is multiplied with the improvement cost of the entry (A = 1 to D = 4). | <a href="#CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost/multiplier">See details</a>

#### <a name="CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost/tag"></a> `tag`

- **Constant:** `"DerivedFromImprovementCost"`

#### <a name="CategoryOption'Skills/ap_value'0'DerivedFromImprovementCost/multiplier"></a> `multiplier?`

This number is multiplied with the improvement cost of the entry
(A = 1 to D = 4).

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="CategoryOption'Skills/ap_value'0'Fixed"></a> `CategoryOption'Skills/ap_value'0'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'0'Fixed/tag">See details</a>
`map` | A mapping of skill identifiers to their specific AP values. | <a href="#CategoryOption'Skills/ap_value'0'Fixed/map">See details</a>
`default` | The default value of an entry. Used as a fallback if no value is found in `list`. | <a href="#CategoryOption'Skills/ap_value'0'Fixed/default">See details</a>

#### <a name="CategoryOption'Skills/ap_value'0'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="CategoryOption'Skills/ap_value'0'Fixed/map"></a> `map`

A mapping of skill identifiers to their specific AP values.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/ap_value'0'Fixed/map[]">CategoryOption'Skills/ap_value'0'Fixed/map[]</a>

#### <a name="CategoryOption'Skills/ap_value'0'Fixed/default"></a> `default`

The default value of an entry. Used as a fallback if no value is
found in `list`.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CategoryOption'Skills/ap_value'0'Fixed/map[]"></a> `CategoryOption'Skills/ap_value'0'Fixed/map[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CategoryOption'Skills/ap_value'0'Fixed/map[]/id">See details</a>
`ap_value` | The AP value for the specified entry. | <a href="#CategoryOption'Skills/ap_value'0'Fixed/map[]/ap_value">See details</a>

#### <a name="CategoryOption'Skills/ap_value'0'Fixed/map[]/id"></a> `id`

The skill's identifier.

- **Type:** <a href="./_Identifier.md#SkillIdentifier">SkillIdentifier</a>

#### <a name="CategoryOption'Skills/ap_value'0'Fixed/map[]/ap_value"></a> `ap_value`

The AP value for the specified entry.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques"></a> `CategoryOption'Skills/ap_value'CombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/tag">See details</a>
`categories` | A list of combat technique categories. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories">See details</a>
`ap_value?` | Generate AP values for each entry. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/tag"></a> `tag`

- **Constant:** `"CombatTechniques"`

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories"></a> `categories`

A list of combat technique categories.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]">CategoryOption'Skills/ap_value'CombatTechniques/categories[]</a>
- **Minimum Items:** `1`

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value"></a> `ap_value?`

Generate AP values for each entry.

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost">CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost</a> | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed">CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed</a>

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/tag">See details</a>
`specific?` | Only include (`Intersection`) or exclude (`Difference`) specific entries. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific">See details</a>
`prerequisites?` | Generate prerequisites for each entry of the category. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/tag"></a> `tag`

- **Type:** <a href="#CombatTechniqueCategory">CombatTechniqueCategory</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific"></a> `specific?`

Only include (`Intersection`) or exclude (`Difference`) specific
entries.

- **Type:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific">Object</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites"></a> `prerequisites?`

Generate prerequisites for each entry of the category.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]">CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific`

Only include (`Intersection`) or exclude (`Difference`) specific
entries.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`operation` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation">See details</a>
`list` | The list of specific entries. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation"></a> `operation`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Intersection">CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Intersection</a> | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Difference">CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Difference</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list"></a> `list`

The list of specific entries.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list[]">CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Intersection"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Intersection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Intersection/tag">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Intersection/tag"></a> `tag`

- **Constant:** `"Intersection"`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Difference"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Difference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Difference/tag">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/operation'Difference/tag"></a> `tag`

- **Constant:** `"Difference"`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list[]"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The entry's identifier. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list[]/id">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/specific/list[]/id"></a> `id`

The entry's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `59`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionSkillSelfPrerequisite">CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionSkillSelfPrerequisite</a> | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionOptionPrerequisite">CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionSkillSelfPrerequisite"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionSkillSelfPrerequisite`

- **Type:** <a href="#OptionSkillSelfPrerequisite">OptionSkillSelfPrerequisite</a>

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionOptionPrerequisite"></a> `CategoryOption'Skills/ap_value'CombatTechniques/categories[]/prerequisites[]'OptionOptionPrerequisite`

- **Type:** <a href="#OptionOptionPrerequisite">OptionOptionPrerequisite</a>

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost"></a> `CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost/tag">See details</a>
`multiplier?` | This number is multiplied with the improvement cost of the entry (A = 1 to D = 4). | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost/multiplier">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost/tag"></a> `tag`

- **Constant:** `"DerivedFromImprovementCost"`

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'DerivedFromImprovementCost/multiplier"></a> `multiplier?`

This number is multiplied with the improvement cost of the entry
(A = 1 to D = 4).

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed"></a> `CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/tag">See details</a>
`map` | A mapping of skill identifiers to their specific AP values. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map">See details</a>
`default` | The default value of an entry. Used as a fallback if no value is found in `list`. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/default">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map"></a> `map`

A mapping of skill identifiers to their specific AP values.

- **Type:** List
- **Items:** <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]">CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/default"></a> `default`

The default value of an entry. Used as a fallback if no value is
found in `list`.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]"></a> `CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]/id">See details</a>
`ap_value` | The AP value for the specified entry. | <a href="#CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]/ap_value">See details</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]/id"></a> `id`

The skill's identifier.

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="CategoryOption'Skills/ap_value'CombatTechniques/ap_value'Fixed/map[]/ap_value"></a> `ap_value`

The AP value for the specified entry.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillWithEnhancementsCategory"></a> `SkillWithEnhancementsCategory`

- **Possible values:** `"Spells"`, `"Rituals"`, `"LiturgicalChants"`, `"Ceremonies"`

---

### <a name="CombatTechniqueCategory"></a> `CombatTechniqueCategory`

- **Possible values:** `"CloseCombatTechniques"`, `"RangedCombatTechniques"`

---

### <a name="OptionSkillSelfPrerequisite"></a> `OptionSkillSelfPrerequisite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OptionSkillSelfPrerequisite/tag">See details</a>
`value` | The entry requires itself on a certain Skill Rating. | <a href="#OptionSkillSelfPrerequisite/value">See details</a>

#### <a name="OptionSkillSelfPrerequisite/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="OptionSkillSelfPrerequisite/value"></a> `value`

The entry requires itself on a certain Skill Rating.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="OptionOptionPrerequisite"></a> `OptionOptionPrerequisite`

The entry requires or prohibits itself as a select option of another entry.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OptionOptionPrerequisite/tag">See details</a>
`id` | The target entry's identifier. | <a href="#OptionOptionPrerequisite/id">See details</a>
`active` | Is the select option required (`true`) or prohibited (`false`)? | <a href="#OptionOptionPrerequisite/active">See details</a>
`level?` | The required level, if any. | <a href="#OptionOptionPrerequisite/level">See details</a>

#### <a name="OptionOptionPrerequisite/tag"></a> `tag`

- **Constant:** `"SelectOption"`

#### <a name="OptionOptionPrerequisite/id"></a> `id`

The target entry's identifier.

- **Type:** <a href="./_Identifier.md#ActivatableIdentifier">ActivatableIdentifier</a>

#### <a name="OptionOptionPrerequisite/active"></a> `active`

Is the select option required (`true`) or prohibited (`false`)?

- **Type:** Boolean

#### <a name="OptionOptionPrerequisite/level"></a> `level?`

The required level, if any.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="ExplicitOption"></a> `ExplicitOption`

- **Type:** Union
- **Cases:** <a href="#ExplicitOption'General">ExplicitOption'General</a> | <a href="#ExplicitOption'Skill">ExplicitOption'Skill</a> | <a href="#ExplicitOption'CombatTechnique">ExplicitOption'CombatTechnique</a>

---

### <a name="ExplicitOption'General"></a> `ExplicitOption'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExplicitOption'General/tag">See details</a>
`id` | The option's identifier. An unique, increasing integer. | <a href="#ExplicitOption'General/id">See details</a>
`profession_only?` | Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user. | <a href="#ExplicitOption'General/profession_only">See details</a>
`skill_applications?` | Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitOption'General/skill_applications">See details</a>
`skill_uses?` | Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitOption'General/skill_uses">See details</a>
`prerequisites?` |  | <a href="#ExplicitOption'General/prerequisites">See details</a>
`ap_value?` | Specific AP cost for the select option. | <a href="#ExplicitOption'General/ap_value">See details</a>
`src?` |  | <a href="#ExplicitOption'General/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitOption'General/translations">See details</a>

#### <a name="ExplicitOption'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="ExplicitOption'General/id"></a> `id`

The option's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'General/profession_only"></a> `profession_only?`

Sometimes, professions use specific text selections that are not
contained in described lists. This ensures you can use them for
professions only. They are not going to be displayed as options to the
user.

- **Constant:** `true`

#### <a name="ExplicitOption'General/skill_applications"></a> `skill_applications?`

Registers new applications, which get enabled once this entry is
activated with its respective select option. It specifies an entry-unique
identifier and the skill it belongs to. A translation can be left out if
its name equals the name of the origin select option.

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="ExplicitOption'General/skill_uses"></a> `skill_uses?`

Registers uses, which get enabled once this entry is activated with its
respective select option. It specifies an entry-unique identifier and the
skill it belongs to. A translation can be left out if its name equals the
name of the origin select option.

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="ExplicitOption'General/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ExplicitOption'General/ap_value"></a> `ap_value?`

Specific AP cost for the select option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'General/src"></a> `src?`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExplicitOption'General/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitOption'General/translations[key]">ExplicitOption'General/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitOption'General/translations[key]"></a> `ExplicitOption'General/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the select option. | <a href="#ExplicitOption'General/translations[key]/name">See details</a>
`name_in_profession?` | The name of the select option when displayed in a generated profession text. | <a href="#ExplicitOption'General/translations[key]/name_in_profession">See details</a>
`description?` | The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available. | <a href="#ExplicitOption'General/translations[key]/description">See details</a>
`errata?` |  | <a href="#ExplicitOption'General/translations[key]/errata">See details</a>

#### <a name="ExplicitOption'General/translations[key]/name"></a> `name`

The name of the select option.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ExplicitOption'General/translations[key]/name_in_profession"></a> `name_in_profession?`

The name of the select option when displayed in a generated
profession text.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ExplicitOption'General/translations[key]/description"></a> `description?`

The description of the select option. Useful for Bad Habits, Trade
Secrets and other entries where a description is available.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="ExplicitOption'General/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ExplicitOption'Skill"></a> `ExplicitOption'Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExplicitOption'Skill/tag">See details</a>
`id` | The skill's identifier. An unique, increasing integer. | <a href="#ExplicitOption'Skill/id">See details</a>
`skill_applications?` | Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitOption'Skill/skill_applications">See details</a>
`skill_uses?` | Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitOption'Skill/skill_uses">See details</a>
`prerequisites?` |  | <a href="#ExplicitOption'Skill/prerequisites">See details</a>
`ap_value?` | Specific AP cost for the select option. | <a href="#ExplicitOption'Skill/ap_value">See details</a>
`src?` |  | <a href="#ExplicitOption'Skill/src">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitOption'Skill/translations">See details</a>

#### <a name="ExplicitOption'Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="ExplicitOption'Skill/id"></a> `id`

The skill's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'Skill/skill_applications"></a> `skill_applications?`

Registers new applications, which get enabled once this entry is
activated with its respective select option. It specifies an entry-unique
identifier and the skill it belongs to. A translation can be left out if
its name equals the name of the origin select option.

- **Type:** List
- **Items:** <a href="#ExplicitOption'Skill/skill_applications[]">ExplicitOption'Skill/skill_applications[]</a>
- **Minimum Items:** `1`

#### <a name="ExplicitOption'Skill/skill_uses"></a> `skill_uses?`

Registers uses, which get enabled once this entry is activated with its
respective select option. It specifies an entry-unique identifier and the
skill it belongs to. A translation can be left out if its name equals the
name of the origin select option.

- **Type:** List
- **Items:** <a href="#ExplicitOption'Skill/skill_uses[]">ExplicitOption'Skill/skill_uses[]</a>
- **Minimum Items:** `1`

#### <a name="ExplicitOption'Skill/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ExplicitOption'Skill/ap_value"></a> `ap_value?`

Specific AP cost for the select option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'Skill/src"></a> `src?`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExplicitOption'Skill/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitOption'Skill/translations[key]">ExplicitOption'Skill/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitOption'Skill/skill_applications[]"></a> `ExplicitOption'Skill/skill_applications[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The application's identifier. An entry-unique, increasing integer. | <a href="#ExplicitOption'Skill/skill_applications[]/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitOption'Skill/skill_applications[]/translations">See details</a>

#### <a name="ExplicitOption'Skill/skill_applications[]/id"></a> `id`

The application's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'Skill/skill_applications[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitOption'Skill/skill_applications[]/translations[key]">ExplicitOption'Skill/skill_applications[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitOption'Skill/skill_applications[]/translations[key]"></a> `ExplicitOption'Skill/skill_applications[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the application if different from the activatable entry's name. | <a href="#ExplicitOption'Skill/skill_applications[]/translations[key]/name">See details</a>

#### <a name="ExplicitOption'Skill/skill_applications[]/translations[key]/name"></a> `name`

The name of the application if different from the activatable entry's
name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ExplicitOption'Skill/skill_uses[]"></a> `ExplicitOption'Skill/skill_uses[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The use's identifier. An entry-unique, increasing integer. | <a href="#ExplicitOption'Skill/skill_uses[]/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitOption'Skill/skill_uses[]/translations">See details</a>

#### <a name="ExplicitOption'Skill/skill_uses[]/id"></a> `id`

The use's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'Skill/skill_uses[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitOption'Skill/skill_uses[]/translations[key]">ExplicitOption'Skill/skill_uses[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitOption'Skill/skill_uses[]/translations[key]"></a> `ExplicitOption'Skill/skill_uses[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the use if different from the activatable entry's name. | <a href="#ExplicitOption'Skill/skill_uses[]/translations[key]/name">See details</a>

#### <a name="ExplicitOption'Skill/skill_uses[]/translations[key]/name"></a> `name`

The name of the use if different from the activatable entry's name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ExplicitOption'Skill/translations[key]"></a> `ExplicitOption'Skill/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`errata?` |  | <a href="#ExplicitOption'Skill/translations[key]/errata">See details</a>

#### <a name="ExplicitOption'Skill/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ExplicitOption'CombatTechnique"></a> `ExplicitOption'CombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExplicitOption'CombatTechnique/tag">See details</a>
`id` | The combat technique's identifier. | <a href="#ExplicitOption'CombatTechnique/id">See details</a>
`prerequisites?` |  | <a href="#ExplicitOption'CombatTechnique/prerequisites">See details</a>
`ap_value?` | Specific AP cost for the select option. | <a href="#ExplicitOption'CombatTechnique/ap_value">See details</a>
`src?` |  | <a href="#ExplicitOption'CombatTechnique/src">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitOption'CombatTechnique/translations">See details</a>

#### <a name="ExplicitOption'CombatTechnique/tag"></a> `tag`

- **Constant:** `"CombatTechnique"`

#### <a name="ExplicitOption'CombatTechnique/id"></a> `id`

The combat technique's identifier.

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="ExplicitOption'CombatTechnique/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ExplicitOption'CombatTechnique/ap_value"></a> `ap_value?`

Specific AP cost for the select option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitOption'CombatTechnique/src"></a> `src?`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExplicitOption'CombatTechnique/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitOption'CombatTechnique/translations[key]">ExplicitOption'CombatTechnique/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitOption'CombatTechnique/translations[key]"></a> `ExplicitOption'CombatTechnique/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`errata?` |  | <a href="#ExplicitOption'CombatTechnique/translations[key]/errata">See details</a>

#### <a name="ExplicitOption'CombatTechnique/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

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

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

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

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

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
