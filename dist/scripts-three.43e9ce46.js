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
})({"scripts-three.js":[function(require,module,exports) {
// Introducing conditional statements vid
// if else statement
// var answer = prompt("What programming language is the name of a gem");
// if ( answer.toUpperCase === 'RUBY'){
//     document.write("Correct!"); 
// } else {
//     document.write("You're wrong.")
// }
// if the condition is correct then the code runs 
//---------------------------------------------------------------------------------------------------------------------------------//
// Comparison operators vid - conditional statements
// ('apple'<'bear')
// true, because a comes before b in the alphabet 

/*
> 
>=
<
<=
==
===
!=
!==
*/
// ("3" == 3)
//true, the js interpreter converts the string to 3 
// ("3" === 3)  // false, the value strictly isn't the same.
// === is strict equality 
// == is type equality 
//---------------------------------------------------------------------------------------------------------------------------------//
// Build a random number generator game vid 
// var randomNumber = Math.floor(Math.random()*6)+1;
// var guess = prompt("Guess the number between 1 and 6");
// if (parseInt(guess) === randomNumber){
//     console.log("you got it!");
// } else {
//     console.log("you suck!")
// }
//---------------------------------------------------------------------------------------------------------------------------------//
// Boolean values vid
// if ( true ){
//     document.write("the condition is true");
// } else {
//     document.write("the condition is false");
// }
// helps to keep track of a certain condition throughout the program 
// var randomNumber = Math.floor(Math.random()*6)+1;
// var guess = prompt("Guess the number between 1 and 6");
// var correctGuess = false;
// var randomNumber = Math.floor(Math.random()*6)+1;
// var guess = prompt ("guess the number");
// if (parseInt(guess) === randomNumber){
//     correctGuess = true;
// }
// if (correctGuess){
//     document.write("you guessed right!");
// }else {
//     document.write("sorry you guessed wrong")
// }
//---------------------------------------------------------------------------------------------------------------------------------//
// programming multiple outcomes vid - else if 
// var ten = 10;
// var two = 2;
// var one = 1; 
// if (one>ten){
//     console.log("one is more than ten")
// }else if (two > ten){
//     console.log("two is more than ten")
// } else{
//     console.log("you're a dumbass mate")
// }
//---------------------------------------------------------------------------------------------------------------------------------//
// improving the random number guessing game vid 
// var number = Math.floor(Math.random()*6)+1;
// var guess = prompt("guess the number between 1 and 6")
// function numberGame(){
//     if (parseInt(number) < guess){
//         console.log("you guessed too low")
//     } else if (parseInt(number) > guess){
//         console.log("you guessed too high");
//     } else {
//         console.log("woooo")
//     }
// }
// numberGame();
//---------------------------------------------------------------------------------------------------------------------------------//
// Document code with comments
// single line 

/* 
Multi-line  - it's common to add a multi-line comment at the start of a program explaining what it does 
*/
//---------------------------------------------------------------------------------------------------------------------------------//
//Combining multiple tests into a single condition vid 
// &&, 2 conditions are evalutated separately but work together to create one boolean
// var age = 25;
// if (20 < age && age < 30){
//     console.log(age)
// }
// and operator
// var agree = prompt("do you agree?");
// if (agree === 'yes' || agree === 'ys' || agree === 'y'){
//     console.log("yes!")
// }
//  || or operator = whole thing is true if one condition is true
//---------------------------------------------------------------------------------------------------------------------------------//
// the conditional challenge. 
// ask 5 questions
// keep track of which ones they got correct
// message after the quiz letting them know what they got right
// if the player answered them all correctly 
var questionsCorrect = 0;
var questionOne = prompt("Question 1.) What is 1 + 1?");

if (questionOne == 2 || questionOne == 'two') {
  alert("Correct!");
  questionsCorrect = questionsCorrect + 1;
} else {
  alert("Incorrect!");
}

var questionTwo = prompt("Question 2.) What is 4/2?");

if (questionTwo == 2 || questionTwo == 'two') {
  alert("Correct!");
  questionsCorrect = questionsCorrect + 1;
} else {
  alert("Incorrect!");
}

var questionThree = prompt("Question 3.) What is 5 * 5?");

if (questionThree == 25 || questionThree == 'twentyfive') {
  alert("Correct!");
  questionsCorrect = questionsCorrect + 1;
} else {
  alert("Incorrect!");
}

var questionFour = prompt("Question 4.) What is 10 * 10?");

if (questionFour == 100 || questionFour == 'onehundred') {
  alert("Correct!");
  questionsCorrect = questionsCorrect + 1;
} else {
  alert("Incorrect!");
}

var questionFive = prompt("Question 5.) What is 50/2?");

if (questionFive == 25 || questionFive == 'twentyfive') {
  alert("Correct!");
  questionsCorrect = questionsCorrect + 1;
} else {
  alert("Incorrect!");
}

alert("Well done! You got " + questionsCorrect + "/5 correct!");
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64432" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts-three.js"], null)
//# sourceMappingURL=/scripts-three.43e9ce46.map