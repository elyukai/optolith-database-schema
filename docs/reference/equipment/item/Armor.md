# [TITLE MISSING]

## Definitions

### <a name="Armor"></a> `Armor`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Armor/cost">See details</a>
`weight` | The weight in kg. | <a href="#Armor/weight">See details</a>
`complexity` | The complexity of crafting the item. | <a href="#Armor/complexity">See details</a>
`protection` | The PRO value. | <a href="#Armor/protection">See details</a>
`encumbrance` | The ENC value. | <a href="#Armor/encumbrance">See details</a>
`has_additional_penalties` | Does the armor have additional penalties (MOV -1, INI -1)? | <a href="#Armor/has_additional_penalties">See details</a>
`armor_type` | The armor type. | <a href="#Armor/armor_type">See details</a>
`hit_zone?` | Specify if armor is only available for a specific hit zone. | <a href="#Armor/hit_zone">See details</a>
`src` |  | <a href="#Armor/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Armor/translations">See details</a>

#### <a name="Armor/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="Armor/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="Armor/complexity"></a> `complexity`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="Armor/protection"></a> `protection`

The PRO value.

- **Type:** <a href="#Protection">Protection</a>

#### <a name="Armor/encumbrance"></a> `encumbrance`

The ENC value.

- **Type:** <a href="#Encumbrance">Encumbrance</a>

#### <a name="Armor/has_additional_penalties"></a> `has_additional_penalties`

Does the armor have additional penalties (MOV -1, INI -1)?

- **Type:** <a href="#HasAdditionalPenalties">HasAdditionalPenalties</a>

#### <a name="Armor/armor_type"></a> `armor_type`

The armor type.

- **Type:** <a href="#ArmorTypeReference">ArmorTypeReference</a>

#### <a name="Armor/hit_zone"></a> `hit_zone?`

Specify if armor is only available for a specific hit zone.

- **Type:** <a href="#HitZone">HitZone</a>

#### <a name="Armor/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Armor/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ArmorTranslation">ArmorTranslation</a>&gt;

---

### <a name="ArmorTranslation"></a> `ArmorTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#ArmorTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#ArmorTranslation/secondary_name">See details</a>
`note?` | Note text. | <a href="#ArmorTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#ArmorTranslation/rules">See details</a>
`advantage?` | The armor advantage text. | <a href="#ArmorTranslation/advantage">See details</a>
`disadvantage?` | The armor disadvantage text. | <a href="#ArmorTranslation/disadvantage">See details</a>
`errata?` |  | <a href="#ArmorTranslation/errata">See details</a>

#### <a name="ArmorTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ArmorTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ArmorTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ArmorTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ArmorTranslation/advantage"></a> `advantage?`

The armor advantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ArmorTranslation/disadvantage"></a> `disadvantage?`

The armor disadvantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ArmorTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="SecondaryArmor"></a> `SecondaryArmor`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`protection` | The PRO value. | <a href="#SecondaryArmor/protection">See details</a>
`encumbrance` | The ENC value. | <a href="#SecondaryArmor/encumbrance">See details</a>
`has_additional_penalties` | Does the armor have additional penalties (MOV -1, INI -1)? | <a href="#SecondaryArmor/has_additional_penalties">See details</a>
`armor_type` | The armor type. | <a href="#SecondaryArmor/armor_type">See details</a>
`hit_zone?` | Specify if armor is only available for a specific hit zone. | <a href="#SecondaryArmor/hit_zone">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SecondaryArmor/translations">See details</a>

#### <a name="SecondaryArmor/protection"></a> `protection`

The PRO value.

- **Type:** <a href="#Protection">Protection</a>

#### <a name="SecondaryArmor/encumbrance"></a> `encumbrance`

The ENC value.

- **Type:** <a href="#Encumbrance">Encumbrance</a>

#### <a name="SecondaryArmor/has_additional_penalties"></a> `has_additional_penalties`

Does the armor have additional penalties (MOV -1, INI -1)?

- **Type:** <a href="#HasAdditionalPenalties">HasAdditionalPenalties</a>

#### <a name="SecondaryArmor/armor_type"></a> `armor_type`

The armor type.

- **Type:** <a href="#ArmorTypeReference">ArmorTypeReference</a>

#### <a name="SecondaryArmor/hit_zone"></a> `hit_zone?`

Specify if armor is only available for a specific hit zone.

- **Type:** <a href="#HitZone">HitZone</a>

#### <a name="SecondaryArmor/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SecondaryArmorTranslation">SecondaryArmorTranslation</a>&gt;

---

### <a name="SecondaryArmorTranslation"></a> `SecondaryArmorTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`advantage?` | The armor advantage text. | <a href="#SecondaryArmorTranslation/advantage">See details</a>
`disadvantage?` | The armor disadvantage text. | <a href="#SecondaryArmorTranslation/disadvantage">See details</a>

