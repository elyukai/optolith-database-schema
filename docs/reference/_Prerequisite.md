# Prerequisites

## Definitions

### <a name="DerivedCharacteristicPrerequisites"></a> `DerivedCharacteristicPrerequisites`

- **Type:** Union
- **Cases:** <a href="#DerivedCharacteristicPrerequisites'Plain">DerivedCharacteristicPrerequisites'Plain</a>

---

### <a name="DerivedCharacteristicPrerequisites'Plain"></a> `DerivedCharacteristicPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#DerivedCharacteristicPrerequisites'Plain/plain">See details</a>

#### <a name="DerivedCharacteristicPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="DerivedCharacteristicPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]">DerivedCharacteristicPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]"></a> `DerivedCharacteristicPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisites'Plain/plain[]'DerivedCharacteristicPrerequisiteGroup</a> | <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group">DerivedCharacteristicPrerequisites'Plain/plain[]'Group</a>

---

### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'DerivedCharacteristicPrerequisiteGroup"></a> `DerivedCharacteristicPrerequisites'Plain/plain[]'DerivedCharacteristicPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group"></a> `DerivedCharacteristicPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group"></a> `DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/list[]">DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/translations[key]">DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/list[]"></a> `DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `DerivedCharacteristicPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PublicationPrerequisites"></a> `PublicationPrerequisites`

- **Type:** Union
- **Cases:** <a href="#PublicationPrerequisites'Plain">PublicationPrerequisites'Plain</a>

---

### <a name="PublicationPrerequisites'Plain"></a> `PublicationPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#PublicationPrerequisites'Plain/plain">See details</a>

#### <a name="PublicationPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="PublicationPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites'Plain/plain[]">PublicationPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="PublicationPrerequisites'Plain/plain[]"></a> `PublicationPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#PublicationPrerequisites'Plain/plain[]'PublicationPrerequisiteGroup">PublicationPrerequisites'Plain/plain[]'PublicationPrerequisiteGroup</a> | <a href="#PublicationPrerequisites'Plain/plain[]'Group">PublicationPrerequisites'Plain/plain[]'Group</a>

---

### <a name="PublicationPrerequisites'Plain/plain[]'PublicationPrerequisiteGroup"></a> `PublicationPrerequisites'Plain/plain[]'PublicationPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites'Plain/plain[]'Group"></a> `PublicationPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#PublicationPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="PublicationPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PublicationPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#PublicationPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="PublicationPrerequisites'Plain/plain[]'Group/group"></a> `PublicationPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PublicationPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PublicationPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="PublicationPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites'Plain/plain[]'Group/group/list[]">PublicationPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PublicationPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PublicationPrerequisites'Plain/plain[]'Group/group/translations[key]">PublicationPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PublicationPrerequisites'Plain/plain[]'Group/group/list[]"></a> `PublicationPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `PublicationPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

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
`plain` |  | <a href="#GeneralPrerequisites'Plain/plain">See details</a>

#### <a name="GeneralPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GeneralPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'Plain/plain[]">GeneralPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites'Plain/plain[]"></a> `GeneralPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisites'Plain/plain[]'GeneralPrerequisiteGroup">GeneralPrerequisites'Plain/plain[]'GeneralPrerequisiteGroup</a> | <a href="#GeneralPrerequisites'Plain/plain[]'Group">GeneralPrerequisites'Plain/plain[]'Group</a>

---

### <a name="GeneralPrerequisites'Plain/plain[]'GeneralPrerequisiteGroup"></a> `GeneralPrerequisites'Plain/plain[]'GeneralPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'Plain/plain[]'Group"></a> `GeneralPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#GeneralPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#GeneralPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="GeneralPrerequisites'Plain/plain[]'Group/group"></a> `GeneralPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeneralPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'Plain/plain[]'Group/group/list[]">GeneralPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites'Plain/plain[]'Group/group/translations[key]">GeneralPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites'Plain/plain[]'Group/group/list[]"></a> `GeneralPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `GeneralPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="GeneralPrerequisites'ByLevel"></a> `GeneralPrerequisites'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'ByLevel/tag">See details</a>
`by_level` |  | <a href="#GeneralPrerequisites'ByLevel/by_level">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="GeneralPrerequisites'ByLevel/by_level"></a> `by_level`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/by_level[]">GeneralPrerequisites'ByLevel/by_level[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]"></a> `GeneralPrerequisites'ByLevel/by_level[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/level">See details</a>
`prerequisites` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'GeneralPrerequisiteGroup">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'GeneralPrerequisiteGroup</a> | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group</a>

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'GeneralPrerequisiteGroup"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'GeneralPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group">Object</a>

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ProfessionPrerequisites"></a> `ProfessionPrerequisites`

- **Type:** Union
- **Cases:** <a href="#ProfessionPrerequisites'Plain">ProfessionPrerequisites'Plain</a>

---

### <a name="ProfessionPrerequisites'Plain"></a> `ProfessionPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#ProfessionPrerequisites'Plain/plain">See details</a>

