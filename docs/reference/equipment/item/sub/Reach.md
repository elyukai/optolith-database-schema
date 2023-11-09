# Reach

## Definitions

### <a name="Reach"></a> Reach (`Reach`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The reach's identifier. An unique, increasing integer. | <a href="#Reach/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Reach/translations">See details</a>

#### <a name="Reach/id"></a> `id`

The reach's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Reach/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../../../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ReachTranslation">ReachTranslation</a>&gt;

---

### <a name="ReachTranslation"></a> `ReachTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the reach. | <a href="#ReachTranslation/name">See details</a>

#### <a name="ReachTranslation/name"></a> `name`

The name of the reach.

- **Type:** <a href="../../../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
