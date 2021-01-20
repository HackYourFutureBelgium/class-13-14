'use strict';

const fs = require('fs');
const path = require('path');

const replaceInReadme = (content, toReplace) => {
  const regex = new RegExp(
    `(<!--[ \t]*BEGIN ${toReplace}[ \t]*-->)([^]*)(<!--[ \t]*END ${toReplace}[ \t]*-->)`,
    'g'
  );
  const replacer = `<!-- BEGIN ${toReplace} -->\n${content}\n<!-- END ${toReplace} -->`;
  const readmePath = path.normalize(path.join(__dirname, '../../../README.md'));
  const oldReadme = fs.existsSync(readmePath)
    ? fs.readFileSync(readmePath, 'utf-8')
    : '';
  const newReadme = oldReadme.match(regex)
    ? oldReadme.replace(regex, replacer)
    : `${oldReadme}\n\n${replacer}`;
  fs.writeFileSync(readmePath, newReadme);
};

module.exports = replaceInReadme;
