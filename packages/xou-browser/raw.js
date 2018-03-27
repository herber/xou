const toArray = arr => {
  /* istanbul ignore next */

  return Array.isArray(arr) ? arr : [].slice.call(arr);
};

const xouRawBrowser = tag => {
  const el = document.createElement('div');
  el.innerHTML = tag;
  return toArray(el.childNodes);
};

module.exports = xouRawBrowser;
