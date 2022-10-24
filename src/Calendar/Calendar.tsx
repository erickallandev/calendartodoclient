import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt';
import './App.styles.css';
import buildCalendar from './buildCalendar';
import { dayStyles, beforeToday } from './styles';
import {CalendarHeader} from './CalendarHeader';

export default function Calendar() {
    moment.locale('pt');
    const [calendar, setCalendar] = useState<moment.Moment[][]>([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

    const Events = [{
        Titulo: 'Evento 1',
        Descrição: 'Descrição do evento 1',
        Data_inicio: moment(new Date(2022, 9, 21)).format('L'),
        Hora_inicio: '18:50'
    }, 
    {
        Titulo: 'Evento 2',
        Descrição: 'Descrição do evento 2',
        Data_inicio: moment(new Date(2022, 9, 21)).format('L'),
        Hora_inicio: '19:50'
    },
    {
        Titulo: 'Evento 3',
        Descrição: 'Descrição do evento 3',
        Data_inicio: moment(new Date(2022, 9, 23)).format('L'),
        Hora_inicio: '08:00'
    }]

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
                                            {Events.map((item, index) => (
                                                day.format('L') === item.Data_inicio ? 
                                                <div className='EventMark'>
                                                    <div>{item.Titulo}</div>
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