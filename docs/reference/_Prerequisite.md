# Prerequisites

## Definitions

### <a name="PrerequisiteGroup"></a> `PrerequisiteGroup<T>`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PrerequisiteGroup/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PrerequisiteGroup/translations">See details</a>

#### <a name="PrerequisiteGroup/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PrerequisiteGroup/list[]">PrerequisiteGroup/list[]</a>
- **Minimum Items:** `2`

#### <a name="PrerequisiteGroup/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>&gt;

---

### <a name="PrerequisiteGroup/list[]"></a> `PrerequisiteGroup/list[]`

- **Type:** <a href="#T">T</a>

---

### <a name="PrerequisitesDisjunction"></a> `PrerequisitesDisjunction<T>`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PrerequisitesDisjunction/list">See details</a>
`display_option?` |  | <a href="#PrerequisitesDisjunction/display_option">See details</a>

#### <a name="PrerequisitesDisjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PrerequisitesDisjunction/list[]">PrerequisitesDisjunction/list[]</a>
- **Minimum Items:** `2`

#### <a name="PrerequisitesDisjunction/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="PrerequisitesDisjunction/list[]"></a> `PrerequisitesDisjunction/list[]`

- **Type:** <a href="#T">T</a>

---

### <a name="PrerequisitesElement"></a> `PrerequisitesElement<T>`

- **Type:** Union
- **Cases:** <a href="#PrerequisitesElement'Single">PrerequisitesElement'Single</a> | <a href="#PrerequisitesElement'Disjunction">PrerequisitesElement'Disjunction</a> | <a href="#PrerequisitesElement'Group">PrerequisitesElement'Group</a>

---

### <a name="PrerequisitesElement'Single"></a> `PrerequisitesElement'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrerequisitesElement'Single/tag">See details</a>
`single` |  | <a href="#PrerequisitesElement'Single/single">See details</a>

#### <a name="PrerequisitesElement'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="PrerequisitesElement'Single/single"></a> `single`

- **Type:** <a href="#T">T</a>

---

### <a name="PrerequisitesElement'Disjunction"></a> `PrerequisitesElement'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrerequisitesElement'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#PrerequisitesElement'Disjunction/disjunction">See details</a>

#### <a name="PrerequisitesElement'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="PrerequisitesElement'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#PrerequisitesDisjunction">PrerequisitesDisjunction</a>&lt;<a href="#T">T</a>&gt;

---

### <a name="PrerequisitesElement'Group"></a> `PrerequisitesElement'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrerequisitesElement'Group/tag">See details</a>
`group` |  | <a href="#PrerequisitesElement'Group/group">See details</a>

#### <a name="PrerequisitesElement'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PrerequisitesElement'Group/group"></a> `group`

- **Type:** <a href="#PrerequisiteGroup">PrerequisiteGroup</a>&lt;<a href="#T">T</a>&gt;

---

### <a name="PlainPrerequisites"></a> `PlainPrerequisites<T>`

- **Type:** List
- **Items:** <a href="#PlainPrerequisites[]">PlainPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="PlainPrerequisites[]"></a> `PlainPrerequisites[]`

- **Type:** <a href="#PrerequisitesElement">PrerequisitesElement</a>&lt;<a href="#T">T</a>&gt;

---

### <a name="PrerequisiteForLevel"></a> `PrerequisiteForLevel<T>`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#PrerequisiteForLevel/level">See details</a>
`prerequisite` |  | <a href="#PrerequisiteForLevel/prerequisite">See details</a>

#### <a name="PrerequisiteForLevel/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PrerequisiteForLevel/prerequisite"></a> `prerequisite`

- **Type:** <a href="#PrerequisitesElement">PrerequisitesElement</a>&lt;<a href="#T">T</a>&gt;

---

### <a name="PrerequisitesForLevels"></a> `PrerequisitesForLevels<T>`

- **Type:** List
- **Items:** <a href="#PrerequisitesForLevels[]">PrerequisitesForLevels[]</a>
- **Minimum Items:** `1`

---

### <a name="PrerequisitesForLevels[]"></a> `PrerequisitesForLevels[]`

- **Type:** <a href="#PrerequisiteForLevel">PrerequisiteForLevel</a>&lt;<a href="#T">T</a>&gt;

---

### <a name="DerivedCharacteristicPrerequisites"></a> `DerivedCharacteristicPrerequisites`

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>&gt;

---

### <a name="PublicationPrerequisites"></a> `PublicationPrerequisites`

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>&gt;

---

### <a name="PlainGeneralPrerequisites"></a> Plain General Prerequisites (`PlainGeneralPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>&gt;

---

### <a name="GeneralPrerequisites"></a> General Prerequisites (`GeneralPrerequisites`)

- **Type:** <a href="#PrerequisitesForLevels">PrerequisitesForLevels</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>&gt;

---

### <a name="ProfessionPrerequisites"></a> Profession Prerequisites (`ProfessionPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>&gt;

---

### <a name="AdvantageDisadvantagePrerequisites"></a> Advantage/Disadvantage Prerequisites (`AdvantageDisadvantagePrerequisites`)

- **Type:** <a href="#PrerequisitesForLevels">PrerequisitesForLevels</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>&gt;

---

### <a name="ArcaneTraditionPrerequisites"></a> Arcane Tradition Prerequisites (`ArcaneTraditionPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>&gt;

---

### <a name="PersonalityTraitPrerequisites"></a> Personality Trait Prerequisites (`PersonalityTraitPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>&gt;

---

### <a name="SpellworkPrerequisites"></a> Spellwork Prerequisites (`SpellworkPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>&gt;

---

### <a name="LiturgyPrerequisites"></a> Liturgy Prerequisites (`LiturgyPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>&gt;

---

### <a name="InfluencePrerequisites"></a> Influence Prerequisites (`InfluencePrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>&gt;

---

### <a name="LanguagePrerequisites"></a> Language Prerequisites (`LanguagePrerequisites`)

- **Type:** <a href="#PrerequisitesForLevels">PrerequisitesForLevels</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>&gt;

---

### <a name="AnimistPowerPrerequisites"></a> Animist Power Prerequisites (`AnimistPowerPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>&gt;

---

### <a name="GeodeRitualPrerequisites"></a> Geode Ritual Prerequisites (`GeodeRitualPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>&gt;

---

### <a name="EnhancementPrerequisites"></a> Enhancement Prerequisites (`EnhancementPrerequisites`)

- **Type:** <a href="#PlainPrerequisites">PlainPrerequisites</a>&lt;<a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>&gt;
