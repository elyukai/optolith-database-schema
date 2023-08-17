# Translation Workflow

This page aims at people who want to translate existing content into another, possible new, language.

**Note:** If you want to *add* new content, please check out [Insertion Workflow](./Insertion-Workflow.md) instead.

***Disclaimer:** It is not as complicated as it may sound, it also does not require any coding! Feel free to ask me any questions!*

*This tutorial assumes you got the project folder (either as a plain folder or by following the [Git Workflow](./Git-Workflow)) and an [editor set-up](./Setting-Up-an-Editor).*

## 0. Register a new language

*This only applies if you want to add a new language.*

Add a new language file in `/Data/Locales`. The new entry consists of:

- An *IETF BCP 47 language tag*. Such a language tag is formatted so that in `xx-YY` the `xx` are the language code (e.g. `de` for German or `nl` for Dutch) and the `YY` are the region code (e.g. `DE` for Germany and `BE` for Belgium). If you're not sure what to use, please ask. This tag is also used as the file name.
- The name of the language and associated region in the respective language.

Now Optolith knows of that additional language and will be able to automatically infer it from your system (if you chose *System language*) and it will provide it as an option in the settings as well.

You also need to add a new UI file in `/Data/UI`, which contains all translations for the user interface. The easiest way is to copy an existing file, use the new language tag as the file name and adjust all contents.

## 1. Update entries

Identify which entries need to be updated. If you just started a new language, these will be a lot of basic entries like attributes, skills and so on.

All entries use so-called *locale maps* that provide different translations for an entry. In almost all cases they can be found at a `translations` property. Simply copy a language that’s already present, adjust the key (which is the language tag) and replace *all* text values (those to the right of the colons) with the translated strings.

You may notice some special characters, usually in *block texts*. These are *Markdown syntax*. You can find more information about that on the [Markdown page](./Markdown).

If your texts include formatting like italic or bold text, please also apply that to the texts in Optolith via Markdown.

Note that an entry may contain multiple `translations` properties. This may be because an entry can contain sub-entries. For example, a skill has applications, which all contain their own `translations` property.

### Availability by Publication

Optolith checks if an entry can be used by their occurrences in publications. First, you need to provide the `translations` for the books already available in other languages. Then, you can update the references in the `src` attribute. They work like `translations`, but are called `occurrences`.

If an entry spans a range of pages, please add a `last_page` in addition to the `first_page`. If there are multiple, not consecutive pages, you can just add a second `src` entry. Why adding multiple entries? The publication references will be available to the Optolith users as well. If you provide all pages, they can check out the publications more easily to find related content in the respective publication.

## 2. Test your work

See the [Testing guide](./testing) for more information.

## 3. Commit

You can now follow the [Git Workflow](./Git-Workflow) to commit and push the changes (if you're familiar with Git, you won't need that, of course).

## Notes

- **UI:** These are the only files that kind of use that “key=value” schema often used for translation files. Every key is required, but if there are terms you don’t have translations for currently, you can leave them in English, they will not be shown (since they probably won’t be used by any entry then). Also, you may notice some numbers in curly braces like “{0}”. These are placeholders for values that will be inserted by Optolith; what each value represents should be written in a comment above that text. Some keys may also use *plural rules* and split into subkeys named `zero`, `one` or `other`. These use the [Plural Rules](https://cldr.unicode.org/index/cldr-spec/plural-rules) defined by the Unicode Common Locale Data Repository (CLDR). Please check it out to identify which keys to use for your language. Sometimes, not all keys available for your language are needed, but if you miss one, the `other` key is always used as a fallback.
- **Comments:** Feel free to add comments to any YAML file if you need them, you just need to write a `#` and the part of the line after that can be used as a comment.

  Example:

  ```yaml
  key: "This is a text" # This is a comment
  # This is another comment
  ```
