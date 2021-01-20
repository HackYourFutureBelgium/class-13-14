'use strict';

const replaceInReadme = require('./lib/replace-in-readme.js');

const repoData = require('../data/index.json');

const whichOnes = process.argv[2] || ''; // string indicating which view & data to use (ie. coaches, students)
if (whichOnes === '') {
  process.exit(9);
}

const isOrdered = process.argv[3] === 'yes'; // render an ordered list?
const oLstart = process.argv[4] || '1'; // start the list with (for precourse being 0s)

const renderItem = require(`../views/${whichOnes}.js`);
const sectionData = require(`../data/${whichOnes}.json`);

const section =
  sectionData
    .map(item => renderItem(item, repoData))
    .reduce(
      (list, item) => `${list}\n<li>${item}</li>`,
      `## ${whichOnes.replace(/^\w/, c => c.toUpperCase())}\n\n` +
        `  ${
          isOrdered
            ? `<ol start="${oLstart ? oLstart : '1'}">`
            : '<ul  style="list-style-type:none;">'
        }\n`
    ) +
  `\n${isOrdered ? '</ol>' : '</ul>'}<br>\n\n` +
  `\n[TOP](#${repoData.repoName})`;

replaceInReadme(section, whichOnes.toUpperCase());
