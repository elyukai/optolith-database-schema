# [TITLE MISSING]

## Definitions

### <a name="DerivedCharacteristicPrerequisiteGroup"></a> `DerivedCharacteristicPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#DerivedCharacteristicPrerequisiteGroup'Rule">DerivedCharacteristicPrerequisiteGroup'Rule</a>

---

### <a name="DerivedCharacteristicPrerequisiteGroup'Rule"></a> `DerivedCharacteristicPrerequisiteGroup'Rule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DerivedCharacteristicPrerequisiteGroup'Rule/tag">See details</a>
`rule` |  | <a href="#DerivedCharacteristicPrerequisiteGroup'Rule/rule">See details</a>

#### <a name="DerivedCharacteristicPrerequisiteGroup'Rule/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="DerivedCharacteristicPrerequisiteGroup'Rule/rule"></a> `rule`

- **Type:** <a href="./single/RulePrerequisite.md#RulePrerequisite">RulePrerequisite</a>

---

### <a name="PublicationPrerequisiteGroup"></a> `PublicationPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#PublicationPrerequisiteGroup'Publication">PublicationPrerequisiteGroup'Publication</a>

---

### <a name="PublicationPrerequisiteGroup'Publication"></a> `PublicationPrerequisiteGroup'Publication`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PublicationPrerequisiteGroup'Publication/tag">See details</a>
`publication` |  | <a href="#PublicationPrerequisiteGroup'Publication/publication">See details</a>

#### <a name="PublicationPrerequisiteGroup'Publication/tag"></a> `tag`

- **Constant:** `"Publication"`

#### <a name="PublicationPrerequisiteGroup'Publication/publication"></a> `publication`

- **Type:** <a href="./single/PublicationPrerequisite.md#PublicationPrerequisite">PublicationPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup"></a> `GeneralPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#GeneralPrerequisiteGroup'Sex">GeneralPrerequisiteGroup'Sex</a> | <a href="#GeneralPrerequisiteGroup'Race">GeneralPrerequisiteGroup'Race</a> | <a href="#GeneralPrerequisiteGroup'Culture">GeneralPrerequisiteGroup'Culture</a> | <a href="#GeneralPrerequisiteGroup'Pact">GeneralPrerequisiteGroup'Pact</a> | <a href="#GeneralPrerequisiteGroup'SocialStatus">GeneralPrerequisiteGroup'SocialStatus</a> | <a href="#GeneralPrerequisiteGroup'State">GeneralPrerequisiteGroup'State</a> | <a href="#GeneralPrerequisiteGroup'Rule">GeneralPrerequisiteGroup'Rule</a> | <a href="#GeneralPrerequisiteGroup'PrimaryAttribute">GeneralPrerequisiteGroup'PrimaryAttribute</a> | <a href="#GeneralPrerequisiteGroup'Activatable">GeneralPrerequisiteGroup'Activatable</a> | <a href="#GeneralPrerequisiteGroup'ActivatableSet">GeneralPrerequisiteGroup'ActivatableSet</a> | <a href="#GeneralPrerequisiteGroup'ActivatableOptionSet">GeneralPrerequisiteGroup'ActivatableOptionSet</a> | <a href="#GeneralPrerequisiteGroup'BlessedTradition">GeneralPrerequisiteGroup'BlessedTradition</a> | <a href="#GeneralPrerequisiteGroup'MagicalTradition">GeneralPrerequisiteGroup'MagicalTradition</a> | <a href="#GeneralPrerequisiteGroup'Rated">GeneralPrerequisiteGroup'Rated</a> | <a href="#GeneralPrerequisiteGroup'RatedSet">GeneralPrerequisiteGroup'RatedSet</a> | <a href="#GeneralPrerequisiteGroup'RatedMinimumNumber">GeneralPrerequisiteGroup'RatedMinimumNumber</a> | <a href="#GeneralPrerequisiteGroup'ExternalEnhancement">GeneralPrerequisiteGroup'ExternalEnhancement</a> | <a href="#GeneralPrerequisiteGroup'Text">GeneralPrerequisiteGroup'Text</a>

---

### <a name="GeneralPrerequisiteGroup'Sex"></a> `GeneralPrerequisiteGroup'Sex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Sex/tag">See details</a>
`sex` |  | <a href="#GeneralPrerequisiteGroup'Sex/sex">See details</a>

#### <a name="GeneralPrerequisiteGroup'Sex/tag"></a> `tag`

- **Constant:** `"Sex"`

#### <a name="GeneralPrerequisiteGroup'Sex/sex"></a> `sex`

- **Type:** <a href="./single/SexPrerequisite.md#SexPrerequisite">SexPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Race"></a> `GeneralPrerequisiteGroup'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Race/tag">See details</a>
`race` |  | <a href="#GeneralPrerequisiteGroup'Race/race">See details</a>

#### <a name="GeneralPrerequisiteGroup'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="GeneralPrerequisiteGroup'Race/race"></a> `race`

