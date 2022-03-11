# Migrating to V2

The `MAJOR` version jump from 1 to 2 comes with *heaps* of changes, including quite a few breaking changes. If you are an author of an integration with Optolith, this document tries to give a detailed overview about what is to consider when supporting the new Optolith database and thus Optolith V2 as well. It will *not* help with other required migration information such as the character exports; there will be separate documentation for that. This document only covers the database itself.

## Structure

The structure is one of the most notable changes in the database. In V1, the database was organized into grouped files, each covering a complete entry category (e.g. Skills or Spells), although either only the language-independent (universal/`univ`) values or language-specific values for a single language, so that there were multiple folders, one for each language and one for universal data, each containing the aforementioned files.

This has changed significantly, since data is now grouped by entry instead of by language-dependence. There are folders for each entry category and each folder contains multiple files, each representing a single entry. Each entry file contains all information about the respective entry, which includes both language-independent values and translation strings for all languages the entry is available in.

Some entry categories have also been split into smaller categories. This is mainly visible for special abilities, since there are now more than 40 folders, each representing a special ability category, instead of a single folder with more than 1500 entries.

## Identifiers

Since the split of categories and some entry merges made the previous numeric identifiers appear quite randomly, the "auto-increment" has been reset and each category starts with `1`, without gaps. To ease migration, in the database repository itself, you'll find a `migration` folder with identifier maps for each category, which you can use to map existing data to the new identifiers.

## Generalize translations

For V2, there has been the effort to try to represent more data as proper data structures instead of them being present as translation strings. Due to that, the database may be used in way more situations, but at the same time, to avoid duplication, the old translation strings will not be available, so more text would need to be generated manually.

Notable transformations of translation strings into data structures include:

- Combat Techniques (for combat-related special abilties)
- Penalty (for combat-related special abilities)
- Volume Points (for tradition artifact enchantments)
- Binding Cost (for tradition artifact enchantments)
- AE Cost (for tradition artifact enchantments)
- Casting Time (for spellworks, liturgies and magical actions)
- AE/KP Cost (for spellworks, liturgies and magical actions)
- Range (for spellworks, liturgies and magical actions)
- Duration (for spellworks, liturgies and magical actions)
