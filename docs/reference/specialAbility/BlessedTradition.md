# Blessed Tradition

## Definitions

### <a name="BlessedTradition"></a> Blessed Tradition (`BlessedTradition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#BlessedTradition/id">See details</a>
`select_options?` |  | <a href="#BlessedTradition/select_options">See details</a>
`skill_applications?` |  | <a href="#BlessedTradition/skill_applications">See details</a>
`skill_uses?` |  | <a href="#BlessedTradition/skill_uses">See details</a>
`primary?` | The tradition's primary attribute. Leave empty if the tradition does not have one. | <a href="#BlessedTradition/primary">See details</a>
`aspects?` | The tradition's aspects, if any. | <a href="#BlessedTradition/aspects">See details</a>
`restricted_blessings?` | If a tradition restricts the possible blessings, the blessings that are **not** allowed. | <a href="#BlessedTradition/restricted_blessings">See details</a>
`favored_combat_techniques?` | A list of favored combat techniques. | <a href="#BlessedTradition/favored_combat_techniques">See details</a>
`favored_skills` | A list of favored skills. | <a href="#BlessedTradition/favored_skills">See details</a>
`favored_skills_selection?` | On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored. | <a href="#BlessedTradition/favored_skills_selection">See details</a>
`type` | The type of the tradition. May be either church or shamanistic. | <a href="#BlessedTradition/type">See details</a>
`associated_principles_id?` | The select option's identifier of the disadvantage *Principles* that represent this tradition's code, if any. | <a href="#BlessedTradition/associated_principles_id">See details</a>
`prerequisites?` |  | <a href="#BlessedTradition/prerequisites">See details</a>
`ap_value` |  | <a href="#BlessedTradition/ap_value">See details</a>
`src` |  | <a href="#BlessedTradition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BlessedTradition/translations">See details</a>

#### <a name="BlessedTradition/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="BlessedTradition/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="BlessedTradition/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="BlessedTradition/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="BlessedTradition/primary"></a> `primary?`

The tradition's primary attribute. Leave empty if the tradition does not
have one.

- **Type:** <a href="../_SimpleReferences.md#AttributeReference">AttributeReference</a>

#### <a name="BlessedTradition/aspects"></a> `aspects?`

The tradition's aspects, if any.

- **Type:** List
- **Items:** <a href="#BlessedTradition/aspects[]">BlessedTradition/aspects[]</a>
- **Minimum Items:** `2`
- **Maximum Items:** `2`

#### <a name="BlessedTradition/restricted_blessings"></a> `restricted_blessings?`

If a tradition restricts the possible blessings, the blessings that are
**not** allowed.

- **Type:** <a href="#RestrictedBlessings">RestrictedBlessings</a>

#### <a name="BlessedTradition/favored_combat_techniques"></a> `favored_combat_techniques?`

A list of favored combat techniques.

- **Type:** <a href="#FavoredCombatTechniques">FavoredCombatTechniques</a>

#### <a name="BlessedTradition/favored_skills"></a> `favored_skills`

A list of favored skills.

- **Type:** List
- **Items:** <a href="#BlessedTradition/favored_skills[]">BlessedTradition/favored_skills[]</a>
- **Minimum Items:** `1`

#### <a name="BlessedTradition/favored_skills_selection"></a> `favored_skills_selection?`

On activation of the tradition, a specific number of skills from a list of
skills must be selected as being favored.

- **Type:** <a href="#FavoredSkillsSelection">FavoredSkillsSelection</a>

#### <a name="BlessedTradition/type"></a> `type`

The type of the tradition. May be either church or shamanistic.

- **Type:** <a href="#BlessedTraditionType">BlessedTraditionType</a>

#### <a name="BlessedTradition/associated_principles_id"></a> `associated_principles_id?`

The select option's identifier of the disadvantage *Principles* that
represent this tradition's code, if any.

- **Type:** Number

#### <a name="BlessedTradition/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="BlessedTradition/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="BlessedTradition/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BlessedTradition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#BlessedTraditionTranslation">BlessedTraditionTranslation</a>&gt;

---

### <a name="BlessedTradition/aspects[]"></a> `BlessedTradition/aspects[]`

- **Type:** <a href="../_SimpleReferences.md#AspectReference">AspectReference</a>

---

### <a name="BlessedTradition/favored_skills[]"></a> `BlessedTradition/favored_skills[]`

- **Type:** <a href="../_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="RestrictedBlessings"></a> `RestrictedBlessings`

If a tradition restricts the possible blessings, the blessings that are
**not** allowed.

- **Type:** Union
- **Cases:** <a href="#RestrictedBlessings'Three">RestrictedBlessings'Three</a> | <a href="#RestrictedBlessings'Six">RestrictedBlessings'Six</a>

---

### <a name="RestrictedBlessings'Three"></a> `RestrictedBlessings'Three`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedBlessings'Three/tag">See details</a>
`three` |  | <a href="#RestrictedBlessings'Three/three">See details</a>

#### <a name="RestrictedBlessings'Three/tag"></a> `tag`

- **Constant:** `"Three"`

