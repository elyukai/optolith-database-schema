# Disease

## Definitions

### <a name="Disease"></a> Disease (`Disease`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The disease's identifier. An unique, increasing integer. | <a href="#Disease/id">See details</a>
`level` | The disease's level. | <a href="#Disease/level">See details</a>
`resistance` | Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty. | <a href="#Disease/resistance">See details</a>
`cause` | What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection. | <a href="#Disease/cause">See details</a>
`src` |  | <a href="#Disease/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Disease/translations">See details</a>

#### <a name="Disease/id"></a> `id`

The disease's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Disease/level"></a> `level`

The disease's level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Disease/resistance"></a> `resistance`

Depending on the disease, apply Spirit or Toughness as a penalty to the
disease roll. It may also happen that the lower of both is applied as a
penalty.

- **Type:** <a href="./_Disease.md#Resistance">Resistance</a>

#### <a name="Disease/cause"></a> `cause`

What causes the disease? The GM rolls 1D20 to see if a character gets
infected. If the infection check succeeds, the GM makes a disease check to
determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#Disease/cause[]">Disease/cause[]</a>
- **Minimum Items:** `1`

#### <a name="Disease/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Disease/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Disease/translations[key]">Disease/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Disease/cause[]"></a> `Disease/cause[]`

- **Type:** <a href="./_Disease.md#Cause">Cause</a>

---

### <a name="Disease/translations[key]"></a> `Disease/translations[key]`

- **Type:** <a href="./_Disease.md#DiseaseTranslation">DiseaseTranslation</a>
