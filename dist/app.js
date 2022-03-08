/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calendar.js":
/*!****************************!*\
  !*** ./src/js/calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildCalendar\": () => (/* binding */ buildCalendar)\n/* harmony export */ });\n/* harmony import */ var _responsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive.js */ \"./src/js/responsive.js\");\n/* harmony import */ var _scss_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/_calendar.scss */ \"./src/scss/_calendar.scss\");\n/**\r\n * Self made calendar for this project\r\n * I'va watched pre-built alternatives but nothing in open source\r\n * project hitted me.\r\n *\r\n * Full calendar inspired.\r\n */\n\n\nvar MONTH = 11;\nvar months = [\"Gennaio\", \"Febbraio\", \"Marzo\", \"Aprile\", \"Maggio\", \"Giugno\", \"Luglio\", \"Agosto\", \"Settembre\", \"Ottobre\", \"Novembre\", \"Dicembre\"];\nvar days = [\"Lunedì\", \"Martedì\", \"Mercoledì\", \"Giovedì\", \"Venerdì\", \"Sabato\", \"Domenica\"];\nvar shortDays = [\"Lun\", \"Mar\", \"Mer\", \"Giov\", \"Ven\", \"Sab\", \"Dom\"];\nvar date = new Date();\n\nvar __day = date.getDate();\n\nvar __month = date.getMonth();\n\nvar __year = date.getFullYear();\n/**\r\n * Add event to buttons for interaction\r\n * @param {*} tableId\r\n * @param {*} params\r\n */\n\n\nvar addEventToButtons = function addEventToButtons(tableId, params) {\n  var iconPrevButton = document.getElementById(\"iconPrevCalendar\");\n  var iconNextButton = document.getElementById(\"iconNextCalendar\");\n  iconPrevButton.addEventListener(\"click\", function () {\n    params.month = params.month > 0 ? params.month - 1 : MONTH;\n    createTableBody(tableId, params);\n  });\n  iconNextButton.addEventListener(\"click\", function () {\n    params.month = params.month < MONTH ? params.month + 1 : 0;\n    createTableBody(tableId, params);\n  });\n};\n/**\r\n * This method builds the Days row up to the calendar.\r\n * If ShortDays is true , short days will be shown\r\n * @param {*} hookId\r\n * @param {*} config\r\n */\n\n\nvar generateDaysRow = function generateDaysRow(hookId) {\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    shortDays: false\n  };\n  var hook = document.getElementById(hookId);\n\n  for (var i = 0; i < days.length; i++) {\n    var th = document.createElement(\"th\");\n    th.innerText = config.shortDays ? shortDays[i] : days[i];\n    th.classList.add(\"dayth\");\n    hook.append(th);\n  }\n};\n/**\r\n * This method generates the main part of the calendar.\r\n * It provide days markup and days display logic computation\r\n * @param {*} params\r\n */\n\n\nvar generateTableCells = function generateTableCells() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    daysPrevMonth: daysPrevMonth,\n    nextMonthDayDifference: nextMonthDayDifference\n  };\n  var config = arguments.length > 1 ? arguments[1] : undefined;\n  var nextCounter = 0;\n  var preCounter = params.daysPrevMonth - params.paddingDays;\n  var tb = document.getElementById(\"calTbody\");\n\n  for (var d = 1; d < params.daysInMonth + params.paddingDays + params.nextMonthDayDifference; d++) {\n    var _date = new Date();\n\n    _date.setFullYear(config.year, config.month, d - 1); //console.log(date.toLocaleDateString());\n\n\n    if (d % days.length == 1) {\n      var tr = document.createElement(\"tr\");\n      tr.classList.add(\"tr-body\");\n      tb.append(tr);\n    }\n\n    var row = document.getElementsByClassName(\"tr-body\");\n    var td = document.createElement(\"td\");\n    td.setAttribute('data-date', _date.toLocaleDateString());\n    var daydiv = void 0;\n\n    if (d > params.paddingDays && d - params.paddingDays <= params.daysInMonth) {\n      daydiv = \"<div class=\\\"day\\\">\".concat(d - params.paddingDays, \"</div>\");\n    } else if (d <= params.paddingDays) {\n      daydiv = \"<div class=\\\"day\\\">\".concat(++preCounter, \"</div>\");\n      td.setAttribute(\"disabled\", \"true\");\n      td.classList.add(\"disabled\");\n    } else if (d - params.paddingDays > params.daysInMonth) {\n      daydiv = \"<div class=\\\"day\\\">\".concat(++nextCounter, \"</div>\");\n      td.setAttribute(\"disabled\", \"true\");\n      td.classList.add(\"disabled\");\n    }\n\n    td.innerHTML = daydiv;\n    row[row.length - 1].append(td);\n  }\n};\n/**\r\n * Initialization of main part of calendar table.\r\n * It return markup and this will be mounted by buildTableMarkup method.\r\n * @param {*} config\r\n * @returns {HTMLTableElement}\r\n */\n\n\nvar buildCalendarFundamentals = function buildCalendarFundamentals(month, config) {\n  var thead = \"<thead>\\n     <tr id=\\\"calendarDaysRow\\\"></tr>\\n </thead>\";\n  var iconPrev = config.iconPrev == \"default\" ? '<i class=\"bi bi-caret-left-square-fill\"></i>' : config.iconPrev;\n  var iconNext = config.iconNext == \"default\" ? '<i class=\"bi bi-caret-right-square-fill\"></i>' : config.iconNext;\n  var caption = \"<caption>\\n <small id=\\\"iconPrevCalendar\\\">\\n     \".concat(iconPrev, \"\\n </small>\\n \").concat(months[month], \"\\n <small id=\\\"iconNextCalendar\\\">\\n     \").concat(iconNext, \"\\n </small>\\n </caption>\\n <colgroup class=\\\"weekday\\\" span=\\\"5\\\"></colgroup>\\n <colgroup class=\\\"weekend \").concat(config.disableWeekend == true ? \"disabled\" : \"\", \"\\\" span=\\\"2\\\"></colgroup>\\n \");\n  var tbody = \"<tbody id=\\\"calTbody\\\" class=\\\"calendarTbody\\\">\\n\\n </tbody>\";\n  var html = document.createElement(\"table\");\n  html.classList.add(\"table\", \"calendar-table\", \"responsive\");\n  html.innerHTML = \"\\n \".concat(caption, \"\\n \").concat(thead, \"\\n \").concat(tbody, \"\\n \");\n  return html;\n};\n\nvar buildTableMarkup = function buildTableMarkup(tableId) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    dateString: dateString,\n    daysPrevMonth: daysPrevMonth,\n    firstDay: firstDay,\n    nextMonthDayDifference: nextMonthDayDifference,\n    year: year,\n    month: month,\n    day: day\n  };\n  var config = arguments.length > 2 ? arguments[2] : undefined;\n  var tableDiv = document.getElementById(tableId); // Remove all child if any.\n\n  while (tableDiv.hasChildNodes()) {\n    tableDiv.removeChild(tableDiv.lastChild);\n  } // Build calendar fundamentals\n\n\n  var html = buildCalendarFundamentals(params.month, config); // Hook fundamentals to mount point\n\n  tableDiv.insertAdjacentElement(\"afterbegin\", html); // Generate days row\n\n  generateDaysRow(\"calendarDaysRow\", {\n    shortDays: true\n  });\n  generateTableCells(params, config);\n\n  if (config.responsive == true) {\n    (0,_responsive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tableId);\n  }\n};\n/**\r\n * Main wrapper method.\r\n * Responsability of this method is to call all methods in correct order\r\n * to build entire calendar.\r\n * @param {*} tableId\r\n * @param {*} config\r\n */\n\n\nvar createTableBody = function createTableBody(tableId, config) {\n  console.log(config);\n  var year = config.year == null ? __year : config.year;\n  var month = config.month == null ? __month : config.month;\n  var day = config.day == null ? __day : config.day;\n  /**\r\n   * First day of the current month\r\n   * @var {Date} firstDay\r\n   */\n\n  var firstDay = new Date(year, month, 1);\n  /**\r\n   * Number of days in the current month\r\n   * @var {Date} daysInMonth\r\n   */\n\n  var daysInMonth = new Date(year, month + 1, 0).getDate();\n  /**\r\n   * Number of days of previous month\r\n   * @var {Date} daysPrevMonth\r\n   */\n\n  var daysPrevMonth = new Date(year, month, 0).getDate();\n  /**\r\n   * Calendar matrix size\r\n   * @var {int} calendarSize\r\n   */\n\n  var calendarSize = days.length * 6;\n  /**\r\n   * Date in string format of the first day of the current month.\r\n   * @var {string} dateString\r\n   */\n\n  var dateString = firstDay.toLocaleDateString(\"it-IT\", {\n    weekday: \"long\",\n    year: \"numeric\",\n    month: \"numeric\",\n    day: \"numeric\"\n  });\n  /**\r\n   * Current day of the current month.\r\n   * @var {string} currentDay\r\n   */\n\n  var currentDay = dateString.split(\" \")[0];\n  /**\r\n   * Padding days at current day of the previous month.\r\n   * @var {int} paddingDays\r\n   */\n\n  var paddingDays = days.indexOf(currentDay.charAt(0).toUpperCase() + currentDay.slice(1));\n  /**\r\n   * Integer difference between last day of the current month\r\n   * and first [0-6] days of the next month.\r\n   * @var {int} nextMonthDayDifference\r\n   */\n\n  var nextMonthDayDifference = calendarSize - (daysInMonth + paddingDays - 1);\n  var params = {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    dateString: dateString,\n    daysPrevMonth: daysPrevMonth,\n    firstDay: firstDay,\n    nextMonthDayDifference: nextMonthDayDifference,\n    year: year,\n    day: day,\n    month: month\n  };\n  buildTableMarkup(tableId, params, config);\n  addEventToButtons(tableId, config);\n};\n/**\r\n * Build calendar method for bootstrapping the calendar.\r\n * @param {*} tableId\r\n * @param {*} config\r\n */\n\n\nvar buildCalendar = function buildCalendar(tableId) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$disableWeekend = _ref.disableWeekend,\n      disableWeekend = _ref$disableWeekend === void 0 ? true : _ref$disableWeekend,\n      _ref$disableCol = _ref.disableCol,\n      disableCol = _ref$disableCol === void 0 ? [] : _ref$disableCol,\n      _ref$iconNext = _ref.iconNext,\n      iconNext = _ref$iconNext === void 0 ? \"default\" : _ref$iconNext,\n      _ref$iconPrev = _ref.iconPrev,\n      iconPrev = _ref$iconPrev === void 0 ? \"default\" : _ref$iconPrev,\n      _ref$responsive = _ref.responsive,\n      responsive = _ref$responsive === void 0 ? false : _ref$responsive,\n      _ref$year = _ref.year,\n      year = _ref$year === void 0 ? __year : _ref$year,\n      _ref$month = _ref.month,\n      month = _ref$month === void 0 ? __month : _ref$month,\n      _ref$day = _ref.day,\n      day = _ref$day === void 0 ? __day : _ref$day;\n\n  var config = {\n    responsive: responsive,\n    disableWeekend: disableWeekend,\n    iconNext: iconNext,\n    iconPrev: iconPrev,\n    year: year,\n    month: month,\n    day: day,\n    disableCol: disableCol\n  };\n  createTableBody(tableId, config);\n};\n\n\n\n//# sourceURL=webpack://calendar/./src/js/calendar.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ \"./src/js/calendar.js\");\n\n(0,_calendar__WEBPACK_IMPORTED_MODULE_0__.buildCalendar)('calendar-div', {\n  responsive: true\n});\n\n//# sourceURL=webpack://calendar/./src/js/index.js?");

