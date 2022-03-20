import resizeCalendar from "./responsive.js";
import { weekEndColor, disabledColor } from "./styling.js";
import { addEventToButtons, MONTH } from "./interactive.js";
/**
 * Compiled via sass cli
 */
//import "../scss/_calendar.scss";

const months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const days = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

const shortDays = ["Lun", "Mar", "Mer", "Giov", "Ven", "Sab", "Dom"];

const date = new Date();
const __day = date.getDate();
const __month = date.getMonth();
const __year = date.getFullYear();

/**
 * This method builds the Days row up to the calendar.
 * If ShortDays is true , short days will be shown
 * @param {*} hookId
 * @param {*} config
 */
const generateDaysRow = (hookId, config) => {
  let hook = document.getElementById(hookId);
  for (let i = 0; i < days.length; i++) {
    let th = document.createElement("th", );
    th.innerText = config.shortDays ? shortDays[i] : days[i];
    th.classList.add("dayth");
    hook.append(th);
  }
};

/**
 * This method generates the main part of the calendar.
 * It provide days markup and days display logic computation
 * @param {*} params
 * @param {*} config
 */
const generateTableCells = (
  params = {
    daysInMonth,
    paddingDays,
    currentDay,
    daysPrevMonth,
    nextMonthDayDifference,
  },
  config
) => {
  let nextCounter = 0;
  let preCounter = params.daysPrevMonth - params.paddingDays;
  let tb = document.getElementById("calTbody");
  let date = new Date();
  let dayNum;
  
  for (
    let d = 1;
    d < params.daysInMonth + params.paddingDays + params.nextMonthDayDifference;
    d++
  ) {
    if (d % days.length == 1) {
      let tr = document.createElement("tr");
      tr.classList.add("tr-body");
      tb.append(tr);
    }
    let row = document.getElementsByClassName("tr-body");
    let td = document.createElement("td");
    let daydiv;
    if (
      d > params.paddingDays &&
      d - params.paddingDays <= params.daysInMonth
    ) {
      dayNum = setDateUnderTd(td, config, date, 0, (d-params.paddingDays));
      daydiv = `<div class="${dayNum.dayCardinality == 5 || dayNum.dayCardinality == 6 ? "weday " : "day"}">${
        d - params.paddingDays
      }</div>${isToday(date) ? "<div class='today' title='Today'><span></span></div>" : ""}`;

      if(config.disableWeekend && (dayNum.dayCardinality == 5 || dayNum.dayCardinality == 6)){
        td.setAttribute("disabled", "true");
        td.classList.add("disabled");
      }
    } else if (d <= params.paddingDays) {
      dayNum = setDateUnderTd(td, config, date, -1, (preCounter + 1))
      daydiv = `<div class="${dayNum.dayCardinality == 5 || dayNum.dayCardinality == 6 ? "weday" : "day"}">${++preCounter}</div>`;
      
      // If is set disablePrevMonthDays , will be disabled only days previous 
      // the current month.
      if((config.disablePrevMonthDays 
        && dayNum.monthCardinality < __month )
        || (config.disableWeekend && (dayNum.dayCardinality == 5 || dayNum.dayCardinality == 6))){
        console.log(dayNum.monthCardinality);
        td.setAttribute("disabled", "true");
        td.classList.add("disabled"); 
      }
      td.classList.add('prevMonthDay');
    
    } else if (d - params.paddingDays > params.daysInMonth) {
      dayNum = setDateUnderTd(td, config, date, 1, (nextCounter + 1))
      daydiv = `<div class="${dayNum.dayCardinality == 5 || dayNum.dayCardinality == 6 ? "weday" : "day"}">${++nextCounter}</div>`;
      if(config.disableNextMonthDays || (config.disableWeekend && (dayNum.dayCardinality == 5 || dayNum.dayCardinality == 6))){
        td.setAttribute("disabled", "true");
        td.classList.add("disabled");
      }
      td.classList.add("nextMonthDay");
    }
    td.innerHTML = daydiv;
    row[row.length - 1].append(td);
  }
};

/**
 * This method calculate the respective date across td 
 * and set it in data-date attribute.
 * Returns the day cardinality of the iterating day
 * 
 * @param {HtmlElement} td 
 * @param {Object} config 
 * @param {Date} date 
 * @param {number} monthOffset 
 * @param {number} dayOffset 
 * @param {number} yearOffset 
 * @returns {Object} 
 * 
 */
