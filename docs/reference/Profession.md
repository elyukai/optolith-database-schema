# Profession

## Definitions

### <a name="Profession"></a> Profession (`Profession`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession's identifier. An unique, increasing integer. | <a href="#Profession/id">See details</a>
`group` | The profession group. | <a href="#Profession/group">See details</a>
`packages` | A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook. | <a href="#Profession/packages">See details</a>

#### <a name="Profession/id"></a> `id`

The profession's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Profession/group"></a> `group`

The profession group.

- **Type:** <a href="#ProfessionGroup">ProfessionGroup</a>

#### <a name="Profession/packages"></a> `packages`

A list of professions representing the same profession but with (slightly)
different stats. For example, there may be a profession in a regional
sourcebook or in the core rules and a profession in an extension rulebook
like Magic of Aventuria, where the profession is basically called the same
and almost has the same values, but the version from Magic of Aventuria
features a spell style special ability that does not exist in the core
rules or regional sourcebook.

The profession representation may feature different values for different
explicitly mentioned experience levels. In most cases, there is only one
stats package, which targets the experience level *Experienced*.

- **Type:** List
- **Items:** <a href="#Profession/packages[]">Profession/packages[]</a>
- **Minimum Items:** `1`

---

### <a name="Profession/packages[]"></a> `Profession/packages[]`

- **Type:** <a href="#ProfessionPackage">ProfessionPackage</a>

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

#### <a name="ProfessionGroup'Blessed/tag"></a> `tag`

- **Constant:** `"Blessed"`

---

### <a name="MundaneProfessionGroup"></a> `MundaneProfessionGroup`

- **Type:** Union
- **Cases:** <a href="#MundaneProfessionGroup'Profane">MundaneProfessionGroup'Profane</a> | <a href="#MundaneProfessionGroup'Fighter">MundaneProfessionGroup'Fighter</a> | <a href="#MundaneProfessionGroup'Religious">MundaneProfessionGroup'Religious</a>

---

### <a name="MundaneProfessionGroup'Profane"></a> `MundaneProfessionGroup'Profane`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MundaneProfessionGroup'Profane/tag">See details</a>

#### <a name="MundaneProfessionGroup'Profane/tag"></a> `tag`

- **Constant:** `"Profane"`

---

### <a name="MundaneProfessionGroup'Fighter"></a> `MundaneProfessionGroup'Fighter`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MundaneProfessionGroup'Fighter/tag">See details</a>

#### <a name="MundaneProfessionGroup'Fighter/tag"></a> `tag`

- **Constant:** `"Fighter"`

---

### <a name="MundaneProfessionGroup'Religious"></a> `MundaneProfessionGroup'Religious`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MundaneProfessionGroup'Religious/tag">See details</a>

#### <a name="MundaneProfessionGroup'Religious/tag"></a> `tag`

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

### <a name="ProfessionPackage"></a> `ProfessionPackage`

- **Type:** Union
- **Cases:** <a href="#ProfessionPackage'Experienced">ProfessionPackage'Experienced</a> | <a href="#ProfessionPackage'ByExperienceLevel">ProfessionPackage'ByExperienceLevel</a>

---

### <a name="ProfessionPackage'Experienced"></a> `ProfessionPackage'Experienced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPackage'Experienced/tag">See details</a>
`experienced` |  | <a href="#ProfessionPackage'Experienced/experienced">See details</a>

#### <a name="ProfessionPackage'Experienced/tag"></a> `tag`

- **Constant:** `"Experienced"`

#### <a name="ProfessionPackage'Experienced/experienced"></a> `experienced`

- **Type:** <a href="#ExperiencedProfessionPackage">ExperiencedProfessionPackage</a>

---

### <a name="ProfessionPackage'ByExperienceLevel"></a> `ProfessionPackage'ByExperienceLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionPackage'ByExperienceLevel/tag">See details</a>
`by_experience_level` |  | <a href="#ProfessionPackage'ByExperienceLevel/by_experience_level">See details</a>

#### <a name="ProfessionPackage'ByExperienceLevel/tag"></a> `tag`

- **Constant:** `"ByExperienceLevel"`

#### <a name="ProfessionPackage'ByExperienceLevel/by_experience_level"></a> `by_experience_level`

