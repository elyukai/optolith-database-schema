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
`guideline` | The institution's guideline. | <a href="#Curriculum/guideline">See details</a>
`elective_spellworks?` | The academy's elective spellworks package. | <a href="#Curriculum/elective_spellworks">See details</a>
`restricted_spellworks?` | The academy's restricted spellworks package. | <a href="#Curriculum/restricted_spellworks">See details</a>
`lesson_packages` | A list of available lesson packages. | <a href="#Curriculum/lesson_packages">See details</a>
`src` |  | <a href="#Curriculum/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Curriculum/translations">See details</a>

#### <a name="Curriculum/id"></a> `id`

The curriculum's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Curriculum/guideline"></a> `guideline`

The institution's guideline.

- **Type:** <a href="./_SimpleReferences.md#GuidelineReference">GuidelineReference</a>

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

- **Type:** <a href="#CurriculumTranslation">CurriculumTranslation</a>

---

### <a name="CurriculumTranslation"></a> `CurriculumTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the academy. | <a href="#CurriculumTranslation/name">See details</a>
`errata?` |  | <a href="#CurriculumTranslation/errata">See details</a>

#### <a name="CurriculumTranslation/name"></a> `name`

The name of the academy.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CurriculumTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ElectiveSpellworks"></a> `ElectiveSpellworks`

The academy's elective spellworks package.

- **Type:** Union
- **Cases:** <a href="#ElectiveSpellworks'DefinedByGameMaster">ElectiveSpellworks'DefinedByGameMaster</a> | <a href="#ElectiveSpellworks'Specific">ElectiveSpellworks'Specific</a>

---

### <a name="ElectiveSpellworks'DefinedByGameMaster"></a> `ElectiveSpellworks'DefinedByGameMaster`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ElectiveSpellworks'DefinedByGameMaster/tag">See details</a>
`defined_by_game_master` |  | <a href="#ElectiveSpellworks'DefinedByGameMaster/defined_by_game_master">See details</a>

#### <a name="ElectiveSpellworks'DefinedByGameMaster/tag"></a> `tag`

- **Constant:** `"DefinedByGameMaster"`

#### <a name="ElectiveSpellworks'DefinedByGameMaster/defined_by_game_master"></a> `defined_by_game_master`

- **Type:** <a href="#ElectiveSpellworks'DefinedByGameMaster/defined_by_game_master">Object</a>

---

### <a name="ElectiveSpellworks'DefinedByGameMaster/defined_by_game_master"></a> `ElectiveSpellworks'DefinedByGameMaster/defined_by_game_master`

- **Type:** Empty Object

---

### <a name="ElectiveSpellworks'Specific"></a> `ElectiveSpellworks'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ElectiveSpellworks'Specific/tag">See details</a>
`specific` |  | <a href="#ElectiveSpellworks'Specific/specific">See details</a>

#### <a name="ElectiveSpellworks'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="ElectiveSpellworks'Specific/specific"></a> `specific`

- **Type:** <a href="#SpecificElectiveSpellworks">SpecificElectiveSpellworks</a>

---

### <a name="SpecificElectiveSpellworks"></a> `SpecificElectiveSpellworks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#SpecificElectiveSpellworks/list">See details</a>

#### <a name="SpecificElectiveSpellworks/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpecificElectiveSpellworks/list[]">SpecificElectiveSpellworks/list[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecificElectiveSpellworks/list[]"></a> `SpecificElectiveSpellworks/list[]`

- **Type:** <a href="#ElectiveSpellwork">ElectiveSpellwork</a>

---

### <a name="ElectiveSpellwork"></a> `ElectiveSpellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ElectiveSpellwork/id">See details</a>
`restriction?` | The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead. | <a href="#ElectiveSpellwork/restriction">See details</a>

#### <a name="ElectiveSpellwork/id"></a> `id`

- **Type:** <a href="./_Identifier.md#SpellworkIdentifier">SpellworkIdentifier</a>

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
- **Cases:** <a href="#RestrictedSpellwork'Property">RestrictedSpellwork'Property</a> | <a href="#RestrictedSpellwork'Spellwork">RestrictedSpellwork'Spellwork</a> | <a href="#RestrictedSpellwork'DemonSummoning">RestrictedSpellwork'DemonSummoning</a> | <a href="#RestrictedSpellwork'Borbaradian">RestrictedSpellwork'Borbaradian</a> | <a href="#RestrictedSpellwork'DamageIntelligent">RestrictedSpellwork'DamageIntelligent</a>

---

### <a name="RestrictedSpellwork'Property"></a> `RestrictedSpellwork'Property`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'Property/tag">See details</a>
`property` |  | <a href="#RestrictedSpellwork'Property/property">See details</a>

#### <a name="RestrictedSpellwork'Property/tag"></a> `tag`

- **Constant:** `"Property"`

#### <a name="RestrictedSpellwork'Property/property"></a> `property`

- **Type:** <a href="#RestrictedProperty">RestrictedProperty</a>

---

### <a name="RestrictedSpellwork'Spellwork"></a> `RestrictedSpellwork'Spellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'Spellwork/tag">See details</a>
`spellwork` |  | <a href="#RestrictedSpellwork'Spellwork/spellwork">See details</a>

