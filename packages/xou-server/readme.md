<h1 align="center">XOU-SERVER</h1>

<p align="center">
  HTML-Template strings for the server.
</p>

<p align="center">
  This module has been exctracted from <a href="https://github.com/choojs/nanohtml">Nanohtml</a>.
</p>

## Install

```
$ npm install xou-server
```

## Usage

```js
const xouServer = require('xou-server');

const time = xouServer`<span>Time: ${ (new Date()).toUTCString() }</span>`;
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
