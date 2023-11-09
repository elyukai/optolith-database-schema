# Experience Level

Adventure Points and maximum values at hero creation.

## Definitions

### <a name="ExperienceLevel"></a> Experience Level (`ExperienceLevel`)

Adventure Points and maximum values at hero creation.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#ExperienceLevel/id">See details</a>
`adventure_points` | The AP value you get. | <a href="#ExperienceLevel/adventure_points">See details</a>
`max_attribute_value` | The highest possible attribute value. | <a href="#ExperienceLevel/max_attribute_value">See details</a>
`max_skill_rating` | The highest possible skill rating. | <a href="#ExperienceLevel/max_skill_rating">See details</a>
`max_combat_technique_rating` | The highest possible combat technique rating. | <a href="#ExperienceLevel/max_combat_technique_rating">See details</a>
`max_attribute_total` | The limit for the sum of all attribute values. | <a href="#ExperienceLevel/max_attribute_total">See details</a>
`max_number_of_spells_liturgical_chants` | The maximum of spells/chants you can activate. | <a href="#ExperienceLevel/max_number_of_spells_liturgical_chants">See details</a>
`max_number_of_unfamiliar_spells` | The maximum of spells of an unfamiliar tradition you can activate. | <a href="#ExperienceLevel/max_number_of_unfamiliar_spells">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExperienceLevel/translations">See details</a>

#### <a name="ExperienceLevel/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExperienceLevel/adventure_points"></a> `adventure_points`

The AP value you get.

- **Type:** Integer

#### <a name="ExperienceLevel/max_attribute_value"></a> `max_attribute_value`

The highest possible attribute value.

- **Type:** Integer

#### <a name="ExperienceLevel/max_skill_rating"></a> `max_skill_rating`

The highest possible skill rating.

- **Type:** Integer

#### <a name="ExperienceLevel/max_combat_technique_rating"></a> `max_combat_technique_rating`

The highest possible combat technique rating.

- **Type:** Integer

#### <a name="ExperienceLevel/max_attribute_total"></a> `max_attribute_total`

The limit for the sum of all attribute values.

- **Type:** Integer

#### <a name="ExperienceLevel/max_number_of_spells_liturgical_chants"></a> `max_number_of_spells_liturgical_chants`

The maximum of spells/chants you can activate.

- **Type:** Integer

#### <a name="ExperienceLevel/max_number_of_unfamiliar_spells"></a> `max_number_of_unfamiliar_spells`

The maximum of spells of an unfamiliar tradition you can activate.

- **Type:** Integer

#### <a name="ExperienceLevel/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ExperienceLevelTranslation">ExperienceLevelTranslation</a>&gt;

---

### <a name="ExperienceLevelTranslation"></a> `ExperienceLevelTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the experience level. | <a href="#ExperienceLevelTranslation/name">See details</a>

#### <a name="ExperienceLevelTranslation/name"></a> `name`

The name of the experience level.

- **Type:** String
- **Minimum Length:** `1`
