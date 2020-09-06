const { exec } = require('child_process');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of release is this?',
      choices: [
        'patch',
        'major',
        'minor',
        'premajor',
        'preminor',
        'prepatch',
        'prerelease',
      ],
    },
  ])
  .then(({ type }) => {
    console.log(`Running command:  'npm version ${type}'`);
    exec(`npm version ${type}`);
  });
