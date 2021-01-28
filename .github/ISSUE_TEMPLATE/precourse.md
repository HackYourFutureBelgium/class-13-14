---
name: precourse
about: A template issue for the precourse assignments
title: 'Your Name: HYF Precourse'
labels: 'prep-work'
---

<!--
  your class repository will have hundreds of issues by the end of HYF
  make your issue easy to find:

  - milestone: `precourse`
  - assign: yourself
-->

This issue has checklists for everything you need to prepare before the first day of [Incremental Development](https://github.com/hackyourfuturebelgium/incremental-development). You will want to check all these boxes to join the first class! You can find more details on these assignments in the [HYF Precourse](https://github.com/hackyourfuturebelgium/precourse) repository. Besides internet searching, you can head over to [the study book](https://hackyourfuture.github.io/study) for some helpful study references.

Don't worry, it's not as intimidating as it looks and we're all here to help each other.

## Software Installations

- [ ] Use Linux or Mac. If your computer is a Windows machine, you will need to either:
  - Linux Sub-System (you will need to update to Windows 10 if you are not): [itechguides](https://www.itechguides.com/windows-subsystem-for-linux/), [adamtheauthor](https://adamtheautomator.com/windows-subsystem-for-linux/)
- [ ] [Slack](https://slack.com/intl/en-be/downloads/) - for all HYF communication
- [ ] [Zoom](https://zoom.us/support/download) - for online class
- [ ] Modern Browsers with good DevTools, it's good to practice with all of them:
  - [Chromium](https://download-chromium.appspot.com/), and/or [Chrome](https://www.google.com/chrome/)
  - [Firefox](https://www.mozilla.org/en-US/firefox/developer/)
  - [Edge](https://www.microsoft.com/en-us/edge)
- [ ] [Visual Studio Code](https://code.visualstudio.com/download) - used write and edit your code
- [ ] [VSCode CLI](https://stackoverflow.com/a/39604469) - to open folders in VSCode from the terminal
- [ ] [Node.js](https://nodejs.org/en/)
- [ ] [oh my zsh](https://ohmyz.sh/): this will help you find your way around the CLI
- GitHub Desktop (optional)
  - This can help you get started with Git & GitHub, but does not replace learning to use your CLI
  - [Mac](https://desktop.github.com/)
  - [Linux](https://github.com/shiftkey/desktop#debianubuntu-distributions)

---

## VSCode Extensions

These are a few VSCode extensions that will make your life easier. Find another one that looks interesting? give it a try!

[How to install VSCode Extensions](https://www.youtube.com/watch?v=PmdbndOoKq4)

- **For Git & GitHub**
  - [ ] [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
  - [ ] [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [ ] [vscode-pull-request-github](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- **For writing any code**
  - [ ] [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [ ] [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#overview) with [format on save](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code#step-2-%E2%80%94-formatting-code-on-save)
- **For writing Markdown**
  - [ ] [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [ ] [Markdown All-In-One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  - [ ] [Markdown Preview GitHub Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)
- **For writing HTML/CSS**
  - [ ] [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
  - [ ] [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- **For writing JavaScript**
  - [ ] [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [ ] [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
  - [ ] [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

---

## Organizing Your Computer

You will be working with many files and folders, it's best to start out organized. Here's some suggestions to start off in the right direction:

- [ ] Create a new folder in your `Documents` called something like "/hack-my-future".
- [ ] Inside your new "/hack-my-future", create one folder called "/notes" or something like this
  - You can use this folder to organize your notes in one place
  - Try using Markdown for your notes!
  - Looking to share everything you've learned? You can also push your notes to a Github repo ;)
- [ ] Inside your new "/hack-my-future", create a folder for the Precourse called "/00-precourse" (or something similar)
  - You can use this folder to clone the [Precourse repository](https://github.com/hackyourfuturebelgium/precourse), and to store all your Precourse work

When you're done your computer's folders should be organized something like this:

```
-/Documents
  |-/hack-my-future
    |-/00-precourse
    | |-/ice-breaker (your ice-breaker repository)
    | |-/precourse (the cloned module repo)
    | |-/username (your github profile readme repo)
    |
    |-/notes
    |-/username.github.io (your home page repository)
      (store your home page outside of /00-precourse, you will rewrite it a few times)
```

> ^ that diagram is a plain-text folder structure: [stackoverflow 1](https://stackoverflow.com/questions/38299992/how-to-create-a-folder-directory-structure-in-plaintext-for-documentation), [stackoverflow 2](https://stackoverflow.com/questions/19699059/representing-directory-file-structure-in-markdown-syntax)

---

## Basic Programming Skills

Some basic skills you will need to use your computer effectively in class. The [HYF Precourse](https://github.com/hackyourfuturebelgium/precourse) repository and [the study book](https://hackyourfuture.github.io/study) have some helpful references for learning these skills:

- **VSCode**
  - [ ] Opening a repository in a new window
  - [ ] Opening the repository in VSCode terminal
  - [ ] Adding a new file
  - [ ] Adding a new folder
  - [ ] Deleting a file
  - [ ] Deleting a folder
  - [ ] Previewing a Markdown File
  - [ ] Formatting a file with _Prettier_ each time you save
  - [ ] Opening an HTML file with the _LiveServer_ extension
  - [ ] Viewing the repository's git history with _Git Graph_ extension
- **Command Line Interface**
  - [ ] navigating directories using `cd`
  - [ ] viewing the contents of a directory with `ls`
- **Using Git from CLI**
  - [ ] `clone` a repository from GitHub
  - [ ] `add` & `commit` _small changes_ with a clear commit message
  - [ ] `push` & `pull` changes between GitHub and your Computer
- **Browser**
  - [ ] Open the DevTools
  - [ ] Inspect an element in a web page

---

## GitHub Setup

- [ ] Connect to GitHub with SSH
  - this can be tricky! we're here to help each other on Slack
- [ ] Watch your class repository
  - Click the `Watch` button in the upper-right of the repo
- [ ] Update your profile details:
  - a nice photo
  - short bio
  - link to `userName.github.io`, the home page you will build as a final Precourse project
- [ ] Create GitHub Profile Readme:
  - [How to Make One](https://www.aboutmonica.com/blog/how-to-create-a-github-profile-readme)
  - [Adding real-time stats](https://github.com/anuraghazra/github-readme-stats)
  - [Inspiration](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- [ ] Write a markdown Bio and merged it to the class repo:
  - There are more instructions in the `/student-bios` folder of your class repo.

---

## Projects

For each of these projects you will need to create a new issue using the `project` issue template. To fill out the project issue you will need to paste in the checklists from the main README of the [Precourse repo](https://github.com/hackyourfuturebelgium/precourse). This is the standard way you will submit all projects while at HYF.

Once your issue is created you will need to [add it to the _class-projects_ board](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board) in your class repo and check off these boxes:

- [ ] Individual Project issue is created and on the project board
- [ ] Group Project issue is created and on the project board

---

That's it! You've finished all the tasks in this `precourse` issue. Your classmates and coaches can now find your projects on the Class Projects board.

Welcome to HYF :)
