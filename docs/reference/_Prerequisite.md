# Prerequisites

## Definitions

### <a name="DerivedCharacteristicPrerequisites"></a> `DerivedCharacteristicPrerequisites`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites[]">DerivedCharacteristicPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="DerivedCharacteristicPrerequisites[]"></a> `DerivedCharacteristicPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#DerivedCharacteristicPrerequisites[]'Single">DerivedCharacteristicPrerequisites[]'Single</a> | <a href="#DerivedCharacteristicPrerequisites[]'Disjunction">DerivedCharacteristicPrerequisites[]'Disjunction</a> | <a href="#DerivedCharacteristicPrerequisites[]'Group">DerivedCharacteristicPrerequisites[]'Group</a>

---

### <a name="DerivedCharacteristicPrerequisites[]'Single"></a> `DerivedCharacteristicPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#DerivedCharacteristicPrerequisites[]'Single/single">See details</a>

#### <a name="DerivedCharacteristicPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="DerivedCharacteristicPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites[]'Disjunction"></a> `DerivedCharacteristicPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#DerivedCharacteristicPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="DerivedCharacteristicPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="DerivedCharacteristicPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#DerivedCharacteristicPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="DerivedCharacteristicPrerequisites[]'Disjunction/disjunction"></a> `DerivedCharacteristicPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#DerivedCharacteristicPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="DerivedCharacteristicPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites[]'Disjunction/disjunction/list[]">DerivedCharacteristicPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="DerivedCharacteristicPrerequisites[]'Disjunction/disjunction/list[]"></a> `DerivedCharacteristicPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites[]'Group"></a> `DerivedCharacteristicPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#DerivedCharacteristicPrerequisites[]'Group/group">See details</a>

#### <a name="DerivedCharacteristicPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="DerivedCharacteristicPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#DerivedCharacteristicPrerequisites[]'Group/group">Object</a>

---

### <a name="DerivedCharacteristicPrerequisites[]'Group/group"></a> `DerivedCharacteristicPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#DerivedCharacteristicPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DerivedCharacteristicPrerequisites[]'Group/group/translations">See details</a>

#### <a name="DerivedCharacteristicPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites[]'Group/group/list[]">DerivedCharacteristicPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="DerivedCharacteristicPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DerivedCharacteristicPrerequisites[]'Group/group/translations[key]">DerivedCharacteristicPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DerivedCharacteristicPrerequisites[]'Group/group/list[]"></a> `DerivedCharacteristicPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites[]'Group/group/translations[key]"></a> `DerivedCharacteristicPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PublicationPrerequisites"></a> `PublicationPrerequisites`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites[]">PublicationPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="PublicationPrerequisites[]"></a> `PublicationPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#PublicationPrerequisites[]'Single">PublicationPrerequisites[]'Single</a> | <a href="#PublicationPrerequisites[]'Disjunction">PublicationPrerequisites[]'Disjunction</a> | <a href="#PublicationPrerequisites[]'Group">PublicationPrerequisites[]'Group</a>

---

### <a name="PublicationPrerequisites[]'Single"></a> `PublicationPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#PublicationPrerequisites[]'Single/single">See details</a>

#### <a name="PublicationPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="PublicationPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites[]'Disjunction"></a> `PublicationPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#PublicationPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="PublicationPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="PublicationPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#PublicationPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="PublicationPrerequisites[]'Disjunction/disjunction"></a> `PublicationPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PublicationPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="PublicationPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites[]'Disjunction/disjunction/list[]">PublicationPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="PublicationPrerequisites[]'Disjunction/disjunction/list[]"></a> `PublicationPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites[]'Group"></a> `PublicationPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#PublicationPrerequisites[]'Group/group">See details</a>

#### <a name="PublicationPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PublicationPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#PublicationPrerequisites[]'Group/group">Object</a>

---

### <a name="PublicationPrerequisites[]'Group/group"></a> `PublicationPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PublicationPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PublicationPrerequisites[]'Group/group/translations">See details</a>

#### <a name="PublicationPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites[]'Group/group/list[]">PublicationPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PublicationPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PublicationPrerequisites[]'Group/group/translations[key]">PublicationPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PublicationPrerequisites[]'Group/group/list[]"></a> `PublicationPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites[]'Group/group/translations[key]"></a> `PublicationPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="GeneralPrerequisites"></a> `GeneralPrerequisites`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites[]">GeneralPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites[]"></a> `GeneralPrerequisites[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#GeneralPrerequisites[]/level">See details</a>
`prerequisite` |  | <a href="#GeneralPrerequisites[]/prerequisite">See details</a>

