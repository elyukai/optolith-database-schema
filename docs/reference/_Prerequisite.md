# Prerequisites

## Definitions

---

### <a name="DerivedCharacteristicPrerequisites"></a> `DerivedCharacteristicPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites/tag">See details</a>
`list` |  | <a href="#DerivedCharacteristicPrerequisites/list">See details</a>

#### <a name="DerivedCharacteristicPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="DerivedCharacteristicPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites/list[]">DerivedCharacteristicPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="DerivedCharacteristicPrerequisites/list[]"></a> `DerivedCharacteristicPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#DerivedCharacteristicPrerequisites/list[]'DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisites/list[]'DerivedCharacteristicPrerequisiteGroup</a> | <a href="#DerivedCharacteristicPrerequisites/list[]'Group">DerivedCharacteristicPrerequisites/list[]'Group</a>

---

### <a name="DerivedCharacteristicPrerequisites/list[]'DerivedCharacteristicPrerequisiteGroup"></a> `DerivedCharacteristicPrerequisites/list[]'DerivedCharacteristicPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites/list[]'Group"></a> `DerivedCharacteristicPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#DerivedCharacteristicPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DerivedCharacteristicPrerequisites/list[]'Group/translations">See details</a>

#### <a name="DerivedCharacteristicPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="DerivedCharacteristicPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites/list[]'Group/list[]">DerivedCharacteristicPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="DerivedCharacteristicPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DerivedCharacteristicPrerequisites/list[]'Group/translations[key]">DerivedCharacteristicPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DerivedCharacteristicPrerequisites/list[]'Group/list[]"></a> `DerivedCharacteristicPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites/list[]'Group/translations[key]"></a> `DerivedCharacteristicPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PublicationPrerequisites"></a> `PublicationPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites/tag">See details</a>
`list` |  | <a href="#PublicationPrerequisites/list">See details</a>

#### <a name="PublicationPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="PublicationPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites/list[]">PublicationPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="PublicationPrerequisites/list[]"></a> `PublicationPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#PublicationPrerequisites/list[]'PublicationPrerequisiteGroup">PublicationPrerequisites/list[]'PublicationPrerequisiteGroup</a> | <a href="#PublicationPrerequisites/list[]'Group">PublicationPrerequisites/list[]'Group</a>

---

### <a name="PublicationPrerequisites/list[]'PublicationPrerequisiteGroup"></a> `PublicationPrerequisites/list[]'PublicationPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites/list[]'Group"></a> `PublicationPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#PublicationPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PublicationPrerequisites/list[]'Group/translations">See details</a>

#### <a name="PublicationPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PublicationPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites/list[]'Group/list[]">PublicationPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PublicationPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PublicationPrerequisites/list[]'Group/translations[key]">PublicationPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PublicationPrerequisites/list[]'Group/list[]"></a> `PublicationPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites/list[]'Group/translations[key]"></a> `PublicationPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="GeneralPrerequisites"></a> `GeneralPrerequisites`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisites'Plain">GeneralPrerequisites'Plain</a> | <a href="#GeneralPrerequisites'ByLevel">GeneralPrerequisites'ByLevel</a>

---

### <a name="GeneralPrerequisites'Plain"></a> `GeneralPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'Plain/tag">See details</a>
`list` |  | <a href="#GeneralPrerequisites'Plain/list">See details</a>

#### <a name="GeneralPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GeneralPrerequisites'Plain/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'Plain/list[]">GeneralPrerequisites'Plain/list[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites'Plain/list[]"></a> `GeneralPrerequisites'Plain/list[]`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisites'Plain/list[]'GeneralPrerequisiteGroup">GeneralPrerequisites'Plain/list[]'GeneralPrerequisiteGroup</a> | <a href="#GeneralPrerequisites'Plain/list[]'Group">GeneralPrerequisites'Plain/list[]'Group</a>

---

### <a name="GeneralPrerequisites'Plain/list[]'GeneralPrerequisiteGroup"></a> `GeneralPrerequisites'Plain/list[]'GeneralPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'Plain/list[]'Group"></a> `GeneralPrerequisites'Plain/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'Plain/list[]'Group/tag">See details</a>
`list` |  | <a href="#GeneralPrerequisites'Plain/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites'Plain/list[]'Group/translations">See details</a>

