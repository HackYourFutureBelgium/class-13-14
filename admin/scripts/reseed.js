'use strict';

const fs = require('fs');
const path = require('path');

const resetFile = (seedPath = '', destinationPath = '') => {
  fs.readFile(seedPath, 'utf-8', (err, content) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFile(destinationPath, content, 'utf-8', err =>
      err ? console.error(err) : null
    );
  });
};

const seeds = fs.readdirSync(path.join(__dirname, '..', 'seeds'));

for (const seed of seeds) {
  const seedPath = path.join(__dirname, '..', 'seeds', seed);
  const destinationPath = path.join(__dirname, '..', '..', ...seed.split('__'));
  resetFile(seedPath, destinationPath);
}
