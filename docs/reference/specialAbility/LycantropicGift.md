# Lycantropic Gift

## Definitions

### <a name="LycantropicGift"></a> Lycantropic Gift (`LycantropicGift`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#LycantropicGift/id">See details</a>
`levels?` |  | <a href="#LycantropicGift/levels">See details</a>
`select_options?` |  | <a href="#LycantropicGift/select_options">See details</a>
`maximum?` |  | <a href="#LycantropicGift/maximum">See details</a>
`prerequisites?` |  | <a href="#LycantropicGift/prerequisites">See details</a>
`ap_value` |  | <a href="#LycantropicGift/ap_value">See details</a>
`src` |  | <a href="#LycantropicGift/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LycantropicGift/translations">See details</a>

#### <a name="LycantropicGift/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="LycantropicGift/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="LycantropicGift/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="LycantropicGift/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="LycantropicGift/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="LycantropicGift/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="LycantropicGift/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="LycantropicGift/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LycantropicGift/translations[key]">LycantropicGift/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="LycantropicGift/translations[key]"></a> `LycantropicGift/translations[key]`

- **Type:** <a href="#LycantropicGiftTranslation">LycantropicGiftTranslation</a>

---

### <a name="LycantropicGiftTranslation"></a> `LycantropicGiftTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#LycantropicGiftTranslation/name">See details</a>
`name_in_library?` |  | <a href="#LycantropicGiftTranslation/name_in_library">See details</a>
`rules` |  | <a href="#LycantropicGiftTranslation/rules">See details</a>
`errata?` |  | <a href="#LycantropicGiftTranslation/errata">See details</a>

#### <a name="LycantropicGiftTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="LycantropicGiftTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="LycantropicGiftTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="LycantropicGiftTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
