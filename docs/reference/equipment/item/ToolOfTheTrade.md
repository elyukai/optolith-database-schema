# [TITLE MISSING]

## Definitions

### <a name="ToolOfTheTrade"></a> `ToolOfTheTrade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#ToolOfTheTrade/cost">See details</a>
`weight` | The weight in kg. | <a href="#ToolOfTheTrade/weight">See details</a>
`complexity?` | The complexity of crafting the item. | <a href="#ToolOfTheTrade/complexity">See details</a>
`structure_points?` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#ToolOfTheTrade/structure_points">See details</a>
`laboratory?` | Additional information if the item is a laboratory. | <a href="#ToolOfTheTrade/laboratory">See details</a>
`src` |  | <a href="#ToolOfTheTrade/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ToolOfTheTrade/translations">See details</a>

#### <a name="ToolOfTheTrade/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="ToolOfTheTrade/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="ToolOfTheTrade/complexity"></a> `complexity?`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="ToolOfTheTrade/structure_points"></a> `structure_points?`

The structure points of the item. Use an array if the item consists of
multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="ToolOfTheTrade/laboratory"></a> `laboratory?`

Additional information if the item is a laboratory.

- **Type:** <a href="#Laboratory">Laboratory</a>

#### <a name="ToolOfTheTrade/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ToolOfTheTrade/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ToolOfTheTradeTranslation">ToolOfTheTradeTranslation</a>&gt;

---

### <a name="Laboratory"></a> `Laboratory`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` |  | <a href="#Laboratory/level">See details</a>

#### <a name="Laboratory/level"></a> `level`

- **Type:** <a href="./_Herbary.md#LaboratoryLevel">LaboratoryLevel</a>

---

### <a name="ToolOfTheTradeTranslation"></a> `ToolOfTheTradeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#ToolOfTheTradeTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#ToolOfTheTradeTranslation/secondary_name">See details</a>
`note?` | Note text. | <a href="#ToolOfTheTradeTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#ToolOfTheTradeTranslation/rules">See details</a>
`errata?` |  | <a href="#ToolOfTheTradeTranslation/errata">See details</a>

#### <a name="ToolOfTheTradeTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ToolOfTheTradeTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ToolOfTheTradeTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ToolOfTheTradeTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ToolOfTheTradeTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
