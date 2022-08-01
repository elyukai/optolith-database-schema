# Pact Gift

## Definitions

### <a name="PactGift"></a> Pact Gift (`PactGift`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#PactGift/id">See details</a>
`levels?` |  | <a href="#PactGift/levels">See details</a>
`select_options?` |  | <a href="#PactGift/select_options">See details</a>
`maximum?` |  | <a href="#PactGift/maximum">See details</a>
`permanent_demonic_consumption?` |  | <a href="#PactGift/permanent_demonic_consumption">See details</a>
`automatic_entries?` | This pact gift has direct influence on the existence of other entries. It may add or remove entries. | <a href="#PactGift/automatic_entries">See details</a>
`prerequisites?` |  | <a href="#PactGift/prerequisites">See details</a>
`ap_value` |  | <a href="#PactGift/ap_value">See details</a>
`src` |  | <a href="#PactGift/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactGift/translations">See details</a>

#### <a name="PactGift/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="PactGift/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="PactGift/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="PactGift/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="PactGift/permanent_demonic_consumption"></a> `permanent_demonic_consumption?`

- **Type:** <a href="#PactGiftPermanentDemonicConsumption">PactGiftPermanentDemonicConsumption</a>

#### <a name="PactGift/automatic_entries"></a> `automatic_entries?`

This pact gift has direct influence on the existence of other entries. It
may add or remove entries.

- **Type:** List
- **Items:** <a href="#PactGift/automatic_entries[]">PactGift/automatic_entries[]</a>
- **Minimum Items:** `1`

#### <a name="PactGift/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

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

### <a name="PactGift/automatic_entries[]"></a> `PactGift/automatic_entries[]`

- **Type:** <a href="#AutomaticEntry">AutomaticEntry</a>

---

### <a name="PactGift/translations[key]"></a> `PactGift/translations[key]`

- **Type:** <a href="#PactGiftTranslation">PactGiftTranslation</a>

---

### <a name="PactGiftPermanentDemonicConsumption"></a> `PactGiftPermanentDemonicConsumption`

- **Type:** Union
- **Cases:** <a href="#PactGiftPermanentDemonicConsumption'Fixed">PactGiftPermanentDemonicConsumption'Fixed</a> | <a href="#PactGiftPermanentDemonicConsumption'PerLevel">PactGiftPermanentDemonicConsumption'PerLevel</a>

---

### <a name="PactGiftPermanentDemonicConsumption'Fixed"></a> `PactGiftPermanentDemonicConsumption'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGiftPermanentDemonicConsumption'Fixed/tag">See details</a>
`fixed` |  | <a href="#PactGiftPermanentDemonicConsumption'Fixed/fixed">See details</a>

#### <a name="PactGiftPermanentDemonicConsumption'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PactGiftPermanentDemonicConsumption'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedPactGiftPermanentDemonicConsumption">FixedPactGiftPermanentDemonicConsumption</a>

---

### <a name="PactGiftPermanentDemonicConsumption'PerLevel"></a> `PactGiftPermanentDemonicConsumption'PerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PactGiftPermanentDemonicConsumption'PerLevel/tag">See details</a>
`per_level` |  | <a href="#PactGiftPermanentDemonicConsumption'PerLevel/per_level">See details</a>

#### <a name="PactGiftPermanentDemonicConsumption'PerLevel/tag"></a> `tag`

- **Constant:** `"PerLevel"`

#### <a name="PactGiftPermanentDemonicConsumption'PerLevel/per_level"></a> `per_level`

- **Type:** <a href="#PactGiftPermanentDemonicConsumptionPerLevel">PactGiftPermanentDemonicConsumptionPerLevel</a>

---

### <a name="FixedPactGiftPermanentDemonicConsumption"></a> `FixedPactGiftPermanentDemonicConsumption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`levels` | The levels of *Demonic Consumption* the pact gift causes. | <a href="#FixedPactGiftPermanentDemonicConsumption/levels">See details</a>

#### <a name="FixedPactGiftPermanentDemonicConsumption/levels"></a> `levels`

The levels of *Demonic Consumption* the pact gift causes.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

---

### <a name="PactGiftPermanentDemonicConsumptionPerLevel"></a> `PactGiftPermanentDemonicConsumptionPerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`levels` | The levels of *Demonic Consumption* the pact gift causes per activated level of the pact gift. | <a href="#PactGiftPermanentDemonicConsumptionPerLevel/levels">See details</a>