#### <a name="RestrictedSpellwork'Spellwork/tag"></a> `tag`

- **Constant:** `"Spellwork"`

#### <a name="RestrictedSpellwork'Spellwork/spellwork"></a> `spellwork`

- **Type:** <a href="./_Identifier.md#SpellworkIdentifier">SpellworkIdentifier</a>

---

### <a name="RestrictedSpellwork'DemonSummoning"></a> `RestrictedSpellwork'DemonSummoning`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'DemonSummoning/tag">See details</a>
`demon_summoning` |  | <a href="#RestrictedSpellwork'DemonSummoning/demon_summoning">See details</a>

#### <a name="RestrictedSpellwork'DemonSummoning/tag"></a> `tag`

- **Constant:** `"DemonSummoning"`

#### <a name="RestrictedSpellwork'DemonSummoning/demon_summoning"></a> `demon_summoning`

- **Type:** <a href="#RestrictedSpellwork'DemonSummoning/demon_summoning">Object</a>

---

### <a name="RestrictedSpellwork'DemonSummoning/demon_summoning"></a> `RestrictedSpellwork'DemonSummoning/demon_summoning`

- **Type:** Empty Object

---

### <a name="RestrictedSpellwork'Borbaradian"></a> `RestrictedSpellwork'Borbaradian`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'Borbaradian/tag">See details</a>
`borbaradian` |  | <a href="#RestrictedSpellwork'Borbaradian/borbaradian">See details</a>

#### <a name="RestrictedSpellwork'Borbaradian/tag"></a> `tag`

- **Constant:** `"Borbaradian"`

#### <a name="RestrictedSpellwork'Borbaradian/borbaradian"></a> `borbaradian`

- **Type:** <a href="#RestrictedSpellwork'Borbaradian/borbaradian">Object</a>

---

### <a name="RestrictedSpellwork'Borbaradian/borbaradian"></a> `RestrictedSpellwork'Borbaradian/borbaradian`

- **Type:** Empty Object

---

### <a name="RestrictedSpellwork'DamageIntelligent"></a> `RestrictedSpellwork'DamageIntelligent`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RestrictedSpellwork'DamageIntelligent/tag">See details</a>
`damage_intelligent` |  | <a href="#RestrictedSpellwork'DamageIntelligent/damage_intelligent">See details</a>

#### <a name="RestrictedSpellwork'DamageIntelligent/tag"></a> `tag`

- **Constant:** `"DamageIntelligent"`

#### <a name="RestrictedSpellwork'DamageIntelligent/damage_intelligent"></a> `damage_intelligent`

- **Type:** <a href="#RestrictedSpellwork'DamageIntelligent/damage_intelligent">Object</a>

---

### <a name="RestrictedSpellwork'DamageIntelligent/damage_intelligent"></a> `RestrictedSpellwork'DamageIntelligent/damage_intelligent`

- **Type:** Empty Object

---

### <a name="RestrictedProperty"></a> `RestrictedProperty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the property that spellworks are disallowed from. | <a href="#RestrictedProperty/id">See details</a>
`exclude?` | Exclude specific spellworks from the restriction. | <a href="#RestrictedProperty/exclude">See details</a>
`maximum?` | Spellworks from this property up to a certain number are allowed. Spellworks excluded from this restriction definition using `exclude` do not contribute to the maximum. | <a href="#RestrictedProperty/maximum">See details</a>

#### <a name="RestrictedProperty/id"></a> `id`

The identifier of the property that spellworks are disallowed from.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RestrictedProperty/exclude"></a> `exclude?`

Exclude specific spellworks from the restriction.

- **Type:** List
- **Items:** <a href="#RestrictedProperty/exclude[]">RestrictedProperty/exclude[]</a>
- **Minimum Items:** `1`

#### <a name="RestrictedProperty/maximum"></a> `maximum?`

Spellworks from this property up to a certain number are allowed.
Spellworks excluded from this restriction definition using `exclude` do
not contribute to the maximum.

- **Type:** Number

---

### <a name="RestrictedProperty/exclude[]"></a> `RestrictedProperty/exclude[]`

- **Type:** <a href="./_Identifier.md#SpellworkIdentifier">SpellworkIdentifier</a>

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

- **Type:** <a href="#SpellworkChange">SpellworkChange</a>

---

### <a name="LessonPackage/skills[]"></a> `LessonPackage/skills[]`

- **Type:** <a href="#AbilityAdjustment">AbilityAdjustment</a>

---

### <a name="LessonPackage/translations[key]"></a> `LessonPackage/translations[key]`

- **Type:** <a href="#LessonPackageTranslation">LessonPackageTranslation</a>

---

### <a name="SpellworkChange"></a> `SpellworkChange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` |  | <a href="#SpellworkChange/base">See details</a>
`replacement` |  | <a href="#SpellworkChange/replacement">See details</a>

#### <a name="SpellworkChange/base"></a> `base`

- **Type:** <a href="#SpellworkAdjustment">SpellworkAdjustment</a>

