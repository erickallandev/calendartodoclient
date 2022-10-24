import * as C from './App.styled';
import { useState } from 'react';
import Calendar from './Calendar';


const App = () => {
   let dateToday = new Date().toLocaleDateString('pt-Br', {
        dateStyle: 'full'
    });

    return (
    
        <C.Container>
            <C.Screen>
                <C.BoxCalendar>
                    <C.BoxCalendarHeader>
                        <C.Title>
                            Applaneje-se
                        </C.Title>

                        <C.BoxSubheader>
                            <C.Subtitle>
                                {dateToday}
                            </C.Subtitle>
                            <C.Button>
                                +
                            </C.Button>
                            <C.Button>
                                Mês
                            </C.Button>
                            <C.Button>
                                Semana
                            </C.Button>
                            <C.Button>
                                Dia
                            </C.Button>
                        </C.BoxSubheader>
                    </C.BoxCalendarHeader>
                    <C.Calendar>
                        <Calendar />
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