# [TITLE MISSING]

## Definitions

### <a name="Jewelry"></a> `Jewelry`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Jewelry/cost">See details</a>
`weight` | The weight in kg. | <a href="#Jewelry/weight">See details</a>
`complexity` | The complexity of crafting the item. | <a href="#Jewelry/complexity">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#Jewelry/structure_points">See details</a>
`src` |  | <a href="#Jewelry/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Jewelry/translations">See details</a>

#### <a name="Jewelry/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="#JewelryMaterialDifference">JewelryMaterialDifference</a>&lt;<a href="./_Item.md#Cost">Cost</a>&gt;

#### <a name="Jewelry/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="#JewelryMaterialDifference">JewelryMaterialDifference</a>&lt;<a href="./_Item.md#Weight">Weight</a>&gt;

#### <a name="Jewelry/complexity"></a> `complexity`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="Jewelry/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="Jewelry/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Jewelry/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#JewelryTranslation">JewelryTranslation</a>&gt;

---

### <a name="JewelryMaterialDifference"></a> `JewelryMaterialDifference<T>`

Jewelry has different cost based on the material.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`bronze` |  | <a href="#JewelryMaterialDifference/bronze">See details</a>
`silver` |  | <a href="#JewelryMaterialDifference/silver">See details</a>
`gold` |  | <a href="#JewelryMaterialDifference/gold">See details</a>

#### <a name="JewelryMaterialDifference/bronze"></a> `bronze`

- **Type:** <a href="#T">T</a>

#### <a name="JewelryMaterialDifference/silver"></a> `silver`

- **Type:** <a href="#T">T</a>

#### <a name="JewelryMaterialDifference/gold"></a> `gold`

- **Type:** <a href="#T">T</a>

---

### <a name="JewelryTranslation"></a> `JewelryTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#JewelryTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#JewelryTranslation/secondary_name">See details</a>
`note?` | Note text. | <a href="#JewelryTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#JewelryTranslation/rules">See details</a>
`errata?` |  | <a href="#JewelryTranslation/errata">See details</a>

#### <a name="JewelryTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="JewelryTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="JewelryTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="JewelryTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="JewelryTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