#### <a name="ProfessionPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ProfessionPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites'Plain/plain[]">ProfessionPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="ProfessionPrerequisites'Plain/plain[]"></a> `ProfessionPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#ProfessionPrerequisites'Plain/plain[]'ProfessionPrerequisiteGroup">ProfessionPrerequisites'Plain/plain[]'ProfessionPrerequisiteGroup</a> | <a href="#ProfessionPrerequisites'Plain/plain[]'Group">ProfessionPrerequisites'Plain/plain[]'Group</a>

---

### <a name="ProfessionPrerequisites'Plain/plain[]'ProfessionPrerequisiteGroup"></a> `ProfessionPrerequisites'Plain/plain[]'ProfessionPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites'Plain/plain[]'Group"></a> `ProfessionPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#ProfessionPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="ProfessionPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ProfessionPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#ProfessionPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="ProfessionPrerequisites'Plain/plain[]'Group/group"></a> `ProfessionPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#ProfessionPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="ProfessionPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites'Plain/plain[]'Group/group/list[]">ProfessionPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ProfessionPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionPrerequisites'Plain/plain[]'Group/group/translations[key]">ProfessionPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProfessionPrerequisites'Plain/plain[]'Group/group/list[]"></a> `ProfessionPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `ProfessionPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

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
`plain` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]">AdvantageDisadvantagePrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisites'Plain/plain[]'AdvantageDisadvantagePrerequisiteGroup</a> | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group">AdvantageDisadvantagePrerequisites'Plain/plain[]'Group</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'AdvantageDisadvantagePrerequisiteGroup"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'AdvantageDisadvantagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/list[]">AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/translations[key]">AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/list[]"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel"></a> `AdvantageDisadvantagePrerequisites'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/tag">See details</a>
`by_level` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level"></a> `by_level`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/level">See details</a>
`prerequisites` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup</a> | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'AdvantageDisadvantagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group">Object</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ArcaneTraditionPrerequisites"></a> `ArcaneTraditionPrerequisites`

- **Type:** Union
- **Cases:** <a href="#ArcaneTraditionPrerequisites'Plain">ArcaneTraditionPrerequisites'Plain</a>

---

### <a name="ArcaneTraditionPrerequisites'Plain"></a> `ArcaneTraditionPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#ArcaneTraditionPrerequisites'Plain/plain">See details</a>

#### <a name="ArcaneTraditionPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ArcaneTraditionPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites'Plain/plain[]">ArcaneTraditionPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="ArcaneTraditionPrerequisites'Plain/plain[]"></a> `ArcaneTraditionPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisites'Plain/plain[]'ArcaneTraditionPrerequisiteGroup</a> | <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group">ArcaneTraditionPrerequisites'Plain/plain[]'Group</a>

---

### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'ArcaneTraditionPrerequisiteGroup"></a> `ArcaneTraditionPrerequisites'Plain/plain[]'ArcaneTraditionPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group"></a> `ArcaneTraditionPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/group"></a> `ArcaneTraditionPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/list[]">ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/translations[key]">ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/list[]"></a> `ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `ArcaneTraditionPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PersonalityTraitPrerequisites"></a> `PersonalityTraitPrerequisites`

- **Type:** Union
- **Cases:** <a href="#PersonalityTraitPrerequisites'Plain">PersonalityTraitPrerequisites'Plain</a>

---

### <a name="PersonalityTraitPrerequisites'Plain"></a> `PersonalityTraitPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#PersonalityTraitPrerequisites'Plain/plain">See details</a>

#### <a name="PersonalityTraitPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="PersonalityTraitPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites'Plain/plain[]">PersonalityTraitPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="PersonalityTraitPrerequisites'Plain/plain[]"></a> `PersonalityTraitPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#PersonalityTraitPrerequisites'Plain/plain[]'PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisites'Plain/plain[]'PersonalityTraitPrerequisiteGroup</a> | <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group">PersonalityTraitPrerequisites'Plain/plain[]'Group</a>

