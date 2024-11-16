# Karma Special Ability

## Definitions

### <a name="KarmaSpecialAbility"></a> Karma Special Ability (`KarmaSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#KarmaSpecialAbility/id">See details</a>
`levels?` |  | <a href="#KarmaSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#KarmaSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#KarmaSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#KarmaSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#KarmaSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#KarmaSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#KarmaSpecialAbility/translations">See details</a>

#### <a name="KarmaSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="KarmaSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="KarmaSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="KarmaSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="KarmaSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="KarmaSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="KarmaSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="KarmaSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#KarmaSpecialAbilityTranslation">KarmaSpecialAbilityTranslation</a>&gt;

---

### <a name="KarmaSpecialAbilityTranslation"></a> `KarmaSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#KarmaSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#KarmaSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#KarmaSpecialAbilityTranslation/rules">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#KarmaSpecialAbilityTranslation/ap_value">See details</a>
`errata?` |  | <a href="#KarmaSpecialAbilityTranslation/errata">See details</a>

#### <a name="KarmaSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="KarmaSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="KarmaSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="KarmaSpecialAbilityTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the given information.

- **Type:** <a href="#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="KarmaSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
