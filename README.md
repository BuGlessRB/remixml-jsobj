<h1>Remixml converter between HTML and JSON</h1>

[![NPM version](http://img.shields.io/npm/v/remixml-jsobj.svg?style=flat)](https://npmjs.org/package/remixml-jsobj)
[![Downloads](https://img.shields.io/npm/dm/remixml-jsobj.svg?style=flat)](https://npmjs.org/package/remixml-jsobj)
[![Rate on Openbase](https://badges.openbase.io/js/rating/remixml-jsobj.svg)](https://openbase.io/js/remixml-jsobj?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

Remixml component that renders directly to and from the javascript objects
that can be converted to JSON and back.

## Basic usage

From HTML to JSON and back:

```js
var htmlstring = "<h1>This is a test</h1><p class='main'>Foo Bar</p>";
var abstract = Remixml.compile(htmlstring)({});
Remixmljsobj.abstract2jsobj(abstract);
console.log(JSON.stringify(abstract));
Remixmljsobj.jsobj2abstract(abstract);
var newstring = Remixml.abstract2txt(abstract, 1);
console.log(newstring);
```

## Requirements

It runs inside any webbrowser or NodeJS environment.

## Reference documentation

- `Remixmljsobj.abstract2jsobj(abstract)`<br />
  Converts a DOM `abstract` into a Javascript object, the function
  is destructive to the `abstract` argument and performs an in-situ
  transformation.
  Use `JSON.stringify()` to turn it into JSON.
- `Remixmljsobj.jsobj2abstract(jsobj)`<br />
  Converts a Javascript object to a DOM `abstract`, the function
  is destructive to the `abstract` argument and performs an in-situ
  transformation.
  Use `JSON.parse()` to convert from JSON to the Javascript object.

## References

- Postprocessor for the high performance Javascript templating engine
  [Remixml](http://remixml.org/).
- Compatible with the
  fastest [lockandload AMD-loader](https://www.npmjs.com/package/lockandload).

Card-carrying member of the `zerodeps` movement.
