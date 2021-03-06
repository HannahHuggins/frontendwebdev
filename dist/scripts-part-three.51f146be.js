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
})({"js-loops-arrays-obects/scripts-part-three.js":[function(require,module,exports) {
//The Object Literal
//------------------------------------------------------------------
// var student = {
//     name: 'Dave',
//     grades: [80, 85, 90]
// };
//key isn't in quotes, acts like a variable name 
// var person = {
//     name : 'Sarah',
//     country : 'US',
//     age : 35,
//     treeHouseStudent : true,
//     skills : ['JavaScript', 'HTML']
// };
//------------------------------------------------------------------
//Accessing object properties
//arrays use an index number to access the value, objects use keys
// var person = {
//     name: 'Dave',
//     age: 24
// };
// alert(person['name']);
// provide the propertys name as a string
//can also use dot notation, easier 
// alert(person.name);
// to change the name of the person object, you just assign a new value 
// person.name = 'Bobby';
// alert(person.name);
// person.country = 'Brazil';
// alert(person.country);
// var person = {
//     name: 'sarah',
//     country: 'us',
//     age: 35,
//     treehouse: true,
//     skills : ['javascript', 'html', 'css']
// };
// the object has 5 properties 
// function print(message){
//     var div = document.getElementById('ouput');
//     div.innerHTML = message;
// }
// var message = 'hello my name is ' + person.name;
// message += 'i live in the ' + person.country;
// person.name = 'rainbow dash';
// message += 'but i really wish my name was ' + person.name;
// person.age += 1;
// message += 'my age is now ' + person.age;
// message += 'i have ' + person.skills.length + ' skills: ';
// message += person.skills.join(', ');
// alert(message);
//------------------------------------------------------------------
//Using `for in` to Loop Through an Object's Properties
// lot of similarities between arrays and objects 
// because array value has a numeric index, for loops are an easy way to
// access each item in the array 
// you can access each value in an object using a for-in loop. (only applies to objects).
// loops through each key (property name) in the object. 
// var student = {
//     name:'dave',
//     age:25
// };
// for(var age in student){
//     //do something 
//     alert(student.name);
// }
// for each key in student, do something 
//for - the loop 
//var - the variable (key name)
// in - in the object 
// access property in the for in loop using brackets, can't use dot notation 
// var person = {
//     name:'sarah',
//     country:'us',
//     age: 35,
//     treehouse: true,
//     skills: ['js', 'css','html']
// };
// for (prop in person){
//     console.log(prop, ': ', person[prop]);
// }
//for - keyword introducing the loop
//prop acts like a paramete in a function 
//just like a variable, name it whatever you want 
//------------------------------------------------------------------
// //Mixing and Matching Arrays and Objects
// var questions = [
//     { question:'How many states are there in the US?', answer:50},
//     { question:'How many continents are there?', answer:7 },
//     { question:'How many legs does an insect have?', answer:6 }
// ];
// // turning the prior 2 dimensional array into objects within an array 
// var correctAnswers = 0;
// var question;
// var answer;
// var response;
// function print(message){
//     document.write(message)
// }
// for(var i = 0; i < questions; i += 1){
//     question = questions[i].question;
//     answer = questions[i].answer;
//     response = prompt(question);
//     response = parseInt(response);
//     if (response === answer){
//         correctAnswers += 1;
//     }
// }
// // looping through the array, each time through the loop accessing one of the objects in the array 
// html = "You got " + correctAnswers + " question(s) right."
// print(html);
//------------------------------------------------------------------
//JavaScript object notation 
// objects are the model for JSON
//JS object notation 
//used with ajax to exchange info between the browser and server
// json format can easily be converted to a javascript object 
//
//------------------------------------------------------------------
// The build an object challenge, part 1 
// create a script that creates a bunch of student records and prints the records to a webpage 
// create a data structure to hold info about students 
// var students = [
//     {name: 'dave', track: 'javaScript', achievements: 'js', points:50},
//     {name: 'henry', track: 'java', achievements: 'j', point: 100},
//     {name: 'hannah', track: 'javaScript', achievements: 'js', points: 200},
//     {name: 'dave', track: 'javascript', achievements: 'js', points: 500},
//     {name: 'jo', track: 'css', achievements: 'c', points: 1000}
// ];
// for (var prop in students){
//     document.write("name: " + students[prop].name + ", track: " + 
//     students[prop].track + ", achievements: " + students[prop].achievements
//     + ", points: " + students[prop].points)
// }
// the build an object challenge, part 1 solution 
// build an object challenge part 2 
// the build an object challenge, part 2 solution 
// the student record search challenge 
// make the records searchable 
// prompt method to request the name of a student 
// var students = [
//     {name: 'dave', track: 'javaScript', achievements: 'js', points:50},
//     {name: 'henry', track: 'java', achievements: 'j', point: 100},
//     {name: 'hannah', track: 'javaScript', achievements: 'js', points: 200},
//     {name: 'dave', track: 'javascript', achievements: 'js', points: 500},
//     {name: 'jo', track: 'css', achievements: 'c', points: 1000}
// ];
// for (var prop in students){
//     document.write("name: " + students[prop].name + ", track: " + 
//     students[prop].track + ", achievements: " + students[prop].achievements
//     + ", points: " + students[prop].points)
// }
// function searchStudents(){
//     studentName = prompt("what is the students name?");
//         if (studentName === 'dave'){
//             alert("student name: " + students[0].name + ", track: " +  
//             students[0].track + ", achievements: " + students[0].achievements
//             + ", points: " + students[0].achievements);
//         } else if (studentName === 'henry'){
//             alert("Student name: " + students[1].name + ", track: " + 
//             students[1].track + ", achievements: " + students[1].achievements
//             + ", points:" + students[1].points)
//         } else if (studentName === 'hannah'){
//             alert("Student name: " + students[2].name + ", achievements: " + students[2].achievements
//             + ", track: " + students[2].track + ", points: " + students[2].points)
//         }
//     }
// searchStudents();
// the sudent record search challenge solution
// ---------------------------------------------------------------------
// practice object literals in javascript 
// introducing the practice vid 
// var book = [
//     {title: 'harry potter', author: 'jk', year: 1993},
// ];
// for (prop in book){
//     console.log(book[prop]);
// }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63992" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js-loops-arrays-obects/scripts-part-three.js"], null)
//# sourceMappingURL=/scripts-part-three.51f146be.map