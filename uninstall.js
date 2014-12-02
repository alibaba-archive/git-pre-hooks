/*!
 * git-pre-hooks - uninstall.js
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

var hookList = fs.readdirSync('./hooks');

var gitdir = path.join(__dirname, '../../.git');
var hooksdir = path.join(gitdir, 'hooks');

if (!fs.existsSync(gitdir)) return;
if (!fs.existsSync(hooksdir)) return;

hookList.forEach(function (name) {
  var hookPath = path.join(hooksdir, name);
  if (fs.existsSync(hookPath + '.back')
    && fs.readFileSync(hookPath, 'utf-8').indexOf('generate by git-pre-hooks') >= 0) {
    fs.writeFileSync(hookPath, fs.readFileSync(hookPath + '.back'));
    fs.chmodSync(hookPath, '755');
  }
});
