# [TITLE MISSING]

## Definitions

### <a name="Effect"></a> `Effect`

The effect description may be either a plain text or a text that is divided
by a list of effects for each quality level. It may also be a list for each
two quality levels.

- **Type:** Union
- **Cases:** <a href="#Effect'Plain">Effect'Plain</a> | <a href="#Effect'ForEachQualityLevel">Effect'ForEachQualityLevel</a> | <a href="#Effect'ForEachTwoQualityLevels">Effect'ForEachTwoQualityLevels</a>

---

### <a name="Effect'Plain"></a> `Effect'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Effect'Plain/tag">See details</a>
`plain` |  | <a href="#Effect'Plain/plain">See details</a>

#### <a name="Effect'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Effect'Plain/plain"></a> `plain`

- **Type:** <a href="#PlainEffect">PlainEffect</a>

---

### <a name="Effect'ForEachQualityLevel"></a> `Effect'ForEachQualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Effect'ForEachQualityLevel/tag">See details</a>
`for_each_quality_level` |  | <a href="#Effect'ForEachQualityLevel/for_each_quality_level">See details</a>

#### <a name="Effect'ForEachQualityLevel/tag"></a> `tag`

- **Constant:** `"ForEachQualityLevel"`

#### <a name="Effect'ForEachQualityLevel/for_each_quality_level"></a> `for_each_quality_level`

- **Type:** <a href="#EffectForEachQualityLevel">EffectForEachQualityLevel</a>

---

### <a name="Effect'ForEachTwoQualityLevels"></a> `Effect'ForEachTwoQualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Effect'ForEachTwoQualityLevels/tag">See details</a>
`for_each_two_quality_levels` |  | <a href="#Effect'ForEachTwoQualityLevels/for_each_two_quality_levels">See details</a>

#### <a name="Effect'ForEachTwoQualityLevels/tag"></a> `tag`

- **Constant:** `"ForEachTwoQualityLevels"`

#### <a name="Effect'ForEachTwoQualityLevels/for_each_two_quality_levels"></a> `for_each_two_quality_levels`

- **Type:** <a href="#EffectForEachTwoQualityLevels">EffectForEachTwoQualityLevels</a>

---

### <a name="PlainEffect"></a> `PlainEffect`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text` | The effect description. | <a href="#PlainEffect/text">See details</a>

#### <a name="PlainEffect/text"></a> `text`

The effect description.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel"></a> `EffectForEachQualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text_before` | The effect description before the list of effects for each quality level. | <a href="#EffectForEachQualityLevel/text_before">See details</a>
`quality_levels` | The list of effects for each quality level. The first element represents QL 1, the second element QL 2, and so on. | <a href="#EffectForEachQualityLevel/quality_levels">See details</a>
`text_after?` | The effect description after the list of effects for each quality level. | <a href="#EffectForEachQualityLevel/text_after">See details</a>

#### <a name="EffectForEachQualityLevel/text_before"></a> `text_before`

The effect description before the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="EffectForEachQualityLevel/quality_levels"></a> `quality_levels`

The list of effects for each quality level. The first element
represents QL 1, the second element QL 2, and so on.

- **Type:** Tuple
- **Items:** [<a href="EffectForEachQualityLevel/quality_levels[0]">EffectForEachQualityLevel/quality_levels[0]</a>, <a href="EffectForEachQualityLevel/quality_levels[1]">EffectForEachQualityLevel/quality_levels[1]</a>, <a href="EffectForEachQualityLevel/quality_levels[2]">EffectForEachQualityLevel/quality_levels[2]</a>, <a href="EffectForEachQualityLevel/quality_levels[3]">EffectForEachQualityLevel/quality_levels[3]</a>, <a href="EffectForEachQualityLevel/quality_levels[4]">EffectForEachQualityLevel/quality_levels[4]</a>, <a href="EffectForEachQualityLevel/quality_levels[5]">EffectForEachQualityLevel/quality_levels[5]</a>]

#### <a name="EffectForEachQualityLevel/text_after"></a> `text_after?`

The effect description after the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel/quality_levels[0]"></a> `EffectForEachQualityLevel/quality_levels[0]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel/quality_levels[1]"></a> `EffectForEachQualityLevel/quality_levels[1]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel/quality_levels[2]"></a> `EffectForEachQualityLevel/quality_levels[2]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel/quality_levels[3]"></a> `EffectForEachQualityLevel/quality_levels[3]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel/quality_levels[4]"></a> `EffectForEachQualityLevel/quality_levels[4]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachQualityLevel/quality_levels[5]"></a> `EffectForEachQualityLevel/quality_levels[5]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachTwoQualityLevels"></a> `EffectForEachTwoQualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`text_before` | The effect description before the list of effects for each quality level. | <a href="#EffectForEachTwoQualityLevels/text_before">See details</a>
`quality_levels` | The list of effects for each two quality levels. The first element represents QL 1–2, the second element QL 3–4 and the third element QL 5–6. | <a href="#EffectForEachTwoQualityLevels/quality_levels">See details</a>
`text_after?` | The effect description after the list of effects for each quality level. | <a href="#EffectForEachTwoQualityLevels/text_after">See details</a>

#### <a name="EffectForEachTwoQualityLevels/text_before"></a> `text_before`

The effect description before the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="EffectForEachTwoQualityLevels/quality_levels"></a> `quality_levels`

The list of effects for each two quality levels. The first element
represents QL 1–2, the second element QL 3–4 and the third element QL
5–6.

- **Type:** Tuple
- **Items:** [<a href="EffectForEachTwoQualityLevels/quality_levels[0]">EffectForEachTwoQualityLevels/quality_levels[0]</a>, <a href="EffectForEachTwoQualityLevels/quality_levels[1]">EffectForEachTwoQualityLevels/quality_levels[1]</a>, <a href="EffectForEachTwoQualityLevels/quality_levels[2]">EffectForEachTwoQualityLevels/quality_levels[2]</a>]

#### <a name="EffectForEachTwoQualityLevels/text_after"></a> `text_after?`

The effect description after the list of effects for each quality
level.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachTwoQualityLevels/quality_levels[0]"></a> `EffectForEachTwoQualityLevels/quality_levels[0]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachTwoQualityLevels/quality_levels[1]"></a> `EffectForEachTwoQualityLevels/quality_levels[1]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="EffectForEachTwoQualityLevels/quality_levels[2]"></a> `EffectForEachTwoQualityLevels/quality_levels[2]`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
