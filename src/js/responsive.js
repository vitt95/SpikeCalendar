/**
 * Responsive calculation
 */


/**
 * Media Breakpoints.
 */
const breakpoints = {
    minus : 370,
    little : 576,
    medium : 767,
    large : 991,
    xlarge : 1999,
};


/**
 * Method exported. It resize the calendar cells examining the parent container width.
 * @param {*} tableId 
 */
const resizeCalendar = (tableId) => {
    const tableDiv = document.getElementById(tableId);
    const tdElements = document.querySelectorAll('.calendar-table td');

    // if parentWidth is 0, get the offsetWidth of root parent.
    let parentWidth = tableDiv.parentElement.clientWidth == 0 ? tableDiv.parentElement.offsetWidth : tableDiv.parentElement.clientWidth;
    
    if(tableDiv.parentElement){
        switch(true){
            case ( parentWidth <= breakpoints.minus) :
                applyResizeClass("minus", tdElements);
            break;
            
            case ( parentWidth <= breakpoints.little && parentWidth > breakpoints.minus) :
                applyResizeClass("little", tdElements);
            break;

            case ( parentWidth <= breakpoints.medium && parentWidth > breakpoints.little) : 
                applyResizeClass("medium", tdElements);
            break;

            case ( parentWidth <= breakpoints.large && parentWidth > breakpoints.medium) : 
                applyResizeClass("large", tdElements);
            break;

            case ( (parentWidth <= breakpoints.xlarge && parentWidth > breakpoints.large) || parentWidth > breakpoints.xlarge) : 
                applyResizeClass("xlarge", tdElements);
            break;
        }
    }
};


/**
 * Apply the resize class for each td element (calendar cells)
 * @param {*} resizeClass 
 * @param {*} HtmlElement 
 */
const applyResizeClass = (resizeClass, HtmlElement) => {
    if(resizeClass != ''){
        for(let i = 0; i < HtmlElement.length; i++){
            HtmlElement[i].classList.toggle(resizeClass);
        }
    }
};


export default resizeCalendar;