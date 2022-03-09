# Pact Gift

## Definitions

### <a name="PactGift"></a> Pact Gift (`PactGift`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#PactGift/id">See details</a>
`levels?` |  | <a href="#PactGift/levels">See details</a>
`maximum?` |  | <a href="#PactGift/maximum">See details</a>
`permanent_demonic_consumption?` |  | <a href="#PactGift/permanent_demonic_consumption">See details</a>
`automatic_entries?` | This pact gift has direct influence on the existence of other entries. It may add or remove entries. | <a href="#PactGift/automatic_entries">See details</a>
`ap_value` |  | <a href="#PactGift/ap_value">See details</a>
`src` |  | <a href="#PactGift/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactGift/translations">See details</a>

#### <a name="PactGift/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="PactGift/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="PactGift/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="PactGift/permanent_demonic_consumption"></a> `permanent_demonic_consumption?`

- **Type:** Union
- **Cases:** <a href="#PactGift/permanent_demonic_consumption'Fixed">PactGift/permanent_demonic_consumption'Fixed</a> | <a href="#PactGift/permanent_demonic_consumption'PerLevel">PactGift/permanent_demonic_consumption'PerLevel</a>

#### <a name="PactGift/automatic_entries"></a> `automatic_entries?`

This pact gift has direct influence on the existence of other entries. It
may add or remove entries.

- **Type:** List
- **Items:** <a href="#PactGift/automatic_entries[]">PactGift/automatic_entries[]</a>
- **Minimum Items:** `1`

#### <a name="PactGift/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="PactGift/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="PactGift/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PactGift/translations[key]">PactGift/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PactGift/permanent_demonic_consumption'Fixed"></a> `PactGift/permanent_demonic_consumption'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/permanent_demonic_consumption'Fixed/tag">See details</a>
`levels` | The levels of *Demonic Consumption* the pact gift causes. | <a href="#PactGift/permanent_demonic_consumption'Fixed/levels">See details</a>

#### <a name="PactGift/permanent_demonic_consumption'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PactGift/permanent_demonic_consumption'Fixed/levels"></a> `levels`

The levels of *Demonic Consumption* the pact gift causes.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

---

### <a name="PactGift/permanent_demonic_consumption'PerLevel"></a> `PactGift/permanent_demonic_consumption'PerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/permanent_demonic_consumption'PerLevel/tag">See details</a>
`levels` | The levels of *Demonic Consumption* the pact gift causes per activated level of the pact gift. | <a href="#PactGift/permanent_demonic_consumption'PerLevel/levels">See details</a>

#### <a name="PactGift/permanent_demonic_consumption'PerLevel/tag"></a> `tag`

- **Constant:** `"PerLevel"`

#### <a name="PactGift/permanent_demonic_consumption'PerLevel/levels"></a> `levels`

The levels of *Demonic Consumption* the pact gift causes per activated
level of the pact gift.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

---

### <a name="PactGift/automatic_entries[]"></a> `PactGift/automatic_entries[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`action` | What type of action is applied to the target entry? | <a href="#PactGift/automatic_entries[]/action">See details</a>
`apply_ap_value` | If an entry is added or removed, does is cost or grant adventure points or is it free of charge? | <a href="#PactGift/automatic_entries[]/apply_ap_value">See details</a>
`target` | The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry. | <a href="#PactGift/automatic_entries[]/target">See details</a>

#### <a name="PactGift/automatic_entries[]/action"></a> `action`

What type of action is applied to the target entry?

- **Type:** Union
- **Cases:** <a href="#PactGift/automatic_entries[]/action'Add">PactGift/automatic_entries[]/action'Add</a> | <a href="#PactGift/automatic_entries[]/action'Remove">PactGift/automatic_entries[]/action'Remove</a>

#### <a name="PactGift/automatic_entries[]/apply_ap_value"></a> `apply_ap_value`

If an entry is added or removed, does is cost or grant adventure points
or is it free of charge?

- **Type:** Boolean

#### <a name="PactGift/automatic_entries[]/target"></a> `target`

The entry that is to be added or removed. It can be a fixed entry or a
selection where the player must choose one entry.

- **Type:** Union
- **Cases:** <a href="#PactGift/automatic_entries[]/target'Selection">PactGift/automatic_entries[]/target'Selection</a> | <a href="#PactGift/automatic_entries[]/target'Fixed">PactGift/automatic_entries[]/target'Fixed</a>

---

### <a name="PactGift/automatic_entries[]/action'Add"></a> `PactGift/automatic_entries[]/action'Add`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/automatic_entries[]/action'Add/tag">See details</a>

#### <a name="PactGift/automatic_entries[]/action'Add/tag"></a> `tag`

- **Constant:** `"Add"`

---

### <a name="PactGift/automatic_entries[]/action'Remove"></a> `PactGift/automatic_entries[]/action'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/automatic_entries[]/action'Remove/tag">See details</a>

#### <a name="PactGift/automatic_entries[]/action'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="PactGift/automatic_entries[]/target'Selection"></a> `PactGift/automatic_entries[]/target'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/automatic_entries[]/target'Selection/tag">See details</a>
`list` |  | <a href="#PactGift/automatic_entries[]/target'Selection/list">See details</a>

#### <a name="PactGift/automatic_entries[]/target'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="PactGift/automatic_entries[]/target'Selection/list"></a> `list`

- **Type:** Union
- **Cases:** <a href="#PactGift/automatic_entries[]/target'Selection/list'MagicalTraditions">PactGift/automatic_entries[]/target'Selection/list'MagicalTraditions</a> | <a href="#PactGift/automatic_entries[]/target'Selection/list'MagicalDilettanteTraditions">PactGift/automatic_entries[]/target'Selection/list'MagicalDilettanteTraditions</a>

---

### <a name="PactGift/automatic_entries[]/target'Selection/list'MagicalTraditions"></a> `PactGift/automatic_entries[]/target'Selection/list'MagicalTraditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/automatic_entries[]/target'Selection/list'MagicalTraditions/tag">See details</a>

#### <a name="PactGift/automatic_entries[]/target'Selection/list'MagicalTraditions/tag"></a> `tag`

- **Constant:** `"MagicalTraditions"`

---

### <a name="PactGift/automatic_entries[]/target'Selection/list'MagicalDilettanteTraditions"></a> `PactGift/automatic_entries[]/target'Selection/list'MagicalDilettanteTraditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/automatic_entries[]/target'Selection/list'MagicalDilettanteTraditions/tag">See details</a>

#### <a name="PactGift/automatic_entries[]/target'Selection/list'MagicalDilettanteTraditions/tag"></a> `tag`

- **Constant:** `"MagicalDilettanteTraditions"`

---

### <a name="PactGift/automatic_entries[]/target'Fixed"></a> `PactGift/automatic_entries[]/target'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGift/automatic_entries[]/target'Fixed/tag">See details</a>
`id` |  | <a href="#PactGift/automatic_entries[]/target'Fixed/id">See details</a>

#### <a name="PactGift/automatic_entries[]/target'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PactGift/automatic_entries[]/target'Fixed/id"></a> `id`

- **Type:** <a href="../_Identifier.md#Identifier/Group/Activatable">Identifier/Group/Activatable</a>

---

### <a name="PactGift/translations[key]"></a> `PactGift/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#PactGift/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#PactGift/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#PactGift/translations[key]/effect">See details</a>
`errata?` |  | <a href="#PactGift/translations[key]/errata">See details</a>

#### <a name="PactGift/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="PactGift/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="PactGift/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="PactGift/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
