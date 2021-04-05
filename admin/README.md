# Class Admin

An HYF class repository is used to for students and coaches to share feedback and keep a record of each student's progress. Your class repository will serve 3 main roles:

- _Homework, Questions and Feedback_: for this role, the repository is basically an issues-only repo. All the heavy-lifting is done with issue templates, labels/milestones and a project board. Most of the links in the main README are just filters over issues/PRs in the class repository, you could in principle run your class without the README by manually filtering the issues.
- _Names & Faces_: The README will contain each student/coach's name & avatar, plus a few links to learn more about them. There is also a folder called `/student-bios` where each student is expected to send a PR with a short bio about themselves.
- _Modules & References_: Students and coaches can find all the study materials for HYF by links in the README. In the _Modules_ sections you can find a link to each module repository, and in the _HYF Links_ section you can find a link to the main HYF Study Reference and the Home GitBook. There is also a `/shared-notes` folder available if a class is motivated to build a shared study guide.

This folder contains the scripts and assets to manage your class repository. After the initial setup, you should only need to use this folder to add a coach/student, or to remove a coach/student. The only thing you'll need to do manually is to adjust the .json files in `/data`, everything else is managed with NPM scripts (all of that is explained in this README).

- [Getting Started](#getting-started)
  - [1. Setup Repository](#1-setup-repository)
  - [2. Clone & Reset](#2-clone--reset)
  - [3. Update Data](#3-update-data)
  - [4. Render READMEs](#4-render-readmes)
- [HYF Workflows](#hyf-workflows)
  - [Contributors](#contributors)
  - [Labels](#labels)
  - [Milestones](#milestones)
  - [Project Boards](#project-boards)
    - [Class Projects](#class-projects)
    - [JavaScript and Snippets](#javascript-and-snippets)
    - [Side Projects](#side-projects)
- [Class Data](#class-data)
  - [index.json](#indexjson)
  - [students.json](#studentsjson)
  - [coaches.json](#coachesjson)
  - [modules.json](#modulesjson)
- [NPM Scripts](#npm-scripts)
  - [`npm run reset`](#npm-run-reset)
  - [`npm run fetch`](#npm-run-fetch)
  - [`npm run render`](#npm-run-render)
  - [`npm run build`](#npm-run-build)

---

## Getting Started

There will be three main steps to set up your own HYF class. The 1st is on GitHub directly, the 2nd & 3rd you will need to do locally:

### 1. Setup Repository

> scroll down to [HYF Workflows](hyf-workflows) to learn more about setting up your repo

Using this repo as a template you can start a new repository to host your own HYF class. After creating a new repository from this template, you will to do some configuration:

- add each student and coach as a collaborator with _write_ access (otherwise they won't have full access to the project board)
- create the labels & milestones your class will need
- create two project boards:
  - _class-projects_: for all homework projects
  - _side-projects_: for any fun projects students start
- turn on GitHub pages to make the class randomizer live
- turn on Discussions in your repo settings
- set PRs to `master`/`main` branch to require review before merging

### 2. Clone & Reset

1. clone the repo
2. `npm run reset` (more about this in [NPM Scripts](#npm-scripts))

### 3. Update Data

> scroll down to [Class Data](#class-data) to learn more about each data file's schema

You will need to manually update the .json files in the `./data` folder. Each time you update the data you will need to re-render the README. If you are using the standard HYF Curriculum, you will only need to update 3 of the .json files:

- `index.json`: a small file, it's the main configuration point for all links that will be generated in the README file.
  ```js
  {
    "modulesUserName": "the GitHub username that is used to host the module repos",
    "repoUserName": "the GitHub username used to host the class repo",
    "repoName": "the name of this class' repository",
    "project": 1 // the number of the project board used for class projects
  }
  ```
- `students.json`: an array of student objects that will be used to render the _Students_ section of the README.
  ```js
  {
    "name": "the student's name",
    "userName": "the student's GitHub username"
  }
  ```
- `coaches.json`: an array of coach objects for rendering the _Coaches_ section. The only difference between a coach and student object is that coaches have an optional "modules" property to indicate which modules they have helped to teach.
  ```js
  {
    "name": "the coach's name",
    "userName": "the student's GitHub username",
    "homePage": "(optional) url to the coach's preferred home page (portfolio, linkedin, github, ...)",
    "modules": [
      "the name of each module they helped with",
      "these can be written however, they aren't used to generate any links"
    ]
  }
  ```

If you want to customize your HYF course further by adjusting the modules you can take a look at [modules.json](#modulesjson) to learn about your options.

### 4. Render READMEs

> scroll down to [NPM Scripts](#npm-scripts) to learn more about each script

Once your data is filled in all that's left to do is:

- `npm run build`
  1. fetch the avatars for all students and coaches
  2. render the new class repo
- commit changes
- push to remote

You're ready to go, you've started your own HYF class: Now all the real work begins :)

[TOP](#class-admin)

---

## HYF Workflows

HYF is built around GitHub project management workflows. To use the workflows described in [home.hackyourfuture.be](https://home.hackyourfuture.be) you will need to do some one-time-only setup.

### Contributors

Add all your coaches and students as contributors with _write_ access in the repo. Without (at least) write access they will not be able to use the issues and project board.

This is the only step in _HYF Workflows_ that you may need to revisit after class starts as you add/remove coaches & students.

### Labels

HYF workflows and the links rendered in this repo's README rely on certain labels being present. You can create them all at once using whatever colors you like

- `prep-work`
  - used by the precourse prep-work issue template
  - students may also use it to mark their module prep work
- `student-bio`
  - used by the precourse student-bio template
- `check-in`
  - used by students to label module check-in issues
- `roll-call`
  - for roll-call issues created before each class
- `week-1`, `week-2`, ... up to the longest module in your curriculum
  - used to label `roll-call` & `project` issues
  - and by students to indicate when they've updated their `check-in` issue each week of a module
- `checked-1`, `checked-2`, ... up to the longest module in your curriculum
  - used by coaches to indicated a check-in has been checked
- `project`, `individual`, `group`
  - used to label all project issues, which will be placed on the main project board
- `shared-notes`
  - to indicate when something is interesting for everyone to study
  - for PRs to the /shared-notes directory
- `javascript`
  - for issues & PRs to the /javascript folder
- `snippets`
  - for issues & PRs to the /snippets folder

Students will also use the `question` issue, but that comes standard in GitHub repos

### Milestones

Add one milestone for each module in your curriculum. Careful! the milestone's name must _exactly_ match the module's name from the `modules.json` data file.

If you want you can add due dates for when each module ends. This can help to keep track of overall progress through the course.

### Project Boards

You will want to create two projects boards, one to track progress through class projects and another for students to share fun projects. After creating the class project board you will need to update the "project" property of `index.json` so the module links will filter over the correct project board.

#### Class Projects

You will want these columns in your class project board. Students move their issues to the first 4 columns, coaches move issues to the last two columns:

1. **PLANNING**: backlog, dev strategy, issues, ...
2. **BLOCKED**: We need help! (clearly describe your problem)
3. **IN PROGRESS**: Moving issues, reviewing PRs, the fun stuff
4. **READY FOR REVIEW**: the "Must Have" PRs are merged, and we're ready for feedback
5. **NEEDS REVISION**: A coach has suggested some changes to implement
6. **DONE**: a coach has approved your project and closed your issue

#### JavaScript and Snippets

The project boards for organizing the class JS reference and Snippets collection:

1. **TODO**
2. **DOING**
3. **READY FOR REVIEW**
4. **NEEDS REVISION**
5. **DONE**

#### Side Projects

There are no real requirements for this project board, it exists for fun and to encourage students to collaborate outside of course work. Here's an idea for columns in this project:

1. **PLANNING**: backlog, dev strategy, issues, ...
2. **BLOCKED**: We need help! (clearly describe your problem)
3. **IN PROGRESS**: Moving issues, reviewing PRs, the fun stuff
4. **MVP**: the "Must Have" PRs are merged
5. **FANCY TIME**: working on "Should Have"s and "Nice to Have"s

[TOP](#class-admin)

---

## Class Data

All the data for your class is managed with these 4 .json files. it's not a fancy system but it's simple to host, easy enough to maintain, and makes it easy to use the class repo offline. You could imagine building a CMS over this (even a simple one who's code lives in the `/admin` directory) but that's for another day.

### index.json

The object in this file has only 4 recognized properties, all are used to render links in the README.

There are separate entries for the `modulesUserName` and the `repoUserName` so that this class repo can be reused by anyone with a GitHub account. If you want to run your own HYF using our modules, you can leave the `modulesUserName` as "HackYourFutureBelgium" (so module links reference our repos), and update `repoUserName` to point to your account so that all issue filters open in your repo.

To note: `modulesUserName` & `project` are a defaults, you can individually configure module links to reference any GitHub account or have their projects tracked on different project boards. That's covered in [modules.json](#modulesjson)

```js
{
  "modulesUserName": "the GitHub username that is used to host the module repos",
  "repoUserName": "the GitHub username used to host the class repo",
  "repoName": "the name of this class' repository",
  "boards": [ // an array of name/number keys for rendering links to project boards
    {
      "name": "board name to render",
      "number": 1 // board number to link to
    }
  ]
}
```

### students.json

A thumbnail intro to each student will be rendered into the README. This thumbnail will include:

- the student's github avatar - unless an "imgURL" exists
- their name, rendered as a link to their student bio
- their github username
- their home page - `username.github.io` by default
- filters for all authored & assigned issues/PRs

```js
{
  "name": "the student's name",
  "userName": "the student's GitHub username",
  // optional:
  "homePage": "a url", // (optional) will be used instead of `username.github.io`
  "imgURL": "where their photo lives, will over-ride fetching their github avatar"
}
```

### coaches.json

Basically the same a student. A thumbnail intro to each student will be rendered into the README. This thumbnail will include:

- the coach's github avatar
- their name (not a link)
- their github username
- their home page (only if their data entry includes a "homePage" property)
- filters for all authored & assigned issues/PRs
- a list of all the modules they have helped with (if "modules" exists and is an array)

```js
{
  "name": "the coach's name",
  "userName": "the student's GitHub username",
  // optional
  "homePage": "(optional) url to the coach's preferred home page (portfolio, linkedin, github, ...)",
  "imgURL": "where their photo lives, will over-ride fetching their github avatar",
  "modules": [
    "the name of each module they helped with",
    "these can be written however, they aren't used to generate any links"
  ]
}
```

### modules.json

This file contains an array of module objects used to render each module's links in the README. Module objects have the most configuration options of all the data types in the class repo to give you the flexibility in how you structure your curriculum, host your content, and structure the assignments for each module.

With the basic configurations only (the non-optional properties), the README will contain these links for each module:

- link to the module repository, configurable with the "userName" property
- a link to the project board filtered for this module's milestone
- a link to this module's milestone overview

If a module has "weeks", this will also be rendered:

- the number of weeks
- a filter for all check-in issues from this module
- a filter for all roll-call issues from this module

Additional links can be included using the "filters" and "links" properties.

```js
{
  "milestone": 1, // the number of this module's milestone in the repo
  "repoName": "precourse", // you will need to use exactly this name when creating your milestones
  // the remaining properties are optional:
  "weeks": 1 /* how many weeks of class/homework there are for the module.
                if a module has no weeks, then no check-in or roll-call links will be rendered */,
  "project": 1 /* the project board to link to for this module's assignments
                  if absent, the index.json's "project" number will be used */,
  "projects": true /* does this module have projects?
                    if false, no link to projects will be rendered */,
  "board": "string" /* the name of a project board in index.json
                      for modules that do not have projects, but do have shared notes
                      this will link to the project board for these notes */,
  "userName": "a github username" /* the user account hosting this module's repository
                                    if not provided, "modulesUserName" from index.json will be used*/,
  "filters": [
    /* any extra issue filter links to be added under this module's name
      options are optional and based on GitHub query parameters (except for "text") */
    {
      "text": "bio pull requests", // the text people will click on
      "labels": ["hyf-prep-work"], // labels to add into the filter
      "milestone": "name", // the milestone to use, if non is provided the module name will be used
      "is": ["pr", "issue", "open", "closed"]
    }
  ],
  "links": [
    {
      "text": "words to appear",
      "href": "url to open"
    }
  ]
}
```

[TOP](#class-admin)

---

## NPM Scripts

Once your class data is set up in the .json files you can do everything else you need with these NPM scripts. When you first set up your class repo you will want to:

1. `npm run reset`
2. update your class's .json data files
3. `npm run build`

Later you will only need to use these scripts when you update the class data files:

- _without fetching avatars_: `npm run render`, re-render the README using the same avatars
- _with fetching avatars_: `npm run build`, re-fetch all avatars. practical for when you add someone or when someone updates the GitHub profile

### `npm run reset`

> Caution! this script will clear out your `coaches.json` and `students.json` data files!

Run this script if you've just created your repo and are starting a new class. It will clear out and reset all the files/folders you need to give your class a clean start:

- empties the old images from the `./avatars` directory
- resets `coaches.json` and `students.json` to empty arrays
- clears out everything in the `../student-bios` directory
- re-seeds the main README and the `../student-bios` README with the starter markdown

### `npm run fetch`

Downloads the GitHub avatars for all students and coaches. Saves them as `.jpeg` files in `./avatars/students` and `./avatars/coaches`.

This script will overwrite old avatars with the same username, but will not clear out avatars from students/coaches that have been taken out of your data.

### `npm run render`

Uses the class data to render the main README. You can render the main README without fetching the avatars, but all the images will be missing. These things will be rendered:

- a filter for all open issues with the `question` label will be rendered at the top of the file
- the main header will be set to the repo's name in index.json
- all modules and their links will be rendered based on `modules.json`
- all coach & student thumbnails

### `npm run build`

`npm run fetch && npm run render`

[TOP](#class-admin)

---
