'use strict';

const replaceInReadme = require('./lib/replace-in-readme.js');

const repoData = require('../data/index.json');

const header = `
> - [Discussions](https://github.com/${repoData.repoUserName}/${repoData.repoName}/discussions)
> - [Issues](https://github.com/${repoData.repoUserName}/${repoData.repoName}/issues)
>   - [\`help-wanted\`](https://github.com/${repoData.repoUserName}/${repoData.repoName}/issues?q=is%3Aopen+label%3Ahelp-wanted)
>   - [\`question\`](https://github.com/${repoData.repoUserName}/${repoData.repoName}/issues?q=is%3Aopen+label%3Aquestion)

# ${repoData.repoName}\n\n`;

replaceInReadme(header, 'HEADER');
