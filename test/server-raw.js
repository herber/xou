const server = require('../packages/xou-server/raw');

test('raw', () => {
  var expected = '<span>Hello <strong>there</strong></span>';
  var result = server`<span>Hello <strong>there</strong></span>`.toString();

  expect(result).toBe(expected);
});
