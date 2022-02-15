# Testing

This small guide covers how to test changes to the data with Optolith.

You can (and probably should) check if what you worked on, first of all, is valid and, second, does what you expect.

To do that, you'll need a prerelease version. You'll get a link either on the Discord server or in an e-mail. If you don't have a prerelease installed yet, install it now. It will be installed separately from your stable installation and it will also not affect your characters in your stable, so you're pretty safe to do that.

Go to the installation folder and then in the `resources/app.asar.unpacked/app/Database`. You'll notice there are a lot of folders that are in the `Data` folder of the project as well. Copy the files and folders from the `Data` folder into `resources/app.asar.unpacked/app/Database` so they match the existing folder structure. Then, (re)start the Optolith prerelease. You should now see your changes and can try them out. If the source files are invalid, there'll be an alert and you won't see the characters list.
