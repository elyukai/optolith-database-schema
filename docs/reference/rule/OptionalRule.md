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

- **Type:** <a href="./_Rule.md#Relevance">Relevance</a>

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

- **Type:** <a href="#OptionalRuleTranslation">OptionalRuleTranslation</a>

---

### <a name="OptionalRuleTranslation"></a> `OptionalRuleTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the optional rule. | <a href="#OptionalRuleTranslation/name">See details</a>
`description` | The description of the optional rule. | <a href="#OptionalRuleTranslation/description">See details</a>
`errata?` |  | <a href="#OptionalRuleTranslation/errata">See details</a>

#### <a name="OptionalRuleTranslation/name"></a> `name`

The name of the optional rule.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="OptionalRuleTranslation/description"></a> `description`

The description of the optional rule.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="OptionalRuleTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
