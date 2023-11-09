# Subject

Subjects or Subject Areas are the categories of Focus Rules.

## Definitions

### <a name="Subject"></a> Subject (`Subject`)

Subjects or Subject Areas are the categories of Focus Rules.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The subject's identifier. An unique, increasing integer. | <a href="#Subject/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Subject/translations">See details</a>

#### <a name="Subject/id"></a> `id`

The subject's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Subject/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SubjectTranslation">SubjectTranslation</a>&gt;

---

### <a name="SubjectTranslation"></a> `SubjectTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The subject. | <a href="#SubjectTranslation/name">See details</a>

#### <a name="SubjectTranslation/name"></a> `name`

The subject.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