#### <a name="GeneralPrerequisites'Plain/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites'Plain/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'Plain/list[]'Group/list[]">GeneralPrerequisites'Plain/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites'Plain/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites'Plain/list[]'Group/translations[key]">GeneralPrerequisites'Plain/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites'Plain/list[]'Group/list[]"></a> `GeneralPrerequisites'Plain/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'Plain/list[]'Group/translations[key]"></a> `GeneralPrerequisites'Plain/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="GeneralPrerequisites'ByLevel"></a> `GeneralPrerequisites'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'ByLevel/tag">See details</a>
`list` |  | <a href="#GeneralPrerequisites'ByLevel/list">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="GeneralPrerequisites'ByLevel/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/list[]">GeneralPrerequisites'ByLevel/list[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/list[]"></a> `GeneralPrerequisites'ByLevel/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#GeneralPrerequisites'ByLevel/list[]/level">See details</a>
`prerequisites` |  | <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/list[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]">GeneralPrerequisites'ByLevel/list[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]"></a> `GeneralPrerequisites'ByLevel/list[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'GeneralPrerequisiteGroup">GeneralPrerequisites'ByLevel/list[]/prerequisites[]'GeneralPrerequisiteGroup</a> | <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group">GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group</a>

---

### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'GeneralPrerequisiteGroup"></a> `GeneralPrerequisites'ByLevel/list[]/prerequisites[]'GeneralPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group"></a> `GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/tag">See details</a>
`list` |  | <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/translations">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]">GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]">GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]"></a> `GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]"></a> `GeneralPrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ProfessionPrerequisites"></a> `ProfessionPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites/tag">See details</a>
`list` |  | <a href="#ProfessionPrerequisites/list">See details</a>

#### <a name="ProfessionPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ProfessionPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites/list[]">ProfessionPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="ProfessionPrerequisites/list[]"></a> `ProfessionPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#ProfessionPrerequisites/list[]'ProfessionPrerequisiteGroup">ProfessionPrerequisites/list[]'ProfessionPrerequisiteGroup</a> | <a href="#ProfessionPrerequisites/list[]'Group">ProfessionPrerequisites/list[]'Group</a>

---

### <a name="ProfessionPrerequisites/list[]'ProfessionPrerequisiteGroup"></a> `ProfessionPrerequisites/list[]'ProfessionPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites/list[]'Group"></a> `ProfessionPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#ProfessionPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionPrerequisites/list[]'Group/translations">See details</a>

#### <a name="ProfessionPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ProfessionPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites/list[]'Group/list[]">ProfessionPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ProfessionPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionPrerequisites/list[]'Group/translations[key]">ProfessionPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProfessionPrerequisites/list[]'Group/list[]"></a> `ProfessionPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites/list[]'Group/translations[key]"></a> `ProfessionPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites"></a> `AdvantageDisadvantagePrerequisites`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisites'Plain">AdvantageDisadvantagePrerequisites'Plain</a> | <a href="#AdvantageDisadvantagePrerequisites'ByLevel">AdvantageDisadvantagePrerequisites'ByLevel</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain"></a> `AdvantageDisadvantagePrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/tag">See details</a>
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/list">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]">AdvantageDisadvantagePrerequisites'Plain/list[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]"></a> `AdvantageDisadvantagePrerequisites'Plain/list[]`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisites'Plain/list[]'AdvantageDisadvantagePrerequisiteGroup</a> | <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'Group">AdvantageDisadvantagePrerequisites'Plain/list[]'Group</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'AdvantageDisadvantagePrerequisiteGroup"></a> `AdvantageDisadvantagePrerequisites'Plain/list[]'AdvantageDisadvantagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'Group"></a> `AdvantageDisadvantagePrerequisites'Plain/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'Group/tag">See details</a>
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'Group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'Group/list[]">AdvantageDisadvantagePrerequisites'Plain/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites'Plain/list[]'Group/translations[key]">AdvantageDisadvantagePrerequisites'Plain/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'Group/list[]"></a> `AdvantageDisadvantagePrerequisites'Plain/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/list[]'Group/translations[key]"></a> `AdvantageDisadvantagePrerequisites'Plain/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel"></a> `AdvantageDisadvantagePrerequisites'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/tag">See details</a>
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]">AdvantageDisadvantagePrerequisites'ByLevel/list[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/level">See details</a>
`prerequisites` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]">AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup</a> | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group">AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup"></a> `AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group"></a> `AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/tag">See details</a>
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]">AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]">AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="ArcaneTraditionPrerequisites"></a> `ArcaneTraditionPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites/tag">See details</a>
`list` |  | <a href="#ArcaneTraditionPrerequisites/list">See details</a>

