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
`group` | The skill group this skill belongs to. | <a href="#Skill/group">See details</a>
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

Lists applications for the skill, if any. This does not necessarily include
all possible applications. There may also be new applications that could be
purchased via certain advantages or special abilities.

- **Type:** <a href="#Applications">Applications</a>

#### <a name="Skill/encumbrance"></a> `encumbrance`

Indicates whether encumbrance gives a penalty for checks with the skill.

- **Type:** <a href="#Encumbrance">Encumbrance</a>

#### <a name="Skill/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Skill/group"></a> `group`

The skill group this skill belongs to.

- **Type:** <a href="./_SimpleReferences.md#SkillGroupReference">SkillGroupReference</a>

#### <a name="Skill/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Skill/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SkillTranslation">SkillTranslation</a>&gt;

---

### <a name="SkillTranslation"></a> `SkillTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the skill. | <a href="#SkillTranslation/name">See details</a>
`applications_input_label?` | If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty. | <a href="#SkillTranslation/applications_input_label">See details</a>
`encumbrance_description?` | The text listing the certain circumstances in which the encumbrance may count. This text must be used if `encumbrance` is set to `"Maybe"`, otherwise it is ignored if defined. | <a href="#SkillTranslation/encumbrance_description">See details</a>
`tools?` | Mentions any tools from the equipment list that are necessary to employ the skill. | <a href="#SkillTranslation/tools">See details</a>
`quality` | Gives examples of the effects that various QL might provide. | <a href="#SkillTranslation/quality">See details</a>
`failed` | Lists examples of results for a failed check. | <a href="#SkillTranslation/failed">See details</a>
`critical` | Lists examples of results for a critical success. | <a href="#SkillTranslation/critical">See details</a>
`botch` | Lists examples of results for botches. | <a href="#SkillTranslation/botch">See details</a>
`errata?` |  | <a href="#SkillTranslation/errata">See details</a>

#### <a name="SkillTranslation/name"></a> `name`

The name of the skill.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SkillTranslation/applications_input_label"></a> `applications_input_label?`

If there are options available that can not be put into a selection
list (like different cults), provide the label text for the input
element here. Otherwise leave empty.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SkillTranslation/encumbrance_description"></a> `encumbrance_description?`

The text listing the certain circumstances in which the encumbrance may
count. This text must be used if `encumbrance` is set to `"Maybe"`,
otherwise it is ignored if defined.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SkillTranslation/tools"></a> `tools?`

Mentions any tools from the equipment list that are necessary to employ
the skill.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="SkillTranslation/quality"></a> `quality`

Gives examples of the effects that various QL might provide.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="SkillTranslation/failed"></a> `failed`

Lists examples of results for a failed check.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="SkillTranslation/critical"></a> `critical`

Lists examples of results for a critical success.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="SkillTranslation/botch"></a> `botch`

Lists examples of results for botches.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="SkillTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ApplicationCategory"></a> `ApplicationCategory`

A category. All available entries from the specified category will be
included as separate applications.

- **Type:** Union
- **Cases:** <a href="#ApplicationCategory'0">ApplicationCategory'0</a> | <a href="#ApplicationCategory'1">ApplicationCategory'1</a> | <a href="#ApplicationCategory'2">ApplicationCategory'2</a>

---

### <a name="ApplicationCategory'0"></a> `ApplicationCategory'0`

- **Constant:** `"BlessedTraditions"`

---

### <a name="ApplicationCategory'1"></a> `ApplicationCategory'1`

- **Constant:** `"Diseases"`

---

### <a name="ApplicationCategory'2"></a> `ApplicationCategory'2`

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
`derived` |  | <a href="#Applications'Derived/derived">See details</a>

#### <a name="Applications'Derived/tag"></a> `tag`

- **Constant:** `"Derived"`

#### <a name="Applications'Derived/derived"></a> `derived`

- **Type:** <a href="#ApplicationCategory">ApplicationCategory</a>

---

### <a name="Applications'Explicit"></a> `Applications'Explicit`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Applications'Explicit/tag">See details</a>
`explicit` |  | <a href="#Applications'Explicit/explicit">See details</a>

#### <a name="Applications'Explicit/tag"></a> `tag`

- **Constant:** `"Explicit"`

#### <a name="Applications'Explicit/explicit"></a> `explicit`

- **Type:** <a href="#SpecificApplications">SpecificApplications</a>

---

### <a name="SpecificApplications"></a> `SpecificApplications`

A list of explicit applications.

- **Type:** List
- **Items:** <a href="#SpecificApplications[]">SpecificApplications[]</a>

---

### <a name="SpecificApplications[]"></a> `SpecificApplications[]`

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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ApplicationTranslation">ApplicationTranslation</a>&gt;

---

### <a name="ApplicationTranslation"></a> `ApplicationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The skill application's name. | <a href="#ApplicationTranslation/name">See details</a>

#### <a name="ApplicationTranslation/name"></a> `name`

The skill application's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="Encumbrance"></a> `Encumbrance`

Indicates whether encumbrance gives a penalty for checks with the skill.

- **Type:** Union
- **Cases:** <a href="#Encumbrance'0">Encumbrance'0</a> | <a href="#Encumbrance'1">Encumbrance'1</a> | <a href="#Encumbrance'2">Encumbrance'2</a>

---

### <a name="Encumbrance'0"></a> `Encumbrance'0`

- **Constant:** `"True"`

---

### <a name="Encumbrance'1"></a> `Encumbrance'1`

- **Constant:** `"False"`

---

### <a name="Encumbrance'2"></a> `Encumbrance'2`

- **Constant:** `"Maybe"`