- **Type:** <a href="./single/RacePrerequisite.md#RacePrerequisite">RacePrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Culture"></a> `GeneralPrerequisiteGroup'Culture`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Culture/tag">See details</a>
`culture` |  | <a href="#GeneralPrerequisiteGroup'Culture/culture">See details</a>

#### <a name="GeneralPrerequisiteGroup'Culture/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="GeneralPrerequisiteGroup'Culture/culture"></a> `culture`

- **Type:** <a href="./single/CulturePrerequisite.md#CulturePrerequisite">CulturePrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Pact"></a> `GeneralPrerequisiteGroup'Pact`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Pact/tag">See details</a>
`pact` |  | <a href="#GeneralPrerequisiteGroup'Pact/pact">See details</a>

#### <a name="GeneralPrerequisiteGroup'Pact/tag"></a> `tag`

- **Constant:** `"Pact"`

#### <a name="GeneralPrerequisiteGroup'Pact/pact"></a> `pact`

- **Type:** <a href="./single/PactPrerequisite.md#PactPrerequisite">PactPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'SocialStatus"></a> `GeneralPrerequisiteGroup'SocialStatus`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'SocialStatus/tag">See details</a>
`social_status` |  | <a href="#GeneralPrerequisiteGroup'SocialStatus/social_status">See details</a>

#### <a name="GeneralPrerequisiteGroup'SocialStatus/tag"></a> `tag`

- **Constant:** `"SocialStatus"`

#### <a name="GeneralPrerequisiteGroup'SocialStatus/social_status"></a> `social_status`

- **Type:** <a href="./single/SocialStatusPrerequisite.md#SocialStatusPrerequisite">SocialStatusPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'State"></a> `GeneralPrerequisiteGroup'State`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'State/tag">See details</a>
`state` |  | <a href="#GeneralPrerequisiteGroup'State/state">See details</a>

#### <a name="GeneralPrerequisiteGroup'State/tag"></a> `tag`

- **Constant:** `"State"`

#### <a name="GeneralPrerequisiteGroup'State/state"></a> `state`

- **Type:** <a href="./single/StatePrerequisite.md#StatePrerequisite">StatePrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Rule"></a> `GeneralPrerequisiteGroup'Rule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Rule/tag">See details</a>
`rule` |  | <a href="#GeneralPrerequisiteGroup'Rule/rule">See details</a>

#### <a name="GeneralPrerequisiteGroup'Rule/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="GeneralPrerequisiteGroup'Rule/rule"></a> `rule`

- **Type:** <a href="./single/RulePrerequisite.md#RulePrerequisite">RulePrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'PrimaryAttribute"></a> `GeneralPrerequisiteGroup'PrimaryAttribute`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'PrimaryAttribute/tag">See details</a>
`primary_attribute` |  | <a href="#GeneralPrerequisiteGroup'PrimaryAttribute/primary_attribute">See details</a>

#### <a name="GeneralPrerequisiteGroup'PrimaryAttribute/tag"></a> `tag`

- **Constant:** `"PrimaryAttribute"`

#### <a name="GeneralPrerequisiteGroup'PrimaryAttribute/primary_attribute"></a> `primary_attribute`

- **Type:** <a href="./single/PrimaryAttributePrerequisite.md#PrimaryAttributePrerequisite">PrimaryAttributePrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Activatable"></a> `GeneralPrerequisiteGroup'Activatable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Activatable/tag">See details</a>
`activatable` |  | <a href="#GeneralPrerequisiteGroup'Activatable/activatable">See details</a>

#### <a name="GeneralPrerequisiteGroup'Activatable/tag"></a> `tag`

- **Constant:** `"Activatable"`

#### <a name="GeneralPrerequisiteGroup'Activatable/activatable"></a> `activatable`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatablePrerequisite">ActivatablePrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'ActivatableSet"></a> `GeneralPrerequisiteGroup'ActivatableSet`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'ActivatableSet/tag">See details</a>
`activatable_set` |  | <a href="#GeneralPrerequisiteGroup'ActivatableSet/activatable_set">See details</a>

#### <a name="GeneralPrerequisiteGroup'ActivatableSet/tag"></a> `tag`

- **Constant:** `"ActivatableSet"`

#### <a name="GeneralPrerequisiteGroup'ActivatableSet/activatable_set"></a> `activatable_set`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatableSetPrerequisite">ActivatableSetPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'ActivatableOptionSet"></a> `GeneralPrerequisiteGroup'ActivatableOptionSet`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'ActivatableOptionSet/tag">See details</a>
`activatable_option_set` |  | <a href="#GeneralPrerequisiteGroup'ActivatableOptionSet/activatable_option_set">See details</a>

#### <a name="GeneralPrerequisiteGroup'ActivatableOptionSet/tag"></a> `tag`

- **Constant:** `"ActivatableOptionSet"`

