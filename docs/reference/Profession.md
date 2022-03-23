# Profession

## Definitions

### <a name="Profession"></a> Profession (`Profession`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The profession's identifier. An unique, increasing integer. | <a href="#Profession/id">See details</a>
`representations` | A list of professions representing the same profession but with (slightly) different stats. For example, there may be a profession in a regional sourcebook or in the core rules and a profession in an extension rulebook like Magic of Aventuria, where the profession is basically called the same and almost has the same values, but the version from Magic of Aventuria features a spell style special ability that does not exist in the core rules or regional sourcebook. | <a href="#Profession/representations">See details</a>

#### <a name="Profession/id"></a> `id`

The profession's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Profession/representations"></a> `representations`

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
- **Items:** <a href="#Profession/representations[]">Profession/representations[]</a>
- **Minimum Items:** `1`

---

### <a name="Profession/representations[]"></a> `Profession/representations[]`

- **Type:** Union
- **Cases:** <a href="#Profession/representations[]'Experienced">Profession/representations[]'Experienced</a> | <a href="#Profession/representations[]'ByExperienceLevel">Profession/representations[]'ByExperienceLevel</a>

---

### <a name="Profession/representations[]'Experienced"></a> `Profession/representations[]'Experienced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Profession/representations[]'Experienced/tag">See details</a>
`id` | The profession representation variant's identifier. An unique, increasing integer. | <a href="#Profession/representations[]'Experienced/id">See details</a>
`package` |  | <a href="#Profession/representations[]'Experienced/package">See details</a>
`src` |  | <a href="#Profession/representations[]'Experienced/src">See details</a>

#### <a name="Profession/representations[]'Experienced/tag"></a> `tag`

- **Constant:** `"Experienced"`

#### <a name="Profession/representations[]'Experienced/id"></a> `id`

The profession representation variant's identifier. An unique, increasing
integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Profession/representations[]'Experienced/package"></a> `package`

- **Type:** <a href="#ProfessionRepresentationVariant">ProfessionRepresentationVariant</a>

#### <a name="Profession/representations[]'Experienced/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="Profession/representations[]'ByExperienceLevel"></a> `Profession/representations[]'ByExperienceLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Profession/representations[]'ByExperienceLevel/tag">See details</a>
`id` | The profession representation variant's identifier. An unique, increasing integer. | <a href="#Profession/representations[]'ByExperienceLevel/id">See details</a>
`packages` |  | <a href="#Profession/representations[]'ByExperienceLevel/packages">See details</a>
`src` |  | <a href="#Profession/representations[]'ByExperienceLevel/src">See details</a>

#### <a name="Profession/representations[]'ByExperienceLevel/tag"></a> `tag`

- **Constant:** `"ByExperienceLevel"`

#### <a name="Profession/representations[]'ByExperienceLevel/id"></a> `id`

The profession representation variant's identifier. An unique, increasing
integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Profession/representations[]'ByExperienceLevel/packages"></a> `packages`

- **Type:** List
- **Items:** <a href="#Profession/representations[]'ByExperienceLevel/packages[]">Profession/representations[]'ByExperienceLevel/packages[]</a>

#### <a name="Profession/representations[]'ByExperienceLevel/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

---

### <a name="Profession/representations[]'ByExperienceLevel/packages[]"></a> `Profession/representations[]'ByExperienceLevel/packages[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`experience_level_id` | The experience level this profession targets. The experience level must be unique for this representation. | <a href="#Profession/representations[]'ByExperienceLevel/packages[]/experience_level_id">See details</a>
`package` |  | <a href="#Profession/representations[]'ByExperienceLevel/packages[]/package">See details</a>

#### <a name="Profession/representations[]'ByExperienceLevel/packages[]/experience_level_id"></a> `experience_level_id`

The experience level this profession targets. The experience level
must be unique for this representation.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `7`

#### <a name="Profession/representations[]'ByExperienceLevel/packages[]/package"></a> `package`

- **Type:** <a href="#ProfessionRepresentationVariant">ProfessionRepresentationVariant</a>

---

### <a name="ProfessionRepresentationVariant"></a> Profession Representation Variant (`ProfessionRepresentationVariant`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`ap_value` | What does the professional package cost in adventure points? | <a href="#ProfessionRepresentationVariant/ap_value">See details</a>
`prerequisites?` | Which prerequisites must be met to buy the stat block? For example, a character might need the advantage Spellcaster or Blessed. Note: the AP cost for a profession package does not include these prerequisites. | <a href="#ProfessionRepresentationVariant/prerequisites">See details</a>
`options?` |  | <a href="#ProfessionRepresentationVariant/options">See details</a>
`special_abilities?` | Any special abilities the profession receives from the package. | <a href="#ProfessionRepresentationVariant/special_abilities">See details</a>
`combat_techniques?` | Provides ratings for the combat techniques that the hero receives from the package. | <a href="#ProfessionRepresentationVariant/combat_techniques">See details</a>
`skills?` | The skill ratings the package grants to the hero. | <a href="#ProfessionRepresentationVariant/skills">See details</a>
`spells?` | The skill ratings a magical profession receives for spells; these spells are considered activated. Spells from an unfamiliar Tradition, if any, are identified as such. | <a href="#ProfessionRepresentationVariant/spells">See details</a>
`liturgical_chants?` | Clerical professions receive these liturgical chants at the listed skill ratings. These liturgical chants are considered activated. | <a href="#ProfessionRepresentationVariant/liturgical_chants">See details</a>
`suggested_advantages?` | Typical advantages for the profession. | <a href="#ProfessionRepresentationVariant/suggested_advantages">See details</a>
`suggested_disadvantages?` | Typical disadvantages for the profession. | <a href="#ProfessionRepresentationVariant/suggested_disadvantages">See details</a>
`unsuitable_advantages?` | These advantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionRepresentationVariant/unsuitable_advantages">See details</a>
`unsuitable_disadvantages?` | These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionRepresentationVariant/unsuitable_disadvantages">See details</a>
`variants?` | Provides examples of variants for the profession, which may include changes to AP values and additional or modified skill ratings, special abilities, or combat techniques, as compared to the basic profession. Usually picking a variant is optional, but there are some rare exceptions where picking a variant is required. | <a href="#ProfessionRepresentationVariant/variants">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProfessionRepresentationVariant/translations">See details</a>