- **Type:** <a href="#ProfessionPackagesForDifferentExperienceLevels">ProfessionPackagesForDifferentExperienceLevels</a>

---

### <a name="ExperiencedProfessionPackage"></a> `ExperiencedProfessionPackage`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession representation variant's identifier. An unique, increasing integer. | <a href="#ExperiencedProfessionPackage/id">See details</a>
`values` |  | <a href="#ExperiencedProfessionPackage/values">See details</a>
`src` |  | <a href="#ExperiencedProfessionPackage/src">See details</a>

#### <a name="ExperiencedProfessionPackage/id"></a> `id`

The profession representation variant's identifier. An unique, increasing
integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExperiencedProfessionPackage/values"></a> `values`

- **Type:** <a href="#ProfessionPackageValues">ProfessionPackageValues</a>

#### <a name="ExperiencedProfessionPackage/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="ProfessionPackagesForDifferentExperienceLevels"></a> `ProfessionPackagesForDifferentExperienceLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession representation variant's identifier. An unique, increasing integer. | <a href="#ProfessionPackagesForDifferentExperienceLevels/id">See details</a>
`values_map` |  | <a href="#ProfessionPackagesForDifferentExperienceLevels/values_map">See details</a>
`src` |  | <a href="#ProfessionPackagesForDifferentExperienceLevels/src">See details</a>

#### <a name="ProfessionPackagesForDifferentExperienceLevels/id"></a> `id`

The profession representation variant's identifier. An unique, increasing
integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ProfessionPackagesForDifferentExperienceLevels/values_map"></a> `values_map`

- **Type:** List
- **Items:** <a href="#ProfessionPackagesForDifferentExperienceLevels/values_map[]">ProfessionPackagesForDifferentExperienceLevels/values_map[]</a>

#### <a name="ProfessionPackagesForDifferentExperienceLevels/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="ProfessionPackagesForDifferentExperienceLevels/values_map[]"></a> `ProfessionPackagesForDifferentExperienceLevels/values_map[]`

- **Type:** <a href="#ExperienceLevelDynamicProfessionPackage">ExperienceLevelDynamicProfessionPackage</a>

---

### <a name="ExperienceLevelDynamicProfessionPackage"></a> `ExperienceLevelDynamicProfessionPackage`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`experience_level_id` | The experience level this profession targets. The experience level must be unique for this representation. | <a href="#ExperienceLevelDynamicProfessionPackage/experience_level_id">See details</a>
`values` |  | <a href="#ExperienceLevelDynamicProfessionPackage/values">See details</a>

#### <a name="ExperienceLevelDynamicProfessionPackage/experience_level_id"></a> `experience_level_id`

The experience level this profession targets. The experience level
must be unique for this representation.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `7`

#### <a name="ExperienceLevelDynamicProfessionPackage/values"></a> `values`

- **Type:** <a href="#ProfessionPackageValues">ProfessionPackageValues</a>

---

### <a name="ProfessionPackageValues"></a> Profession Representation Variant (`ProfessionPackageValues`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | What does the professional package cost in adventure points? | <a href="#ProfessionPackageValues/ap_value">See details</a>
`prerequisites?` | Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites. | <a href="#ProfessionPackageValues/prerequisites">See details</a>
`options?` | In some areas, the profession package grants a loose set of stats where the player must choose between different options for the profession package. | <a href="#ProfessionPackageValues/options">See details</a>
`special_abilities?` | Any special abilities the profession receives from the package. | <a href="#ProfessionPackageValues/special_abilities">See details</a>
`combat_techniques?` | Provides ratings for the combat techniques that the hero receives from the package. | <a href="#ProfessionPackageValues/combat_techniques">See details</a>
`skills?` | The skill ratings the package grants to the hero. | <a href="#ProfessionPackageValues/skills">See details</a>
`spells?` | The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such. | <a href="#ProfessionPackageValues/spells">See details</a>
`liturgical_chants?` | Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated. | <a href="#ProfessionPackageValues/liturgical_chants">See details</a>
`suggested_advantages?` | Typical advantages for the profession. | <a href="#ProfessionPackageValues/suggested_advantages">See details</a>
`suggested_disadvantages?` | Typical disadvantages for the profession. | <a href="#ProfessionPackageValues/suggested_disadvantages">See details</a>
`unsuitable_advantages?` | These advantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionPackageValues/unsuitable_advantages">See details</a>
`unsuitable_disadvantages?` | These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionPackageValues/unsuitable_disadvantages">See details</a>
`variants?` | Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required. | <a href="#ProfessionPackageValues/variants">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionPackageValues/translations">See details</a>