#### <a name="GeneralPrerequisiteGroup'ActivatableOptionSet/activatable_option_set"></a> `activatable_option_set`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatableOptionSetPrerequisite">ActivatableOptionSetPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'BlessedTradition"></a> `GeneralPrerequisiteGroup'BlessedTradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'BlessedTradition/tag">See details</a>
`blessed_tradition` |  | <a href="#GeneralPrerequisiteGroup'BlessedTradition/blessed_tradition">See details</a>

#### <a name="GeneralPrerequisiteGroup'BlessedTradition/tag"></a> `tag`

- **Constant:** `"BlessedTradition"`

#### <a name="GeneralPrerequisiteGroup'BlessedTradition/blessed_tradition"></a> `blessed_tradition`

- **Type:** <a href="./single/TraditionPrerequisite.md#BlessedTraditionPrerequisite">BlessedTraditionPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'MagicalTradition"></a> `GeneralPrerequisiteGroup'MagicalTradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'MagicalTradition/tag">See details</a>
`magical_tradition` |  | <a href="#GeneralPrerequisiteGroup'MagicalTradition/magical_tradition">See details</a>

#### <a name="GeneralPrerequisiteGroup'MagicalTradition/tag"></a> `tag`

- **Constant:** `"MagicalTradition"`

#### <a name="GeneralPrerequisiteGroup'MagicalTradition/magical_tradition"></a> `magical_tradition`

- **Type:** <a href="./single/TraditionPrerequisite.md#MagicalTraditionPrerequisite">MagicalTraditionPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Rated"></a> `GeneralPrerequisiteGroup'Rated`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Rated/tag">See details</a>
`rated` |  | <a href="#GeneralPrerequisiteGroup'Rated/rated">See details</a>

#### <a name="GeneralPrerequisiteGroup'Rated/tag"></a> `tag`

- **Constant:** `"Rated"`

#### <a name="GeneralPrerequisiteGroup'Rated/rated"></a> `rated`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedPrerequisite">RatedPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'RatedSet"></a> `GeneralPrerequisiteGroup'RatedSet`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'RatedSet/tag">See details</a>
`rated_set` |  | <a href="#GeneralPrerequisiteGroup'RatedSet/rated_set">See details</a>

#### <a name="GeneralPrerequisiteGroup'RatedSet/tag"></a> `tag`

- **Constant:** `"RatedSet"`

#### <a name="GeneralPrerequisiteGroup'RatedSet/rated_set"></a> `rated_set`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedSetPrerequisite">RatedSetPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'RatedMinimumNumber"></a> `GeneralPrerequisiteGroup'RatedMinimumNumber`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'RatedMinimumNumber/tag">See details</a>
`rated_minimum_number` |  | <a href="#GeneralPrerequisiteGroup'RatedMinimumNumber/rated_minimum_number">See details</a>

#### <a name="GeneralPrerequisiteGroup'RatedMinimumNumber/tag"></a> `tag`

- **Constant:** `"RatedMinimumNumber"`

#### <a name="GeneralPrerequisiteGroup'RatedMinimumNumber/rated_minimum_number"></a> `rated_minimum_number`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedMinimumNumberPrerequisite">RatedMinimumNumberPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'ExternalEnhancement"></a> `GeneralPrerequisiteGroup'ExternalEnhancement`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'ExternalEnhancement/tag">See details</a>
`external_enhancement` |  | <a href="#GeneralPrerequisiteGroup'ExternalEnhancement/external_enhancement">See details</a>

#### <a name="GeneralPrerequisiteGroup'ExternalEnhancement/tag"></a> `tag`

- **Constant:** `"ExternalEnhancement"`

#### <a name="GeneralPrerequisiteGroup'ExternalEnhancement/external_enhancement"></a> `external_enhancement`

- **Type:** <a href="./single/EnhancementPrerequisite.md#ExternalEnhancementPrerequisite">ExternalEnhancementPrerequisite</a>

---

### <a name="GeneralPrerequisiteGroup'Text"></a> `GeneralPrerequisiteGroup'Text`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeneralPrerequisiteGroup'Text/tag">See details</a>
`text` |  | <a href="#GeneralPrerequisiteGroup'Text/text">See details</a>

#### <a name="GeneralPrerequisiteGroup'Text/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="GeneralPrerequisiteGroup'Text/text"></a> `text`

- **Type:** <a href="./single/TextPrerequisite.md#TextPrerequisite">TextPrerequisite</a>

---

### <a name="ProfessionPrerequisiteGroup"></a> `ProfessionPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#ProfessionPrerequisiteGroup'Sex">ProfessionPrerequisiteGroup'Sex</a> | <a href="#ProfessionPrerequisiteGroup'Race">ProfessionPrerequisiteGroup'Race</a> | <a href="#ProfessionPrerequisiteGroup'Culture">ProfessionPrerequisiteGroup'Culture</a> | <a href="#ProfessionPrerequisiteGroup'Activatable">ProfessionPrerequisiteGroup'Activatable</a> | <a href="#ProfessionPrerequisiteGroup'Rated">ProfessionPrerequisiteGroup'Rated</a>

