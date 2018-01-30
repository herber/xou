<p align="center">
  <img src="https://i.imgur.com/Jf9Bhzk.png" />
</p>

<p align="center">
  A tiny <i>library</i> for building simple <b>component</b> based UIs with template literals. It offers the same features as <a href="https://github.com/maxogden/yo-yo">`yo-yo`</a> but is a bit smaller.
</p>

<p align="center">
  Xou is powered by <a href="https://github.com/shama/bel">bel</a> and <a href="https://github.com/choojs/nanomorph">nanomorph</a> which both also power the <a href="https://github.com/choojs/choo">choo</a> framework.
</p>

## Features

- Tagged template literals
- Diffing on real dom nodes
- Tiny at just [4kb](https://bundlephobia.com/result?p=xou)

## Install

```
$ npm install xou
```

## Usage

```js
const xou = require('xou');

const time = xou`<span>Time: ${ (new Date()).toUTCString() }</span>`;

document.body.appendChild(time);

setInterval(() => {
  const newTime = xou`<span>Time: ${ (new Date()).toUTCString() }</span>`;
  xou.update(time, newTime);
}, 1000);
```

## API

### xou``

A tagged template literal returning dom nodes

#### Example

```js
const node = xou`<div>
  <h1>Hello from xou</h1>
  <p>Xou on <a href="https://github.com/herber/xou">github</a></p>
</div>`;

document.body.appendChild(node);
```

### xou.update(oldNode, newNode)

`xou.update` diffs an old and a new dom node. The changes will be applied to `oldNode`.

#### Example

```js
const hello = xou`<span>Hello!<button onclick=${ () => { update(); } }>Update</button></span>`;

const update = () => {
  const hi = xou`<span>Hi!</span>`;
  xou.update(hello, hi);
}

document.body.appendChild(hello);
```

## Examples

- [Greeting](https://www.webpackbin.com/bins/-L20tGtkIsPYlwjhliKs)
- [Time](https://www.webpackbin.com/bins/-L1wiXzsEx4XuKe6ruPf)
- [Input](https://www.webpackbin.com/bins/-L1wj0cRCCzTvHdWseTi)
- [Todo list](https://www.webpackbin.com/bins/-L1wnYvBdijz8SUMzvvS)

## Other Modules

This whole thing is powered by [`bel`](https://github.com/shama/bel) and [`nanomorph`](https://github.com/choojs/nanomorph) - two tiny but really awesome packages.

This module is heavily inspired by [`yo-yo`](https://github.com/maxogden/yo-yo) - `xou` is basically a smaller alternative to `yo-yo`.

Xou pairs really well with [`vxv`](https://github.com/herber/vxv) for styles.

Xou does not force you to use any specific module for styles or state management so you can use whatever modules you want or no other modules at all.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
