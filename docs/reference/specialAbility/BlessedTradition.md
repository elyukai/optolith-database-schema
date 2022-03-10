# Blessed Tradition

## Definitions

### <a name="BlessedTradition"></a> Blessed Tradition (`BlessedTradition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#BlessedTradition/id">See details</a>
`skill_applications?` |  | <a href="#BlessedTradition/skill_applications">See details</a>
`skill_uses?` |  | <a href="#BlessedTradition/skill_uses">See details</a>
`primary?` | The tradition's primary attribute. Leave empty if the tradition does not have one. | <a href="#BlessedTradition/primary">See details</a>
`aspects?` | The tradition's aspects, if any | <a href="#BlessedTradition/aspects">See details</a>
`restricted_blessings?` | If a tradition restricts the possible blessings, the blessings that are not allowed. | <a href="#BlessedTradition/restricted_blessings">See details</a>
`favored_combat_techniques?` | A list of favored combat techniques. | <a href="#BlessedTradition/favored_combat_techniques">See details</a>
`favored_skills` | A list of favored skills. | <a href="#BlessedTradition/favored_skills">See details</a>
`favored_skills_selection?` | On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored. | <a href="#BlessedTradition/favored_skills_selection">See details</a>
`is_shamanistic` | Is this a schamanistic tradition? | <a href="#BlessedTradition/is_shamanistic">See details</a>
`associated_principles_id?` | The select option's identifier of the disadvantage *Principles* that represent this tradition's code, if any. | <a href="#BlessedTradition/associated_principles_id">See details</a>
`prerequisites?` |  | <a href="#BlessedTradition/prerequisites">See details</a>
`ap_value` |  | <a href="#BlessedTradition/ap_value">See details</a>
`src` |  | <a href="#BlessedTradition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BlessedTradition/translations">See details</a>

#### <a name="BlessedTradition/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="BlessedTradition/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="BlessedTradition/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="BlessedTradition/primary"></a> `primary?`

The tradition's primary attribute. Leave empty if the tradition does not
have one.

- **Type:** <a href="#BlessedTradition/primary">Object</a>

#### <a name="BlessedTradition/aspects"></a> `aspects?`

The tradition's aspects, if any

- **Type:** Tuple
- **Items:** [<a href="BlessedTradition/aspects[0]">BlessedTradition/aspects[0]</a>, <a href="BlessedTradition/aspects[1]">BlessedTradition/aspects[1]</a>]

#### <a name="BlessedTradition/restricted_blessings"></a> `restricted_blessings?`

If a tradition restricts the possible blessings, the blessings that are not
allowed.

- **Type:** List
- **Items:** <a href="#BlessedTradition/restricted_blessings[]">BlessedTradition/restricted_blessings[]</a>
- **Minimum Items:** `3`
- **Maximum Items:** `6`

#### <a name="BlessedTradition/favored_combat_techniques"></a> `favored_combat_techniques?`

A list of favored combat techniques.

- **Type:** Union
- **Cases:** <a href="#BlessedTradition/favored_combat_techniques'All">BlessedTradition/favored_combat_techniques'All</a> | <a href="#BlessedTradition/favored_combat_techniques'AllClose">BlessedTradition/favored_combat_techniques'AllClose</a> | <a href="#BlessedTradition/favored_combat_techniques'AllUsedInHunting">BlessedTradition/favored_combat_techniques'AllUsedInHunting</a> | <a href="#BlessedTradition/favored_combat_techniques'Specific">BlessedTradition/favored_combat_techniques'Specific</a>

#### <a name="BlessedTradition/favored_skills"></a> `favored_skills`

A list of favored skills.

- **Type:** List
- **Items:** <a href="#BlessedTradition/favored_skills[]">BlessedTradition/favored_skills[]</a>
- **Minimum Items:** `1`

#### <a name="BlessedTradition/favored_skills_selection"></a> `favored_skills_selection?`

On activation of the tradition, a specific number of skills from a list of
skills must be selected as being favored.

- **Type:** <a href="#BlessedTradition/favored_skills_selection">Object</a>

#### <a name="BlessedTradition/is_shamanistic"></a> `is_shamanistic`

Is this a schamanistic tradition?

- **Type:** Boolean

#### <a name="BlessedTradition/associated_principles_id"></a> `associated_principles_id?`

The select option's identifier of the disadvantage *Principles* that
represent this tradition's code, if any.

- **Type:** Number

#### <a name="BlessedTradition/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="BlessedTradition/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="BlessedTradition/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BlessedTradition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BlessedTradition/translations[key]">BlessedTradition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BlessedTradition/primary"></a> `BlessedTradition/primary`

The tradition's primary attribute. Leave empty if the tradition does not
have one.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#BlessedTradition/primary/id">See details</a>

#### <a name="BlessedTradition/primary/id"></a> `id`

The attribute's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `8`

---

### <a name="BlessedTradition/aspects[0]"></a> `BlessedTradition/aspects[0]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The first aspect's identifier. | <a href="#BlessedTradition/aspects[0]/id">See details</a>

#### <a name="BlessedTradition/aspects[0]/id"></a> `id`

The first aspect's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BlessedTradition/aspects[1]"></a> `BlessedTradition/aspects[1]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The second aspect's identifier. | <a href="#BlessedTradition/aspects[1]/id">See details</a>

#### <a name="BlessedTradition/aspects[1]/id"></a> `id`

The second aspect's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BlessedTradition/restricted_blessings[]"></a> `BlessedTradition/restricted_blessings[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The blessing's identifier. | <a href="#BlessedTradition/restricted_blessings[]/id">See details</a>

