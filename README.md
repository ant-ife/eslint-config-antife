# eslint-config-antife

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]

[npm-image]: http://img.shields.io/npm/v/eslint-config-antife.svg?style=flat-square
[npm-url]: http://npmjs.org/package/eslint-config-antife
[travis-image]: https://img.shields.io/travis/ant-ife/eslint-config-antife.svg?style=flat-square
[travis-url]: https://travis-ci.org/ant-ife/eslint-config-antife
[coveralls-image]: https://img.shields.io/coveralls/ant-ife/eslint-config-antife.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/ant-ife/eslint-config-antife?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

Eslint config for Ant international FE team

## Installment

```bash
$ npm i eslint-config-antife --save-dev
```

## Usage

Add `.eslintrc.js` in your root directory.

```javascript
module.exports = {
  extends: 'eslint-config-antife',

  plugins: [
    'babel',
    'html',
  ],
}
```

## License

The MIT License (MIT)
