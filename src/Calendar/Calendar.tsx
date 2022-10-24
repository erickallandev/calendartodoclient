import { useState, useEffect } from 'react';
import { Props } from "./CalendarTypes";
import { EventType } from "./CalendarTypes";
import moment from 'moment';
import 'moment/locale/pt';
import './App.styles.css';
import buildCalendar from './buildCalendar';
import { dayStyles, beforeToday } from './styles';
import {CalendarHeader} from './CalendarHeader';

export default function Calendar({ value, setValue }: Props, eventsList: EventType[]) {
    moment.locale('pt');
    const [calendar, setCalendar] = useState<moment.Moment[][]>([]);

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

    return (
        <div className='display'>
            <div className='calendar'>
            <CalendarHeader value={value} setValue={setValue} />
                <div className="body">
                    {
                        calendar.map(week => <div className='week'>
                            {
                                week.map(day =>
                                    <div className='day' onClick={() => !beforeToday(day) && setValue(day)}>
                                        <div className={dayStyles(day, value)}> 
                                            <div className='dia'>{day.format("DD").toString()}</div>
                                        </div>
                                    </div>)
                            }
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}