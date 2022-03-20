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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/calendar */ \"./src/js/calendar.js\");\n\n(0,_js_calendar__WEBPACK_IMPORTED_MODULE_0__.buildCalendar)('calendar-div', {\n  responsive: true,\n  disabledColor: '#eee',\n  disableWeekend: true,\n  shortDays: true,\n  disablePrevMonthDays: true,\n  rangeSelection: true\n});\n\n//# sourceURL=webpack://spike-calendar/./src/index.js?");

/***/ }),

/***/ "./src/js/calendar.js":
/*!****************************!*\
  !*** ./src/js/calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildCalendar\": () => (/* binding */ buildCalendar),\n/* harmony export */   \"createTableBody\": () => (/* binding */ createTableBody)\n/* harmony export */ });\n/* harmony import */ var _responsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive.js */ \"./src/js/responsive.js\");\n/* harmony import */ var _styling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling.js */ \"./src/js/styling.js\");\n/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive.js */ \"./src/js/interactive.js\");\n\n\n\n/**\r\n * Compiled via sass cli\r\n */\n//import \"../scss/_calendar.scss\";\n\nvar months = [\"Gennaio\", \"Febbraio\", \"Marzo\", \"Aprile\", \"Maggio\", \"Giugno\", \"Luglio\", \"Agosto\", \"Settembre\", \"Ottobre\", \"Novembre\", \"Dicembre\"];\nvar days = [\"Lunedì\", \"Martedì\", \"Mercoledì\", \"Giovedì\", \"Venerdì\", \"Sabato\", \"Domenica\"];\nvar shortDays = [\"Lun\", \"Mar\", \"Mer\", \"Giov\", \"Ven\", \"Sab\", \"Dom\"];\nvar date = new Date();\n\nvar __day = date.getDate();\n\nvar __month = date.getMonth();\n\nvar __year = date.getFullYear();\n/**\r\n * This method builds the Days row up to the calendar.\r\n * If ShortDays is true , short days will be shown\r\n * @param {*} hookId\r\n * @param {*} config\r\n */\n\n\nvar generateDaysRow = function generateDaysRow(hookId, config) {\n  var hook = document.getElementById(hookId);\n\n  for (var i = 0; i < days.length; i++) {\n    var th = document.createElement(\"th\");\n    th.innerText = config.shortDays ? shortDays[i] : days[i];\n    th.classList.add(\"dayth\");\n    hook.append(th);\n  }\n};\n/**\r\n * This method generates the main part of the calendar.\r\n * It provide days markup and days display logic computation\r\n * @param {*} params\r\n * @param {*} config\r\n */\n\n\nvar generateTableCells = function generateTableCells() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    daysPrevMonth: daysPrevMonth,\n    nextMonthDayDifference: nextMonthDayDifference\n  };\n  var config = arguments.length > 1 ? arguments[1] : undefined;\n  var nextCounter = 0;\n  var preCounter = params.daysPrevMonth - params.paddingDays;\n  var tb = document.getElementById(\"calTbody\");\n  var date = new Date();\n  var dayNum;\n\n  for (var d = 1; d < params.daysInMonth + params.paddingDays + params.nextMonthDayDifference; d++) {\n    //date.setFullYear(config.year, config.month, d - 1);\n    // Get day cardinality.\n    if (d % days.length == 1) {\n      var tr = document.createElement(\"tr\");\n      tr.classList.add(\"tr-body\");\n      tb.append(tr);\n    }\n\n    var row = document.getElementsByClassName(\"tr-body\");\n    var td = document.createElement(\"td\");\n    var daydiv = void 0;\n\n    if (d > params.paddingDays && d - params.paddingDays <= params.daysInMonth) {\n      dayNum = setDateUnderTd(td, config, date, 0, d - params.paddingDays);\n      daydiv = \"<div class=\\\"\".concat(dayNum == 5 || dayNum == 6 ? \"weday \" : \"day\", \"\\\">\").concat(d - params.paddingDays, \"</div>\").concat(isToday(date) ? \"<div class='today' title='Today'><span></span></div>\" : \"\");\n\n      if (config.disableWeekend && (dayNum == 5 || dayNum == 6)) {\n        td.setAttribute(\"disabled\", \"true\");\n        td.classList.add(\"disabled\");\n      }\n    } else if (d <= params.paddingDays) {\n      dayNum = setDateUnderTd(td, config, date, -1, preCounter + 1);\n      daydiv = \"<div class=\\\"\".concat(dayNum == 5 || dayNum == 6 ? \"weday\" : \"day\", \"\\\">\").concat(++preCounter, \"</div>\");\n\n      if (config.disablePrevMonthDays || config.disableWeekend && (dayNum == 5 || dayNum == 6)) {\n        td.setAttribute(\"disabled\", \"true\");\n        td.classList.add(\"disabled\");\n      }\n\n      td.classList.add('prevMonthDay');\n    } else if (d - params.paddingDays > params.daysInMonth) {\n      dayNum = setDateUnderTd(td, config, date, 1, nextCounter + 1);\n      daydiv = \"<div class=\\\"\".concat(dayNum == 5 || dayNum == 6 ? \"weday\" : \"day\", \"\\\">\").concat(++nextCounter, \"</div>\");\n\n      if (config.disableNextMonthDays || config.disableWeekend && (dayNum == 5 || dayNum == 6)) {\n        td.setAttribute(\"disabled\", \"true\");\n        td.classList.add(\"disabled\");\n      }\n\n      td.classList.add(\"nextMonthDay\");\n    }\n\n    td.innerHTML = daydiv;\n    row[row.length - 1].append(td);\n  }\n};\n/**\r\n * This method calculate the respective date across td \r\n * and set it in data-date attribute.\r\n * Returns the day cardinality of the iterating day\r\n * \r\n * @param {HtmlElement} td \r\n * @param {Object} config \r\n * @param {Date} date \r\n * @param {number} monthOffset \r\n * @param {number} dayOffset \r\n * @param {number} yearOffset \r\n * @returns {number} \r\n * \r\n */\n\n\nvar setDateUnderTd = function setDateUnderTd(td, config, date) {\n  var monthOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var dayOffset = arguments.length > 4 ? arguments[4] : undefined;\n  var yearOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;\n  date.setFullYear(config.year + yearOffset, config.month + monthOffset, dayOffset);\n  td.setAttribute(\"data-date\", date.toLocaleDateString());\n  return dayCardinality(date);\n};\n/**\r\n * This method checks if given date is today\r\n * @param {Date} date \r\n * @returns {boolean}\r\n */\n\n\nvar isToday = function isToday(date) {\n  var today = new Date(Date.now());\n  var t = today.toLocaleDateString();\n  return t == date.toLocaleDateString();\n};\n/**\r\n * Returns the cardinality of the day\r\n * @returns {number}\r\n */\n\n\nvar dayCardinality = function dayCardinality(date) {\n  var stringDay = date.toLocaleDateString(\"it-IT\", {\n    weekday: \"long\"\n  });\n  var dayNum = days.indexOf(stringDay.charAt(0).toUpperCase() + stringDay.slice(1)); //console.log(`${stringDay} - ${dayNum}`);\n\n  return dayNum;\n};\n/**\r\n * Initialization of main part of calendar table.\r\n * It return markup and this will be mounted by buildTableMarkup method.\r\n * @param {*} config\r\n * @returns {HTMLTableElement}\r\n */\n\n\nvar buildCalendarFundamentals = function buildCalendarFundamentals(month, config) {\n  var thead = \"<thead>\\n     <tr id=\\\"calendarDaysRow\\\"></tr>\\n </thead>\";\n  var tbody = \"<tbody id=\\\"calTbody\\\" class=\\\"calendarTbody\\\"></tbody>\";\n  var html = document.createElement(\"table\");\n  html.classList.add(\"table\", \"calendar-table\", \"responsive\");\n  html.innerHTML = \"\\n \".concat(thead, \"\\n \").concat(tbody, \"\\n \");\n  return html;\n};\n/**\r\n * Build colgroups \r\n * @returns {Array<HtmlElement>}\r\n */\n\n\nvar buildColGroups = function buildColGroups() {\n  var colGroups = [];\n  var colGroup = document.createElement('colgroup');\n  colGroup.classList.add('weekend');\n  colGroup.setAttribute(\"span\", \"2\");\n  colGroups.push(colGroup);\n  colGroup = document.createElement('colgroup');\n  colGroup.classList.add(\"weekday\");\n  colGroup.setAttribute(\"span\", \"5\");\n  colGroups.push(colGroup);\n  return colGroups;\n};\n/**\r\n * Returns an object of two HtmlElement. \r\n * ButtonHeading and TextHeading\r\n * @returns {HtmlElement}\r\n */\n\n\nvar buildCalendarHeading = function buildCalendarHeading(month, config) {\n  var buttonsHeading = document.createElement('div');\n  buttonsHeading.classList.add(\"calendarHeadingButtons\");\n  var subButtonHeadingDiv = document.createElement('div');\n  subButtonHeadingDiv.classList.add('calendarHeadingSubButton');\n  var iconPrevElement = document.createElement(\"span\");\n  iconPrevElement.id = \"iconPrevCalendar\";\n  iconPrevElement.innerHTML = config.iconPrev == 'default' ? \"<i class=\\\"bi bi-caret-left-square-fill\\\"></i>\" : config.iconPrev;\n  var iconNextElement = document.createElement(\"span\");\n  iconNextElement.id = \"iconNextCalendar\";\n  iconNextElement.innerHTML = config.iconNext == 'default' ? \"<i class=\\\"bi bi-caret-right-square-fill\\\"></i>\" : config.iconNext;\n  subButtonHeadingDiv.appendChild(iconPrevElement);\n  subButtonHeadingDiv.appendChild(iconNextElement);\n  buttonsHeading.appendChild(subButtonHeadingDiv);\n  var heading = document.createElement('div');\n  heading.classList.add(\"calendarHeading\");\n  var monthText = document.createElement('h2');\n  monthText.innerText = \"\".concat(months[month]);\n  heading.appendChild(monthText);\n  return heading = {\n    buttonsHeading: buttonsHeading,\n    textHeading: heading\n  };\n};\n/**\r\n * \r\n * @param {*} tableId \r\n * @param {*} params \r\n * @param {*} config \r\n */\n\n\nvar buildTableMarkup = function buildTableMarkup(tableId) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    dateString: dateString,\n    daysPrevMonth: daysPrevMonth,\n    firstDay: firstDay,\n    nextMonthDayDifference: nextMonthDayDifference,\n    year: year,\n    month: month,\n    day: day\n  };\n  var config = arguments.length > 2 ? arguments[2] : undefined;\n  var tableDiv = document.getElementById(tableId); //console.log(tableDiv);\n  // Check if wrapper div is already created.\n\n  var calWrap = document.getElementsByClassName(\"calwrapper\")[0]; // if not , it's created and then tableDiv is attached to it.\n\n  if (calWrap === undefined || calWrap.length == 0) {\n    calWrap = document.createElement(\"div\");\n    calWrap.classList.add(\"calwrapper\");\n    tableDiv.insertAdjacentElement(\"beforebegin\", calWrap);\n    calWrap.appendChild(tableDiv);\n  } // Remove all child if any.\n\n\n  while (tableDiv.hasChildNodes()) {\n    tableDiv.removeChild(tableDiv.lastChild);\n  } // Build calendar fundamentals\n\n\n  var html = buildCalendarFundamentals(params.month, config);\n  var heading = buildCalendarHeading(params.month, config); // Hook fundamentals to mount point\n\n  tableDiv.insertAdjacentElement(\"afterbegin\", heading.buttonsHeading); // Build heading parts of calendar\n\n  heading.buttonsHeading.insertAdjacentElement('afterend', heading.textHeading);\n  tableDiv.appendChild(html);\n  buildColGroups().forEach(function (elem) {\n    html.insertAdjacentElement('afterbegin', elem);\n  }); // Generate days row\n\n  generateDaysRow(\"calendarDaysRow\", config); // Generate days cells\n\n  generateTableCells(params, config);\n\n  if (config.responsive == true) {\n    (0,_responsive_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tableId);\n  }\n\n  if (config.weekEndColor != \"default\") {\n    (0,_styling_js__WEBPACK_IMPORTED_MODULE_1__.weekEndColor)(config);\n  }\n\n  if (config.disabledColor != \"default\") {\n    (0,_styling_js__WEBPACK_IMPORTED_MODULE_1__.disabledColor)(config);\n  }\n};\n/**\r\n * Main wrapper method.\r\n * Responsability of this method is to call all methods in correct order\r\n * to build entire calendar.\r\n * @param {*} tableId\r\n * @param {*} config\r\n */\n\n\nvar createTableBody = function createTableBody(tableId, config) {\n  //console.log(config);\n  var year = config.year == null ? __year : config.year;\n  var month = config.month == null ? __month : config.month;\n  var day = config.day == null ? __day : config.day;\n  /**\r\n   * First day of the current month\r\n   * @var {Date} firstDay\r\n   */\n\n  var firstDay = new Date(year, month, 1);\n  /**\r\n   * Number of days in the current month\r\n   * @var {Date} daysInMonth\r\n   */\n\n  var daysInMonth = new Date(year, month + 1, 0).getDate();\n  /**\r\n   * Number of days of previous month\r\n   * @var {Date} daysPrevMonth\r\n   */\n\n  var daysPrevMonth = new Date(year, month, 0).getDate();\n  /**\r\n   * Calendar matrix size\r\n   * @var {number} calendarSize\r\n   */\n\n  var calendarSize = days.length * 6;\n  /**\r\n   * Date in string format of the first day of the current month.\r\n   * @var {string} dateString\r\n   */\n\n  var dateString = firstDay.toLocaleDateString(\"it-IT\", {\n    weekday: \"long\",\n    year: \"numeric\",\n    month: \"numeric\",\n    day: \"numeric\"\n  });\n  /**\r\n   * Current day of the current month.\r\n   * @var {string} currentDay\r\n   */\n\n  var currentDay = dateString.split(\" \")[0];\n  /**\r\n   * Padding days at current day of the previous month.\r\n   * @var {number} paddingDays\r\n   */\n\n  var paddingDays = days.indexOf(currentDay.charAt(0).toUpperCase() + currentDay.slice(1));\n  /**\r\n   * Integer difference between last day of the current month\r\n   * and first [0-6] days of the next month.\r\n   * @var {number} nextMonthDayDifference\r\n   */\n\n  var nextMonthDayDifference = calendarSize - (daysInMonth + paddingDays - 1);\n  var params = {\n    daysInMonth: daysInMonth,\n    paddingDays: paddingDays,\n    currentDay: currentDay,\n    dateString: dateString,\n    daysPrevMonth: daysPrevMonth,\n    firstDay: firstDay,\n    nextMonthDayDifference: nextMonthDayDifference,\n    year: year,\n    day: day,\n    month: month\n  };\n  buildTableMarkup(tableId, params, config);\n  (0,_interactive_js__WEBPACK_IMPORTED_MODULE_2__.addEventToButtons)(tableId, config);\n};\n/**\r\n * Build calendar method for bootstrapping the calendar.\r\n * @param {string} tableId\r\n * @param {*} config\r\n */\n\nvar buildCalendar = function buildCalendar(tableId) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$disableWeekend = _ref.disableWeekend,\n      disableWeekend = _ref$disableWeekend === void 0 ? false : _ref$disableWeekend,\n      _ref$disableCol = _ref.disableCol,\n      disableCol = _ref$disableCol === void 0 ? [] : _ref$disableCol,\n      _ref$iconNext = _ref.iconNext,\n      iconNext = _ref$iconNext === void 0 ? \"default\" : _ref$iconNext,\n      _ref$iconPrev = _ref.iconPrev,\n      iconPrev = _ref$iconPrev === void 0 ? \"default\" : _ref$iconPrev,\n      _ref$responsive = _ref.responsive,\n      responsive = _ref$responsive === void 0 ? false : _ref$responsive,\n      _ref$rangeSelection = _ref.rangeSelection,\n      rangeSelection = _ref$rangeSelection === void 0 ? false : _ref$rangeSelection,\n      _ref$borderCollapse = _ref.borderCollapse,\n      borderCollapse = _ref$borderCollapse === void 0 ? false : _ref$borderCollapse,\n      _ref$borderColor = _ref.borderColor,\n      borderColor = _ref$borderColor === void 0 ? false : _ref$borderColor,\n      _ref$borderSpacing = _ref.borderSpacing,\n      borderSpacing = _ref$borderSpacing === void 0 ? false : _ref$borderSpacing,\n      _ref$shortDays = _ref.shortDays,\n      shortDays = _ref$shortDays === void 0 ? false : _ref$shortDays,\n      _ref$disablePrevMonth = _ref.disablePrevMonthDays,\n      disablePrevMonthDays = _ref$disablePrevMonth === void 0 ? false : _ref$disablePrevMonth,\n      _ref$disableNextMonth = _ref.disableNextMonthDays,\n      disableNextMonthDays = _ref$disableNextMonth === void 0 ? false : _ref$disableNextMonth,\n      _ref$weekEndColor = _ref.weekEndColor,\n      weekEndColor = _ref$weekEndColor === void 0 ? \"default\" : _ref$weekEndColor,\n      _ref$disabledColor = _ref.disabledColor,\n      disabledColor = _ref$disabledColor === void 0 ? \"default\" : _ref$disabledColor,\n      _ref$year = _ref.year,\n      year = _ref$year === void 0 ? __year : _ref$year,\n      _ref$month = _ref.month,\n      month = _ref$month === void 0 ? __month : _ref$month,\n      _ref$day = _ref.day,\n      day = _ref$day === void 0 ? __day : _ref$day;\n\n  var config = {\n    responsive: responsive,\n    disableWeekend: disableWeekend,\n    iconNext: iconNext,\n    iconPrev: iconPrev,\n    rangeSelection: rangeSelection,\n    borderCollapse: borderCollapse,\n    borderColor: borderColor,\n    borderSpacing: borderSpacing,\n    shortDays: shortDays,\n    disableNextMonthDays: disableNextMonthDays,\n    disablePrevMonthDays: disablePrevMonthDays,\n    weekEndColor: weekEndColor,\n    disabledColor: disabledColor,\n    year: year,\n    month: month,\n    day: day,\n    disableCol: disableCol\n  };\n  createTableBody(tableId, config);\n};\n\n\n\n//# sourceURL=webpack://spike-calendar/./src/js/calendar.js?");

