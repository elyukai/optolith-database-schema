# Familiar Special Ability

## Definitions

### <a name="FamiliarSpecialAbility"></a> Familiar Special Ability (`FamiliarSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FamiliarSpecialAbility/id">See details</a>
`levels?` |  | <a href="#FamiliarSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#FamiliarSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#FamiliarSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#FamiliarSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#FamiliarSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#FamiliarSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarSpecialAbility/translations">See details</a>

#### <a name="FamiliarSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="FamiliarSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="FamiliarSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="FamiliarSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="FamiliarSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="FamiliarSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FamiliarSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FamiliarSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FamiliarSpecialAbilityTranslation">FamiliarSpecialAbilityTranslation</a>&gt;

---

### <a name="FamiliarSpecialAbilityTranslation"></a> `FamiliarSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FamiliarSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#FamiliarSpecialAbilityTranslation/name_in_library">See details</a>
`effect` |  | <a href="#FamiliarSpecialAbilityTranslation/effect">See details</a>
`errata?` |  | <a href="#FamiliarSpecialAbilityTranslation/errata">See details</a>

#### <a name="FamiliarSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="FamiliarSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="FamiliarSpecialAbilityTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="FamiliarSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