#### <a name="ArcaneTraditionPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ArcaneTraditionPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites/list[]">ArcaneTraditionPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="ArcaneTraditionPrerequisites/list[]"></a> `ArcaneTraditionPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#ArcaneTraditionPrerequisites/list[]'ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisites/list[]'ArcaneTraditionPrerequisiteGroup</a> | <a href="#ArcaneTraditionPrerequisites/list[]'Group">ArcaneTraditionPrerequisites/list[]'Group</a>

---

### <a name="ArcaneTraditionPrerequisites/list[]'ArcaneTraditionPrerequisiteGroup"></a> `ArcaneTraditionPrerequisites/list[]'ArcaneTraditionPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites/list[]'Group"></a> `ArcaneTraditionPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#ArcaneTraditionPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneTraditionPrerequisites/list[]'Group/translations">See details</a>

#### <a name="ArcaneTraditionPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ArcaneTraditionPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites/list[]'Group/list[]">ArcaneTraditionPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ArcaneTraditionPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneTraditionPrerequisites/list[]'Group/translations[key]">ArcaneTraditionPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneTraditionPrerequisites/list[]'Group/list[]"></a> `ArcaneTraditionPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites/list[]'Group/translations[key]"></a> `ArcaneTraditionPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PersonalityTraitPrerequisites"></a> `PersonalityTraitPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites/tag">See details</a>
`list` |  | <a href="#PersonalityTraitPrerequisites/list">See details</a>

#### <a name="PersonalityTraitPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="PersonalityTraitPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites/list[]">PersonalityTraitPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="PersonalityTraitPrerequisites/list[]"></a> `PersonalityTraitPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#PersonalityTraitPrerequisites/list[]'PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisites/list[]'PersonalityTraitPrerequisiteGroup</a> | <a href="#PersonalityTraitPrerequisites/list[]'Group">PersonalityTraitPrerequisites/list[]'Group</a>

---

### <a name="PersonalityTraitPrerequisites/list[]'PersonalityTraitPrerequisiteGroup"></a> `PersonalityTraitPrerequisites/list[]'PersonalityTraitPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites/list[]'Group"></a> `PersonalityTraitPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#PersonalityTraitPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PersonalityTraitPrerequisites/list[]'Group/translations">See details</a>

#### <a name="PersonalityTraitPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PersonalityTraitPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites/list[]'Group/list[]">PersonalityTraitPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PersonalityTraitPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PersonalityTraitPrerequisites/list[]'Group/translations[key]">PersonalityTraitPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PersonalityTraitPrerequisites/list[]'Group/list[]"></a> `PersonalityTraitPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites/list[]'Group/translations[key]"></a> `PersonalityTraitPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="SpellworkPrerequisites"></a> `SpellworkPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites/tag">See details</a>
`list` |  | <a href="#SpellworkPrerequisites/list">See details</a>

#### <a name="SpellworkPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="SpellworkPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites/list[]">SpellworkPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="SpellworkPrerequisites/list[]"></a> `SpellworkPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#SpellworkPrerequisites/list[]'SpellworkPrerequisiteGroup">SpellworkPrerequisites/list[]'SpellworkPrerequisiteGroup</a> | <a href="#SpellworkPrerequisites/list[]'Group">SpellworkPrerequisites/list[]'Group</a>

---

### <a name="SpellworkPrerequisites/list[]'SpellworkPrerequisiteGroup"></a> `SpellworkPrerequisites/list[]'SpellworkPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites/list[]'Group"></a> `SpellworkPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#SpellworkPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpellworkPrerequisites/list[]'Group/translations">See details</a>

#### <a name="SpellworkPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="SpellworkPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites/list[]'Group/list[]">SpellworkPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="SpellworkPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SpellworkPrerequisites/list[]'Group/translations[key]">SpellworkPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SpellworkPrerequisites/list[]'Group/list[]"></a> `SpellworkPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites/list[]'Group/translations[key]"></a> `SpellworkPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="LiturgyPrerequisites"></a> `LiturgyPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites/tag">See details</a>
`list` |  | <a href="#LiturgyPrerequisites/list">See details</a>

#### <a name="LiturgyPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="LiturgyPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites/list[]">LiturgyPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="LiturgyPrerequisites/list[]"></a> `LiturgyPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#LiturgyPrerequisites/list[]'LiturgyPrerequisiteGroup">LiturgyPrerequisites/list[]'LiturgyPrerequisiteGroup</a> | <a href="#LiturgyPrerequisites/list[]'Group">LiturgyPrerequisites/list[]'Group</a>

---

### <a name="LiturgyPrerequisites/list[]'LiturgyPrerequisiteGroup"></a> `LiturgyPrerequisites/list[]'LiturgyPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites/list[]'Group"></a> `LiturgyPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#LiturgyPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgyPrerequisites/list[]'Group/translations">See details</a>