#### <a name="GeneralPrerequisites[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeneralPrerequisites[]/prerequisite"></a> `prerequisite`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisites[]/prerequisite'Single">GeneralPrerequisites[]/prerequisite'Single</a> | <a href="#GeneralPrerequisites[]/prerequisite'Disjunction">GeneralPrerequisites[]/prerequisite'Disjunction</a> | <a href="#GeneralPrerequisites[]/prerequisite'Group">GeneralPrerequisites[]/prerequisite'Group</a>

---

### <a name="GeneralPrerequisites[]/prerequisite'Single"></a> `GeneralPrerequisites[]/prerequisite'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites[]/prerequisite'Single/tag">See details</a>
`single` |  | <a href="#GeneralPrerequisites[]/prerequisite'Single/single">See details</a>

#### <a name="GeneralPrerequisites[]/prerequisite'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="GeneralPrerequisites[]/prerequisite'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites[]/prerequisite'Disjunction"></a> `GeneralPrerequisites[]/prerequisite'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites[]/prerequisite'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#GeneralPrerequisites[]/prerequisite'Disjunction/disjunction">See details</a>

#### <a name="GeneralPrerequisites[]/prerequisite'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="GeneralPrerequisites[]/prerequisite'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#GeneralPrerequisites[]/prerequisite'Disjunction/disjunction">Object</a>

---

### <a name="GeneralPrerequisites[]/prerequisite'Disjunction/disjunction"></a> `GeneralPrerequisites[]/prerequisite'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeneralPrerequisites[]/prerequisite'Disjunction/disjunction/list">See details</a>

#### <a name="GeneralPrerequisites[]/prerequisite'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites[]/prerequisite'Disjunction/disjunction/list[]">GeneralPrerequisites[]/prerequisite'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="GeneralPrerequisites[]/prerequisite'Disjunction/disjunction/list[]"></a> `GeneralPrerequisites[]/prerequisite'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites[]/prerequisite'Group"></a> `GeneralPrerequisites[]/prerequisite'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites[]/prerequisite'Group/tag">See details</a>
`group` |  | <a href="#GeneralPrerequisites[]/prerequisite'Group/group">See details</a>

#### <a name="GeneralPrerequisites[]/prerequisite'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites[]/prerequisite'Group/group"></a> `group`

- **Type:** <a href="#GeneralPrerequisites[]/prerequisite'Group/group">Object</a>

---

### <a name="GeneralPrerequisites[]/prerequisite'Group/group"></a> `GeneralPrerequisites[]/prerequisite'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeneralPrerequisites[]/prerequisite'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites[]/prerequisite'Group/group/translations">See details</a>

#### <a name="GeneralPrerequisites[]/prerequisite'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites[]/prerequisite'Group/group/list[]">GeneralPrerequisites[]/prerequisite'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites[]/prerequisite'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites[]/prerequisite'Group/group/translations[key]">GeneralPrerequisites[]/prerequisite'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites[]/prerequisite'Group/group/list[]"></a> `GeneralPrerequisites[]/prerequisite'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites[]/prerequisite'Group/group/translations[key]"></a> `GeneralPrerequisites[]/prerequisite'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ProfessionPrerequisites"></a> `ProfessionPrerequisites`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites[]">ProfessionPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="ProfessionPrerequisites[]"></a> `ProfessionPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#ProfessionPrerequisites[]'Single">ProfessionPrerequisites[]'Single</a> | <a href="#ProfessionPrerequisites[]'Disjunction">ProfessionPrerequisites[]'Disjunction</a> | <a href="#ProfessionPrerequisites[]'Group">ProfessionPrerequisites[]'Group</a>

---

### <a name="ProfessionPrerequisites[]'Single"></a> `ProfessionPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#ProfessionPrerequisites[]'Single/single">See details</a>

#### <a name="ProfessionPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="ProfessionPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites[]'Disjunction"></a> `ProfessionPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#ProfessionPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="ProfessionPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="ProfessionPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#ProfessionPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="ProfessionPrerequisites[]'Disjunction/disjunction"></a> `ProfessionPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#ProfessionPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="ProfessionPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites[]'Disjunction/disjunction/list[]">ProfessionPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="ProfessionPrerequisites[]'Disjunction/disjunction/list[]"></a> `ProfessionPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites[]'Group"></a> `ProfessionPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#ProfessionPrerequisites[]'Group/group">See details</a>

