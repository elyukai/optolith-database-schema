# Condition

## Definitions

### <a name="Condition"></a> Condition

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#Condition/id">See details</a>
`src` |  | <a href="#Condition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Condition/translations">See details</a>

#### <a name="Condition/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Condition/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Condition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Translation"></a> Translation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the condition. | <a href="#Translation/name">See details</a>
`rules?` | Additional rules for the condition, if applicable. | <a href="#Translation/rules">See details</a>
`effects` | The effects for level 1 to 4. | <a href="#Translation/effects">See details</a>
`errata?` |  | <a href="#Translation/errata">See details</a>

#### <a name="Translation/name"></a> `name`

The name of the condition.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/rules"></a> `rules?`

Additional rules for the condition, if applicable.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/effects"></a> `effects`

The effects for level 1 to 4.

- **Type:** <a href="#Effects">Effects</a>

#### <a name="Translation/errata"></a> `errata?`

- **Type:** <a href="./_Erratum.md#Errata">Errata</a>

---

### <a name="Effects"></a> Effects

The effects on levels 1 to 4.

- **Type:** Tuple

#### Index 0

- **Type:** <a href="#Effect">Effect</a>

#### Index 1

- **Type:** <a href="#Effect">Effect</a>

#### Index 2

- **Type:** <a href="#Effect">Effect</a>

#### Index 3

- **Type:** <a href="#Effect">Effect</a>

---

### <a name="Effect"></a> Effect

The effect on a level.

- **Type:** String
- **Minimum Length:** `1`
