# Errata

A list of errata for the entry in the specific language.

## Definitions

### <a name="Errata"></a> Errata (`Errata`)

A list of errata for the entry in the specific language.

- **Type:** List
- **Items:** <a href="#Errata[]">Errata[]</a>
- **Minimum Items:** `1`

---

### <a name="Errata[]"></a> `Errata[]`

- **Type:** <a href="#Erratum">Erratum</a>

---

### <a name="Erratum"></a> Erratum (`Erratum`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`date` | The date when the change was confirmed and applied to the entry. | <a href="#Erratum/date">See details</a>
`description` | A description of what changed. | <a href="#Erratum/description">See details</a>

#### <a name="Erratum/date"></a> `date`

The date when the change was confirmed and applied to the entry.

- **Type:** String
- **Format:** `date`

#### <a name="Erratum/description"></a> `description`

A description of what changed.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