#### <a name="ProfessionPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ProfessionPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#ProfessionPrerequisites[]'Group/group">Object</a>

---

### <a name="ProfessionPrerequisites[]'Group/group"></a> `ProfessionPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#ProfessionPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionPrerequisites[]'Group/group/translations">See details</a>

#### <a name="ProfessionPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites[]'Group/group/list[]">ProfessionPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ProfessionPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionPrerequisites[]'Group/group/translations[key]">ProfessionPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProfessionPrerequisites[]'Group/group/list[]"></a> `ProfessionPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites[]'Group/group/translations[key]"></a> `ProfessionPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="AdvantageDisadvantagePrerequisites"></a> `AdvantageDisadvantagePrerequisites`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites[]">AdvantageDisadvantagePrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites[]"></a> `AdvantageDisadvantagePrerequisites[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#AdvantageDisadvantagePrerequisites[]/level">See details</a>
`prerequisite` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite"></a> `prerequisite`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Single">AdvantageDisadvantagePrerequisites[]/prerequisite'Single</a> | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction">AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction</a> | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group">AdvantageDisadvantagePrerequisites[]/prerequisite'Group</a>

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Single"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Single/tag">See details</a>
`single` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Single/single">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction">Object</a>

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction/list">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]">AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/tag">See details</a>
`group` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group"></a> `group`

- **Type:** <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group">Object</a>

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/list[]">AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/translations[key]">AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/list[]"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/translations[key]"></a> `AdvantageDisadvantagePrerequisites[]/prerequisite'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ArcaneTraditionPrerequisites"></a> `ArcaneTraditionPrerequisites`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites[]">ArcaneTraditionPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="ArcaneTraditionPrerequisites[]"></a> `ArcaneTraditionPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#ArcaneTraditionPrerequisites[]'Single">ArcaneTraditionPrerequisites[]'Single</a> | <a href="#ArcaneTraditionPrerequisites[]'Disjunction">ArcaneTraditionPrerequisites[]'Disjunction</a> | <a href="#ArcaneTraditionPrerequisites[]'Group">ArcaneTraditionPrerequisites[]'Group</a>

---

### <a name="ArcaneTraditionPrerequisites[]'Single"></a> `ArcaneTraditionPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#ArcaneTraditionPrerequisites[]'Single/single">See details</a>

#### <a name="ArcaneTraditionPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="ArcaneTraditionPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites[]'Disjunction"></a> `ArcaneTraditionPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#ArcaneTraditionPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="ArcaneTraditionPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="ArcaneTraditionPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#ArcaneTraditionPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="ArcaneTraditionPrerequisites[]'Disjunction/disjunction"></a> `ArcaneTraditionPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#ArcaneTraditionPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="ArcaneTraditionPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites[]'Disjunction/disjunction/list[]">ArcaneTraditionPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="ArcaneTraditionPrerequisites[]'Disjunction/disjunction/list[]"></a> `ArcaneTraditionPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites[]'Group"></a> `ArcaneTraditionPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#ArcaneTraditionPrerequisites[]'Group/group">See details</a>

#### <a name="ArcaneTraditionPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ArcaneTraditionPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#ArcaneTraditionPrerequisites[]'Group/group">Object</a>

---

### <a name="ArcaneTraditionPrerequisites[]'Group/group"></a> `ArcaneTraditionPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#ArcaneTraditionPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneTraditionPrerequisites[]'Group/group/translations">See details</a>

#### <a name="ArcaneTraditionPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites[]'Group/group/list[]">ArcaneTraditionPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ArcaneTraditionPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneTraditionPrerequisites[]'Group/group/translations[key]">ArcaneTraditionPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneTraditionPrerequisites[]'Group/group/list[]"></a> `ArcaneTraditionPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites[]'Group/group/translations[key]"></a> `ArcaneTraditionPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PersonalityTraitPrerequisites"></a> `PersonalityTraitPrerequisites`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites[]">PersonalityTraitPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="PersonalityTraitPrerequisites[]"></a> `PersonalityTraitPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#PersonalityTraitPrerequisites[]'Single">PersonalityTraitPrerequisites[]'Single</a> | <a href="#PersonalityTraitPrerequisites[]'Disjunction">PersonalityTraitPrerequisites[]'Disjunction</a> | <a href="#PersonalityTraitPrerequisites[]'Group">PersonalityTraitPrerequisites[]'Group</a>

