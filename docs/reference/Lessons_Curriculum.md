# Curriculum

This is a curriculum of a specified academy, containing the guideline,
elective and restricted spellworks as well as the lesson packages of that
academy.

## Definitions

### <a name="Curriculum"></a> Curriculum (`Curriculum`)

This is a curriculum of a specified academy, containing the guideline,
elective and restricted spellworks as well as the lesson packages of that
academy.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The curriculum's identifier. An unique, increasing integer. | <a href="#Curriculum/id">See details</a>
`guideline_id` | The institution's guideline's identifier. | <a href="#Curriculum/guideline_id">See details</a>
`elective_spellworks?` | The academy's elective spellworks package. | <a href="#Curriculum/elective_spellworks">See details</a>
`restricted_spellworks?` | The academy's restricted spellworks package. | <a href="#Curriculum/restricted_spellworks">See details</a>
`lesson_packages` | A list of available lesson packages. | <a href="#Curriculum/lesson_packages">See details</a>
`src` |  | <a href="#Curriculum/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Curriculum/translations">See details</a>

#### <a name="Curriculum/id"></a> `id`

The curriculum's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Curriculum/guideline_id"></a> `guideline_id`

The institution's guideline's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="Curriculum/elective_spellworks"></a> `elective_spellworks?`

The academy's elective spellworks package.

- **Type:** <a href="#ElectiveSpellworks">ElectiveSpellworks</a>

#### <a name="Curriculum/restricted_spellworks"></a> `restricted_spellworks?`

The academy's restricted spellworks package.

- **Type:** <a href="#RestrictedSpellworks">RestrictedSpellworks</a>

#### <a name="Curriculum/lesson_packages"></a> `lesson_packages`

A list of available lesson packages.

- **Type:** <a href="#LessonPackages">LessonPackages</a>

#### <a name="Curriculum/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Curriculum/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Curriculum/translations[key]">Curriculum/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Curriculum/translations[key]"></a> `Curriculum/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the academy. | <a href="#Curriculum/translations[key]/name">See details</a>
`errata?` |  | <a href="#Curriculum/translations[key]/errata">See details</a>

#### <a name="Curriculum/translations[key]/name"></a> `name`

The name of the academy.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Curriculum/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ElectiveSpellworks"></a> `ElectiveSpellworks`

The academy's elective spellworks package.

- **Type:** Union
- **Cases:** <a href="#ElectiveSpellworks'DefinedByGameMaster">ElectiveSpellworks'DefinedByGameMaster</a> | <a href="#ElectiveSpellworks'Explicit">ElectiveSpellworks'Explicit</a>

---

### <a name="ElectiveSpellworks'DefinedByGameMaster"></a> `ElectiveSpellworks'DefinedByGameMaster`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ElectiveSpellworks'DefinedByGameMaster/tag">See details</a>

#### <a name="ElectiveSpellworks'DefinedByGameMaster/tag"></a> `tag`

- **Constant:** `"DefinedByGameMaster"`

---

### <a name="ElectiveSpellworks'Explicit"></a> `ElectiveSpellworks'Explicit`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ElectiveSpellworks'Explicit/tag">See details</a>
`list` |  | <a href="#ElectiveSpellworks'Explicit/list">See details</a>

#### <a name="ElectiveSpellworks'Explicit/tag"></a> `tag`

- **Constant:** `"Explicit"`

#### <a name="ElectiveSpellworks'Explicit/list"></a> `list`

- **Type:** List
- **Items:** <a href="#ElectiveSpellworks'Explicit/list[]">ElectiveSpellworks'Explicit/list[]</a>
- **Minimum Items:** `1`

---

### <a name="ElectiveSpellworks'Explicit/list[]"></a> `ElectiveSpellworks'Explicit/list[]`

- **Type:** <a href="#ElectiveSpellwork">ElectiveSpellwork</a>

---

### <a name="ElectiveSpellwork"></a> `ElectiveSpellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ElectiveSpellwork/id">See details</a>
`restriction?` | The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead. | <a href="#ElectiveSpellwork/restriction">See details</a>

