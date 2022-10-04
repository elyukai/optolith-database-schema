# [TITLE MISSING]

## Definitions

### <a name="EquipmentOfBlessedOnes"></a> `EquipmentOfBlessedOnes`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#EquipmentOfBlessedOnes/cost">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#EquipmentOfBlessedOnes/structure_points">See details</a>
`associated_tradition` | The deity associated with the equipment item. | <a href="#EquipmentOfBlessedOnes/associated_tradition">See details</a>
`src` |  | <a href="#EquipmentOfBlessedOnes/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#EquipmentOfBlessedOnes/translations">See details</a>

#### <a name="EquipmentOfBlessedOnes/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="EquipmentOfBlessedOnes/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="EquipmentOfBlessedOnes/associated_tradition"></a> `associated_tradition`

The deity associated with the equipment item.

- **Type:** List
- **Items:** <a href="#EquipmentOfBlessedOnes/associated_tradition[]">EquipmentOfBlessedOnes/associated_tradition[]</a>

#### <a name="EquipmentOfBlessedOnes/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="EquipmentOfBlessedOnes/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#EquipmentOfBlessedOnes/translations[key]">EquipmentOfBlessedOnes/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="EquipmentOfBlessedOnes/associated_tradition[]"></a> `EquipmentOfBlessedOnes/associated_tradition[]`

- **Type:** <a href="../../_SimpleReferences.md#BlessedTraditionReference">BlessedTraditionReference</a>

---

### <a name="EquipmentOfBlessedOnes/translations[key]"></a> `EquipmentOfBlessedOnes/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>
