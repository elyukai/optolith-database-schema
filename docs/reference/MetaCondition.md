# Meta Condition

Meta Conditions are rule elements that work like conditions in the sense that
they have four levels with different effects, but which are not explicitly
listed as conditions.

## Definitions

### <a name="MetaCondition"></a> Meta Condition (`MetaCondition`)

Meta Conditions are rule elements that work like conditions in the sense that
they have four levels with different effects, but which are not explicitly
listed as conditions.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The meta condition's identifier. An unique, increasing integer. | <a href="#MetaCondition/id">See details</a>
`src` |  | <a href="#MetaCondition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MetaCondition/translations">See details</a>

#### <a name="MetaCondition/id"></a> `id`

The meta condition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MetaCondition/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MetaCondition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MetaCondition/translations[key]">MetaCondition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MetaCondition/translations[key]"></a> `MetaCondition/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The meta condition's name. | <a href="#MetaCondition/translations[key]/name">See details</a>
`rules?` | Additional rules for the meta condition, if applicable. | <a href="#MetaCondition/translations[key]/rules">See details</a>
`effects` | The effects for level 1 to 4. | <a href="#MetaCondition/translations[key]/effects">See details</a>
`errata?` |  | <a href="#MetaCondition/translations[key]/errata">See details</a>

#### <a name="MetaCondition/translations[key]/name"></a> `name`

The meta condition's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="MetaCondition/translations[key]/rules"></a> `rules?`

Additional rules for the meta condition, if applicable.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="MetaCondition/translations[key]/effects"></a> `effects`

The effects for level 1 to 4.

- **Type:** Tuple
- **Items:** [<a href="MetaCondition/translations[key]/effects[0]">MetaCondition/translations[key]/effects[0]</a>, <a href="MetaCondition/translations[key]/effects[1]">MetaCondition/translations[key]/effects[1]</a>, <a href="MetaCondition/translations[key]/effects[2]">MetaCondition/translations[key]/effects[2]</a>, <a href="MetaCondition/translations[key]/effects[3]">MetaCondition/translations[key]/effects[3]</a>]

#### <a name="MetaCondition/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="MetaCondition/translations[key]/effects[0]"></a> `MetaCondition/translations[key]/effects[0]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="MetaCondition/translations[key]/effects[1]"></a> `MetaCondition/translations[key]/effects[1]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="MetaCondition/translations[key]/effects[2]"></a> `MetaCondition/translations[key]/effects[2]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="MetaCondition/translations[key]/effects[3]"></a> `MetaCondition/translations[key]/effects[3]`

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="Effect"></a> `Effect`

The effect on a level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`