---

### <a name="ProfessionPrerequisiteGroup'Sex"></a> `ProfessionPrerequisiteGroup'Sex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisiteGroup'Sex/tag">See details</a>
`sex` |  | <a href="#ProfessionPrerequisiteGroup'Sex/sex">See details</a>

#### <a name="ProfessionPrerequisiteGroup'Sex/tag"></a> `tag`

- **Constant:** `"Sex"`

#### <a name="ProfessionPrerequisiteGroup'Sex/sex"></a> `sex`

- **Type:** <a href="./single/SexPrerequisite.md#SexPrerequisite">SexPrerequisite</a>

---

### <a name="ProfessionPrerequisiteGroup'Race"></a> `ProfessionPrerequisiteGroup'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisiteGroup'Race/tag">See details</a>
`race` |  | <a href="#ProfessionPrerequisiteGroup'Race/race">See details</a>

#### <a name="ProfessionPrerequisiteGroup'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ProfessionPrerequisiteGroup'Race/race"></a> `race`

- **Type:** <a href="./single/RacePrerequisite.md#RacePrerequisite">RacePrerequisite</a>

---

### <a name="ProfessionPrerequisiteGroup'Culture"></a> `ProfessionPrerequisiteGroup'Culture`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisiteGroup'Culture/tag">See details</a>
`culture` |  | <a href="#ProfessionPrerequisiteGroup'Culture/culture">See details</a>

#### <a name="ProfessionPrerequisiteGroup'Culture/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="ProfessionPrerequisiteGroup'Culture/culture"></a> `culture`

- **Type:** <a href="./single/CulturePrerequisite.md#CulturePrerequisite">CulturePrerequisite</a>

---

### <a name="ProfessionPrerequisiteGroup'Activatable"></a> `ProfessionPrerequisiteGroup'Activatable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisiteGroup'Activatable/tag">See details</a>
`activatable` |  | <a href="#ProfessionPrerequisiteGroup'Activatable/activatable">See details</a>

#### <a name="ProfessionPrerequisiteGroup'Activatable/tag"></a> `tag`

- **Constant:** `"Activatable"`

#### <a name="ProfessionPrerequisiteGroup'Activatable/activatable"></a> `activatable`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatablePrerequisite">ActivatablePrerequisite</a>

---

### <a name="ProfessionPrerequisiteGroup'Rated"></a> `ProfessionPrerequisiteGroup'Rated`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPrerequisiteGroup'Rated/tag">See details</a>
`rated` |  | <a href="#ProfessionPrerequisiteGroup'Rated/rated">See details</a>

#### <a name="ProfessionPrerequisiteGroup'Rated/tag"></a> `tag`

- **Constant:** `"Rated"`

#### <a name="ProfessionPrerequisiteGroup'Rated/rated"></a> `rated`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedPrerequisite">RatedPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup"></a> `AdvantageDisadvantagePrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#AdvantageDisadvantagePrerequisiteGroup'CommonSuggestedByRCP">AdvantageDisadvantagePrerequisiteGroup'CommonSuggestedByRCP</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Sex">AdvantageDisadvantagePrerequisiteGroup'Sex</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Race">AdvantageDisadvantagePrerequisiteGroup'Race</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Culture">AdvantageDisadvantagePrerequisiteGroup'Culture</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Pact">AdvantageDisadvantagePrerequisiteGroup'Pact</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'SocialStatus">AdvantageDisadvantagePrerequisiteGroup'SocialStatus</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'State">AdvantageDisadvantagePrerequisiteGroup'State</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Rule">AdvantageDisadvantagePrerequisiteGroup'Rule</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute">AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Activatable">AdvantageDisadvantagePrerequisiteGroup'Activatable</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'ActivatableSet">AdvantageDisadvantagePrerequisiteGroup'ActivatableSet</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet">AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'BlessedTradition">AdvantageDisadvantagePrerequisiteGroup'BlessedTradition</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'MagicalTradition">AdvantageDisadvantagePrerequisiteGroup'MagicalTradition</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Rated">AdvantageDisadvantagePrerequisiteGroup'Rated</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'RatedSet">AdvantageDisadvantagePrerequisiteGroup'RatedSet</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber">AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement">AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement</a> | <a href="#AdvantageDisadvantagePrerequisiteGroup'Text">AdvantageDisadvantagePrerequisiteGroup'Text</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'CommonSuggestedByRCP"></a> `AdvantageDisadvantagePrerequisiteGroup'CommonSuggestedByRCP`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'CommonSuggestedByRCP/tag">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'CommonSuggestedByRCP/tag"></a> `tag`

