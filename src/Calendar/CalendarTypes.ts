import moment from "moment"

export type Props = {
    value: moment.Moment,
    setValue: any
}

export type CalendarProps = {
    value: moment.Moment,
    onChange: any
}

export type EventType = {
    id?: number,
    title?: string,
    description?: string,
    date?: string,
    timestart?: string,
    timeend?: string
}