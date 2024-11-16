# Vampiric Gift

## Definitions

### <a name="VampiricGift"></a> Vampiric Gift (`VampiricGift`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#VampiricGift/id">See details</a>
`levels?` |  | <a href="#VampiricGift/levels">See details</a>
`select_options?` |  | <a href="#VampiricGift/select_options">See details</a>
`maximum?` |  | <a href="#VampiricGift/maximum">See details</a>
`prerequisites?` |  | <a href="#VampiricGift/prerequisites">See details</a>
`ap_value` |  | <a href="#VampiricGift/ap_value">See details</a>
`src` |  | <a href="#VampiricGift/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#VampiricGift/translations">See details</a>

#### <a name="VampiricGift/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="VampiricGift/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="VampiricGift/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="VampiricGift/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="VampiricGift/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="VampiricGift/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="VampiricGift/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="VampiricGift/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#VampiricGiftTranslation">VampiricGiftTranslation</a>&gt;

---

### <a name="VampiricGiftTranslation"></a> `VampiricGiftTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#VampiricGiftTranslation/name">See details</a>
`name_in_library?` |  | <a href="#VampiricGiftTranslation/name_in_library">See details</a>
`rules` |  | <a href="#VampiricGiftTranslation/rules">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#VampiricGiftTranslation/ap_value">See details</a>
`errata?` |  | <a href="#VampiricGiftTranslation/errata">See details</a>

#### <a name="VampiricGiftTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="VampiricGiftTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="VampiricGiftTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="VampiricGiftTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the given information.

- **Type:** <a href="#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="VampiricGiftTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