#### <a name="RestrictedBlessings'Three/three"></a> `three`

- **Type:** <a href="#ThreeRestrictedBlessings">ThreeRestrictedBlessings</a>

---

### <a name="RestrictedBlessings'Six"></a> `RestrictedBlessings'Six`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedBlessings'Six/tag">See details</a>
`six` |  | <a href="#RestrictedBlessings'Six/six">See details</a>

#### <a name="RestrictedBlessings'Six/tag"></a> `tag`

- **Constant:** `"Six"`

#### <a name="RestrictedBlessings'Six/six"></a> `six`

- **Type:** <a href="#SixRestrictedBlessings">SixRestrictedBlessings</a>

---

### <a name="ThreeRestrictedBlessings"></a> `ThreeRestrictedBlessings`

- **Type:** List
- **Items:** <a href="#ThreeRestrictedBlessings[]">ThreeRestrictedBlessings[]</a>
- **Minimum Items:** `3`
- **Maximum Items:** `3`
- **Unique Items:** Yes

---

### <a name="ThreeRestrictedBlessings[]"></a> `ThreeRestrictedBlessings[]`

- **Type:** <a href="../_SimpleReferences.md#BlessingReference">BlessingReference</a>

---

### <a name="SixRestrictedBlessings"></a> `SixRestrictedBlessings`

- **Type:** List
- **Items:** <a href="#SixRestrictedBlessings[]">SixRestrictedBlessings[]</a>
- **Minimum Items:** `6`
- **Maximum Items:** `6`
- **Unique Items:** Yes

---

### <a name="SixRestrictedBlessings[]"></a> `SixRestrictedBlessings[]`

- **Type:** <a href="../_SimpleReferences.md#BlessingReference">BlessingReference</a>

---

### <a name="FavoredCombatTechniques"></a> `FavoredCombatTechniques`

- **Type:** Union
- **Cases:** <a href="#FavoredCombatTechniques'All">FavoredCombatTechniques'All</a> | <a href="#FavoredCombatTechniques'AllClose">FavoredCombatTechniques'AllClose</a> | <a href="#FavoredCombatTechniques'AllUsedInHunting">FavoredCombatTechniques'AllUsedInHunting</a> | <a href="#FavoredCombatTechniques'Specific">FavoredCombatTechniques'Specific</a>

---

### <a name="FavoredCombatTechniques'All"></a> `FavoredCombatTechniques'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FavoredCombatTechniques'All/tag">See details</a>
`all` |  | <a href="#FavoredCombatTechniques'All/all">See details</a>

#### <a name="FavoredCombatTechniques'All/tag"></a> `tag`

- **Constant:** `"All"`

#### <a name="FavoredCombatTechniques'All/all"></a> `all`

- **Type:** <a href="#FavoredCombatTechniques'All/all">Object</a>

---

### <a name="FavoredCombatTechniques'All/all"></a> `FavoredCombatTechniques'All/all`

- **Type:** Empty Object

---

### <a name="FavoredCombatTechniques'AllClose"></a> `FavoredCombatTechniques'AllClose`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FavoredCombatTechniques'AllClose/tag">See details</a>
`all_close` |  | <a href="#FavoredCombatTechniques'AllClose/all_close">See details</a>

#### <a name="FavoredCombatTechniques'AllClose/tag"></a> `tag`

- **Constant:** `"AllClose"`

#### <a name="FavoredCombatTechniques'AllClose/all_close"></a> `all_close`

- **Type:** <a href="#FavoredCombatTechniques'AllClose/all_close">Object</a>

---

### <a name="FavoredCombatTechniques'AllClose/all_close"></a> `FavoredCombatTechniques'AllClose/all_close`

- **Type:** Empty Object

---

### <a name="FavoredCombatTechniques'AllUsedInHunting"></a> `FavoredCombatTechniques'AllUsedInHunting`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FavoredCombatTechniques'AllUsedInHunting/tag">See details</a>
`all_used_in_hunting` |  | <a href="#FavoredCombatTechniques'AllUsedInHunting/all_used_in_hunting">See details</a>

#### <a name="FavoredCombatTechniques'AllUsedInHunting/tag"></a> `tag`

- **Constant:** `"AllUsedInHunting"`

#### <a name="FavoredCombatTechniques'AllUsedInHunting/all_used_in_hunting"></a> `all_used_in_hunting`

- **Type:** <a href="#FavoredCombatTechniques'AllUsedInHunting/all_used_in_hunting">Object</a>

---

### <a name="FavoredCombatTechniques'AllUsedInHunting/all_used_in_hunting"></a> `FavoredCombatTechniques'AllUsedInHunting/all_used_in_hunting`

- **Type:** Empty Object

---

### <a name="FavoredCombatTechniques'Specific"></a> `FavoredCombatTechniques'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FavoredCombatTechniques'Specific/tag">See details</a>
`specific` |  | <a href="#FavoredCombatTechniques'Specific/specific">See details</a>

#### <a name="FavoredCombatTechniques'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="FavoredCombatTechniques'Specific/specific"></a> `specific`

