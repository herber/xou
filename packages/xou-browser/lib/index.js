const hyperx = require('hyperx');
const appendChild = require('./append-child');
const { svgTags, boolProps } = require('xou-utils');

const SVGNS = 'http://www.w3.org/2000/svg';
const XLINKNS = 'http://www.w3.org/1999/xlink';

const COMMENT_TAG = '!--';

const xouHtmlCreateElement = (tag, props, children) => {
  let el;

  // If an svg tag, it needs a namespace
  if (svgTags.indexOf(tag) !== -1) {
    props.namespace = SVGNS;
  }

  // If we are using a namespace
  let ns = false;
  if (props.namespace) {
    ns = props.namespace;
    delete props.namespace;
  }

  // Create the element
  if (ns) {
    el = document.createElementNS(ns, tag);
  } else if (tag === COMMENT_TAG) {
    return document.createComment(props.comment);
  } else {
    el = document.createElement(tag);
  }

  // Create the properties
  for (let p in props) {
    if (props.hasOwnProperty(p)) {
      let key = p.toLowerCase();
      let val = props[p];

      // Normalize className
      if (key === 'classname') {
        key = 'class';
        p = 'class';
      }

      // The for attribute gets transformed to htmlFor, but we just set as for
      if (p === 'htmlFor') {
        p = 'for';
      }

      // If a property is boolean, set itself to the key
      if (boolProps.indexOf(key) !== -1) {
        if (val === 'true') val = key;
        else if (val === 'false') continue;
      }

      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on') {
        el[p] = val;
      } else {
        if (ns) {
          if (p === 'xlink:href') {
            el.setAttributeNS(XLINKNS, p, val);
          } else if (/^xmlns($|:)/i.test(p)) {
            // skip xmlns definitions
          } else {
            el.setAttributeNS(null, p, val);
          }
        } else {
          el.setAttribute(p, val);
        }
      }
    }
  }

  appendChild(el, children);
  return el;
};

module.exports = hyperx(xouHtmlCreateElement, { comments: true });
module.exports.default = module.exports;
module.exports.createElement = xouHtmlCreateElement;