/***/ }),

/***/ "./src/js/responsive.js":
/*!******************************!*\
  !*** ./src/js/responsive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Responsive calculation\r\n */\n\n/**\r\n * Media Breakpoints.\r\n */\nvar breakpoints = {\n  minus: 370,\n  little: 576,\n  medium: 767,\n  large: 991,\n  xlarge: 1999\n};\n/**\r\n * Method exported. It resize the calendar cells examining the parent container width.\r\n * @param {*} tableId \r\n */\n\nvar resizeCalendar = function resizeCalendar(tableId) {\n  var tableDiv = document.getElementById(tableId);\n  var tdElements = document.querySelectorAll('.calendar-table td');\n  console.log(tableDiv.parentElement.clientWidth);\n  var parentWidth = tableDiv.parentElement.clientWidth;\n\n  if (tableDiv.parentElement) {\n    switch (true) {\n      case parentWidth <= breakpoints.minus:\n        applyResizeClass(\"minus\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.little && parentWidth > breakpoints.minus:\n        applyResizeClass(\"little\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.medium && parentWidth > breakpoints.little:\n        applyResizeClass(\"medium\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.large && parentWidth > breakpoints.medium:\n        applyResizeClass(\"large\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.xlarge && parentWidth > breakpoints.large:\n        applyResizeClass(\"xlarge\", tdElements);\n        break;\n    }\n  } //console.log(tdElements);\n\n};\n/**\r\n * Apply the resize class for each td element (calendar cells)\r\n * @param {*} resizeClass \r\n * @param {*} HtmlElement \r\n */\n\n\nvar applyResizeClass = function applyResizeClass(resizeClass, HtmlElement) {\n  if (resizeClass != '') {\n    for (var i = 0; i < HtmlElement.length; i++) {\n      HtmlElement[i].classList.toggle(resizeClass);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCalendar);\n\n//# sourceURL=webpack://calendar/./src/js/responsive.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_calendar.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_calendar.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".calendar-table.table > :not(:first-child) {\\n  border-top: none !important; }\\n\\n.calendar-table.table {\\n  border-collapse: none !important; }\\n\\n.calendar-table.table thead,\\n.calendar-table.table tbody,\\n.calendar-table.table tfoot,\\n.calendar-table.table tr,\\n.calendar-table.table td,\\n.calendar-table.table th {\\n  border-color: none; }\\n\\ntable.calendar-table {\\n  border-collapse: unset !important;\\n  border-spacing: 3px; }\\n\\n.calendar-table .table thead,\\n.calendar-table .table tbody,\\n.calendar-table .table tfoot,\\n.calendar-table .table tr,\\n.calendar-table .table td,\\n.calendar-table .table th {\\n  border-color: none; }\\n\\n.calendar-table tr {\\n  border: 1px solid #000 !important; }\\n\\n.calendar-table caption {\\n  text-align: center;\\n  font-size: 1.6em;\\n  color: #000;\\n  caption-side: top; }\\n\\n.calendar-table th {\\n  text-align: center; }\\n\\n.calendar-table td {\\n  width: 7em;\\n  height: 7em;\\n  padding: 5px;\\n  vertical-align: top;\\n  position: relative;\\n  border: 1px solid #000; }\\n\\n.calendar-table td .day {\\n  position: absolute;\\n  top: 8px;\\n  right: 8px;\\n  font-size: 11pt;\\n  color: #000; }\\n\\n.calendar-table td.disabled {\\n  background-color: #9d9393;\\n  cursor: not-allowed;\\n  pointer-events: all !important; }\\n\\n.calendar-table .weekend.disabled {\\n  cursor: not-allowed;\\n  pointer-events: all !important;\\n  background: #ddd; }\\n\\n.calendar-table #iconPrevCalendar {\\n  margin-right: 30px; }\\n\\n.calendar-table #iconNextCalendar {\\n  margin-left: 30px; }\\n\\n.calendar-table #iconNextCalendar :hover,\\n.calendar-table #iconPrevCalendar :hover {\\n  cursor: pointer; }\\n\\n.calendar-table td.minus {\\n  height: 3em; }\\n\\n.calendar-table td.little {\\n  height: 4em; }\\n\\n.calendar-table td.medium {\\n  height: 4.5em; }\\n\\n.calendar-table td.large {\\n  height: 5em; }\\n\\n.calendar-table td.xlarge {\\n  height: 7em; }\\n\\n/*@media only screen and (max-width: 768px) {\\r\\n    .calendar-table td {\\r\\n        height: 5em;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 576px) {\\r\\n    .calendar-table td {\\r\\n        height: 4em;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 456px) {\\r\\n    .calendar-table td {\\r\\n        height: 3.5em;\\r\\n    }\\r\\n}*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calendar/./src/scss/_calendar.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calendar/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calendar/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/_calendar.scss":
/*!*********************************!*\
  !*** ./src/scss/_calendar.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_calendar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./_calendar.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_calendar.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_calendar_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_calendar_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_calendar_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_calendar_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calendar/./src/scss/_calendar.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calendar/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calendar/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calendar/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calendar/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calendar/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calendar/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;