- **Constant:** `"CommonSuggestedByRCP"`

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Sex"></a> `AdvantageDisadvantagePrerequisiteGroup'Sex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Sex/tag">See details</a>
`sex` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Sex/sex">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Sex/tag"></a> `tag`

- **Constant:** `"Sex"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Sex/sex"></a> `sex`

- **Type:** <a href="./single/SexPrerequisite.md#SexPrerequisite">SexPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Race"></a> `AdvantageDisadvantagePrerequisiteGroup'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Race/tag">See details</a>
`race` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Race/race">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Race/race"></a> `race`

- **Type:** <a href="./single/RacePrerequisite.md#RacePrerequisite">RacePrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Culture"></a> `AdvantageDisadvantagePrerequisiteGroup'Culture`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Culture/tag">See details</a>
`culture` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Culture/culture">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Culture/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Culture/culture"></a> `culture`

- **Type:** <a href="./single/CulturePrerequisite.md#CulturePrerequisite">CulturePrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Pact"></a> `AdvantageDisadvantagePrerequisiteGroup'Pact`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Pact/tag">See details</a>
`pact` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Pact/pact">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Pact/tag"></a> `tag`

- **Constant:** `"Pact"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Pact/pact"></a> `pact`

- **Type:** <a href="./single/PactPrerequisite.md#PactPrerequisite">PactPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'SocialStatus"></a> `AdvantageDisadvantagePrerequisiteGroup'SocialStatus`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'SocialStatus/tag">See details</a>
`social_status` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'SocialStatus/social_status">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'SocialStatus/tag"></a> `tag`

- **Constant:** `"SocialStatus"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'SocialStatus/social_status"></a> `social_status`

- **Type:** <a href="./single/SocialStatusPrerequisite.md#SocialStatusPrerequisite">SocialStatusPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'State"></a> `AdvantageDisadvantagePrerequisiteGroup'State`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'State/tag">See details</a>
`state` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'State/state">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'State/tag"></a> `tag`

- **Constant:** `"State"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'State/state"></a> `state`

- **Type:** <a href="./single/StatePrerequisite.md#StatePrerequisite">StatePrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Rule"></a> `AdvantageDisadvantagePrerequisiteGroup'Rule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Rule/tag">See details</a>
`rule` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Rule/rule">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Rule/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Rule/rule"></a> `rule`

- **Type:** <a href="./single/RulePrerequisite.md#RulePrerequisite">RulePrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute"></a> `AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute/tag">See details</a>
`primary_attribute` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute/primary_attribute">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute/tag"></a> `tag`

- **Constant:** `"PrimaryAttribute"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'PrimaryAttribute/primary_attribute"></a> `primary_attribute`

- **Type:** <a href="./single/PrimaryAttributePrerequisite.md#PrimaryAttributePrerequisite">PrimaryAttributePrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Activatable"></a> `AdvantageDisadvantagePrerequisiteGroup'Activatable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Activatable/tag">See details</a>
`activatable` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Activatable/activatable">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Activatable/tag"></a> `tag`

- **Constant:** `"Activatable"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Activatable/activatable"></a> `activatable`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatablePrerequisite">ActivatablePrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'ActivatableSet"></a> `AdvantageDisadvantagePrerequisiteGroup'ActivatableSet`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'ActivatableSet/tag">See details</a>
`activatable_set` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'ActivatableSet/activatable_set">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'ActivatableSet/tag"></a> `tag`

- **Constant:** `"ActivatableSet"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'ActivatableSet/activatable_set"></a> `activatable_set`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatableSetPrerequisite">ActivatableSetPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet"></a> `AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet/tag">See details</a>
`activatable_option_set` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet/activatable_option_set">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet/tag"></a> `tag`

- **Constant:** `"ActivatableOptionSet"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'ActivatableOptionSet/activatable_option_set"></a> `activatable_option_set`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatableOptionSetPrerequisite">ActivatableOptionSetPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'BlessedTradition"></a> `AdvantageDisadvantagePrerequisiteGroup'BlessedTradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'BlessedTradition/tag">See details</a>
`blessed_tradition` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'BlessedTradition/blessed_tradition">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'BlessedTradition/tag"></a> `tag`

- **Constant:** `"BlessedTradition"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'BlessedTradition/blessed_tradition"></a> `blessed_tradition`

- **Type:** <a href="./single/TraditionPrerequisite.md#BlessedTraditionPrerequisite">BlessedTraditionPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'MagicalTradition"></a> `AdvantageDisadvantagePrerequisiteGroup'MagicalTradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'MagicalTradition/tag">See details</a>
`magical_tradition` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'MagicalTradition/magical_tradition">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'MagicalTradition/tag"></a> `tag`

- **Constant:** `"MagicalTradition"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'MagicalTradition/magical_tradition"></a> `magical_tradition`

- **Type:** <a href="./single/TraditionPrerequisite.md#MagicalTraditionPrerequisite">MagicalTraditionPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Rated"></a> `AdvantageDisadvantagePrerequisiteGroup'Rated`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Rated/tag">See details</a>
`rated` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Rated/rated">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Rated/tag"></a> `tag`

