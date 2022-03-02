# Focus Rule

## Definitions

### <a name="FocusRule"></a> Focus Rule (`FocusRule`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The focus rule's identifier. An unique, increasing integer. | <a href="#FocusRule/id">See details</a>
`subject_id` | The focus rule's subject's identifier. | <a href="#FocusRule/subject_id">See details</a>
`level` | The focus rule's level. | <a href="#FocusRule/level">See details</a>
`src` |  | <a href="#FocusRule/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FocusRule/translations">See details</a>

#### <a name="FocusRule/id"></a> `id`

The focus rule's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FocusRule/subject_id"></a> `subject_id`

The focus rule's subject's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FocusRule/level"></a> `level`

The focus rule's level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

#### <a name="FocusRule/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FocusRule/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FocusRule/translations[key]">FocusRule/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FocusRule/translations[key]"></a> `FocusRule/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the focus rule. | <a href="#FocusRule/translations[key]/name">See details</a>
`description` | The description of the focus rule. | <a href="#FocusRule/translations[key]/description">See details</a>
`errata?` |  | <a href="#FocusRule/translations[key]/errata">See details</a>

#### <a name="FocusRule/translations[key]/name"></a> `name`

The name of the focus rule.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="FocusRule/translations[key]/description"></a> `description`

The description of the focus rule.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="FocusRule/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
