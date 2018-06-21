# fromentries [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/fromentries/master.svg
[travis-url]: https://travis-ci.org/feross/fromentries
[npm-image]: https://img.shields.io/npm/v/fromentries.svg
[npm-url]: https://npmjs.org/package/fromentries
[downloads-image]: https://img.shields.io/npm/dm/fromentries.svg
[downloads-url]: https://npmjs.org/package/fromentries
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Object.fromEntries() ponyfill (in 6 lines)

## Install

```
npm install fromentries
```

## Why this package?

The [`object.fromentries`](https://github.com/es-shims/Object.fromEntries) that
already existed pulls in a bunch of dependencies and adds over 8KB (!!) to the
bundle size. This allows it work in ES3 environments like IE6.

I'd rather not ship tons of extra code to my website visitors. A polyfill for
this feature can be implemented in a few short lines of code using modern
language features.

This means that this package only works in evergreen browsers like:

- Chrome
- Firefox
- Edge
- Safari
- Opera

It does not work in browsers like IE11 and older.

## Usage

```js
const fromEntries = require('fromentries')

const map = new Map([ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ])
const obj = fromEntries(map)
```

## What is a ponyfill?

> A *ponyfill* is almost the same as a polyfill, but not quite. Instead of
> patching functionality for older browsers, a ponyfill provides that
> functionality as a standalone module you can use.

Read more at [PonyFoo](https://ponyfoo.com/articles/polyfills-or-ponyfills).

## See also

- [TC39 proposal for Object.fromEntries](https://github.com/tc39/proposal-object-from-entries)

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