#### <a name="ProfessionRepresentationVariant/ap_value"></a> `ap_value`

What does the professional package cost in adventure points?

- **Type:** Integer
- **Minimum:** `0`

#### <a name="ProfessionRepresentationVariant/prerequisites"></a> `prerequisites?`

Which prerequisites must be met to buy the stat block? For example, a
character might need the advantage Spellcaster or Blessed. Note: the AP
cost for a profession package does not include these prerequisites.

- **Type:** <a href="./_Prerequisite.md#ProfessionPrerequisites">ProfessionPrerequisites</a>

#### <a name="ProfessionRepresentationVariant/options"></a> `options?`

- **Type:** <a href="#ProfessionRepresentationVariant/options">Object</a>

#### <a name="ProfessionRepresentationVariant/special_abilities"></a> `special_abilities?`

Any special abilities the profession receives from the package.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/special_abilities[]">ProfessionRepresentationVariant/special_abilities[]</a>

#### <a name="ProfessionRepresentationVariant/combat_techniques"></a> `combat_techniques?`

Provides ratings for the combat techniques that the hero receives from the
package.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/combat_techniques[]">ProfessionRepresentationVariant/combat_techniques[]</a>

#### <a name="ProfessionRepresentationVariant/skills"></a> `skills?`

The skill ratings the package grants to the hero.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/skills[]">ProfessionRepresentationVariant/skills[]</a>

#### <a name="ProfessionRepresentationVariant/spells"></a> `spells?`

The skill ratings a magical profession receives for spells; these spells
are considered activated. Spells from an unfamiliar Tradition, if any, are
identified as such.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/spells[]">ProfessionRepresentationVariant/spells[]</a>

#### <a name="ProfessionRepresentationVariant/liturgical_chants"></a> `liturgical_chants?`

Clerical professions receive these liturgical chants at the listed skill
ratings. These liturgical chants are considered activated.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/liturgical_chants[]">ProfessionRepresentationVariant/liturgical_chants[]</a>

#### <a name="ProfessionRepresentationVariant/suggested_advantages"></a> `suggested_advantages?`

Typical advantages for the profession.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/suggested_advantages[]">ProfessionRepresentationVariant/suggested_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionRepresentationVariant/suggested_disadvantages"></a> `suggested_disadvantages?`

Typical disadvantages for the profession.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/suggested_disadvantages[]">ProfessionRepresentationVariant/suggested_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionRepresentationVariant/unsuitable_advantages"></a> `unsuitable_advantages?`

These advantages do not fit well with this profession; to be checked with
the GM before taking any of them.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/unsuitable_advantages[]">ProfessionRepresentationVariant/unsuitable_advantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionRepresentationVariant/unsuitable_disadvantages"></a> `unsuitable_disadvantages?`

These disadvantages do not fit well with this profession; to be checked
with the GM before taking any of them.

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/unsuitable_disadvantages[]">ProfessionRepresentationVariant/unsuitable_disadvantages[]</a>
- **Minimum Items:** `1`

#### <a name="ProfessionRepresentationVariant/variants"></a> `variants?`

Provides examples of variants for the profession, which may include changes
to AP values and additional or modified skill ratings, special abilities,
or combat techniques, as compared to the basic profession. Usually picking
a variant is optional, but there are some rare exceptions where picking a
variant is required.

- **Type:** Union
- **Cases:** <a href="#ProfessionRepresentationVariant/variants'Required">ProfessionRepresentationVariant/variants'Required</a> | <a href="#ProfessionRepresentationVariant/variants'Optional">ProfessionRepresentationVariant/variants'Optional</a>

#### <a name="ProfessionRepresentationVariant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProfessionRepresentationVariant/translations[key]">ProfessionRepresentationVariant/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProfessionRepresentationVariant/options"></a> `ProfessionRepresentationVariant/options`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`skill_specialization?` |  | <a href="#ProfessionRepresentationVariant/options/skill_specialization">See details</a>
`languages_scripts?` |  | <a href="#ProfessionRepresentationVariant/options/languages_scripts">See details</a>
`combat_techniques?` |  | <a href="#ProfessionRepresentationVariant/options/combat_techniques">See details</a>
`cantrips?` |  | <a href="#ProfessionRepresentationVariant/options/cantrips">See details</a>
`curses?` |  | <a href="#ProfessionRepresentationVariant/options/curses">See details</a>
`terrain_knowledge?` |  | <a href="#ProfessionRepresentationVariant/options/terrain_knowledge">See details</a>
`skills?` |  | <a href="#ProfessionRepresentationVariant/options/skills">See details</a>

#### <a name="ProfessionRepresentationVariant/options/skill_specialization"></a> `skill_specialization?`

- **Type:** <a href="#SkillSpecializationOptions">SkillSpecializationOptions</a>

