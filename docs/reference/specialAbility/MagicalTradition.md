# Magical Tradition

## Definitions

### <a name="MagicalTradition"></a> Magical Tradition (`MagicalTradition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicalTradition/id">See details</a>
`levels?` |  | <a href="#MagicalTradition/levels">See details</a>
`select_options?` |  | <a href="#MagicalTradition/select_options">See details</a>
`skill_applications?` |  | <a href="#MagicalTradition/skill_applications">See details</a>
`skill_uses?` |  | <a href="#MagicalTradition/skill_uses">See details</a>
`primary?` | The tradition's primary attribute. Leave empty if the tradition does not have one. | <a href="#MagicalTradition/primary">See details</a>
`can_learn_cantrips` | Can a member of the tradition learn cantrips? | <a href="#MagicalTradition/can_learn_cantrips">See details</a>
`can_learn_spells` | Can a member of the tradition learn spells? | <a href="#MagicalTradition/can_learn_spells">See details</a>
`can_learn_rituals` | Can a member of the tradition learn rituals? | <a href="#MagicalTradition/can_learn_rituals">See details</a>
`can_bind_familiars` | Can this magical tradition bind familiars? | <a href="#MagicalTradition/can_bind_familiars">See details</a>
`allows_multiple_traditions` | Does the tradition allow learning more traditions or having learned a different tradition before learning this tradition? | <a href="#MagicalTradition/allows_multiple_traditions">See details</a>
`alternative_magical_adventure_points_maximum` | Is the maximum AP you're able to spent on magical advantages and able to get by magical disadvantages different than the default of 50 AP? | <a href="#MagicalTradition/alternative_magical_adventure_points_maximum">See details</a>
`require_non_spellwork_exclusive_effects` | Are advantages/disadvantages required to not exclusively apply to arcane spellworks, but also to the tradition's magical actions or applications? | <a href="#MagicalTradition/require_non_spellwork_exclusive_effects">See details</a>
`is_magical_dilettante` | Is this a magical dilettante tradition? | <a href="#MagicalTradition/is_magical_dilettante">See details</a>
`use_arcane_spellworks_from_tradition` | If arcane spellworks from a different tradition count as arcane spellworks of this tradition, this is the different tradition's reference. | <a href="#MagicalTradition/use_arcane_spellworks_from_tradition">See details</a>
`influences?` | The Influences for the traditions. Influences are enabled by Focus Rules. | <a href="#MagicalTradition/influences">See details</a>
`prerequisites?` |  | <a href="#MagicalTradition/prerequisites">See details</a>
`ap_value` |  | <a href="#MagicalTradition/ap_value">See details</a>
`src` |  | <a href="#MagicalTradition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalTradition/translations">See details</a>

#### <a name="MagicalTradition/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="MagicalTradition/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="MagicalTradition/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="MagicalTradition/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="MagicalTradition/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="MagicalTradition/primary"></a> `primary?`

The tradition's primary attribute. Leave empty if the tradition does not
have one.

- **Type:** <a href="#PrimaryAttribute">PrimaryAttribute</a>

#### <a name="MagicalTradition/can_learn_cantrips"></a> `can_learn_cantrips`

Can a member of the tradition learn cantrips?

- **Type:** Boolean

#### <a name="MagicalTradition/can_learn_spells"></a> `can_learn_spells`

Can a member of the tradition learn spells?

- **Type:** Boolean

#### <a name="MagicalTradition/can_learn_rituals"></a> `can_learn_rituals`

Can a member of the tradition learn rituals?

- **Type:** Boolean

#### <a name="MagicalTradition/can_bind_familiars"></a> `can_bind_familiars`

Can this magical tradition bind familiars?

- **Type:** Boolean

#### <a name="MagicalTradition/allows_multiple_traditions"></a> `allows_multiple_traditions`

Does the tradition allow learning more traditions or having learned a
different tradition before learning this tradition?

- **Type:** Boolean

#### <a name="MagicalTradition/alternative_magical_adventure_points_maximum"></a> `alternative_magical_adventure_points_maximum`

Is the maximum AP you're able to spent on magical advantages and able to
get by magical disadvantages different than the default of 50 AP?

