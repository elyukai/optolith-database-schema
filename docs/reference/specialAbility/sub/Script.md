# Script

## Definitions

### <a name="Script"></a> Script (`Script`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The script's identifier. An unique, increasing integer. | <a href="#Script/id">See details</a>
`ap_value` | The script's adventure point value. | <a href="#Script/ap_value">See details</a>
`associated_languages` | A list of languages that use this script. | <a href="#Script/associated_languages">See details</a>
`continent` | The continents this script is present on. | <a href="#Script/continent">See details</a>
`src` |  | <a href="#Script/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Script/translations">See details</a>

#### <a name="Script/id"></a> `id`

The script's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Script/ap_value"></a> `ap_value`

The script's adventure point value.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

#### <a name="Script/associated_languages"></a> `associated_languages`

A list of languages that use this script.

- **Type:** List
- **Items:** <a href="#Script/associated_languages[]">Script/associated_languages[]</a>

#### <a name="Script/continent"></a> `continent`

The continents this script is present on.

- **Type:** List
- **Items:** <a href="#Script/continent[]">Script/continent[]</a>
- **Minimum Items:** `1`

#### <a name="Script/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Script/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ScriptTranslation">ScriptTranslation</a>&gt;

---

### <a name="Script/associated_languages[]"></a> `Script/associated_languages[]`

- **Type:** <a href="../../_SimpleReferences.md#LanguageReference">LanguageReference</a>

---

### <a name="Script/continent[]"></a> `Script/continent[]`

- **Type:** <a href="./_LanguageScript.md#AssociatedContinent">AssociatedContinent</a>

---

### <a name="ScriptTranslation"></a> `ScriptTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the language. | <a href="#ScriptTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#ScriptTranslation/alternative_names">See details</a>
`alphabet?` | The description of the alphabet. | <a href="#ScriptTranslation/alphabet">See details</a>
`errata?` |  | <a href="#ScriptTranslation/errata">See details</a>

#### <a name="ScriptTranslation/name"></a> `name`

The name of the language.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ScriptTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#ScriptTranslation/alternative_names[]">ScriptTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="ScriptTranslation/alphabet"></a> `alphabet?`

The description of the alphabet.

- **Type:** <a href="../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ScriptTranslation/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ScriptTranslation/alternative_names[]"></a> `ScriptTranslation/alternative_names[]`

- **Type:** <a href="../../_AlternativeNames.md#AlternativeName">AlternativeName</a>
