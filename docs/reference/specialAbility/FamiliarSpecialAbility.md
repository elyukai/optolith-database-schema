# Familiar Special Ability

## Definitions

### <a name="FamiliarSpecialAbility"></a> Familiar Special Ability (`FamiliarSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FamiliarSpecialAbility/id">See details</a>
`levels?` |  | <a href="#FamiliarSpecialAbility/levels">See details</a>
`maximum?` |  | <a href="#FamiliarSpecialAbility/maximum">See details</a>
`ap_value` |  | <a href="#FamiliarSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#FamiliarSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FamiliarSpecialAbility/translations">See details</a>

#### <a name="FamiliarSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="FamiliarSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="FamiliarSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="FamiliarSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FamiliarSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FamiliarSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FamiliarSpecialAbility/translations[key]">FamiliarSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FamiliarSpecialAbility/translations[key]"></a> `FamiliarSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FamiliarSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#FamiliarSpecialAbility/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#FamiliarSpecialAbility/translations[key]/effect">See details</a>
`errata?` |  | <a href="#FamiliarSpecialAbility/translations[key]/errata">See details</a>

#### <a name="FamiliarSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="FamiliarSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="FamiliarSpecialAbility/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="FamiliarSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
