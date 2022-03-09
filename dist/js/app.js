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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/calendar */ \"./src/js/calendar.js\");\n\n(0,_js_calendar__WEBPACK_IMPORTED_MODULE_0__.buildCalendar)('calendar-div', {\n  responsive: true\n});\n\n//# sourceURL=webpack://spike-calendar/./src/index.js?");

/***/ }),

/***/ "./src/js/calendar.js":
/*!****************************!*\
  !*** ./src/js/calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildCalendar\": () => (/* binding */ buildCalendar)\n/* harmony export */ });\n/* harmony import */ var _responsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive.js */ \"./src/js/responsive.js\");\n\n/**\r\n * Compiled via sass cli\r\n */\n//import \"../scss/_calendar.scss\";\n\nvar MONTH = 11;\nvar months = [\"Gennaio\", \"Febbraio\", \"Marzo\", \"Aprile\", \"Maggio\", \"Giugno\", \"Luglio\", \"Agosto\", \"Settembre\", \"Ottobre\", \"Novembre\", \"Dicembre\"];\nvar days = [\"Lunedì\", \"Martedì\", \"Mercoledì\", \"Giovedì\", \"Venerdì\", \"Sabato\", \"Domenica\"];\nvar shortDays = [\"Lun\", \"Mar\", \"Mer\", \"Giov\", \"Ven\", \"Sab\", \"Dom\"];\nvar date = new Date();\n\nvar __day = date.getDate();\n\nvar __month = date.getMonth();\n\nvar __year = date.getFullYear();\n/**\r\n * Add event to buttons for interaction\r\n * @param {*} tableId\r\n * @param {*} params\r\n */\n\n\nvar addEventToButtons = function addEventToButtons(tableId, params) {\n  var iconPrevButton = document.getElementById(\"iconPrevCalendar\");\n  var iconNextButton = document.getElementById(\"iconNextCalendar\");\n  var dataCells = document.querySelectorAll('[data-date]');\n\n  for (var i = 0; i < dataCells.length; i++) {\n    dataCells[i].addEventListener('click', function (evt) {\n      console.log(evt.target.attributes[0].nodeValue);\n    });\n  }\n\n  iconPrevButton.addEventListener(\"click\", function () {\n    params.month = params.month > 0 ? params.month - 1 : MONTH;\n    createTableBody(tableId, params);\n  });\n  iconNextButton.addEventListener(\"click\", function () {\n    params.month = params.month < MONTH ? params.month + 1 : 0;\n    createTableBody(tableId, params);\n  });\n};\n/**\r\n * This method builds the Days row up to the calendar.\r\n * If ShortDays is true , short days will be shown\r\n * @param {*} hookId\r\n * @param {*} config\r\n */\n\n\nvar generateDaysRow = function generateDaysRow(hookId) {\n  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    shortDays: false\n  };\n  var hook = document.getElementById(hookId);\n\n  for (var i = 0; i < days.length; i++) {\n    var th = document.createElement(\"th\");\n    th.innerText = config.shortDays ? shortDays[i] : days[i];\n    th.classList.add(\"dayth\");\n    hook.append(th);\n  }\n};\n/**\r\n * This method generates the main part of the calendar.\r\n * It provide days markup and days display logic computation\r\n * @param {*} params\r\n */\n\n\nvar generateTableCells = function generateTableCells() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    daysPrevMonth: daysPrevMonth,\n    nextMonthDayDifference: nextMonthDayDifference\n  };\n  var config = arguments.length > 1 ? arguments[1] : undefined;\n  var nextCounter = 0;\n  var preCounter = params.daysPrevMonth - params.paddingDays;\n  var tb = document.getElementById(\"calTbody\");\n\n  for (var d = 1; d < params.daysInMonth + params.paddingDays + params.nextMonthDayDifference; d++) {\n    var _date = new Date();\n\n    _date.setFullYear(config.year, config.month, d - 1); //console.log(date.toLocaleDateString());\n\n\n    if (d % days.length == 1) {\n      var tr = document.createElement(\"tr\");\n      tr.classList.add(\"tr-body\");\n      tb.append(tr);\n    }\n\n    var row = document.getElementsByClassName(\"tr-body\");\n    var td = document.createElement(\"td\");\n    td.setAttribute('data-date', _date.toLocaleDateString());\n    var daydiv = void 0;\n\n    if (d > params.paddingDays && d - params.paddingDays <= params.daysInMonth) {\n      daydiv = \"<div class=\\\"day\\\">\".concat(d - params.paddingDays, \"</div>\");\n    } else if (d <= params.paddingDays) {\n      daydiv = \"<div class=\\\"day\\\">\".concat(++preCounter, \"</div>\");\n      td.setAttribute(\"disabled\", \"true\");\n      td.classList.add(\"disabled\");\n    } else if (d - params.paddingDays > params.daysInMonth) {\n      daydiv = \"<div class=\\\"day\\\">\".concat(++nextCounter, \"</div>\");\n      td.setAttribute(\"disabled\", \"true\");\n      td.classList.add(\"disabled\");\n    }\n\n    td.innerHTML = daydiv;\n    row[row.length - 1].append(td);\n  }\n};\n/**\r\n * Initialization of main part of calendar table.\r\n * It return markup and this will be mounted by buildTableMarkup method.\r\n * @param {*} config\r\n * @returns {HTMLTableElement}\r\n */\n\n\nvar buildCalendarFundamentals = function buildCalendarFundamentals(month, config) {\n  var thead = \"<thead>\\n     <tr id=\\\"calendarDaysRow\\\"></tr>\\n </thead>\";\n  var iconPrev = config.iconPrev == \"default\" ? '<i class=\"bi bi-caret-left-square-fill\"></i>' : config.iconPrev;\n  var iconNext = config.iconNext == \"default\" ? '<i class=\"bi bi-caret-right-square-fill\"></i>' : config.iconNext;\n  var caption = \"<caption>\\n <small id=\\\"iconPrevCalendar\\\">\\n     \".concat(iconPrev, \"\\n </small>\\n \").concat(months[month], \"\\n <small id=\\\"iconNextCalendar\\\">\\n     \").concat(iconNext, \"\\n </small>\\n </caption>\\n <colgroup class=\\\"weekday\\\" span=\\\"5\\\"></colgroup>\\n <colgroup class=\\\"weekend \").concat(config.disableWeekend == true ? \"disabled\" : \"\", \"\\\" span=\\\"2\\\"></colgroup>\\n \");\n  var tbody = \"<tbody id=\\\"calTbody\\\" class=\\\"calendarTbody\\\">\\n\\n </tbody>\";\n  var html = document.createElement(\"table\");\n  html.classList.add(\"table\", \"calendar-table\", \"responsive\");\n  html.innerHTML = \"\\n \".concat(caption, \"\\n \").concat(thead, \"\\n \").concat(tbody, \"\\n \");\n  return html;\n};\n\nvar buildTableMarkup = function buildTableMarkup(tableId) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    dateString: dateString,\n    daysPrevMonth: daysPrevMonth,\n    firstDay: firstDay,\n    nextMonthDayDifference: nextMonthDayDifference,\n    year: year,\n    month: month,\n    day: day\n  };\n  var config = arguments.length > 2 ? arguments[2] : undefined;\n  var tableDiv = document.getElementById(tableId); // Check if wrapper div is already created.\n\n  var calWrap = document.getElementsByClassName('calwrapper')[0]; // if not , it's created and then tableDiv is attached to it.\n\n  if (calWrap === undefined || calWrap.length == 0) {\n    calWrap = document.createElement('div');\n    calWrap.classList.add('calwrapper');\n    tableDiv.insertAdjacentElement('beforebegin', calWrap);\n    calWrap.appendChild(tableDiv);\n  } // Remove all child if any.\n\n\n  while (tableDiv.hasChildNodes()) {\n    tableDiv.removeChild(tableDiv.lastChild);\n  } // Build calendar fundamentals\n\n\n  var html = buildCalendarFundamentals(params.month, config); // Hook fundamentals to mount point\n\n  tableDiv.insertAdjacentElement(\"afterbegin\", html); // Generate days row\n\n  generateDaysRow(\"calendarDaysRow\", {\n    shortDays: true\n  });\n  generateTableCells(params, config);\n\n  if (config.responsive == true) {\n    (0,_responsive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tableId);\n  }\n};\n/**\r\n * Main wrapper method.\r\n * Responsability of this method is to call all methods in correct order\r\n * to build entire calendar.\r\n * @param {*} tableId\r\n * @param {*} config\r\n */\n\n\nvar createTableBody = function createTableBody(tableId, config) {\n  console.log(config);\n  var year = config.year == null ? __year : config.year;\n  var month = config.month == null ? __month : config.month;\n  var day = config.day == null ? __day : config.day;\n  /**\r\n   * First day of the current month\r\n   * @var {Date} firstDay\r\n   */\n\n  var firstDay = new Date(year, month, 1);\n  /**\r\n   * Number of days in the current month\r\n   * @var {Date} daysInMonth\r\n   */\n\n  var daysInMonth = new Date(year, month + 1, 0).getDate();\n  /**\r\n   * Number of days of previous month\r\n   * @var {Date} daysPrevMonth\r\n   */\n\n  var daysPrevMonth = new Date(year, month, 0).getDate();\n  /**\r\n   * Calendar matrix size\r\n   * @var {int} calendarSize\r\n   */\n\n  var calendarSize = days.length * 6;\n  /**\r\n   * Date in string format of the first day of the current month.\r\n   * @var {string} dateString\r\n   */\n\n  var dateString = firstDay.toLocaleDateString(\"it-IT\", {\n    weekday: \"long\",\n    year: \"numeric\",\n    month: \"numeric\",\n    day: \"numeric\"\n  });\n  /**\r\n   * Current day of the current month.\r\n   * @var {string} currentDay\r\n   */\n\n  var currentDay = dateString.split(\" \")[0];\n  /**\r\n   * Padding days at current day of the previous month.\r\n   * @var {int} paddingDays\r\n   */\n\n  var paddingDays = days.indexOf(currentDay.charAt(0).toUpperCase() + currentDay.slice(1));\n  /**\r\n   * Integer difference between last day of the current month\r\n   * and first [0-6] days of the next month.\r\n   * @var {int} nextMonthDayDifference\r\n   */\n\n  var nextMonthDayDifference = calendarSize - (daysInMonth + paddingDays - 1);\n  var params = {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    dateString: dateString,\n    daysPrevMonth: daysPrevMonth,\n    firstDay: firstDay,\n    nextMonthDayDifference: nextMonthDayDifference,\n    year: year,\n    day: day,\n    month: month\n  };\n  buildTableMarkup(tableId, params, config);\n  addEventToButtons(tableId, config);\n};\n/**\r\n * Build calendar method for bootstrapping the calendar.\r\n * @param {*} tableId\r\n * @param {*} config\r\n */\n\n\nvar buildCalendar = function buildCalendar(tableId) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$disableWeekend = _ref.disableWeekend,\n      disableWeekend = _ref$disableWeekend === void 0 ? true : _ref$disableWeekend,\n      _ref$disableCol = _ref.disableCol,\n      disableCol = _ref$disableCol === void 0 ? [] : _ref$disableCol,\n      _ref$iconNext = _ref.iconNext,\n      iconNext = _ref$iconNext === void 0 ? \"default\" : _ref$iconNext,\n      _ref$iconPrev = _ref.iconPrev,\n      iconPrev = _ref$iconPrev === void 0 ? \"default\" : _ref$iconPrev,\n      _ref$responsive = _ref.responsive,\n      responsive = _ref$responsive === void 0 ? false : _ref$responsive,\n      _ref$year = _ref.year,\n      year = _ref$year === void 0 ? __year : _ref$year,\n      _ref$month = _ref.month,\n      month = _ref$month === void 0 ? __month : _ref$month,\n      _ref$day = _ref.day,\n      day = _ref$day === void 0 ? __day : _ref$day;\n\n  var config = {\n    responsive: responsive,\n    disableWeekend: disableWeekend,\n    iconNext: iconNext,\n    iconPrev: iconPrev,\n    year: year,\n    month: month,\n    day: day,\n    disableCol: disableCol\n  };\n  createTableBody(tableId, config);\n};\n\n\n\n//# sourceURL=webpack://spike-calendar/./src/js/calendar.js?");

