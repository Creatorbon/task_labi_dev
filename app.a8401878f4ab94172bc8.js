!function(e){function n(n){for(var r,o,l=n[0],c=n[1],u=n[2],d=0,s=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(_,o)&&_[o]&&s.push(_[o][0]),_[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(n);s.length;)s.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==_[c]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},_={0:0},a=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var i=c;a.push([27,1]),t()}({27:function(e,n,t){t(28),e.exports=t(61)},28:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);\n/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);\n/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _this = undefined;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar input = document.querySelector('input');\nvar msg = document.getElementById('msg');\nvar remove = document.getElementById('remove');\nvar save = document.getElementById('save');\nvar data = '';\n\nvar readFile = function readFile(file) {\n  return new Promise(function (resolve, reject) {\n    var newFile = new FileReader();\n\n    newFile.onload = function () {\n      return resolve(newFile.result);\n    };\n\n    newFile.readAsText(file);\n  });\n};\n\nfunction read() {\n  return _read.apply(this, arguments);\n}\n\nfunction _read() {\n  _read = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(readFile(input.files[0]));\n            _context.next = 3;\n            return readFile(input.files[0]).then(function (result) {\n              save.removeAttribute('disabled', 'disabled');\n              remove.removeAttribute('disabled', 'disabled');\n              new Function(result);\n              data = result;\n            }).catch(function (error) {\n              save.setAttribute('disabled', 'disabled');\n              remove.setAttribute('disabled', 'disabled');\n              data = error;\n            });\n\n          case 3:\n            msg.innerHTML = data;\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _read.apply(this, arguments);\n}\n\nvar removeAllComments = function removeAllComments(str) {\n  var newStr = '';\n  newStr = str.replace(/((?:\\/\\*(?:[^*]|(?:\\*+[^*\\/]))*\\*+\\/)|(?:\\/\\/.*))/gm, '');\n  data = newStr.replace(/\\n{3,}/gm, '\\n');\n  msg.innerHTML = data;\n};\n\nvar download = function download(filename, text) {\n  var element = document.createElement('a');\n  element.setAttribute('href', \"data:text/plain;charset=utf-8,\".concat(encodeURIComponent(text)));\n  element.setAttribute('download', filename);\n  element.style.display = 'none';\n  document.body.appendChild(element);\n  element.click();\n  document.body.removeChild(element);\n};\n\ninput.addEventListener('change', function () {\n  return read(_this);\n}, false);\nremove.addEventListener('click', function () {\n  return removeAllComments(data);\n}, false);\nsave.addEventListener('click', function () {\n  var text = data;\n  var filename = input.files[0].name;\n  download(filename, text);\n}, false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJyk7XG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlJyk7XG5jb25zdCBzYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKTtcbmxldCBkYXRhID0gJyc7XG5cbmNvbnN0IHJlYWRGaWxlID0gKGZpbGUpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgbmV3RmlsZSA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIG5ld0ZpbGUub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuZXdGaWxlLnJlc3VsdCk7XG4gIG5ld0ZpbGUucmVhZEFzVGV4dChmaWxlKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiByZWFkKCkge1xuICBjb25zb2xlLmxvZyhyZWFkRmlsZShpbnB1dC5maWxlc1swXSkpO1xuICBhd2FpdCByZWFkRmlsZShpbnB1dC5maWxlc1swXSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBzYXZlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIHJlbW92ZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICBuZXcgRnVuY3Rpb24ocmVzdWx0KTtcbiAgICAgIGRhdGEgPSByZXN1bHQ7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBzYXZlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICBkYXRhID0gZXJyb3I7XG4gICAgfSk7XG4gIG1zZy5pbm5lckhUTUwgPSBkYXRhO1xufVxuXG5jb25zdCByZW1vdmVBbGxDb21tZW50cyA9IChzdHIpID0+IHtcbiAgbGV0IG5ld1N0ciA9ICcnO1xuICBuZXdTdHIgPSBzdHIucmVwbGFjZSgvKCg/OlxcL1xcKig/OlteKl18KD86XFwqK1teKlxcL10pKSpcXCorXFwvKXwoPzpcXC9cXC8uKikpL2dtLCAnJyk7XG4gIGRhdGEgPSBuZXdTdHIucmVwbGFjZSgvXFxuezMsfS9nbSwgJ1xcbicpO1xuICBtc2cuaW5uZXJIVE1MID0gZGF0YTtcbn07XG5cbmNvbnN0IGRvd25sb2FkID0gKGZpbGVuYW1lLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgYGRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpfWApO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICBlbGVtZW50LmNsaWNrKCk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG59O1xuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiByZWFkKHRoaXMpLCBmYWxzZSk7XG5yZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW1vdmVBbGxDb21tZW50cyhkYXRhKSwgZmFsc2UpO1xuc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgdGV4dCA9IGRhdGE7XG4gIGNvbnN0IGZpbGVuYW1lID0gaW5wdXQuZmlsZXNbMF0ubmFtZTtcblxuICBkb3dubG9hZChmaWxlbmFtZSwgdGV4dCk7XG59LCBmYWxzZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n")},61:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvc3R5bGVzLnNjc3M/YjdmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///61\n")}});