import { buildCalendar } from './js/calendar';

buildCalendar('calendar-div', {
    responsive: true,   
    disabledColor: '#eee',
    disableWeekend: true,
    shortDays: true,
    disablePrevMonthDays: true,
    rangeSelection: true,
})