- **Type:** Integer
- **Minimum:** `25`
- **Maximum:** `30`
- **Multiple of:** `5`

#### <a name="MagicalTradition/require_non_spellwork_exclusive_effects"></a> `require_non_spellwork_exclusive_effects`

Are advantages/disadvantages required to not exclusively apply to arcane
spellworks, but also to the tradition's magical actions or applications?

- **Type:** Boolean

#### <a name="MagicalTradition/is_magical_dilettante"></a> `is_magical_dilettante`

Is this a magical dilettante tradition?

- **Type:** Boolean

#### <a name="MagicalTradition/use_arcane_spellworks_from_tradition"></a> `use_arcane_spellworks_from_tradition`

If arcane spellworks from a different tradition count as arcane spellworks
of this tradition, this is the different tradition's reference.

- **Type:** <a href="../_SimpleReferences.md#MagicalTraditionReference">MagicalTraditionReference</a>

#### <a name="MagicalTradition/influences"></a> `influences?`

The Influences for the traditions. Influences are enabled by Focus Rules.

- **Type:** List
- **Items:** <a href="#MagicalTradition/influences[]">MagicalTradition/influences[]</a>
- **Minimum Items:** `2`

#### <a name="MagicalTradition/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="MagicalTradition/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="MagicalTradition/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalTradition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalTradition/translations[key]">MagicalTradition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalTradition/influences[]"></a> `MagicalTradition/influences[]`

- **Type:** <a href="../_Influence.md#Influence">Influence</a>

---

### <a name="MagicalTradition/translations[key]"></a> `MagicalTradition/translations[key]`

- **Type:** <a href="#MagicalTraditionTranslation">MagicalTraditionTranslation</a>

---

### <a name="PrimaryAttribute"></a> `PrimaryAttribute`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#PrimaryAttribute/id">See details</a>
`use_half_for_arcane_energy` | Typically, the value of the primary attribute (if one exists) is added onto the base of 20 AE to get the actual AE. But sometimes, only half the value is added. | <a href="#PrimaryAttribute/use_half_for_arcane_energy">See details</a>

#### <a name="PrimaryAttribute/id"></a> `id`

The attribute's identifier.

- **Type:** <a href="../_Identifier.md#AttributeIdentifier">AttributeIdentifier</a>

#### <a name="PrimaryAttribute/use_half_for_arcane_energy"></a> `use_half_for_arcane_energy`

Typically, the value of the primary attribute (if one exists) is added
onto the base of 20 AE to get the actual AE. But sometimes, only half the
value is added.

- **Type:** Boolean

---

### <a name="MagicalTraditionTranslation"></a> `MagicalTraditionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#MagicalTraditionTranslation/name">See details</a>
`name_for_arcane_spellworks?` | The name used for the traditions list of arcane spellworks if it is different than the `name` of the special ability. | <a href="#MagicalTraditionTranslation/name_for_arcane_spellworks">See details</a>
`name_in_library?` |  | <a href="#MagicalTraditionTranslation/name_in_library">See details</a>
`special_rules` | The special rules of the tradition. They should be sorted like they are in the book. | <a href="#MagicalTraditionTranslation/special_rules">See details</a>
`errata?` |  | <a href="#MagicalTraditionTranslation/errata">See details</a>

#### <a name="MagicalTraditionTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="MagicalTraditionTranslation/name_for_arcane_spellworks"></a> `name_for_arcane_spellworks?`

The name used for the traditions list of arcane spellworks if it is
different than the `name` of the special ability.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="MagicalTraditionTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="MagicalTraditionTranslation/special_rules"></a> `special_rules`

The special rules of the tradition. They should be sorted like they are
in the book.

- **Type:** List
- **Items:** <a href="#MagicalTraditionTranslation/special_rules[]">MagicalTraditionTranslation/special_rules[]</a>
- **Minimum Items:** `1`

#### <a name="MagicalTraditionTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalTraditionTranslation/special_rules[]"></a> `MagicalTraditionTranslation/special_rules[]`

- **Type:** <a href="./_Tradition.md#SpecialRule">SpecialRule</a>
