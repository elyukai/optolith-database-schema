# Focus Rule

## Definitions

### <a name="FocusRule"></a> Focus Rule (`FocusRule`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The focus rule's identifier. An unique, increasing integer. | <a href="#FocusRule/id">See details</a>
`subject` | The associated subject. | <a href="#FocusRule/subject">See details</a>
`level` | The focus rule's level. | <a href="#FocusRule/level">See details</a>
`is_missing_implementation` | Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature. | <a href="#FocusRule/is_missing_implementation">See details</a>
`src` |  | <a href="#FocusRule/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FocusRule/translations">See details</a>

#### <a name="FocusRule/id"></a> `id`

The focus rule's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FocusRule/subject"></a> `subject`

The associated subject.

- **Type:** <a href="../_SimpleReferences.md#FocusRuleSubjectReference">FocusRuleSubjectReference</a>

#### <a name="FocusRule/level"></a> `level`

The focus rule's level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

#### <a name="FocusRule/is_missing_implementation"></a> `is_missing_implementation`

Has the focus rule not been implemented in Optolith yet? This is also true
if the focus rule does not (currently) apply to any Optolith feature.

- **Type:** Boolean

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

- **Type:** <a href="#FocusRuleTranslation">FocusRuleTranslation</a>

---

### <a name="FocusRuleTranslation"></a> `FocusRuleTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the focus rule. | <a href="#FocusRuleTranslation/name">See details</a>
`description` | The description of the focus rule. | <a href="#FocusRuleTranslation/description">See details</a>
`errata?` |  | <a href="#FocusRuleTranslation/errata">See details</a>

#### <a name="FocusRuleTranslation/name"></a> `name`

The name of the focus rule.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="FocusRuleTranslation/description"></a> `description`

The description of the focus rule.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="FocusRuleTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
