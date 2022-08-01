# Publication References

The publications where you can find the entry.

## Definitions

### <a name="PublicationRefs"></a> Publication References (`PublicationRefs`)

The publications where you can find the entry.

- **Type:** List
- **Items:** <a href="#PublicationRefs[]">PublicationRefs[]</a>
- **Minimum Items:** `1`

---

### <a name="PublicationRefs[]"></a> `PublicationRefs[]`

- **Type:** <a href="#PublicationRef">PublicationRef</a>

---

### <a name="PublicationRef"></a> Publication Reference (`PublicationRef`)

A source reference. It contains the book's publisher identifier and the page
where it occurs. If an entry spans multiple pages, provide the last page as
well.

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

- **Type:** Dictionary
- **Property Values:** <a href="#PublicationRef/occurrences[key]">PublicationRef/occurrences[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PublicationRef/occurrences[key]"></a> `PublicationRef/occurrences[key]`

- **Type:** <a href="#Occurrence">Occurrence</a>

---

### <a name="Occurrence"></a> `Occurrence`

- **Type:** Union
- **Cases:** <a href="#Occurrence'SimpleOccurrence">Occurrence'SimpleOccurrence</a> | <a href="#Occurrence'SimpleOccurrences">Occurrence'SimpleOccurrences</a> | <a href="#Occurrence'VersionedOccurrence">Occurrence'VersionedOccurrence</a>

---

### <a name="Occurrence'SimpleOccurrence"></a> `Occurrence'SimpleOccurrence`

- **Type:** <a href="#SimpleOccurrence">SimpleOccurrence</a>

---

### <a name="Occurrence'SimpleOccurrences"></a> `Occurrence'SimpleOccurrences`

- **Type:** <a href="#SimpleOccurrences">SimpleOccurrences</a>

---

### <a name="Occurrence'VersionedOccurrence"></a> `Occurrence'VersionedOccurrence`

- **Type:** <a href="#VersionedOccurrence">VersionedOccurrence</a>

---

### <a name="SimpleOccurrences"></a> Simple Occurrences (`SimpleOccurrences`)

- **Type:** List
- **Items:** <a href="#SimpleOccurrences[]">SimpleOccurrences[]</a>
- **Minimum Items:** `1`

---

### <a name="SimpleOccurrences[]"></a> `SimpleOccurrences[]`

- **Type:** <a href="#SimpleOccurrence">SimpleOccurrence</a>

---

### <a name="SimpleOccurrence"></a> Simple Occurrence (`SimpleOccurrence`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`first_page` | The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page. | <a href="#SimpleOccurrence/first_page">See details</a>
`last_page?` | The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it. | <a href="#SimpleOccurrence/last_page">See details</a>

#### <a name="SimpleOccurrence/first_page"></a> `first_page`

The page where it occurs. If the entry spans multiple pages, use this as
the first page and `last_page` as the last page.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SimpleOccurrence/last_page"></a> `last_page?`

The last page where it occurs. If there is only one page, set this to the
same as `first_page` oder remove it.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="VersionedOccurrence"></a> Versioned Occurrence (`VersionedOccurrence`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial` | The initial occurrence of the entry. | <a href="#VersionedOccurrence/initial">See details</a>
`revisions?` | Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry. | <a href="#VersionedOccurrence/revisions">See details</a>

#### <a name="VersionedOccurrence/initial"></a> `initial`

The initial occurrence of the entry.

- **Type:** <a href="#InitialOccurrence">InitialOccurrence</a>

#### <a name="VersionedOccurrence/revisions"></a> `revisions?`

Revisions of the entry, resulting in either changed page references or
re-addition or removal of an entry.

- **Type:** List
- **Items:** <a href="#VersionedOccurrence/revisions[]">VersionedOccurrence/revisions[]</a>
- **Minimum Items:** `1`

---

### <a name="VersionedOccurrence/revisions[]"></a> `VersionedOccurrence/revisions[]`

- **Type:** <a href="#Revision">Revision</a>

---

### <a name="InitialOccurrence"></a> Initial Occurrence (`InitialOccurrence`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`printing?` | The publication's printing since which the entry is present. Leave empty if present since the beginning. | <a href="#InitialOccurrence/printing">See details</a>
`pages` | The initial page references. | <a href="#InitialOccurrence/pages">See details</a>

#### <a name="InitialOccurrence/printing"></a> `printing?`

The publication's printing since which the entry is present. Leave
empty if present since the beginning.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="InitialOccurrence/pages"></a> `pages`

The initial page references.

- **Type:** List
- **Items:** <a href="#InitialOccurrence/pages[]">InitialOccurrence/pages[]</a>
- **Minimum Items:** `1`

---

### <a name="InitialOccurrence/pages[]"></a> `InitialOccurrence/pages[]`

- **Type:** <a href="#PageRange">PageRange</a>

---

### <a name="Revision"></a> Revision (`Revision`)

A revision of the entry, resulting in either changed page references or
re-addition or removal of an entry.

- **Type:** Union
- **Cases:** <a href="#Revision'Since">Revision'Since</a> | <a href="#Revision'Deprecated">Revision'Deprecated</a>

---

### <a name="Revision'Since"></a> `Revision'Since`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Revision'Since/tag">See details</a>
`since` |  | <a href="#Revision'Since/since">See details</a>

#### <a name="Revision'Since/tag"></a> `tag`

- **Constant:** `"Since"`

#### <a name="Revision'Since/since"></a> `since`

- **Type:** <a href="#Since">Since</a>

---

### <a name="Revision'Deprecated"></a> `Revision'Deprecated`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Revision'Deprecated/tag">See details</a>
`deprecated` |  | <a href="#Revision'Deprecated/deprecated">See details</a>

#### <a name="Revision'Deprecated/tag"></a> `tag`

- **Constant:** `"Deprecated"`

#### <a name="Revision'Deprecated/deprecated"></a> `deprecated`

- **Type:** <a href="#Deprecation">Deprecation</a>

---

### <a name="Since"></a> `Since`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`printing` | The publication's printing since which the entry is present again or has changed page references. | <a href="#Since/printing">See details</a>
`pages` | The changed or new page references. | <a href="#Since/pages">See details</a>

#### <a name="Since/printing"></a> `printing`

The publication's printing since which the entry is present again or has
changed page references.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="Since/pages"></a> `pages`

The changed or new page references.

- **Type:** List
- **Items:** <a href="#Since/pages[]">Since/pages[]</a>
- **Minimum Items:** `1`

---

### <a name="Since/pages[]"></a> `Since/pages[]`

- **Type:** <a href="#PageRange">PageRange</a>

---

### <a name="Deprecation"></a> `Deprecation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`printing` | The publication's printing since which the entry has been removed. | <a href="#Deprecation/printing">See details</a>

#### <a name="Deprecation/printing"></a> `printing`

The publication's printing since which the entry has been removed.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="PageRange"></a> Page Range (`PageRange`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`first_page` | The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page. | <a href="#PageRange/first_page">See details</a>
`last_page?` | The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it. | <a href="#PageRange/last_page">See details</a>

#### <a name="PageRange/first_page"></a> `first_page`

The page where it occurs. If the entry spans multiple pages, use this as
the first page and `last_page` as the last page.

- **Type:** <a href="#Page">Page</a>

#### <a name="PageRange/last_page"></a> `last_page?`

The last page where it occurs. If there is only one page, set this to the
same as `first_page` oder remove it.

- **Type:** <a href="#Page">Page</a>

---

### <a name="Page"></a> Page (`Page`)

- **Type:** Union
- **Cases:** <a href="#Page'InsideCoverFront">Page'InsideCoverFront</a> | <a href="#Page'InsideCoverBack">Page'InsideCoverBack</a> | <a href="#Page'Numbered">Page'Numbered</a>

---

### <a name="Page'InsideCoverFront"></a> `Page'InsideCoverFront`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Page'InsideCoverFront/tag">See details</a>
`inside_cover_front` |  | <a href="#Page'InsideCoverFront/inside_cover_front">See details</a>

#### <a name="Page'InsideCoverFront/tag"></a> `tag`

- **Constant:** `"InsideCoverFront"`

#### <a name="Page'InsideCoverFront/inside_cover_front"></a> `inside_cover_front`

- **Type:** <a href="#Page'InsideCoverFront/inside_cover_front">Object</a>

---

### <a name="Page'InsideCoverFront/inside_cover_front"></a> `Page'InsideCoverFront/inside_cover_front`

- **Type:** Empty Object

---

### <a name="Page'InsideCoverBack"></a> `Page'InsideCoverBack`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Page'InsideCoverBack/tag">See details</a>
`inside_cover_back` |  | <a href="#Page'InsideCoverBack/inside_cover_back">See details</a>

#### <a name="Page'InsideCoverBack/tag"></a> `tag`

- **Constant:** `"InsideCoverBack"`

#### <a name="Page'InsideCoverBack/inside_cover_back"></a> `inside_cover_back`

- **Type:** <a href="#Page'InsideCoverBack/inside_cover_back">Object</a>

---

### <a name="Page'InsideCoverBack/inside_cover_back"></a> `Page'InsideCoverBack/inside_cover_back`

- **Type:** Empty Object

---

### <a name="Page'Numbered"></a> `Page'Numbered`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Page'Numbered/tag">See details</a>
`numbered` |  | <a href="#Page'Numbered/numbered">See details</a>

#### <a name="Page'Numbered/tag"></a> `tag`

- **Constant:** `"Numbered"`

#### <a name="Page'Numbered/numbered"></a> `numbered`

- **Type:** <a href="#NumberedPage">NumberedPage</a>

---

### <a name="NumberedPage"></a> `NumberedPage`

The page number.

- **Type:** Integer
