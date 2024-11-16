# Profession

## Definitions

### <a name="Profession"></a> Profession (`Profession`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession's identifier. An unique, increasing integer. | <a href="#Profession/id">See details</a>
`group` | The profession group. | <a href="#Profession/group">See details</a>
`versions` | A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook. | <a href="#Profession/versions">See details</a>

#### <a name="Profession/id"></a> `id`

The profession's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Profession/group"></a> `group`

The profession group.

- **Type:** <a href="#ProfessionGroup">ProfessionGroup</a>

#### <a name="Profession/versions"></a> `versions`

A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook.

The profession representation may feature different values for different explicitly mentioned experience levels. In most cases, there is only one stats package, which targets the experience level *Experienced*.

- **Type:** List
- **Items:** <a href="#Profession/versions[]">Profession/versions[]</a>
- **Minimum Items:** `1`

---

### <a name="Profession/versions[]"></a> `Profession/versions[]`

- **Type:** <a href="#ProfessionVersion">ProfessionVersion</a>

---

### <a name="ProfessionGroup"></a> `ProfessionGroup`

- **Type:** Union
- **Cases:** <a href="#ProfessionGroup'Mundane">ProfessionGroup'Mundane</a> | <a href="#ProfessionGroup'Magical">ProfessionGroup'Magical</a> | <a href="#ProfessionGroup'Blessed">ProfessionGroup'Blessed</a>

---

### <a name="ProfessionGroup'Mundane"></a> `ProfessionGroup'Mundane`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionGroup'Mundane/tag">See details</a>
`mundane` |  | <a href="#ProfessionGroup'Mundane/mundane">See details</a>

#### <a name="ProfessionGroup'Mundane/tag"></a> `tag`

- **Constant:** `"Mundane"`

#### <a name="ProfessionGroup'Mundane/mundane"></a> `mundane`

- **Type:** <a href="#MundaneProfessionGroup">MundaneProfessionGroup</a>

---

### <a name="ProfessionGroup'Magical"></a> `ProfessionGroup'Magical`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionGroup'Magical/tag">See details</a>
`magical` |  | <a href="#ProfessionGroup'Magical/magical">See details</a>

#### <a name="ProfessionGroup'Magical/tag"></a> `tag`

- **Constant:** `"Magical"`

#### <a name="ProfessionGroup'Magical/magical"></a> `magical`

- **Type:** <a href="#MagicalProfessionGroup">MagicalProfessionGroup</a>

---

### <a name="ProfessionGroup'Blessed"></a> `ProfessionGroup'Blessed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionGroup'Blessed/tag">See details</a>
`blessed` |  | <a href="#ProfessionGroup'Blessed/blessed">See details</a>

#### <a name="ProfessionGroup'Blessed/tag"></a> `tag`

- **Constant:** `"Blessed"`

#### <a name="ProfessionGroup'Blessed/blessed"></a> `blessed`

- **Type:** <a href="#ProfessionGroup'Blessed/blessed">Object</a>

---

### <a name="ProfessionGroup'Blessed/blessed"></a> `ProfessionGroup'Blessed/blessed`

- **Type:** Empty Object

---

### <a name="MundaneProfessionGroup"></a> `MundaneProfessionGroup`

- **Type:** Union
- **Cases:** <a href="#MundaneProfessionGroup'0">MundaneProfessionGroup'0</a> | <a href="#MundaneProfessionGroup'1">MundaneProfessionGroup'1</a> | <a href="#MundaneProfessionGroup'2">MundaneProfessionGroup'2</a>

---

### <a name="MundaneProfessionGroup'0"></a> `MundaneProfessionGroup'0`

- **Constant:** `"Profane"`

---

### <a name="MundaneProfessionGroup'1"></a> `MundaneProfessionGroup'1`

- **Constant:** `"Fighter"`

---

### <a name="MundaneProfessionGroup'2"></a> `MundaneProfessionGroup'2`

- **Constant:** `"Religious"`

---

### <a name="MagicalProfessionGroup"></a> `MagicalProfessionGroup`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`curriculum?` | The curriculum/academy associated with this magical profession, if any. | <a href="#MagicalProfessionGroup/curriculum">See details</a>

#### <a name="MagicalProfessionGroup/curriculum"></a> `curriculum?`

The curriculum/academy associated with this magical profession, if any.

- **Type:** <a href="./_SimpleReferences.md#CurriculumReference">CurriculumReference</a>

---

### <a name="ProfessionVersion"></a> `ProfessionVersion`

- **Type:** Union
- **Cases:** <a href="#ProfessionVersion'Experienced">ProfessionVersion'Experienced</a> | <a href="#ProfessionVersion'ByExperienceLevel">ProfessionVersion'ByExperienceLevel</a>

---

### <a name="ProfessionVersion'Experienced"></a> `ProfessionVersion'Experienced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVersion'Experienced/tag">See details</a>
`experienced` |  | <a href="#ProfessionVersion'Experienced/experienced">See details</a>

#### <a name="ProfessionVersion'Experienced/tag"></a> `tag`

- **Constant:** `"Experienced"`

#### <a name="ProfessionVersion'Experienced/experienced"></a> `experienced`

- **Type:** <a href="#ExperiencedProfessionPackage">ExperiencedProfessionPackage</a>

---

### <a name="ProfessionVersion'ByExperienceLevel"></a> `ProfessionVersion'ByExperienceLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVersion'ByExperienceLevel/tag">See details</a>
`by_experience_level` |  | <a href="#ProfessionVersion'ByExperienceLevel/by_experience_level">See details</a>

#### <a name="ProfessionVersion'ByExperienceLevel/tag"></a> `tag`

- **Constant:** `"ByExperienceLevel"`

#### <a name="ProfessionVersion'ByExperienceLevel/by_experience_level"></a> `by_experience_level`

- **Type:** <a href="#ProfessionPackagesForDifferentExperienceLevels">ProfessionPackagesForDifferentExperienceLevels</a>

---

### <a name="ExperiencedProfessionPackage"></a> `ExperiencedProfessionPackage`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession representation variant's identifier. An unique, increasing integer. | <a href="#ExperiencedProfessionPackage/id">See details</a>
`package` |  | <a href="#ExperiencedProfessionPackage/package">See details</a>
`src` |  | <a href="#ExperiencedProfessionPackage/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExperiencedProfessionPackage/translations">See details</a>

