# Translation Workflow

This page aims at people who want to translate existing content into another, possible new, language.

**Note:** If you want to *add* new content, please check out [Insertion Workflow](./Insertion-Workflow) instead.

***Disclaimer:** It is not as complicated as it may sound, it also does not require any coding! Feel free to ask me any questions!*

*This tutorial assumes you got the project folder (either as a plain folder or by following the [Git Workflow](./Git-Workflow)) and an [editor set-up](./Setting-Up-an-Editor).*

## 0. Register a new language

*This only applies if you want to add a new language.*

Open the `Data/SupportedLanguages.yaml` file and add a new entry. The new entry consists of:

- An *IETF BCP 47 language tag*. Such a language tag is formatted so that in `xx-YY` the `xx` are the language code (e.g. `de` for German or `nl` for Dutch) and the `YY` are the region code (e.g. `DE` for Germany and `BE` for Belgium). If you're not sure what to use, please ask.
- The name of the language and associated region in the respective language.

Now Optolith knows of that addional language and will be able to automatically infer it from you system (if you chose *System language*) and it will provide it as an option in the settings as well.

Also, create a new folder in `Data` which name is the language tag of the new language.

## 1. Copy files/entries

Copy the files you want to translate if they are not present in your language's folder from the folder of the language you want to translate from. Otherwise go into the files where you want to translate entries from and copy/paste those entries into the files in your language folder.

## 2. Update entries

The follwing two parts should be followed at the same time, so you only need to go through every list of entries once.

### 2.1 Replace texts

Replace *all* text values (those to the right of the colons) with the translated strings.

You may notice some special characters, usually in *block texts*. These are *Markdown syntax*. You can find more information about that on the [Markdown page](./Markdown).

If your texts include formatting like italic or bold text, please also apply that to the texts in Optolith via Markdown.

### 2.2. Update books and book references

Optolith checks if an entry can be used by their occurrences in publications. First, you need to have the new books available in the `Books.yaml`, so you know which `id`s they have (for the currently available languages, the publisher's own publication id was used, like `US25001` for the German Core Rules or `LDR1` for French Core Rules). Then, you can update the references in the `src` attribute. Please remove the old ones, since they reference books from a different language.

If an entry spans a range of pages, please add a `lastPage` in addition to the `firstPage`. If there are multiple, not consecutive pages, you can just add a second `src` entry. Why adding mutliple entries? The publication references will be available to the Optolith users as well. If you provide all pages, they can check out the publications more easily.

## 3. Test your work

See the [Testing guide](./testing) for more information.

## 4. Commit

You can now follow the [Git Workflow](./Git-Workflow) to commit and push the changes (if you're familiar with Git, you won't need that, of course).

## Notes

- **New Applications/Uses:** If you add advantages or special abilities that add *new applications* or *uses* to skills, make sure to check for the correct `id` of that application/use in more complete languages and then add the new application or use to the skill entry.
- `UI.yaml`: This is the only files that’s kind of that “key=value” schema often used for translation files. Every key is required, but if there are terms you don’t have translations for currently, you can leave them in English, they will not be shown (since they probably won’t be used by any entry then). Also, you may notice some numbers in curly braces like “{0}”. These are placeholders for values that will be inserted by Optolith; what each value represents should be written in a comment above that text.
- **Comments:** Feel free to add comments to any YAML file if you need them, you just need to write a `#` and the part of the line after that can be used as a comment.

  Example:

  ```yaml
  key: "This is a text" # This is a comment
  # This is another comment
  ```