#### <a name="ProfessionRepresentationVariant/options/languages_scripts"></a> `languages_scripts?`

- **Type:** <a href="#LanguagesScriptsOptions">LanguagesScriptsOptions</a>

#### <a name="ProfessionRepresentationVariant/options/combat_techniques"></a> `combat_techniques?`

- **Type:** <a href="#CombatTechniquesOptions">CombatTechniquesOptions</a>

#### <a name="ProfessionRepresentationVariant/options/cantrips"></a> `cantrips?`

- **Type:** <a href="#CantripsOptions">CantripsOptions</a>

#### <a name="ProfessionRepresentationVariant/options/curses"></a> `curses?`

- **Type:** <a href="#CursesOptions">CursesOptions</a>

#### <a name="ProfessionRepresentationVariant/options/terrain_knowledge"></a> `terrain_knowledge?`

- **Type:** <a href="#TerrainKnowledgeOptions">TerrainKnowledgeOptions</a>

#### <a name="ProfessionRepresentationVariant/options/skills"></a> `skills?`

- **Type:** <a href="#SkillsOptions">SkillsOptions</a>

---

### <a name="ProfessionRepresentationVariant/special_abilities[]"></a> `ProfessionRepresentationVariant/special_abilities[]`

- **Type:** <a href="#SpecialAbility">SpecialAbility</a>

---

### <a name="ProfessionRepresentationVariant/combat_techniques[]"></a> `ProfessionRepresentationVariant/combat_techniques[]`

- **Type:** <a href="#CombatTechnique">CombatTechnique</a>

---

### <a name="ProfessionRepresentationVariant/skills[]"></a> `ProfessionRepresentationVariant/skills[]`

- **Type:** <a href="#Skill">Skill</a>

---

### <a name="ProfessionRepresentationVariant/spells[]"></a> `ProfessionRepresentationVariant/spells[]`

- **Type:** <a href="#Spell">Spell</a>

---

### <a name="ProfessionRepresentationVariant/liturgical_chants[]"></a> `ProfessionRepresentationVariant/liturgical_chants[]`

- **Type:** <a href="#LiturgicalChant">LiturgicalChant</a>

---

### <a name="ProfessionRepresentationVariant/suggested_advantages[]"></a> `ProfessionRepresentationVariant/suggested_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionRepresentationVariant/suggested_disadvantages[]"></a> `ProfessionRepresentationVariant/suggested_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionRepresentationVariant/unsuitable_advantages[]"></a> `ProfessionRepresentationVariant/unsuitable_advantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionRepresentationVariant/unsuitable_disadvantages[]"></a> `ProfessionRepresentationVariant/unsuitable_disadvantages[]`

- **Type:** <a href="./_CommonnessRatedAdvantageDisadvantage.md#CommonnessRatedAdvantageDisadvantage">CommonnessRatedAdvantageDisadvantage</a>

---

### <a name="ProfessionRepresentationVariant/variants'Required"></a> `ProfessionRepresentationVariant/variants'Required`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionRepresentationVariant/variants'Required/tag">See details</a>
`list` |  | <a href="#ProfessionRepresentationVariant/variants'Required/list">See details</a>

#### <a name="ProfessionRepresentationVariant/variants'Required/tag"></a> `tag`

- **Constant:** `"Required"`

#### <a name="ProfessionRepresentationVariant/variants'Required/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/variants'Required/list[]">ProfessionRepresentationVariant/variants'Required/list[]</a>
- **Minimum Items:** `2`

---

### <a name="ProfessionRepresentationVariant/variants'Required/list[]"></a> `ProfessionRepresentationVariant/variants'Required/list[]`

- **Type:** <a href="#ProfessionVariant">ProfessionVariant</a>

---

### <a name="ProfessionRepresentationVariant/variants'Optional"></a> `ProfessionRepresentationVariant/variants'Optional`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionRepresentationVariant/variants'Optional/tag">See details</a>
`list` |  | <a href="#ProfessionRepresentationVariant/variants'Optional/list">See details</a>

#### <a name="ProfessionRepresentationVariant/variants'Optional/tag"></a> `tag`

- **Constant:** `"Optional"`

#### <a name="ProfessionRepresentationVariant/variants'Optional/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ProfessionRepresentationVariant/variants'Optional/list[]">ProfessionRepresentationVariant/variants'Optional/list[]</a>
- **Minimum Items:** `1`

---

### <a name="ProfessionRepresentationVariant/variants'Optional/list[]"></a> `ProfessionRepresentationVariant/variants'Optional/list[]`

- **Type:** <a href="#ProfessionVariant">ProfessionVariant</a>

---

### <a name="ProfessionRepresentationVariant/translations[key]"></a> `ProfessionRepresentationVariant/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the basic profession. | <a href="#ProfessionRepresentationVariant/translations[key]/name">See details</a>
`suggested_advantages?` | Typical advantages for the profession. | <a href="#ProfessionRepresentationVariant/translations[key]/suggested_advantages">See details</a>
`suggested_disadvantages?` | Typical disadvantages for the profession. | <a href="#ProfessionRepresentationVariant/translations[key]/suggested_disadvantages">See details</a>
`unsuitable_advantages?` | These advantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionRepresentationVariant/translations[key]/unsuitable_advantages">See details</a>
`unsuitable_disadvantages?` | These disadvantages do not fit well with this profession; to be checked with the GM before taking any of them. | <a href="#ProfessionRepresentationVariant/translations[key]/unsuitable_disadvantages">See details</a>
`errata?` |  | <a href="#ProfessionRepresentationVariant/translations[key]/errata">See details</a>

