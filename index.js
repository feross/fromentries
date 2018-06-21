module.exports = fromEntries

function fromEntries (iterable) {
  return [...iterable]
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {})
}
