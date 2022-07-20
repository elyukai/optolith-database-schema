# Prerequisites

## Definitions

### <a name="DerivedCharacteristicPrerequisites"></a> `DerivedCharacteristicPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites/tag">See details</a>
`plain` |  | <a href="#DerivedCharacteristicPrerequisites/plain">See details</a>

#### <a name="DerivedCharacteristicPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="DerivedCharacteristicPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites/plain[]">DerivedCharacteristicPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="DerivedCharacteristicPrerequisites/plain[]"></a> `DerivedCharacteristicPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#DerivedCharacteristicPrerequisites/plain[]'DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisites/plain[]'DerivedCharacteristicPrerequisiteGroup</a> | <a href="#DerivedCharacteristicPrerequisites/plain[]'Group">DerivedCharacteristicPrerequisites/plain[]'Group</a>

---

### <a name="DerivedCharacteristicPrerequisites/plain[]'DerivedCharacteristicPrerequisiteGroup"></a> `DerivedCharacteristicPrerequisites/plain[]'DerivedCharacteristicPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites/plain[]'Group"></a> `DerivedCharacteristicPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#DerivedCharacteristicPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DerivedCharacteristicPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="DerivedCharacteristicPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="DerivedCharacteristicPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#DerivedCharacteristicPrerequisites/plain[]'Group/list[]">DerivedCharacteristicPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="DerivedCharacteristicPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DerivedCharacteristicPrerequisites/plain[]'Group/translations[key]">DerivedCharacteristicPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DerivedCharacteristicPrerequisites/plain[]'Group/list[]"></a> `DerivedCharacteristicPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#DerivedCharacteristicPrerequisiteGroup">DerivedCharacteristicPrerequisiteGroup</a>

---

### <a name="DerivedCharacteristicPrerequisites/plain[]'Group/translations[key]"></a> `DerivedCharacteristicPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PublicationPrerequisites"></a> `PublicationPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites/tag">See details</a>
`plain` |  | <a href="#PublicationPrerequisites/plain">See details</a>

#### <a name="PublicationPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="PublicationPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites/plain[]">PublicationPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="PublicationPrerequisites/plain[]"></a> `PublicationPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#PublicationPrerequisites/plain[]'PublicationPrerequisiteGroup">PublicationPrerequisites/plain[]'PublicationPrerequisiteGroup</a> | <a href="#PublicationPrerequisites/plain[]'Group">PublicationPrerequisites/plain[]'Group</a>

---

### <a name="PublicationPrerequisites/plain[]'PublicationPrerequisiteGroup"></a> `PublicationPrerequisites/plain[]'PublicationPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites/plain[]'Group"></a> `PublicationPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#PublicationPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PublicationPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="PublicationPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PublicationPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PublicationPrerequisites/plain[]'Group/list[]">PublicationPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PublicationPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PublicationPrerequisites/plain[]'Group/translations[key]">PublicationPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PublicationPrerequisites/plain[]'Group/list[]"></a> `PublicationPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PublicationPrerequisiteGroup">PublicationPrerequisiteGroup</a>

---

### <a name="PublicationPrerequisites/plain[]'Group/translations[key]"></a> `PublicationPrerequisites/plain[]'Group/translations[key]`

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

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'Plain/plain[]'Group/tag">See details</a>
`list` |  | <a href="#GeneralPrerequisites'Plain/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites'Plain/plain[]'Group/translations">See details</a>

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'Plain/plain[]'Group/list[]">GeneralPrerequisites'Plain/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites'Plain/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites'Plain/plain[]'Group/translations[key]">GeneralPrerequisites'Plain/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites'Plain/plain[]'Group/list[]"></a> `GeneralPrerequisites'Plain/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'Plain/plain[]'Group/translations[key]"></a> `GeneralPrerequisites'Plain/plain[]'Group/translations[key]`

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

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag">See details</a>
`list` |  | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations">See details</a>

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]">GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeneralPrerequisiteGroup">GeneralPrerequisiteGroup</a>