#### <a name="ProfessionRepresentationVariant/translations[key]/name"></a> `name`

Name of the basic profession.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ProfessionRepresentationVariant/translations[key]/suggested_advantages"></a> `suggested_advantages?`

Typical advantages for the profession.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ProfessionRepresentationVariant/translations[key]/suggested_disadvantages"></a> `suggested_disadvantages?`

Typical disadvantages for the profession.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ProfessionRepresentationVariant/translations[key]/unsuitable_advantages"></a> `unsuitable_advantages?`

These advantages do not fit well with this profession; to be checked with
the GM before taking any of them.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ProfessionRepresentationVariant/translations[key]/unsuitable_disadvantages"></a> `unsuitable_disadvantages?`

These disadvantages do not fit well with this profession; to be checked
with the GM before taking any of them.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ProfessionRepresentationVariant/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

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

- **Type:** <a href="#ProfessionVariant/options">Object</a>

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

### <a name="ProfessionVariant/options"></a> `ProfessionVariant/options`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`skill_specialization?` |  | <a href="#ProfessionVariant/options/skill_specialization">See details</a>
`languages_scripts?` |  | <a href="#ProfessionVariant/options/languages_scripts">See details</a>
`combat_techniques?` |  | <a href="#ProfessionVariant/options/combat_techniques">See details</a>
`cantrips?` |  | <a href="#ProfessionVariant/options/cantrips">See details</a>
`curses?` |  | <a href="#ProfessionVariant/options/curses">See details</a>
`terrain_knowledge?` |  | <a href="#ProfessionVariant/options/terrain_knowledge">See details</a>
`skills?` |  | <a href="#ProfessionVariant/options/skills">See details</a>

#### <a name="ProfessionVariant/options/skill_specialization"></a> `skill_specialization?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/skill_specialization'Remove">ProfessionVariant/options/skill_specialization'Remove</a> | <a href="#ProfessionVariant/options/skill_specialization'Override">ProfessionVariant/options/skill_specialization'Override</a>

#### <a name="ProfessionVariant/options/languages_scripts"></a> `languages_scripts?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/languages_scripts'Remove">ProfessionVariant/options/languages_scripts'Remove</a> | <a href="#ProfessionVariant/options/languages_scripts'Override">ProfessionVariant/options/languages_scripts'Override</a>

#### <a name="ProfessionVariant/options/combat_techniques"></a> `combat_techniques?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/combat_techniques'Remove">ProfessionVariant/options/combat_techniques'Remove</a> | <a href="#ProfessionVariant/options/combat_techniques'Override">ProfessionVariant/options/combat_techniques'Override</a>

#### <a name="ProfessionVariant/options/cantrips"></a> `cantrips?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/cantrips'Remove">ProfessionVariant/options/cantrips'Remove</a> | <a href="#ProfessionVariant/options/cantrips'Override">ProfessionVariant/options/cantrips'Override</a>

#### <a name="ProfessionVariant/options/curses"></a> `curses?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/curses'Remove">ProfessionVariant/options/curses'Remove</a> | <a href="#ProfessionVariant/options/curses'Override">ProfessionVariant/options/curses'Override</a>

#### <a name="ProfessionVariant/options/terrain_knowledge"></a> `terrain_knowledge?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/terrain_knowledge'Remove">ProfessionVariant/options/terrain_knowledge'Remove</a> | <a href="#ProfessionVariant/options/terrain_knowledge'Override">ProfessionVariant/options/terrain_knowledge'Override</a>

#### <a name="ProfessionVariant/options/skills"></a> `skills?`

- **Type:** Union
- **Cases:** <a href="#ProfessionVariant/options/skills'Remove">ProfessionVariant/options/skills'Remove</a> | <a href="#ProfessionVariant/options/skills'Override">ProfessionVariant/options/skills'Override</a>

---

### <a name="ProfessionVariant/options/skill_specialization'Remove"></a> `ProfessionVariant/options/skill_specialization'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/skill_specialization'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/skill_specialization'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/skill_specialization'Override"></a> `ProfessionVariant/options/skill_specialization'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/skill_specialization'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/skill_specialization'Override/value">See details</a>

#### <a name="ProfessionVariant/options/skill_specialization'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/skill_specialization'Override/value"></a> `value`

- **Type:** <a href="#SkillSpecializationOptions">SkillSpecializationOptions</a>

---

### <a name="ProfessionVariant/options/languages_scripts'Remove"></a> `ProfessionVariant/options/languages_scripts'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/languages_scripts'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/languages_scripts'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/languages_scripts'Override"></a> `ProfessionVariant/options/languages_scripts'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/languages_scripts'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/languages_scripts'Override/value">See details</a>

#### <a name="ProfessionVariant/options/languages_scripts'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/languages_scripts'Override/value"></a> `value`

- **Type:** <a href="#LanguagesScriptsOptions">LanguagesScriptsOptions</a>

---

### <a name="ProfessionVariant/options/combat_techniques'Remove"></a> `ProfessionVariant/options/combat_techniques'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/combat_techniques'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/combat_techniques'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/combat_techniques'Override"></a> `ProfessionVariant/options/combat_techniques'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/combat_techniques'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/combat_techniques'Override/value">See details</a>

#### <a name="ProfessionVariant/options/combat_techniques'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/combat_techniques'Override/value"></a> `value`

- **Type:** <a href="#CombatTechniquesOptions">CombatTechniquesOptions</a>

---

### <a name="ProfessionVariant/options/cantrips'Remove"></a> `ProfessionVariant/options/cantrips'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/cantrips'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/cantrips'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/cantrips'Override"></a> `ProfessionVariant/options/cantrips'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/cantrips'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/cantrips'Override/value">See details</a>