#### <a name="LiturgyPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LiturgyPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites/list[]'Group/list[]">LiturgyPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LiturgyPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LiturgyPrerequisites/list[]'Group/translations[key]">LiturgyPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LiturgyPrerequisites/list[]'Group/list[]"></a> `LiturgyPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites/list[]'Group/translations[key]"></a> `LiturgyPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="InfluencePrerequisites"></a> `InfluencePrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites/tag">See details</a>
`list` |  | <a href="#InfluencePrerequisites/list">See details</a>

#### <a name="InfluencePrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="InfluencePrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites/list[]">InfluencePrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="InfluencePrerequisites/list[]"></a> `InfluencePrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#InfluencePrerequisites/list[]'InfluencePrerequisiteGroup">InfluencePrerequisites/list[]'InfluencePrerequisiteGroup</a> | <a href="#InfluencePrerequisites/list[]'Group">InfluencePrerequisites/list[]'Group</a>

---

### <a name="InfluencePrerequisites/list[]'InfluencePrerequisiteGroup"></a> `InfluencePrerequisites/list[]'InfluencePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites/list[]'Group"></a> `InfluencePrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#InfluencePrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InfluencePrerequisites/list[]'Group/translations">See details</a>

#### <a name="InfluencePrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="InfluencePrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites/list[]'Group/list[]">InfluencePrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="InfluencePrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#InfluencePrerequisites/list[]'Group/translations[key]">InfluencePrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="InfluencePrerequisites/list[]'Group/list[]"></a> `InfluencePrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites/list[]'Group/translations[key]"></a> `InfluencePrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="LanguagePrerequisites"></a> `LanguagePrerequisites`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisites'Plain">LanguagePrerequisites'Plain</a> | <a href="#LanguagePrerequisites'ByLevel">LanguagePrerequisites'ByLevel</a>

---

### <a name="LanguagePrerequisites'Plain"></a> `LanguagePrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'Plain/tag">See details</a>
`list` |  | <a href="#LanguagePrerequisites'Plain/list">See details</a>

#### <a name="LanguagePrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="LanguagePrerequisites'Plain/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'Plain/list[]">LanguagePrerequisites'Plain/list[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites'Plain/list[]"></a> `LanguagePrerequisites'Plain/list[]`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisites'Plain/list[]'LanguagePrerequisiteGroup">LanguagePrerequisites'Plain/list[]'LanguagePrerequisiteGroup</a> | <a href="#LanguagePrerequisites'Plain/list[]'Group">LanguagePrerequisites'Plain/list[]'Group</a>

---

### <a name="LanguagePrerequisites'Plain/list[]'LanguagePrerequisiteGroup"></a> `LanguagePrerequisites'Plain/list[]'LanguagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'Plain/list[]'Group"></a> `LanguagePrerequisites'Plain/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'Plain/list[]'Group/tag">See details</a>
`list` |  | <a href="#LanguagePrerequisites'Plain/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites'Plain/list[]'Group/translations">See details</a>

#### <a name="LanguagePrerequisites'Plain/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites'Plain/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'Plain/list[]'Group/list[]">LanguagePrerequisites'Plain/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites'Plain/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites'Plain/list[]'Group/translations[key]">LanguagePrerequisites'Plain/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites'Plain/list[]'Group/list[]"></a> `LanguagePrerequisites'Plain/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'Plain/list[]'Group/translations[key]"></a> `LanguagePrerequisites'Plain/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="LanguagePrerequisites'ByLevel"></a> `LanguagePrerequisites'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'ByLevel/tag">See details</a>
`list` |  | <a href="#LanguagePrerequisites'ByLevel/list">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="LanguagePrerequisites'ByLevel/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/list[]">LanguagePrerequisites'ByLevel/list[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/list[]"></a> `LanguagePrerequisites'ByLevel/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#LanguagePrerequisites'ByLevel/list[]/level">See details</a>
`prerequisites` |  | <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/list[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]">LanguagePrerequisites'ByLevel/list[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]"></a> `LanguagePrerequisites'ByLevel/list[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'LanguagePrerequisiteGroup">LanguagePrerequisites'ByLevel/list[]/prerequisites[]'LanguagePrerequisiteGroup</a> | <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group">LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group</a>

---

### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'LanguagePrerequisiteGroup"></a> `LanguagePrerequisites'ByLevel/list[]/prerequisites[]'LanguagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group"></a> `LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/tag">See details</a>
`list` |  | <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]">LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]">LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]"></a> `LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]"></a> `LanguagePrerequisites'ByLevel/list[]/prerequisites[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="AnimistPowerPrerequisites"></a> `AnimistPowerPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites/tag">See details</a>
`list` |  | <a href="#AnimistPowerPrerequisites/list">See details</a>