---

### <a name="PersonalityTraitPrerequisites'Plain/plain[]'PersonalityTraitPrerequisiteGroup"></a> `PersonalityTraitPrerequisites'Plain/plain[]'PersonalityTraitPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group"></a> `PersonalityTraitPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/group"></a> `PersonalityTraitPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/group/list[]">PersonalityTraitPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PersonalityTraitPrerequisites'Plain/plain[]'Group/group/translations[key]">PersonalityTraitPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/group/list[]"></a> `PersonalityTraitPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `PersonalityTraitPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="SpellworkPrerequisites"></a> `SpellworkPrerequisites`

- **Type:** Union
- **Cases:** <a href="#SpellworkPrerequisites'Plain">SpellworkPrerequisites'Plain</a>

---

### <a name="SpellworkPrerequisites'Plain"></a> `SpellworkPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#SpellworkPrerequisites'Plain/plain">See details</a>

#### <a name="SpellworkPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="SpellworkPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites'Plain/plain[]">SpellworkPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="SpellworkPrerequisites'Plain/plain[]"></a> `SpellworkPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#SpellworkPrerequisites'Plain/plain[]'SpellworkPrerequisiteGroup">SpellworkPrerequisites'Plain/plain[]'SpellworkPrerequisiteGroup</a> | <a href="#SpellworkPrerequisites'Plain/plain[]'Group">SpellworkPrerequisites'Plain/plain[]'Group</a>

---

### <a name="SpellworkPrerequisites'Plain/plain[]'SpellworkPrerequisiteGroup"></a> `SpellworkPrerequisites'Plain/plain[]'SpellworkPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites'Plain/plain[]'Group"></a> `SpellworkPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#SpellworkPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="SpellworkPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="SpellworkPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#SpellworkPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="SpellworkPrerequisites'Plain/plain[]'Group/group"></a> `SpellworkPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#SpellworkPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpellworkPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="SpellworkPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites'Plain/plain[]'Group/group/list[]">SpellworkPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="SpellworkPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SpellworkPrerequisites'Plain/plain[]'Group/group/translations[key]">SpellworkPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SpellworkPrerequisites'Plain/plain[]'Group/group/list[]"></a> `SpellworkPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `SpellworkPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="LiturgyPrerequisites"></a> `LiturgyPrerequisites`

- **Type:** Union
- **Cases:** <a href="#LiturgyPrerequisites'Plain">LiturgyPrerequisites'Plain</a>

---

### <a name="LiturgyPrerequisites'Plain"></a> `LiturgyPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#LiturgyPrerequisites'Plain/plain">See details</a>

#### <a name="LiturgyPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="LiturgyPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites'Plain/plain[]">LiturgyPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="LiturgyPrerequisites'Plain/plain[]"></a> `LiturgyPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#LiturgyPrerequisites'Plain/plain[]'LiturgyPrerequisiteGroup">LiturgyPrerequisites'Plain/plain[]'LiturgyPrerequisiteGroup</a> | <a href="#LiturgyPrerequisites'Plain/plain[]'Group">LiturgyPrerequisites'Plain/plain[]'Group</a>

---

### <a name="LiturgyPrerequisites'Plain/plain[]'LiturgyPrerequisiteGroup"></a> `LiturgyPrerequisites'Plain/plain[]'LiturgyPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites'Plain/plain[]'Group"></a> `LiturgyPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#LiturgyPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="LiturgyPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LiturgyPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#LiturgyPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="LiturgyPrerequisites'Plain/plain[]'Group/group"></a> `LiturgyPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LiturgyPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgyPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="LiturgyPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites'Plain/plain[]'Group/group/list[]">LiturgyPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LiturgyPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LiturgyPrerequisites'Plain/plain[]'Group/group/translations[key]">LiturgyPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LiturgyPrerequisites'Plain/plain[]'Group/group/list[]"></a> `LiturgyPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `LiturgyPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="InfluencePrerequisites"></a> `InfluencePrerequisites`

- **Type:** Union
- **Cases:** <a href="#InfluencePrerequisites'Plain">InfluencePrerequisites'Plain</a>

---

### <a name="InfluencePrerequisites'Plain"></a> `InfluencePrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#InfluencePrerequisites'Plain/plain">See details</a>