#### <a name="ProfessionVariant/options/cantrips'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/cantrips'Override/value"></a> `value`

- **Type:** <a href="#CantripsOptions">CantripsOptions</a>

---

### <a name="ProfessionVariant/options/curses'Remove"></a> `ProfessionVariant/options/curses'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/curses'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/curses'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/curses'Override"></a> `ProfessionVariant/options/curses'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/curses'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/curses'Override/value">See details</a>

#### <a name="ProfessionVariant/options/curses'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/curses'Override/value"></a> `value`

- **Type:** <a href="#CursesOptions">CursesOptions</a>

---

### <a name="ProfessionVariant/options/terrain_knowledge'Remove"></a> `ProfessionVariant/options/terrain_knowledge'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/terrain_knowledge'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/terrain_knowledge'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/terrain_knowledge'Override"></a> `ProfessionVariant/options/terrain_knowledge'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/terrain_knowledge'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/terrain_knowledge'Override/value">See details</a>

#### <a name="ProfessionVariant/options/terrain_knowledge'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/terrain_knowledge'Override/value"></a> `value`

- **Type:** <a href="#TerrainKnowledgeOptions">TerrainKnowledgeOptions</a>

---

### <a name="ProfessionVariant/options/skills'Remove"></a> `ProfessionVariant/options/skills'Remove`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/skills'Remove/tag">See details</a>

#### <a name="ProfessionVariant/options/skills'Remove/tag"></a> `tag`

- **Constant:** `"Remove"`

---

### <a name="ProfessionVariant/options/skills'Override"></a> `ProfessionVariant/options/skills'Override`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ProfessionVariant/options/skills'Override/tag">See details</a>
`value` |  | <a href="#ProfessionVariant/options/skills'Override/value">See details</a>

#### <a name="ProfessionVariant/options/skills'Override/tag"></a> `tag`

- **Constant:** `"Override"`

#### <a name="ProfessionVariant/options/skills'Override/value"></a> `value`

- **Type:** <a href="#SkillsOptions">SkillsOptions</a>

---

### <a name="ProfessionVariant/special_abilities[]"></a> `ProfessionVariant/special_abilities[]`

- **Type:** <a href="#VariantSpecialAbility">VariantSpecialAbility</a>

---

### <a name="ProfessionVariant/combat_techniques[]"></a> `ProfessionVariant/combat_techniques[]`

- **Type:** <a href="#VariantCombatTechnique">VariantCombatTechnique</a>

---

### <a name="ProfessionVariant/skills[]"></a> `ProfessionVariant/skills[]`

- **Type:** <a href="#VariantSkill">VariantSkill</a>

---

### <a name="ProfessionVariant/spells[]"></a> `ProfessionVariant/spells[]`

- **Type:** <a href="#VariantSpell">VariantSpell</a>

---

### <a name="ProfessionVariant/liturgical_chants[]"></a> `ProfessionVariant/liturgical_chants[]`

- **Type:** <a href="#VariantLiturgicalChant">VariantLiturgicalChant</a>

---

### <a name="ProfessionVariant/translations[key]"></a> `ProfessionVariant/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | Name of the profession variant. | <a href="#ProfessionVariant/translations[key]/name">See details</a>

#### <a name="ProfessionVariant/translations[key]/name"></a> `name`

Name of the profession variant.

- **Type:** String
- **Minimum Length:** `1`

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
`id` | The identifier of the combat technique to provide the rating for. | <a href="#SpecialAbility'Fixed/id">See details</a>
`level?` | The level of the received special ability. | <a href="#SpecialAbility'Fixed/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#SpecialAbility'Fixed/options">See details</a>

#### <a name="SpecialAbility'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="SpecialAbility'Fixed/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="SpecialAbility'Fixed/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpecialAbility'Fixed/options"></a> `options?`

Received select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#SpecialAbility'Fixed/options[]">SpecialAbility'Fixed/options[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecialAbility'Fixed/options[]"></a> `SpecialAbility'Fixed/options[]`

- **Type:** <a href="./_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="SpecialAbility'Selection"></a> `SpecialAbility'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpecialAbility'Selection/tag">See details</a>
`options` |  | <a href="#SpecialAbility'Selection/options">See details</a>

#### <a name="SpecialAbility'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="SpecialAbility'Selection/options"></a> `options`

- **Type:** List
- **Items:** <a href="#SpecialAbility'Selection/options[]">SpecialAbility'Selection/options[]</a>
- **Minimum Items:** `2`

---

### <a name="SpecialAbility'Selection/options[]"></a> `SpecialAbility'Selection/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#SpecialAbility'Selection/options[]/id">See details</a>
`level?` | The level of the received special ability. | <a href="#SpecialAbility'Selection/options[]/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#SpecialAbility'Selection/options[]/options">See details</a>

#### <a name="SpecialAbility'Selection/options[]/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="SpecialAbility'Selection/options[]/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpecialAbility'Selection/options[]/options"></a> `options?`

Received select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#SpecialAbility'Selection/options[]/options[]">SpecialAbility'Selection/options[]/options[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecialAbility'Selection/options[]/options[]"></a> `SpecialAbility'Selection/options[]/options[]`

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
`id` | The identifier of the combat technique to provide the rating for. | <a href="#VariantSpecialAbility'Fixed/id">See details</a>
`active?` | if set to `false`, if the entry is granted by the basic package, it is removed. | <a href="#VariantSpecialAbility'Fixed/active">See details</a>
`level?` | The level of the received special ability. | <a href="#VariantSpecialAbility'Fixed/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#VariantSpecialAbility'Fixed/options">See details</a>