#### <a name="SecondaryArmorTranslation/advantage"></a> `advantage?`

The armor advantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="SecondaryArmorTranslation/disadvantage"></a> `disadvantage?`

The armor disadvantage text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="Protection"></a> `Protection`

The PRO value.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Encumbrance"></a> `Encumbrance`

The ENC value.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="HasAdditionalPenalties"></a> `HasAdditionalPenalties`

Does the armor have additional penalties (MOV -1, INI -1)?

- **Type:** Boolean

---

### <a name="ArmorTypeReference"></a> Armor Type (`ArmorTypeReference`)

The armor type.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The armor type's identifier. | <a href="#ArmorTypeReference/id">See details</a>

#### <a name="ArmorTypeReference/id"></a> `id`

The armor type's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `10`

---

### <a name="HitZone"></a> Hit Zone (`HitZone`)

Specify if armor is only available for a specific hit zone.

- **Type:** Union
- **Cases:** <a href="#HitZone'Head">HitZone'Head</a> | <a href="#HitZone'Torso">HitZone'Torso</a> | <a href="#HitZone'Arms">HitZone'Arms</a> | <a href="#HitZone'Legs">HitZone'Legs</a>

---

### <a name="HitZone'Head"></a> `HitZone'Head`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Head/tag">See details</a>
`head` |  | <a href="#HitZone'Head/head">See details</a>

#### <a name="HitZone'Head/tag"></a> `tag`

- **Constant:** `"Head"`

#### <a name="HitZone'Head/head"></a> `head`

- **Type:** <a href="#HeadHitZone">HeadHitZone</a>

---

### <a name="HitZone'Torso"></a> `HitZone'Torso`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Torso/tag">See details</a>
`torso` |  | <a href="#HitZone'Torso/torso">See details</a>

#### <a name="HitZone'Torso/tag"></a> `tag`

- **Constant:** `"Torso"`

#### <a name="HitZone'Torso/torso"></a> `torso`

- **Type:** <a href="#HitZone'Torso/torso">Object</a>

---

### <a name="HitZone'Torso/torso"></a> `HitZone'Torso/torso`

- **Type:** Empty Object

---

### <a name="HitZone'Arms"></a> `HitZone'Arms`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Arms/tag">See details</a>
`arms` |  | <a href="#HitZone'Arms/arms">See details</a>

#### <a name="HitZone'Arms/tag"></a> `tag`

- **Constant:** `"Arms"`

#### <a name="HitZone'Arms/arms"></a> `arms`

- **Type:** <a href="#HitZone'Arms/arms">Object</a>

---

### <a name="HitZone'Arms/arms"></a> `HitZone'Arms/arms`

- **Type:** Empty Object

---

### <a name="HitZone'Legs"></a> `HitZone'Legs`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#HitZone'Legs/tag">See details</a>
`legs` |  | <a href="#HitZone'Legs/legs">See details</a>

#### <a name="HitZone'Legs/tag"></a> `tag`

- **Constant:** `"Legs"`

#### <a name="HitZone'Legs/legs"></a> `legs`

- **Type:** <a href="#HitZone'Legs/legs">Object</a>

---

### <a name="HitZone'Legs/legs"></a> `HitZone'Legs/legs`

- **Type:** Empty Object

---

### <a name="HeadHitZone"></a> `HeadHitZone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`combination_possibilities?` | In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others. | <a href="#HeadHitZone/combination_possibilities">See details</a>

#### <a name="HeadHitZone/combination_possibilities"></a> `combination_possibilities?`

In some cases, multiple armors for the same hit zone can be combined.
They're listed at the item that can be combined with others.

- **Type:** <a href="#HeadHitZoneCombinationPossibilities">HeadHitZoneCombinationPossibilities</a>

---

### <a name="HeadHitZoneCombinationPossibilities"></a> `HeadHitZoneCombinationPossibilities`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`armors` | A list of armors that can be combined with this armor. | <a href="#HeadHitZoneCombinationPossibilities/armors">See details</a>
`protection?` | The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value. | <a href="#HeadHitZoneCombinationPossibilities/protection">See details</a>

#### <a name="HeadHitZoneCombinationPossibilities/armors"></a> `armors`

A list of armors that can be combined with this armor.

- **Type:** List
- **Items:** <a href="#HeadHitZoneCombinationPossibilities/armors[]">HeadHitZoneCombinationPossibilities/armors[]</a>
- **Minimum Items:** `1`

#### <a name="HeadHitZoneCombinationPossibilities/protection"></a> `protection?`

The PRO value that is added to the PRO value of the other armor instead
of adding the normale PRO value.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="HeadHitZoneCombinationPossibilities/armors[]"></a> `HeadHitZoneCombinationPossibilities/armors[]`

- **Type:** <a href="../../_SimpleReferences.md#ArmorReference">ArmorReference</a>
