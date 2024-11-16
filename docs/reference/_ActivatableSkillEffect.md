# [TITLE MISSING]

## Definitions

### <a name="ActivatableSkillEffect"></a> `ActivatableSkillEffect`

The effect description may be either a plain text or a text that is divided
by a list of effects for each quality level. It may also be a list for each
two quality levels.

- **Type:** Union
- **Cases:** <a href="#ActivatableSkillEffect'Plain">ActivatableSkillEffect'Plain</a> | <a href="#ActivatableSkillEffect'ForEachQualityLevel">ActivatableSkillEffect'ForEachQualityLevel</a> | <a href="#ActivatableSkillEffect'ForEachTwoQualityLevels">ActivatableSkillEffect'ForEachTwoQualityLevels</a>

---

### <a name="ActivatableSkillEffect'Plain"></a> `ActivatableSkillEffect'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ActivatableSkillEffect'Plain/tag">See details</a>
`plain` |  | <a href="#ActivatableSkillEffect'Plain/plain">See details</a>

#### <a name="ActivatableSkillEffect'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="ActivatableSkillEffect'Plain/plain"></a> `plain`

- **Type:** <a href="#ActivatableSkillPlainEffect">ActivatableSkillPlainEffect</a>

---

### <a name="ActivatableSkillEffect'ForEachQualityLevel"></a> `ActivatableSkillEffect'ForEachQualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ActivatableSkillEffect'ForEachQualityLevel/tag">See details</a>
`for_each_quality_level` |  | <a href="#ActivatableSkillEffect'ForEachQualityLevel/for_each_quality_level">See details</a>

#### <a name="ActivatableSkillEffect'ForEachQualityLevel/tag"></a> `tag`

- **Constant:** `"ForEachQualityLevel"`

#### <a name="ActivatableSkillEffect'ForEachQualityLevel/for_each_quality_level"></a> `for_each_quality_level`

- **Type:** <a href="#ActivatableSkillEffectForEachQualityLevel">ActivatableSkillEffectForEachQualityLevel</a>

---

### <a name="ActivatableSkillEffect'ForEachTwoQualityLevels"></a> `ActivatableSkillEffect'ForEachTwoQualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ActivatableSkillEffect'ForEachTwoQualityLevels/tag">See details</a>
`for_each_two_quality_levels` |  | <a href="#ActivatableSkillEffect'ForEachTwoQualityLevels/for_each_two_quality_levels">See details</a>

#### <a name="ActivatableSkillEffect'ForEachTwoQualityLevels/tag"></a> `tag`

- **Constant:** `"ForEachTwoQualityLevels"`

#### <a name="ActivatableSkillEffect'ForEachTwoQualityLevels/for_each_two_quality_levels"></a> `for_each_two_quality_levels`

- **Type:** <a href="#ActivatableSkillEffectForEachTwoQualityLevels">ActivatableSkillEffectForEachTwoQualityLevels</a>

---

### <a name="ActivatableSkillPlainEffect"></a> `ActivatableSkillPlainEffect`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text` | The effect description. | <a href="#ActivatableSkillPlainEffect/text">See details</a>

#### <a name="ActivatableSkillPlainEffect/text"></a> `text`

The effect description.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ActivatableSkillEffectForEachQualityLevel"></a> `ActivatableSkillEffectForEachQualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text_before` | The effect description before the list of effects for each quality level. | <a href="#ActivatableSkillEffectForEachQualityLevel/text_before">See details</a>
`quality_levels` | The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on. | <a href="#ActivatableSkillEffectForEachQualityLevel/quality_levels">See details</a>
`text_after?` | The effect description after the list of effects for each quality level. | <a href="#ActivatableSkillEffectForEachQualityLevel/text_after">See details</a>

#### <a name="ActivatableSkillEffectForEachQualityLevel/text_before"></a> `text_before`

The effect description before the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ActivatableSkillEffectForEachQualityLevel/quality_levels"></a> `quality_levels`

The list of effects for each quality level. The first element
represents QL 1, the second element QL 2, and so on.

- **Type:** List
- **Items:** <a href="#ActivatableSkillEffectForEachQualityLevel/quality_levels[]">ActivatableSkillEffectForEachQualityLevel/quality_levels[]</a>

#### <a name="ActivatableSkillEffectForEachQualityLevel/text_after"></a> `text_after?`

The effect description after the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ActivatableSkillEffectForEachQualityLevel/quality_levels[]"></a> `ActivatableSkillEffectForEachQualityLevel/quality_levels[]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ActivatableSkillEffectForEachTwoQualityLevels"></a> `ActivatableSkillEffectForEachTwoQualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text_before` | The effect description before the list of effects for each quality level. | <a href="#ActivatableSkillEffectForEachTwoQualityLevels/text_before">See details</a>
`quality_levels` | The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6. | <a href="#ActivatableSkillEffectForEachTwoQualityLevels/quality_levels">See details</a>
`text_after?` | The effect description after the list of effects for each quality level. | <a href="#ActivatableSkillEffectForEachTwoQualityLevels/text_after">See details</a>

#### <a name="ActivatableSkillEffectForEachTwoQualityLevels/text_before"></a> `text_before`

The effect description before the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ActivatableSkillEffectForEachTwoQualityLevels/quality_levels"></a> `quality_levels`

The list of effects for each two quality levels. The first element
represents QL 1–2, the second element QL 3–4 and the third element QL
5–6.

- **Type:** List
- **Items:** <a href="#ActivatableSkillEffectForEachTwoQualityLevels/quality_levels[]">ActivatableSkillEffectForEachTwoQualityLevels/quality_levels[]</a>

#### <a name="ActivatableSkillEffectForEachTwoQualityLevels/text_after"></a> `text_after?`

The effect description after the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="ActivatableSkillEffectForEachTwoQualityLevels/quality_levels[]"></a> `ActivatableSkillEffectForEachTwoQualityLevels/quality_levels[]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