---

### <a name="GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]"></a> `GeneralPrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ProfessionPrerequisites"></a> `ProfessionPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites/tag">See details</a>
`plain` |  | <a href="#ProfessionPrerequisites/plain">See details</a>

#### <a name="ProfessionPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ProfessionPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites/plain[]">ProfessionPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="ProfessionPrerequisites/plain[]"></a> `ProfessionPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#ProfessionPrerequisites/plain[]'ProfessionPrerequisiteGroup">ProfessionPrerequisites/plain[]'ProfessionPrerequisiteGroup</a> | <a href="#ProfessionPrerequisites/plain[]'Group">ProfessionPrerequisites/plain[]'Group</a>

---

### <a name="ProfessionPrerequisites/plain[]'ProfessionPrerequisiteGroup"></a> `ProfessionPrerequisites/plain[]'ProfessionPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites/plain[]'Group"></a> `ProfessionPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#ProfessionPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="ProfessionPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ProfessionPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionPrerequisites/plain[]'Group/list[]">ProfessionPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ProfessionPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionPrerequisites/plain[]'Group/translations[key]">ProfessionPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProfessionPrerequisites/plain[]'Group/list[]"></a> `ProfessionPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ProfessionPrerequisiteGroup">ProfessionPrerequisiteGroup</a>

---

### <a name="ProfessionPrerequisites/plain[]'Group/translations[key]"></a> `ProfessionPrerequisites/plain[]'Group/translations[key]`

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

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/tag">See details</a>
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/list[]">AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/translations[key]">AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/list[]"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/translations[key]"></a> `AdvantageDisadvantagePrerequisites'Plain/plain[]'Group/translations[key]`

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

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag">See details</a>
`list` |  | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations">See details</a>

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]">AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AdvantageDisadvantagePrerequisiteGroup">AdvantageDisadvantagePrerequisiteGroup</a>

---

### <a name="AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]"></a> `AdvantageDisadvantagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ArcaneTraditionPrerequisites"></a> `ArcaneTraditionPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites/tag">See details</a>
`plain` |  | <a href="#ArcaneTraditionPrerequisites/plain">See details</a>

#### <a name="ArcaneTraditionPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ArcaneTraditionPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites/plain[]">ArcaneTraditionPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="ArcaneTraditionPrerequisites/plain[]"></a> `ArcaneTraditionPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#ArcaneTraditionPrerequisites/plain[]'ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisites/plain[]'ArcaneTraditionPrerequisiteGroup</a> | <a href="#ArcaneTraditionPrerequisites/plain[]'Group">ArcaneTraditionPrerequisites/plain[]'Group</a>

---

### <a name="ArcaneTraditionPrerequisites/plain[]'ArcaneTraditionPrerequisiteGroup"></a> `ArcaneTraditionPrerequisites/plain[]'ArcaneTraditionPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites/plain[]'Group"></a> `ArcaneTraditionPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#ArcaneTraditionPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneTraditionPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="ArcaneTraditionPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="ArcaneTraditionPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ArcaneTraditionPrerequisites/plain[]'Group/list[]">ArcaneTraditionPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="ArcaneTraditionPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneTraditionPrerequisites/plain[]'Group/translations[key]">ArcaneTraditionPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneTraditionPrerequisites/plain[]'Group/list[]"></a> `ArcaneTraditionPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#ArcaneTraditionPrerequisiteGroup">ArcaneTraditionPrerequisiteGroup</a>

---

### <a name="ArcaneTraditionPrerequisites/plain[]'Group/translations[key]"></a> `ArcaneTraditionPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PersonalityTraitPrerequisites"></a> `PersonalityTraitPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites/tag">See details</a>
`plain` |  | <a href="#PersonalityTraitPrerequisites/plain">See details</a>

