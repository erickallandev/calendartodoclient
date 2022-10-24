import { Props } from "./CalendarTypes";
import * as C from '../App.styled';
import arrow from '../assets/images/icons/arrow.png';


export function CalendarHeader({ value, setValue }: Props) {

    function currMonthName() {
        return value.format("MMMM");
    }

    function currYear() {
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month")
    }

    function nextMonth() {
        return value.clone().add(1, "month")
    }

    function thisMonth() {
        return value.isSame(new Date(), 'month')
    }

    return (

        <C.CalendarHeader>
            <C.CalendarHeader1>
                <C.Icon onClick={() => !thisMonth() && setValue(prevMonth())}>
                    <C.ImageArrowL src={arrow} alt='' />
                </C.Icon>
                <C.CalendarTitle>
                    {currMonthName().toUpperCase()} - {currYear()}
                </C.CalendarTitle>
                <C.Icon onClick={() => setValue(nextMonth())}>
                    <C.ImageArrowR src={arrow} alt='' />
                </C.Icon>
            </C.CalendarHeader1>
            <C.CalendarHeader2>
                <C.Weekday>
                    Dom
                </C.Weekday>
                <C.Weekday>
                    Seg
                </C.Weekday>
                <C.Weekday>
                    Ter
                </C.Weekday>
                <C.Weekday>
                    Qua
                </C.Weekday>

                <C.Weekday>
                    Qui
                </C.Weekday>
                <C.Weekday>
                    Sex
                </C.Weekday>
                <C.Weekday>
                    Sáb
                </C.Weekday>
            </C.CalendarHeader2>
        </C.CalendarHeader>

    )
}
