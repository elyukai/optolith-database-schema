# Talisman

## Definitions

### <a name="Talisman"></a> Talisman (`Talisman`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The talisman's identifier. An unique, increasing integer. | <a href="#Talisman/id">See details</a>
`tradition` | The tradition(s) the talisman belongs to. | <a href="#Talisman/tradition">See details</a>
`type` | The talisman type. | <a href="#Talisman/type">See details</a>
`ap_value` | The AP value for the required trade secret. | <a href="#Talisman/ap_value">See details</a>
`src` |  | <a href="#Talisman/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Talisman/translations">See details</a>

#### <a name="Talisman/id"></a> `id`

The talisman's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Talisman/tradition"></a> `tradition`

The tradition(s) the talisman belongs to.

- **Type:** List
- **Items:** <a href="#Talisman/tradition[]">Talisman/tradition[]</a>
- **Minimum Items:** `1`

#### <a name="Talisman/type"></a> `type`

The talisman type.

- **Type:** Union
- **Cases:** <a href="#Talisman/type'MainTalisman">Talisman/type'MainTalisman</a> | <a href="#Talisman/type'Talisman">Talisman/type'Talisman</a> | <a href="#Talisman/type'MinorTalisman">Talisman/type'MinorTalisman</a> | <a href="#Talisman/type'Regalia">Talisman/type'Regalia</a> | <a href="#Talisman/type'PowerfulTalisman">Talisman/type'PowerfulTalisman</a>

#### <a name="Talisman/ap_value"></a> `ap_value`

The AP value for the required trade secret.

- **Type:** Integer
- **Minimum:** `5`
- **Multiple of:** `5`

#### <a name="Talisman/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Talisman/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Talisman/translations[key]">Talisman/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Talisman/tradition[]"></a> `Talisman/tradition[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The blessed traditions's identifier. | <a href="#Talisman/tradition[]/id">See details</a>

#### <a name="Talisman/tradition[]/id"></a> `id`

The blessed traditions's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Talisman/type'MainTalisman"></a> `Talisman/type'MainTalisman`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Talisman/type'MainTalisman/tag">See details</a>

#### <a name="Talisman/type'MainTalisman/tag"></a> `tag`

- **Constant:** `"MainTalisman"`

---

### <a name="Talisman/type'Talisman"></a> `Talisman/type'Talisman`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Talisman/type'Talisman/tag">See details</a>

#### <a name="Talisman/type'Talisman/tag"></a> `tag`

- **Constant:** `"Talisman"`

---

### <a name="Talisman/type'MinorTalisman"></a> `Talisman/type'MinorTalisman`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Talisman/type'MinorTalisman/tag">See details</a>

#### <a name="Talisman/type'MinorTalisman/tag"></a> `tag`

- **Constant:** `"MinorTalisman"`

---

### <a name="Talisman/type'Regalia"></a> `Talisman/type'Regalia`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Talisman/type'Regalia/tag">See details</a>

#### <a name="Talisman/type'Regalia/tag"></a> `tag`

- **Constant:** `"Regalia"`

---

### <a name="Talisman/type'PowerfulTalisman"></a> `Talisman/type'PowerfulTalisman`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Talisman/type'PowerfulTalisman/tag">See details</a>

#### <a name="Talisman/type'PowerfulTalisman/tag"></a> `tag`

- **Constant:** `"PowerfulTalisman"`

---

### <a name="Talisman/translations[key]"></a> `Talisman/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the talisman. | <a href="#Talisman/translations[key]/name">See details</a>
`description` | The effect description. | <a href="#Talisman/translations[key]/description">See details</a>
`activation` | The activation parameters. | <a href="#Talisman/translations[key]/activation">See details</a>
`errata?` |  | <a href="#Talisman/translations[key]/errata">See details</a>

#### <a name="Talisman/translations[key]/name"></a> `name`

The name of the talisman.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Talisman/translations[key]/description"></a> `description`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Talisman/translations[key]/activation"></a> `activation`

The activation parameters.

- **Type:** <a href="#Talisman/translations[key]/activation">Object</a>

#### <a name="Talisman/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Talisman/translations[key]/activation"></a> `Talisman/translations[key]/activation`

The activation parameters.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The KP cost. | <a href="#Talisman/translations[key]/activation/cost">See details</a>
`duration` | The duration. | <a href="#Talisman/translations[key]/activation/duration">See details</a>

#### <a name="Talisman/translations[key]/activation/cost"></a> `cost`

The KP cost.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Talisman/translations[key]/activation/duration"></a> `duration`

The duration.

- **Type:** String
- **Minimum Length:** `1`