#### <a name="InfluencePrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="InfluencePrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites'Plain/plain[]">InfluencePrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="InfluencePrerequisites'Plain/plain[]"></a> `InfluencePrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#InfluencePrerequisites'Plain/plain[]'InfluencePrerequisiteGroup">InfluencePrerequisites'Plain/plain[]'InfluencePrerequisiteGroup</a> | <a href="#InfluencePrerequisites'Plain/plain[]'Group">InfluencePrerequisites'Plain/plain[]'Group</a>

---

### <a name="InfluencePrerequisites'Plain/plain[]'InfluencePrerequisiteGroup"></a> `InfluencePrerequisites'Plain/plain[]'InfluencePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites'Plain/plain[]'Group"></a> `InfluencePrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#InfluencePrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="InfluencePrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="InfluencePrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#InfluencePrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="InfluencePrerequisites'Plain/plain[]'Group/group"></a> `InfluencePrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#InfluencePrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InfluencePrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="InfluencePrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites'Plain/plain[]'Group/group/list[]">InfluencePrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="InfluencePrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#InfluencePrerequisites'Plain/plain[]'Group/group/translations[key]">InfluencePrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="InfluencePrerequisites'Plain/plain[]'Group/group/list[]"></a> `InfluencePrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `InfluencePrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

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
`plain` |  | <a href="#LanguagePrerequisites'Plain/plain">See details</a>

#### <a name="LanguagePrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="LanguagePrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'Plain/plain[]">LanguagePrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites'Plain/plain[]"></a> `LanguagePrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisites'Plain/plain[]'LanguagePrerequisiteGroup">LanguagePrerequisites'Plain/plain[]'LanguagePrerequisiteGroup</a> | <a href="#LanguagePrerequisites'Plain/plain[]'Group">LanguagePrerequisites'Plain/plain[]'Group</a>

---

### <a name="LanguagePrerequisites'Plain/plain[]'LanguagePrerequisiteGroup"></a> `LanguagePrerequisites'Plain/plain[]'LanguagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'Plain/plain[]'Group"></a> `LanguagePrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#LanguagePrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#LanguagePrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="LanguagePrerequisites'Plain/plain[]'Group/group"></a> `LanguagePrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LanguagePrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'Plain/plain[]'Group/group/list[]">LanguagePrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites'Plain/plain[]'Group/group/translations[key]">LanguagePrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites'Plain/plain[]'Group/group/list[]"></a> `LanguagePrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `LanguagePrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="LanguagePrerequisites'ByLevel"></a> `LanguagePrerequisites'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'ByLevel/tag">See details</a>
`by_level` |  | <a href="#LanguagePrerequisites'ByLevel/by_level">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="LanguagePrerequisites'ByLevel/by_level"></a> `by_level`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/by_level[]">LanguagePrerequisites'ByLevel/by_level[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]"></a> `LanguagePrerequisites'ByLevel/by_level[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/level">See details</a>
`prerequisites` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/level"></a> `level`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites"></a> `prerequisites`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]</a>
- **Minimum Items:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'LanguagePrerequisiteGroup">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'LanguagePrerequisiteGroup</a> | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group</a>

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'LanguagePrerequisiteGroup"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'LanguagePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag">See details</a>
`group` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group"></a> `group`

- **Type:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group">Object</a>

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="AnimistPowerPrerequisites"></a> `AnimistPowerPrerequisites`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPrerequisites'Plain">AnimistPowerPrerequisites'Plain</a>

---

### <a name="AnimistPowerPrerequisites'Plain"></a> `AnimistPowerPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#AnimistPowerPrerequisites'Plain/plain">See details</a>

#### <a name="AnimistPowerPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="AnimistPowerPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites'Plain/plain[]">AnimistPowerPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimistPowerPrerequisites'Plain/plain[]"></a> `AnimistPowerPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPrerequisites'Plain/plain[]'AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisites'Plain/plain[]'AnimistPowerPrerequisiteGroup</a> | <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group">AnimistPowerPrerequisites'Plain/plain[]'Group</a>

---