#### <a name="ExperiencedProfessionPackage/id"></a> `id`

The profession representation variant's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExperiencedProfessionPackage/package"></a> `package`

- **Type:** <a href="#ProfessionPackage">ProfessionPackage</a>

#### <a name="ExperiencedProfessionPackage/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExperiencedProfessionPackage/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ProfessionTranslation">ProfessionTranslation</a>&gt;

---

### <a name="ProfessionPackagesForDifferentExperienceLevels"></a> `ProfessionPackagesForDifferentExperienceLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession representation variant's identifier. An unique, increasing integer. | <a href="#ProfessionPackagesForDifferentExperienceLevels/id">See details</a>
`packages_map` |  | <a href="#ProfessionPackagesForDifferentExperienceLevels/packages_map">See details</a>
`src` |  | <a href="#ProfessionPackagesForDifferentExperienceLevels/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionPackagesForDifferentExperienceLevels/translations">See details</a>

#### <a name="ProfessionPackagesForDifferentExperienceLevels/id"></a> `id`

The profession representation variant's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ProfessionPackagesForDifferentExperienceLevels/packages_map"></a> `packages_map`

- **Type:** List
- **Items:** <a href="#ProfessionPackagesForDifferentExperienceLevels/packages_map[]">ProfessionPackagesForDifferentExperienceLevels/packages_map[]</a>

#### <a name="ProfessionPackagesForDifferentExperienceLevels/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ProfessionPackagesForDifferentExperienceLevels/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ProfessionTranslation">ProfessionTranslation</a>&gt;

---

### <a name="ProfessionPackagesForDifferentExperienceLevels/packages_map[]"></a> `ProfessionPackagesForDifferentExperienceLevels/packages_map[]`

- **Type:** <a href="#ExperienceLevelDynamicProfessionPackage">ExperienceLevelDynamicProfessionPackage</a>

---

### <a name="ExperienceLevelDynamicProfessionPackage"></a> `ExperienceLevelDynamicProfessionPackage`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`experience_level_id` | The experience level this profession targets. The experience level must be unique for this representation. | <a href="#ExperienceLevelDynamicProfessionPackage/experience_level_id">See details</a>
`package` |  | <a href="#ExperienceLevelDynamicProfessionPackage/package">See details</a>

#### <a name="ExperienceLevelDynamicProfessionPackage/experience_level_id"></a> `experience_level_id`

The experience level this profession targets. The experience level must be unique for this representation.

- **Type:** Integer
- **Default:** `3`
- **Minimum:** `1`
- **Maximum:** `7`

#### <a name="ExperienceLevelDynamicProfessionPackage/package"></a> `package`

- **Type:** <a href="#ProfessionPackage">ProfessionPackage</a>

---

### <a name="ProfessionPackage"></a> Profession Representation Variant (`ProfessionPackage`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | What does the professional package cost in adventure points? | <a href="#ProfessionPackage/ap_value">See details</a>
`prerequisites?` | Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites. | <a href="#ProfessionPackage/prerequisites">See details</a>
`options?` | In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. | <a href="#ProfessionPackage/options">See details</a>
`special_abilities?` | Any special abilities the profession receives from the package. | <a href="#ProfessionPackage/special_abilities">See details</a>
`combat_techniques?` | Provides ratings for the combat techniques that the hero receives from the package. | <a href="#ProfessionPackage/combat_techniques">See details</a>
`skills?` | The skill ratings the package grants to the hero. | <a href="#ProfessionPackage/skills">See details</a>
`spells?` | The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such. | <a href="#ProfessionPackage/spells">See details</a>
`liturgical_chants?` | Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated. | <a href="#ProfessionPackage/liturgical_chants">See details</a>
`suggested_advantages?` | Typical advantages for the profession. | <a href="#ProfessionPackage/suggested_advantages">See details</a>
`suggested_disadvantages?` | Typical disadvantages for the profession. | <a href="#ProfessionPackage/suggested_disadvantages">See details</a>
`unsuitable_advantages?` | These advantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionPackage/unsuitable_advantages">See details</a>
`unsuitable_disadvantages?` | These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionPackage/unsuitable_disadvantages">See details</a>
`variants?` | Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required. | <a href="#ProfessionPackage/variants">See details</a>

#### <a name="ProfessionPackage/ap_value"></a> `ap_value`

What does the professional package cost in adventure points?

- **Type:** Integer
- **Minimum:** `0`

#### <a name="ProfessionPackage/prerequisites"></a> `prerequisites?`

Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.

- **Type:** <a href="./_Prerequisite.md#ProfessionPrerequisites">ProfessionPrerequisites</a>

#### <a name="ProfessionPackage/options"></a> `options?`

In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.

- **Type:** <a href="#ProfessionPackageOptions">ProfessionPackageOptions</a>

#### <a name="ProfessionPackage/special_abilities"></a> `special_abilities?`

Any special abilities the profession receives from the package.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/special_abilities[]">ProfessionPackage/special_abilities[]</a>

#### <a name="ProfessionPackage/combat_techniques"></a> `combat_techniques?`

Provides ratings for the combat techniques that the hero receives from the package.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/combat_techniques[]">ProfessionPackage/combat_techniques[]</a>

#### <a name="ProfessionPackage/skills"></a> `skills?`

The skill ratings the package grants to the hero.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/skills[]">ProfessionPackage/skills[]</a>

#### <a name="ProfessionPackage/spells"></a> `spells?`

The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/spells[]">ProfessionPackage/spells[]</a>

#### <a name="ProfessionPackage/liturgical_chants"></a> `liturgical_chants?`

Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/liturgical_chants[]">ProfessionPackage/liturgical_chants[]</a>

#### <a name="ProfessionPackage/suggested_advantages"></a> `suggested_advantages?`

Typical advantages for the profession.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/suggested_advantages[]">ProfessionPackage/suggested_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackage/suggested_disadvantages"></a> `suggested_disadvantages?`

Typical disadvantages for the profession.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/suggested_disadvantages[]">ProfessionPackage/suggested_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackage/unsuitable_advantages"></a> `unsuitable_advantages?`

