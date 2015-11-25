# ens (wip)

Easily ensure data types.

[![Build Status](https://travis-ci.org/opensoars/ens.svg)](https://travis-ci.org/opensoars/ens)
[![Coverage Status](https://coveralls.io/repos/opensoars/ens/badge.svg?branch=master&service=github)](https://coveralls.io/github/opensoars/ens?branch=master)
[![Inline docs](http://inch-ci.org/github/opensoars/ens.svg?branch=master)](http://inch-ci.org/github/opensoars/ens)
[![Codacy Badge](https://api.codacy.com/project/badge/f3e64501763645b9aa483bf83a4dd1d5)](https://www.codacy.com/app/sam_1700/ens)
[![Code Climate](https://codeclimate.com/github/opensoars/ens/badges/gpa.svg)](https://codeclimate.com/github/opensoars/ens)
[![Dependency Status](https://david-dm.org/opensoars/ens.svg)](https://david-dm.org/opensoars/ens)
[![devDependency Status](https://david-dm.org/opensoars/ens/dev-status.svg)](https://david-dm.org/opensoars/ens#info=devDependencies)

---
 
## Why

`Ens` makes it easy to ensure data types. With JS it's not so easy to ensure data types, it's easy to specify variable defaults though: `test_obj = test_obj || {}`. The problem with this pattern is, when `test_obj` is set to a value which evaluates to true, the default value `{}` won't be bound to test_obj. This is where `ens` comes in: `test_obj = ens.obj(test_obj)`. Which results in the binding of an object to test_obj no mather what data type test_obj is.

## Install

`npm install ens`

## Use

```js
var ens = require('ens');

function logObjectProperties(obj) {
  console.log(ens.obj(obj))
}
```
