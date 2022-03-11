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
  let lastIndex;

  for (let i = 0; i < dataCells.length; i++) {
    dataCells[i].addEventListener("click", (evt) => {
      //console.log(evt.target.attributes[0].nodeValue);
    });

    dataCells[i].addEventListener("mousedown", (evt) => {
      document.getElementsByTagName("body")[0].style.userSelect = "none";
      busySelecting = true;
      selectedDays.push(evt.target);
      if (!dataCells[i].classList.contains("disabled")) {
        lastIndex = i;
        //console.log(selectedDays.length);
        selectedDays.forEach((elem) => {
          elem.classList.remove("selected");
        });

        dataCells[i].classList.add("selected");
      }
    });

    dataCells[i].addEventListener("mouseover", (evt) => {
      if (
        busySelecting &&
        !dataCells[i].classList.contains("disabled") &&
        lastIndex < i
      ) {
        evt.target.classList.add("selected");
        //console.log(`Last index + 1: ${lastIndex + 1}`);
        //console.log(`Current index : ${i}`);
        if (lastIndex + 1 < i) {
          console.log(lastIndex + 1);
          for (let d = i; d > lastIndex; d--) {
            dataCells[d].classList.add("selected");
            selectedDays.push(dataCells[d]);
          }
        }
        selectedDays.push(evt.target);
      }

      evt.target.classList.add("hover");
      //console.log(evt.target);
    });

    dataCells[i].addEventListener("mouseup", (evt) => {
      busySelecting = false;
      document.getElementsByTagName("body")[0].style.userSelect = "auto";

      let firstDay = selectedDays[0].attributes[0].value;
      let lastDay = selectedDays[selectedDays.length - 1].attributes[0].value;

      // Display popup
      if (!dataCells[i].classList.contains("disabled")) {
        alert(`Event for \n${firstDay} - ${lastDay}`);
      }
    });

    dataCells[i].addEventListener("mouseleave", (evt) => {
      evt.target.classList.remove("hover");
    });
  }
};