These advantages do not fit well with this profession; to be checked with the GM before taking any of them.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/unsuitable_advantages[]">ProfessionPackage/unsuitable_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackage/unsuitable_disadvantages"></a> `unsuitable_disadvantages?`

These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them.

- **Type:** List
- **Items:** <a href="#ProfessionPackage/unsuitable_disadvantages[]">ProfessionPackage/unsuitable_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackage/variants"></a> `variants?`

Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.

- **Type:** <a href="#ProfessionVariants">ProfessionVariants</a>

---

### <a name="ProfessionPackage/special_abilities[]"></a> `ProfessionPackage/special_abilities[]`

- **Type:** <a href="#ProfessionSpecialAbility">ProfessionSpecialAbility</a>

---

### <a name="ProfessionPackage/combat_techniques[]"></a> `ProfessionPackage/combat_techniques[]`

- **Type:** <a href="#CombatTechniqueRating">CombatTechniqueRating</a>

---

### <a name="ProfessionPackage/skills[]"></a> `ProfessionPackage/skills[]`

- **Type:** <a href="#SkillRating">SkillRating</a>

---

### <a name="ProfessionPackage/spells[]"></a> `ProfessionPackage/spells[]`

- **Type:** <a href="#SpellRating">SpellRating</a>

---

### <a name="ProfessionPackage/liturgical_chants[]"></a> `ProfessionPackage/liturgical_chants[]`

- **Type:** <a href="#LiturgicalChantRating">LiturgicalChantRating</a>

---

### <a name="ProfessionPackage/suggested_advantages[]"></a> `ProfessionPackage/suggested_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="ProfessionPackage/suggested_disadvantages[]"></a> `ProfessionPackage/suggested_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

---

### <a name="ProfessionPackage/unsuitable_advantages[]"></a> `ProfessionPackage/unsuitable_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>&gt;

---

### <a name="ProfessionPackage/unsuitable_disadvantages[]"></a> `ProfessionPackage/unsuitable_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>&lt;<a href="./_Identifier.md#DisadvantageIdentifier">DisadvantageIdentifier</a>&gt;

---

### <a name="ProfessionTranslation"></a> `ProfessionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the basic profession. | <a href="#ProfessionTranslation/name">See details</a>
`specification?` | A name addition of the profession. This will contain texts like name of the academy or the witch circle. It is enclosed in parenthesis, but the database entry must not contain parenthesis. | <a href="#ProfessionTranslation/specification">See details</a>
`suggested_advantages?` | Typical advantages for the profession. | <a href="#ProfessionTranslation/suggested_advantages">See details</a>
`suggested_disadvantages?` | Typical disadvantages for the profession. | <a href="#ProfessionTranslation/suggested_disadvantages">See details</a>
`unsuitable_advantages?` | These advantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionTranslation/unsuitable_advantages">See details</a>
`unsuitable_disadvantages?` | These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionTranslation/unsuitable_disadvantages">See details</a>
`errata?` |  | <a href="#ProfessionTranslation/errata">See details</a>

#### <a name="ProfessionTranslation/name"></a> `name`

Name of the basic profession.

- **Type:** <a href="#ProfessionName">ProfessionName</a>

#### <a name="ProfessionTranslation/specification"></a> `specification?`

A name addition of the profession. This will contain texts like name of the academy or the witch circle. It is enclosed in parenthesis, but the database entry must not contain parenthesis.

- **Type:** <a href="#ProfessionName">ProfessionName</a>

#### <a name="ProfessionTranslation/suggested_advantages"></a> `suggested_advantages?`

Typical advantages for the profession.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/suggested_disadvantages"></a> `suggested_disadvantages?`

Typical disadvantages for the profession.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/unsuitable_advantages"></a> `unsuitable_advantages?`

These advantages do not fit well with this profession; to be checked with the GM before taking any of them.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/unsuitable_disadvantages"></a> `unsuitable_disadvantages?`

