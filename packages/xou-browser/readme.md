<h1 align="center">XOU-BROWSER</h1>

<p align="center">
  HTML-Template strings for the browser.
</p>

<p align="center">
  This module has been exctracted from <a href="https://github.com/choojs/nanohtml">Nanohtml</a>.
</p>

## Install

```
$ npm install xou-browser
```

## Usage

```js
const xouBrowser = require('xou-browser');

const time = xouBrowser`<span>Time: ${ (new Date()).toUTCString() }</span>`;



document.body.appendChild(node);
```

## API

### xouBrowser\`\`

A tagged template literal returning dom nodes.

#### Example

```js
const node = xou`<div>
  <h1>Hello from xou</h1>
  <p>Xou on <a href="https://github.com/herber/xou">github</a></p>
</div>`;

document.body.appendChild(node);
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
