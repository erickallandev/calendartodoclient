import * as C from './App.styled';
import Calendar from './Calendar';
import { useState } from 'react';
import moment from 'moment';



const App = () => {
   let dateToday = new Date().toLocaleDateString('pt-Br', {
        dateStyle: 'full'
    });

    const [addEventOn, setAddEventOn] = useState(false);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');
    const [newDate, setNewDate] = useState<string>('');
    const [newTimeStart, setNewTimeStart] = useState<string>('');
    const [newTimeEnd, setNewTimeEnd] = useState<string>('');

    const handleClickAddEventOff = () => {
        setAddEventOn(false)
        setNewTitle('');
        setNewDescription('');
        setNewDate('');
        setNewTimeStart('');
        setNewTimeEnd('');
    }

    const onSubmitNewEvent = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const body = {
                title: newTitle,
                description: newDescription,
                date: moment(newDate).format('YYYY-MM-DD').toString(),
                timestart: newTimeStart,
                timeend: newTimeEnd
            };
            await fetch("https://calendartodoproject.herokuapp.com/todos", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(body);
            setNewTitle('');
            setNewDescription('');
            setNewDate('');
            setNewTimeStart('');
            setNewTimeEnd('');
            setAddEventOn(false);
        } catch (err: unknown) {
            if(err instanceof Error) {
                return {
                    message: `Ocorreu um erro ao adicionar o novo evento. (${err.message})`
                }
            }
        }
    }

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
                            <C.Button onClick={() => setAddEventOn(true)}>
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
                    <C.CalendarInput addEventOn={addEventOn}>
                        <C.CIHeader>
                            Cadastrar nova tarefa
                        </C.CIHeader>
                        <C.CIInputArea>
                            <C.Form onSubmit={onSubmitNewEvent}>
                                <C.Input type='text' placeholder='Insira o título da tarefa' required value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                                <C.Input type='text' placeholder='Insira a descrição da tarefa' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                                <C.Input type='date' placeholder='Insira a data da tarefa' required value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                                <C.Input type='time' placeholder='Insira o horário do início da tarefa' required value={newTimeStart} onChange={(e) => setNewTimeStart(e.target.value)} />
                                <C.Input type='time' placeholder='Insira o horário de encerramento da tarefa' required value={newTimeEnd} onChange={(e) => setNewTimeEnd(e.target.value)} />
                                <C.ButtonsArea>
                                    <C.Button1 onClick={handleClickAddEventOff}>Cancelar</C.Button1>
                                    <C.Button2>Salvar</C.Button2>
                                </C.ButtonsArea>
                            </C.Form>
                        </C.CIInputArea>

                    </C.CalendarInput>
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