#### <a name="ElectiveSpellwork/id"></a> `id`

- **Type:** <a href="#SpellworkId">SpellworkId</a>

#### <a name="ElectiveSpellwork/restriction"></a> `restriction?`

The elective spellwork may only take effect if a certain condition is met.
The condition may be related to professions or profession variants, but it
is designed so that it can work without a specific profession, as multiple
may belong to an institute, but with referencing other entities instead.

- **Type:** <a href="#ElectiveSpellworkRestriction">ElectiveSpellworkRestriction</a>

---

### <a name="ElectiveSpellworkRestriction"></a> `ElectiveSpellworkRestriction`

The elective spellwork may only take effect if a certain condition is met.
The condition may be related to professions or profession variants, but it is
designed so that it can work without a specific profession, as multiple may
belong to an institute, but with referencing other entities instead.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ElectiveSpellworkRestriction/tag">See details</a>
`id` | The element's identifier. | <a href="#ElectiveSpellworkRestriction/id">See details</a>

#### <a name="ElectiveSpellworkRestriction/tag"></a> `tag`

- **Constant:** `"Element"`

#### <a name="ElectiveSpellworkRestriction/id"></a> `id`

The element's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="RestrictedSpellworks"></a> `RestrictedSpellworks`

The academy's restricted spellworks package.

- **Type:** List
- **Items:** <a href="#RestrictedSpellworks[]">RestrictedSpellworks[]</a>
- **Minimum Items:** `1`

---

### <a name="RestrictedSpellworks[]"></a> `RestrictedSpellworks[]`

- **Type:** <a href="#RestrictedSpellwork">RestrictedSpellwork</a>

---

### <a name="RestrictedSpellwork"></a> `RestrictedSpellwork`

The academy's restricted spellworks package.

- **Type:** Union
- **Cases:** <a href="#RestrictedSpellwork'Property">RestrictedSpellwork'Property</a> | <a href="#RestrictedSpellwork'SpellworkId">RestrictedSpellwork'SpellworkId</a> | <a href="#RestrictedSpellwork'DemonSummoning">RestrictedSpellwork'DemonSummoning</a> | <a href="#RestrictedSpellwork'Borbaradian">RestrictedSpellwork'Borbaradian</a> | <a href="#RestrictedSpellwork'DamageIntelligent">RestrictedSpellwork'DamageIntelligent</a>

---

### <a name="RestrictedSpellwork'Property"></a> `RestrictedSpellwork'Property`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'Property/tag">See details</a>
`id` | The identifier of the property that spellworks are disallowed from. | <a href="#RestrictedSpellwork'Property/id">See details</a>
`exclude?` | Exclude specific spellworks from the restriction. | <a href="#RestrictedSpellwork'Property/exclude">See details</a>
`maximum?` | Spellworks from this property up to a certain number are allowed. Spellworks excluded from this restriction definition using `exclude` do not contribute to the maximum. | <a href="#RestrictedSpellwork'Property/maximum">See details</a>

#### <a name="RestrictedSpellwork'Property/tag"></a> `tag`

- **Constant:** `"Property"`

#### <a name="RestrictedSpellwork'Property/id"></a> `id`

The identifier of the property that spellworks are disallowed from.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RestrictedSpellwork'Property/exclude"></a> `exclude?`

Exclude specific spellworks from the restriction.

- **Type:** List
- **Items:** <a href="#RestrictedSpellwork'Property/exclude[]">RestrictedSpellwork'Property/exclude[]</a>
- **Minimum Items:** `1`

#### <a name="RestrictedSpellwork'Property/maximum"></a> `maximum?`

Spellworks from this property up to a certain number are allowed.
Spellworks excluded from this restriction definition using `exclude` do
not contribute to the maximum.

- **Type:** Number

---

### <a name="RestrictedSpellwork'Property/exclude[]"></a> `RestrictedSpellwork'Property/exclude[]`

- **Type:** <a href="#SpellworkId">SpellworkId</a>

---

