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
`sentence_type?` | If the text is a sentence or sentence-like fragment, this property ensures it is integrated into the prerequisite string correctly. | <a href="#TextPrerequisite/sentence_type">See details</a>
`is_meta?` | If the text does not represent an actual prerequisite but a prerequisite for the use of certain aspects or the entry the prerequisite is associated with, or something like that, this property is set to `true`. | <a href="#TextPrerequisite/is_meta">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TextPrerequisite/translations">See details</a>

#### <a name="TextPrerequisite/verification"></a> `verification`

The method how the prerequisite should be verified. Either is passes all
verification text or it denies all verification tests. The latter results
in the associated entry to never be available for purchase.

- **Type:** <a href="#TextVerificationRule">TextVerificationRule</a>

#### <a name="TextPrerequisite/sentence_type"></a> `sentence_type?`

If the text is a sentence or sentence-like fragment, this property ensures
it is integrated into the prerequisite string correctly.

A standalone sentence is connected to the previous prerequisite string with
a period and a period is also added at the end of the sentence
automatically, if it is not present. A connected sentence is connected to
the previous prerequisite string with a semicolon and a period is not added
to the end of the sentence. In this case, if there are prerequisites after
this one, they will be connected using a semicolon again, unless a
different punctuation mark is present at the end of the given text.

- **Type:** <a href="#SentenceType">SentenceType</a>

#### <a name="TextPrerequisite/is_meta"></a> `is_meta?`

If the text does not represent an actual prerequisite but a prerequisite
for the use of certain aspects or the entry the prerequisite is associated
with, or something like that, this property is set to `true`.

If all prerequisites of an entry are marked as meta, the entry is
considered to have no prerequisites and thus the string `none` must be
rendered before the list of meta prerequisites.

This is the only use case for this property.

- **Constant:** `true`

#### <a name="TextPrerequisite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#TextPrerequisiteTranslation">TextPrerequisiteTranslation</a>&gt;

---

### <a name="TextVerificationRule"></a> `TextVerificationRule`

- **Type:** Union
- **Cases:** <a href="#TextVerificationRule'0">TextVerificationRule'0</a> | <a href="#TextVerificationRule'1">TextVerificationRule'1</a>

---

### <a name="TextVerificationRule'0"></a> `TextVerificationRule'0`

- **Constant:** `"Pass"`

---

### <a name="TextVerificationRule'1"></a> `TextVerificationRule'1`

- **Constant:** `"Deny"`

---

### <a name="SentenceType"></a> `SentenceType`

- **Type:** Union
- **Cases:** <a href="#SentenceType'0">SentenceType'0</a> | <a href="#SentenceType'1">SentenceType'1</a>

---

### <a name="SentenceType'0"></a> `SentenceType'0`

- **Constant:** `"Standalone"`

---

### <a name="SentenceType'1"></a> `SentenceType'1`

- **Constant:** `"Connected"`

---

### <a name="TextPrerequisiteTranslation"></a> `TextPrerequisiteTranslation`

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