#### <a name="VariantSpecialAbility'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="VariantSpecialAbility'Fixed/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="VariantSpecialAbility'Fixed/active"></a> `active?`

if set to `false`, if the entry is granted by the basic package, it is
removed.

- **Constant:** `false`

#### <a name="VariantSpecialAbility'Fixed/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="VariantSpecialAbility'Fixed/options"></a> `options?`

Received select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#VariantSpecialAbility'Fixed/options[]">VariantSpecialAbility'Fixed/options[]</a>
- **Minimum Items:** `1`

---

### <a name="VariantSpecialAbility'Fixed/options[]"></a> `VariantSpecialAbility'Fixed/options[]`

- **Type:** <a href="./_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="VariantSpecialAbility'Selection"></a> `VariantSpecialAbility'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantSpecialAbility'Selection/tag">See details</a>
`active?` | if set to `false`, if the selection is granted by the basic package, it is removed. | <a href="#VariantSpecialAbility'Selection/active">See details</a>
`options` |  | <a href="#VariantSpecialAbility'Selection/options">See details</a>

#### <a name="VariantSpecialAbility'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="VariantSpecialAbility'Selection/active"></a> `active?`

if set to `false`, if the selection is granted by the basic package, it
is removed.

- **Constant:** `false`

#### <a name="VariantSpecialAbility'Selection/options"></a> `options`

- **Type:** List
- **Items:** <a href="#VariantSpecialAbility'Selection/options[]">VariantSpecialAbility'Selection/options[]</a>
- **Minimum Items:** `2`

---

### <a name="VariantSpecialAbility'Selection/options[]"></a> `VariantSpecialAbility'Selection/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#VariantSpecialAbility'Selection/options[]/id">See details</a>
`level?` | The level of the received special ability. | <a href="#VariantSpecialAbility'Selection/options[]/level">See details</a>
`options?` | Received select options. Order is important. Typically, you only need the first array index, though. | <a href="#VariantSpecialAbility'Selection/options[]/options">See details</a>

#### <a name="VariantSpecialAbility'Selection/options[]/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#SpecialAbilityIdentifier">SpecialAbilityIdentifier</a>

#### <a name="VariantSpecialAbility'Selection/options[]/level"></a> `level?`

The level of the received special ability.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="VariantSpecialAbility'Selection/options[]/options"></a> `options?`

Received select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#VariantSpecialAbility'Selection/options[]/options[]">VariantSpecialAbility'Selection/options[]/options[]</a>
- **Minimum Items:** `1`

---

### <a name="VariantSpecialAbility'Selection/options[]/options[]"></a> `VariantSpecialAbility'Selection/options[]/options[]`

- **Type:** <a href="./_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="CombatTechnique"></a> `CombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#CombatTechnique/id">See details</a>
`rating` | The rating provided for the combat technique. | <a href="#CombatTechnique/rating">See details</a>

#### <a name="CombatTechnique/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="CombatTechnique/rating"></a> `rating`

The rating provided for the combat technique.

- **Type:** Integer
- **Minimum:** `7`

---

### <a name="VariantCombatTechnique"></a> `VariantCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat technique to provide the rating for. | <a href="#VariantCombatTechnique/id">See details</a>
`rating` | The rating provided for the combat technique. It overrides the basic package's rating. | <a href="#VariantCombatTechnique/rating">See details</a>

#### <a name="VariantCombatTechnique/id"></a> `id`

The identifier of the combat technique to provide the rating for.

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="VariantCombatTechnique/rating"></a> `rating`

The rating provided for the combat technique. It overrides the basic
package's rating.

- **Type:** Integer
- **Minimum:** `6`

---

### <a name="Skill"></a> `Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the skill to provide the rating for. | <a href="#Skill/id">See details</a>
`rating` | The rating provided for the skill. | <a href="#Skill/rating">See details</a>

#### <a name="Skill/id"></a> `id`

The identifier of the skill to provide the rating for.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `59`

#### <a name="Skill/rating"></a> `rating`

The rating provided for the skill.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="VariantSkill"></a> `VariantSkill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the skill to provide the rating for. | <a href="#VariantSkill/id">See details</a>
`rating` | The rating provided for the skill. It overrides the basic package's rating. | <a href="#VariantSkill/rating">See details</a>

#### <a name="VariantSkill/id"></a> `id`

The identifier of the skill to provide the rating for.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `59`

#### <a name="VariantSkill/rating"></a> `rating`

The rating provided for the skill. It overrides the basic package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Spell"></a> `Spell`

- **Type:** Union
- **Cases:** <a href="#Spell'Fixed">Spell'Fixed</a> | <a href="#Spell'Selection">Spell'Selection</a>

---

### <a name="Spell'Fixed"></a> `Spell'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Spell'Fixed/tag">See details</a>
`id` | The identifier of the spell to provide the rating for. | <a href="#Spell'Fixed/id">See details</a>
`rating` | The rating provided for the spell. | <a href="#Spell'Fixed/rating">See details</a>

#### <a name="Spell'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Spell'Fixed/id"></a> `id`

The identifier of the spell to provide the rating for.

- **Type:** <a href="#SpellIdentifier">SpellIdentifier</a>

#### <a name="Spell'Fixed/rating"></a> `rating`

The rating provided for the spell.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Spell'Selection"></a> `Spell'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Spell'Selection/tag">See details</a>
`id` | The identifiers of the spells to choose from to provide the rating for. | <a href="#Spell'Selection/id">See details</a>
`rating` | The rating provided for the selected spell. | <a href="#Spell'Selection/rating">See details</a>

