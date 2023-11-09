# [TITLE MISSING]

## Definitions

### <a name="GemOrPreciousStone"></a> `GemOrPreciousStone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers per 10 karat. | <a href="#GemOrPreciousStone/cost">See details</a>
`src` |  | <a href="#GemOrPreciousStone/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GemOrPreciousStone/translations">See details</a>

#### <a name="GemOrPreciousStone/cost"></a> `cost`

The cost in silverthalers per 10 karat.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="GemOrPreciousStone/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="GemOrPreciousStone/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#GemOrPreciousStoneTranslation">GemOrPreciousStoneTranslation</a>&gt;

---

### <a name="GemOrPreciousStoneTranslation"></a> `GemOrPreciousStoneTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#GemOrPreciousStoneTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#GemOrPreciousStoneTranslation/secondary_name">See details</a>
`color` | The color of the gem or stone. | <a href="#GemOrPreciousStoneTranslation/color">See details</a>
`note?` | Note text. | <a href="#GemOrPreciousStoneTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#GemOrPreciousStoneTranslation/rules">See details</a>
`errata?` |  | <a href="#GemOrPreciousStoneTranslation/errata">See details</a>

#### <a name="GemOrPreciousStoneTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="GemOrPreciousStoneTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="GemOrPreciousStoneTranslation/color"></a> `color`

The color of the gem or stone.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="GemOrPreciousStoneTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="GemOrPreciousStoneTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="GemOrPreciousStoneTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
