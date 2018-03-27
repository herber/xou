const raw = require('../packages/xou-browser/raw');
const browser = require('../packages/xou-browser');

test('browser - raw', () => {
  const b = browser`<p>Hello world</p>`.toString();
  const r = raw`<p>Hello&nbsp;world</p>`.toString();

  expect(b).toEqual(r);
});

test('browser - raw + childNodes', () => {
  const b = browser`<p><span>Hello world<span><span>Hello world<span></p>`.toString();
  const r = raw`<p><span>Hello&nbsp;world<span><span>Hello&nbsp;world<span></p>`.toString();

  expect(b).toEqual(r);
});

test('browser - raw + childNodes', () => {
  const b = browser`<p></p>`.toString();
  const r = raw`<p></p>`.toString();

  expect(b).toEqual(r);
});
