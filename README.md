# node-ctc
[![NPM version](https://img.shields.io/npm/v/ctc.svg?style=flat)](https://www.npmjs.org/package/ctc)

Chinese telegraph code convertor

------

## Installation

```bash
$ npm install ctc
```

## Example

```js
var convertor = require('ctc');

var str = '呵呵哒';

console.log(convertor.convert(str))
// => 0725 0725 8174
```

```js
var convertor = require('ctc');

var str = '0725 0725 8174';

console.log(convertor.convert(str))
// => 呵呵哒
```

## License

MIT © [Leigh Zhu](#)
