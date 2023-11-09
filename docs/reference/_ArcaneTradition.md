# Arcane Tradition

## Definitions

### <a name="ArcaneTradition"></a> Arcane Tradition (`ArcaneTradition`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The arcane tradition's identifier. An unique, increasing integer. | <a href="#ArcaneTradition/id">See details</a>
`prerequisites` |  | <a href="#ArcaneTradition/prerequisites">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneTradition/translations">See details</a>

#### <a name="ArcaneTradition/id"></a> `id`

The arcane tradition's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneTradition/prerequisites"></a> `prerequisites`

- **Type:** <a href="./_Prerequisite.md#ArcaneTraditionPrerequisites">ArcaneTraditionPrerequisites</a>

#### <a name="ArcaneTradition/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ArcaneTraditionTranslation">ArcaneTraditionTranslation</a>&gt;

---

### <a name="ArcaneTraditionTranslation"></a> `ArcaneTraditionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The arcane tradition's name. | <a href="#ArcaneTraditionTranslation/name">See details</a>

#### <a name="ArcaneTraditionTranslation/name"></a> `name`

The arcane tradition's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
