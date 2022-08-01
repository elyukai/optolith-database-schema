# [TITLE MISSING]

## Definitions

### <a name="TextPrerequisite"></a> Text Prerequisite (`TextPrerequisite`)

A prerequisite that is either not verifyable in general – e.g. roleplay or
background information – or the referenced entities were not made available
for use yet – e.g. races –, but which should be displayed, because it is part
of the prerequisite string from the sources.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`verification` | The method how the prerequisite should be verified. Either is passes all verification text or it denies all verification tests. The latter results in the associated entry to never be available for purchase. | <a href="#TextPrerequisite/verification">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TextPrerequisite/translations">See details</a>

#### <a name="TextPrerequisite/verification"></a> `verification`

The method how the prerequisite should be verified. Either is passes all
verification text or it denies all verification tests. The latter results
in the associated entry to never be available for purchase.

- **Type:** <a href="#TextVerificationRule">TextVerificationRule</a>

#### <a name="TextPrerequisite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TextPrerequisite/translations[key]">TextPrerequisite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TextPrerequisite/translations[key]"></a> `TextPrerequisite/translations[key]`

- **Type:** <a href="#TextPrerequisiteTranslation">TextPrerequisiteTranslation</a>

---

### <a name="TextVerificationRule"></a> `TextVerificationRule`

- **Possible values:** `"Pass"`, `"Deny"`

---

### <a name="TextPrerequisiteTranslation"></a> `TextPrerequisiteTranslation`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
