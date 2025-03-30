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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ConditionTranslation">ConditionTranslation</a>&gt;

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

- **Type:** List
- **Items:** <a href="#ConditionTranslation/effects[]">ConditionTranslation/effects[]</a>
- **Minimum Items:** `4`
- **Maximum Items:** `4`

#### <a name="ConditionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ConditionTranslation/effects[]"></a> `ConditionTranslation/effects[]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
