import * as C from './App.styled';
import arrow from './assets/images/icons/arrow.png';

const App = () => {

    let todos = [
        {
            "id": 1,
            "title": "Tarefa de teste",
            "description": "Descrição da tarefa de teste",
            "date": "2022-10-21",
            "timestart": "21:02",
            "timeend": "21:23"
        },
        {
            "id": 2,
            "title": "Tarefa de teste",
            "description": "Descrição da tarefa de teste",
            "date": "2022-10-22",
            "timestart": "21:02",
            "timeend": "21:23"
        },
        {
            "id": 3,
            "title": "Atividade 3",
            "description": "Descrição da atividade 3",
            "date": "2022-10-27",
            "timestart": "10:00",
            "timeend": "11:00"
        }
    ]

    return(
        <C.Container>
            <C.Screen>
                <C.BoxCalendar>
                    <C.BoxCalendarHeader>
                        <C.Title>
                            Applaneje-se
                        </C.Title>
                        <C.Subtitle>
                            Sábado, 22 de Outubro de 2022 || 15:40:21
                        </C.Subtitle>
                    </C.BoxCalendarHeader>
                    <C.Calendar>
                        <C.CalendarHeader>
                            <C.CalendarHeader1>
                                <C.Icon>
                                    <C.ImageArrowL src={arrow} alt='' />
                                </C.Icon>
                                <C.CalendarTitle>
                                    Outubro - 2022
                                </C.CalendarTitle>
                                <C.Icon>
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
                        <C.CalendarBody>

                        </C.CalendarBody>
                    </C.Calendar>
                </C.BoxCalendar>
                <C.BoxSide>
                    <C.BoxSideSearch>
                        <C.SearchBox>
                            <C.SearchInput type='text' placeholder='Busque aqui a sua atividade' />
                        </C.SearchBox>
                    </C.BoxSideSearch>
                    <C.TodoList>
                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 1 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 2 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 3 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 4 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 5 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 6 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 7 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 8 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>

                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 9 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>
                        <C.TodoItem>
                            <C.ItemTitle>
                                Título da atividade 10 (Duração: 2 horas)
                            </C.ItemTitle>
                            <C.ItemSubtitle>
                                Subtítulo da atividade 1
                            </C.ItemSubtitle>
                            <C.ItemDatetime>
                                08:00 - 10:00 | 22/10/2022
                            </C.ItemDatetime>
                        </C.TodoItem>
                    </C.TodoList>
                </C.BoxSide>
            </C.Screen>
        </C.Container>
    );
}

export default App