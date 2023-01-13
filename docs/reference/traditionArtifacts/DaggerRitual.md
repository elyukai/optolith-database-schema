# Dagger Ritual

## Definitions

### <a name="DaggerRitual"></a> Dagger Ritual (`DaggerRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#DaggerRitual/id">See details</a>
`levels?` |  | <a href="#DaggerRitual/levels">See details</a>
`select_options?` |  | <a href="#DaggerRitual/select_options">See details</a>
`maximum?` |  | <a href="#DaggerRitual/maximum">See details</a>
`prerequisites?` |  | <a href="#DaggerRitual/prerequisites">See details</a>
`volume` |  | <a href="#DaggerRitual/volume">See details</a>
`cost?` |  | <a href="#DaggerRitual/cost">See details</a>
`property` |  | <a href="#DaggerRitual/property">See details</a>
`ap_value` |  | <a href="#DaggerRitual/ap_value">See details</a>
`src` |  | <a href="#DaggerRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DaggerRitual/translations">See details</a>

#### <a name="DaggerRitual/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="DaggerRitual/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="DaggerRitual/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="DaggerRitual/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="DaggerRitual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="DaggerRitual/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="DaggerRitual/cost"></a> `cost?`

- **Type:** <a href="#DaggerRitualCost">DaggerRitualCost</a>

#### <a name="DaggerRitual/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="DaggerRitual/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="DaggerRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DaggerRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DaggerRitual/translations[key]">DaggerRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DaggerRitual/translations[key]"></a> `DaggerRitual/translations[key]`

- **Type:** <a href="#DaggerRitualTranslation">DaggerRitualTranslation</a>

---

### <a name="DaggerRitualCost"></a> `DaggerRitualCost`

- **Type:** Union
- **Cases:** <a href="#DaggerRitualCost'ArcaneEnergyCost">DaggerRitualCost'ArcaneEnergyCost</a> | <a href="#DaggerRitualCost'BindingCost">DaggerRitualCost'BindingCost</a>

---

### <a name="DaggerRitualCost'ArcaneEnergyCost"></a> `DaggerRitualCost'ArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DaggerRitualCost'ArcaneEnergyCost/tag">See details</a>
`arcane_energy_cost` |  | <a href="#DaggerRitualCost'ArcaneEnergyCost/arcane_energy_cost">See details</a>

#### <a name="DaggerRitualCost'ArcaneEnergyCost/tag"></a> `tag`

- **Constant:** `"ArcaneEnergyCost"`

#### <a name="DaggerRitualCost'ArcaneEnergyCost/arcane_energy_cost"></a> `arcane_energy_cost`

- **Type:** <a href="#DaggerRitualArcaneEnergyCost">DaggerRitualArcaneEnergyCost</a>

---

### <a name="DaggerRitualCost'BindingCost"></a> `DaggerRitualCost'BindingCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DaggerRitualCost'BindingCost/tag">See details</a>
`binding_cost` |  | <a href="#DaggerRitualCost'BindingCost/binding_cost">See details</a>

#### <a name="DaggerRitualCost'BindingCost/tag"></a> `tag`

- **Constant:** `"BindingCost"`

#### <a name="DaggerRitualCost'BindingCost/binding_cost"></a> `binding_cost`

- **Type:** <a href="../_Activatable.md#BindingCost">BindingCost</a>

---

### <a name="DaggerRitualArcaneEnergyCost"></a> `DaggerRitualArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ae_cost` |  | <a href="#DaggerRitualArcaneEnergyCost/ae_cost">See details</a>
`lp_cost?` |  | <a href="#DaggerRitualArcaneEnergyCost/lp_cost">See details</a>

#### <a name="DaggerRitualArcaneEnergyCost/ae_cost"></a> `ae_cost`

- **Type:** <a href="../_Activatable.md#ArcaneEnergyCost">ArcaneEnergyCost</a>

#### <a name="DaggerRitualArcaneEnergyCost/lp_cost"></a> `lp_cost?`

- **Type:** <a href="#LifePointsCost">LifePointsCost</a>

---

### <a name="LifePointsCost"></a> `LifePointsCost`

- **Type:** Union
- **Cases:** <a href="#LifePointsCost'Fixed">LifePointsCost'Fixed</a>

---

### <a name="LifePointsCost'Fixed"></a> `LifePointsCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LifePointsCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#LifePointsCost'Fixed/fixed">See details</a>

#### <a name="LifePointsCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="LifePointsCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedLifePointsCost">FixedLifePointsCost</a>

---

### <a name="FixedLifePointsCost"></a> `FixedLifePointsCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The LP cost value. | <a href="#FixedLifePointsCost/value">See details</a>

#### <a name="FixedLifePointsCost/value"></a> `value`

The LP cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="DaggerRitualTranslation"></a> `DaggerRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#DaggerRitualTranslation/name">See details</a>
`name_in_library?` |  | <a href="#DaggerRitualTranslation/name_in_library">See details</a>
`effect` |  | <a href="#DaggerRitualTranslation/effect">See details</a>
`volume` |  | <a href="#DaggerRitualTranslation/volume">See details</a>
`aeCost?` |  | <a href="#DaggerRitualTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#DaggerRitualTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#DaggerRitualTranslation/errata">See details</a>

#### <a name="DaggerRitualTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="DaggerRitualTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="DaggerRitualTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="DaggerRitualTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="DaggerRitualTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="DaggerRitualTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="DaggerRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