#### <a name="ProfessionPackageValues/ap_value"></a> `ap_value`

What does the professional package cost in adventure points?

- **Type:** Integer
- **Minimum:** `0`

#### <a name="ProfessionPackageValues/prerequisites"></a> `prerequisites?`

Which prerequisites must be met to buy the stat block? For example, a
character might need the advantage Spellcaster or Blessed. Note: the AP
cost for a profession package does not include these prerequisites.

- **Type:** <a href="./_Prerequisite.md#ProfessionPrerequisites">ProfessionPrerequisites</a>

#### <a name="ProfessionPackageValues/options"></a> `options?`

In some areas, the profession package grants a loose set of stats where the
player must choose between different options for the profession package.

- **Type:** <a href="#ProfessionPackageOptions">ProfessionPackageOptions</a>

#### <a name="ProfessionPackageValues/special_abilities"></a> `special_abilities?`

Any special abilities the profession receives from the package.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/special_abilities[]">ProfessionPackageValues/special_abilities[]</a>

#### <a name="ProfessionPackageValues/combat_techniques"></a> `combat_techniques?`

Provides ratings for the combat techniques that the hero receives from the
package.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/combat_techniques[]">ProfessionPackageValues/combat_techniques[]</a>

#### <a name="ProfessionPackageValues/skills"></a> `skills?`

The skill ratings the package grants to the hero.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/skills[]">ProfessionPackageValues/skills[]</a>

#### <a name="ProfessionPackageValues/spells"></a> `spells?`

The skill ratings a magical profession receives for spells; these spells
are considered activated. Spells from an unfamiliar Tradition, if any, are
identified as such.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/spells[]">ProfessionPackageValues/spells[]</a>

#### <a name="ProfessionPackageValues/liturgical_chants"></a> `liturgical_chants?`

Clerical professions receive these liturgical chants at the listed skill
ratings. These liturgical chants are considered activated.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/liturgical_chants[]">ProfessionPackageValues/liturgical_chants[]</a>

#### <a name="ProfessionPackageValues/suggested_advantages"></a> `suggested_advantages?`

Typical advantages for the profession.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/suggested_advantages[]">ProfessionPackageValues/suggested_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackageValues/suggested_disadvantages"></a> `suggested_disadvantages?`

Typical disadvantages for the profession.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/suggested_disadvantages[]">ProfessionPackageValues/suggested_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackageValues/unsuitable_advantages"></a> `unsuitable_advantages?`

These advantages do not fit well with this profession; to be checked with
the GM before taking any of them.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/unsuitable_advantages[]">ProfessionPackageValues/unsuitable_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackageValues/unsuitable_disadvantages"></a> `unsuitable_disadvantages?`

These disadvantages do not fit well with this profession; to be checked
with the GM before taking any of them.

- **Type:** List
- **Items:** <a href="#ProfessionPackageValues/unsuitable_disadvantages[]">ProfessionPackageValues/unsuitable_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionPackageValues/variants"></a> `variants?`

Provides examples of variants for the profession, which may include changes
to AP values and additional or modified skill ratings, special abilities,
or combat techniques, as compared to the basic profession. Usually picking
a variant is optional, but there are some rare exceptions where picking a
variant is required.

- **Type:** <a href="#ProfessionVariants">ProfessionVariants</a>

#### <a name="ProfessionPackageValues/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionPackageValues/translations[key]">ProfessionPackageValues/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProfessionPackageValues/special_abilities[]"></a> `ProfessionPackageValues/special_abilities[]`

- **Type:** <a href="#SpecialAbility">SpecialAbility</a>

---

### <a name="ProfessionPackageValues/combat_techniques[]"></a> `ProfessionPackageValues/combat_techniques[]`

- **Type:** <a href="#CombatTechniqueRating">CombatTechniqueRating</a>

---

### <a name="ProfessionPackageValues/skills[]"></a> `ProfessionPackageValues/skills[]`

- **Type:** <a href="#SkillRating">SkillRating</a>

---