#### <a name="SpellworkChange/replacement"></a> `replacement`

- **Type:** <a href="#SpellworkAdjustment">SpellworkAdjustment</a>

---

### <a name="LessonPackageTranslation"></a> `LessonPackageTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the lesson package. | <a href="#LessonPackageTranslation/name">See details</a>
`spellwork_changes?` | The spell values difference of the lesson package. Use this field to specify a text that is displayed instead of the generated `spellwork_changes` list. The field is displayed even if no list is present. | <a href="#LessonPackageTranslation/spellwork_changes">See details</a>

#### <a name="LessonPackageTranslation/name"></a> `name`

The name of the lesson package.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="LessonPackageTranslation/spellwork_changes"></a> `spellwork_changes?`

The spell values difference of the lesson package. Use this field to
specify a text that is displayed instead of the generated
`spellwork_changes` list. The field is displayed even if no list is
present.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="AbilityAdjustment"></a> `AbilityAdjustment`

- **Type:** Union
- **Cases:** <a href="#AbilityAdjustment'CombatTechnique">AbilityAdjustment'CombatTechnique</a> | <a href="#AbilityAdjustment'Skill">AbilityAdjustment'Skill</a> | <a href="#AbilityAdjustment'Spellwork">AbilityAdjustment'Spellwork</a>

---

### <a name="AbilityAdjustment'CombatTechnique"></a> `AbilityAdjustment'CombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AbilityAdjustment'CombatTechnique/tag">See details</a>
`combat_technique` |  | <a href="#AbilityAdjustment'CombatTechnique/combat_technique">See details</a>

#### <a name="AbilityAdjustment'CombatTechnique/tag"></a> `tag`

- **Constant:** `"CombatTechnique"`

#### <a name="AbilityAdjustment'CombatTechnique/combat_technique"></a> `combat_technique`

- **Type:** <a href="#CombatTechniqueAdjustment">CombatTechniqueAdjustment</a>

---

### <a name="AbilityAdjustment'Skill"></a> `AbilityAdjustment'Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AbilityAdjustment'Skill/tag">See details</a>
`skill` |  | <a href="#AbilityAdjustment'Skill/skill">See details</a>

#### <a name="AbilityAdjustment'Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="AbilityAdjustment'Skill/skill"></a> `skill`

- **Type:** <a href="#SkillAdjustment">SkillAdjustment</a>

---

### <a name="AbilityAdjustment'Spellwork"></a> `AbilityAdjustment'Spellwork`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AbilityAdjustment'Spellwork/tag">See details</a>
`spellwork` |  | <a href="#AbilityAdjustment'Spellwork/spellwork">See details</a>

#### <a name="AbilityAdjustment'Spellwork/tag"></a> `tag`

- **Constant:** `"Spellwork"`

#### <a name="AbilityAdjustment'Spellwork/spellwork"></a> `spellwork`

- **Type:** <a href="#SpellworkAdjustment">SpellworkAdjustment</a>

---

### <a name="CombatTechniqueAdjustment"></a> `CombatTechniqueAdjustment`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatTechniqueAdjustment/id">See details</a>
`points` | The combat technique points that will be added to the current combat technique rating. | <a href="#CombatTechniqueAdjustment/points">See details</a>

#### <a name="CombatTechniqueAdjustment/id"></a> `id`

- **Type:** <a href="./_Identifier.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="CombatTechniqueAdjustment/points"></a> `points`

The combat technique points that will be added to the current combat
technique rating.

- **Type:** Integer
- **Minimum:** `-6`
- **Maximum:** `6`

---

### <a name="SkillAdjustment"></a> `SkillAdjustment`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#SkillAdjustment/id">See details</a>
`points` | The skill points that will be added to the current skill rating. | <a href="#SkillAdjustment/points">See details</a>

#### <a name="SkillAdjustment/id"></a> `id`

The skill's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillAdjustment/points"></a> `points`

The skill points that will be added to the current skill rating.

- **Type:** Integer
- **Minimum:** `-8`
- **Maximum:** `8`

---

### <a name="SpellworkAdjustment"></a> `SpellworkAdjustment`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SpellworkAdjustment/id">See details</a>
`points` | The skill points that will be added to the current skill rating. If a spell gets to a skill rating of 0 because of this, it will be removed completely. | <a href="#SpellworkAdjustment/points">See details</a>
`tradition?` | The target tradition. If the target spell is not from the Guild Mage tradition, specify the tradition identifier here. | <a href="#SpellworkAdjustment/tradition">See details</a>

#### <a name="SpellworkAdjustment/id"></a> `id`

- **Type:** <a href="./_Identifier.md#SpellworkIdentifier">SpellworkIdentifier</a>

#### <a name="SpellworkAdjustment/points"></a> `points`

The skill points that will be added to the current skill rating. If a
spell gets to a skill rating of 0 because of this, it will be removed
completely.

- **Type:** Integer
- **Minimum:** `-10`
- **Maximum:** `10`

#### <a name="SpellworkAdjustment/tradition"></a> `tradition?`

The target tradition. If the target spell is not from the Guild Mage
tradition, specify the tradition identifier here.

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>
