// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"scripts-two.js":[function(require,module,exports) {
// Numbers vid
// whole numbers = integers 
// decimal numbers = floating point numbers
// ---------------------------------------------------------------------------------------------------------------------------------//
// Doing math vid 
// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// var secondsPerYear = secondsPerDay * daysPerWeek * weeksPerYear;
// var year = 25;
// var secondsIHaveBeenAlive = year * secondsPerYear;
// document.write("There are " + secondsPerDay + " seconds in a day.")
// document.write("I have been alive for " + secondsIHaveBeenAlive + " seconds! Jeesusssss")
//---------------------------------------------------------------------------------------------------------------------------------//
// Numbers and strings
// var HTMLBadges = prompt("how many HTML badges do you have lol ");
// var CSSBadges = prompt("how many css?");
// var totalBadges = HTMLBadges + CSSBadges;
// alert(totalBadges);
// this will concatenate the strings, not helpful when adding numbers 
// var HTMLBadges = prompt("How many HTML badges?")
// var CSSBadges = prompt("how many CSS?");
// var totalBadges = parseInt(CSSBadges) + parseInt(HTMLBadges);
// alert(totalBadges);
// this will add the numbers together
// parse float - this can convert strings to a number   
// parseFloat('3.14');
//3.14
//---------------------------------------------------------------------------------------------------------------------------------//
// The Mad Libs Challenge Revisited vid
// var questions = 3;
// var questionsLeft = '[' + questions + 'questions left]';
// var adjective = prompt('Please type an adjective' + questionsLeft);
// questions -= 1;
// questionsLeft = '[' + questions + 'questions left]';
// var verb = prompt('Please type a verb' + questionsLeft);
// questions -= 1;
// questionsLeft = '[' + questions + 'questions left]';
// var noun = prompt('Please type a noun' + questionsLeft);
// alert('All done. Ready for the message?');
// var sentence = "<h2>There once was a " + adjective;
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '.</h2>';
// document.write(sentence);
//DRY - never repeat the same code twice. 
//---------------------------------------------------------------------------------------------------------------------------------//
// The math object vid
// js is made up of objects, numbers are one and strings are another. Objects have properties, just like variables 
// Math.round(2.2); // rounds to the nearest whole number 
//---------------------------------------------------------------------------------------------------------------------------------//
// Create a random number vid
// alert(Math.random()); 
// Math.random() * 6;
// Math.floor // rounds down
// Math.ceil // rounds up 
// alert(Math.floor(Math.random()* 6)); // always returns a value between 0 and 5
// alert(Math.floor(Math.random()* 6) + 1); // this will return a number between 1 and 6 
// var dieRoll = Math.floor(Math.random() * 6) + 1;
// alert('You rolled a  ' + dieRoll);
//---------------------------------------------------------------------------------------------------------------------------------//
// The random challenge vid 
// Collect a number from a user and print a random number from 1 to the user's provided number.
// var usersNumber = parseInt(prompt("Please type a number"));
// alert(Math.floor(Math.random() * usersNumber) + 1);
// Further challenge = create a program that asks for 2 numbers and generate a random number between the first and the second
// var usersFirstNumber = parseInt(prompt("Please type your first number"));
// var usersSecondNumber = parseInt(prompt("please type your second number"));
// alert(Math.floor(Math.random() * usersSecondNumber) + usersFirstNumber);
// Random challenge solution vid 
//---------------------------------------------------------------------------------------------------------------------------------//
// Practice javascript math methods vid
// should open an alert dialog introducing the program 
// then two prompt boxes asking for numbers
// document.write to page 
alert("lets do some math!");
var firstNumber = prompt("please type your first number");
var secondNumber = prompt("Please type the second number");
var add = parseInt(firstNumber) + parseInt(secondNumber);
var multiply = parseInt(firstNumber) * parseInt(secondNumber);
var divide = parseInt(firstNumber) / parseInt(secondNumber);
var sub = parseInt(firstNumber) - parseInt(secondNumber);
document.write(firstNumber + '+' + secondNumber + '=' + add + " " + firstNumber + '*' + secondNumber + '=' + multiply + " " + firstNumber + '/' + secondNumber + '=' + divide + " " + firstNumber + '-' + secondNumber + '=' + sub); // + * / - results of both
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57512" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts-two.js"], null)
//# sourceMappingURL=/scripts-two.c0e0b339.map