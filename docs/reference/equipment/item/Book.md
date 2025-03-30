# [TITLE MISSING]

## Definitions

### <a name="Book"></a> `Book`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#Book/cost">See details</a>
`weight` | The weight in kg. | <a href="#Book/weight">See details</a>
`complexity` | The complexity of crafting the item. | <a href="#Book/complexity">See details</a>
`structure_points` | The structure points of the item. Use an array if the item consists of multiple components that have individual structure points. | <a href="#Book/structure_points">See details</a>
`src` |  | <a href="#Book/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Book/translations">See details</a>

#### <a name="Book/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="Book/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="Book/complexity"></a> `complexity`

The complexity of crafting the item.

- **Type:** <a href="./_Item.md#Complexity">Complexity</a>

#### <a name="Book/structure_points"></a> `structure_points`

The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.

- **Type:** <a href="./_Item.md#StructurePoints">StructurePoints</a>

#### <a name="Book/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Book/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#BookTranslation">BookTranslation</a>&gt;

---

### <a name="BookTranslation"></a> `BookTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#BookTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#BookTranslation/secondary_name">See details</a>
`language` | The language the book is written in. | <a href="#BookTranslation/language">See details</a>
`script` | The script that was used for the book. | <a href="#BookTranslation/script">See details</a>
`note?` | Note text. | <a href="#BookTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#BookTranslation/rules">See details</a>
`errata?` |  | <a href="#BookTranslation/errata">See details</a>

#### <a name="BookTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BookTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BookTranslation/language"></a> `language`

The language the book is written in.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BookTranslation/script"></a> `script`

The script that was used for the book.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BookTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="BookTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="BookTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
