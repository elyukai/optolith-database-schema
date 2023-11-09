# Pact Category

## Definitions

### <a name="PactCategory"></a> Pact Category (`PactCategory`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The pact category's identifier. An unique, increasing integer. | <a href="#PactCategory/id">See details</a>
`types` | Types of creatures in this category. | <a href="#PactCategory/types">See details</a>
`domains` | Domains in this category. | <a href="#PactCategory/domains">See details</a>
`src` |  | <a href="#PactCategory/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactCategory/translations">See details</a>

#### <a name="PactCategory/id"></a> `id`

The pact category's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactCategory/types"></a> `types`

Types of creatures in this category.

- **Type:** List
- **Items:** <a href="#PactCategory/types[]">PactCategory/types[]</a>
- **Minimum Items:** `1`

#### <a name="PactCategory/domains"></a> `domains`

Domains in this category.

- **Type:** List
- **Items:** <a href="#PactCategory/domains[]">PactCategory/domains[]</a>
- **Minimum Items:** `1`

#### <a name="PactCategory/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="PactCategory/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#PactCategoryTranslation">PactCategoryTranslation</a>&gt;

---

### <a name="PactCategory/types[]"></a> `PactCategory/types[]`

- **Type:** <a href="#PactType">PactType</a>

---

### <a name="PactCategory/domains[]"></a> `PactCategory/domains[]`

- **Type:** <a href="#PactDomain">PactDomain</a>

---

### <a name="PactCategoryTranslation"></a> `PactCategoryTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the pact category. | <a href="#PactCategoryTranslation/name">See details</a>
`errata?` |  | <a href="#PactCategoryTranslation/errata">See details</a>

#### <a name="PactCategoryTranslation/name"></a> `name`

The name of the pact category.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="PactCategoryTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="PactType"></a> `PactType`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The type's identifier. An unique, increasing integer. | <a href="#PactType/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactType/translations">See details</a>

#### <a name="PactType/id"></a> `id`

The type's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactType/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#PactTypeTranslation">PactTypeTranslation</a>&gt;

---

### <a name="PactTypeTranslation"></a> `PactTypeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the type. | <a href="#PactTypeTranslation/name">See details</a>

#### <a name="PactTypeTranslation/name"></a> `name`

The name of the type.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PactDomain"></a> `PactDomain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The domain's identifier. An unique, increasing integer. | <a href="#PactDomain/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactDomain/translations">See details</a>

#### <a name="PactDomain/id"></a> `id`

The domain's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactDomain/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#PactDomainTranslation">PactDomainTranslation</a>&gt;

---

### <a name="PactDomainTranslation"></a> `PactDomainTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the domain. | <a href="#PactDomainTranslation/name">See details</a>

#### <a name="PactDomainTranslation/name"></a> `name`

The name of the domain.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
