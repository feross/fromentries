const fromEntries = require('../')
const test = require('tape')
const { URLSearchParams } = require('url')

test('works on an iterable collection', t => {
  const map = new Map([['a', 1], ['b', 2], ['c', 3]])
  const obj = fromEntries(map)
  t.deepEqual(obj, { a: 1, b: 2, c: 3 })
  t.end()
})

test('works when entries() is explicitly called', t => {
  const map = new Map([['a', 1], ['b', 2], ['c', 3]])
  const obj = fromEntries(map.entries())
  t.deepEqual(obj, { a: 1, b: 2, c: 3 })
  t.end()
})

test('works on map-like objects like URLSearchParams', t => {
  const obj = fromEntries(new URLSearchParams('foo=bar&baz=qux'))
  t.deepEqual(obj, { foo: 'bar', baz: 'qux' })
  t.end()
})

test('works on generators', t => {
  const obj = fromEntries((function * generator () {
    yield ['a', 1]
    yield ['b', 2]
    yield ['c', 3]
  })())
  t.deepEqual(obj, { a: 1, b: 2, c: 3 })
  t.end()
})
