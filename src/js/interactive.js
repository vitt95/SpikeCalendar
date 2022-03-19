import { createTableBody } from "./calendar";
export const MONTH = 11;

/**
 * Add event to buttons for interaction
 * @param {*} tableId
 * @param {*} params
 */
export const addEventToButtons = (tableId, params) => {
  const iconPrevButton = document.getElementById("iconPrevCalendar");
  const iconNextButton = document.getElementById("iconNextCalendar");

  if (params.rangeSelection) {
    rangeSelection();
  }

  iconPrevButton.addEventListener("click", () => {
    params.month = params.month > 0 ? params.month - 1 : MONTH;
    createTableBody(tableId, params);
  });

  iconNextButton.addEventListener("click", () => {
    params.month = params.month < MONTH ? params.month + 1 : 0;
    createTableBody(tableId, params);
  });
};

/**
 * This function builds the range selection functionality.
 */
const rangeSelection = () => {
  const dataCells = document.querySelectorAll("[data-date]");

  let busySelecting = false;
  let selectedDays = [];
  let firstIndex = 0;
  let lastIndex = 0;
  let currentIndex = 0;

  for (let i = 0; i < dataCells.length; i++) {
    dataCells[i].addEventListener("click", (evt) => {});

    dataCells[i].addEventListener("mousedown", (evt) => {
      document.getElementsByTagName("body")[0].style.userSelect = "none";
      busySelecting = true;
      if (!dataCells[i].classList.contains("disabled")) {
        firstIndex = lastIndex = i;
        selectedDays.push(evt.target);
        // Remove selected items if any.
        removeSelectedClass();
        dataCells[i].classList.add("selected", "firstSelect");
      }
    });

    dataCells[i].addEventListener("mouseover", (evt) => {
      if (
        busySelecting &&
        !dataCells[i].classList.contains("disabled") &&
        firstIndex < i
      ) {
        currentIndex = i;
        lastIndex = lastIndex == 0 ? currentIndex : Math.max(currentIndex, lastIndex);
        console.log(`Last index : ${lastIndex}`);
        evt.target.classList.add("selected");
        if (firstIndex + 1 < i) {
          for (let d = i; d > firstIndex; d--) {
            dataCells[d].classList.add("selected");
            //selectedDays.push(dataCells[d]);
          }
        }
        if(lastIndex > currentIndex){
          for(let d = lastIndex; d > currentIndex; d-- ){
            dataCells[d].classList.remove("selected");
          }
        } 
        selectedDays.push(evt.target);
      }

      console.log(selectedDays);

      evt.target.classList.add("hover");
    });

    dataCells[i].addEventListener("mouseup", (evt) => {
      busySelecting = false;
      document.getElementsByTagName("body")[0].style.userSelect = "auto";

      let firstDay = selectedDays[0].attributes[0].value;
      let lastDay = selectedDays[selectedDays.length - 1].attributes[0].value;

      console.log(`Giorni selezionati ${selectedDays.length}`);

      // On mouse up, clean selected days array.
      selectedDays = [];

      // Display popup
      if (!dataCells[i].classList.contains("disabled")) {
        // Before display event modal, check if is already present. If it is, remove it and rebuild.
        removeEventModal();
        //showBootstrapModal(firstDay, lastDay);
        buildEventModal(firstDay, lastDay);
      }
    });

    // If return back with mouse and ri-hoverize selected days, pop it from array and remove selected class
    dataCells[i].addEventListener("mouseleave", (evt) => {
      evt.target.classList.remove("hover");
      if (
        evt.target.classList.contains("selected") &&
        busySelecting &&
        !evt.target.classList.contains("firstSelect") &&
        i > firstIndex
      ) {
        evt.target.classList.remove("selected");
        selectedDays.pop();
        lastIndex--;
        console.log(selectedDays);
      }
    });
  }
};



const removeSelectedClass = () => {
  let selectedItems = document.querySelectorAll("td.selected");
  if (selectedItems) {
    selectedItems.forEach((elem) => {
      elem.classList.remove("selected");
      if (elem.classList.contains("firstSelect")) {
        elem.classList.remove("firstSelect");
      }
    });
  }
}


/**
 * Display event modal
 * @param {Date} firstDate
 * @param {Date} lastDate
 */