---

### <a name="PersonalityTraitPrerequisites[]'Single"></a> `PersonalityTraitPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#PersonalityTraitPrerequisites[]'Single/single">See details</a>

#### <a name="PersonalityTraitPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="PersonalityTraitPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites[]'Disjunction"></a> `PersonalityTraitPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#PersonalityTraitPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="PersonalityTraitPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="PersonalityTraitPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#PersonalityTraitPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="PersonalityTraitPrerequisites[]'Disjunction/disjunction"></a> `PersonalityTraitPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PersonalityTraitPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="PersonalityTraitPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites[]'Disjunction/disjunction/list[]">PersonalityTraitPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="PersonalityTraitPrerequisites[]'Disjunction/disjunction/list[]"></a> `PersonalityTraitPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites[]'Group"></a> `PersonalityTraitPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#PersonalityTraitPrerequisites[]'Group/group">See details</a>

#### <a name="PersonalityTraitPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PersonalityTraitPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#PersonalityTraitPrerequisites[]'Group/group">Object</a>

---

### <a name="PersonalityTraitPrerequisites[]'Group/group"></a> `PersonalityTraitPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PersonalityTraitPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PersonalityTraitPrerequisites[]'Group/group/translations">See details</a>

#### <a name="PersonalityTraitPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites[]'Group/group/list[]">PersonalityTraitPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PersonalityTraitPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PersonalityTraitPrerequisites[]'Group/group/translations[key]">PersonalityTraitPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PersonalityTraitPrerequisites[]'Group/group/list[]"></a> `PersonalityTraitPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites[]'Group/group/translations[key]"></a> `PersonalityTraitPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="SpellworkPrerequisites"></a> `SpellworkPrerequisites`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites[]">SpellworkPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="SpellworkPrerequisites[]"></a> `SpellworkPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#SpellworkPrerequisites[]'Single">SpellworkPrerequisites[]'Single</a> | <a href="#SpellworkPrerequisites[]'Disjunction">SpellworkPrerequisites[]'Disjunction</a> | <a href="#SpellworkPrerequisites[]'Group">SpellworkPrerequisites[]'Group</a>

---

### <a name="SpellworkPrerequisites[]'Single"></a> `SpellworkPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#SpellworkPrerequisites[]'Single/single">See details</a>

#### <a name="SpellworkPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SpellworkPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites[]'Disjunction"></a> `SpellworkPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#SpellworkPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="SpellworkPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="SpellworkPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#SpellworkPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="SpellworkPrerequisites[]'Disjunction/disjunction"></a> `SpellworkPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#SpellworkPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="SpellworkPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites[]'Disjunction/disjunction/list[]">SpellworkPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="SpellworkPrerequisites[]'Disjunction/disjunction/list[]"></a> `SpellworkPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites[]'Group"></a> `SpellworkPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#SpellworkPrerequisites[]'Group/group">See details</a>

#### <a name="SpellworkPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="SpellworkPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#SpellworkPrerequisites[]'Group/group">Object</a>

---

### <a name="SpellworkPrerequisites[]'Group/group"></a> `SpellworkPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#SpellworkPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpellworkPrerequisites[]'Group/group/translations">See details</a>

#### <a name="SpellworkPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites[]'Group/group/list[]">SpellworkPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="SpellworkPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SpellworkPrerequisites[]'Group/group/translations[key]">SpellworkPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SpellworkPrerequisites[]'Group/group/list[]"></a> `SpellworkPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites[]'Group/group/translations[key]"></a> `SpellworkPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="LiturgyPrerequisites"></a> `LiturgyPrerequisites`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites[]">LiturgyPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="LiturgyPrerequisites[]"></a> `LiturgyPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#LiturgyPrerequisites[]'Single">LiturgyPrerequisites[]'Single</a> | <a href="#LiturgyPrerequisites[]'Disjunction">LiturgyPrerequisites[]'Disjunction</a> | <a href="#LiturgyPrerequisites[]'Group">LiturgyPrerequisites[]'Group</a>

---

### <a name="LiturgyPrerequisites[]'Single"></a> `LiturgyPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#LiturgyPrerequisites[]'Single/single">See details</a>