/***/ }),

/***/ "./src/js/responsive.js":
/*!******************************!*\
  !*** ./src/js/responsive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Responsive calculation\r\n */\n\n/**\r\n * Media Breakpoints.\r\n */\nvar breakpoints = {\n  minus: 370,\n  little: 576,\n  medium: 767,\n  large: 991,\n  xlarge: 1999\n};\n/**\r\n * Method exported. It resize the calendar cells examining the parent container width.\r\n * @param {*} tableId \r\n */\n\nvar resizeCalendar = function resizeCalendar(tableId) {\n  var tableDiv = document.getElementById(tableId);\n  var tdElements = document.querySelectorAll('.calendar-table td'); // if parentWidth is 0, get the offsetWidth of root parent.\n\n  var parentWidth = tableDiv.parentElement.clientWidth == 0 ? tableDiv.parentElement.offsetWidth : tableDiv.parentElement.clientWidth;\n  console.log(parentWidth);\n  console.log(tableDiv.parentElement.clientWidth);\n\n  if (tableDiv.parentElement) {\n    switch (true) {\n      case parentWidth <= breakpoints.minus:\n        applyResizeClass(\"minus\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.little && parentWidth > breakpoints.minus:\n        applyResizeClass(\"little\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.medium && parentWidth > breakpoints.little:\n        applyResizeClass(\"medium\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.large && parentWidth > breakpoints.medium:\n        applyResizeClass(\"large\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.xlarge && parentWidth > breakpoints.large || parentWidth > breakpoints.xlarge:\n        applyResizeClass(\"xlarge\", tdElements);\n        break;\n    }\n  }\n};\n/**\r\n * Apply the resize class for each td element (calendar cells)\r\n * @param {*} resizeClass \r\n * @param {*} HtmlElement \r\n */\n\n\nvar applyResizeClass = function applyResizeClass(resizeClass, HtmlElement) {\n  if (resizeClass != '') {\n    for (var i = 0; i < HtmlElement.length; i++) {\n      HtmlElement[i].classList.toggle(resizeClass);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCalendar);\n\n//# sourceURL=webpack://spike-calendar/./src/js/responsive.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;