- **Constant:** `"Rated"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Rated/rated"></a> `rated`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedPrerequisite">RatedPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'RatedSet"></a> `AdvantageDisadvantagePrerequisiteGroup'RatedSet`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'RatedSet/tag">See details</a>
`rated_set` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'RatedSet/rated_set">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'RatedSet/tag"></a> `tag`

- **Constant:** `"RatedSet"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'RatedSet/rated_set"></a> `rated_set`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedSetPrerequisite">RatedSetPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber"></a> `AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber/tag">See details</a>
`rated_minimum_number` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber/rated_minimum_number">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber/tag"></a> `tag`

- **Constant:** `"RatedMinimumNumber"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'RatedMinimumNumber/rated_minimum_number"></a> `rated_minimum_number`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedMinimumNumberPrerequisite">RatedMinimumNumberPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement"></a> `AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement/tag">See details</a>
`external_enhancement` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement/external_enhancement">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement/tag"></a> `tag`

- **Constant:** `"ExternalEnhancement"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'ExternalEnhancement/external_enhancement"></a> `external_enhancement`

- **Type:** <a href="./single/EnhancementPrerequisite.md#ExternalEnhancementPrerequisite">ExternalEnhancementPrerequisite</a>

---

### <a name="AdvantageDisadvantagePrerequisiteGroup'Text"></a> `AdvantageDisadvantagePrerequisiteGroup'Text`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Text/tag">See details</a>
`text` |  | <a href="#AdvantageDisadvantagePrerequisiteGroup'Text/text">See details</a>

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Text/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="AdvantageDisadvantagePrerequisiteGroup'Text/text"></a> `text`

- **Type:** <a href="./single/TextPrerequisite.md#TextPrerequisite">TextPrerequisite</a>

---

### <a name="ArcaneTraditionPrerequisiteGroup"></a> `ArcaneTraditionPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#ArcaneTraditionPrerequisiteGroup'Sex">ArcaneTraditionPrerequisiteGroup'Sex</a> | <a href="#ArcaneTraditionPrerequisiteGroup'Culture">ArcaneTraditionPrerequisiteGroup'Culture</a>

---

### <a name="ArcaneTraditionPrerequisiteGroup'Sex"></a> `ArcaneTraditionPrerequisiteGroup'Sex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisiteGroup'Sex/tag">See details</a>
`sex` |  | <a href="#ArcaneTraditionPrerequisiteGroup'Sex/sex">See details</a>

#### <a name="ArcaneTraditionPrerequisiteGroup'Sex/tag"></a> `tag`

- **Constant:** `"Sex"`

#### <a name="ArcaneTraditionPrerequisiteGroup'Sex/sex"></a> `sex`

- **Type:** <a href="./single/SexPrerequisite.md#SexPrerequisite">SexPrerequisite</a>

---

### <a name="ArcaneTraditionPrerequisiteGroup'Culture"></a> `ArcaneTraditionPrerequisiteGroup'Culture`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneTraditionPrerequisiteGroup'Culture/tag">See details</a>
`culture` |  | <a href="#ArcaneTraditionPrerequisiteGroup'Culture/culture">See details</a>

#### <a name="ArcaneTraditionPrerequisiteGroup'Culture/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="ArcaneTraditionPrerequisiteGroup'Culture/culture"></a> `culture`

- **Type:** <a href="./single/CulturePrerequisite.md#CulturePrerequisite">CulturePrerequisite</a>

---

### <a name="PersonalityTraitPrerequisiteGroup"></a> `PersonalityTraitPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#PersonalityTraitPrerequisiteGroup'Culture">PersonalityTraitPrerequisiteGroup'Culture</a> | <a href="#PersonalityTraitPrerequisiteGroup'Text">PersonalityTraitPrerequisiteGroup'Text</a>

---

### <a name="PersonalityTraitPrerequisiteGroup'Culture"></a> `PersonalityTraitPrerequisiteGroup'Culture`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisiteGroup'Culture/tag">See details</a>
`culture` |  | <a href="#PersonalityTraitPrerequisiteGroup'Culture/culture">See details</a>

#### <a name="PersonalityTraitPrerequisiteGroup'Culture/tag"></a> `tag`

- **Constant:** `"Culture"`

#### <a name="PersonalityTraitPrerequisiteGroup'Culture/culture"></a> `culture`

- **Type:** <a href="./single/CulturePrerequisite.md#CulturePrerequisite">CulturePrerequisite</a>

---

### <a name="PersonalityTraitPrerequisiteGroup'Text"></a> `PersonalityTraitPrerequisiteGroup'Text`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PersonalityTraitPrerequisiteGroup'Text/tag">See details</a>
`text` |  | <a href="#PersonalityTraitPrerequisiteGroup'Text/text">See details</a>