### <a name="ProfessionPackageValues/spells[]"></a> `ProfessionPackageValues/spells[]`

- **Type:** <a href="#SpellRating">SpellRating</a>

---

### <a name="ProfessionPackageValues/liturgical_chants[]"></a> `ProfessionPackageValues/liturgical_chants[]`

- **Type:** <a href="#LiturgicalChantRating">LiturgicalChantRating</a>

---

### <a name="ProfessionPackageValues/suggested_advantages[]"></a> `ProfessionPackageValues/suggested_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionPackageValues/suggested_disadvantages[]"></a> `ProfessionPackageValues/suggested_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionPackageValues/unsuitable_advantages[]"></a> `ProfessionPackageValues/unsuitable_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionPackageValues/unsuitable_disadvantages[]"></a> `ProfessionPackageValues/unsuitable_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionPackageValues/translations[key]"></a> `ProfessionPackageValues/translations[key]`

- **Type:** <a href="#ProfessionTranslation">ProfessionTranslation</a>

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

A name addition of the profession. This will contain texts like name of
the academy or the witch circle. It is enclosed in parenthesis, but the
database entry must not contain parenthesis.

- **Type:** <a href="#ProfessionName">ProfessionName</a>

#### <a name="ProfessionTranslation/suggested_advantages"></a> `suggested_advantages?`

Typical advantages for the profession.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/suggested_disadvantages"></a> `suggested_disadvantages?`

Typical disadvantages for the profession.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/unsuitable_advantages"></a> `unsuitable_advantages?`

These advantages do not fit well with this profession; to be checked with
the GM before taking any of them.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/unsuitable_disadvantages"></a> `unsuitable_disadvantages?`

These disadvantages do not fit well with this profession; to be checked
with the GM before taking any of them.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ProfessionVariants"></a> `ProfessionVariants`

Provides examples of variants for the profession, which may include changes
to AP values and additional or modified skill ratings, special abilities, or
combat techniques, as compared to the basic profession. Usually picking a
variant is optional, but there are some rare exceptions where picking a
variant is required.

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

Which prerequisites must be met to buy the stat block? For example, a
character might need the advantage Spellcaster or Blessed. Note: the AP
cost for a profession package does not include these prerequisites.

- **Type:** <a href="./_Prerequisite.md#ProfessionPrerequisites">ProfessionPrerequisites</a>

#### <a name="ProfessionVariant/options"></a> `options?`

- **Type:** <a href="#ProfessionVariantPackageOptions">ProfessionVariantPackageOptions</a>

#### <a name="ProfessionVariant/special_abilities"></a> `special_abilities?`

Any special abilities the profession receives from the package variant.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/special_abilities[]">ProfessionVariant/special_abilities[]</a>

#### <a name="ProfessionVariant/combat_techniques"></a> `combat_techniques?`

Provides ratings for the combat techniques that the hero receives from the
package variant.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/combat_techniques[]">ProfessionVariant/combat_techniques[]</a>

#### <a name="ProfessionVariant/skills"></a> `skills?`

The skill ratings the package variant grants to the hero.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/skills[]">ProfessionVariant/skills[]</a>

#### <a name="ProfessionVariant/spells"></a> `spells?`

The skill ratings a magical profession variant receives for spells; these
spells are considered activated. Spells from an unfamiliar Tradition, if
any, are identified as such.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/spells[]">ProfessionVariant/spells[]</a>

#### <a name="ProfessionVariant/liturgical_chants"></a> `liturgical_chants?`

Clerical professions receive these liturgical chants at the listed skill
ratings. These liturgical chants are considered activated.

- **Type:** List
- **Items:** <a href="#ProfessionVariant/liturgical_chants[]">ProfessionVariant/liturgical_chants[]</a>

#### <a name="ProfessionVariant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionVariant/translations[key]">ProfessionVariant/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

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

### <a name="ProfessionVariant/translations[key]"></a> `ProfessionVariant/translations[key]`

- **Type:** <a href="#ProfessionVariantTranslation">ProfessionVariantTranslation</a>

---

### <a name="ProfessionVariantTranslation"></a> `ProfessionVariantTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the profession variant. | <a href="#ProfessionVariantTranslation/name">See details</a>

#### <a name="ProfessionVariantTranslation/name"></a> `name`

Name of the profession variant.

