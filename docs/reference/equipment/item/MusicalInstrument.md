# [TITLE MISSING]

## Definitions

### <a name="MusicalInstrument"></a> `MusicalInstrument`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The cost in silverthalers. | <a href="#MusicalInstrument/cost">See details</a>
`weight` | The weight in kg. | <a href="#MusicalInstrument/weight">See details</a>
`src` |  | <a href="#MusicalInstrument/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MusicalInstrument/translations">See details</a>

#### <a name="MusicalInstrument/cost"></a> `cost`

The cost in silverthalers.

- **Type:** <a href="./_Item.md#Cost">Cost</a>

#### <a name="MusicalInstrument/weight"></a> `weight`

The weight in kg.

- **Type:** <a href="./_Item.md#Weight">Weight</a>

#### <a name="MusicalInstrument/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MusicalInstrument/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MusicalInstrument/translations[key]">MusicalInstrument/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MusicalInstrument/translations[key]"></a> `MusicalInstrument/translations[key]`

- **Type:** <a href="./_Item.md#DefaultItemTranslation">DefaultItemTranslation</a>
