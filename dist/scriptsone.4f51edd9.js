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
})({"js-and-the-dom/scriptsone.js":[function(require,module,exports) {
//welcome and overview vid
// Thinking globally vid 
//What is the DOM
//document object model - representation of a webpage that javascript can use
//map of a webpage that js can use
//live entity - changes that js makes to the dom alter the webpage 
//webpage as a tree-like structure 
//recap - global scope - window object 
//document, property of the window object
//---------------------------------------------------------------------------
// a simple example vid 
// const myHeading = document.getElementById('myHeading');
// myHeading.addEventListener('click', () => {
//     myHeading.style.color = 'red';
// });
//---------------------------------------------------------------------------
//select a page element by it's id 
//selection is a way to identify an element for the browser, so the browser can find it and make it available for us to do something with it using js 
// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
// myButton.addEventListener('click', ()=>{
//     myHeading.style.color = myTextInput.value;
// });
//---------------------------------------------------------------------------
//select all elements of a particular type video 
//using document.getElementsByTagName()
// might want to select all of the items inside a list to make a todo list 
//document.getElementsByTagName() - returns a collection of elements
// const myList = document.getElementsByTagName('li');
// for(let i = 0; i < myList.length; i +=1){
//     myList[i].style.color = 'purple';
// }
// myList[2].style.color = 'purple';
//---------------------------------------------------------------------------
//Selecting elements with the same class name 
// using document.getElementsByClassName() 
// const myList = document.getElementsByTagName('li');
// for(let i =0; i < myList; i += 1){
//     myList[i].style.color = 'purple';
// }
// const errorNotPurple = document.getElementsByClassName('error-not-purple');
// for(let i = 0; i < errorNotPurple.length; i += 1){
//     myList[i].style.color = 'red';
// }
//---------------------------------------------------------------------------
// Using CSS queries to select page elements 
// document.querySelector()
//document.querySelectorAll()
// document.querySelectorAll('li'); - returns all elements that match the selector
// document.querySelector('li') - returns the first one that matches 
//how to select by type = 
// id =  #   document.querySelectorAll('#myHeading');
// class = .    document.querySelectorAll('.error-not-purple');
// html attribute = []  document.querySelector('[title=random]');
// css psuedo class selector nth - zebra stripe the list
// const evens = document.querySelectorAll('li:nth-child(even)');
// for(let i = 0; i < evens.length; i += 1){
//     evens[i].style.backgroundColor = 'lightgray';
// }
//css pesudo classes 
//every other list item has a light gray background 
//---------------------------------------------------------------------------
// practice selecting DOM elements 
//---------------------------------------------------------------------------
// getting and setting text with textContent and innerHTML 
// textContent method - use this to read or set text values of elements 
// innerHTML method - can read and alter elements on a webpage 
// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     p.textContent = input.value + ':';
// });
// const input = document.querySelector('input');
// const p = document.querySelector('p.description');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     p.innerHTML = input.value + ':';
// });
//---------------------------------------------------------------------------
//changing element atributes 
// element.attribute 
// const input = document.querySelector('input');
//input.type   - //text \
// const toggleList = document.getElementById("toggle-list");
// const listDiv = document.querySelector('.list');
// const descriptionInput = document.querySelector('input.description');
// const descriptionP = document.querySelector('p.description');
// const descriptionButton = document.querySelector('button.description');
// const addItemInput = document.querySelector('input.addItemInput');
// const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItemButton');
// toggleList.addEventListener('click', () => {
//     if (listDiv.style.display == 'none') {
//         toggleList.textContent = 'Hide list';
//         listDiv.style.display = 'block';
//     } else {
//         toggleList.textContent = 'Show list';
//         listDiv.style.display = 'none';
//     }
// });
// descriptionButton.addEventListener('click', () => {
//     descriptionP.innerHTML = descriptionInput.value + ':';
//     descriptionInput.value = '';
// });
// addItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.createElement('li');
//     li.textContent = addItemInput.value;
//     ul.appendChild(li);
//     addItemInput.value = '';
// });
// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild('li');
// });
// title attribute has been set 
//---------------------------------------------------------------------------
// Creating new DOM elements 
// how to insert content into the DOM - appending nodes vid .appendChild() method 
// nodes belong to the dom, elements - HTML 
// eg <ul> parent, <li> child 
//-------------------------
//Removing nodes vid 
//removing elements from the page  e.g - when a user wants to delete a note/photo 
// .removeChild() method takes the arguement of the elemenet you want to remove 
//-------------------------
// practice 
//what is an event 
//something you do on the webpage, clicking, scrolling, moving through the page 
//when you interact with the page you may trigger events 
// function as parameters vid 
// function say(something){
//     console.log(something);
// }
// function exec(func, arg){
//     func(arg);
//}
//2 parameters ar very different data types, one is a function and the other is a string, but both can be passed as arguements 
// exec(say, "hi there!");
//passing a function into a function 
// we can oass a function directly into another function 
// function exec(func, arg){
//     func(arg);
// }
// exec((something) => {
//     console.log(something);
// }, 'great'); //anonymous function 
//-------------------------
// Delaying execution with setTimeout();
// window.setTimeout((something) => {
//     console.log(something);
// }, 3000, 'greetings, everyone!');
//method expects a function to be the first parameter 
//-------------------------
// listening for events with addEventListener();
//making a site interactive:
// selecting elements on a page
// manipulating elements 
//listening for user actions 
//the event target can be an element, a document or window object. 
// event type, callback function (event handler)
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51971" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js-and-the-dom/scriptsone.js"], null)
//# sourceMappingURL=/scriptsone.4f51edd9.map