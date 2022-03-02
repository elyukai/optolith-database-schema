# Condition

## Definitions

### <a name="Condition"></a> Condition (`Condition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The condition's identifier. An unique, increasing integer. | <a href="#Condition/id">See details</a>
`src` |  | <a href="#Condition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Condition/translations">See details</a>

#### <a name="Condition/id"></a> `id`

The condition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Condition/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Condition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Condition/translations[key]">Condition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Condition/translations[key]"></a> `Condition/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The condition's name. | <a href="#Condition/translations[key]/name">See details</a>
`rules?` | Additional rules for the condition, if applicable. | <a href="#Condition/translations[key]/rules">See details</a>
`effects` | The effects for level 1 to 4. | <a href="#Condition/translations[key]/effects">See details</a>
`errata?` |  | <a href="#Condition/translations[key]/errata">See details</a>

#### <a name="Condition/translations[key]/name"></a> `name`

The condition's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Condition/translations[key]/rules"></a> `rules?`

Additional rules for the condition, if applicable.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Condition/translations[key]/effects"></a> `effects`

The effects for level 1 to 4.

- **Type:** Tuple
- **Items:** [<a href="Condition/translations[key]/effects[0]">Condition/translations[key]/effects[0]</a>, <a href="Condition/translations[key]/effects[1]">Condition/translations[key]/effects[1]</a>, <a href="Condition/translations[key]/effects[2]">Condition/translations[key]/effects[2]</a>, <a href="Condition/translations[key]/effects[3]">Condition/translations[key]/effects[3]</a>]

#### <a name="Condition/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Condition/translations[key]/effects[0]"></a> `Condition/translations[key]/effects[0]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="Condition/translations[key]/effects[1]"></a> `Condition/translations[key]/effects[1]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="Condition/translations[key]/effects[2]"></a> `Condition/translations[key]/effects[2]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="Condition/translations[key]/effects[3]"></a> `Condition/translations[key]/effects[3]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="Effect"></a> `Effect`

The effect on a level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`