These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ProfessionVariants"></a> `ProfessionVariants`

Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_selection_required` | If the selection of a profession variant is required. | <a href="#ProfessionVariants/is_selection_required">See details</a>
`list` | The list of profession variants. | <a href="#ProfessionVariants/list">See details</a>

#### <a name="ProfessionVariants/is_selection_required"></a> `is_selection_required`

If the selection of a profession variant is required.

- **Type:** Boolean

#### <a name="ProfessionVariants/list"></a> `list`

The list of profession variants.

- **Type:** List
- **Items:** <a href="#ProfessionVariants/list[]">ProfessionVariants/list[]</a>
- **Minimum Items:** `1`

---

### <a name="ProfessionVariants/list[]"></a> `ProfessionVariants/list[]`

- **Type:** <a href="#ProfessionVariant">ProfessionVariant</a>

---

### <a name="ProfessionVariant"></a> Profession Variant (`ProfessionVariant`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession variant's identifier. An unique, increasing integer. | <a href="#ProfessionVariant/id">See details</a>
`ap_value` | The AP value you have to pay for the package variant. | <a href="#ProfessionVariant/ap_value">See details</a>
`prerequisites?` | Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites. | <a href="#ProfessionVariant/prerequisites">See details</a>
`options?` |  | <a href="#ProfessionVariant/options">See details</a>
`special_abilities?` | Any special abilities the profession receives from the package variant. | <a href="#ProfessionVariant/special_abilities">See details</a>
`combat_techniques?` | Provides ratings for the combat techniques that the hero receives from the package variant. | <a href="#ProfessionVariant/combat_techniques">See details</a>
`skills?` | The skill ratings the package variant grants to the hero. | <a href="#ProfessionVariant/skills">See details</a>
`spells?` | The skill ratings a magical profession variant receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such. | <a href="#ProfessionVariant/spells">See details</a>
`liturgical_chants?` | Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated. | <a href="#ProfessionVariant/liturgical_chants">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionVariant/translations">See details</a>

#### <a name="ProfessionVariant/id"></a> `id`

The profession variant's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ProfessionVariant/ap_value"></a> `ap_value`

The AP value you have to pay for the package variant.

- **Type:** Integer

#### <a name="ProfessionVariant/prerequisites"></a> `prerequisites?`

Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites.

- **Type:** <a href="./_Prerequisite.md#ProfessionPrerequisites">ProfessionPrerequisites</a>

#### <a name="ProfessionVariant/options"></a> `options?`

- **Type:** <a href="#ProfessionVariantPackageOptions">ProfessionVariantPackageOptions</a>

#### <a name="ProfessionVariant/special_abilities"></a> `special_abilities?`

Any special abilities the profession receives from the package variant.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/special_abilities[]">ProfessionVariant/special_abilities[]</a>

#### <a name="ProfessionVariant/combat_techniques"></a> `combat_techniques?`

Provides ratings for the combat techniques that the hero receives from the package variant.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/combat_techniques[]">ProfessionVariant/combat_techniques[]</a>

#### <a name="ProfessionVariant/skills"></a> `skills?`

The skill ratings the package variant grants to the hero.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/skills[]">ProfessionVariant/skills[]</a>

#### <a name="ProfessionVariant/spells"></a> `spells?`

The skill ratings a magical profession variant receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/spells[]">ProfessionVariant/spells[]</a>

#### <a name="ProfessionVariant/liturgical_chants"></a> `liturgical_chants?`

Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/liturgical_chants[]">ProfessionVariant/liturgical_chants[]</a>

#### <a name="ProfessionVariant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ProfessionVariantTranslation">ProfessionVariantTranslation</a>&gt;

---

### <a name="ProfessionVariant/special_abilities[]"></a> `ProfessionVariant/special_abilities[]`

- **Type:** <a href="#VariantSpecialAbility">VariantSpecialAbility</a>

---

### <a name="ProfessionVariant/combat_techniques[]"></a> `ProfessionVariant/combat_techniques[]`

- **Type:** <a href="#CombatTechniqueRating">CombatTechniqueRating</a>

---

### <a name="ProfessionVariant/skills[]"></a> `ProfessionVariant/skills[]`

- **Type:** <a href="#SkillRating">SkillRating</a>

---

### <a name="ProfessionVariant/spells[]"></a> `ProfessionVariant/spells[]`

- **Type:** <a href="#SpellRating">SpellRating</a>

---

### <a name="ProfessionVariant/liturgical_chants[]"></a> `ProfessionVariant/liturgical_chants[]`

- **Type:** <a href="#LiturgicalChantRating">LiturgicalChantRating</a>

---

### <a name="ProfessionVariantTranslation"></a> `ProfessionVariantTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the profession variant. | <a href="#ProfessionVariantTranslation/name">See details</a>
`full_text?` | A text that replaces the generated text for the profession variant. | <a href="#ProfessionVariantTranslation/full_text">See details</a>
`concluding_text?` | A text that is appended to the generated text for the profession variant. | <a href="#ProfessionVariantTranslation/concluding_text">See details</a>

#### <a name="ProfessionVariantTranslation/name"></a> `name`

Name of the profession variant.

- **Type:** <a href="#ProfessionName">ProfessionName</a>

#### <a name="ProfessionVariantTranslation/full_text"></a> `full_text?`

A text that replaces the generated text for the profession variant.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionVariantTranslation/concluding_text"></a> `concluding_text?`

A text that is appended to the generated text for the profession variant.

Has no effect when `full_text` is set.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ProfessionSpecialAbility"></a> `ProfessionSpecialAbility`

- **Type:** Union
- **Cases:** <a href="#ProfessionSpecialAbility'Fixed">ProfessionSpecialAbility'Fixed</a> | <a href="#ProfessionSpecialAbility'Selection">ProfessionSpecialAbility'Selection</a>

---

### <a name="ProfessionSpecialAbility'Fixed"></a> `ProfessionSpecialAbility'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionSpecialAbility'Fixed/tag">See details</a>
`fixed` |  | <a href="#ProfessionSpecialAbility'Fixed/fixed">See details</a>

#### <a name="ProfessionSpecialAbility'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="ProfessionSpecialAbility'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedSpecialAbility">FixedSpecialAbility</a>

---

### <a name="ProfessionSpecialAbility'Selection"></a> `ProfessionSpecialAbility'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionSpecialAbility'Selection/tag">See details</a>
`selection` |  | <a href="#ProfessionSpecialAbility'Selection/selection">See details</a>

#### <a name="ProfessionSpecialAbility'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="ProfessionSpecialAbility'Selection/selection"></a> `selection`

- **Type:** <a href="#SpecialAbilitySelection">SpecialAbilitySelection</a>

---

### <a name="FixedSpecialAbility"></a> `FixedSpecialAbility`

- **Type:** <a href="#SpecialAbilityDefinition">SpecialAbilityDefinition</a>

---

### <a name="SpecialAbilitySelection"></a> `SpecialAbilitySelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` |  | <a href="#SpecialAbilitySelection/options">See details</a>

#### <a name="SpecialAbilitySelection/options"></a> `options`

- **Type:** List
- **Items:** <a href="#SpecialAbilitySelection/options[]">SpecialAbilitySelection/options[]</a>
- **Minimum Items:** `2`

---

### <a name="SpecialAbilitySelection/options[]"></a> `SpecialAbilitySelection/options[]`

- **Type:** <a href="#SpecialAbilityDefinition">SpecialAbilityDefinition</a>

---

### <a name="SpecialAbilityDefinition"></a> `SpecialAbilityDefinition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#SpecialAbilityDefinition/id">See details</a>
`level?` | The level of the received special ability. | <a href="#SpecialAbilityDefinition/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#SpecialAbilityDefinition/options">See details</a>

#### <a name="SpecialAbilityDefinition/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_IdentifierGroup.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="SpecialAbilityDefinition/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpecialAbilityDefinition/options"></a> `options?`

Received select options. Order is important. Typically, you only need the first array index, though.

