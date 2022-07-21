# Reach

## Definitions

### <a name="Reach"></a> Reach (`Reach`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The reach's identifier. An unique, increasing integer. | <a href="#Reach/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Reach/translations">See details</a>

#### <a name="Reach/id"></a> `id`

The reach's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Reach/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Reach/translations[key]">Reach/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Reach/translations[key]"></a> `Reach/translations[key]`

- **Type:** <a href="#ReachTranslation">ReachTranslation</a>

---

### <a name="ReachTranslation"></a> `ReachTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the reach. | <a href="#ReachTranslation/name">See details</a>

#### <a name="ReachTranslation/name"></a> `name`

The name of the reach.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