### <a name="RestrictedSpellwork'SpellworkId"></a> `RestrictedSpellwork'SpellworkId`

- **Type:** <a href="#SpellworkId">SpellworkId</a>

---

### <a name="RestrictedSpellwork'DemonSummoning"></a> `RestrictedSpellwork'DemonSummoning`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'DemonSummoning/tag">See details</a>

#### <a name="RestrictedSpellwork'DemonSummoning/tag"></a> `tag`

- **Constant:** `"DemonSummoning"`

---

### <a name="RestrictedSpellwork'Borbaradian"></a> `RestrictedSpellwork'Borbaradian`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'Borbaradian/tag">See details</a>

#### <a name="RestrictedSpellwork'Borbaradian/tag"></a> `tag`

- **Constant:** `"Borbaradian"`

---

### <a name="RestrictedSpellwork'DamageIntelligent"></a> `RestrictedSpellwork'DamageIntelligent`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'DamageIntelligent/tag">See details</a>

#### <a name="RestrictedSpellwork'DamageIntelligent/tag"></a> `tag`

- **Constant:** `"DamageIntelligent"`

---

### <a name="LessonPackages"></a> `LessonPackages`

A list of available lesson packages.

- **Type:** Tuple
- **Items:** [<a href="LessonPackages[0]">LessonPackages[0]</a>, <a href="LessonPackages[1]">LessonPackages[1]</a>]

---

### <a name="LessonPackages[0]"></a> `LessonPackages[0]`

- **Type:** <a href="#LessonPackage">LessonPackage</a>

---

### <a name="LessonPackages[1]"></a> `LessonPackages[1]`

- **Type:** <a href="#LessonPackage">LessonPackage</a>

---

### <a name="LessonPackage"></a> Lesson Package (`LessonPackage`)

- **Type:** Object
- **Minimum Properties:** `3`

Key | Description | Details
:-- | :-- | :--
`id` | The lesson package's identifier. An unique, increasing integer. | <a href="#LessonPackage/id">See details</a>
`spellwork_changes?` | The spell values difference of the lesson package. This field reflects the changes (difference) to the field of the same name in the profession package. If a spell gets to SR 0 because of this, it will be removed completely. | <a href="#LessonPackage/spellwork_changes">See details</a>
`skills?` |  | <a href="#LessonPackage/skills">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LessonPackage/translations">See details</a>

#### <a name="LessonPackage/id"></a> `id`

The lesson package's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LessonPackage/spellwork_changes"></a> `spellwork_changes?`

The spell values difference of the lesson package. This field reflects the
changes (difference) to the field of the same name in the profession
package. If a spell gets to SR 0 because of this, it will be removed
completely.

- **Type:** List
- **Items:** <a href="#LessonPackage/spellwork_changes[]">LessonPackage/spellwork_changes[]</a>
- **Minimum Items:** `1`

#### <a name="LessonPackage/skills"></a> `skills?`

- **Type:** List
- **Items:** <a href="#LessonPackage/skills[]">LessonPackage/skills[]</a>

#### <a name="LessonPackage/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LessonPackage/translations[key]">LessonPackage/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LessonPackage/spellwork_changes[]"></a> `LessonPackage/spellwork_changes[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` |  | <a href="#LessonPackage/spellwork_changes[]/base">See details</a>
`replacement` |  | <a href="#LessonPackage/spellwork_changes[]/replacement">See details</a>

#### <a name="LessonPackage/spellwork_changes[]/base"></a> `base`

- **Type:** <a href="#SpellworkAdjustment">SpellworkAdjustment</a>

#### <a name="LessonPackage/spellwork_changes[]/replacement"></a> `replacement`

- **Type:** <a href="#SpellworkAdjustment">SpellworkAdjustment</a>

---

### <a name="LessonPackage/skills[]"></a> `LessonPackage/skills[]`

- **Type:** <a href="#SkillAdjustment">SkillAdjustment</a>

---

