/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/format";
exports.ids = ["vendor-chunks/format"];
exports.modules = {

/***/ "(ssr)/./node_modules/format/format.js":
/*!***************************************!*\
  !*** ./node_modules/format/format.js ***!
  \***************************************/
/***/ ((module) => {

eval("//\n// format - printf-like string formatting for JavaScript\n// github.com/samsonjs/format\n// @_sjs\n//\n// Copyright 2010 - 2013 Sami Samhuri <sami@samhuri.net>\n//\n// MIT License\n// http://sjs.mit-license.org\n//\n\n;(function() {\n\n  //// Export the API\n  var namespace;\n\n  // CommonJS / Node module\n  if (true) {\n    namespace = module.exports = format;\n  }\n\n  // Browsers and other environments\n  else {}\n\n  namespace.format = format;\n  namespace.vsprintf = vsprintf;\n\n  if (typeof console !== 'undefined' && typeof console.log === 'function') {\n    namespace.printf = printf;\n  }\n\n  function printf(/* ... */) {\n    console.log(format.apply(null, arguments));\n  }\n\n  function vsprintf(fmt, replacements) {\n    return format.apply(null, [fmt].concat(replacements));\n  }\n\n  function format(fmt) {\n    var argIndex = 1 // skip initial format argument\n      , args = [].slice.call(arguments)\n      , i = 0\n      , n = fmt.length\n      , result = ''\n      , c\n      , escaped = false\n      , arg\n      , tmp\n      , leadingZero = false\n      , precision\n      , nextArg = function() { return args[argIndex++]; }\n      , slurpNumber = function() {\n          var digits = '';\n          while (/\\d/.test(fmt[i])) {\n            digits += fmt[i++];\n            c = fmt[i];\n          }\n          return digits.length > 0 ? parseInt(digits) : null;\n        }\n      ;\n    for (; i < n; ++i) {\n      c = fmt[i];\n      if (escaped) {\n        escaped = false;\n        if (c == '.') {\n          leadingZero = false;\n          c = fmt[++i];\n        }\n        else if (c == '0' && fmt[i + 1] == '.') {\n          leadingZero = true;\n          i += 2;\n          c = fmt[i];\n        }\n        else {\n          leadingZero = true;\n        }\n        precision = slurpNumber();\n        switch (c) {\n        case 'b': // number in binary\n          result += parseInt(nextArg(), 10).toString(2);\n          break;\n        case 'c': // character\n          arg = nextArg();\n          if (typeof arg === 'string' || arg instanceof String)\n            result += arg;\n          else\n            result += String.fromCharCode(parseInt(arg, 10));\n          break;\n        case 'd': // number in decimal\n          result += parseInt(nextArg(), 10);\n          break;\n        case 'f': // floating point number\n          tmp = String(parseFloat(nextArg()).toFixed(precision || 6));\n          result += leadingZero ? tmp : tmp.replace(/^0/, '');\n          break;\n        case 'j': // JSON\n          result += JSON.stringify(nextArg());\n          break;\n        case 'o': // number in octal\n          result += '0' + parseInt(nextArg(), 10).toString(8);\n          break;\n        case 's': // string\n          result += nextArg();\n          break;\n        case 'x': // lowercase hexadecimal\n          result += '0x' + parseInt(nextArg(), 10).toString(16);\n          break;\n        case 'X': // uppercase hexadecimal\n          result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();\n          break;\n        default:\n          result += c;\n          break;\n        }\n      } else if (c === '%') {\n        escaped = true;\n      } else {\n        result += c;\n      }\n    }\n    return result;\n  }\n\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZm9ybWF0L2Zvcm1hdC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQTZCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLEVBR0o7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvZm9ybWF0L2Zvcm1hdC5qcz8xYTJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBmb3JtYXQgLSBwcmludGYtbGlrZSBzdHJpbmcgZm9ybWF0dGluZyBmb3IgSmF2YVNjcmlwdFxuLy8gZ2l0aHViLmNvbS9zYW1zb25qcy9mb3JtYXRcbi8vIEBfc2pzXG4vL1xuLy8gQ29weXJpZ2h0IDIwMTAgLSAyMDEzIFNhbWkgU2FtaHVyaSA8c2FtaUBzYW1odXJpLm5ldD5cbi8vXG4vLyBNSVQgTGljZW5zZVxuLy8gaHR0cDovL3Nqcy5taXQtbGljZW5zZS5vcmdcbi8vXG5cbjsoZnVuY3Rpb24oKSB7XG5cbiAgLy8vLyBFeHBvcnQgdGhlIEFQSVxuICB2YXIgbmFtZXNwYWNlO1xuXG4gIC8vIENvbW1vbkpTIC8gTm9kZSBtb2R1bGVcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZXNwYWNlID0gbW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQ7XG4gIH1cblxuICAvLyBCcm93c2VycyBhbmQgb3RoZXIgZW52aXJvbm1lbnRzXG4gIGVsc2Uge1xuICAgIC8vIEdldCB0aGUgZ2xvYmFsIG9iamVjdC4gV29ya3MgaW4gRVMzLCBFUzUsIGFuZCBFUzUgc3RyaWN0IG1vZGUuXG4gICAgbmFtZXNwYWNlID0gKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzIHx8ICgxLGV2YWwpKCd0aGlzJykgfSgpKTtcbiAgfVxuXG4gIG5hbWVzcGFjZS5mb3JtYXQgPSBmb3JtYXQ7XG4gIG5hbWVzcGFjZS52c3ByaW50ZiA9IHZzcHJpbnRmO1xuXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbmFtZXNwYWNlLnByaW50ZiA9IHByaW50ZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByaW50ZigvKiAuLi4gKi8pIHtcbiAgICBjb25zb2xlLmxvZyhmb3JtYXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gIH1cblxuICBmdW5jdGlvbiB2c3ByaW50ZihmbXQsIHJlcGxhY2VtZW50cykge1xuICAgIHJldHVybiBmb3JtYXQuYXBwbHkobnVsbCwgW2ZtdF0uY29uY2F0KHJlcGxhY2VtZW50cykpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0KGZtdCkge1xuICAgIHZhciBhcmdJbmRleCA9IDEgLy8gc2tpcCBpbml0aWFsIGZvcm1hdCBhcmd1bWVudFxuICAgICAgLCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAsIGkgPSAwXG4gICAgICAsIG4gPSBmbXQubGVuZ3RoXG4gICAgICAsIHJlc3VsdCA9ICcnXG4gICAgICAsIGNcbiAgICAgICwgZXNjYXBlZCA9IGZhbHNlXG4gICAgICAsIGFyZ1xuICAgICAgLCB0bXBcbiAgICAgICwgbGVhZGluZ1plcm8gPSBmYWxzZVxuICAgICAgLCBwcmVjaXNpb25cbiAgICAgICwgbmV4dEFyZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfVxuICAgICAgLCBzbHVycE51bWJlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBkaWdpdHMgPSAnJztcbiAgICAgICAgICB3aGlsZSAoL1xcZC8udGVzdChmbXRbaV0pKSB7XG4gICAgICAgICAgICBkaWdpdHMgKz0gZm10W2krK107XG4gICAgICAgICAgICBjID0gZm10W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGlnaXRzLmxlbmd0aCA+IDAgPyBwYXJzZUludChkaWdpdHMpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgO1xuICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICBjID0gZm10W2ldO1xuICAgICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoYyA9PSAnLicpIHtcbiAgICAgICAgICBsZWFkaW5nWmVybyA9IGZhbHNlO1xuICAgICAgICAgIGMgPSBmbXRbKytpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09ICcwJyAmJiBmbXRbaSArIDFdID09ICcuJykge1xuICAgICAgICAgIGxlYWRpbmdaZXJvID0gdHJ1ZTtcbiAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgYyA9IGZtdFtpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBsZWFkaW5nWmVybyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJlY2lzaW9uID0gc2x1cnBOdW1iZXIoKTtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJ2InOiAvLyBudW1iZXIgaW4gYmluYXJ5XG4gICAgICAgICAgcmVzdWx0ICs9IHBhcnNlSW50KG5leHRBcmcoKSwgMTApLnRvU3RyaW5nKDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjJzogLy8gY2hhcmFjdGVyXG4gICAgICAgICAgYXJnID0gbmV4dEFyZygpO1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fCBhcmcgaW5zdGFuY2VvZiBTdHJpbmcpXG4gICAgICAgICAgICByZXN1bHQgKz0gYXJnO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGFyZywgMTApKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZCc6IC8vIG51bWJlciBpbiBkZWNpbWFsXG4gICAgICAgICAgcmVzdWx0ICs9IHBhcnNlSW50KG5leHRBcmcoKSwgMTApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmJzogLy8gZmxvYXRpbmcgcG9pbnQgbnVtYmVyXG4gICAgICAgICAgdG1wID0gU3RyaW5nKHBhcnNlRmxvYXQobmV4dEFyZygpKS50b0ZpeGVkKHByZWNpc2lvbiB8fCA2KSk7XG4gICAgICAgICAgcmVzdWx0ICs9IGxlYWRpbmdaZXJvID8gdG1wIDogdG1wLnJlcGxhY2UoL14wLywgJycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdqJzogLy8gSlNPTlxuICAgICAgICAgIHJlc3VsdCArPSBKU09OLnN0cmluZ2lmeShuZXh0QXJnKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvJzogLy8gbnVtYmVyIGluIG9jdGFsXG4gICAgICAgICAgcmVzdWx0ICs9ICcwJyArIHBhcnNlSW50KG5leHRBcmcoKSwgMTApLnRvU3RyaW5nKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzJzogLy8gc3RyaW5nXG4gICAgICAgICAgcmVzdWx0ICs9IG5leHRBcmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneCc6IC8vIGxvd2VyY2FzZSBoZXhhZGVjaW1hbFxuICAgICAgICAgIHJlc3VsdCArPSAnMHgnICsgcGFyc2VJbnQobmV4dEFyZygpLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdYJzogLy8gdXBwZXJjYXNlIGhleGFkZWNpbWFsXG4gICAgICAgICAgcmVzdWx0ICs9ICcweCcgKyBwYXJzZUludChuZXh0QXJnKCksIDEwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjID09PSAnJScpIHtcbiAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gYztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/format/format.js\n");

/***/ })

};
;