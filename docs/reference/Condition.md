# Condition

## Definitions

### <a name="Condition"></a> Condition (`Condition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The condition's identifier. An unique, increasing integer. | <a href="#Condition/id">See details</a>
`src` |  | <a href="#Condition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Condition/translations">See details</a>

#### <a name="Condition/id"></a> `id`

The condition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Condition/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Condition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Condition/translations[key]">Condition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Condition/translations[key]"></a> `Condition/translations[key]`

- **Type:** <a href="#ConditionTranslation">ConditionTranslation</a>

---

### <a name="ConditionTranslation"></a> `ConditionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The condition's name. | <a href="#ConditionTranslation/name">See details</a>
`rules?` | Additional rules for the condition, if applicable. | <a href="#ConditionTranslation/rules">See details</a>
`effects` | The effects for level 1 to 4. | <a href="#ConditionTranslation/effects">See details</a>
`errata?` |  | <a href="#ConditionTranslation/errata">See details</a>

#### <a name="ConditionTranslation/name"></a> `name`

The condition's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ConditionTranslation/rules"></a> `rules?`

Additional rules for the condition, if applicable.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ConditionTranslation/effects"></a> `effects`

The effects for level 1 to 4.

- **Type:** Tuple
- **Items:** [<a href="ConditionTranslation/effects[0]">ConditionTranslation/effects[0]</a>, <a href="ConditionTranslation/effects[1]">ConditionTranslation/effects[1]</a>, <a href="ConditionTranslation/effects[2]">ConditionTranslation/effects[2]</a>, <a href="ConditionTranslation/effects[3]">ConditionTranslation/effects[3]</a>]

#### <a name="ConditionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ConditionTranslation/effects[0]"></a> `ConditionTranslation/effects[0]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ConditionTranslation/effects[1]"></a> `ConditionTranslation/effects[1]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ConditionTranslation/effects[2]"></a> `ConditionTranslation/effects[2]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ConditionTranslation/effects[3]"></a> `ConditionTranslation/effects[3]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
