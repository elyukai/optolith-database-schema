# Optional Rule

## Definitions

### <a name="OptionalRule"></a> Optional Rule (`OptionalRule`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The optional rule's identifier. An unique, increasing integer. | <a href="#OptionalRule/id">See details</a>
`relevance` | The relevance of the optional rule for Optolith. It may be that it influences character creating but it may also just influnce the character sheet. If it is linked to systems in Optolith, it may be specified if this rule has not been implemented in Optolith yet. | <a href="#OptionalRule/relevance">See details</a>
`src` |  | <a href="#OptionalRule/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#OptionalRule/translations">See details</a>

#### <a name="OptionalRule/id"></a> `id`

The optional rule's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="OptionalRule/relevance"></a> `relevance`

The relevance of the optional rule for Optolith. It may be that it
influences character creating but it may also just influnce the character
sheet. If it is linked to systems in Optolith, it may be specified if this
rule has not been implemented in Optolith yet.

- **Type:** <a href="#Relevance">Relevance</a>

#### <a name="OptionalRule/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="OptionalRule/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#OptionalRule/translations[key]">OptionalRule/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="OptionalRule/translations[key]"></a> `OptionalRule/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the optional rule. | <a href="#OptionalRule/translations[key]/name">See details</a>
`description` | The description of the optional rule. | <a href="#OptionalRule/translations[key]/description">See details</a>
`errata?` |  | <a href="#OptionalRule/translations[key]/errata">See details</a>

#### <a name="OptionalRule/translations[key]/name"></a> `name`

The name of the optional rule.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="OptionalRule/translations[key]/description"></a> `description`

The description of the optional rule.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="OptionalRule/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Relevance"></a> `Relevance`

The relevance of the optional rule for Optolith. It may be that it influences
character creating but it may also just influnce the character sheet. If it
is linked to systems in Optolith, it may be specified if this rule has not
been implemented in Optolith yet.

- **Type:** Union
- **Cases:** <a href="#Relevance'Extraneous">Relevance'Extraneous</a> | <a href="#Relevance'Linked">Relevance'Linked</a>

---

### <a name="Relevance'Extraneous"></a> `Relevance'Extraneous`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Relevance'Extraneous/tag">See details</a>

#### <a name="Relevance'Extraneous/tag"></a> `tag`

- **Constant:** `"Extraneous"`

---

### <a name="Relevance'Linked"></a> `Relevance'Linked`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Relevance'Linked/tag">See details</a>
`isMissingImplementation?` | Does the optional rule have an impact on character creation or character sheet and this effect has not been implemented in Optolith yet? If `true`, the optional rule cannot be activated. | <a href="#Relevance'Linked/isMissingImplementation">See details</a>

#### <a name="Relevance'Linked/tag"></a> `tag`

- **Constant:** `"Linked"`

#### <a name="Relevance'Linked/isMissingImplementation"></a> `isMissingImplementation?`

Does the optional rule have an impact on character creation or character
sheet and this effect has not been implemented in Optolith yet? If
`true`, the optional rule cannot be activated.

- **Type:** Boolean
