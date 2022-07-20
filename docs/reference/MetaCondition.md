# Meta Condition

Meta Conditions are rule elements that work like conditions in the sense that
they have four levels with different effects, but which are not explicitly
listed as conditions.

## Definitions

### <a name="MetaCondition"></a> Meta Condition (`MetaCondition`)

Meta Conditions are rule elements that work like conditions in the sense that
they have four levels with different effects, but which are not explicitly
listed as conditions.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The meta condition's identifier. An unique, increasing integer. | <a href="#MetaCondition/id">See details</a>
`src` |  | <a href="#MetaCondition/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MetaCondition/translations">See details</a>

#### <a name="MetaCondition/id"></a> `id`

The meta condition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MetaCondition/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MetaCondition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MetaCondition/translations[key]">MetaCondition/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MetaCondition/translations[key]"></a> `MetaCondition/translations[key]`

- **Type:** <a href="#MetaConditionTranslation">MetaConditionTranslation</a>

---

### <a name="MetaConditionTranslation"></a> `MetaConditionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The meta condition's name. | <a href="#MetaConditionTranslation/name">See details</a>
`rules?` | Additional rules for the meta condition, if applicable. | <a href="#MetaConditionTranslation/rules">See details</a>
`effects` | The effects for level 1 to 4. | <a href="#MetaConditionTranslation/effects">See details</a>
`errata?` |  | <a href="#MetaConditionTranslation/errata">See details</a>

#### <a name="MetaConditionTranslation/name"></a> `name`

The meta condition's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MetaConditionTranslation/rules"></a> `rules?`

Additional rules for the meta condition, if applicable.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="MetaConditionTranslation/effects"></a> `effects`

The effects for level 1 to 4.

- **Type:** Tuple
- **Items:** [<a href="MetaConditionTranslation/effects[0]">MetaConditionTranslation/effects[0]</a>, <a href="MetaConditionTranslation/effects[1]">MetaConditionTranslation/effects[1]</a>, <a href="MetaConditionTranslation/effects[2]">MetaConditionTranslation/effects[2]</a>, <a href="MetaConditionTranslation/effects[3]">MetaConditionTranslation/effects[3]</a>]

#### <a name="MetaConditionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="MetaConditionTranslation/effects[0]"></a> `MetaConditionTranslation/effects[0]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="MetaConditionTranslation/effects[1]"></a> `MetaConditionTranslation/effects[1]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="MetaConditionTranslation/effects[2]"></a> `MetaConditionTranslation/effects[2]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="MetaConditionTranslation/effects[3]"></a> `MetaConditionTranslation/effects[3]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
