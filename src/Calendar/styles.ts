import moment from "moment";

function isSelected(day: moment.Moment, value: moment.Moment) {
    return value.isSame(day, "day");
}

export function beforeToday(day: moment.Moment) {
    return day.isBefore(new Date(), "day");
}

function isToday(day: moment.Moment) {
    return day.isSame(new Date(), "day");
}

export function dayStyles(day: moment.Moment, value: moment.Moment) {
    if (beforeToday (day)) return 'before';
    if (isSelected (day, value)) return 'selected';
    if (isToday (day)) return 'today';
    return ''
}