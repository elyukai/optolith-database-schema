# Aspect

## Definitions

### <a name="Aspect"></a> Aspect (`Aspect`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The aspect's identifier. An unique, increasing integer. | <a href="#Aspect/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Aspect/translations">See details</a>

#### <a name="Aspect/id"></a> `id`

The aspect's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Aspect/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Aspect/translations[key]">Aspect/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Aspect/translations[key]"></a> `Aspect/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The aspect name. | <a href="#Aspect/translations[key]/name">See details</a>
`master_of_aspect_suffix?` | The aspect's name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*. | <a href="#Aspect/translations[key]/master_of_aspect_suffix">See details</a>

#### <a name="Aspect/translations[key]/name"></a> `name`

The aspect name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Aspect/translations[key]/master_of_aspect_suffix"></a> `master_of_aspect_suffix?`

The aspect's name appended to the simple name (not `name_in_library`)
of the special ability *Master of (Aspect)*.

- **Type:** String
- **Minimum Length:** `1`