#### <a name="PersonalityTraitPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="PersonalityTraitPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites/plain[]">PersonalityTraitPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="PersonalityTraitPrerequisites/plain[]"></a> `PersonalityTraitPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#PersonalityTraitPrerequisites/plain[]'PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisites/plain[]'PersonalityTraitPrerequisiteGroup</a> | <a href="#PersonalityTraitPrerequisites/plain[]'Group">PersonalityTraitPrerequisites/plain[]'Group</a>

---

### <a name="PersonalityTraitPrerequisites/plain[]'PersonalityTraitPrerequisiteGroup"></a> `PersonalityTraitPrerequisites/plain[]'PersonalityTraitPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites/plain[]'Group"></a> `PersonalityTraitPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#PersonalityTraitPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PersonalityTraitPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="PersonalityTraitPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="PersonalityTraitPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#PersonalityTraitPrerequisites/plain[]'Group/list[]">PersonalityTraitPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="PersonalityTraitPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PersonalityTraitPrerequisites/plain[]'Group/translations[key]">PersonalityTraitPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PersonalityTraitPrerequisites/plain[]'Group/list[]"></a> `PersonalityTraitPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#PersonalityTraitPrerequisiteGroup">PersonalityTraitPrerequisiteGroup</a>

---

### <a name="PersonalityTraitPrerequisites/plain[]'Group/translations[key]"></a> `PersonalityTraitPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="SpellworkPrerequisites"></a> `SpellworkPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites/tag">See details</a>
`plain` |  | <a href="#SpellworkPrerequisites/plain">See details</a>

#### <a name="SpellworkPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="SpellworkPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites/plain[]">SpellworkPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="SpellworkPrerequisites/plain[]"></a> `SpellworkPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#SpellworkPrerequisites/plain[]'SpellworkPrerequisiteGroup">SpellworkPrerequisites/plain[]'SpellworkPrerequisiteGroup</a> | <a href="#SpellworkPrerequisites/plain[]'Group">SpellworkPrerequisites/plain[]'Group</a>

---

### <a name="SpellworkPrerequisites/plain[]'SpellworkPrerequisiteGroup"></a> `SpellworkPrerequisites/plain[]'SpellworkPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites/plain[]'Group"></a> `SpellworkPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#SpellworkPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpellworkPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="SpellworkPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="SpellworkPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpellworkPrerequisites/plain[]'Group/list[]">SpellworkPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="SpellworkPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SpellworkPrerequisites/plain[]'Group/translations[key]">SpellworkPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SpellworkPrerequisites/plain[]'Group/list[]"></a> `SpellworkPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#SpellworkPrerequisiteGroup">SpellworkPrerequisiteGroup</a>

---

### <a name="SpellworkPrerequisites/plain[]'Group/translations[key]"></a> `SpellworkPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="LiturgyPrerequisites"></a> `LiturgyPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites/tag">See details</a>
`plain` |  | <a href="#LiturgyPrerequisites/plain">See details</a>

#### <a name="LiturgyPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="LiturgyPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites/plain[]">LiturgyPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="LiturgyPrerequisites/plain[]"></a> `LiturgyPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#LiturgyPrerequisites/plain[]'LiturgyPrerequisiteGroup">LiturgyPrerequisites/plain[]'LiturgyPrerequisiteGroup</a> | <a href="#LiturgyPrerequisites/plain[]'Group">LiturgyPrerequisites/plain[]'Group</a>

---

### <a name="LiturgyPrerequisites/plain[]'LiturgyPrerequisiteGroup"></a> `LiturgyPrerequisites/plain[]'LiturgyPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites/plain[]'Group"></a> `LiturgyPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#LiturgyPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgyPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="LiturgyPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LiturgyPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LiturgyPrerequisites/plain[]'Group/list[]">LiturgyPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LiturgyPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LiturgyPrerequisites/plain[]'Group/translations[key]">LiturgyPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LiturgyPrerequisites/plain[]'Group/list[]"></a> `LiturgyPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LiturgyPrerequisiteGroup">LiturgyPrerequisiteGroup</a>

---

