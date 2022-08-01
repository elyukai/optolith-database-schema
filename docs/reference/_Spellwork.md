# [TITLE MISSING]

## Definitions

### <a name="Traditions"></a> `Traditions`

The tradition(s) the ritual is available for. It may be *generally*
available to all traditions or it may be only familiar in specific
traditions.

- **Type:** Union
- **Cases:** <a href="#Traditions'General">Traditions'General</a> | <a href="#Traditions'Specific">Traditions'Specific</a>

---

### <a name="Traditions'General"></a> `Traditions'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Traditions'General/tag">See details</a>
`general` |  | <a href="#Traditions'General/general">See details</a>

#### <a name="Traditions'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="Traditions'General/general"></a> `general`

- **Type:** <a href="#Traditions'General/general">Object</a>

---

### <a name="Traditions'General/general"></a> `Traditions'General/general`

- **Type:** Empty Object

---

### <a name="Traditions'Specific"></a> `Traditions'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Traditions'Specific/tag">See details</a>
`specific` |  | <a href="#Traditions'Specific/specific">See details</a>

#### <a name="Traditions'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="Traditions'Specific/specific"></a> `specific`

- **Type:** <a href="#SpecificTraditions">SpecificTraditions</a>

---

### <a name="SpecificTraditions"></a> `SpecificTraditions`

A list of specific traditions.

- **Type:** List
- **Items:** <a href="#SpecificTraditions[]">SpecificTraditions[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecificTraditions[]"></a> `SpecificTraditions[]`

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>