const setDateUnderTd = (
  td,
  config,
  date,
  monthOffset = 0,
  dayOffset,
  yearOffset = 0,
) => {
  date.setFullYear(
    config.year + yearOffset,
    config.month + monthOffset,
    dayOffset
  );
  td.setAttribute("data-date", date.toLocaleDateString());
  
  return {
    dayCardinality: dayCardinality(date),
    monthCardinality: config.month + monthOffset
  }
};

/**
 * This method checks if given date is today
 * @param {Date} date 
 * @returns {boolean}
 */
const isToday = (date) => { 
  let today = new Date(Date.now());
  let t = today.toLocaleDateString();
  return t == date.toLocaleDateString();
}


/**
 * Returns the cardinality of the day
 * @returns {number}
 */
const dayCardinality = (date) => {
  let stringDay = date.toLocaleDateString("it-IT", {
    weekday: "long",
  });

  let dayNum = days.indexOf(
    stringDay.charAt(0).toUpperCase() + stringDay.slice(1)
  );
  //console.log(`${stringDay} - ${dayNum}`);

  return dayNum;
};

/**
 * Initialization of main part of calendar table.
 * It return markup and this will be mounted by buildTableMarkup method.
 * @param {*} config
 * @returns {HTMLTableElement}
 */
const buildCalendarFundamentals = (month, config) => {
  let thead = `<thead>
     <tr id="calendarDaysRow"></tr>
 </thead>`;

  let tbody = `<tbody id="calTbody" class="calendarTbody"></tbody>`;

  let html = document.createElement("table");
  html.classList.add("table", "calendar-table", "responsive");

  html.innerHTML = `
 ${thead}
 ${tbody}
 `;

  return html;
};


/**
 * Build colgroups 
 * @returns {Array<HtmlElement>}
 */

const buildColGroups = () => {
  let colGroups = [];

  let colGroup = document.createElement('colgroup');
  colGroup.classList.add('weekend');
  colGroup.setAttribute("span", "2");
  colGroups.push(colGroup);

  colGroup = document.createElement('colgroup');
  colGroup.classList.add("weekday");
  colGroup.setAttribute("span", "5");
  colGroups.push(colGroup);

  return colGroups;
}



/**
 * Returns an object of two HtmlElement. 
 * ButtonHeading and TextHeading
 * @returns {HtmlElement}
 */

const buildCalendarHeading = (month, config) => {

  let buttonsHeading = document.createElement('div');
  buttonsHeading.classList.add("calendarHeadingButtons");
  let subButtonHeadingDiv = document.createElement('div');
  subButtonHeadingDiv.classList.add('calendarHeadingSubButton');

  let iconPrevElement = document.createElement("span");
  iconPrevElement.id = "iconPrevCalendar";
  iconPrevElement.innerHTML = config.iconPrev == 'default' ? `<i class="bi bi-caret-left-square-fill"></i>` : config.iconPrev;

  let iconNextElement = document.createElement("span");
  iconNextElement.id = "iconNextCalendar";
  iconNextElement.innerHTML = config.iconNext == 'default' ? `<i class="bi bi-caret-right-square-fill"></i>` : config.iconNext;

  subButtonHeadingDiv.appendChild(iconPrevElement);
  subButtonHeadingDiv.appendChild(iconNextElement);

  buttonsHeading.appendChild(subButtonHeadingDiv);

  let heading = document.createElement('div');
  heading.classList.add("calendarHeading");

  let monthText = document.createElement('h2');
  // Month display
  monthText.innerText = `${months[month]}`;
  heading.appendChild(monthText);

  return heading = {
    buttonsHeading : buttonsHeading,
    textHeading : heading,
  };
}



/**
 * 
 * @param {*} tableId 
 * @param {*} params 
 * @param {*} config 
 */