### <a name="LiturgyPrerequisites/plain[]'Group/translations[key]"></a> `LiturgyPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="InfluencePrerequisites"></a> `InfluencePrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites/tag">See details</a>
`plain` |  | <a href="#InfluencePrerequisites/plain">See details</a>

#### <a name="InfluencePrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="InfluencePrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites/plain[]">InfluencePrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="InfluencePrerequisites/plain[]"></a> `InfluencePrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#InfluencePrerequisites/plain[]'InfluencePrerequisiteGroup">InfluencePrerequisites/plain[]'InfluencePrerequisiteGroup</a> | <a href="#InfluencePrerequisites/plain[]'Group">InfluencePrerequisites/plain[]'Group</a>

---

### <a name="InfluencePrerequisites/plain[]'InfluencePrerequisiteGroup"></a> `InfluencePrerequisites/plain[]'InfluencePrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites/plain[]'Group"></a> `InfluencePrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#InfluencePrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InfluencePrerequisites/plain[]'Group/translations">See details</a>

#### <a name="InfluencePrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="InfluencePrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#InfluencePrerequisites/plain[]'Group/list[]">InfluencePrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="InfluencePrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#InfluencePrerequisites/plain[]'Group/translations[key]">InfluencePrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="InfluencePrerequisites/plain[]'Group/list[]"></a> `InfluencePrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#InfluencePrerequisiteGroup">InfluencePrerequisiteGroup</a>

---

### <a name="InfluencePrerequisites/plain[]'Group/translations[key]"></a> `InfluencePrerequisites/plain[]'Group/translations[key]`

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

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'Plain/plain[]'Group/tag">See details</a>
`list` |  | <a href="#LanguagePrerequisites'Plain/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites'Plain/plain[]'Group/translations">See details</a>

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'Plain/plain[]'Group/list[]">LanguagePrerequisites'Plain/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites'Plain/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites'Plain/plain[]'Group/translations[key]">LanguagePrerequisites'Plain/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites'Plain/plain[]'Group/list[]"></a> `LanguagePrerequisites'Plain/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'Plain/plain[]'Group/translations[key]"></a> `LanguagePrerequisites'Plain/plain[]'Group/translations[key]`

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

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag">See details</a>
`list` |  | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations">See details</a>

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]">LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#LanguagePrerequisiteGroup">LanguagePrerequisiteGroup</a>

---

### <a name="LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]"></a> `LanguagePrerequisites'ByLevel/by_level[]/prerequisites[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="AnimistPowerPrerequisites"></a> `AnimistPowerPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites/tag">See details</a>
`plain` |  | <a href="#AnimistPowerPrerequisites/plain">See details</a>

#### <a name="AnimistPowerPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="AnimistPowerPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites/plain[]">AnimistPowerPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimistPowerPrerequisites/plain[]"></a> `AnimistPowerPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPrerequisites/plain[]'AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisites/plain[]'AnimistPowerPrerequisiteGroup</a> | <a href="#AnimistPowerPrerequisites/plain[]'Group">AnimistPowerPrerequisites/plain[]'Group</a>

---

### <a name="AnimistPowerPrerequisites/plain[]'AnimistPowerPrerequisiteGroup"></a> `AnimistPowerPrerequisites/plain[]'AnimistPowerPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites/plain[]'Group"></a> `AnimistPowerPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#AnimistPowerPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPowerPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="AnimistPowerPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="AnimistPowerPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#AnimistPowerPrerequisites/plain[]'Group/list[]">AnimistPowerPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="AnimistPowerPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimistPowerPrerequisites/plain[]'Group/translations[key]">AnimistPowerPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimistPowerPrerequisites/plain[]'Group/list[]"></a> `AnimistPowerPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#AnimistPowerPrerequisiteGroup">AnimistPowerPrerequisiteGroup</a>

---

