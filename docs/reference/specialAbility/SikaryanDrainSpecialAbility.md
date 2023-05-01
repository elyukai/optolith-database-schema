# Sikaryan Drain Special Ability

## Definitions

### <a name="SikaryanDrainSpecialAbility"></a> Sikaryan Drain Special Ability (`SikaryanDrainSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SikaryanDrainSpecialAbility/id">See details</a>
`levels?` |  | <a href="#SikaryanDrainSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#SikaryanDrainSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#SikaryanDrainSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#SikaryanDrainSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#SikaryanDrainSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#SikaryanDrainSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SikaryanDrainSpecialAbility/translations">See details</a>

#### <a name="SikaryanDrainSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="SikaryanDrainSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="SikaryanDrainSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="SikaryanDrainSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="SikaryanDrainSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SikaryanDrainSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SikaryanDrainSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SikaryanDrainSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SikaryanDrainSpecialAbility/translations[key]">SikaryanDrainSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SikaryanDrainSpecialAbility/translations[key]"></a> `SikaryanDrainSpecialAbility/translations[key]`

- **Type:** <a href="#SikaryanDrainSpecialAbilityTranslation">SikaryanDrainSpecialAbilityTranslation</a>

---

### <a name="SikaryanDrainSpecialAbilityTranslation"></a> `SikaryanDrainSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SikaryanDrainSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SikaryanDrainSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#SikaryanDrainSpecialAbilityTranslation/rules">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#SikaryanDrainSpecialAbilityTranslation/ap_value">See details</a>
`errata?` |  | <a href="#SikaryanDrainSpecialAbilityTranslation/errata">See details</a>

#### <a name="SikaryanDrainSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="SikaryanDrainSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="SikaryanDrainSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="SikaryanDrainSpecialAbilityTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the
given information.

- **Type:** <a href="../_Activatable.md#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="SikaryanDrainSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