#### <a name="BlessedTradition/restricted_blessings[]/id"></a> `id`

The blessing's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BlessedTradition/favored_combat_techniques'All"></a> `BlessedTradition/favored_combat_techniques'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTradition/favored_combat_techniques'All/tag">See details</a>

#### <a name="BlessedTradition/favored_combat_techniques'All/tag"></a> `tag`

- **Constant:** `"All"`

---

### <a name="BlessedTradition/favored_combat_techniques'AllClose"></a> `BlessedTradition/favored_combat_techniques'AllClose`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTradition/favored_combat_techniques'AllClose/tag">See details</a>

#### <a name="BlessedTradition/favored_combat_techniques'AllClose/tag"></a> `tag`

- **Constant:** `"AllClose"`

---

### <a name="BlessedTradition/favored_combat_techniques'AllUsedInHunting"></a> `BlessedTradition/favored_combat_techniques'AllUsedInHunting`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTradition/favored_combat_techniques'AllUsedInHunting/tag">See details</a>

#### <a name="BlessedTradition/favored_combat_techniques'AllUsedInHunting/tag"></a> `tag`

- **Constant:** `"AllUsedInHunting"`

---

### <a name="BlessedTradition/favored_combat_techniques'Specific"></a> `BlessedTradition/favored_combat_techniques'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTradition/favored_combat_techniques'Specific/tag">See details</a>
`list` | A list of specific favored combat techniques. | <a href="#BlessedTradition/favored_combat_techniques'Specific/list">See details</a>

#### <a name="BlessedTradition/favored_combat_techniques'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="BlessedTradition/favored_combat_techniques'Specific/list"></a> `list`

A list of specific favored combat techniques.

- **Type:** List
- **Items:** <a href="#BlessedTradition/favored_combat_techniques'Specific/list[]">BlessedTradition/favored_combat_techniques'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="BlessedTradition/favored_combat_techniques'Specific/list[]"></a> `BlessedTradition/favored_combat_techniques'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The combat technique's identifier. | <a href="#BlessedTradition/favored_combat_techniques'Specific/list[]/id">See details</a>

#### <a name="BlessedTradition/favored_combat_techniques'Specific/list[]/id"></a> `id`

The combat technique's identifier.

- **Type:** <a href="../_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

---

### <a name="BlessedTradition/favored_skills[]"></a> `BlessedTradition/favored_skills[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#BlessedTradition/favored_skills[]/id">See details</a>

#### <a name="BlessedTradition/favored_skills[]/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BlessedTradition/favored_skills_selection"></a> `BlessedTradition/favored_skills_selection`

On activation of the tradition, a specific number of skills from a list of
skills must be selected as being favored.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The number of skills that can be selected. | <a href="#BlessedTradition/favored_skills_selection/number">See details</a>
`options` | The possible set of skills. | <a href="#BlessedTradition/favored_skills_selection/options">See details</a>

#### <a name="BlessedTradition/favored_skills_selection/number"></a> `number`

The number of skills that can be selected.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="BlessedTradition/favored_skills_selection/options"></a> `options`

The possible set of skills.

- **Type:** List
- **Items:** <a href="#BlessedTradition/favored_skills_selection/options[]">BlessedTradition/favored_skills_selection/options[]</a>

---

### <a name="BlessedTradition/favored_skills_selection/options[]"></a> `BlessedTradition/favored_skills_selection/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#BlessedTradition/favored_skills_selection/options[]/id">See details</a>

#### <a name="BlessedTradition/favored_skills_selection/options[]/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BlessedTradition/translations[key]"></a> `BlessedTradition/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#BlessedTradition/translations[key]/name">See details</a>
`name_compressed` | A shorter name of the tradition's name, used in liturgical chant descriptions. | <a href="#BlessedTradition/translations[key]/name_compressed">See details</a>
`name_in_library?` |  | <a href="#BlessedTradition/translations[key]/name_in_library">See details</a>
`special_rules` | The special rules of the tradition. They should be sorted like they are in the book. | <a href="#BlessedTradition/translations[key]/special_rules">See details</a>
`errata?` |  | <a href="#BlessedTradition/translations[key]/errata">See details</a>

#### <a name="BlessedTradition/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="BlessedTradition/translations[key]/name_compressed"></a> `name_compressed`

A shorter name of the tradition's name, used in liturgical chant
descriptions.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="BlessedTradition/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="BlessedTradition/translations[key]/special_rules"></a> `special_rules`

The special rules of the tradition. They should be sorted like they are
in the book.

- **Type:** List
- **Items:** <a href="#BlessedTradition/translations[key]/special_rules[]">BlessedTradition/translations[key]/special_rules[]</a>
- **Minimum Items:** `1`

#### <a name="BlessedTradition/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="BlessedTradition/translations[key]/special_rules[]"></a> `BlessedTradition/translations[key]/special_rules[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label?` | An optional label that is displayed and placed before the actual text. | <a href="#BlessedTradition/translations[key]/special_rules[]/label">See details</a>
`text` | The text of a special rule. | <a href="#BlessedTradition/translations[key]/special_rules[]/text">See details</a>

#### <a name="BlessedTradition/translations[key]/special_rules[]/label"></a> `label?`

An optional label that is displayed and placed before the actual
text.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="BlessedTradition/translations[key]/special_rules[]/text"></a> `text`

The text of a special rule.

- **Type:** String
- **Minimum Length:** `1`
