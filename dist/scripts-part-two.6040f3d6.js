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
})({"js-loops-arrays-obects/scripts-part-two.js":[function(require,module,exports) {
// What is an array
//variable is a like a box that can only carry one item, array can carry many items at a time
//more flexible method of storing info 
// var arrayName = [
//     'random',
//     23,
//     true,
//     'etc'
// ];
// var scores = [10,20,30,40,50];
// var shoppingList = [
//     'banana',
//     'chocolate',
//     'washing liquid'
// ];
//--------------------------------------------------------------------------------------------------------------------------
// Accessing items in an array 
// var scores = [1,2,3];
// alert(scores[1]);
// var shopping = ['banana', 'chocolate', 'something else'];
// alert(shopping[0]);
//--------------------------------------------------------------------------------------------------------------------------
// adding data to arrays
// var numbers = [1,2,3,4,5,6,2,4,5];
// numbers[numbers.length]= 10; // this will add 10 to the end of the array 
// alert(numbers);
// // the push method can also add things to an array 
// numbers.push(11);
// // can also add more than one 
// numbers.push(11,12,12,12,12);
// alert(numbers);
// // the unshift method adds numbers to the beginning of the array 
// numbers.unshift(1,1);
// alert(numbers);
// var playList = []; // array literal, empty array 
// platList.push('random song');
// console.log(playList);
//--------------------------------------------------------------------------------------------------------------------------
// removing items from arrays
//pop and shift - pop removes the last  
// var numbers = [1,2,3,4,5,6];
// numbers.pop(); // this takes off the last item from the array 
// alert(numbers);
// // this can also be put ito a variable 
// var newNumber = numbers.pop();
// alert(newNumber); // 5
//shift method removes the first item from the array 
// var numbers = [12,12,12,1,1,2,4,34,3];
// alert(numbers.shift());
// var nums = [1,2,3,4,5];
// nums.length; //5
// nums.push(6); // 6 items in the array 
//--------------------------------------------------------------------------------------------------------------------------
// Using for loops with arrays 
// var students = ['ben', 'other', 'jerry', 'paul']; // array is created with 3 items 
// for (var i=0; i <students.length; i += 1){ // var i created and 0 stored. Condition tested, then variable is added to 
//     console.log(students[i]); }
//students.length means that the loop will execute for the amount of items in the array 
// e.g: array of quiz questions, ask one question after another 
// array created with 4 items 
// then the for loop 
// i counter used to count the iterations through the loop
// .length method used as a condition 
// counter added to each iteration 
// as soon as the counter hits the number of items in the array 
// the console will stop logging student names 
// var playList = [
//     'i did it my way',
//     'respect',
//     'imagine',
//     'born to run'
// ];
// // array with song names 
// function print(message){
//     document.write(message);
// //function to print songs to the html
// // function to print the html 
// function printList(list){
//     var listHtml = '<ol>';
//     for(var i = 0; i < list.length; i += 1){ 
//         listHtml += '<li>' + list[i] + '</li>';
//     }
//     listHtml += '</ol>';
//     print(listHtml); // previous function called, passed the '<ol>'
// }
// printList(playList); // passing the array in the function 
//array created 
//html printed 
//array printed 
//--------------------------------------------------------------------------------------------------------------------------
// useful array methods 
// join method 
// var daysInAWeek = [
//     'monday',
//     'tues',
//     'wed',
//     'thurs',
//     'fri'
// ];
// var daysString = daysInAWeek.join(', ');
// alert(daysInAWeek);
// alert(daysString);
// the join method passes any character to the array, you can also pass more than one characteer
// concat method - can be used to add one list to another
// var students = [
//     'henry',
//     'harry',
//     'ron'
// ];
// var newStudents = [
//     'joan',
//     'john',
//     'random'
// ];
// var allstudents = students.concat(newStudents);
// alert(allstudents);
// this will add the 2nd array to the first 
//indexOf method 
// var fruit = [
//     'apple',
//     'orange',
//     'bananas'
// ];
// var position = fruit.indexOf('apple');
// alert(position);
// var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
// var search;
// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }
// while(true){
//     search = prompt("Search for a product in the store, type 'list' to list all of the items in the store and 'quit' to quit the program");
//     if (search === 'quit'){
//         break;
//     } else if (search === 'list'){
//         print(inStock.join(', '))
//     } else {
//         if (inStock.indexOf(search)){
//             print('yes we have ' + message)
//         } else {
//             print (message + ' is not in stock');
//         }
//     }
// }
//--------------------------------------------------------------------------------------------------------------------------
// Two-Dimensional arrays
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62952" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js-loops-arrays-obects/scripts-part-two.js"], null)
//# sourceMappingURL=/scripts-part-two.6040f3d6.map