#### <a name="Spell'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="Spell'Selection/id"></a> `id`

The identifiers of the spells to choose from to provide the rating for.

- **Type:** List
- **Items:** <a href="#Spell'Selection/id[]">Spell'Selection/id[]</a>
- **Minimum Items:** `2`

#### <a name="Spell'Selection/rating"></a> `rating`

The rating provided for the selected spell.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Spell'Selection/id[]"></a> `Spell'Selection/id[]`

- **Type:** <a href="#SpellIdentifier">SpellIdentifier</a>

---

### <a name="VariantSpell"></a> `VariantSpell`

- **Type:** Union
- **Cases:** <a href="#VariantSpell'Fixed">VariantSpell'Fixed</a> | <a href="#VariantSpell'Selection">VariantSpell'Selection</a>

---

### <a name="VariantSpell'Fixed"></a> `VariantSpell'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantSpell'Fixed/tag">See details</a>
`id` | The identifier of the spell to provide the rating for. | <a href="#VariantSpell'Fixed/id">See details</a>
`rating` | The rating provided for the spell. It overrides the basic package's rating. | <a href="#VariantSpell'Fixed/rating">See details</a>

#### <a name="VariantSpell'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="VariantSpell'Fixed/id"></a> `id`

The identifier of the spell to provide the rating for.

- **Type:** <a href="#SpellIdentifier">SpellIdentifier</a>

#### <a name="VariantSpell'Fixed/rating"></a> `rating`

The rating provided for the spell. It overrides the basic package's
rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="VariantSpell'Selection"></a> `VariantSpell'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantSpell'Selection/tag">See details</a>
`id` | The identifiers of the spells to choose from to provide the rating for. | <a href="#VariantSpell'Selection/id">See details</a>
`rating` | The rating provided for the selected spell. It overrides the basic package's rating. | <a href="#VariantSpell'Selection/rating">See details</a>

#### <a name="VariantSpell'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="VariantSpell'Selection/id"></a> `id`

The identifiers of the spells to choose from to provide the rating for.

- **Type:** List
- **Items:** <a href="#VariantSpell'Selection/id[]">VariantSpell'Selection/id[]</a>
- **Minimum Items:** `2`

#### <a name="VariantSpell'Selection/rating"></a> `rating`

The rating provided for the selected spell. It overrides the basic
package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="VariantSpell'Selection/id[]"></a> `VariantSpell'Selection/id[]`

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

- **Type:** Number

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

### <a name="LiturgicalChant"></a> `LiturgicalChant`

- **Type:** Union
- **Cases:** <a href="#LiturgicalChant'Fixed">LiturgicalChant'Fixed</a> | <a href="#LiturgicalChant'Selection">LiturgicalChant'Selection</a>

---

### <a name="LiturgicalChant'Fixed"></a> `LiturgicalChant'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgicalChant'Fixed/tag">See details</a>
`id` | The identifier of the liturgical chant to provide the rating for. | <a href="#LiturgicalChant'Fixed/id">See details</a>
`rating` | The rating provided for the liturgical chant. | <a href="#LiturgicalChant'Fixed/rating">See details</a>

#### <a name="LiturgicalChant'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="LiturgicalChant'Fixed/id"></a> `id`

The identifier of the liturgical chant to provide the rating for.

- **Type:** <a href="./_Identifier.md#LiturgyIdentifier">LiturgyIdentifier</a>

#### <a name="LiturgicalChant'Fixed/rating"></a> `rating`

The rating provided for the liturgical chant.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="LiturgicalChant'Selection"></a> `LiturgicalChant'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#LiturgicalChant'Selection/tag">See details</a>
`id` | The identifiers of the liturgical chants to choose from to provide the rating for. | <a href="#LiturgicalChant'Selection/id">See details</a>
`rating` | The rating provided for the selected liturgical chant. | <a href="#LiturgicalChant'Selection/rating">See details</a>

#### <a name="LiturgicalChant'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="LiturgicalChant'Selection/id"></a> `id`

The identifiers of the liturgical chants to choose from to provide the
rating for.

- **Type:** List
- **Items:** <a href="#LiturgicalChant'Selection/id[]">LiturgicalChant'Selection/id[]</a>
- **Minimum Items:** `2`

#### <a name="LiturgicalChant'Selection/rating"></a> `rating`

The rating provided for the selected liturgical chant.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="LiturgicalChant'Selection/id[]"></a> `LiturgicalChant'Selection/id[]`

- **Type:** <a href="./_Identifier.md#LiturgyIdentifier">LiturgyIdentifier</a>

---

### <a name="VariantLiturgicalChant"></a> `VariantLiturgicalChant`

- **Type:** Union
- **Cases:** <a href="#VariantLiturgicalChant'Fixed">VariantLiturgicalChant'Fixed</a> | <a href="#VariantLiturgicalChant'Selection">VariantLiturgicalChant'Selection</a>

---

### <a name="VariantLiturgicalChant'Fixed"></a> `VariantLiturgicalChant'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantLiturgicalChant'Fixed/tag">See details</a>
`id` | The identifier of the liturgical chant to provide the rating for. | <a href="#VariantLiturgicalChant'Fixed/id">See details</a>
`rating` | The rating provided for the liturgical chant. It overrides the basic package's rating. | <a href="#VariantLiturgicalChant'Fixed/rating">See details</a>

#### <a name="VariantLiturgicalChant'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="VariantLiturgicalChant'Fixed/id"></a> `id`

The identifier of the liturgical chant to provide the rating for.

