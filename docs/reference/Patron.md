# Patron

## Definitions

### <a name="Patron"></a> Patron (`Patron`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The patron's identifier. An unique, increasing integer. | <a href="#Patron/id">See details</a>
`category` | The patron's category. | <a href="#Patron/category">See details</a>
`skills` | The patron-specific skills. | <a href="#Patron/skills">See details</a>
`culture` | The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures (difference). | <a href="#Patron/culture">See details</a>
`primary_patron_cultures?` | The list of cultures where patrons from this category can be the primary patron of. | <a href="#Patron/primary_patron_cultures">See details</a>
`powers?` | The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons. | <a href="#Patron/powers">See details</a>
`ae_cost?` | The patron-specific AE cost. Used by several animist forces for animal patrons. | <a href="#Patron/ae_cost">See details</a>
`improvement_cost?` | The patron-specific improvement cost. Used by several animist forces for animal patrons. | <a href="#Patron/improvement_cost">See details</a>
`common_advantages?` | The patron may grant common advantages that are taken into account during character creation. | <a href="#Patron/common_advantages">See details</a>
`common_disadvantages?` | The patron may grant common disadvantages that are taken into account during character creation. | <a href="#Patron/common_disadvantages">See details</a>
`common_spellworks?` | The animist may learn spellworks common for this patron. | <a href="#Patron/common_spellworks">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Patron/translations">See details</a>

#### <a name="Patron/id"></a> `id`

The patron's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Patron/category"></a> `category`

The patron's category.

- **Type:** <a href="./_SimpleReferences.md#PatronCategoryReference">PatronCategoryReference</a>

#### <a name="Patron/skills"></a> `skills`

The patron-specific skills.

- **Type:** Tuple
- **Items:** [<a href="Patron/skills[0]">Patron/skills[0]</a>, <a href="Patron/skills[1]">Patron/skills[1]</a>, <a href="Patron/skills[2]">Patron/skills[2]</a>]

#### <a name="Patron/culture"></a> `culture`

The patron is only available to a certain set of cultures. It may be
available to all, it may be available to only specific ones (intersection)
and it may be available to all except specific ones to the listed cultures
(difference).

- **Type:** <a href="#PatronCulture">PatronCulture</a>

#### <a name="Patron/primary_patron_cultures"></a> `primary_patron_cultures?`

The list of cultures where patrons from this category can be the primary
patron of.

- **Type:** List
- **Items:** <a href="#Patron/primary_patron_cultures[]">Patron/primary_patron_cultures[]</a>
- **Unique Items:** Yes

#### <a name="Patron/powers"></a> `powers?`

The patron-specific powers. Used by animist power Animal Powers I–III and
should only be present on animal patrons.

- **Type:** Tuple
- **Items:** [<a href="Patron/powers[0]">Patron/powers[0]</a>, <a href="Patron/powers[1]">Patron/powers[1]</a>, <a href="Patron/powers[2]">Patron/powers[2]</a>]

#### <a name="Patron/ae_cost"></a> `ae_cost?`

The patron-specific AE cost. Used by several animist forces for animal
patrons.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

#### <a name="Patron/improvement_cost"></a> `improvement_cost?`

The patron-specific improvement cost. Used by several animist forces for
animal patrons.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Patron/common_advantages"></a> `common_advantages?`

The patron may grant common advantages that are taken into account during
character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7

- **Type:** List
- **Items:** <a href="#Patron/common_advantages[]">Patron/common_advantages[]</a>

#### <a name="Patron/common_disadvantages"></a> `common_disadvantages?`

The patron may grant common disadvantages that are taken into account
during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7

- **Type:** List
- **Items:** <a href="#Patron/common_disadvantages[]">Patron/common_disadvantages[]</a>

#### <a name="Patron/common_spellworks"></a> `common_spellworks?`

The animist may learn spellworks common for this patron.

*Source:* Geisterwald & Knochenklippen, p. 6-7

- **Type:** List
- **Items:** <a href="#Patron/common_spellworks[]">Patron/common_spellworks[]</a>

#### <a name="Patron/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Patron/translations[key]">Patron/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Patron/skills[0]"></a> `Patron/skills[0]`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="Patron/skills[1]"></a> `Patron/skills[1]`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="Patron/skills[2]"></a> `Patron/skills[2]`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="Patron/primary_patron_cultures[]"></a> `Patron/primary_patron_cultures[]`

- **Type:** <a href="./_SimpleReferences.md#CultureReference">CultureReference</a>

---

### <a name="Patron/powers[0]"></a> `Patron/powers[0]`

- **Type:** <a href="#AnimalPowersLevel1">AnimalPowersLevel1</a>

---

### <a name="Patron/powers[1]"></a> `Patron/powers[1]`

- **Type:** <a href="#AnimalPowersLevel2">AnimalPowersLevel2</a>

---

### <a name="Patron/powers[2]"></a> `Patron/powers[2]`

- **Type:** <a href="#AnimalPowersLevel3">AnimalPowersLevel3</a>

---

### <a name="Patron/common_advantages[]"></a> `Patron/common_advantages[]`

