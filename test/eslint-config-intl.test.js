import test from 'ava'
import core from '..'

test('default', t => {
  t.true(typeof core.root === 'boolean')
  t.true(typeof core.parserOptions === 'object')
  t.true(typeof core.env === 'object')
  t.true(typeof core.rules === 'object')
})