- **Type:** <a href="./_Identifier.md#LiturgyIdentifier">LiturgyIdentifier</a>

#### <a name="VariantLiturgicalChant'Fixed/rating"></a> `rating`

The rating provided for the liturgical chant. It overrides the basic
package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="VariantLiturgicalChant'Selection"></a> `VariantLiturgicalChant'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#VariantLiturgicalChant'Selection/tag">See details</a>
`id` | The identifiers of the liturgical chants to choose from to provide the rating for. | <a href="#VariantLiturgicalChant'Selection/id">See details</a>
`rating` | The rating provided for the selected liturgical chant. It overrides the basic package's rating. | <a href="#VariantLiturgicalChant'Selection/rating">See details</a>

#### <a name="VariantLiturgicalChant'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="VariantLiturgicalChant'Selection/id"></a> `id`

The identifiers of the liturgical chants to choose from to provide the
rating for.

- **Type:** List
- **Items:** <a href="#VariantLiturgicalChant'Selection/id[]">VariantLiturgicalChant'Selection/id[]</a>
- **Minimum Items:** `2`

#### <a name="VariantLiturgicalChant'Selection/rating"></a> `rating`

The rating provided for the selected liturgical chant. It overrides the
basic package's rating.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="VariantLiturgicalChant'Selection/id[]"></a> `VariantLiturgicalChant'Selection/id[]`

- **Type:** <a href="./_Identifier.md#LiturgyIdentifier">LiturgyIdentifier</a>

---

### <a name="SkillSpecializationOptions"></a> `SkillSpecializationOptions`

Select an application from a skill or from one of a list of skills where you
get a skill specialization for. You can also specify a skill groups from
which you can choose a skill.

- **Type:** Union
- **Cases:** <a href="#SkillSpecializationOptions'Single">SkillSpecializationOptions'Single</a> | <a href="#SkillSpecializationOptions'Selection">SkillSpecializationOptions'Selection</a> | <a href="#SkillSpecializationOptions'Group">SkillSpecializationOptions'Group</a>

---

### <a name="SkillSpecializationOptions'Single"></a> `SkillSpecializationOptions'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillSpecializationOptions'Single/tag">See details</a>
`id` | The referenced skill's identifier. | <a href="#SkillSpecializationOptions'Single/id">See details</a>

#### <a name="SkillSpecializationOptions'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SkillSpecializationOptions'Single/id"></a> `id`

The referenced skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillSpecializationOptions'Selection"></a> `SkillSpecializationOptions'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillSpecializationOptions'Selection/tag">See details</a>
`options` | Possible skills to get a skill specialization for. | <a href="#SkillSpecializationOptions'Selection/options">See details</a>

#### <a name="SkillSpecializationOptions'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="SkillSpecializationOptions'Selection/options"></a> `options`

Possible skills to get a skill specialization for.

- **Type:** List
- **Items:** <a href="#SkillSpecializationOptions'Selection/options[]">SkillSpecializationOptions'Selection/options[]</a>
- **Minimum Items:** `2`

---

### <a name="SkillSpecializationOptions'Selection/options[]"></a> `SkillSpecializationOptions'Selection/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The referenced skill's identifier. | <a href="#SkillSpecializationOptions'Selection/options[]/id">See details</a>

#### <a name="SkillSpecializationOptions'Selection/options[]/id"></a> `id`

The referenced skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillSpecializationOptions'Group"></a> `SkillSpecializationOptions'Group`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillSpecializationOptions'Group/tag">See details</a>
`id` | The referenced skill group's identifier. | <a href="#SkillSpecializationOptions'Group/id">See details</a>

#### <a name="SkillSpecializationOptions'Group/tag"></a> `tag`

- **Constant:** `"Group"`

#### <a name="SkillSpecializationOptions'Group/id"></a> `id`

The referenced skill group's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `5`

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`number` | The number of selectable combat techniques. | <a href="#CombatTechniquesOptions/fixed[]/number">See details</a>
`rating` | The rating provided for the selected combat technique(s). | <a href="#CombatTechniquesOptions/fixed[]/rating">See details</a>

#### <a name="CombatTechniquesOptions/fixed[]/number"></a> `number`

The number of selectable combat techniques.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CombatTechniquesOptions/fixed[]/rating"></a> `rating`

The rating provided for the selected combat technique(s).

- **Type:** Integer
- **Minimum:** `7`

---

### <a name="CombatTechniquesOptions/options[]"></a> `CombatTechniquesOptions/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The combat technique's identifier. | <a href="#CombatTechniquesOptions/options[]/id">See details</a>

#### <a name="CombatTechniquesOptions/options[]/id"></a> `id`

The combat technique's identifier.

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The cantrip's identifier. | <a href="#CantripsOptions/options[]/id">See details</a>

#### <a name="CantripsOptions/options[]/id"></a> `id`

The cantrip's identifier.

- **Type:** Integer
- **Minimum:** `1`

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The terrain knowledge option's identifier. | <a href="#TerrainKnowledgeOptions/options[]/id">See details</a>

#### <a name="TerrainKnowledgeOptions/options[]/id"></a> `id`

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
`group_id?` | If specified, you may only choose from skills of the specified group. | <a href="#SkillsOptions/group_id">See details</a>
`ap_value` | The AP value you can buy skills for. | <a href="#SkillsOptions/ap_value">See details</a>

#### <a name="SkillsOptions/group_id"></a> `group_id?`

If specified, you may only choose from skills of the specified group.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `1`

#### <a name="SkillsOptions/ap_value"></a> `ap_value`

The AP value you can buy skills for.

- **Type:** Integer
- **Minimum:** `1`
