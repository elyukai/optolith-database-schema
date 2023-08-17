# Git Workflow

Before following this guide, make sure you meet all the [prerequisites](./Prerequisites.md)

This tutorial is intended for helpers who have not yet learned about Git and only covers Mac and Windows specifics. If you are already familiar with Git, just jump to the end of the tutorial for a TL;DR! Also note that there are usually multiple ways to achieve the same thing. This guide will just describe a single way to keep it simple.

## Getting started

First, you need to **clone** the **repository** onto your computer. 

A **repository** &ndash; or simply **repo** &ndash; is kind of a special folder with explicit version control. The source repository resides online on GitHub.com &ndash; which is where you are probably reading this tutorial right now &ndash; but you can create copies of it on other computers so that you can work on them like in normal folders and files.

To clone a repository, open a terminal in the folder where you want the cloned repository to be in.

- **Windows:**
  - If you have the Terminal application installed (which is pre-installed in Windows 11), just right-click in the Explorer folder and choose *Open in Terminal*.
  - If you don’t have the Terminal application installed, press Shift while right-clicking and choose *Open PowerShell window here*.
- **Mac:** Right-click on the folder in the path bar of the Finder and choose *Open in Terminal*.

Now, insert the following command and run it by pressing Enter.

```shell
git clone https://github.com/elyukai/optolith-data.git
```

This will create a new folder named `optolith-data`, which contains the repo. You can rename the folder afterwards to whatever name you prefer.

**Warning:** Don’t put this folder inside a folder synced to a cloud service, like iCloud, OneDrive or Dropbox. They usually don’t work well with large amounts of small files, so it’s best to keep it separate. Git itself is already the syncing tool, in the end.

Move into the folder by running

```shell
cd optolith-data
```

(change the folder name if you renamed it before). Then run

```shell
npm i
```

to install the database configuration and other related modules, so you can check your work and also get better help from the editor.

## Begin your Work

To start working on a new feature you need to create a new **branch**.

**Branches** are a core feature of Git. A branch represents a special development status or direction. Branches build upon each other. You can branch off from an existing branch, but you can also merge a branch into another branch. The default branch is called `develop` &ndash; usually it is called `main` but the `main` branch in this repo has a different meaning. The `develop` branch is where all contributions are merged, and it is also directly reflected in the newest prereleases of Optolith.

**At the time of writing, the Optolith version with the new database has not been finished and thus branch names differ from what you read here! The branch you should base off and merge into is called `feature/schema-rework-ama3` instead of `develop`!**

To start contributing to a specific area and thus to create a new branch, you need to click on the active branch you are currently on in the status bar of VSCode. Make sure you are currently on the `develop` branch.

![](images/Tutorial-4.png)

This opens a list of available branches. You can switch to an existing branch or create a new branch (online branches have the `origin/` prefix, they will be downloaded if you select them).

![](images/Tutorial-5.png)

We're going to create a new branch via `Create new branch...`. The name of the branch depends on what you want to do:

- If you want to fix an issue, prefix the branch name with `fix/`, e.g. `fix/moa3-source-refs`.
- If you want to add a new feature, e.g. add a section of a new book, prefix the branch name with `feature/`, e.g. `feature/moa3-spells`

The branch name should also relate to the name of the issue you want to work on and you also need to make sure it is not blocked by the work of others (see [Project Management](./Project-Management.md) for more details on managing work for all contributors) and assigned to yourself.

Type it into the next input field and hit enter.

![](images/Tutorial-11.png)

Now the active branch in the status bar should be what you just typed in. You created your first branch! Next to the branch name will be the symbol for an unpublished branch. You can click it, and then it will be uploaded to GitHub.

**Note:** You can and should create multiple branches if you are working on multiple areas at once. You can always switch between them. They are independent of each other. Just make sure to **always** branch off the `develop` to keep them independent!

Now you can start editing the files. Even though this is called a *repository* it’s just a simple folder with files! There are just some advantages over a default file system &ndash; because you can save versions!

## Check out your current work

