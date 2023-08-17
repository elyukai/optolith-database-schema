# Prerequisites

You'll need a few programs to help inserting, changing or translating content.

## Code Editor

You'll need a plain text editor if you work on the Optolith database. If you have no previous coding experience, it is recommended to install [Visual Studio Code](https://code.visualstudio.com/), since all tutorials work with it and there are some configurations for it in the database as well. To make the most out of it, make sure to follow the [setup guide for Visual Studio Code](./Setting-Up-Visual-Studio-Code.md).

## Git

[Git](https://git-scm.com/) is a *source control management* software (SCM). Using Git, you can keep track of changes to your files, so that you always know what happened in the past. Changes in a *repository* (short *repo*) are applied using *commits*, which act like save points, so you can always get back and forth between them, if needed. Since changes are usually not applied in a linear way (not everyone is working directly on the same version status), you can create *branches*. This way, you can branch off a certain commit, work on that independently from others, and once you're ready, you can *merge* your changes back. There's always at least one branch in a repository you can branch off and merge into. In our workflow, this is usually done using **pull requests** (PRs) on GitHub.

### Install Git

You can simply confirm all choices, although it is recommended to choose *Visual Studio Code* as an editor if you have not had any previous coding experience, since this is the editor all tutorials work with.

## GitHub

You'll need a [GitHub](https://github.com/) account to contribute, since the data is hidden in a private repository due to licensing reasons and you need to be able to assign yourself to issues. GitHub hosts all different Git repositories for Optolith and also provides solutions for bug tracking and tracking other issues and requests.

You’ll need access to the following repositories:

- [`optolith-client`](https://github.com/elyukai/optolith-client) for project management
- [`optolith-data`](https://github.com/elyukai/optolith-data) for inserting new data

## Node.js with NPM

You'll also need [Node.js](https://nodejs.org/en/), since (most of) the different Optolith repositories are linked using NPM, which is a software package manager that ships with Node. On the Node.js website, it's best to download the *Current* version.

### Install Node.js

You can confirm the default choices. Especially, you'll *not* need to `Install additional tools for Node.js` if asked.

## Continue Reading

-  [Project Management](./Project-Management.md)
