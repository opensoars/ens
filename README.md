# ens

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

```js
// Ensure variable `obj` is an object, the traditional way
obj = (typeof obj === 'object' && !(obj instanceof Array)) ? obj : {};
```

```js
// Ensure variable obj is an object, using ens.obj
obj = ens.obj(obj);
```

`ens` makes it easy to ensure JS data types. With JS, ensuring data types requires a lot of ugly code. It's easy to specify variable defaults though: `obj = obj || {}`. The problem with this pattern is, when `obj` is set to a value which evaluates to true, the default value `{}` won't be bound to `obj`. This is where `ens` comes in: `obj = ens.obj(obj)`. Which results in the binding of an object to `obj` no mather what type of data `obj` is.


## Install

`npm install ens`


## Use

```js
var ens = require('ens');

ens.arr();       // []
ens.arr({});     // []
ens.arr([1, 2]); // [1, 2]

ens.boo();      // true
ens.boo({});    // true
ens.boo(false); // false

ens.fun();                   // function () {}
ens.fun({});                 // function () {}
ens.fun(function test() {}); // function test () {}

ens.num();   // 1
ens.num({}); // 1
ens.num(5);  // 5

ens.obj();         // {}
ens.obj([]);       // {}
ens.obj({a: 'b'}); // {a: 'b'}

ens.str();       // ''
ens.str({});     // ''
ens.str('test'); // 'test'
```
