# [TITLE MISSING]

## Definitions

### <a name="LuxuryGood"></a> `LuxuryGood`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#LuxuryGood/cost">See details</a>
`weight` | The weight in kg. | <a href="#LuxuryGood/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#LuxuryGood/complexity">See details</a>
`structure_points?` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#LuxuryGood/structure_points">See details</a>
`combat_use?` | The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item. | <a href="#LuxuryGood/combat_use">See details</a>
`src` |  | <a href="#LuxuryGood/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LuxuryGood/translations">See details</a>

#### <a name="LuxuryGood/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="LuxuryGood/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="LuxuryGood/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="LuxuryGood/structure_points"></a> `structure_points?`

The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="LuxuryGood/combat_use"></a> `combat_use?`

The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.

- **Type:** <a href="./_Item.md#CombatUse">CombatUse</a>

#### <a name="LuxuryGood/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="LuxuryGood/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>&gt;
