# [TITLE MISSING]

## Definitions

### <a name="CeremonialItem"></a> `CeremonialItem`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#CeremonialItem/cost">See details</a>
`weight` | The weight in kg. | <a href="#CeremonialItem/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#CeremonialItem/complexity">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#CeremonialItem/structure_points">See details</a>
`associated_tradition` | The deity associated with the equipment item. | <a href="#CeremonialItem/associated_tradition">See details</a>
`combat_use?` | The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item. | <a href="#CeremonialItem/combat_use">See details</a>
`src` |  | <a href="#CeremonialItem/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CeremonialItem/translations">See details</a>

#### <a name="CeremonialItem/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="CeremonialItem/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="CeremonialItem/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="CeremonialItem/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="CeremonialItem/associated_tradition"></a> `associated_tradition`

The deity associated with the equipment item.

- **Type:** <a href="../../_SimpleReferences.md#BlessedTraditionReference">BlessedTraditionReference</a>

#### <a name="CeremonialItem/combat_use"></a> `combat_use?`

The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.

- **Type:** <a href="./_Item.md#CombatUse">CombatUse</a>

#### <a name="CeremonialItem/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CeremonialItem/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>&gt;
