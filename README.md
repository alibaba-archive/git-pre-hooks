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

Automatically install git pre hooks in your git repository that run your task.

## Installation

```bash
$ npm install git-pre-hooks --save-dev
```

## Usage

First install `git-pre-hooks` from npm.

```
npm install git-pre-hooks --save-dev
```

Then add `git-pre-hooks` config in your `package.json`:

```
"git-pre-hooks": {
  "pre-commit": "make jshint",
  "pre-push": "make test",
  "pre-release": ["make test", "make build", "make test-build"],
  "post-release": "npm publish"
}
```

### `pre-release` & `post-release` hook

If you are using [git-extras](https://github.com/tj/git-extras), `git-pre-hooks` also support `pre-release` and `post-release` hook.
Please make sure you install `git-extras` after 2014/12/03.

One-liner:

```sh
$ (cd /tmp && git clone --depth 1 https://github.com/tj/git-extras.git && cd git-extras && sudo make install)
```

### License

MIT