#### <a name="PersonalityTraitPrerequisiteGroup'Text/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="PersonalityTraitPrerequisiteGroup'Text/text"></a> `text`

- **Type:** <a href="./single/TextPrerequisite.md#TextPrerequisite">TextPrerequisite</a>

---

### <a name="SpellworkPrerequisiteGroup"></a> `SpellworkPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#SpellworkPrerequisiteGroup'Rule">SpellworkPrerequisiteGroup'Rule</a> | <a href="#SpellworkPrerequisiteGroup'Rated">SpellworkPrerequisiteGroup'Rated</a>

---

### <a name="SpellworkPrerequisiteGroup'Rule"></a> `SpellworkPrerequisiteGroup'Rule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisiteGroup'Rule/tag">See details</a>
`rule` |  | <a href="#SpellworkPrerequisiteGroup'Rule/rule">See details</a>

#### <a name="SpellworkPrerequisiteGroup'Rule/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="SpellworkPrerequisiteGroup'Rule/rule"></a> `rule`

- **Type:** <a href="./single/RulePrerequisite.md#RulePrerequisite">RulePrerequisite</a>

---

### <a name="SpellworkPrerequisiteGroup'Rated"></a> `SpellworkPrerequisiteGroup'Rated`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkPrerequisiteGroup'Rated/tag">See details</a>
`rated` |  | <a href="#SpellworkPrerequisiteGroup'Rated/rated">See details</a>

#### <a name="SpellworkPrerequisiteGroup'Rated/tag"></a> `tag`

- **Constant:** `"Rated"`

#### <a name="SpellworkPrerequisiteGroup'Rated/rated"></a> `rated`

- **Type:** <a href="./single/RatedPrerequisite.md#RatedPrerequisite">RatedPrerequisite</a>

---

### <a name="LiturgyPrerequisiteGroup"></a> `LiturgyPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#LiturgyPrerequisiteGroup'Rule">LiturgyPrerequisiteGroup'Rule</a>

---

### <a name="LiturgyPrerequisiteGroup'Rule"></a> `LiturgyPrerequisiteGroup'Rule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgyPrerequisiteGroup'Rule/tag">See details</a>
`rule` |  | <a href="#LiturgyPrerequisiteGroup'Rule/rule">See details</a>

#### <a name="LiturgyPrerequisiteGroup'Rule/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="LiturgyPrerequisiteGroup'Rule/rule"></a> `rule`

- **Type:** <a href="./single/RulePrerequisite.md#RulePrerequisite">RulePrerequisite</a>

---

### <a name="InfluencePrerequisiteGroup"></a> `InfluencePrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#InfluencePrerequisiteGroup'Influence">InfluencePrerequisiteGroup'Influence</a> | <a href="#InfluencePrerequisiteGroup'Text">InfluencePrerequisiteGroup'Text</a>

---

### <a name="InfluencePrerequisiteGroup'Influence"></a> `InfluencePrerequisiteGroup'Influence`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisiteGroup'Influence/tag">See details</a>
`influence` |  | <a href="#InfluencePrerequisiteGroup'Influence/influence">See details</a>

#### <a name="InfluencePrerequisiteGroup'Influence/tag"></a> `tag`

- **Constant:** `"Influence"`

#### <a name="InfluencePrerequisiteGroup'Influence/influence"></a> `influence`

- **Type:** <a href="./single/InfluencePrerequisite.md#InfluencePrerequisite">InfluencePrerequisite</a>

---

### <a name="InfluencePrerequisiteGroup'Text"></a> `InfluencePrerequisiteGroup'Text`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisiteGroup'Text/tag">See details</a>
`text` |  | <a href="#InfluencePrerequisiteGroup'Text/text">See details</a>

#### <a name="InfluencePrerequisiteGroup'Text/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="InfluencePrerequisiteGroup'Text/text"></a> `text`

- **Type:** <a href="./single/TextPrerequisite.md#TextPrerequisite">TextPrerequisite</a>

---

### <a name="LanguagePrerequisiteGroup"></a> `LanguagePrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#LanguagePrerequisiteGroup'Race">LanguagePrerequisiteGroup'Race</a> | <a href="#LanguagePrerequisiteGroup'Activatable">LanguagePrerequisiteGroup'Activatable</a> | <a href="#LanguagePrerequisiteGroup'Text">LanguagePrerequisiteGroup'Text</a>

---

### <a name="LanguagePrerequisiteGroup'Race"></a> `LanguagePrerequisiteGroup'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisiteGroup'Race/tag">See details</a>
`race` |  | <a href="#LanguagePrerequisiteGroup'Race/race">See details</a>

#### <a name="LanguagePrerequisiteGroup'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="LanguagePrerequisiteGroup'Race/race"></a> `race`

- **Type:** <a href="./single/RacePrerequisite.md#RacePrerequisite">RacePrerequisite</a>

---

