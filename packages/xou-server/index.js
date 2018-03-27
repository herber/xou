const { boolProps } = require('xou-utils');
const boolPropRx = new RegExp('(' + boolProps.join('|') + ')=["\']?$', 'i');

const handleValue = value => {
  // Suppose that each item is a result of html``.
  if (Array.isArray(value)) return value.join('');

  // Ignore event handlers. `onclick=${(e) => doSomething(e)}`
  // will become.           `onclick=""`
  if (typeof value === 'function') return '';
  if (value === null || value === undefined) return '';
  if (value.__encoded) return value;

  if (typeof value === 'object') {
    return Object.keys(value).reduce(function(str, key, i) {
      if (str.length > 0) str += ' ';

      if (boolProps.indexOf(key) !== -1) {
        if (value[key]) {
          return str + key + '="' + key + '"';
        }
        return str;
      }

      let handled = handleValue(value[key]);
      return str + key + '="' + handled + '"';
    }, '');
  }

  let str = value.toString();
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const xouServer = (pieces, ...args) => {
  let boolMatch;
  // let pieces = arguments[0];
  let output = '';
  for (let i = 0; i < pieces.length; i++) {
    let piece = pieces[i];
    if (i < pieces.length - 1) {
      if ((boolMatch = boolPropRx.exec(piece))) {
        output += piece.slice(0, boolMatch.index);
        if (args[i]) {
          output += boolMatch[1] + '="' + boolMatch[1] + '"';
        }
        continue;
      }

      let value = handleValue(args[i]);
      if (piece[piece.length - 1] === '=') {
        output += piece + '"' + value + '"';
      } else {
        output += piece + value;
      }
    } else {
      output += piece;
    }
  }

  // HACK: Avoid double encoding by marking encoded string
  // You cannot add properties to string literals
  let wrapper = new String(output);
  wrapper.__encoded = true;
  return wrapper;
};

module.exports = xouServer;
