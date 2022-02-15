# Using the database in your own project

If you're using the Optolith database for your own project, this page is for you. Here you'll find some best practices for working with the database.

Also, if you've worked with the database previously, feel free to share your insights here as well!

- **Do not** rely on the entries' file names. They are meant as a help for database editors and thus may change, which will *not* be considered a breaking change. Instead, only rely on the numeric identifier of each entry, which you can usually find at the `id` property in each file. It is reflected in the file name and tests ensure the match, but it is safer to rely on the file contents only.
- **Do not** rely on the consistence of magical tradition placeholder identifiers, they may be replaced with a proper magical tradition special ability at any time, which is *not* considered a breaking change.

Lastly, please don't forget to credit The Optolith Project, since a lot of work and ❤ went into this database. Thank you! 🥰
