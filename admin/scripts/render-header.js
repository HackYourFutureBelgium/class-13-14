'use strict';

const replaceInReadme = require('./lib/replace-in-readme.js');

const repoData = require('../data/index.json');

const header = `> [open questions](https://github.com/${repoData.repoUserName}/${repoData.repoName}/issues?q=is%3Aopen+label%3Aquestion) \n\n# ${repoData.repoName}\n\n`;

replaceInReadme(header, 'HEADER');
