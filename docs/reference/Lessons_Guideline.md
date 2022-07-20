# Guideline

## Definitions

### <a name="Guideline"></a> Guideline (`Guideline`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The region's identifier. An unique, increasing integer. | <a href="#Guideline/id">See details</a>
`spellwork_changes_allowed` | Maximum number of spells that can be exchanged. | <a href="#Guideline/spellwork_changes_allowed">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Guideline/translations">See details</a>

#### <a name="Guideline/id"></a> `id`

The region's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Guideline/spellwork_changes_allowed"></a> `spellwork_changes_allowed`

Maximum number of spells that can be exchanged.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="Guideline/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Guideline/translations[key]">Guideline/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Guideline/translations[key]"></a> `Guideline/translations[key]`

- **Type:** <a href="#GuidelineTranslation">GuidelineTranslation</a>

---

### <a name="GuidelineTranslation"></a> `GuidelineTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The guideline name. | <a href="#GuidelineTranslation/name">See details</a>

#### <a name="GuidelineTranslation/name"></a> `name`

The guideline name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
