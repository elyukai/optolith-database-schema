# Skill

## Definitions

### <a name="Skill"></a> Skill (`Skill`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. An unique, increasing integer. | <a href="#Skill/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Skill/check">See details</a>
`applications` | Lists applications for the skill, if any. This does not necessarily include all possible applications. There may also be new applications that could be purchased via certain advantages or special abilities. | <a href="#Skill/applications">See details</a>
`encumbrance` | Indicates whether encumbrance gives a penalty for checks with the skill. | <a href="#Skill/encumbrance">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#Skill/improvement_cost">See details</a>
`group_id` | The identifier of the skill group this skill belongs to. | <a href="#Skill/group_id">See details</a>
`src` |  | <a href="#Skill/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Skill/translations">See details</a>

#### <a name="Skill/id"></a> `id`

The skill's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Skill/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Skill/applications"></a> `applications`

Lists applications for the skill, if any. This does not necessarily include all possible applications. There may also be new applications that could be purchased via certain advantages or special abilities.

- **Type:** <a href="#Applications">Applications</a>

#### <a name="Skill/encumbrance"></a> `encumbrance`

Indicates whether encumbrance gives a penalty for checks with the skill.

- **Type:** <a href="#Encumbrance">Encumbrance</a>

#### <a name="Skill/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Skill/group_id"></a> `group_id`

The identifier of the skill group this skill belongs to.

- **Type:** Number

#### <a name="Skill/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Skill/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Skill/translations[key]">Skill/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Skill/translations[key]"></a> `Skill/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the skill. | <a href="#Skill/translations[key]/name">See details</a>
`applications_input_label?` | If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty. | <a href="#Skill/translations[key]/applications_input_label">See details</a>
`encumbrance_description?` | The text listing the certain circumstances in which the encumbrance may count. This text must be used if `encumbrance` is set to `"Maybe"`, otherwise it is ignored if defined. | <a href="#Skill/translations[key]/encumbrance_description">See details</a>
`tools?` | Mentions any tools from the equipment list that are necessary to employ the skill. | <a href="#Skill/translations[key]/tools">See details</a>
`quality` | Gives examples of the effects that various QL might provide. | <a href="#Skill/translations[key]/quality">See details</a>
`failed` | Lists examples of results for a failed check. | <a href="#Skill/translations[key]/failed">See details</a>
`critical` | Lists examples of results for a critical success. | <a href="#Skill/translations[key]/critical">See details</a>
`botch` | Lists examples of results for botches. | <a href="#Skill/translations[key]/botch">See details</a>
`errata?` |  | <a href="#Skill/translations[key]/errata">See details</a>

#### <a name="Skill/translations[key]/name"></a> `name`

The name of the skill.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/applications_input_label"></a> `applications_input_label?`

If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/encumbrance_description"></a> `encumbrance_description?`

The text listing the certain circumstances in which the encumbrance may count. This text must be used if `encumbrance` is set to `"Maybe"`, otherwise it is ignored if defined.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/tools"></a> `tools?`

Mentions any tools from the equipment list that are necessary to employ the skill.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/quality"></a> `quality`

Gives examples of the effects that various QL might provide.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/failed"></a> `failed`

Lists examples of results for a failed check.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/critical"></a> `critical`

Lists examples of results for a critical success.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/botch"></a> `botch`

Lists examples of results for botches.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Skill/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ApplicationCategory"></a> `ApplicationCategory`

A category. All available entries from the specified category will be included as separate applications.

- **Type:** Union
- **Cases:** <a href="#ApplicationCategory'BlessedTraditions">ApplicationCategory'BlessedTraditions</a> | <a href="#ApplicationCategory'Diseases">ApplicationCategory'Diseases</a> | <a href="#ApplicationCategory'Regions">ApplicationCategory'Regions</a>

---

### <a name="ApplicationCategory'BlessedTraditions"></a> `ApplicationCategory'BlessedTraditions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicationCategory'BlessedTraditions/tag">See details</a>

#### <a name="ApplicationCategory'BlessedTraditions/tag"></a> `tag`

- **Constant:** `"BlessedTraditions"`

---

### <a name="ApplicationCategory'Diseases"></a> `ApplicationCategory'Diseases`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicationCategory'Diseases/tag">See details</a>

#### <a name="ApplicationCategory'Diseases/tag"></a> `tag`

- **Constant:** `"Diseases"`

---

### <a name="ApplicationCategory'Regions"></a> `ApplicationCategory'Regions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicationCategory'Regions/tag">See details</a>

#### <a name="ApplicationCategory'Regions/tag"></a> `tag`

- **Constant:** `"Regions"`

---

### <a name="Applications"></a> `Applications`

The skill's applications.

- **Type:** Union
- **Cases:** <a href="#Applications'Derived">Applications'Derived</a> | <a href="#Applications'Explicit">Applications'Explicit</a>

---

### <a name="Applications'Derived"></a> `Applications'Derived`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Applications'Derived/tag">See details</a>
`category` | A category. All available entries from the specified category will be included as separate applications. | <a href="#Applications'Derived/category">See details</a>

#### <a name="Applications'Derived/tag"></a> `tag`

- **Constant:** `"Derived"`

#### <a name="Applications'Derived/category"></a> `category`

A category. All available entries from the specified category will be included as separate applications.

- **Type:** <a href="#ApplicationCategory">ApplicationCategory</a>

---

### <a name="Applications'Explicit"></a> `Applications'Explicit`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Applications'Explicit/tag">See details</a>
`list` | A list of explicit applications. | <a href="#Applications'Explicit/list">See details</a>

#### <a name="Applications'Explicit/tag"></a> `tag`

- **Constant:** `"Explicit"`

#### <a name="Applications'Explicit/list"></a> `list`

A list of explicit applications.

- **Type:** List
- **Items:** <a href="#Applications'Explicit/list[]">Applications'Explicit/list[]</a>

---

### <a name="Applications'Explicit/list[]"></a> `Applications'Explicit/list[]`

- **Type:** <a href="#Application">Application</a>

---

### <a name="Application"></a> `Application`

An explicit skill application.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill application's identifier. An unique, increasing integer. | <a href="#Application/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Application/translations">See details</a>

#### <a name="Application/id"></a> `id`

The skill application's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Application/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Application/translations[key]">Application/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Application/translations[key]"></a> `Application/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The skill application's name. | <a href="#Application/translations[key]/name">See details</a>

#### <a name="Application/translations[key]/name"></a> `name`

The skill application's name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Encumbrance"></a> `Encumbrance`

Indicates whether encumbrance gives a penalty for checks with the skill.

- **Type:** Union
- **Cases:** <a href="#Encumbrance'True">Encumbrance'True</a> | <a href="#Encumbrance'False">Encumbrance'False</a> | <a href="#Encumbrance'Maybe">Encumbrance'Maybe</a>

---

### <a name="Encumbrance'True"></a> `Encumbrance'True`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Encumbrance'True/tag">See details</a>

#### <a name="Encumbrance'True/tag"></a> `tag`

- **Constant:** `"True"`

---

### <a name="Encumbrance'False"></a> `Encumbrance'False`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Encumbrance'False/tag">See details</a>

#### <a name="Encumbrance'False/tag"></a> `tag`

- **Constant:** `"False"`

---

### <a name="Encumbrance'Maybe"></a> `Encumbrance'Maybe`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Encumbrance'Maybe/tag">See details</a>

#### <a name="Encumbrance'Maybe/tag"></a> `tag`

- **Constant:** `"Maybe"`