- **Type:** <a href="#ProfessionName">ProfessionName</a>

---

### <a name="SpecialAbility"></a> `SpecialAbility`

- **Type:** Union
- **Cases:** <a href="#SpecialAbility'Fixed">SpecialAbility'Fixed</a> | <a href="#SpecialAbility'Selection">SpecialAbility'Selection</a>

---

### <a name="SpecialAbility'Fixed"></a> `SpecialAbility'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecialAbility'Fixed/tag">See details</a>
`fixed` |  | <a href="#SpecialAbility'Fixed/fixed">See details</a>

#### <a name="SpecialAbility'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="SpecialAbility'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedSpecialAbility">FixedSpecialAbility</a>

---

### <a name="SpecialAbility'Selection"></a> `SpecialAbility'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecialAbility'Selection/tag">See details</a>
`selection` |  | <a href="#SpecialAbility'Selection/selection">See details</a>

#### <a name="SpecialAbility'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="SpecialAbility'Selection/selection"></a> `selection`

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

- **Type:** <a href="./_Identifier.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="SpecialAbilityDefinition/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpecialAbilityDefinition/options"></a> `options?`

Received select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#SpecialAbilityDefinition/options[]">SpecialAbilityDefinition/options[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecialAbilityDefinition/options[]"></a> `SpecialAbilityDefinition/options[]`

- **Type:** <a href="./_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

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
`level?` | The level of the received special ability. | <a href="#FixedVariantSpecialAbility/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#FixedVariantSpecialAbility/options">See details</a>
`active?` | if set to `false`, if the selection is granted by the basic package, it is removed. | <a href="#FixedVariantSpecialAbility/active">See details</a>

#### <a name="FixedVariantSpecialAbility/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="FixedVariantSpecialAbility/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedVariantSpecialAbility/options"></a> `options?`

Received select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#FixedVariantSpecialAbility/options[]">FixedVariantSpecialAbility/options[]</a>
- **Minimum Items:** `1`

#### <a name="FixedVariantSpecialAbility/active"></a> `active?`

if set to `false`, if the selection is granted by the basic package, it
is removed.

- **Constant:** `false`

---

### <a name="FixedVariantSpecialAbility/options[]"></a> `FixedVariantSpecialAbility/options[]`

- **Type:** <a href="./_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="VariantSpecialAbilitySelection"></a> `VariantSpecialAbilitySelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`active?` | if set to `false`, if the selection is granted by the basic package, it is removed. | <a href="#VariantSpecialAbilitySelection/active">See details</a>
`options` |  | <a href="#VariantSpecialAbilitySelection/options">See details</a>

#### <a name="VariantSpecialAbilitySelection/active"></a> `active?`

if set to `false`, if the selection is granted by the basic package, it
is removed.

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
`rating` | The rating provided for the combat technique. If used in a profession variant, it overrides the basic package's rating. | <a href="#CombatTechniqueRating/rating">See details</a>

#### <a name="CombatTechniqueRating/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="CombatTechniqueRating/rating"></a> `rating`

The rating provided for the combat technique. If used in a profession
variant, it overrides the basic package's rating.

- **Type:** Integer
- **Minimum:** `6`

---

### <a name="SkillRating"></a> `SkillRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the skill to provide the rating for. | <a href="#SkillRating/id">See details</a>
`rating` | The rating provided for the skill. If used in a profession variant, it overrides the basic package's rating. | <a href="#SkillRating/rating">See details</a>

#### <a name="SkillRating/id"></a> `id`

The identifier of the skill to provide the rating for.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `59`

#### <a name="SkillRating/rating"></a> `rating`