#### <a name="AnimistPowerPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="AnimistPowerPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites/list[]">AnimistPowerPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimistPowerPrerequisites/list[]"></a> `AnimistPowerPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPrerequisites/list[]'AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisites/list[]'AnimistPowerPrerequisiteGroup</a> | <a href="#AnimistPowerPrerequisites/list[]'Group">AnimistPowerPrerequisites/list[]'Group</a>

---

### <a name="AnimistPowerPrerequisites/list[]'AnimistPowerPrerequisiteGroup"></a> `AnimistPowerPrerequisites/list[]'AnimistPowerPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites/list[]'Group"></a> `AnimistPowerPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#AnimistPowerPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPowerPrerequisites/list[]'Group/translations">See details</a>

#### <a name="AnimistPowerPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AnimistPowerPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites/list[]'Group/list[]">AnimistPowerPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AnimistPowerPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimistPowerPrerequisites/list[]'Group/translations[key]">AnimistPowerPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimistPowerPrerequisites/list[]'Group/list[]"></a> `AnimistPowerPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites/list[]'Group/translations[key]"></a> `AnimistPowerPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="GeodeRitualPrerequisites"></a> `GeodeRitualPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites/tag">See details</a>
`list` |  | <a href="#GeodeRitualPrerequisites/list">See details</a>

#### <a name="GeodeRitualPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GeodeRitualPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites/list[]">GeodeRitualPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="GeodeRitualPrerequisites/list[]"></a> `GeodeRitualPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualPrerequisites/list[]'GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisites/list[]'GeodeRitualPrerequisiteGroup</a> | <a href="#GeodeRitualPrerequisites/list[]'Group">GeodeRitualPrerequisites/list[]'Group</a>

---

### <a name="GeodeRitualPrerequisites/list[]'GeodeRitualPrerequisiteGroup"></a> `GeodeRitualPrerequisites/list[]'GeodeRitualPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites/list[]'Group"></a> `GeodeRitualPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#GeodeRitualPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeodeRitualPrerequisites/list[]'Group/translations">See details</a>

#### <a name="GeodeRitualPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeodeRitualPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites/list[]'Group/list[]">GeodeRitualPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeodeRitualPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeodeRitualPrerequisites/list[]'Group/translations[key]">GeodeRitualPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeodeRitualPrerequisites/list[]'Group/list[]"></a> `GeodeRitualPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites/list[]'Group/translations[key]"></a> `GeodeRitualPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="EnhancementPrerequisites"></a> `EnhancementPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites/tag">See details</a>
`list` |  | <a href="#EnhancementPrerequisites/list">See details</a>

#### <a name="EnhancementPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="EnhancementPrerequisites/list"></a> `list`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites/list[]">EnhancementPrerequisites/list[]</a>
- **Minimum Items:** `1`

---

### <a name="EnhancementPrerequisites/list[]"></a> `EnhancementPrerequisites/list[]`

- **Type:** Union
- **Cases:** <a href="#EnhancementPrerequisites/list[]'EnhancementPrerequisiteGroup">EnhancementPrerequisites/list[]'EnhancementPrerequisiteGroup</a> | <a href="#EnhancementPrerequisites/list[]'Group">EnhancementPrerequisites/list[]'Group</a>

---

### <a name="EnhancementPrerequisites/list[]'EnhancementPrerequisiteGroup"></a> `EnhancementPrerequisites/list[]'EnhancementPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites/list[]'Group"></a> `EnhancementPrerequisites/list[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites/list[]'Group/tag">See details</a>
`list` |  | <a href="#EnhancementPrerequisites/list[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EnhancementPrerequisites/list[]'Group/translations">See details</a>

#### <a name="EnhancementPrerequisites/list[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="EnhancementPrerequisites/list[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites/list[]'Group/list[]">EnhancementPrerequisites/list[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="EnhancementPrerequisites/list[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EnhancementPrerequisites/list[]'Group/translations[key]">EnhancementPrerequisites/list[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EnhancementPrerequisites/list[]'Group/list[]"></a> `EnhancementPrerequisites/list[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites/list[]'Group/translations[key]"></a> `EnhancementPrerequisites/list[]'Group/translations[key]`

- **Type:** String
- **Minimum Length:** `1`
