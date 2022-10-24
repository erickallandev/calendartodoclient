import { useState, useEffect } from 'react';
import moment from 'moment';
import { Props } from "./CalendarTypes";
import { EventType } from "./CalendarTypes";
import 'moment/locale/pt';
import './styles.ts';
import buildCalendar from './buildCalendar';
import { dayStyles, beforeToday } from './styles';
import { CalendarHeader } from './CalendarHeader';
import './styles.calendar.css';

export default function Calendar({ value, setValue }: Props) {
    moment.locale('pt');
    const [eventsList, setEventsList] = useState<EventType[]>();
    const [calendar, setCalendar] = useState<moment.Moment[][]>([]);

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

    const getEvents = async () => {
        try {
            const response = await fetch('https://calendartodoproject.herokuapp.com/todos');
            const jsonData = await response.json();
            setEventsList(jsonData.todos);
        } catch (err: unknown) {
            if(err instanceof Error) {
                return {
                    message: `Ocorreu um erro ao carregar os eventos. (${err.message})`
                }
            }
        }
    }
    
    useEffect(() => {
        getEvents();
    }, [eventsList]);

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
                                        
                                                {eventsList && eventsList.length > 1 &&
                                                eventsList.map((item, index) => (
                                                day.format('YYYY-MM-DD') === (item.date) ? 
                                                <div className='EventMark'>
                                                    <div key={index}>{item.title}</div>
                                                </div>
                                                :
                                                ''
                                            ))}

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