The rating provided for the skill. If used in a profession variant, it
overrides the basic package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="SpellRating"></a> `SpellRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier(s) of the spell(s) to choose from to provide the rating for. If multiple spells are provided, they must all have the same improvement cost. | <a href="#SpellRating/id">See details</a>
`rating` | The rating provided for the (selected) spell. If used in a profession variant, it overrides the basic package's rating. | <a href="#SpellRating/rating">See details</a>

#### <a name="SpellRating/id"></a> `id`

The identifier(s) of the spell(s) to choose from to provide the rating for.
If multiple spells are provided, they must all have the same improvement
cost.

- **Type:** List
- **Items:** <a href="#SpellRating/id[]">SpellRating/id[]</a>
- **Minimum Items:** `1`

#### <a name="SpellRating/rating"></a> `rating`

The rating provided for the (selected) spell. If used in a profession
variant, it overrides the basic package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="SpellRating/id[]"></a> `SpellRating/id[]`

- **Type:** <a href="#SpellIdentifier">SpellIdentifier</a>

---

### <a name="SpellIdentifier"></a> `SpellIdentifier`

- **Type:** Union
- **Cases:** <a href="#SpellIdentifier'Spellwork">SpellIdentifier'Spellwork</a> | <a href="#SpellIdentifier'MagicalAction">SpellIdentifier'MagicalAction</a>

---

### <a name="SpellIdentifier'Spellwork"></a> `SpellIdentifier'Spellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellIdentifier'Spellwork/tag">See details</a>
`id` | The identifier of the spell to provide the rating for. | <a href="#SpellIdentifier'Spellwork/id">See details</a>
`tradition?` | If the spell is not part of the magical tradition required by the package, this references the magical tradition it is part of. It can also be used to define the target magical tradition of a spell if multiple magical traditions are required and the spell is available to multiple of them. | <a href="#SpellIdentifier'Spellwork/tradition">See details</a>

#### <a name="SpellIdentifier'Spellwork/tag"></a> `tag`

- **Constant:** `"Spellwork"`

#### <a name="SpellIdentifier'Spellwork/id"></a> `id`

The identifier of the spell to provide the rating for.

- **Type:** <a href="./_Identifier.md#SpellworkIdentifier">SpellworkIdentifier</a>

#### <a name="SpellIdentifier'Spellwork/tradition"></a> `tradition?`

If the spell is not part of the magical tradition required by the
package, this references the magical tradition it is part of. It can also
be used to define the target magical tradition of a spell if multiple
magical traditions are required and the spell is available to multiple
of them.

- **Type:** <a href="#SpellIdentifier'Spellwork/tradition">Object</a>

---

### <a name="SpellIdentifier'Spellwork/tradition"></a> `SpellIdentifier'Spellwork/tradition`

If the spell is not part of the magical tradition required by the
package, this references the magical tradition it is part of. It can also
be used to define the target magical tradition of a spell if multiple
magical traditions are required and the spell is available to multiple
of them.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The unfamiliar or ambiguous magical tradition's identifier. | <a href="#SpellIdentifier'Spellwork/tradition/id">See details</a>

#### <a name="SpellIdentifier'Spellwork/tradition/id"></a> `id`

The unfamiliar or ambiguous magical tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SpellIdentifier'MagicalAction"></a> `SpellIdentifier'MagicalAction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellIdentifier'MagicalAction/tag">See details</a>
`id` | The identifier of the magical action to provide the rating for. | <a href="#SpellIdentifier'MagicalAction/id">See details</a>

#### <a name="SpellIdentifier'MagicalAction/tag"></a> `tag`

- **Constant:** `"MagicalAction"`

#### <a name="SpellIdentifier'MagicalAction/id"></a> `id`

The identifier of the magical action to provide the rating for.

- **Type:** <a href="./_Identifier.md#MagicalActionIdentifier">MagicalActionIdentifier</a>

---

### <a name="LiturgicalChantRating"></a> `LiturgicalChantRating`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier(s) of the liturgical chant(s) to choose from to provide the rating for. If multiple liturgical chants are provided, they must all have the same improvement cost. | <a href="#LiturgicalChantRating/id">See details</a>
`rating` | The rating provided for the selected liturgical chant. If used in a profession variant, it overrides the basic package's rating. | <a href="#LiturgicalChantRating/rating">See details</a>

#### <a name="LiturgicalChantRating/id"></a> `id`

The identifier(s) of the liturgical chant(s) to choose from to provide
the rating for. If multiple liturgical chants are provided, they must all
have the same improvement cost.

- **Type:** List
- **Items:** <a href="#LiturgicalChantRating/id[]">LiturgicalChantRating/id[]</a>
- **Minimum Items:** `1`

#### <a name="LiturgicalChantRating/rating"></a> `rating`

The rating provided for the selected liturgical chant. If used in a
profession variant, it overrides the basic package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="LiturgicalChantRating/id[]"></a> `LiturgicalChantRating/id[]`

