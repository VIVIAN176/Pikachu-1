// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
// const string = `你好号和潘金莲的多久发送`
// let n = 1
// demo.innerText = string.substr(0, n)
// let id = setInterval(() => {
//     console.log(n + `:` + string.substr(0, n))
//     demo.innerText = string.substr(0, n)
//     n += 1
//     if (n > string.length) {
//         window.clearInterval(id)
//         return
//     }
// }, 200)
var string = "\n*{box-sizing: border-box;}\n*::before{box-sizing: border-box;}\n*::after{box-sizing: border-box;}\n\nbody{\n    background-color: #FFE500;\n    min-height: 100vh;\n}\n.skin{\n    position: relative;\n    /* height: 100vh; */\n}\n.nose{\n    position: relative;\n    top: 200px;\n    left: 50%;\n    margin-left: -10px;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg );\n    }\n    33%{\n        transform: rotate(1deg );\n    }\n    66%{\n        transform: rotate(-1deg );\n    }\n    100%{\n        transform: rotate(0deg );\n    }\n\n}\n.nose:hover{\n    animation: wave 200ms infinite linear;\n}\n.san{\n    position: absolute;\n    border: 10px solid #000;\n    width: 0;\n    height: 0;\n    border-color:#000 transparent transparent transparent ;\n    position: absolute;\n\n}\n.halfc{\n    position: absolute;\n    width: 20px;\n    height:6px;\n    border: 1px solid #000;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background: #000;\n}\n.eye{\n    border: 2px solid #000;\n    background-color: #2e2e2e;\n    width: 50px;\n    height: 50px;\n    position: absolute;\n    top:170px;\n    left: 50%;\n    margin-left: -25px;\n    border-radius: 50%;\n}\n.eye::before{\n    content: '';\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border-radius: 50%;\n    position: absolute;\n    left: 7px;\n    top: 2px;\n}\n.eye.left{\n    transform: translateX(-120px);\n}\n.eye.right{\n    transform: translateX(120px);\n}\n.mouth{\n    /* border: 1px solid #000; */\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top:236px\n}\n.mouth .up .lip{\n    border: 4px solid #000;\n    width: 100px;\n    height: 30px;\n    background-color: #FFE500;\n    border-top-color: transparent;}\n   \n.mouth .up .lip.left{\n    border-radius: 0 0 0 85%;\n    transform:rotate(-20deg);\n    border-right-color: transparent; \n}\n.mouth .up .lip.right{\n    margin-left: 94px;\n    margin-top: -30px;\n    border-radius: 0 0 85% 0;\n    transform: rotate(20deg);\n    border-left-color: transparent; \n}\n.mouth .down{\n    /* border: 1px solid #00f; */\n    height: 190px;\n    position: absolute;\n    top: 11px;\n    width: 100%;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 3px solid #000;\n    position:absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -68px;\n    width: 136px;\n    height: 420px;\n    border-radius:296px/903px;\n    background-color: #9B000A;\n    z-index: -88;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .tongue{\n    /* border: 2px solid #000; */\n    width: 200px;\n    height: 150px;\n    position: absolute;\n    bottom: -3px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 55%;\n    background-color: #FF4760;\n}\n.face{\n    position: absolute;\n    width: 88px;\n    height: 88px;\n    top: 280px;\n    left: 50%;\n    margin-left: -44px;\n    border: 2px solid #333;\n    background-color: red;\n    border-radius: 50%;\n}\n.face.left{\n    transform: translateX(-170px);\n}\n.face.right{\n    transform: translateX(170px);\n}";
var n = 1;
demo.innerText = string.substr(0, n);
demo2.innerText = string.substr(0, n);
console.log(demo2.innerHTMl);
var id = setInterval(function () {
  demo.innerText = string.substr(0, n); // document.getElementById("demo2").innerHTMl = string.substr(0, n)

  demo2.innerText = string.substr(0, n);
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  demo2.scrollTop = 99999;
}, 0);
},{}],"C:/Users/xjlad/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50770" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/xjlad/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map