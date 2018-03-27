const server = require('../packages/xou-server');

test('creates dom nodes', () => {
  const ev = () => {
    done();
  };

  const text = 'hello world';
  const d1 = server`<p onClick=${ev} style="color: red" align="center" class="d1">${text}</p>`;
  const d2 = server`<h1 htmlFor="test"><!-- comment --><p checked >Hello world</p><span className="d2">${d1}</span></h1>`;

  const expected = `<h1 htmlFor=\"test\"><!-- comment --><p checked >Hello world</p><span className=\"d2\"><p onClick=\"\" style=\"color: red\" align=\"center\" class=\"d1\">hello world</p></span></h1>`;

  expect(d2.toString()).toBe(expected);
});