/***/ }),

/***/ "./src/js/interactive.js":
/*!*******************************!*\
  !*** ./src/js/interactive.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MONTH\": () => (/* binding */ MONTH),\n/* harmony export */   \"addEventToButtons\": () => (/* binding */ addEventToButtons)\n/* harmony export */ });\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ \"./src/js/calendar.js\");\n\nvar MONTH = 11;\n/**\r\n * Add event to buttons for interaction\r\n * @param {*} tableId\r\n * @param {*} params\r\n */\n\nvar addEventToButtons = function addEventToButtons(tableId, params) {\n  var iconPrevButton = document.getElementById(\"iconPrevCalendar\");\n  var iconNextButton = document.getElementById(\"iconNextCalendar\");\n\n  if (params.rangeSelection) {\n    rangeSelection();\n  }\n\n  iconPrevButton.addEventListener(\"click\", function () {\n    params.month = params.month > 0 ? params.month - 1 : MONTH;\n    (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createTableBody)(tableId, params);\n  });\n  iconNextButton.addEventListener(\"click\", function () {\n    params.month = params.month < MONTH ? params.month + 1 : 0;\n    (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.createTableBody)(tableId, params);\n  });\n};\n/**\r\n * This function builds the range selection functionality.\r\n */\n\nvar rangeSelection = function rangeSelection() {\n  var dataCells = document.querySelectorAll(\"[data-date]\");\n  var busySelecting = false;\n  var selectedDays = [];\n  var firstIndex,\n      lastIndex,\n      currentIndex = 0;\n\n  var _loop = function _loop(i) {\n    dataCells[i].addEventListener(\"click\", function (evt) {});\n    dataCells[i].addEventListener(\"mousedown\", function (evt) {\n      document.getElementsByTagName(\"body\")[0].style.userSelect = \"none\";\n      busySelecting = true;\n\n      if (!dataCells[i].classList.contains(\"disabled\")) {\n        firstIndex = lastIndex = i;\n        selectedDays.push(evt.target); // Remove selected items if any.\n\n        removeSelectedClass();\n        dataCells[i].classList.add(\"selected\", \"firstSelect\");\n      }\n    });\n    dataCells[i].addEventListener(\"mouseover\", function (evt) {\n      if (busySelecting && !dataCells[i].classList.contains(\"disabled\") && firstIndex <= i) {\n        currentIndex = i;\n        lastIndex = lastIndex == 0 ? currentIndex : Math.max(currentIndex, lastIndex);\n        selectedDays.push(dataCells[i]);\n        dataCells[i].classList.add(\"selected\");\n\n        if (firstIndex + 1 < i) {\n          for (var d = i - 1; d > firstIndex; d--) {\n            dataCells[d].classList.add(\"selected\");\n          }\n        }\n\n        if (lastIndex > currentIndex) {\n          for (var _d = lastIndex; _d > currentIndex; _d--) {\n            console.log(_d);\n\n            dataCells[_d].classList.remove(\"selected\");\n          }\n        }\n      }\n\n      evt.target.classList.add(\"hover\");\n    });\n    dataCells[i].addEventListener(\"mouseup\", function (evt) {\n      busySelecting = false;\n      document.getElementsByTagName(\"body\")[0].style.userSelect = \"auto\";\n      console.log(selectedDays);\n      var firstDay = selectedDays[0].attributes[0].value; // On mouse up, clean selected days array.\n\n      selectedDays = []; // Display popup if dataCell[i] doesn't contain a disabled class\n      // and if firstDay selected is less than finalDay selected for \n      // prevent the pre firstDay selection\n\n      if (!dataCells[i].classList.contains(\"disabled\") && convertDate(firstDay, \"/\", \"/\").getTime() <= convertDate(dataCells[i].attributes[0].value, \"/\", \"/\").getTime()) {\n        var lastDay = dataCells[i].attributes[0].value; // Before display event modal, check if is already present. If it is, remove it and rebuild.\n\n        removeEventModal(); //showBootstrapModal(firstDay, lastDay);\n\n        buildEventModal(firstDay, lastDay);\n      }\n    }); // If return back with mouse and ri-hoverize selected days, pop it from array and remove selected class\n\n    dataCells[i].addEventListener(\"mouseleave\", function (evt) {\n      evt.target.classList.remove(\"hover\");\n\n      if (evt.target.classList.contains(\"selected\") && busySelecting && !evt.target.classList.contains(\"firstSelect\") && i > firstIndex) {\n        dataCells[i].classList.remove(\"selected\");\n        selectedDays.pop();\n        lastIndex--; //console.log(selectedDays);\n      }\n    });\n  };\n\n  for (var i = 0; i < dataCells.length; i++) {\n    _loop(i);\n  }\n};\n/**\r\n * Returns a string date into a Date format object\r\n * @param {string} dateString \r\n * @param {char} separatorIn \r\n * @param {char} separatorOut \r\n * @returns {Date}\r\n */\n\n\nvar convertDate = function convertDate(dateString, separatorIn, separatorOut) {\n  var explose = dateString.split(separatorIn);\n  return new Date(\"\".concat(explose[1]).concat(separatorOut).concat(explose[0]).concat(separatorOut).concat(explose[2]));\n};\n/**\r\n * Remove selected class from td elements\r\n * @returns {void}\r\n */\n\n\nvar removeSelectedClass = function removeSelectedClass() {\n  var selectedItems = document.querySelectorAll(\"td.selected\");\n\n  if (selectedItems) {\n    selectedItems.forEach(function (elem) {\n      elem.classList.remove(\"selected\");\n\n      if (elem.classList.contains(\"firstSelect\")) {\n        elem.classList.remove(\"firstSelect\");\n      }\n    });\n  }\n};\n/**\r\n * Display event modal\r\n * @param {Date} firstDate\r\n * @param {Date} lastDate\r\n */\n\n\nvar buildEventModal = function buildEventModal(firstDate, lastDate) {\n  // SpikeCalendarEvent\n  var spikeCEV = document.createElement(\"div\");\n  spikeCEV.classList.add(\"spikeCalendarEvent\"); // SpikeCalendarEventContent\n\n  var spikeCEVC = document.createElement(\"div\");\n  spikeCEVC.classList.add(\"spikeCalendarEventContent\");\n  var h3 = document.createElement(\"h3\");\n  h3.classList.add(\"spikeCalendarTitleHeading\");\n  h3.innerText = \"Crea evento\"; // SpikeCalendarWrapper\n\n  var spikeCEVW = document.createElement(\"div\");\n  spikeCEVW.classList.add(\"spikeCalendarEventWrapper\");\n  var inputDateRow = buildBootstrapRow();\n  var firstDateElem = buildCalendarInputDate(\"spikeCalendarEventDateInputStart\", firstDate, \"spikeEventCalInputDateGroup\", \"Inizio\", \"spikeCalendarEventDateInput\");\n  var lastDateElem = buildCalendarInputDate(\"spikeCalendarEventDateInputEnd\", lastDate, \"spikeEventCalInputDateGroup\", \"Fine\", \"spikeCalendarEventDateInput\");\n  inputDateRow.appendChild(firstDateElem);\n  inputDateRow.appendChild(lastDateElem); // Row title\n\n  var eventTitleRow = buildBootstrapRow();\n  eventTitleRow.appendChild(buildCalendarInputDate(\"spikeCalendarEventTitleInput\", false, false, \"Titolo evento\", \"spikeEventCalInputTitle\", \"spikeEventTitleInputField\")); // TextArea\n\n  var textAreaRow = buildBootstrapRow(\"spikeCalendarEventTextRow\", \"spikeCalendarRow\");\n  textAreaRow.appendChild(buildTextArea(\"spikeCalendarEventTxtNote\", \"Note\", \"spikeCalendarEventTextArea\", \"spikeCalendarEventTextAreaGroup\")); // Buttons row\n\n  var buttonsRow = buildBootstrapRow(false, \"spikeModalButtonRow\");\n  buttonsRow.appendChild(buildButton(\"spikeCalendarEventClose\", \"Chiudi\", true, \"spikeEventWrapButton\", \"btn\", \"btn-warning\"));\n  buttonsRow.appendChild(buildButton(\"spikeCalendarEventSubmit\", \"Crea\", true, \"spikeEventWrapButton\", \"btn\", \"btn-success\"));\n  spikeCEVC.appendChild(h3);\n  spikeCEV.appendChild(spikeCEVC);\n  spikeCEVC.appendChild(spikeCEVW);\n  spikeCEVW.appendChild(inputDateRow);\n  spikeCEVW.appendChild(eventTitleRow);\n  spikeCEVW.appendChild(textAreaRow);\n  spikeCEVW.appendChild(buttonsRow);\n  appendChildToBody(spikeCEV); // Obscure overlay\n\n  var obs = buildBodyObs();\n  appendChildToBody(obs);\n  bindEventModalButtons();\n};\n\nvar removeEventModal = function removeEventModal() {\n  var modal = document.getElementById(\"__spikeModal\");\n\n  if (modal) {\n    var body = document.getElementsByTagName(\"body\")[0];\n    body.removeChild(modal);\n  }\n};\n/**\r\n * Return an Obscure overlay for the body.\r\n * @returns {HtmlElement}\r\n */\n\n\nvar buildBodyObs = function buildBodyObs() {\n  var obs = document.createElement(\"div\");\n  obs.classList.add(\"spikeCalendarObs\");\n  var body = document.getElementsByTagName(\"body\")[0];\n  body.style.position = \"relative\";\n  body.style.overflowY = \"hidden\";\n  return obs;\n};\n/**\r\n * Returns a spikeEventCalInputDateGroup element\r\n * @param {string} id\r\n * @returns {HTMLElement}\r\n */\n\n\nvar buildCalendarInputDate = function buildCalendarInputDate(id) {\n  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var textLabel = arguments.length > 3 ? arguments[3] : undefined;\n  var groupClass = arguments.length > 4 ? arguments[4] : undefined;\n  var itemClass = arguments.length > 5 ? arguments[5] : undefined;\n  var spikeEventCalInputDateGroup = document.createElement(\"div\");\n  spikeEventCalInputDateGroup.classList.add(groupClass);\n  var label = document.createElement(\"label\");\n  label.setAttribute(\"for\", id);\n  label.innerText = textLabel;\n  var input = document.createElement(\"input\");\n  input.classList.add(\"form-control\", itemClass);\n\n  if (date !== false) {\n    input.setAttribute(\"value\", date);\n  }\n\n  if (disabled) {\n    input.setAttribute(\"disabled\", \"true\");\n  }\n\n  spikeEventCalInputDateGroup.appendChild(label);\n  spikeEventCalInputDateGroup.appendChild(input);\n  return spikeEventCalInputDateGroup;\n};\n/**\r\n * This method appends an htmlElement to the body\r\n * @param {HtmlElement} htmlElement\r\n */\n\n\nvar appendChildToBody = function appendChildToBody(htmlElement) {\n  var body = document.getElementsByTagName(\"body\")[0];\n  body.appendChild(htmlElement);\n};\n/**\r\n * This method builds a TextArea Html element\r\n * @param {string} id\r\n * @param {string} textLabel\r\n * @param {string} itemClass\r\n * @param {string} groupClass\r\n */\n\n\nvar buildTextArea = function buildTextArea(id, textLabel, itemClass, groupClass) {\n  var group = document.createElement(\"div\");\n  group.classList.add(groupClass);\n  var label = document.createElement(\"label\");\n  label.setAttribute(\"for\", id);\n  label.innerText = textLabel;\n  var textArea = document.createElement(\"textarea\");\n  textArea.id = id;\n  textArea.classList.add(\"form-control\", itemClass);\n  group.appendChild(label);\n  group.appendChild(textArea);\n  return group;\n};\n/**\r\n * Returns a Html button\r\n * @param {string} id\r\n * @param {string} text\r\n * @param  {...string} itemClass\r\n * @returns {HtmlElement}\r\n */\n\n\nvar buildButton = function buildButton(id, text) {\n  var wrapper = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var wrapperClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var button = document.createElement(\"button\");\n  button.id = id;\n\n  for (var _len = arguments.length, itemClass = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {\n    itemClass[_key - 4] = arguments[_key];\n  }\n\n  button.innerText = text, itemClass.forEach(function (elem) {\n    button.classList.add(elem);\n  });\n\n  if (wrapper) {\n    var wrap = document.createElement(\"div\");\n    wrap.appendChild(button);\n\n    if (wrapperClass) {\n      wrap.classList.add(wrapperClass);\n    }\n\n    return wrap;\n  }\n\n  return button;\n};\n/**\r\n * Returns a Bootstrap row\r\n * @param {string} id\r\n * @param {string} text\r\n * @param  {...string} itemClass\r\n * @returns {HtmlElement}\r\n */\n\n\nvar buildBootstrapRow = function buildBootstrapRow() {\n  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n\n  for (var _len2 = arguments.length, itemClass = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n    itemClass[_key2 - 1] = arguments[_key2];\n  }\n\n  itemClass.forEach(function (c) {\n    row.classList.add(c);\n  });\n  return row;\n};\n\nvar bindEventModalButtons = function bindEventModalButtons() {\n  var closeButton = document.getElementById(\"spikeCalendarEventClose\");\n  var submitButton = document.getElementById(\"spikeCalendarEventSubmit\");\n  closeButton.addEventListener(\"click\", function (evt) {\n    var spikeCalendarEvent = document.getElementsByClassName(\"spikeCalendarEvent\")[0];\n    var spikeCalendarObs = document.getElementsByClassName(\"spikeCalendarObs\")[0];\n    var body = document.getElementsByTagName(\"body\")[0];\n    body.style.position = \"unset\";\n    body.style.overflowY = \"scroll\";\n    body.removeChild(spikeCalendarEvent);\n    body.removeChild(spikeCalendarObs);\n  });\n};\n\n//# sourceURL=webpack://spike-calendar/./src/js/interactive.js?");