#### <a name="PactGiftPermanentDemonicConsumptionPerLevel/levels"></a> `levels`

The levels of *Demonic Consumption* the pact gift causes per activated
level of the pact gift.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

---

### <a name="AutomaticEntry"></a> `AutomaticEntry`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`action` | What type of action is applied to the target entry? | <a href="#AutomaticEntry/action">See details</a>
`apply_ap_value` | If an entry is added or removed, does is cost or grant adventure points or is it free of charge? | <a href="#AutomaticEntry/apply_ap_value">See details</a>
`target` | The entry that is to be added or removed. It can be a fixed entry or a selection where the player must choose one entry. | <a href="#AutomaticEntry/target">See details</a>

#### <a name="AutomaticEntry/action"></a> `action`

What type of action is applied to the target entry?

- **Type:** <a href="#AutomaticEntryAction">AutomaticEntryAction</a>

#### <a name="AutomaticEntry/apply_ap_value"></a> `apply_ap_value`

If an entry is added or removed, does is cost or grant adventure points
or is it free of charge?

- **Type:** Boolean

#### <a name="AutomaticEntry/target"></a> `target`

The entry that is to be added or removed. It can be a fixed entry or a
selection where the player must choose one entry.

- **Type:** <a href="#AutomaticEntryTarget">AutomaticEntryTarget</a>

---

### <a name="AutomaticEntryAction"></a> `AutomaticEntryAction`

- **Possible values:** `"Add"`, `"Remove"`

---

### <a name="AutomaticEntryTarget"></a> `AutomaticEntryTarget`

- **Type:** Union
- **Cases:** <a href="#AutomaticEntryTarget'Selection">AutomaticEntryTarget'Selection</a> | <a href="#AutomaticEntryTarget'Fixed">AutomaticEntryTarget'Fixed</a>

---

### <a name="AutomaticEntryTarget'Selection"></a> `AutomaticEntryTarget'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AutomaticEntryTarget'Selection/tag">See details</a>
`selection` |  | <a href="#AutomaticEntryTarget'Selection/selection">See details</a>

#### <a name="AutomaticEntryTarget'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="AutomaticEntryTarget'Selection/selection"></a> `selection`

- **Type:** <a href="#AutomaticEntryTargetSelection">AutomaticEntryTargetSelection</a>

---

### <a name="AutomaticEntryTarget'Fixed"></a> `AutomaticEntryTarget'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AutomaticEntryTarget'Fixed/tag">See details</a>
`fixed` |  | <a href="#AutomaticEntryTarget'Fixed/fixed">See details</a>

#### <a name="AutomaticEntryTarget'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="AutomaticEntryTarget'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedAutomaticEntryTarget">FixedAutomaticEntryTarget</a>

---

### <a name="AutomaticEntryTargetSelection"></a> `AutomaticEntryTargetSelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#AutomaticEntryTargetSelection/list">See details</a>

#### <a name="AutomaticEntryTargetSelection/list"></a> `list`

- **Type:** <a href="#AutomaticEntryTargetSelectionList">AutomaticEntryTargetSelectionList</a>

---

### <a name="AutomaticEntryTargetSelectionList"></a> `AutomaticEntryTargetSelectionList`

- **Possible values:** `"MagicalTraditions"`, `"MagicalDilettanteTraditions"`

---

### <a name="FixedAutomaticEntryTarget"></a> `FixedAutomaticEntryTarget`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FixedAutomaticEntryTarget/id">See details</a>

#### <a name="FixedAutomaticEntryTarget/id"></a> `id`

- **Type:** <a href="../_Identifier.md#ActivatableIdentifier">ActivatableIdentifier</a>

---

### <a name="PactGiftTranslation"></a> `PactGiftTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#PactGiftTranslation/name">See details</a>
`name_in_library?` |  | <a href="#PactGiftTranslation/name_in_library">See details</a>
`effect` |  | <a href="#PactGiftTranslation/effect">See details</a>
`errata?` |  | <a href="#PactGiftTranslation/errata">See details</a>

#### <a name="PactGiftTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="PactGiftTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="PactGiftTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="PactGiftTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