- **Type:** <a href="#SpecificFavoredCombatTechniques">SpecificFavoredCombatTechniques</a>

---

### <a name="SpecificFavoredCombatTechniques"></a> `SpecificFavoredCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | A list of specific favored combat techniques. | <a href="#SpecificFavoredCombatTechniques/list">See details</a>

#### <a name="SpecificFavoredCombatTechniques/list"></a> `list`

A list of specific favored combat techniques.

- **Type:** List
- **Items:** <a href="#SpecificFavoredCombatTechniques/list[]">SpecificFavoredCombatTechniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="SpecificFavoredCombatTechniques/list[]"></a> `SpecificFavoredCombatTechniques/list[]`

- **Type:** <a href="../_SimpleReferences.md#CombatTechniqueReference">CombatTechniqueReference</a>

---

### <a name="FavoredSkillsSelection"></a> `FavoredSkillsSelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The number of skills that can be selected. | <a href="#FavoredSkillsSelection/number">See details</a>
`options` | The possible set of skills. | <a href="#FavoredSkillsSelection/options">See details</a>

#### <a name="FavoredSkillsSelection/number"></a> `number`

The number of skills that can be selected.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FavoredSkillsSelection/options"></a> `options`

The possible set of skills.

- **Type:** List
- **Items:** <a href="#FavoredSkillsSelection/options[]">FavoredSkillsSelection/options[]</a>
- **Minimum Items:** `2`
- **Unique Items:** Yes

---

### <a name="FavoredSkillsSelection/options[]"></a> `FavoredSkillsSelection/options[]`

- **Type:** <a href="../_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="BlessedTraditionType"></a> `BlessedTraditionType`

The type of the tradition. May be either church or shamanistic.

- **Type:** Union
- **Cases:** <a href="#BlessedTraditionType'Church">BlessedTraditionType'Church</a> | <a href="#BlessedTraditionType'Shamanistic">BlessedTraditionType'Shamanistic</a>

---

### <a name="BlessedTraditionType'Church"></a> `BlessedTraditionType'Church`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionType'Church/tag">See details</a>
`church` |  | <a href="#BlessedTraditionType'Church/church">See details</a>

#### <a name="BlessedTraditionType'Church/tag"></a> `tag`

- **Constant:** `"Church"`

#### <a name="BlessedTraditionType'Church/church"></a> `church`

- **Type:** <a href="#BlessedTraditionType'Church/church">Object</a>

---

### <a name="BlessedTraditionType'Church/church"></a> `BlessedTraditionType'Church/church`

- **Type:** Empty Object

---

### <a name="BlessedTraditionType'Shamanistic"></a> `BlessedTraditionType'Shamanistic`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BlessedTraditionType'Shamanistic/tag">See details</a>
`shamanistic` |  | <a href="#BlessedTraditionType'Shamanistic/shamanistic">See details</a>

#### <a name="BlessedTraditionType'Shamanistic/tag"></a> `tag`

- **Constant:** `"Shamanistic"`

#### <a name="BlessedTraditionType'Shamanistic/shamanistic"></a> `shamanistic`

- **Type:** <a href="#ShamanisticBlessedTradition">ShamanisticBlessedTradition</a>

---

### <a name="ShamanisticBlessedTradition"></a> `ShamanisticBlessedTradition`

Additional rules for shamanistic traditions.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`can_use_bone_mace_as_ceremonial_item` |  | <a href="#ShamanisticBlessedTradition/can_use_bone_mace_as_ceremonial_item">See details</a>

#### <a name="ShamanisticBlessedTradition/can_use_bone_mace_as_ceremonial_item"></a> `can_use_bone_mace_as_ceremonial_item`

- **Type:** Boolean

---

### <a name="BlessedTraditionTranslation"></a> `BlessedTraditionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#BlessedTraditionTranslation/name">See details</a>
`name_compressed?` | A shorter name of the tradition's name, used in liturgical chant descriptions. | <a href="#BlessedTraditionTranslation/name_compressed">See details</a>
`name_in_library?` |  | <a href="#BlessedTraditionTranslation/name_in_library">See details</a>
`special_rules` | The special rules of the tradition. They should be sorted like they are in the book. | <a href="#BlessedTraditionTranslation/special_rules">See details</a>
`errata?` |  | <a href="#BlessedTraditionTranslation/errata">See details</a>

#### <a name="BlessedTraditionTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="BlessedTraditionTranslation/name_compressed"></a> `name_compressed?`

A shorter name of the tradition's name, used in liturgical chant
descriptions.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="BlessedTraditionTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="BlessedTraditionTranslation/special_rules"></a> `special_rules`

The special rules of the tradition. They should be sorted like they are
in the book.

- **Type:** List
- **Items:** <a href="#BlessedTraditionTranslation/special_rules[]">BlessedTraditionTranslation/special_rules[]</a>
- **Minimum Items:** `1`

#### <a name="BlessedTraditionTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="BlessedTraditionTranslation/special_rules[]"></a> `BlessedTraditionTranslation/special_rules[]`

- **Type:** <a href="./_Tradition.md#SpecialRule">SpecialRule</a>
