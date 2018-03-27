const browser = require('../packages/xou-browser');

test('creates dom nodes', () => {
  const d1 = browser`<h1><!-- comment --></h1>`;

  expect(typeof d1).toBe('object');
});

test('nests dom nodes', () => {
  const text = 'hello world';
  const d1 = browser`<p style="color: red" align="center">${text}</p>`;
  const d2 = browser`<h1>${d1}</h1>`;

  expect(typeof d1).toBe('object');
  expect(typeof d2).toBe('object');
  expect(typeof d2.childNodes[0]).toBe('object');
  expect(d2.childNodes[0]).toBe(d1);
});

test('events', done => {
  const ev = () => {
    done();
  };

  const text = 'hello world';
  const d1 = browser`<p style="color: red" align="center">${text}</p>`;
  const d2 = browser`<button onClick=${ev}>${d1}</button>`;

  expect(typeof d1).toBe('object');
  expect(typeof d2).toBe('object');
  expect(typeof d2.childNodes[0]).toBe('object');
  expect(d2.childNodes[0]).toBe(d1);

  document.body.appendChild(d2);
  document.querySelector('button').onClick();
});

test('classes and classNames', () => {
  const d1 = browser`<h1 class="d1">Hello World1</h1>`;
  const d2 = browser`<h1 className="d2">Hello World2</h1>`;

  expect(typeof d1).toBe('object');
  expect(typeof d2).toBe('object');

  document.body.appendChild(d1);
  document.body.appendChild(d2);

  expect(typeof document.querySelector('.d1')).toBe('object');
  expect(typeof document.querySelector('.d2')).toBe('object');
});

test('bool props', () => {
  const d1 = browser`<h1 checked>Hello World</h1>`;

  expect(d1.attributes.checked).toBeTruthy();
});

test('for + htmlFor', () => {
  const d1 = browser`<h1 htmlFor="test">Hello World</h1>`;

  expect(d1.attributes.htmlFor).toBeUndefined();
  expect(d1.attributes.for).not.toBeUndefined();
});