- **Type:** <a href="./_Identifier.md#LiturgyIdentifier">LiturgyIdentifier</a>

---

### <a name="ProfessionPackageOptions"></a> `ProfessionPackageOptions`

In some areas, the profession package grants a loose set of stats where the
player must choose between different options for the profession package.

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

In some areas, the profession package grants a loose set of stats where the
player must choose between different options for the profession package. The
variant may override or remove those options.

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

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/skill_specialization'Remove">ProfessionVariantPackageOptions/skill_specialization'Remove</a> | <a href="#ProfessionVariantPackageOptions/skill_specialization'Override">ProfessionVariantPackageOptions/skill_specialization'Override</a>

#### <a name="ProfessionVariantPackageOptions/languages_scripts"></a> `languages_scripts?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/languages_scripts'Remove">ProfessionVariantPackageOptions/languages_scripts'Remove</a> | <a href="#ProfessionVariantPackageOptions/languages_scripts'Override">ProfessionVariantPackageOptions/languages_scripts'Override</a>

#### <a name="ProfessionVariantPackageOptions/combat_techniques"></a> `combat_techniques?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/combat_techniques'Remove">ProfessionVariantPackageOptions/combat_techniques'Remove</a> | <a href="#ProfessionVariantPackageOptions/combat_techniques'Override">ProfessionVariantPackageOptions/combat_techniques'Override</a>

#### <a name="ProfessionVariantPackageOptions/cantrips"></a> `cantrips?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/cantrips'Remove">ProfessionVariantPackageOptions/cantrips'Remove</a> | <a href="#ProfessionVariantPackageOptions/cantrips'Override">ProfessionVariantPackageOptions/cantrips'Override</a>

#### <a name="ProfessionVariantPackageOptions/curses"></a> `curses?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/curses'Remove">ProfessionVariantPackageOptions/curses'Remove</a> | <a href="#ProfessionVariantPackageOptions/curses'Override">ProfessionVariantPackageOptions/curses'Override</a>

#### <a name="ProfessionVariantPackageOptions/terrain_knowledge"></a> `terrain_knowledge?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/terrain_knowledge'Remove">ProfessionVariantPackageOptions/terrain_knowledge'Remove</a> | <a href="#ProfessionVariantPackageOptions/terrain_knowledge'Override">ProfessionVariantPackageOptions/terrain_knowledge'Override</a>

#### <a name="ProfessionVariantPackageOptions/skills"></a> `skills?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariantPackageOptions/skills'Remove">ProfessionVariantPackageOptions/skills'Remove</a> | <a href="#ProfessionVariantPackageOptions/skills'Override">ProfessionVariantPackageOptions/skills'Override</a>

---

### <a name="ProfessionVariantPackageOptions/skill_specialization'Remove"></a> `ProfessionVariantPackageOptions/skill_specialization'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/skill_specialization'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/skill_specialization'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/skill_specialization'Override"></a> `ProfessionVariantPackageOptions/skill_specialization'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/skill_specialization'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/skill_specialization'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/skill_specialization'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/skill_specialization'Override/override"></a> `override`

- **Type:** <a href="#SkillSpecializationOptions">SkillSpecializationOptions</a>

---

### <a name="ProfessionVariantPackageOptions/languages_scripts'Remove"></a> `ProfessionVariantPackageOptions/languages_scripts'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/languages_scripts'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/languages_scripts'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/languages_scripts'Override"></a> `ProfessionVariantPackageOptions/languages_scripts'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/languages_scripts'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/languages_scripts'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/languages_scripts'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/languages_scripts'Override/override"></a> `override`

- **Type:** <a href="#LanguagesScriptsOptions">LanguagesScriptsOptions</a>

---

### <a name="ProfessionVariantPackageOptions/combat_techniques'Remove"></a> `ProfessionVariantPackageOptions/combat_techniques'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/combat_techniques'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/combat_techniques'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/combat_techniques'Override"></a> `ProfessionVariantPackageOptions/combat_techniques'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/combat_techniques'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/combat_techniques'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/combat_techniques'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/combat_techniques'Override/override"></a> `override`

- **Type:** <a href="#CombatTechniquesOptions">CombatTechniquesOptions</a>

---

