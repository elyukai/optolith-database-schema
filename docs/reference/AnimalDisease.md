# Animal Disease

## Definitions

### <a name="AnimalDisease"></a> Animal Disease (`AnimalDisease`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal disease's identifier. An unique, increasing integer. | <a href="#AnimalDisease/id">See details</a>
`level` | The animal disease's level. | <a href="#AnimalDisease/level">See details</a>
`resistance` | Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty. | <a href="#AnimalDisease/resistance">See details</a>
`cause` | What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection. | <a href="#AnimalDisease/cause">See details</a>
`animal_types` | The animal types this disease applies to. | <a href="#AnimalDisease/animal_types">See details</a>
`communicability_to_intelligent_creatures` | If and at which chance the disease can be communicated to intelligent creatures. | <a href="#AnimalDisease/communicability_to_intelligent_creatures">See details</a>
`src` |  | <a href="#AnimalDisease/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalDisease/translations">See details</a>

#### <a name="AnimalDisease/id"></a> `id`

The animal disease's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalDisease/level"></a> `level`

The animal disease's level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalDisease/resistance"></a> `resistance`

Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty.

- **Type:** <a href="./_DiseasePoison.md#Resistance">Resistance</a>

#### <a name="AnimalDisease/cause"></a> `cause`

What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#AnimalDisease/cause[]">AnimalDisease/cause[]</a>
- **Minimum Items:** `1`

#### <a name="AnimalDisease/animal_types"></a> `animal_types`

The animal types this disease applies to.

If no animal types are given, the animal disease applies to all animal types.

- **Type:** List
- **Items:** <a href="#AnimalDisease/animal_types[]">AnimalDisease/animal_types[]</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures"></a> `communicability_to_intelligent_creatures`

If and at which chance the disease can be communicated to intelligent creatures.

If no causes are given, the disease is not communicable to intelligent creatures.

- **Type:** List
- **Items:** <a href="#AnimalDisease/communicability_to_intelligent_creatures[]">AnimalDisease/communicability_to_intelligent_creatures[]</a>

#### <a name="AnimalDisease/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimalDisease/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="./_DiseasePoison.md#DiseaseTranslation">DiseaseTranslation</a>&gt;

---

### <a name="AnimalDisease/cause[]"></a> `AnimalDisease/cause[]`

- **Type:** <a href="./_DiseasePoison.md#Cause">Cause</a>

---

### <a name="AnimalDisease/animal_types[]"></a> `AnimalDisease/animal_types[]`

- **Type:** <a href="./_SimpleReferences.md#AnimalTypeReference">AnimalTypeReference</a>

---

### <a name="AnimalDisease/communicability_to_intelligent_creatures[]"></a> `AnimalDisease/communicability_to_intelligent_creatures[]`

- **Type:** <a href="./_DiseasePoison.md#Cause">Cause</a>