const buildEventModal = (firstDate, lastDate) => {
  // SpikeCalendarEvent
  let spikeCEV = document.createElement("div");
  spikeCEV.classList.add("spikeCalendarEvent");

  // SpikeCalendarEventContent
  let spikeCEVC = document.createElement("div");
  spikeCEVC.classList.add("spikeCalendarEventContent");

  let h3 = document.createElement("h3");
  h3.classList.add("spikeCalendarTitleHeading");
  h3.innerText = "Crea evento";

  // SpikeCalendarWrapper
  let spikeCEVW = document.createElement("div");
  spikeCEVW.classList.add("spikeCalendarEventWrapper");

  let inputDateRow = buildBootstrapRow();

  let firstDateElem = buildCalendarInputDate(
    "spikeCalendarEventDateInputStart",
    firstDate,
    "spikeEventCalInputDateGroup",
    "Inizio",
    "spikeCalendarEventDateInput"
  );
  let lastDateElem = buildCalendarInputDate(
    "spikeCalendarEventDateInputEnd",
    lastDate,
    "spikeEventCalInputDateGroup",
    "Fine",
    "spikeCalendarEventDateInput"
  );

  inputDateRow.appendChild(firstDateElem);
  inputDateRow.appendChild(lastDateElem);

  // Row title
  let eventTitleRow = buildBootstrapRow();
  eventTitleRow.appendChild(
    buildCalendarInputDate(
      "spikeCalendarEventTitleInput",
      false,
      false,
      "Titolo evento",
      "spikeEventCalInputTitle",
      "spikeEventTitleInputField"
    )
  );

  // TextArea
  let textAreaRow = buildBootstrapRow(
    "spikeCalendarEventTextRow",
    "spikeCalendarRow"
  );
  textAreaRow.appendChild(
    buildTextArea(
      "spikeCalendarEventTxtNote",
      "Note",
      "spikeCalendarEventTextArea",
      "spikeCalendarEventTextAreaGroup"
    )
  );

  // Buttons row
  let buttonsRow = buildBootstrapRow(false, "spikeModalButtonRow");
  buttonsRow.appendChild(
    buildButton(
      "spikeCalendarEventClose",
      "Chiudi",
      true,
      "spikeEventWrapButton",
      "btn",
      "btn-warning"
    )
  );
  buttonsRow.appendChild(
    buildButton(
      "spikeCalendarEventSubmit",
      "Crea",
      true,
      "spikeEventWrapButton",
      "btn",
      "btn-success"
    )
  );

  spikeCEVC.appendChild(h3);
  spikeCEV.appendChild(spikeCEVC);
  spikeCEVC.appendChild(spikeCEVW);
  spikeCEVW.appendChild(inputDateRow);
  spikeCEVW.appendChild(eventTitleRow);
  spikeCEVW.appendChild(textAreaRow);
  spikeCEVW.appendChild(buttonsRow);

  appendChildToBody(spikeCEV);

  // Obscure overlay
  let obs = buildBodyObs();

  appendChildToBody(obs);

  bindEventModalButtons();
};

const removeEventModal = () => {
  let modal = document.getElementById("__spikeModal");
  if (modal) {
    let body = document.getElementsByTagName("body")[0];
    body.removeChild(modal);
  }
};

/**
 * Return an Obscure overlay for the body.
 * @returns {HtmlElement}
 */
const buildBodyObs = () => {
  let obs = document.createElement("div");
  obs.classList.add("spikeCalendarObs");
  let body = document.getElementsByTagName("body")[0];
  body.style.position = "relative";
  body.style.overflowY = "hidden";

  return obs;
};

/**
 * Returns a spikeEventCalInputDateGroup element
 * @param {string} id
 * @returns {HTMLElement}
 */
const buildCalendarInputDate = (
  id,
  date = false,
  disabled = false,
  textLabel,
  groupClass,
  itemClass
) => {
  let spikeEventCalInputDateGroup = document.createElement("div");
  spikeEventCalInputDateGroup.classList.add(groupClass);

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = textLabel;

  let input = document.createElement("input");
  input.classList.add("form-control", itemClass);
  if (date !== false) {
    input.setAttribute("value", date);
  }
  if (disabled) {
    input.setAttribute("disabled", "true");
  }
  spikeEventCalInputDateGroup.appendChild(label);
  spikeEventCalInputDateGroup.appendChild(input);

  return spikeEventCalInputDateGroup;
};

/**
 * This method appends an htmlElement to the body
 * @param {HtmlElement} htmlElement
 */
const appendChildToBody = (htmlElement) => {
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(htmlElement);
};

/**
 * This method builds a TextArea Html element
 * @param {string} id
 * @param {string} textLabel
 * @param {string} itemClass
 * @param {string} groupClass
 */
const buildTextArea = (id, textLabel, itemClass, groupClass) => {
  let group = document.createElement("div");
  group.classList.add(groupClass);

  let label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = textLabel;

  let textArea = document.createElement("textarea");
  textArea.id = id;
  textArea.classList.add("form-control", itemClass);

  group.appendChild(label);
  group.appendChild(textArea);

  return group;
};

/**
 * Returns a Html button
 * @param {string} id
 * @param {string} text
 * @param  {...string} itemClass
 * @returns {HtmlElement}
 */
const buildButton = (
  id,
  text,
  wrapper = false,
  wrapperClass = false,
  ...itemClass
) => {
  let button = document.createElement("button");
  button.id = id;
  (button.innerText = text),
    itemClass.forEach((elem) => {
      button.classList.add(elem);
    });

  if (wrapper) {
    let wrap = document.createElement("div");
    wrap.appendChild(button);
    if (wrapperClass) {
      wrap.classList.add(wrapperClass);
    }
    return wrap;
  }

  return button;
};

/**
 * Returns a Bootstrap row
 * @param {string} id
 * @param {string} text
 * @param  {...string} itemClass
 * @returns {HtmlElement}
 */
const buildBootstrapRow = (id = false, ...itemClass) => {
  let row = document.createElement("div");
  row.classList.add("row");

  itemClass.forEach((c) => {
    row.classList.add(c);
  });

  return row;
};

const bindEventModalButtons = () => {
  const closeButton = document.getElementById("spikeCalendarEventClose");
  const submitButton = document.getElementById("spikeCalendarEventSubmit");

  closeButton.addEventListener("click", (evt) => {
    const spikeCalendarEvent =
      document.getElementsByClassName("spikeCalendarEvent")[0];
    const spikeCalendarObs =
      document.getElementsByClassName("spikeCalendarObs")[0];
    const body = document.getElementsByTagName("body")[0];

    body.style.position = "unset";
    body.style.overflowY = "scroll";
    body.removeChild(spikeCalendarEvent);
    body.removeChild(spikeCalendarObs);
  });
};