#### <a name="LiturgyPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="LiturgyPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites[]'Disjunction"></a> `LiturgyPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#LiturgyPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="LiturgyPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="LiturgyPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#LiturgyPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="LiturgyPrerequisites[]'Disjunction/disjunction"></a> `LiturgyPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LiturgyPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="LiturgyPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites[]'Disjunction/disjunction/list[]">LiturgyPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="LiturgyPrerequisites[]'Disjunction/disjunction/list[]"></a> `LiturgyPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites[]'Group"></a> `LiturgyPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#LiturgyPrerequisites[]'Group/group">See details</a>

#### <a name="LiturgyPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LiturgyPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#LiturgyPrerequisites[]'Group/group">Object</a>

---

### <a name="LiturgyPrerequisites[]'Group/group"></a> `LiturgyPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LiturgyPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgyPrerequisites[]'Group/group/translations">See details</a>

#### <a name="LiturgyPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites[]'Group/group/list[]">LiturgyPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LiturgyPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LiturgyPrerequisites[]'Group/group/translations[key]">LiturgyPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LiturgyPrerequisites[]'Group/group/list[]"></a> `LiturgyPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites[]'Group/group/translations[key]"></a> `LiturgyPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="InfluencePrerequisites"></a> `InfluencePrerequisites`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites[]">InfluencePrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="InfluencePrerequisites[]"></a> `InfluencePrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#InfluencePrerequisites[]'Single">InfluencePrerequisites[]'Single</a> | <a href="#InfluencePrerequisites[]'Disjunction">InfluencePrerequisites[]'Disjunction</a> | <a href="#InfluencePrerequisites[]'Group">InfluencePrerequisites[]'Group</a>

---

### <a name="InfluencePrerequisites[]'Single"></a> `InfluencePrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#InfluencePrerequisites[]'Single/single">See details</a>

#### <a name="InfluencePrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="InfluencePrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites[]'Disjunction"></a> `InfluencePrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#InfluencePrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="InfluencePrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="InfluencePrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#InfluencePrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="InfluencePrerequisites[]'Disjunction/disjunction"></a> `InfluencePrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#InfluencePrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="InfluencePrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites[]'Disjunction/disjunction/list[]">InfluencePrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="InfluencePrerequisites[]'Disjunction/disjunction/list[]"></a> `InfluencePrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites[]'Group"></a> `InfluencePrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#InfluencePrerequisites[]'Group/group">See details</a>

#### <a name="InfluencePrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="InfluencePrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#InfluencePrerequisites[]'Group/group">Object</a>

---

### <a name="InfluencePrerequisites[]'Group/group"></a> `InfluencePrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#InfluencePrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InfluencePrerequisites[]'Group/group/translations">See details</a>

#### <a name="InfluencePrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites[]'Group/group/list[]">InfluencePrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="InfluencePrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#InfluencePrerequisites[]'Group/group/translations[key]">InfluencePrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="InfluencePrerequisites[]'Group/group/list[]"></a> `InfluencePrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites[]'Group/group/translations[key]"></a> `InfluencePrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="LanguagePrerequisites"></a> `LanguagePrerequisites`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites[]">LanguagePrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites[]"></a> `LanguagePrerequisites[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#LanguagePrerequisites[]/level">See details</a>
`prerequisite` |  | <a href="#LanguagePrerequisites[]/prerequisite">See details</a>

#### <a name="LanguagePrerequisites[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LanguagePrerequisites[]/prerequisite"></a> `prerequisite`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisites[]/prerequisite'Single">LanguagePrerequisites[]/prerequisite'Single</a> | <a href="#LanguagePrerequisites[]/prerequisite'Disjunction">LanguagePrerequisites[]/prerequisite'Disjunction</a> | <a href="#LanguagePrerequisites[]/prerequisite'Group">LanguagePrerequisites[]/prerequisite'Group</a>

---

### <a name="LanguagePrerequisites[]/prerequisite'Single"></a> `LanguagePrerequisites[]/prerequisite'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites[]/prerequisite'Single/tag">See details</a>
`single` |  | <a href="#LanguagePrerequisites[]/prerequisite'Single/single">See details</a>

#### <a name="LanguagePrerequisites[]/prerequisite'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="LanguagePrerequisites[]/prerequisite'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites[]/prerequisite'Disjunction"></a> `LanguagePrerequisites[]/prerequisite'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites[]/prerequisite'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#LanguagePrerequisites[]/prerequisite'Disjunction/disjunction">See details</a>