/***/ }),

/***/ "./src/js/responsive.js":
/*!******************************!*\
  !*** ./src/js/responsive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Responsive calculation\r\n */\n\n/**\r\n * Media Breakpoints.\r\n */\nvar breakpoints = {\n  minus: 370,\n  little: 576,\n  medium: 767,\n  large: 991,\n  xlarge: 1999\n};\n/**\r\n * Method exported. It resize the calendar cells examining the parent container width.\r\n * @param {*} tableId \r\n */\n\nvar resizeCalendar = function resizeCalendar(tableId) {\n  var tableDiv = document.getElementById(tableId);\n  var tdElements = document.querySelectorAll('.calendar-table td'); // if parentWidth is 0, get the offsetWidth of root parent.\n\n  var parentWidth = tableDiv.parentElement.clientWidth == 0 ? tableDiv.parentElement.offsetWidth : tableDiv.parentElement.clientWidth;\n  console.log(parentWidth);\n  console.log(tableDiv.parentElement.clientWidth);\n\n  if (tableDiv.parentElement) {\n    switch (true) {\n      case parentWidth <= breakpoints.minus:\n        applyResizeClass(\"minus\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.little && parentWidth > breakpoints.minus:\n        applyResizeClass(\"little\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.medium && parentWidth > breakpoints.little:\n        applyResizeClass(\"medium\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.large && parentWidth > breakpoints.medium:\n        applyResizeClass(\"large\", tdElements);\n        break;\n\n      case parentWidth <= breakpoints.xlarge && parentWidth > breakpoints.large || parentWidth > breakpoints.xlarge:\n        applyResizeClass(\"xlarge\", tdElements);\n        break;\n    }\n  }\n};\n/**\r\n * Apply the resize class for each td element (calendar cells)\r\n * @param {*} resizeClass \r\n * @param {*} HtmlElement \r\n */\n\n\nvar applyResizeClass = function applyResizeClass(resizeClass, HtmlElement) {\n  if (resizeClass != '') {\n    for (var i = 0; i < HtmlElement.length; i++) {\n      HtmlElement[i].classList.toggle(resizeClass);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCalendar);\n\n//# sourceURL=webpack://spike-calendar/./src/js/responsive.js?");

/***/ }),

/***/ "./src/js/styling.js":
/*!***************************!*\
  !*** ./src/js/styling.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"disabledColor\": () => (/* binding */ disabledColor),\n/* harmony export */   \"weekEndColor\": () => (/* binding */ weekEndColor)\n/* harmony export */ });\n/**\r\n * Styling options\r\n */\nvar weekEndColor = function weekEndColor(config) {\n  var colGroup = document.querySelector('.weekend');\n  colGroup.style.background = config.weekEndColor;\n};\nvar disabledColor = function disabledColor(config) {\n  if (config.disabledColor != \"default\") {\n    var disabledElements = document.getElementsByClassName('disabled');\n\n    for (var i = 0; i < disabledElements.length; i++) {\n      disabledElements[i].style.background = config.disabledColor;\n    }\n  }\n};\n\n//# sourceURL=webpack://spike-calendar/./src/js/styling.js?");

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