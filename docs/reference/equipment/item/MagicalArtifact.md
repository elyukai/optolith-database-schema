# [TITLE MISSING]

## Definitions

### <a name="MagicalArtifact"></a> `MagicalArtifact`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#MagicalArtifact/cost">See details</a>
`src` |  | <a href="#MagicalArtifact/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalArtifact/translations">See details</a>

#### <a name="MagicalArtifact/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="MagicalArtifact/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalArtifact/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicalArtifactTranslation">MagicalArtifactTranslation</a>&gt;

---

### <a name="MagicalArtifactTranslation"></a> `MagicalArtifactTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the item. | <a href="#MagicalArtifactTranslation/name">See details</a>
`secondary_name?` | An auxiliary name or label of the item, if available. | <a href="#MagicalArtifactTranslation/secondary_name">See details</a>
`note?` | Note text. | <a href="#MagicalArtifactTranslation/note">See details</a>
`rules?` | Special rules text. | <a href="#MagicalArtifactTranslation/rules">See details</a>
`errata?` |  | <a href="#MagicalArtifactTranslation/errata">See details</a>

#### <a name="MagicalArtifactTranslation/name"></a> `name`

The name of the item.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalArtifactTranslation/secondary_name"></a> `secondary_name?`

An auxiliary name or label of the item, if available.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalArtifactTranslation/note"></a> `note?`

Note text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="MagicalArtifactTranslation/rules"></a> `rules?`

Special rules text.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="MagicalArtifactTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