const buildTableMarkup = (
  tableId,
  params = {
    daysInMonth,
    paddingDays,
    currentDay,
    dateString,
    daysPrevMonth,
    firstDay,
    nextMonthDayDifference,
    year,
    month,
    day,
  },
  config
) => {
  let tableDiv = document.getElementById(tableId);
  //console.log(tableDiv);
  // Check if wrapper div is already created.
  let calWrap = document.getElementsByClassName("calwrapper")[0];

  // if not , it's created and then tableDiv is attached to it.
  if (calWrap === undefined || calWrap.length == 0) {
    calWrap = document.createElement("div");
    calWrap.classList.add("calwrapper");
    tableDiv.insertAdjacentElement("beforebegin", calWrap);
    calWrap.appendChild(tableDiv);
  }

  // Remove all child if any.
  while (tableDiv.hasChildNodes()) {
    tableDiv.removeChild(tableDiv.lastChild);
  }

  // Build calendar fundamentals
  let html = buildCalendarFundamentals(params.month, config);

  let heading = buildCalendarHeading(params.month, config);

  // Hook fundamentals to mount point
  tableDiv.insertAdjacentElement("afterbegin", (heading.buttonsHeading));

  // Build heading parts of calendar
  heading.buttonsHeading.insertAdjacentElement('afterend', heading.textHeading);

  tableDiv.appendChild(html);

  buildColGroups().forEach(elem => {
    html.insertAdjacentElement('afterbegin',elem);
  });

  // Generate days row
  generateDaysRow("calendarDaysRow", config);

  // Generate days cells
  generateTableCells(params, config);

  if (config.responsive == true) {
    resizeCalendar(tableId);
  }

  if (config.weekEndColor != "default") {
    weekEndColor(config);
  }

  if (config.disabledColor != "default") {
    disabledColor(config);
  }
};

/**
 * Main wrapper method.
 * Responsability of this method is to call all methods in correct order
 * to build entire calendar.
 * @param {*} tableId
 * @param {*} config
 */

export const createTableBody = (tableId, config) => {
  //console.log(config);
  let year = config.year == null ? __year : config.year;
  let month = config.month == null ? __month : config.month;
  let day = config.day == null ? __day : config.day;

  /**
   * First day of the current month
   * @var {Date} firstDay
   */
  let firstDay = new Date(year, month, 1);

  /**
   * Number of days in the current month
   * @var {Date} daysInMonth
   */
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  /**
   * Number of days of previous month
   * @var {Date} daysPrevMonth
   */
  let daysPrevMonth = new Date(year, month, 0).getDate();

  /**
   * Calendar matrix size
   * @var {number} calendarSize
   */
  const calendarSize = days.length * 6;

  /**
   * Date in string format of the first day of the current month.
   * @var {string} dateString
   */
  let dateString = firstDay.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  /**
   * Current day of the current month.
   * @var {string} currentDay
   */
  let currentDay = dateString.split(" ")[0];

  /**
   * Padding days at current day of the previous month.
   * @var {number} paddingDays
   */
  let paddingDays = days.indexOf(
    currentDay.charAt(0).toUpperCase() + currentDay.slice(1)
  );

  /**
   * Integer difference between last day of the current month
   * and first [0-6] days of the next month.
   * @var {number} nextMonthDayDifference
   */
  let nextMonthDayDifference = calendarSize - (daysInMonth + paddingDays - 1);

  let params = {
    daysInMonth,
    paddingDays,
    currentDay,
    dateString,
    daysPrevMonth,
    firstDay,
    nextMonthDayDifference,
    year,
    day,
    month,
  };

  buildTableMarkup(tableId, params, config);
  addEventToButtons(tableId, config);
};

/**
 * Build calendar method for bootstrapping the calendar.
 * @param {string} tableId
 * @param {*} config
 */
const buildCalendar = (
  tableId,
  {
    disableWeekend = false,
    disableCol = [],
    iconNext = "default",
    iconPrev = "default",
    responsive = false,
    rangeSelection = false,
    borderCollapse = false,
    borderColor = false,
    borderSpacing = false,
    shortDays = false,
    disablePrevMonthDays = false,
    disableNextMonthDays = false,
    weekEndColor = "default",
    disabledColor = "default",
    year = __year,
    month = __month,
    day = __day,
  } = {}
) => {
  let config = {
    responsive,
    disableWeekend,
    iconNext,
    iconPrev,
    rangeSelection,
    borderCollapse,
    borderColor,
    borderSpacing,
    shortDays,
    disableNextMonthDays,
    disablePrevMonthDays,
    weekEndColor,
    disabledColor,
    year,
    month,
    day,
    disableCol,
  };

  createTableBody(tableId, config);
};

export { buildCalendar };
