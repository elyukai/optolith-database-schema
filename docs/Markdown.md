# Markdown

You might notice that some field descriptions say *Markdown is available*. But what is Markdown?

Markdown is an easy-to-use formatting language. You can do basic text formatting with Markdown, like you can do with HTMl, for example &ndash; but it is waay easier to use, as you don't need to learn a lot of syntax and tags. You're probably familiar with text formatting in chat apps. You can surround phrases with `_` or `*` or something else to make them appear italic or bold. Markdown is also that easy.

I will give a basic overview about the features you'll need, but you can check out [markdownguide.org](https://www.markdownguide.org/cheat-sheet) to see what you can do with Markdown. If you need a complete introduction, there are further helpful pages on the site.

Please always style texts *exactly* as they are in the books.

## Common Features

### Paragraphs

If there are multiple paragraphs, you can separate them with two line breaks.

Example:

```md
This is the first paragraph.

This is the second paragraph.
```

&rArr;

This is the first paragraph.

This is the second paragraph.

### Bold

Surround the text with `**`.

Example: `This text is **bold**.` &rArr; This text is **bold**.

### Italic

Surround the text with `*`.

Example: `This text is *italic*.` &rArr; This text is *italic*.

### Strike-through

Surround the text with `~~`.

Example: `This text is ~~strike-through~~.` &rArr; This text is ~~strike-through~~.

**Note:** "Negative" prerequisites use ~~strike-through~~ instead of pronouns. This might need to be used if you have to manually write down prerequisites as text.

### Unordered lists

```md
- First item
- Second item
- Third item
```

&rArr;

- First item
- Second item
- Third item

### Spell names

Surround the spell's name with an HTML tag and write the name in &lsquo;sentence case&rsquo; instead of &lsquo;uppercase&rsquo;.

Example: FLIM FLAM will be

```md
<span class="name--spell">Flim Flam</span>
```

### Liturgical Chant names

Surround the chant's name with an HTML tag and write the name in &lsquo;sentence case&rsquo; instead of &lsquo;small caps&rsquo;.

Example: <span style="font-variant: small-caps;">Banish Light</span> will be

```md
<span class="name--chant">Banish Light</span>
```

## Limitations

- Do not use HTML tags other than the two mentioned above!
- Currently, you have to use unordered lists to display e.g. spell effect texts with different effects per QL.

## YAML tips & tricks

### Paragraphs

```yaml
key: "This is the first paragraph.\n\nThis is the second paragraph."
```

Instead of a plain string, use a [literal style block](https://yaml.org/spec/1.2/spec.html#id2795688) (I also call them *block texts*), which looks like the following:

```yaml
key: |
  This is the first paragraph.

  This is the second paragraph.
```

This way, you can insert line breaks as they are (instead of using `\n` as the line break character), which makes the text way more readable. Just keep in mind, that you need to take care of the **indentation**: It must always be **two spaces more** than the key.

You can still use double-quoted strings for Markdown text without line breaks.

### C&P walls of text

Additionally if you copy-paste from PDFs, you will get several lines instead of one. Getting all the text in one line including spaces can be quite time consuming. The feature *Join Lines* allows to merge selected multiple lines into one line, separating the lines with a space.

If it does not have a keybinding already, use **Ctrl+Shift+P**, search for "Join Lines" and click on the gear icon. You get to a view where you can add a new keybinding. A good idea would be **Ctrl+J**, with J like join. It is already in use, but for something you don't need anyways (and has a second keybinding).

### Advanced Search

You can open a better search if you press **Ctrl+Shift+P** and type "Search Editor" in the Pop-Up to create a new Search Editor. In this new tab you can click on the three dots on the right side to open two lines for files to (not) search in.

If you are for example adding Liturgical Chants and have to frequently look up Churches, Aspects and if the chant already exists, you could add `./Data/Aspects, ./Data/BlessedTraditions, ./Data/LiturgicalChants` to the first line to easily filter the available and fastly find the necessary information.