### <a name="LessonPackage/translations[key]"></a> `LessonPackage/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the lesson package. | <a href="#LessonPackage/translations[key]/name">See details</a>
`spellwork_changes?` | The spell values difference of the lesson package. Use this field to specify a text that is displayed instead of the generated `spellwork_changes` list. The field is displayed even if no list is present. | <a href="#LessonPackage/translations[key]/spellwork_changes">See details</a>

#### <a name="LessonPackage/translations[key]/name"></a> `name`

The name of the lesson package.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="LessonPackage/translations[key]/spellwork_changes"></a> `spellwork_changes?`

The spell values difference of the lesson package. Use this field to
specify a text that is displayed instead of the generated
`spellwork_changes` list. The field is displayed even if no list is
present.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="SkillAdjustment"></a> `SkillAdjustment`

- **Type:** Union
- **Cases:** <a href="#SkillAdjustment'MeleeCombatTechnique">SkillAdjustment'MeleeCombatTechnique</a> | <a href="#SkillAdjustment'RangedCombatTechnique">SkillAdjustment'RangedCombatTechnique</a> | <a href="#SkillAdjustment'Skill">SkillAdjustment'Skill</a> | <a href="#SkillAdjustment'SpellworkAdjustment">SkillAdjustment'SpellworkAdjustment</a>

---

### <a name="SkillAdjustment'MeleeCombatTechnique"></a> `SkillAdjustment'MeleeCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillAdjustment'MeleeCombatTechnique/tag">See details</a>
`id` | The melee combat technique's identifier. | <a href="#SkillAdjustment'MeleeCombatTechnique/id">See details</a>
`points` | The combat technique points that will be added to the current combat technique rating. | <a href="#SkillAdjustment'MeleeCombatTechnique/points">See details</a>

#### <a name="SkillAdjustment'MeleeCombatTechnique/tag"></a> `tag`

- **Constant:** `"MeleeCombatTechnique"`

#### <a name="SkillAdjustment'MeleeCombatTechnique/id"></a> `id`

The melee combat technique's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillAdjustment'MeleeCombatTechnique/points"></a> `points`

The combat technique points that will be added to the current combat
technique rating.

- **Type:** Integer
- **Minimum:** `-6`
- **Maximum:** `6`

---

### <a name="SkillAdjustment'RangedCombatTechnique"></a> `SkillAdjustment'RangedCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillAdjustment'RangedCombatTechnique/tag">See details</a>
`id` | The ranged combat technique's identifier. | <a href="#SkillAdjustment'RangedCombatTechnique/id">See details</a>
`points` | The combat technique points that will be added to the current combat technique rating. | <a href="#SkillAdjustment'RangedCombatTechnique/points">See details</a>

#### <a name="SkillAdjustment'RangedCombatTechnique/tag"></a> `tag`

- **Constant:** `"RangedCombatTechnique"`

#### <a name="SkillAdjustment'RangedCombatTechnique/id"></a> `id`

The ranged combat technique's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillAdjustment'RangedCombatTechnique/points"></a> `points`

The combat technique points that will be added to the current combat
technique rating.

- **Type:** Integer
- **Minimum:** `-6`
- **Maximum:** `6`

---

### <a name="SkillAdjustment'Skill"></a> `SkillAdjustment'Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillAdjustment'Skill/tag">See details</a>
`id` | The skill's identifier. | <a href="#SkillAdjustment'Skill/id">See details</a>
`points` | The skill points that will be added to the current skill rating. | <a href="#SkillAdjustment'Skill/points">See details</a>

#### <a name="SkillAdjustment'Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="SkillAdjustment'Skill/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillAdjustment'Skill/points"></a> `points`

The skill points that will be added to the current skill rating.

- **Type:** Integer
- **Minimum:** `-8`
- **Maximum:** `8`

---

### <a name="SkillAdjustment'SpellworkAdjustment"></a> `SkillAdjustment'SpellworkAdjustment`

- **Type:** <a href="#SpellworkAdjustment">SpellworkAdjustment</a>

---

### <a name="SpellworkAdjustment"></a> `SpellworkAdjustment`

