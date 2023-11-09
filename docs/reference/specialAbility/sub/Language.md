# Language

## Definitions

### <a name="Language"></a> Language (`Language`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The language's identifier. An unique, increasing integer. | <a href="#Language/id">See details</a>
`continent` | The continents this language is present on. | <a href="#Language/continent">See details</a>
`specializations?` | Language-specific specializations. Either a list of possible options or a indefinite description of what may be a specialization. | <a href="#Language/specializations">See details</a>
`prerequisites?` |  | <a href="#Language/prerequisites">See details</a>
`max_level?` | The maximum possible level of the language. Only specified if lower than default of 3. | <a href="#Language/max_level">See details</a>
`src` |  | <a href="#Language/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Language/translations">See details</a>

#### <a name="Language/id"></a> `id`

The language's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Language/continent"></a> `continent`

The continents this language is present on.

- **Type:** List
- **Items:** <a href="#Language/continent[]">Language/continent[]</a>
- **Minimum Items:** `1`

#### <a name="Language/specializations"></a> `specializations?`

Language-specific specializations. Either a list of possible options or a
indefinite description of what may be a specialization.

- **Type:** <a href="#Specializations">Specializations</a>

#### <a name="Language/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../../_Prerequisite.md#LanguagePrerequisites">LanguagePrerequisites</a>

#### <a name="Language/max_level"></a> `max_level?`

The maximum possible level of the language. Only specified if lower than
default of 3.

- **Type:** Number
- **Default:** `3`
- **Minimum:** `1`
- **Maximum:** `2`

#### <a name="Language/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Language/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#LanguageTranslation">LanguageTranslation</a>&gt;

---

### <a name="Language/continent[]"></a> `Language/continent[]`

- **Type:** <a href="./_LanguageScript.md#AssociatedContinent">AssociatedContinent</a>

---

### <a name="Specializations"></a> `Specializations`

- **Type:** Union
- **Cases:** <a href="#Specializations'Specific">Specializations'Specific</a> | <a href="#Specializations'Indefinite">Specializations'Indefinite</a>

---

### <a name="Specializations'Specific"></a> `Specializations'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Specializations'Specific/tag">See details</a>
`specific` |  | <a href="#Specializations'Specific/specific">See details</a>

#### <a name="Specializations'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="Specializations'Specific/specific"></a> `specific`

- **Type:** <a href="#SpecificSpecializations">SpecificSpecializations</a>

---

### <a name="Specializations'Indefinite"></a> `Specializations'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Specializations'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#Specializations'Indefinite/indefinite">See details</a>

#### <a name="Specializations'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="Specializations'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteSpecializations">IndefiniteSpecializations</a>

---

### <a name="SpecificSpecializations"></a> `SpecificSpecializations`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | A list of specific possible specializations. | <a href="#SpecificSpecializations/list">See details</a>

#### <a name="SpecificSpecializations/list"></a> `list`

A list of specific possible specializations.

- **Type:** List
- **Items:** <a href="#SpecificSpecializations/list[]">SpecificSpecializations/list[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecificSpecializations/list[]"></a> `SpecificSpecializations/list[]`

- **Type:** <a href="#SpecificSpecialization">SpecificSpecialization</a>

---

### <a name="SpecificSpecialization"></a> `SpecificSpecialization`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The specialization's identifier. An unique, increasing integer. | <a href="#SpecificSpecialization/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpecificSpecialization/translations">See details</a>

#### <a name="SpecificSpecialization/id"></a> `id`

The specialization's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpecificSpecialization/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SpecificSpecializationTranslation">SpecificSpecializationTranslation</a>&gt;

---

### <a name="SpecificSpecializationTranslation"></a> `SpecificSpecializationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the specialization. | <a href="#SpecificSpecializationTranslation/name">See details</a>
`description?` | The specialization description. It will be appended to the name in parenthesis. | <a href="#SpecificSpecializationTranslation/description">See details</a>

#### <a name="SpecificSpecializationTranslation/name"></a> `name`

The name of the specialization.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SpecificSpecializationTranslation/description"></a> `description?`

The specialization description. It will be appended to the name in
parenthesis.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="IndefiniteSpecializations"></a> `IndefiniteSpecializations`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteSpecializations/translations">See details</a>

#### <a name="IndefiniteSpecializations/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#IndefiniteSpecializationsTranslation">IndefiniteSpecializationsTranslation</a>&gt;

---

### <a name="IndefiniteSpecializationsTranslation"></a> `IndefiniteSpecializationsTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | The specializations description. | <a href="#IndefiniteSpecializationsTranslation/description">See details</a>
`label?` | An input label or placeholder text for an UI element if it differs from the `description`. | <a href="#IndefiniteSpecializationsTranslation/label">See details</a>

#### <a name="IndefiniteSpecializationsTranslation/description"></a> `description`

The specializations description.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="IndefiniteSpecializationsTranslation/label"></a> `label?`

An input label or placeholder text for an UI element if it differs
from the `description`.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="LanguageTranslation"></a> `LanguageTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the language. | <a href="#LanguageTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#LanguageTranslation/alternative_names">See details</a>
`description?` | The description of the language. | <a href="#LanguageTranslation/description">See details</a>
`errata?` |  | <a href="#LanguageTranslation/errata">See details</a>

#### <a name="LanguageTranslation/name"></a> `name`

The name of the language.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="LanguageTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#LanguageTranslation/alternative_names[]">LanguageTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="LanguageTranslation/description"></a> `description?`

The description of the language.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="LanguageTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="LanguageTranslation/alternative_names[]"></a> `LanguageTranslation/alternative_names[]`

- **Type:** <a href="../../_AlternativeNames.md#AlternativeName">AlternativeName</a>