- **Type:** <a href="./_SimpleReferences.md#AdvantageReference">AdvantageReference</a>

---

### <a name="Patron/common_disadvantages[]"></a> `Patron/common_disadvantages[]`

- **Type:** <a href="./_SimpleReferences.md#DisadvantageReference">DisadvantageReference</a>

---

### <a name="Patron/common_spellworks[]"></a> `Patron/common_spellworks[]`

- **Type:** <a href="./_SimpleReferences.md#SpellworkReference">SpellworkReference</a>

---

### <a name="Patron/translations[key]"></a> `Patron/translations[key]`

- **Type:** <a href="#PatronTranslation">PatronTranslation</a>

---

### <a name="PatronTranslation"></a> `PatronTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the patron. | <a href="#PatronTranslation/name">See details</a>

#### <a name="PatronTranslation/name"></a> `name`

The name of the patron.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="PatronCulture"></a> `PatronCulture`

The patron cultures the patron is or is not part of. If the patron is part of
all patron cultures, the set should be empty and the operation should be
difference.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`set` |  | <a href="#PatronCulture/set">See details</a>
`operation` |  | <a href="#PatronCulture/operation">See details</a>

#### <a name="PatronCulture/set"></a> `set`

- **Type:** List
- **Items:** <a href="#PatronCulture/set[]">PatronCulture/set[]</a>

#### <a name="PatronCulture/operation"></a> `operation`

- **Type:** <a href="#PatronCultureOperation">PatronCultureOperation</a>

---

### <a name="PatronCulture/set[]"></a> `PatronCulture/set[]`

- **Type:** <a href="./_SimpleReferences.md#CultureReference">CultureReference</a>

---

### <a name="PatronCultureOperation"></a> `PatronCultureOperation`

The set operation to combine the set of all patron cultures with the
specified set of patron cultures: If they should intersect, the patron is
only part of the given cultures. If they should differ, the patron is only
part of the cultures that are not given.

- **Type:** Union
- **Cases:** <a href="#PatronCultureOperation'0">PatronCultureOperation'0</a> | <a href="#PatronCultureOperation'1">PatronCultureOperation'1</a>

---

### <a name="PatronCultureOperation'0"></a> `PatronCultureOperation'0`

- **Constant:** `"Intersection"`

---

### <a name="PatronCultureOperation'1"></a> `PatronCultureOperation'1`

- **Constant:** `"Difference"`

---

### <a name="AdvantageAnimalPower"></a> `AdvantageAnimalPower`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advantage's identifier. | <a href="#AdvantageAnimalPower/id">See details</a>
`level?` | It grants a higher level of the advantage. | <a href="#AdvantageAnimalPower/level">See details</a>
`option?` | It grants a specific general option of the advantage. | <a href="#AdvantageAnimalPower/option">See details</a>

#### <a name="AdvantageAnimalPower/id"></a> `id`

The advantage's identifier.

- **Type:** <a href="./_Identifier.md#AdvantageIdentifier">AdvantageIdentifier</a>

#### <a name="AdvantageAnimalPower/level"></a> `level?`

It grants a higher level of the advantage.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="AdvantageAnimalPower/option"></a> `option?`

It grants a specific general option of the advantage.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillAnimalPower"></a> `SkillAnimalPower`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#SkillAnimalPower/id">See details</a>
`points` | The points that gets added to the skill's rating. | <a href="#SkillAnimalPower/points">See details</a>

#### <a name="SkillAnimalPower/id"></a> `id`

The skill's identifier.

- **Type:** <a href="./_Identifier.md#SkillIdentifier">SkillIdentifier</a>

#### <a name="SkillAnimalPower/points"></a> `points`

The points that gets added to the skill's rating.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowerLevel1"></a> `AnimalPowerLevel1`

- **Type:** Union
- **Cases:** <a href="#AnimalPowerLevel1'Advantage">AnimalPowerLevel1'Advantage</a> | <a href="#AnimalPowerLevel1'Skill">AnimalPowerLevel1'Skill</a>

---

### <a name="AnimalPowerLevel1'Advantage"></a> `AnimalPowerLevel1'Advantage`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel1'Advantage/tag">See details</a>
`advantage` |  | <a href="#AnimalPowerLevel1'Advantage/advantage">See details</a>

#### <a name="AnimalPowerLevel1'Advantage/tag"></a> `tag`

- **Constant:** `"Advantage"`

#### <a name="AnimalPowerLevel1'Advantage/advantage"></a> `advantage`

- **Type:** <a href="#AdvantageAnimalPower">AdvantageAnimalPower</a>

---

### <a name="AnimalPowerLevel1'Skill"></a> `AnimalPowerLevel1'Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel1'Skill/tag">See details</a>
`skill` |  | <a href="#AnimalPowerLevel1'Skill/skill">See details</a>

#### <a name="AnimalPowerLevel1'Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="AnimalPowerLevel1'Skill/skill"></a> `skill`

- **Type:** <a href="#SkillAnimalPower">SkillAnimalPower</a>

---

### <a name="AnimalPowersLevel1"></a> `AnimalPowersLevel1`

