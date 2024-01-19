# HerbalPreserve

## Definitions

### <a name="HerbalPreserve"></a> HerbalPreserve (`HerbalPreserve`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The preserve's identifier. An unique, increasing integer. | <a href="#HerbalPreserve/id">See details</a>
`main_ingredient` | The main ingredient, a herb. | <a href="#HerbalPreserve/main_ingredient">See details</a>
`storage_life` | The storage life of the product. | <a href="#HerbalPreserve/storage_life">See details</a>
`translation` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#HerbalPreserve/translation">See details</a>
`src` |  | <a href="#HerbalPreserve/src">See details</a>

#### <a name="HerbalPreserve/id"></a> `id`

The preserve's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="HerbalPreserve/main_ingredient"></a> `main_ingredient`

The main ingredient, a herb.

- **Type:** <a href="../../_SimpleReferences.md#HerbReference">HerbReference</a>

#### <a name="HerbalPreserve/storage_life"></a> `storage_life`

The storage life of the product.

- **Type:** <a href="./_Herbary.md#StorageLife">StorageLife</a>

#### <a name="HerbalPreserve/translation"></a> `translation`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#HerbalPreserveTranslation">HerbalPreserveTranslation</a>&gt;

#### <a name="HerbalPreserve/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="HerbalPreserveTranslation"></a> `HerbalPreserveTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the preservation method. | <a href="#HerbalPreserveTranslation/name">See details</a>
`preparation` | Description of the preservation method. | <a href="#HerbalPreserveTranslation/preparation">See details</a>
`alternative_effect` | Alternative effect of the product. | <a href="#HerbalPreserveTranslation/alternative_effect">See details</a>
`errata?` |  | <a href="#HerbalPreserveTranslation/errata">See details</a>

#### <a name="HerbalPreserveTranslation/name"></a> `name`

Name of the preservation method.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbalPreserveTranslation/preparation"></a> `preparation`

Description of the preservation method.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbalPreserveTranslation/alternative_effect"></a> `alternative_effect`

Alternative effect of the product.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="HerbalPreserveTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>
