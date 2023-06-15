# Talisman

## Definitions

### <a name="Talisman"></a> Talisman (`Talisman`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The talisman's identifier. An unique, increasing integer. | <a href="#Talisman/id">See details</a>
`tradition` | The tradition(s) the talisman belongs to. | <a href="#Talisman/tradition">See details</a>
`type?` | The talisman type, if any. | <a href="#Talisman/type">See details</a>
`ap_value?` | The AP value for the required trade secret, if possible. | <a href="#Talisman/ap_value">See details</a>
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

#### <a name="Talisman/type"></a> `type?`

The talisman type, if any.

- **Type:** <a href="#TalismanType">TalismanType</a>

#### <a name="Talisman/ap_value"></a> `ap_value?`

The AP value for the required trade secret, if possible.

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

- **Type:** <a href="./_SimpleReferences.md#BlessedTraditionReference">BlessedTraditionReference</a>

---

### <a name="Talisman/translations[key]"></a> `Talisman/translations[key]`

- **Type:** <a href="#TalismanTranslation">TalismanTranslation</a>

---

### <a name="TalismanType"></a> `TalismanType`

- **Type:** Union
- **Cases:** <a href="#TalismanType'0">TalismanType'0</a> | <a href="#TalismanType'1">TalismanType'1</a> | <a href="#TalismanType'2">TalismanType'2</a> | <a href="#TalismanType'3">TalismanType'3</a> | <a href="#TalismanType'4">TalismanType'4</a>

---

### <a name="TalismanType'0"></a> `TalismanType'0`

- **Constant:** `"MainTalisman"`

---

### <a name="TalismanType'1"></a> `TalismanType'1`

- **Constant:** `"Talisman"`

---

### <a name="TalismanType'2"></a> `TalismanType'2`

- **Constant:** `"MinorTalisman"`

---

### <a name="TalismanType'3"></a> `TalismanType'3`

- **Constant:** `"Regalia"`

---

### <a name="TalismanType'4"></a> `TalismanType'4`

- **Constant:** `"PowerfulTalisman"`

---

### <a name="TalismanTranslation"></a> `TalismanTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the talisman. | <a href="#TalismanTranslation/name">See details</a>
`effect` | The effect description. | <a href="#TalismanTranslation/effect">See details</a>
`activation?` | The activation parameters. | <a href="#TalismanTranslation/activation">See details</a>
`errata?` |  | <a href="#TalismanTranslation/errata">See details</a>

#### <a name="TalismanTranslation/name"></a> `name`

The name of the talisman.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="TalismanTranslation/effect"></a> `effect`

The effect description.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="TalismanTranslation/activation"></a> `activation?`

The activation parameters.

- **Type:** <a href="#TalismanActivationTranslation">TalismanActivationTranslation</a>

#### <a name="TalismanTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="TalismanActivationTranslation"></a> `TalismanActivationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The KP cost. | <a href="#TalismanActivationTranslation/cost">See details</a>
`duration` | The duration. | <a href="#TalismanActivationTranslation/duration">See details</a>

#### <a name="TalismanActivationTranslation/cost"></a> `cost`

The KP cost.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="TalismanActivationTranslation/duration"></a> `duration`

The duration.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
