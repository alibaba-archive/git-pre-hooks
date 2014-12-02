/*!
 * git-pre-hooks - install.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var fs = require('fs');

var hooks = {};

var pkgHooksDir = path.join(__dirname, 'hooks');
var hookList = fs.readdirSync(pkgHooksDir);
hookList.forEach(function (name) {
  hooks[name] = fs.readFileSync(path.join(pkgHooksDir, name));
});

var gitdir = path.join(__dirname, '../../.git');
var hooksdir = path.join(gitdir, 'hooks');

if (!fs.existsSync(gitdir)) return;
if (!fs.existsSync(hooksdir)) fs.mkdirSync(hooksdir);

hookList.forEach(function (name) {
  var hookPath = path.join(hooksdir, name);

  // back old hook
  if (fs.existsSync(hookPath)
    && fs.readFileSync(hookPath, 'utf-8').indexOf('generate by git-pre-hooks') < 0) {
    fs.writeFileSync(hookPath + '.back', fs.readFileSync(hookPath));
  }

  fs.writeFileSync(hookPath, hooks[name]);
  fs.chmodSync(hookPath, '755');
});
