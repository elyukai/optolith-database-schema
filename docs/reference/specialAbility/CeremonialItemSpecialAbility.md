# Ceremonial Item Special Ability

## Definitions

### <a name="CeremonialItemSpecialAbility"></a> Ceremonial Item Special Ability (`CeremonialItemSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CeremonialItemSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CeremonialItemSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#CeremonialItemSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#CeremonialItemSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#CeremonialItemSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#CeremonialItemSpecialAbility/maximum">See details</a>
`aspect?` |  | <a href="#CeremonialItemSpecialAbility/aspect">See details</a>
`prerequisites?` |  | <a href="#CeremonialItemSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#CeremonialItemSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CeremonialItemSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CeremonialItemSpecialAbility/translations">See details</a>

#### <a name="CeremonialItemSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="CeremonialItemSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="CeremonialItemSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="CeremonialItemSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="CeremonialItemSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="CeremonialItemSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="CeremonialItemSpecialAbility/aspect"></a> `aspect?`

- **Type:** <a href="#AspectDeclaration">AspectDeclaration</a>

#### <a name="CeremonialItemSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CeremonialItemSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CeremonialItemSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CeremonialItemSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CeremonialItemSpecialAbilityTranslation">CeremonialItemSpecialAbilityTranslation</a>&gt;

---

### <a name="CeremonialItemSpecialAbilityTranslation"></a> `CeremonialItemSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CeremonialItemSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#CeremonialItemSpecialAbilityTranslation/name_in_library">See details</a>
`effect` |  | <a href="#CeremonialItemSpecialAbilityTranslation/effect">See details</a>
`prerequisites?` | The prerequisites text. It is only used if the text cannot be generated from the given information. | <a href="#CeremonialItemSpecialAbilityTranslation/prerequisites">See details</a>
`errata?` |  | <a href="#CeremonialItemSpecialAbilityTranslation/errata">See details</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/prerequisites"></a> `prerequisites?`

The prerequisites text. It is only used if the text cannot be generated
from the given information.

- **Type:** <a href="#PrerequisitesReplacement">PrerequisitesReplacement</a>

#### <a name="CeremonialItemSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