#### <a name="LanguagePrerequisites[]/prerequisite'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="LanguagePrerequisites[]/prerequisite'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#LanguagePrerequisites[]/prerequisite'Disjunction/disjunction">Object</a>

---

### <a name="LanguagePrerequisites[]/prerequisite'Disjunction/disjunction"></a> `LanguagePrerequisites[]/prerequisite'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LanguagePrerequisites[]/prerequisite'Disjunction/disjunction/list">See details</a>

#### <a name="LanguagePrerequisites[]/prerequisite'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]">LanguagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="LanguagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]"></a> `LanguagePrerequisites[]/prerequisite'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites[]/prerequisite'Group"></a> `LanguagePrerequisites[]/prerequisite'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites[]/prerequisite'Group/tag">See details</a>
`group` |  | <a href="#LanguagePrerequisites[]/prerequisite'Group/group">See details</a>

#### <a name="LanguagePrerequisites[]/prerequisite'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites[]/prerequisite'Group/group"></a> `group`

- **Type:** <a href="#LanguagePrerequisites[]/prerequisite'Group/group">Object</a>

---

### <a name="LanguagePrerequisites[]/prerequisite'Group/group"></a> `LanguagePrerequisites[]/prerequisite'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LanguagePrerequisites[]/prerequisite'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites[]/prerequisite'Group/group/translations">See details</a>

#### <a name="LanguagePrerequisites[]/prerequisite'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites[]/prerequisite'Group/group/list[]">LanguagePrerequisites[]/prerequisite'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites[]/prerequisite'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites[]/prerequisite'Group/group/translations[key]">LanguagePrerequisites[]/prerequisite'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites[]/prerequisite'Group/group/list[]"></a> `LanguagePrerequisites[]/prerequisite'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites[]/prerequisite'Group/group/translations[key]"></a> `LanguagePrerequisites[]/prerequisite'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="AnimistPowerPrerequisites"></a> `AnimistPowerPrerequisites`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites[]">AnimistPowerPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimistPowerPrerequisites[]"></a> `AnimistPowerPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPrerequisites[]'Single">AnimistPowerPrerequisites[]'Single</a> | <a href="#AnimistPowerPrerequisites[]'Disjunction">AnimistPowerPrerequisites[]'Disjunction</a> | <a href="#AnimistPowerPrerequisites[]'Group">AnimistPowerPrerequisites[]'Group</a>

---

### <a name="AnimistPowerPrerequisites[]'Single"></a> `AnimistPowerPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#AnimistPowerPrerequisites[]'Single/single">See details</a>

#### <a name="AnimistPowerPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="AnimistPowerPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites[]'Disjunction"></a> `AnimistPowerPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#AnimistPowerPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="AnimistPowerPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="AnimistPowerPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#AnimistPowerPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="AnimistPowerPrerequisites[]'Disjunction/disjunction"></a> `AnimistPowerPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AnimistPowerPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="AnimistPowerPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites[]'Disjunction/disjunction/list[]">AnimistPowerPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="AnimistPowerPrerequisites[]'Disjunction/disjunction/list[]"></a> `AnimistPowerPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites[]'Group"></a> `AnimistPowerPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#AnimistPowerPrerequisites[]'Group/group">See details</a>

#### <a name="AnimistPowerPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AnimistPowerPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#AnimistPowerPrerequisites[]'Group/group">Object</a>

---

### <a name="AnimistPowerPrerequisites[]'Group/group"></a> `AnimistPowerPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AnimistPowerPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPowerPrerequisites[]'Group/group/translations">See details</a>

#### <a name="AnimistPowerPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites[]'Group/group/list[]">AnimistPowerPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AnimistPowerPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimistPowerPrerequisites[]'Group/group/translations[key]">AnimistPowerPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimistPowerPrerequisites[]'Group/group/list[]"></a> `AnimistPowerPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites[]'Group/group/translations[key]"></a> `AnimistPowerPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="GeodeRitualPrerequisites"></a> `GeodeRitualPrerequisites`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites[]">GeodeRitualPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="GeodeRitualPrerequisites[]"></a> `GeodeRitualPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualPrerequisites[]'Single">GeodeRitualPrerequisites[]'Single</a> | <a href="#GeodeRitualPrerequisites[]'Disjunction">GeodeRitualPrerequisites[]'Disjunction</a> | <a href="#GeodeRitualPrerequisites[]'Group">GeodeRitualPrerequisites[]'Group</a>