- **Type:** List
- **Items:** <a href="#SpecialAbilityDefinition/options[]">SpecialAbilityDefinition/options[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecialAbilityDefinition/options[]"></a> `SpecialAbilityDefinition/options[]`

- **Type:** <a href="./_IdentifierGroup.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="VariantSpecialAbility"></a> `VariantSpecialAbility`

- **Type:** Union
- **Cases:** <a href="#VariantSpecialAbility'Fixed">VariantSpecialAbility'Fixed</a> | <a href="#VariantSpecialAbility'Selection">VariantSpecialAbility'Selection</a>

---

### <a name="VariantSpecialAbility'Fixed"></a> `VariantSpecialAbility'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantSpecialAbility'Fixed/tag">See details</a>
`fixed` |  | <a href="#VariantSpecialAbility'Fixed/fixed">See details</a>

#### <a name="VariantSpecialAbility'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="VariantSpecialAbility'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedVariantSpecialAbility">FixedVariantSpecialAbility</a>

---

### <a name="VariantSpecialAbility'Selection"></a> `VariantSpecialAbility'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantSpecialAbility'Selection/tag">See details</a>
`selection` |  | <a href="#VariantSpecialAbility'Selection/selection">See details</a>

#### <a name="VariantSpecialAbility'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="VariantSpecialAbility'Selection/selection"></a> `selection`

- **Type:** <a href="#VariantSpecialAbilitySelection">VariantSpecialAbilitySelection</a>

---

### <a name="FixedVariantSpecialAbility"></a> `FixedVariantSpecialAbility`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#FixedVariantSpecialAbility/id">See details</a>
`active?` | if set to `false`, if the selection is granted by the basic package, it is removed. | <a href="#FixedVariantSpecialAbility/active">See details</a>
`level?` | The level of the received special ability. | <a href="#FixedVariantSpecialAbility/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#FixedVariantSpecialAbility/options">See details</a>

#### <a name="FixedVariantSpecialAbility/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_IdentifierGroup.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="FixedVariantSpecialAbility/active"></a> `active?`

if set to `false`, if the selection is granted by the basic package, it is removed.

- **Constant:** `false`

#### <a name="FixedVariantSpecialAbility/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedVariantSpecialAbility/options"></a> `options?`

Received select options. Order is important. Typically, you only need the first array index, though.

- **Type:** List
- **Items:** <a href="#FixedVariantSpecialAbility/options[]">FixedVariantSpecialAbility/options[]</a>
- **Minimum Items:** `1`

---

### <a name="FixedVariantSpecialAbility/options[]"></a> `FixedVariantSpecialAbility/options[]`

- **Type:** <a href="./_IdentifierGroup.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="VariantSpecialAbilitySelection"></a> `VariantSpecialAbilitySelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`active?` | if set to `false`, if the selection is granted by the basic package, it is removed. | <a href="#VariantSpecialAbilitySelection/active">See details</a>
`options` |  | <a href="#VariantSpecialAbilitySelection/options">See details</a>

#### <a name="VariantSpecialAbilitySelection/active"></a> `active?`

if set to `false`, if the selection is granted by the basic package, it is removed.

- **Constant:** `false`

#### <a name="VariantSpecialAbilitySelection/options"></a> `options`

- **Type:** List
- **Items:** <a href="#VariantSpecialAbilitySelection/options[]">VariantSpecialAbilitySelection/options[]</a>
- **Minimum Items:** `2`

---

### <a name="VariantSpecialAbilitySelection/options[]"></a> `VariantSpecialAbilitySelection/options[]`

- **Type:** <a href="#SpecialAbilityDefinition">SpecialAbilityDefinition</a>

---

### <a name="CombatTechniqueRating"></a> `CombatTechniqueRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#CombatTechniqueRating/id">See details</a>
`rating` | The rating bonus provided for the combat technique. If used in a profession variant, it can also be used to lower the bonus of the base profession. | <a href="#CombatTechniqueRating/rating">See details</a>

#### <a name="CombatTechniqueRating/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_IdentifierGroup.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="CombatTechniqueRating/rating"></a> `rating`

The rating bonus provided for the combat technique. If used in a profession variant, it can also be used to lower the bonus of the base profession.

**Note:** This is a rating *bonus*, so it will be *added* to the default
value of 6.

- **Type:** Integer
- **Minimum:** `-6`
- **Maximum:** `6`

---

### <a name="SkillRating"></a> `SkillRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the skill to provide the rating for. | <a href="#SkillRating/id">See details</a>
`rating` | The rating bonus provided for the skill. If used in a profession variant, it can also be used to lower the bonus of the base profession | <a href="#SkillRating/rating">See details</a>

#### <a name="SkillRating/id"></a> `id`

The identifier of the skill to provide the rating for.

- **Type:** <a href="./_Identifier.md#SkillIdentifier">SkillIdentifier</a>

#### <a name="SkillRating/rating"></a> `rating`

The rating bonus provided for the skill. If used in a profession variant, it can also be used to lower the bonus of the base profession

- **Type:** Integer
- **Minimum:** `-8`
- **Maximum:** `8`

---

### <a name="SpellRating"></a> `SpellRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier(s) of the spell(s) to choose from to provide the rating for. If multiple spells are provided, they must all have the same improvement cost. | <a href="#SpellRating/id">See details</a>
`rating` | The rating bonus provided for the (selected) spell. If used in a profession variant, it can also be used to lower the bonus of the base profession. | <a href="#SpellRating/rating">See details</a>

#### <a name="SpellRating/id"></a> `id`

The identifier(s) of the spell(s) to choose from to provide the rating for. If multiple spells are provided, they must all have the same improvement cost.

- **Type:** List
- **Items:** <a href="#SpellRating/id[]">SpellRating/id[]</a>
- **Minimum Items:** `1`

#### <a name="SpellRating/rating"></a> `rating`

The rating bonus provided for the (selected) spell. If used in a profession variant, it can also be used to lower the bonus of the base profession.

- **Type:** Integer
- **Minimum:** `-10`
- **Maximum:** `10`

---

### <a name="SpellRating/id[]"></a> `SpellRating/id[]`

- **Type:** <a href="#ProfessionSpellIdentifier">ProfessionSpellIdentifier</a>

---

### <a name="ProfessionSpellIdentifier"></a> `ProfessionSpellIdentifier`

- **Type:** Union
- **Cases:** <a href="#ProfessionSpellIdentifier'Spellwork">ProfessionSpellIdentifier'Spellwork</a> | <a href="#ProfessionSpellIdentifier'MagicalAction">ProfessionSpellIdentifier'MagicalAction</a>

---

### <a name="ProfessionSpellIdentifier'Spellwork"></a> `ProfessionSpellIdentifier'Spellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionSpellIdentifier'Spellwork/tag">See details</a>
`spellwork` |  | <a href="#ProfessionSpellIdentifier'Spellwork/spellwork">See details</a>

#### <a name="ProfessionSpellIdentifier'Spellwork/tag"></a> `tag`

- **Constant:** `"Spellwork"`

#### <a name="ProfessionSpellIdentifier'Spellwork/spellwork"></a> `spellwork`

- **Type:** <a href="#ProfessionSpellworkIdentifier">ProfessionSpellworkIdentifier</a>

---

### <a name="ProfessionSpellIdentifier'MagicalAction"></a> `ProfessionSpellIdentifier'MagicalAction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionSpellIdentifier'MagicalAction/tag">See details</a>
`magical_action` |  | <a href="#ProfessionSpellIdentifier'MagicalAction/magical_action">See details</a>

#### <a name="ProfessionSpellIdentifier'MagicalAction/tag"></a> `tag`

- **Constant:** `"MagicalAction"`

#### <a name="ProfessionSpellIdentifier'MagicalAction/magical_action"></a> `magical_action`

- **Type:** <a href="#ProfessionMagicalActionIdentifier">ProfessionMagicalActionIdentifier</a>

---

### <a name="ProfessionSpellworkIdentifier"></a> `ProfessionSpellworkIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the spell to provide the rating for. | <a href="#ProfessionSpellworkIdentifier/id">See details</a>
`tradition?` | If the spell is not part of the magical tradition required by the package, this references the magical tradition it is part of. It can also be used to define the target magical tradition of a spell if multiple magical traditions are required and the spell is available to multiple of them. | <a href="#ProfessionSpellworkIdentifier/tradition">See details</a>

#### <a name="ProfessionSpellworkIdentifier/id"></a> `id`

The identifier of the spell to provide the rating for.

- **Type:** <a href="./_IdentifierGroup.md#SpellworkIdentifier">SpellworkIdentifier</a>

#### <a name="ProfessionSpellworkIdentifier/tradition"></a> `tradition?`

If the spell is not part of the magical tradition required by the package, this references the magical tradition it is part of. It can also be used to define the target magical tradition of a spell if multiple magical traditions are required and the spell is available to multiple of them.

- **Type:** <a href="./_SimpleReferences.md#MagicalTraditionReference">MagicalTraditionReference</a>

---

### <a name="ProfessionMagicalActionIdentifier"></a> `ProfessionMagicalActionIdentifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the magical action to provide the rating for. | <a href="#ProfessionMagicalActionIdentifier/id">See details</a>

#### <a name="ProfessionMagicalActionIdentifier/id"></a> `id`

The identifier of the magical action to provide the rating for.

- **Type:** <a href="./_IdentifierGroup.md#MagicalActionIdentifier">MagicalActionIdentifier</a>

---

### <a name="LiturgicalChantRating"></a> `LiturgicalChantRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier(s) of the liturgical chant(s) to choose from to provide the rating for. If multiple liturgical chants are provided, they must all have the same improvement cost. | <a href="#LiturgicalChantRating/id">See details</a>
`rating` | The rating bonus provided for the selected liturgical chant. If used in a profession variant, it can also be used to lower the bonus of the base profession. | <a href="#LiturgicalChantRating/rating">See details</a>

#### <a name="LiturgicalChantRating/id"></a> `id`

The identifier(s) of the liturgical chant(s) to choose from to provide the rating for. If multiple liturgical chants are provided, they must all have the same improvement cost.

- **Type:** List
- **Items:** <a href="#LiturgicalChantRating/id[]">LiturgicalChantRating/id[]</a>
- **Minimum Items:** `1`

#### <a name="LiturgicalChantRating/rating"></a> `rating`

The rating bonus provided for the selected liturgical chant. If used in a profession variant, it can also be used to lower the bonus of the base profession.

- **Type:** Integer
- **Minimum:** `-10`
- **Maximum:** `10`

---

### <a name="LiturgicalChantRating/id[]"></a> `LiturgicalChantRating/id[]`

- **Type:** <a href="./_IdentifierGroup.md#LiturgyIdentifier">LiturgyIdentifier</a>

---

### <a name="ProfessionPackageOptions"></a> `ProfessionPackageOptions`

In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`skill_specialization?` |  | <a href="#ProfessionPackageOptions/skill_specialization">See details</a>
`languages_scripts?` |  | <a href="#ProfessionPackageOptions/languages_scripts">See details</a>
`combat_techniques?` |  | <a href="#ProfessionPackageOptions/combat_techniques">See details</a>
`cantrips?` |  | <a href="#ProfessionPackageOptions/cantrips">See details</a>
`curses?` |  | <a href="#ProfessionPackageOptions/curses">See details</a>
`terrain_knowledge?` |  | <a href="#ProfessionPackageOptions/terrain_knowledge">See details</a>
`skills?` |  | <a href="#ProfessionPackageOptions/skills">See details</a>

#### <a name="ProfessionPackageOptions/skill_specialization"></a> `skill_specialization?`

- **Type:** <a href="#SkillSpecializationOptions">SkillSpecializationOptions</a>

#### <a name="ProfessionPackageOptions/languages_scripts"></a> `languages_scripts?`

- **Type:** <a href="#LanguagesScriptsOptions">LanguagesScriptsOptions</a>

#### <a name="ProfessionPackageOptions/combat_techniques"></a> `combat_techniques?`

- **Type:** <a href="#CombatTechniquesOptions">CombatTechniquesOptions</a>

#### <a name="ProfessionPackageOptions/cantrips"></a> `cantrips?`

- **Type:** <a href="#CantripsOptions">CantripsOptions</a>

#### <a name="ProfessionPackageOptions/curses"></a> `curses?`

- **Type:** <a href="#CursesOptions">CursesOptions</a>

#### <a name="ProfessionPackageOptions/terrain_knowledge"></a> `terrain_knowledge?`

- **Type:** <a href="#TerrainKnowledgeOptions">TerrainKnowledgeOptions</a>

#### <a name="ProfessionPackageOptions/skills"></a> `skills?`

- **Type:** <a href="#SkillsOptions">SkillsOptions</a>

---

### <a name="ProfessionVariantPackageOptions"></a> `ProfessionVariantPackageOptions`

In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. The variant may override or remove those options.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`skill_specialization?` |  | <a href="#ProfessionVariantPackageOptions/skill_specialization">See details</a>
`languages_scripts?` |  | <a href="#ProfessionVariantPackageOptions/languages_scripts">See details</a>
`combat_techniques?` |  | <a href="#ProfessionVariantPackageOptions/combat_techniques">See details</a>
`cantrips?` |  | <a href="#ProfessionVariantPackageOptions/cantrips">See details</a>
`curses?` |  | <a href="#ProfessionVariantPackageOptions/curses">See details</a>
`terrain_knowledge?` |  | <a href="#ProfessionVariantPackageOptions/terrain_knowledge">See details</a>
`skills?` |  | <a href="#ProfessionVariantPackageOptions/skills">See details</a>

#### <a name="ProfessionVariantPackageOptions/skill_specialization"></a> `skill_specialization?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#SkillSpecializationOptions">SkillSpecializationOptions</a>&gt;

#### <a name="ProfessionVariantPackageOptions/languages_scripts"></a> `languages_scripts?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#LanguagesScriptsOptions">LanguagesScriptsOptions</a>&gt;

#### <a name="ProfessionVariantPackageOptions/combat_techniques"></a> `combat_techniques?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#CombatTechniquesOptions">CombatTechniquesOptions</a>&gt;

#### <a name="ProfessionVariantPackageOptions/cantrips"></a> `cantrips?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#CantripsOptions">CantripsOptions</a>&gt;

#### <a name="ProfessionVariantPackageOptions/curses"></a> `curses?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#CursesOptions">CursesOptions</a>&gt;

#### <a name="ProfessionVariantPackageOptions/terrain_knowledge"></a> `terrain_knowledge?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#TerrainKnowledgeOptions">TerrainKnowledgeOptions</a>&gt;

#### <a name="ProfessionVariantPackageOptions/skills"></a> `skills?`

- **Type:** <a href="#VariantOptionAction">VariantOptionAction</a>&lt;<a href="#SkillsOptions">SkillsOptions</a>&gt;

---

### <a name="VariantOptionAction"></a> `VariantOptionAction<T>`

- **Type:** Union
- **Cases:** <a href="#VariantOptionAction'Remove">VariantOptionAction'Remove</a> | <a href="#VariantOptionAction'Override">VariantOptionAction'Override</a>

---

### <a name="VariantOptionAction'Remove"></a> `VariantOptionAction'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantOptionAction'Remove/tag">See details</a>
`remove` |  | <a href="#VariantOptionAction'Remove/remove">See details</a>

#### <a name="VariantOptionAction'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

#### <a name="VariantOptionAction'Remove/remove"></a> `remove`

- **Type:** <a href="#VariantOptionAction'Remove/remove">Object</a>

---

### <a name="VariantOptionAction'Remove/remove"></a> `VariantOptionAction'Remove/remove`

- **Type:** Empty Object

---

### <a name="VariantOptionAction'Override"></a> `VariantOptionAction'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantOptionAction'Override/tag">See details</a>
`override` |  | <a href="#VariantOptionAction'Override/override">See details</a>

#### <a name="VariantOptionAction'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="VariantOptionAction'Override/override"></a> `override`

- **Type:** <a href="#T">T</a>

---

### <a name="SkillSpecializationOptions"></a> `SkillSpecializationOptions`

Select an application from a skill or from one of a list of skills where you get a skill specialization for. You can also specify a skill groups from which you can choose a skill.

- **Type:** Union
- **Cases:** <a href="#SkillSpecializationOptions'Single">SkillSpecializationOptions'Single</a> | <a href="#SkillSpecializationOptions'Group">SkillSpecializationOptions'Group</a>

---

### <a name="SkillSpecializationOptions'Single"></a> `SkillSpecializationOptions'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillSpecializationOptions'Single/tag">See details</a>
`single` |  | <a href="#SkillSpecializationOptions'Single/single">See details</a>

#### <a name="SkillSpecializationOptions'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SkillSpecializationOptions'Single/single"></a> `single`

- **Type:** <a href="#SingleSkillSpecializationOption">SingleSkillSpecializationOption</a>

---

### <a name="SkillSpecializationOptions'Group"></a> `SkillSpecializationOptions'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillSpecializationOptions'Group/tag">See details</a>
`group` |  | <a href="#SkillSpecializationOptions'Group/group">See details</a>

#### <a name="SkillSpecializationOptions'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="SkillSpecializationOptions'Group/group"></a> `group`

- **Type:** <a href="#SkillGroupSkillSpecializationOption">SkillGroupSkillSpecializationOption</a>

---

### <a name="SingleSkillSpecializationOption"></a> `SingleSkillSpecializationOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | Possible skills to get a skill specialization for. | <a href="#SingleSkillSpecializationOption/options">See details</a>

#### <a name="SingleSkillSpecializationOption/options"></a> `options`

Possible skills to get a skill specialization for.

- **Type:** List
- **Items:** <a href="#SingleSkillSpecializationOption/options[]">SingleSkillSpecializationOption/options[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="SingleSkillSpecializationOption/options[]"></a> `SingleSkillSpecializationOption/options[]`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="SkillGroupSkillSpecializationOption"></a> `SkillGroupSkillSpecializationOption`

- **Type:** <a href="./_SimpleReferences.md#SkillGroupReference">SkillGroupReference</a>

---

### <a name="LanguagesScriptsOptions"></a> `LanguagesScriptsOptions`

Buy languages and scripts for a specific amount of AP.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | The AP value you can buy languages and scripts for. | <a href="#LanguagesScriptsOptions/ap_value">See details</a>

#### <a name="LanguagesScriptsOptions/ap_value"></a> `ap_value`

The AP value you can buy languages and scripts for.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

---

### <a name="CombatTechniquesOptions"></a> `CombatTechniquesOptions`

Select one or more combat techniques you get a CtR bonus for.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`fixed` | Specify the number of combat techniques that can be selected so that they get increased to a specific CtR. There can be multiple selections with different CtRs. | <a href="#CombatTechniquesOptions/fixed">See details</a>
`rest_rating?` | Define if after the fixed selections the remaining unselected combat techniques will receive a certain rating bonus as well. | <a href="#CombatTechniquesOptions/rest_rating">See details</a>
`options` | The list of combat techniques to choose from. | <a href="#CombatTechniquesOptions/options">See details</a>

#### <a name="CombatTechniquesOptions/fixed"></a> `fixed`

Specify the number of combat techniques that can be selected so that they get increased to a specific CtR. There can be multiple selections with different CtRs.

- **Type:** List
- **Items:** <a href="#CombatTechniquesOptions/fixed[]">CombatTechniquesOptions/fixed[]</a>
- **Minimum Items:** `1`

#### <a name="CombatTechniquesOptions/rest_rating"></a> `rest_rating?`

Define if after the fixed selections the remaining unselected combat techniques will receive a certain rating bonus as well.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="CombatTechniquesOptions/options"></a> `options`

The list of combat techniques to choose from.

- **Type:** List
- **Items:** <a href="#CombatTechniquesOptions/options[]">CombatTechniquesOptions/options[]</a>
- **Minimum Items:** `2`

---

### <a name="CombatTechniquesOptions/fixed[]"></a> `CombatTechniquesOptions/fixed[]`

- **Type:** <a href="#RatingForCombatTechniquesNumber">RatingForCombatTechniquesNumber</a>

---

### <a name="CombatTechniquesOptions/options[]"></a> `CombatTechniquesOptions/options[]`

- **Type:** <a href="./_SimpleReferences.md#CombatTechniqueReference">CombatTechniqueReference</a>

---

### <a name="RatingForCombatTechniquesNumber"></a> `RatingForCombatTechniquesNumber`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The number of selectable combat techniques. | <a href="#RatingForCombatTechniquesNumber/number">See details</a>
`rating` | The rating bonus provided for the selected combat technique(s). | <a href="#RatingForCombatTechniquesNumber/rating">See details</a>

#### <a name="RatingForCombatTechniquesNumber/number"></a> `number`

The number of selectable combat techniques.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatingForCombatTechniquesNumber/rating"></a> `rating`

The rating bonus provided for the selected combat technique(s).

**Note:** This is a rating *bonus*, so it will be *added* to the default
value of 6.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="CantripsOptions"></a> `CantripsOptions`

Select one or more cantrips you receive.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The number of selectable cantrips. | <a href="#CantripsOptions/number">See details</a>
`options` | The list of cantrips to choose from. | <a href="#CantripsOptions/options">See details</a>

#### <a name="CantripsOptions/number"></a> `number`

The number of selectable cantrips.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CantripsOptions/options"></a> `options`

The list of cantrips to choose from.

- **Type:** List
- **Items:** <a href="#CantripsOptions/options[]">CantripsOptions/options[]</a>
- **Minimum Items:** `2`

---

### <a name="CantripsOptions/options[]"></a> `CantripsOptions/options[]`

- **Type:** <a href="./_SimpleReferences.md#CantripReference">CantripReference</a>

---

### <a name="CursesOptions"></a> `CursesOptions`

Buy curses for a specific amount of AP.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | The AP value you can buy curses for. | <a href="#CursesOptions/ap_value">See details</a>

#### <a name="CursesOptions/ap_value"></a> `ap_value`

The AP value you can buy curses for.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

---

### <a name="TerrainKnowledgeOptions"></a> `TerrainKnowledgeOptions`

Select one of a list of possible terrain knowledges

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The list of possible terrain knowledges. | <a href="#TerrainKnowledgeOptions/options">See details</a>

#### <a name="TerrainKnowledgeOptions/options"></a> `options`

The list of possible terrain knowledges.

- **Type:** List
- **Items:** <a href="#TerrainKnowledgeOptions/options[]">TerrainKnowledgeOptions/options[]</a>
- **Minimum Items:** `2`

---

### <a name="TerrainKnowledgeOptions/options[]"></a> `TerrainKnowledgeOptions/options[]`

- **Type:** <a href="#TerrainKnowledgeOptionReference">TerrainKnowledgeOptionReference</a>

---

### <a name="TerrainKnowledgeOptionReference"></a> `TerrainKnowledgeOptionReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The terrain knowledge option's identifier. | <a href="#TerrainKnowledgeOptionReference/id">See details</a>

#### <a name="TerrainKnowledgeOptionReference/id"></a> `id`

The terrain knowledge option's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `10`

---

### <a name="SkillsOptions"></a> `SkillsOptions`

Buy skills for a specific amount of AP.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`group?` | If specified, you may only choose from skills of the specified group. | <a href="#SkillsOptions/group">See details</a>
`ap_value` | The AP value you can buy skills for. | <a href="#SkillsOptions/ap_value">See details</a>

#### <a name="SkillsOptions/group"></a> `group?`

If specified, you may only choose from skills of the specified group.

- **Type:** <a href="./_SimpleReferences.md#SkillGroupReference">SkillGroupReference</a>

#### <a name="SkillsOptions/ap_value"></a> `ap_value`

The AP value you can buy skills for.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ProfessionName"></a> `ProfessionName`

The name of the profession that may have sex-specific names.

- **Type:** Union
- **Cases:** <a href="#ProfessionName'SimpleProfessionName">ProfessionName'SimpleProfessionName</a> | <a href="#ProfessionName'ProfessionNameBySex">ProfessionName'ProfessionNameBySex</a>

---

### <a name="ProfessionName'SimpleProfessionName"></a> `ProfessionName'SimpleProfessionName`

- **Type:** <a href="#SimpleProfessionName">SimpleProfessionName</a>

---

### <a name="ProfessionName'ProfessionNameBySex"></a> `ProfessionName'ProfessionNameBySex`

- **Type:** <a href="#ProfessionNameBySex">ProfessionNameBySex</a>

---

### <a name="SimpleProfessionName"></a> `SimpleProfessionName`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ProfessionNameBySex"></a> `ProfessionNameBySex`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The name from the source publication. | <a href="#ProfessionNameBySex/default">See details</a>
`male` | The male name. | <a href="#ProfessionNameBySex/male">See details</a>
`female` | The female name. | <a href="#ProfessionNameBySex/female">See details</a>

#### <a name="ProfessionNameBySex/default"></a> `default`

The name from the source publication.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionNameBySex/male"></a> `male`

The male name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionNameBySex/female"></a> `female`

The female name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
