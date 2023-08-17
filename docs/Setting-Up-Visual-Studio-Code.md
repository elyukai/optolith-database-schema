# Setting Up Visual Studio Code

Editing the YAML files with a proper editor will make it much easier to work with. You don't need any coding knowledge or editor knowledge, but it will help you a lot.

It is recommended to use [Visual Studio Code](https://code.visualstudio.com) (VSCode), since it's lightweight, very easy to use and important configuration is already present.

## Activate Schema validation

*Schemes* validate files and the editor can highlight errors so you can easily fix them. To get schema validation in VSCode, you need to install the YAML extension from RedHat.

![](images/Setting-Up-an-Editor-2.png)

The configuration for the VSCode YAML extension is already present, so you don't need to configure the schemes yourself.

## Open the Project

*This step assumes you either cloned the repo by following the [Git Workflow](./Git-Workflow) or got the project folder on another way.*

If you checked the context menu additions during the installation process, you can open the context menu of the project folder and select *Open with Code*. Otherwise you can open VSCode and select the repo folder via `File > Open Folder...`. *It is important to open the project folder!*

![](images/Setting-Up-an-Editor-1.png)

This should be the initial folder structure you can check out. `Data` contains all data, while `Schema` contains the schemes for the data files.

## Done!

Now you should see explanations of fields if you hover over them:

![](images/Setting-Up-an-Editor-3.png)

You'll also get autocompletion if you start typing or press `Ctrl+Space`:

![](images/Setting-Up-an-Editor-4.png)
