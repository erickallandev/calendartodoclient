import moment from "moment";

export default function buildCalendar(value: moment.Moment) {
    const startDay = value.clone().startOf("month").startOf("week").day(0);
    const endDay = value.clone().endOf("month").endOf("week").day(-1);

    const day = startDay.clone().subtract(1, "day");
    const calendar: moment.Moment[][] = [];
    while(day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7)
            .fill(0)
            .map(() => day.add(1, "day").clone())
        );
    }

    return calendar
}