const utils = require('../packages/xou-utils');

test('exports arrays', () => {
  expect(Array.isArray(utils.svgTags)).toBeTruthy();
  expect(Array.isArray(utils.boolProps)).toBeTruthy();
});
