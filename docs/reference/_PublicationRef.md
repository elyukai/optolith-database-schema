# Publication References

The publications where you can find the entry.

## Definitions

### <a name="PublicationRefs"></a> Publication References

The publications where you can find the entry.

- **Type:** List
- **Minimum Items:** `1`

#### Items

- **Type:** <a href="#PublicationRef">PublicationRef</a>

---

### <a name="PublicationRef"></a> Source Reference

A source reference. It contains the book's publisher identifier and the page where it occurs. If an entry spans multiple pages, provide the last page as well.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The publication's identifier. | <a href="#PublicationRef/id">See details</a>
`occurrences` | All occurrences of the entry, identified by IETF language tag (BCP47). | <a href="#PublicationRef/occurrences">See details</a>

#### <a name="PublicationRef/id"></a> `id`

The publication's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PublicationRef/occurrences"></a> `occurrences`

All occurrences of the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="#Occurrences">Occurrences</a>

---

### <a name="Occurrences"></a> Occurrences

All occurrences of the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Occurrence">Occurrence</a>

---

### <a name="Occurrence"></a> Occurrence

- **Type:** Union

#### Case: SimpleOccurrence

- **Type:** <a href="#SimpleOccurrence">SimpleOccurrence</a>

#### Case: SimpleOccurrences

- **Type:** <a href="#SimpleOccurrences">SimpleOccurrences</a>

#### Case: VersionedOccurrence

- **Type:** <a href="#VersionedOccurrence">VersionedOccurrence</a>

---

### <a name="SimpleOccurrences"></a> Simple Occurrences

- **Type:** List
- **Minimum Items:** `1`

#### Items

- **Type:** <a href="#SimpleOccurrence">SimpleOccurrence</a>

---

### <a name="SimpleOccurrence"></a> Simple Occurrence

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`first_page` | The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page. | <a href="#SimpleOccurrence/first_page">See details</a>
`last_page?` | The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it. | <a href="#SimpleOccurrence/last_page">See details</a>

#### <a name="SimpleOccurrence/first_page"></a> `first_page`

The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SimpleOccurrence/last_page"></a> `last_page?`

The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="VersionedOccurrence"></a> Versioned Occurrence

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial` | The initial occurrence of the entry. | <a href="#VersionedOccurrence/initial">See details</a>
`revisions?` | Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry. | <a href="#VersionedOccurrence/revisions">See details</a>

#### <a name="VersionedOccurrence/initial"></a> `initial`

The initial occurrence of the entry.

- **Type:** <a href="#Initial">Initial</a>

#### <a name="VersionedOccurrence/revisions"></a> `revisions?`

Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#Revision">Revision</a>

---

### <a name="Initial"></a> Initial

The initial occurrence of the entry.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`printing?` | The publication's printing since which the entry is present. Leave empty if present since the beginning. | <a href="#Initial/printing">See details</a>
`pages` | The initial page references. | <a href="#Initial/pages">See details</a>

#### <a name="Initial/printing"></a> `printing?`

The publication's printing since which the entry is present. Leave empty if present since the beginning.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="Initial/pages"></a> `pages`

The initial page references.

- **Type:** List
- **Minimum Items:** `1`

##### Items

- **Type:** <a href="#PageRange">PageRange</a>

---

### <a name="Revision"></a> Revision

A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.

- **Type:** Union

#### Case: Since

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Revision`0/tag">See details</a>
`printing` | The publication's printing since which the entry is present again or has changed page references. | <a href="#Revision`0/printing">See details</a>
`pages` | The changed or new page references. | <a href="#Revision`0/pages">See details</a>

##### <a name="Revision`0/tag"></a> `tag`

- **Constant:** `"Since"`

##### <a name="Revision`0/printing"></a> `printing`

The publication's printing since which the entry is present again or has changed page references.

- **Type:** Integer
- **Minimum:** `2`

##### <a name="Revision`0/pages"></a> `pages`

The changed or new page references.

- **Type:** List
- **Minimum Items:** `1`

###### Items

- **Type:** <a href="#PageRange">PageRange</a>

#### Case: Deprecated

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Revision`1/tag">See details</a>
`printing` | The publication's printing since which the entry has been removed. | <a href="#Revision`1/printing">See details</a>

##### <a name="Revision`1/tag"></a> `tag`

- **Constant:** `"Deprecated"`

##### <a name="Revision`1/printing"></a> `printing`

The publication's printing since which the entry has been removed.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="PageRange"></a> Page Range

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`first_page` | The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page. | <a href="#PageRange/first_page">See details</a>
`last_page?` | The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it. | <a href="#PageRange/last_page">See details</a>

#### <a name="PageRange/first_page"></a> `first_page`

The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.

- **Type:** <a href="#Page">Page</a>

#### <a name="PageRange/last_page"></a> `last_page?`

The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.

- **Type:** <a href="#Page">Page</a>

---

### <a name="Page"></a> Page

- **Type:** Union

#### Case: InsideCoverFront

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Page`0/tag">See details</a>

##### <a name="Page`0/tag"></a> `tag`

- **Constant:** `"InsideCoverFront"`

#### Case: InsideCoverBack

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Page`1/tag">See details</a>

##### <a name="Page`1/tag"></a> `tag`

- **Constant:** `"InsideCoverBack"`

#### Case: Numbered

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Page`2/tag">See details</a>
`number` | The page number. | <a href="#Page`2/number">See details</a>

##### <a name="Page`2/tag"></a> `tag`

- **Constant:** `"Numbered"`

##### <a name="Page`2/number"></a> `number`

The page number.

- **Type:** Integer