- **Type:** List
- **Items:** <a href="#AnimalPowersLevel1[]">AnimalPowersLevel1[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalPowersLevel1[]"></a> `AnimalPowersLevel1[]`

- **Type:** <a href="#AnimalPowerLevel1">AnimalPowerLevel1</a>

---

### <a name="CombatAnimalPower"></a> `CombatAnimalPower`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The combat value. | <a href="#CombatAnimalPower/id">See details</a>
`value` | The value that gets added to the combat value. | <a href="#CombatAnimalPower/value">See details</a>

#### <a name="CombatAnimalPower/id"></a> `id`

The combat value.

- **Type:** <a href="#CombatAnimalPowerType">CombatAnimalPowerType</a>

#### <a name="CombatAnimalPower/value"></a> `value`

The value that gets added to the combat value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CombatAnimalPowerType"></a> `CombatAnimalPowerType`

- **Type:** Union
- **Cases:** <a href="#CombatAnimalPowerType'0">CombatAnimalPowerType'0</a> | <a href="#CombatAnimalPowerType'1">CombatAnimalPowerType'1</a> | <a href="#CombatAnimalPowerType'2">CombatAnimalPowerType'2</a> | <a href="#CombatAnimalPowerType'3">CombatAnimalPowerType'3</a> | <a href="#CombatAnimalPowerType'4">CombatAnimalPowerType'4</a> | <a href="#CombatAnimalPowerType'5">CombatAnimalPowerType'5</a>

---

### <a name="CombatAnimalPowerType'0"></a> `CombatAnimalPowerType'0`

- **Constant:** `"Attack"`

---

### <a name="CombatAnimalPowerType'1"></a> `CombatAnimalPowerType'1`

- **Constant:** `"Parry"`

---

### <a name="CombatAnimalPowerType'2"></a> `CombatAnimalPowerType'2`

- **Constant:** `"RangedCombat"`

---

### <a name="CombatAnimalPowerType'3"></a> `CombatAnimalPowerType'3`

- **Constant:** `"Dodge"`

---

### <a name="CombatAnimalPowerType'4"></a> `CombatAnimalPowerType'4`

- **Constant:** `"DamagePoints"`

---

### <a name="CombatAnimalPowerType'5"></a> `CombatAnimalPowerType'5`

- **Constant:** `"Protection"`

---

### <a name="AnimalPowerLevel2"></a> `AnimalPowerLevel2`

- **Type:** Union
- **Cases:** <a href="#AnimalPowerLevel2'Combat">AnimalPowerLevel2'Combat</a>

---

### <a name="AnimalPowerLevel2'Combat"></a> `AnimalPowerLevel2'Combat`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel2'Combat/tag">See details</a>
`combat` |  | <a href="#AnimalPowerLevel2'Combat/combat">See details</a>

#### <a name="AnimalPowerLevel2'Combat/tag"></a> `tag`

- **Constant:** `"Combat"`

#### <a name="AnimalPowerLevel2'Combat/combat"></a> `combat`

- **Type:** <a href="#CombatAnimalPower">CombatAnimalPower</a>

---

### <a name="AnimalPowersLevel2"></a> `AnimalPowersLevel2`

- **Type:** List
- **Items:** <a href="#AnimalPowersLevel2[]">AnimalPowersLevel2[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalPowersLevel2[]"></a> `AnimalPowersLevel2[]`

- **Type:** <a href="#AnimalPowerLevel2">AnimalPowerLevel2</a>

---

### <a name="AttributeAnimalPower"></a> `AttributeAnimalPower`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The attribute's identifier. | <a href="#AttributeAnimalPower/id">See details</a>
`value` | The value that gets added to the attribute. | <a href="#AttributeAnimalPower/value">See details</a>

#### <a name="AttributeAnimalPower/id"></a> `id`

The attribute's identifier.

- **Type:** <a href="./_Identifier.md#AttributeIdentifier">AttributeIdentifier</a>

#### <a name="AttributeAnimalPower/value"></a> `value`

The value that gets added to the attribute.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalPowerLevel3"></a> `AnimalPowerLevel3`

- **Type:** Union
- **Cases:** <a href="#AnimalPowerLevel3'Attribute">AnimalPowerLevel3'Attribute</a>

---

### <a name="AnimalPowerLevel3'Attribute"></a> `AnimalPowerLevel3'Attribute`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalPowerLevel3'Attribute/tag">See details</a>
`attribute` |  | <a href="#AnimalPowerLevel3'Attribute/attribute">See details</a>

#### <a name="AnimalPowerLevel3'Attribute/tag"></a> `tag`

- **Constant:** `"Attribute"`

#### <a name="AnimalPowerLevel3'Attribute/attribute"></a> `attribute`

- **Type:** <a href="#AttributeAnimalPower">AttributeAnimalPower</a>

---

### <a name="AnimalPowersLevel3"></a> `AnimalPowersLevel3`

- **Type:** List
- **Items:** <a href="#AnimalPowersLevel3[]">AnimalPowersLevel3[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalPowersLevel3[]"></a> `AnimalPowersLevel3[]`

- **Type:** <a href="#AnimalPowerLevel3">AnimalPowerLevel3</a>
