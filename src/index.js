import { buildCalendar } from './js/calendar';

buildCalendar('calendar-div', {
    responsive: true,   
    rangeSelection: true,
    disabledColor: '#eee',
    disableWeekend: true,
    shortDays: true
})