### <a name="ProfessionVariantPackageOptions/cantrips'Remove"></a> `ProfessionVariantPackageOptions/cantrips'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/cantrips'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/cantrips'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/cantrips'Override"></a> `ProfessionVariantPackageOptions/cantrips'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/cantrips'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/cantrips'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/cantrips'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/cantrips'Override/override"></a> `override`

- **Type:** <a href="#CantripsOptions">CantripsOptions</a>

---

### <a name="ProfessionVariantPackageOptions/curses'Remove"></a> `ProfessionVariantPackageOptions/curses'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/curses'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/curses'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/curses'Override"></a> `ProfessionVariantPackageOptions/curses'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/curses'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/curses'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/curses'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/curses'Override/override"></a> `override`

- **Type:** <a href="#CursesOptions">CursesOptions</a>

---

### <a name="ProfessionVariantPackageOptions/terrain_knowledge'Remove"></a> `ProfessionVariantPackageOptions/terrain_knowledge'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/terrain_knowledge'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/terrain_knowledge'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/terrain_knowledge'Override"></a> `ProfessionVariantPackageOptions/terrain_knowledge'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/terrain_knowledge'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/terrain_knowledge'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/terrain_knowledge'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/terrain_knowledge'Override/override"></a> `override`

- **Type:** <a href="#TerrainKnowledgeOptions">TerrainKnowledgeOptions</a>

---

### <a name="ProfessionVariantPackageOptions/skills'Remove"></a> `ProfessionVariantPackageOptions/skills'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/skills'Remove/tag">See details</a>

#### <a name="ProfessionVariantPackageOptions/skills'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariantPackageOptions/skills'Override"></a> `ProfessionVariantPackageOptions/skills'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariantPackageOptions/skills'Override/tag">See details</a>
`override` |  | <a href="#ProfessionVariantPackageOptions/skills'Override/override">See details</a>

#### <a name="ProfessionVariantPackageOptions/skills'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariantPackageOptions/skills'Override/override"></a> `override`

- **Type:** <a href="#SkillsOptions">SkillsOptions</a>

---

### <a name="SkillSpecializationOptions"></a> `SkillSpecializationOptions`

Select an application from a skill or from one of a list of skills where you
get a skill specialization for. You can also specify a skill groups from
which you can choose a skill.

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
`rest_rating?` | Define if after the fixed selections the remaining unselected combat techniques will receive a certain rating as well. | <a href="#CombatTechniquesOptions/rest_rating">See details</a>
`options` | The list of combat techniques to choose from. | <a href="#CombatTechniquesOptions/options">See details</a>

#### <a name="CombatTechniquesOptions/fixed"></a> `fixed`

Specify the number of combat techniques that can be selected so that they
get increased to a specific CtR. There can be multiple selections with
different CtRs.

- **Type:** List
- **Items:** <a href="#CombatTechniquesOptions/fixed[]">CombatTechniquesOptions/fixed[]</a>
- **Minimum Items:** `1`

#### <a name="CombatTechniquesOptions/rest_rating"></a> `rest_rating?`

Define if after the fixed selections the remaining unselected combat
techniques will receive a certain rating as well.

- **Type:** Integer
- **Minimum:** `7`

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
`rating` | The rating provided for the selected combat technique(s). | <a href="#RatingForCombatTechniquesNumber/rating">See details</a>

#### <a name="RatingForCombatTechniquesNumber/number"></a> `number`

The number of selectable combat techniques.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatingForCombatTechniquesNumber/rating"></a> `rating`

The rating provided for the selected combat technique(s).

- **Type:** Integer
- **Minimum:** `7`

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
- **Cases:** <a href="#ProfessionName'NonEmptyString">ProfessionName'NonEmptyString</a> | <a href="#ProfessionName'1">ProfessionName'1</a>

---

### <a name="ProfessionName'NonEmptyString"></a> `ProfessionName'NonEmptyString`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="ProfessionName'1"></a> `ProfessionName'1`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The name from the source publication. | <a href="#ProfessionName'1/default">See details</a>
`male` | The male name. | <a href="#ProfessionName'1/male">See details</a>
`female` | The female name. | <a href="#ProfessionName'1/female">See details</a>

#### <a name="ProfessionName'1/default"></a> `default`

The name from the source publication.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionName'1/male"></a> `male`

The male name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ProfessionName'1/female"></a> `female`

The female name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
