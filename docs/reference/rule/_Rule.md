# [TITLE MISSING]

## Definitions

### <a name="Relevance"></a> `Relevance`

The relevance of the rule for Optolith. It may be that it influences
character creating but it may also just influnce the character sheet. If it
is linked to systems in Optolith, it may be specified if this rule has not
been implemented in Optolith yet.

- **Type:** Union
- **Cases:** <a href="#Relevance'Extraneous">Relevance'Extraneous</a> | <a href="#Relevance'Linked">Relevance'Linked</a>

---

### <a name="Relevance'Extraneous"></a> `Relevance'Extraneous`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Relevance'Extraneous/tag">See details</a>
`extraneous` |  | <a href="#Relevance'Extraneous/extraneous">See details</a>

#### <a name="Relevance'Extraneous/tag"></a> `tag`

- **Constant:** `"Extraneous"`

#### <a name="Relevance'Extraneous/extraneous"></a> `extraneous`

- **Type:** <a href="#Relevance'Extraneous/extraneous">Object</a>

---

### <a name="Relevance'Extraneous/extraneous"></a> `Relevance'Extraneous/extraneous`

- **Type:** Empty Object

---

### <a name="Relevance'Linked"></a> `Relevance'Linked`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Relevance'Linked/tag">See details</a>
`linked` |  | <a href="#Relevance'Linked/linked">See details</a>

#### <a name="Relevance'Linked/tag"></a> `tag`

- **Constant:** `"Linked"`

#### <a name="Relevance'Linked/linked"></a> `linked`

- **Type:** <a href="#LinkedRelevance">LinkedRelevance</a>

---

### <a name="LinkedRelevance"></a> `LinkedRelevance`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_missing_implementation` | Does the optional rule have an impact on character creation or character sheet and this effect has not been implemented in Optolith yet? | <a href="#LinkedRelevance/is_missing_implementation">See details</a>

#### <a name="LinkedRelevance/is_missing_implementation"></a> `is_missing_implementation`

Does the optional rule have an impact on character creation or character
sheet and this effect has not been implemented in Optolith yet?

- **Type:** Boolean
