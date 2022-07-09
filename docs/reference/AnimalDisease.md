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

Depending on the disease, apply Spirit or Toughness as a penalty to the
disease roll. It may also happen that the lower of both is applied as a
penalty.

- **Type:** <a href="./_Disease.md#Resistance">Resistance</a>

#### <a name="AnimalDisease/cause"></a> `cause`

What causes the disease? The GM rolls 1D20 to see if a character gets
infected. If the infection check succeeds, the GM makes a disease check to
determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#AnimalDisease/cause[]">AnimalDisease/cause[]</a>
- **Minimum Items:** `1`

#### <a name="AnimalDisease/animal_types"></a> `animal_types`

The animal types this disease applies to.

- **Type:** <a href="#AnimalTypes">AnimalTypes</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures"></a> `communicability_to_intelligent_creatures`

If and at which chance the disease can be communicated to intelligent
creatures.

- **Type:** <a href="#CommunicabilityToIntelligentCreatures">CommunicabilityToIntelligentCreatures</a>

#### <a name="AnimalDisease/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimalDisease/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalDisease/translations[key]">AnimalDisease/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalDisease/cause[]"></a> `AnimalDisease/cause[]`

- **Type:** <a href="./_Disease.md#Cause">Cause</a>

---

### <a name="AnimalDisease/translations[key]"></a> `AnimalDisease/translations[key]`

- **Type:** <a href="./_Disease.md#DiseaseTranslation">DiseaseTranslation</a>

---

### <a name="AnimalTypes"></a> `AnimalTypes`

The animal types this disease applies to.

- **Type:** Union
- **Cases:** <a href="#AnimalTypes'All">AnimalTypes'All</a> | <a href="#AnimalTypes'Specific">AnimalTypes'Specific</a>

---

### <a name="AnimalTypes'All"></a> `AnimalTypes'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalTypes'All/tag">See details</a>

#### <a name="AnimalTypes'All/tag"></a> `tag`

- **Constant:** `"All"`

---

### <a name="AnimalTypes'Specific"></a> `AnimalTypes'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalTypes'Specific/tag">See details</a>
`list` | The list of specific animal types this disease applies to. | <a href="#AnimalTypes'Specific/list">See details</a>

#### <a name="AnimalTypes'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="AnimalTypes'Specific/list"></a> `list`

The list of specific animal types this disease applies to.

- **Type:** List
- **Items:** <a href="#AnimalTypes'Specific/list[]">AnimalTypes'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalTypes'Specific/list[]"></a> `AnimalTypes'Specific/list[]`

- **Type:** <a href="#AnimalType">AnimalType</a>

---

### <a name="AnimalType"></a> `AnimalType`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal type's identifier. | <a href="#AnimalType/id">See details</a>

#### <a name="AnimalType/id"></a> `id`

The animal type's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CommunicabilityToIntelligentCreatures"></a> `CommunicabilityToIntelligentCreatures`

If and at which chance the disease can be communicated to intelligent
creatures.

- **Type:** Union
- **Cases:** <a href="#CommunicabilityToIntelligentCreatures'NonCommunicable">CommunicabilityToIntelligentCreatures'NonCommunicable</a> | <a href="#CommunicabilityToIntelligentCreatures'Communicable">CommunicabilityToIntelligentCreatures'Communicable</a>

---

### <a name="CommunicabilityToIntelligentCreatures'NonCommunicable"></a> `CommunicabilityToIntelligentCreatures'NonCommunicable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommunicabilityToIntelligentCreatures'NonCommunicable/tag">See details</a>

#### <a name="CommunicabilityToIntelligentCreatures'NonCommunicable/tag"></a> `tag`

- **Constant:** `"NonCommunicable"`

---

### <a name="CommunicabilityToIntelligentCreatures'Communicable"></a> `CommunicabilityToIntelligentCreatures'Communicable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommunicabilityToIntelligentCreatures'Communicable/tag">See details</a>
`cause` | What causes the communication? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection. | <a href="#CommunicabilityToIntelligentCreatures'Communicable/cause">See details</a>

#### <a name="CommunicabilityToIntelligentCreatures'Communicable/tag"></a> `tag`

- **Constant:** `"Communicable"`

#### <a name="CommunicabilityToIntelligentCreatures'Communicable/cause"></a> `cause`

What causes the communication? The GM rolls 1D20 to see if a character
gets infected. If the infection check succeeds, the GM makes a disease
check to determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#CommunicabilityToIntelligentCreatures'Communicable/cause[]">CommunicabilityToIntelligentCreatures'Communicable/cause[]</a>
- **Minimum Items:** `1`

---

### <a name="CommunicabilityToIntelligentCreatures'Communicable/cause[]"></a> `CommunicabilityToIntelligentCreatures'Communicable/cause[]`

- **Type:** <a href="./_Disease.md#Cause">Cause</a>
