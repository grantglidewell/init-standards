/* eslint-disable no-console */
const colors = require('./colors');

module.exports = (targetPackage, internalDeps) => {
  const existingDeps = targetPackage.devDependencies;

  if (!existingDeps) {
    console.log(
      colors.FgYellow,
      'No Dev Dependencies installed, installing all required dependencies.'
    );
    return Object.keys(internalDeps);
  }

  const installQueue = Object.keys(internalDeps).filter(dep =>
    existingDeps[dep] && existingDeps[dep] === internalDeps[dep]
      ? console.log(colors.FgYellow, `${dep} is installed, skipping.`)
      : dep
  );

  return installQueue;
};