- **Type:** Union
- **Cases:** <a href="#SpellworkAdjustment'Spell">SpellworkAdjustment'Spell</a> | <a href="#SpellworkAdjustment'Ritual">SpellworkAdjustment'Ritual</a>

---

### <a name="SpellworkAdjustment'Spell"></a> `SpellworkAdjustment'Spell`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkAdjustment'Spell/tag">See details</a>
`id` | The spell's identifier. | <a href="#SpellworkAdjustment'Spell/id">See details</a>
`points` | The skill points that will be added to the current skill rating. If a spell gets to a skill rating of 0 because of this, it will be removed completely. | <a href="#SpellworkAdjustment'Spell/points">See details</a>
`tradition_id?` | The target tradition's identifier. If the target spell is not from the Guild Mage tradition, specify the tradition identifier here. | <a href="#SpellworkAdjustment'Spell/tradition_id">See details</a>

#### <a name="SpellworkAdjustment'Spell/tag"></a> `tag`

- **Constant:** `"Spell"`

#### <a name="SpellworkAdjustment'Spell/id"></a> `id`

The spell's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpellworkAdjustment'Spell/points"></a> `points`

The skill points that will be added to the current skill rating. If a
spell gets to a skill rating of 0 because of this, it will be removed
completely.

- **Type:** Integer
- **Minimum:** `-10`
- **Maximum:** `10`

#### <a name="SpellworkAdjustment'Spell/tradition_id"></a> `tradition_id?`

The target tradition's identifier. If the target spell is not from the
Guild Mage tradition, specify the tradition identifier here.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="SpellworkAdjustment'Ritual"></a> `SpellworkAdjustment'Ritual`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkAdjustment'Ritual/tag">See details</a>
`id` | The ritual's identifier. | <a href="#SpellworkAdjustment'Ritual/id">See details</a>
`points` | The skill points that will be added to the current skill rating. If a ritual gets to a skill rating of 0 because of this, it will be removed completely. | <a href="#SpellworkAdjustment'Ritual/points">See details</a>
`tradition_id?` | The target tradition's identifier. If the target ritual is not from the Guild Mage tradition, specify the tradition identifier here. | <a href="#SpellworkAdjustment'Ritual/tradition_id">See details</a>

#### <a name="SpellworkAdjustment'Ritual/tag"></a> `tag`

- **Constant:** `"Ritual"`

#### <a name="SpellworkAdjustment'Ritual/id"></a> `id`

The ritual's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SpellworkAdjustment'Ritual/points"></a> `points`

The skill points that will be added to the current skill rating. If a
ritual gets to a skill rating of 0 because of this, it will be removed
completely.

- **Type:** Integer
- **Minimum:** `-10`
- **Maximum:** `10`

#### <a name="SpellworkAdjustment'Ritual/tradition_id"></a> `tradition_id?`

The target tradition's identifier. If the target ritual is not from the
Guild Mage tradition, specify the tradition identifier here.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="SpellworkId"></a> `SpellworkId`

- **Type:** Union
- **Cases:** <a href="#SpellworkId'Spell">SpellworkId'Spell</a> | <a href="#SpellworkId'Ritual">SpellworkId'Ritual</a>

---

### <a name="SpellworkId'Spell"></a> `SpellworkId'Spell`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkId'Spell/tag">See details</a>
`id` | The spell's identifier. | <a href="#SpellworkId'Spell/id">See details</a>

#### <a name="SpellworkId'Spell/tag"></a> `tag`

- **Constant:** `"Spell"`

#### <a name="SpellworkId'Spell/id"></a> `id`

The spell's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SpellworkId'Ritual"></a> `SpellworkId'Ritual`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SpellworkId'Ritual/tag">See details</a>
`id` | The ritual's identifier. | <a href="#SpellworkId'Ritual/id">See details</a>

#### <a name="SpellworkId'Ritual/tag"></a> `tag`

- **Constant:** `"Ritual"`

#### <a name="SpellworkId'Ritual/id"></a> `id`

The ritual's identifier.

- **Type:** Integer
- **Minimum:** `1`
