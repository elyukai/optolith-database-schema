# [TITLE MISSING]

## Definitions

### <a name="BandageOrRemedy"></a> `BandageOrRemedy`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#BandageOrRemedy/cost">See details</a>
`weight` | The weight in kg. | <a href="#BandageOrRemedy/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#BandageOrRemedy/complexity">See details</a>
`structure_points?` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#BandageOrRemedy/structure_points">See details</a>
`combat_use?` | The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item. | <a href="#BandageOrRemedy/combat_use">See details</a>
`src` |  | <a href="#BandageOrRemedy/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BandageOrRemedy/translations">See details</a>

#### <a name="BandageOrRemedy/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="BandageOrRemedy/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="BandageOrRemedy/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="BandageOrRemedy/structure_points"></a> `structure_points?`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="BandageOrRemedy/combat_use"></a> `combat_use?`

The item can also be used either as an improvised weapon or as an armor,
although this is not the primary use case of the item.

- **Type:** <a href="./_Item.md#CombatUse">CombatUse</a>

#### <a name="BandageOrRemedy/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BandageOrRemedy/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BandageOrRemedy/translations[key]">BandageOrRemedy/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BandageOrRemedy/translations[key]"></a> `BandageOrRemedy/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>
