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
})({"scripts-four.js":[function(require,module,exports) {
//Introducing functions vid 
//start by declaring the function (providing instructions)
//then place a set of parenthesis, this is how functions are identified
//then braces, forming the code block 
//js inside the braces is run whenever the function is activated
//to activate, you 'call' the function 
// function goToCoffeeShop(){
// }
// goToCoffeeShop(); //calling the function 
// function alertRandom(){
//     var randomNumber = Math.floor(Math.random()*6)+1;
//     alert(randomNumber);
// }
// alertRandom();
// // function expression - assign a function to a variable
// var alertRandom = function() {
//     var randonNumber= math.foor(Math.random()*6)+1;
//     alert(randomNumber);
// };
//---------------------------------------------------------------------------------------------------------------------------------//
//Functions change the flow of your program vid 

/*
good idea to put the functions at the top of the script. 
*/
//---------------------------------------------------------------------------------------------------------------------------------//
// Getting information from a function vid
// function goToCoffeeShop(){
//     return "Espresso is on its way.";
// }
// alert(goToCoffeeShop());
// the function is returning a String value 
// function getRandomNumber(){
//     var randomNumber = Math.floor(Math.random()*6)+1;
//     return randomNumber;
// }
// alert(getRandomNumber());
// console.log(getRandomNumber);
// creating a function that returns a value so it can be used in other way or for more calculations. 
// function isMailEmpty(){
//     var field = document.getElementById('email'); 
//     if (field.value === ''){    //conditional statement is checking the condition
//         return true;
//     } else {
//         return false;
//     }
// }
// var fieldTest = isMailEmpty();
// if (fieldTest === true){
//     alert('please provide your email address.');
// }
//the return statement should be the last thing in a function 
// function noAlert(){
//     return 5;
//     alert("what");
// }
// noAlert();
// alert("this will appear!");
//---------------------------------------------------------------------------------------------------------------------------------//
// Giving information to functions vid 
// function goToCoffeeShop(drink){
//     alert(drink + ' is on its way');
// }
// goToCoffeeShop('hot chocolate');
//parameter is expecting info, so we need to pass it info 
// function getRandomNumber(upper){
//     var randomNumber = Math.floor(Math.random()* upper)+1;
//     return randomNumber;
// }
// console.log(getRandomNumber(100));
// console.log(getRandomNumber(10));

/*passing an arguement to the function to control how it works. 
the function stores the value within the parameter and uses that value 
you can pass multiple arguements
*/
// function goToCoffeeShop(drink, pastry){
//     alert(drink +  'and' + pastry + ' is on its way');
// }
// goToCoffeeShop('hot chocolate', 'cheese pastry');
// function getRandomNumber(upper){
//     var randomNumber = Math.floor(Math.randon()* upper)+1;
//     return randomNumber;
// }
// function areaOfARectangle(width, length, unit){
//     var area = width * length;
//     return area + ' ' + unit;
// }
// console.log(areaOfARectangle(10,4, 'sq ft'));
// try not to pass more than 4/5 arguements to a function, as this can make it complicated to use 
//---------------------------------------------------------------------------------------------------------------------------------//
// function compareNumbers(oneNumber, twoNumber){
//     if (oneNumber < twoNumber){
//         return oneNumber;
//     }else{
//         return twoNumber;
//     }
// }
// alert(compareNumbers(3,2))
//---------------------------------------------------------------------------------------------------------------------------------//
// variable scope vid
// function greeting(){
//     var person = 'Lilah';
//     alert(person);
// }
// var person = 'george';
// greeting();
// alert(person);
// greeting();
//each variable lives in a different scope 
//global scope is outside of the function - all functions can access the global scope
//always use the var keyword when creating a variable inside a function
//---------------------------------------------------------------------------------------------------------------------------------//
// random number challenge vid
// function randomNumberGenerator(numberOne){
//     var randomNumber = Math.floor(Math.random()*numberOne)+1;
//     return randomNumber;
// }
// console.log(randomNumberGenerator(100));
// random number challenge sol vid 
//---------------------------------------------------------------------------------------------------------------------------------//
// random number challenge, part 2 vid
// function randomNumberGenerator(numberOne){
//     var randomNumber= Math.floor(Math.random()*numberOne) + 1;
//     if (isNaN(numberOne)){
//         throw new Error('error message');
//     } else {
//     return randomNumber;
// }
// }
// alert(randomNumberGenerator(86));
// isNaN(9)  // false
// isNaN('nine')//true 
//---------------------------------------------------------------------------------------------------------------------------------//
//Introducing the practice vid
function areaOfARectangle(width, height) {
  var area = width * height;
  return "The area of the rectangle is " + area;
}

alert(areaOfARectangle(5, 22));

function volumeOfAPrism(width, height, length) {
  var volume = width * height * length;
  return "The volume of the prism is " + volume;
}

alert(volumeOfAPrism(4.5, 12.5, 17.4));

function areaOfACircle(radius) {
  var area = 3.16 * (radius * radius);
  return "The area of the circle is " + area;
}

alert(areaOfACircle(7.2));

function volumeOfASphere(radius) {
  var volume = radius * radius * radius * 3.16 * 4 / 3;
  return "The volume of the sphere is " + volume;
}

alert(volumeOfASphere(7.2));
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51412" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts-four.js"], null)
//# sourceMappingURL=/scripts-four.b5882a65.map