### <a name="AnimistPowerPrerequisites'Plain/plain[]'AnimistPowerPrerequisiteGroup"></a> `AnimistPowerPrerequisites'Plain/plain[]'AnimistPowerPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group"></a> `AnimistPowerPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/group"></a> `AnimistPowerPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/group/list[]">AnimistPowerPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimistPowerPrerequisites'Plain/plain[]'Group/group/translations[key]">AnimistPowerPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/group/list[]"></a> `AnimistPowerPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `AnimistPowerPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="GeodeRitualPrerequisites"></a> `GeodeRitualPrerequisites`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualPrerequisites'Plain">GeodeRitualPrerequisites'Plain</a>

---

### <a name="GeodeRitualPrerequisites'Plain"></a> `GeodeRitualPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#GeodeRitualPrerequisites'Plain/plain">See details</a>

#### <a name="GeodeRitualPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GeodeRitualPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites'Plain/plain[]">GeodeRitualPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="GeodeRitualPrerequisites'Plain/plain[]"></a> `GeodeRitualPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualPrerequisites'Plain/plain[]'GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisites'Plain/plain[]'GeodeRitualPrerequisiteGroup</a> | <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group">GeodeRitualPrerequisites'Plain/plain[]'Group</a>

---

### <a name="GeodeRitualPrerequisites'Plain/plain[]'GeodeRitualPrerequisiteGroup"></a> `GeodeRitualPrerequisites'Plain/plain[]'GeodeRitualPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group"></a> `GeodeRitualPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/group"></a> `GeodeRitualPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/group/list[]">GeodeRitualPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeodeRitualPrerequisites'Plain/plain[]'Group/group/translations[key]">GeodeRitualPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/group/list[]"></a> `GeodeRitualPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `GeodeRitualPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="EnhancementPrerequisites"></a> `EnhancementPrerequisites`

- **Type:** Union
- **Cases:** <a href="#EnhancementPrerequisites'Plain">EnhancementPrerequisites'Plain</a>

---

### <a name="EnhancementPrerequisites'Plain"></a> `EnhancementPrerequisites'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites'Plain/tag">See details</a>
`plain` |  | <a href="#EnhancementPrerequisites'Plain/plain">See details</a>

#### <a name="EnhancementPrerequisites'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="EnhancementPrerequisites'Plain/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites'Plain/plain[]">EnhancementPrerequisites'Plain/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="EnhancementPrerequisites'Plain/plain[]"></a> `EnhancementPrerequisites'Plain/plain[]`

- **Type:** Union
- **Cases:** <a href="#EnhancementPrerequisites'Plain/plain[]'EnhancementPrerequisiteGroup">EnhancementPrerequisites'Plain/plain[]'EnhancementPrerequisiteGroup</a> | <a href="#EnhancementPrerequisites'Plain/plain[]'Group">EnhancementPrerequisites'Plain/plain[]'Group</a>

---

### <a name="EnhancementPrerequisites'Plain/plain[]'EnhancementPrerequisiteGroup"></a> `EnhancementPrerequisites'Plain/plain[]'EnhancementPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites'Plain/plain[]'Group"></a> `EnhancementPrerequisites'Plain/plain[]'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites'Plain/plain[]'Group/tag">See details</a>
`group` |  | <a href="#EnhancementPrerequisites'Plain/plain[]'Group/group">See details</a>

#### <a name="EnhancementPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="EnhancementPrerequisites'Plain/plain[]'Group/group"></a> `group`

- **Type:** <a href="#EnhancementPrerequisites'Plain/plain[]'Group/group">Object</a>

---

### <a name="EnhancementPrerequisites'Plain/plain[]'Group/group"></a> `EnhancementPrerequisites'Plain/plain[]'Group/group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#EnhancementPrerequisites'Plain/plain[]'Group/group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EnhancementPrerequisites'Plain/plain[]'Group/group/translations">See details</a>

#### <a name="EnhancementPrerequisites'Plain/plain[]'Group/group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites'Plain/plain[]'Group/group/list[]">EnhancementPrerequisites'Plain/plain[]'Group/group/list[]</a>
- **Minimum Items:** `2`

#### <a name="EnhancementPrerequisites'Plain/plain[]'Group/group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EnhancementPrerequisites'Plain/plain[]'Group/group/translations[key]">EnhancementPrerequisites'Plain/plain[]'Group/group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EnhancementPrerequisites'Plain/plain[]'Group/group/list[]"></a> `EnhancementPrerequisites'Plain/plain[]'Group/group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites'Plain/plain[]'Group/group/translations[key]"></a> `EnhancementPrerequisites'Plain/plain[]'Group/group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
