const apiTests =
  '--tags @wip -f node_modules/cucumber-pretty --require-module @babel/register --require-module @babel/polyfill --require features/step_definitions/*.js';

module.exports = {
  apiProf: apiTests
};