### <a name="AnimistPowerPrerequisites/plain[]'Group/translations[key]"></a> `AnimistPowerPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="GeodeRitualPrerequisites"></a> `GeodeRitualPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites/tag">See details</a>
`plain` |  | <a href="#GeodeRitualPrerequisites/plain">See details</a>

#### <a name="GeodeRitualPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="GeodeRitualPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites/plain[]">GeodeRitualPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="GeodeRitualPrerequisites/plain[]"></a> `GeodeRitualPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualPrerequisites/plain[]'GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisites/plain[]'GeodeRitualPrerequisiteGroup</a> | <a href="#GeodeRitualPrerequisites/plain[]'Group">GeodeRitualPrerequisites/plain[]'Group</a>

---

### <a name="GeodeRitualPrerequisites/plain[]'GeodeRitualPrerequisiteGroup"></a> `GeodeRitualPrerequisites/plain[]'GeodeRitualPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites/plain[]'Group"></a> `GeodeRitualPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#GeodeRitualPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeodeRitualPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="GeodeRitualPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="GeodeRitualPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#GeodeRitualPrerequisites/plain[]'Group/list[]">GeodeRitualPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="GeodeRitualPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeodeRitualPrerequisites/plain[]'Group/translations[key]">GeodeRitualPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeodeRitualPrerequisites/plain[]'Group/list[]"></a> `GeodeRitualPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#GeodeRitualPrerequisiteGroup">GeodeRitualPrerequisiteGroup</a>

---

### <a name="GeodeRitualPrerequisites/plain[]'Group/translations[key]"></a> `GeodeRitualPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="EnhancementPrerequisites"></a> `EnhancementPrerequisites`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites/tag">See details</a>
`plain` |  | <a href="#EnhancementPrerequisites/plain">See details</a>

#### <a name="EnhancementPrerequisites/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="EnhancementPrerequisites/plain"></a> `plain`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites/plain[]">EnhancementPrerequisites/plain[]</a>
- **Minimum Items:** `1`

---

### <a name="EnhancementPrerequisites/plain[]"></a> `EnhancementPrerequisites/plain[]`

- **Type:** Union
- **Cases:** <a href="#EnhancementPrerequisites/plain[]'EnhancementPrerequisiteGroup">EnhancementPrerequisites/plain[]'EnhancementPrerequisiteGroup</a> | <a href="#EnhancementPrerequisites/plain[]'Group">EnhancementPrerequisites/plain[]'Group</a>

---

### <a name="EnhancementPrerequisites/plain[]'EnhancementPrerequisiteGroup"></a> `EnhancementPrerequisites/plain[]'EnhancementPrerequisiteGroup`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites/plain[]'Group"></a> `EnhancementPrerequisites/plain[]'Group`

A prerequisite group has no influence on validation logic. It serves as a
single unit for displaying purposes, where the source uses a prerequisites
item that cannot be represented as a single prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisites/plain[]'Group/tag">See details</a>
`list` |  | <a href="#EnhancementPrerequisites/plain[]'Group/list">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EnhancementPrerequisites/plain[]'Group/translations">See details</a>

#### <a name="EnhancementPrerequisites/plain[]'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="EnhancementPrerequisites/plain[]'Group/list"></a> `list`

- **Type:** List
- **Items:** <a href="#EnhancementPrerequisites/plain[]'Group/list[]">EnhancementPrerequisites/plain[]'Group/list[]</a>
- **Minimum Items:** `2`

#### <a name="EnhancementPrerequisites/plain[]'Group/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EnhancementPrerequisites/plain[]'Group/translations[key]">EnhancementPrerequisites/plain[]'Group/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EnhancementPrerequisites/plain[]'Group/list[]"></a> `EnhancementPrerequisites/plain[]'Group/list[]`

- **Type:** <a href="./prerequisites/PrerequisiteGroups.md#EnhancementPrerequisiteGroup">EnhancementPrerequisiteGroup</a>

---

### <a name="EnhancementPrerequisites/plain[]'Group/translations[key]"></a> `EnhancementPrerequisites/plain[]'Group/translations[key]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
