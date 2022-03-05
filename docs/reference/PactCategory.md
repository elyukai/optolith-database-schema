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

- **Type:** Dictionary
- **Property Values:** <a href="#PactCategory/translations[key]">PactCategory/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PactCategory/types[]"></a> `PactCategory/types[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The type's identifier. An unique, increasing integer. | <a href="#PactCategory/types[]/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactCategory/types[]/translations">See details</a>

#### <a name="PactCategory/types[]/id"></a> `id`

The type's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactCategory/types[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PactCategory/types[]/translations[key]">PactCategory/types[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PactCategory/types[]/translations[key]"></a> `PactCategory/types[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the type. | <a href="#PactCategory/types[]/translations[key]/name">See details</a>

#### <a name="PactCategory/types[]/translations[key]/name"></a> `name`

The name of the type.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PactCategory/domains[]"></a> `PactCategory/domains[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The domain's identifier. An unique, increasing integer. | <a href="#PactCategory/domains[]/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PactCategory/domains[]/translations">See details</a>

#### <a name="PactCategory/domains[]/id"></a> `id`

The domain's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PactCategory/domains[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PactCategory/domains[]/translations[key]">PactCategory/domains[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PactCategory/domains[]/translations[key]"></a> `PactCategory/domains[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the domain. | <a href="#PactCategory/domains[]/translations[key]/name">See details</a>

#### <a name="PactCategory/domains[]/translations[key]/name"></a> `name`

The name of the domain.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PactCategory/translations[key]"></a> `PactCategory/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the pact category. | <a href="#PactCategory/translations[key]/name">See details</a>
`errata?` |  | <a href="#PactCategory/translations[key]/errata">See details</a>

#### <a name="PactCategory/translations[key]/name"></a> `name`

The name of the pact category.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PactCategory/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
