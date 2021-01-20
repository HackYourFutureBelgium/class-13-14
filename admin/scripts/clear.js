'use strict';

/*
  this script does not clear out the previous class's shared notes.
  no harm in building on what the last class left behind
*/

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { promisify } = require('util');

// https://gist.github.com/tinovyatkin/4316e302d8419186fe3c6af3f26badff (the comment)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question[promisify.custom] = question => {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
};

(async () => {
  const abortInput = await promisify(rl.question)(
    '\nare you sure you want to clear this repo? \nthese will be cleared out: avatars, student bios, students.json, and coaches.json\n\n- enter "yes" to continue\n- enter anything else to abort \n\n'
  );

  rl.close();

  if (abortInput.toLowerCase() !== 'yes') {
    process.exit(0);
  }

  console.log('... clearing old avatars');
  try {
    fs.rmdirSync(path.join(__dirname, '..', 'avatars'), { recursive: true });
  } catch (err) {
    console.error(err);
  }
  try {
    fs.mkdirSync(path.join(__dirname, '..', 'avatars'));
    fs.mkdirSync(path.join(__dirname, '..', 'avatars', 'students'));
    fs.mkdirSync(path.join(__dirname, '..', 'avatars', 'coaches'));
  } catch (err) {
    console.error(err);
  }

  console.log('... clearing old student bios');
  try {
    const biosPath = path.join(__dirname, '..', '..', 'student-bios');
    fs.rmdirSync(biosPath, { recursive: true });
    fs.mkdirSync(biosPath);
  } catch (err) {
    console.error(err);
  }

  // clear out previous students and coaches
  //  does not clear out modules or index.json
  console.log('... clearing old coaches.json');
  fs.writeFile(
    path.join(__dirname, '..', 'data', 'coaches.json'),
    '[]',
    'utf-8',
    err => (err ? console.error(err) : err)
  );

  console.log('... clearing old students.json');
  fs.writeFile(
    path.join(__dirname, '..', 'data', 'students.json'),
    '[]',
    'utf-8',
    err => (err ? console.error(err) : err)
  );

  console.log('done!');
})();
