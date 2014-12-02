git-pre-hooks
---------------

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![Gittip][gittip-image]][gittip-url]

[npm-image]: https://img.shields.io/npm/v/git-pre-hooks.svg?style=flat-square
[npm-url]: https://npmjs.org/package/git-pre-hooks
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[gittip-image]: https://img.shields.io/gittip/dead-horse.svg?style=flat-square
[gittip-url]: https://www.gittip.com/dead-horse/

Automatically install git pre hooks in your git repository that run your `npm scripts`

## Installation

```bash
$ npm install git-pre-hooks --save-dev
```

## Usage

First install `git-pre-hooks` from npm.

```
npm install git-pre-hooks --save-dev
```

Then add hooks in your `package.json`:

```
"hooks": {
  "pre-commit": "make jshint",
  "pre-push": "make test",
  "pre-release": ["make test", "make build", "make test-build"]
}
```

### License

MIT
