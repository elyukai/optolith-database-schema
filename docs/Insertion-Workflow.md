# Insertion Workflow

This guide covers how you can get started inserting new content into Optolith as well as some best practises we discovered over the past years. (Feel free to tell us yours!)

**Note:** If you want to *translate* existing content, please check out [Translation Workflow](./Translation-Workflow.md) instead.

## Basics

First, let's get into some basics.

### Repository File Structure

There are three folders used for static data: `/Data`, `/Templates` and `/Schema`.

The `/Data` folder contains another set of folders as well as a `SupportedLanguages.yaml`, which contains all languages that *should be available* in Optolith. Each folder in `/Data` contains all entries of a specific type.

While `/Data` holds all actual contents, `/Schema` contains structural definitions (schemes) for each subfolder in `/Data` about how a file should look like. Additionally, `/Schema` contains some utility schema files that are used by multiple main schemes.

`/Templates` comes as the bridge in between the previous two: prepared forms to fill out, matching the names of the schemes and the respective folder in `/Data`, simplify adding new content.

### Editor Validation

If you have a YAML validator editor plugin, use the `*.schema.json` files to validate your YAML files. Using them will usually get you a few benefits besides inline validation such as autocompletion.

The mapping is already provided for the [YAML plugin for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - you don't have to do anything then besides installing the plugin. If you use a different editor, you can create your mappings based on the `.vscode/settings.json#yaml.schemes` definitions.

### General structure of entries

Each entry has its own file, which contains both the language-independent values (e.g. Improvement Cost or AP value) and the language-dependent values (e.g. rules text or name).

## Get started

Now you've got some basic knowledge. But how do you actually insert new data?

I would recommend to check out existing data first to understand what is does. Take a data file and open the corresponding reference (~~either~~ the schema file ~~or the [type reference](./Entities), although the type reference is way easier to read if you are not used to JSON schema files~~) and then see if you understand what happens. If you have any problems, feel free to ask for help on the Discord server! Then you'll have fewer problems and I can improve the documentation!

Also, don't start with complex entries! Advantages, disadvantages, special abilities and professions are the most complex entries. Try adding spells or cantrips instead!

Always feel free to ask for reviews or hints on the Discord server, if you feel you need some!

## Organizing work

1. Checkout the [Missing Entries by Category](https://github.com/users/elyukai/projects/6/views/1) board.
2. Search for an entity type group with **only unassigned** issues.
3. Work on the listed issues from top to bottom.

## What to watch out for

### Duplicates

It is important to always check for duplicates. They may be entries with the same name but different parameters, though. In those cases, please tell me via Discord or in the pull request on GitHub.

### File Names

Please see the [Conventions](https://github.com/elyukai/optolith-data/wiki/Conventions#data-file-names) for more details.

### Formatting

Keep in mind that there are quite a few texts that have some kind of text formatting (bold, italic, lists, etc.) – you need to apply that to the texts in the YAML files, too – but only for those where Markdown will be transformed into actual formatting. You can see which fields support Markdown syntax in the reference. Check out the [Markdown Guide for Optolith](./Markdown) to get more info about Markdown.

### Multi-page entries

Entries might span multiple pages. In those cases, use `firstPage` **as well as** `lastPage`.

### New Applications and Uses

Skills may get *New Applications* and *Uses* from advantages or special abilities. Those need to be registered at the advantage or special ability or one of its select options using the `skillApplications` and `skillUses` properties, otherwise it will not be available in the library entry as well as for other entries like Skill Specialization.

### Missing Punctuation

From time to time, the source you are transferring into the database has small formatting errors or missing punctuation. [Here](https://github.com/elyukai/optolith-client/issues/335) is an issue where we keep track of them. In the meantime, please add the corrected version (e.g. sentences with punctuation) to the database.

## Recommendations

To search for entry identifiers, I highly recommend global search (in VSCode: the search icon in the left bar or `Ctrl+Shift+F`). If you start the beginning of the entry names with a `"`, you'll get more accurate search results. If you know the English name of an entry, or you are searching for an identifier of a specific group, you can press `Ctrl+P` (in VSCode) and type in the identifier as well as the group, separated by a space. Since the entries always have their identifier and their English name as the filename and the group as the folder name, you can find them pretty easy that way.
