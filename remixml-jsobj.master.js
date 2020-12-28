/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(function()
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;

  var g =
  { "abstract2jsobj": abstract2jsobj,
    "jsobj2abstract": jsobj2abstract
  };

  if (!O.assign)
    O.defineProperty(O, "assign",
    { "value": function(d, s, i)
      { if (s) for (i in s) d[i] = s[i]; return d;
      }
    });

  function /** boolean */ isa(/** *= */ s)
  { return Array.isArray(s);
  }

  function /** void */ abstract2jsobj(/** !Array */ vdom)
  { var /** !Object */ parent = {};
    var /** string|number */ name = /** @type{Object} */(vdom)[""];
    if (name === 1)
      delete /** @type{Object} */(vdom)[""];
    else
      for (name of O.keys(vdom).splice(vdom.length))
      { switch (name[0])
        { default:
            let /** string */ val = /** @type{Object} */(vdom)[name];
            if (val != null && typeof val !== "object")
            { parent[name] = val;
              delete /** @type{Object} */(vdom)[name];
            }
        }
      }
    var /** !Array|string */ child;
    var /** number */ i = 0;
    while ((child = vdom[i++]) !== undefined)
    { if (child[""])
        abstract2jsobj(child);
    }
    vdom.unshift(parent);
  }

  function /** void */ jsobj2abstract(/** !Array */ vdom)
  { var /** !Object */ parent = vdom.shift();
    O.assign(vdom, parent);
    if (!/** @type{Object} */(vdom)[""])
      /** @type{Object} */(vdom)[""] = 1;
    var /** !Array|string */ child;
    var /** number */ i = 0;
    while ((child = vdom[i++]) !== undefined)
    { if (isa(child))
        jsobj2abstract(child);
    }
  }

  if (typeof define == "function" && define["amd"])
    define("remixml-jsobj", g);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports), g);
  else
    window["Remixmljsobj"] = g;

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