### <a name="LanguagePrerequisiteGroup'Activatable"></a> `LanguagePrerequisiteGroup'Activatable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisiteGroup'Activatable/tag">See details</a>
`activatable` |  | <a href="#LanguagePrerequisiteGroup'Activatable/activatable">See details</a>

#### <a name="LanguagePrerequisiteGroup'Activatable/tag"></a> `tag`

- **Constant:** `"Activatable"`

#### <a name="LanguagePrerequisiteGroup'Activatable/activatable"></a> `activatable`

- **Type:** <a href="./single/ActivatablePrerequisite.md#ActivatablePrerequisite">ActivatablePrerequisite</a>

---

### <a name="LanguagePrerequisiteGroup'Text"></a> `LanguagePrerequisiteGroup'Text`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LanguagePrerequisiteGroup'Text/tag">See details</a>
`text` |  | <a href="#LanguagePrerequisiteGroup'Text/text">See details</a>

#### <a name="LanguagePrerequisiteGroup'Text/tag"></a> `tag`

- **Constant:** `"Text"`

#### <a name="LanguagePrerequisiteGroup'Text/text"></a> `text`

- **Type:** <a href="./single/TextPrerequisite.md#TextPrerequisite">TextPrerequisite</a>

---

### <a name="AnimistPowerPrerequisiteGroup"></a> `AnimistPowerPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPrerequisiteGroup'AnimistPower">AnimistPowerPrerequisiteGroup'AnimistPower</a>

---

### <a name="AnimistPowerPrerequisiteGroup'AnimistPower"></a> `AnimistPowerPrerequisiteGroup'AnimistPower`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisiteGroup'AnimistPower/tag">See details</a>
`animist_power` |  | <a href="#AnimistPowerPrerequisiteGroup'AnimistPower/animist_power">See details</a>

#### <a name="AnimistPowerPrerequisiteGroup'AnimistPower/tag"></a> `tag`

- **Constant:** `"AnimistPower"`

#### <a name="AnimistPowerPrerequisiteGroup'AnimistPower/animist_power"></a> `animist_power`

- **Type:** <a href="./single/AnimistPowerPrerequisite.md#AnimistPowerPrerequisite">AnimistPowerPrerequisite</a>

---

### <a name="GeodeRitualPrerequisiteGroup"></a> `GeodeRitualPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualPrerequisiteGroup'Influence">GeodeRitualPrerequisiteGroup'Influence</a>

---

### <a name="GeodeRitualPrerequisiteGroup'Influence"></a> `GeodeRitualPrerequisiteGroup'Influence`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualPrerequisiteGroup'Influence/tag">See details</a>
`influence` |  | <a href="#GeodeRitualPrerequisiteGroup'Influence/influence">See details</a>

#### <a name="GeodeRitualPrerequisiteGroup'Influence/tag"></a> `tag`

- **Constant:** `"Influence"`

#### <a name="GeodeRitualPrerequisiteGroup'Influence/influence"></a> `influence`

- **Type:** <a href="./single/InfluencePrerequisite.md#InfluencePrerequisite">InfluencePrerequisite</a>

---

### <a name="EnhancementPrerequisiteGroup"></a> `EnhancementPrerequisiteGroup`

- **Type:** Union
- **Cases:** <a href="#EnhancementPrerequisiteGroup'InternalEnhancement">EnhancementPrerequisiteGroup'InternalEnhancement</a>

---

### <a name="EnhancementPrerequisiteGroup'InternalEnhancement"></a> `EnhancementPrerequisiteGroup'InternalEnhancement`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnhancementPrerequisiteGroup'InternalEnhancement/tag">See details</a>
`internal_enhancement` |  | <a href="#EnhancementPrerequisiteGroup'InternalEnhancement/internal_enhancement">See details</a>

#### <a name="EnhancementPrerequisiteGroup'InternalEnhancement/tag"></a> `tag`

- **Constant:** `"InternalEnhancement"`

#### <a name="EnhancementPrerequisiteGroup'InternalEnhancement/internal_enhancement"></a> `internal_enhancement`

- **Type:** <a href="./single/EnhancementPrerequisite.md#InternalEnhancementPrerequisite">InternalEnhancementPrerequisite</a>

---

### <a name="PreconditionGroup"></a> `PreconditionGroup`

- **Type:** Union
- **Cases:** <a href="#PreconditionGroup'Publication">PreconditionGroup'Publication</a>

---

### <a name="PreconditionGroup'Publication"></a> `PreconditionGroup'Publication`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PreconditionGroup'Publication/tag">See details</a>
`publication` |  | <a href="#PreconditionGroup'Publication/publication">See details</a>

#### <a name="PreconditionGroup'Publication/tag"></a> `tag`

- **Constant:** `"Publication"`

#### <a name="PreconditionGroup'Publication/publication"></a> `publication`

- **Type:** <a href="./single/PublicationPrerequisite.md#PublicationPrerequisite">PublicationPrerequisite</a>