---

### <a name="GeodeRitualPrerequisites[]'Single"></a> `GeodeRitualPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#GeodeRitualPrerequisites[]'Single/single">See details</a>

#### <a name="GeodeRitualPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="GeodeRitualPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites[]'Disjunction"></a> `GeodeRitualPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#GeodeRitualPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="GeodeRitualPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="GeodeRitualPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#GeodeRitualPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="GeodeRitualPrerequisites[]'Disjunction/disjunction"></a> `GeodeRitualPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeodeRitualPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="GeodeRitualPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites[]'Disjunction/disjunction/list[]">GeodeRitualPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="GeodeRitualPrerequisites[]'Disjunction/disjunction/list[]"></a> `GeodeRitualPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites[]'Group"></a> `GeodeRitualPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#GeodeRitualPrerequisites[]'Group/group">See details</a>

#### <a name="GeodeRitualPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeodeRitualPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#GeodeRitualPrerequisites[]'Group/group">Object</a>

---

### <a name="GeodeRitualPrerequisites[]'Group/group"></a> `GeodeRitualPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeodeRitualPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeodeRitualPrerequisites[]'Group/group/translations">See details</a>

#### <a name="GeodeRitualPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites[]'Group/group/list[]">GeodeRitualPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeodeRitualPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeodeRitualPrerequisites[]'Group/group/translations[key]">GeodeRitualPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeodeRitualPrerequisites[]'Group/group/list[]"></a> `GeodeRitualPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites[]'Group/group/translations[key]"></a> `GeodeRitualPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="EnhancementPrerequisites"></a> `EnhancementPrerequisites`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites[]">EnhancementPrerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="EnhancementPrerequisites[]"></a> `EnhancementPrerequisites[]`

- **Type:** Union
- **Cases:** <a href="#EnhancementPrerequisites[]'Single">EnhancementPrerequisites[]'Single</a> | <a href="#EnhancementPrerequisites[]'Disjunction">EnhancementPrerequisites[]'Disjunction</a> | <a href="#EnhancementPrerequisites[]'Group">EnhancementPrerequisites[]'Group</a>

---

### <a name="EnhancementPrerequisites[]'Single"></a> `EnhancementPrerequisites[]'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites[]'Single/tag">See details</a>
`single` |  | <a href="#EnhancementPrerequisites[]'Single/single">See details</a>

#### <a name="EnhancementPrerequisites[]'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="EnhancementPrerequisites[]'Single/single"></a> `single`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites[]'Disjunction"></a> `EnhancementPrerequisites[]'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites[]'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#EnhancementPrerequisites[]'Disjunction/disjunction">See details</a>

#### <a name="EnhancementPrerequisites[]'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="EnhancementPrerequisites[]'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#EnhancementPrerequisites[]'Disjunction/disjunction">Object</a>

---

### <a name="EnhancementPrerequisites[]'Disjunction/disjunction"></a> `EnhancementPrerequisites[]'Disjunction/disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#EnhancementPrerequisites[]'Disjunction/disjunction/list">See details</a>

#### <a name="EnhancementPrerequisites[]'Disjunction/disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites[]'Disjunction/disjunction/list[]">EnhancementPrerequisites[]'Disjunction/disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="EnhancementPrerequisites[]'Disjunction/disjunction/list[]"></a> `EnhancementPrerequisites[]'Disjunction/disjunction/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites[]'Group"></a> `EnhancementPrerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#EnhancementPrerequisites[]'Group/group">See details</a>

#### <a name="EnhancementPrerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="EnhancementPrerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#EnhancementPrerequisites[]'Group/group">Object</a>

---

### <a name="EnhancementPrerequisites[]'Group/group"></a> `EnhancementPrerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#EnhancementPrerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EnhancementPrerequisites[]'Group/group/translations">See details</a>

#### <a name="EnhancementPrerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites[]'Group/group/list[]">EnhancementPrerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="EnhancementPrerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EnhancementPrerequisites[]'Group/group/translations[key]">EnhancementPrerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EnhancementPrerequisites[]'Group/group/list[]"></a> `EnhancementPrerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites[]'Group/group/translations[key]"></a> `EnhancementPrerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
