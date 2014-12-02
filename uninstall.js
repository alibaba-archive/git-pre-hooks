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
console.log(gitdir, hooksdir)
if (!fs.existsSync(gitdir)) return;
if (!fs.existsSync(hooksdir)) return;

hookList.forEach(function (name) {
  var hookPath = path.join(hooksdir, name);
  var hookBackPath = hookPath + '.back';

  var existHook = fs.existsSync(hookPath);
  var hookNeedClean = isGenerated(hookPath);
  var existBack = fs.existsSync(hookBackPath);

  if (hookNeedClean) {
    if (existBack) {
      fs.writeFileSync(hookPath, fs.readFileSync(hookBackPath, 'utf-8'));
      fs.chmodSync(hookPath, '755');
      fs.unlinkSync(hookBackPath);
    } else {
      fs.unlinkSync(hookPath);
    }
  }
});

function isGenerated(hookPath) {
  return fs.readFileSync(hookPath, 'utf-8').indexOf('generate by git-pre-hooks') >= 0;
}