You can see all changes made in the Git tab.

![](images/Tutorial-6.png)

In the beginning, this tab will not list any changes &ndash; because you haven’t done anything yet!

Once you change something (and save it) it will be shown here.

![](images/Tutorial-7.png)

While you edit you can see which lines are edited on the left side.

![](images/Tutorial-8.png)

You can also do a detailed comparison between the old version of the file and the one you edited if you click on a file in the Git tab.

![](images/Tutorial-9.png)

Once you think you came to a point where it would make sense to create a new version of a file &ndash; it can be you entered the first 20 entries of the section you want to add, or you've finished for the day &ndash; you can create a new *commit*.

A *commit* represents a new point in history for the repository. It contains all changes made since the last point. (You can also select which files to commit, but I will not cover that here.) Commits are the actual *versions* in Git.

To create a new commit, you go to the Git tab an insert a *commit message*. It can also span multiple lines. Please do always write meaningful commit messages so that everyone knows roughly what you did without checking out the actual file edits. You don't need to write a lot, though. If there's anyone interested in the detailed changes, it's often easier to just check out your changes &ndash; but a short commit message can make that way easier to understand.

![](images/Tutorial-10.png)

Now type `Ctrl+Enter` on Windows or `Cmd+Enter` on Mac or click on the checkmark above the commit message. VSCode will probably ask you if you want to commit unstaged changes because there are no staged changes. Yes, you want that.

Now your list of changes will be clean. Instead, next to the active branch in the status bar there will be a counter indicating that there is one commit to *push* and no commit to *pull*.

![](images/Tutorial-12.png)

With *push* and *pull* you can *push* new commits from your local repo to the online repo, or you can *pull* new commits from the online repo into your local repo. This way you can also work on a single branch on multiple machines and sync your work between them.

VSCode does both operations automatically if you click on the counter (the sync functionality is also available without the counter; sometimes VSCode does not update the counter, so you have to click on the sync icon).

Now your commit is online. Let's check it out.

## Working with GitHub

In the *Code* tab on the repo's page is an option to switch branches. Clicking on that will show a list of all branches that are available online.

![](images/Tutorial-13.png)

Select your branch. It will now suggest creating a pull request.

![](images/Tutorial-14.png)

### Create a Pull Request (PR)

A **Pull Request** (PR) is a request to merge the new commits from a certain branch into another branch &ndash; which is what you want: You want to merge your changes into the main development branch.

Click on *Compare & pull request*.

On the next page you can configure your PR. You can see the *base branch* and the *compare branch*. The *compare branch* will be merged into the *base branch*. So the *base branch* should always be `develop` and the *compare branch* should be your own branch.

![](images/Tutorial-15.png)

Then you can insert a title for what you're working on and describe it. Keep the title short and write more explanation into the comment section.

![](images/Tutorial-16.png)

Example:

![](images/Tutorial-17.png)

You'll get notified per e-mail if there are any comments and once you're done and your changes are approved, your PR will be merged. Don’t merge the PR on your own!

*Please note that pull requests update if you push more commits to GitHub, so please don't close your already created pull requests. This way we can keep track of the changes and discuss them!*

## Continue your work

If more work is needed, just continue to work on your branch and create and push more commits. To start on a new feature, create a new branch as explained before. But you need to make sure that you branch off from `develop` and that there are no commits to pull! If you switch to `develop` and the sync indicator says there are one or more changes to pull (incoming changes) you need to sync first! Only then you should create a new branch. It is recommended to sync the `develop` branch in any case. You also need to make sure that the database configuration is up-to-date, since that might change in other commits to that branch. To do that, simply run `npm i` in the command line again.

## TL;DR

- Create a separate branch for each issue and always branch off from `develop`.
- Assign yourself to the issue you’re working on.
  - If you realize you won’t have time to finish the issue, please unassign yourself, so that others can work on it.
- Don’t merge PRs yourself.

## Continue Reading

- [Insertion Workflow](./Insertion-Workflow.md) or [Translation Workflow](./Translation-Workflow.md)
- 
