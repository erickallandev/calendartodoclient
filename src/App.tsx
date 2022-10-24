import * as C from './App.styled';
import Calendar from './Calendar';
import { useState } from 'react';
import moment from 'moment';
import { EventType } from './Calendar/CalendarTypes';
import { useEffect } from 'react';


const App = () => {
    let dateToday = new Date().toLocaleDateString('pt-Br', {
        dateStyle: 'full'
    });

    const [value, setValue] = useState(moment());
    const [addEventOn, setAddEventOn] = useState(false);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');
    const [newDate, setNewDate] = useState<string>('');
    const [newTimeStart, setNewTimeStart] = useState<string>('');
    const [newTimeEnd, setNewTimeEnd] = useState<string>('');
    const [allEvents, setAllEvents] = useState<EventType[]>();
    const [filteredEvents, setFilteredEvents] = useState<EventType[]>();

    const handleClickAddEventOff = () => {
        setAddEventOn(false)
        setNewTitle('');
        setNewDescription('');
        setNewDate('');
        setNewTimeStart('');
        setNewTimeEnd('');
    }

    const getEvents = async () => {
        try {
            const response = await fetch('https://calendartodoproject.herokuapp.com/todos');
            const jsonData = await response.json();
            setAllEvents(jsonData.todos);
        } catch (err: unknown) {
            if (err instanceof Error) {
                return {
                    message: `Ocorreu um erro ao carregar os eventos. (${err.message})`
                }
            }
        }
    }

    const handleDeleteTodo = async (id: any) => {
        try {
            await fetch(`https://calendartodoproject.herokuapp.com/todos/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
            });

        } catch (err: unknown) {
            if (err instanceof Error) {
                return {
                    message: `Ocorreu um erro ao carregar os eventos. (${err.message})`
                }
            }
        }
    }

    useEffect(() => {
        getEvents();
    }, [allEvents, filteredEvents]);

    const onSubmitNewEvent = async (e: React.FormEvent) => {
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
            if (err instanceof Error) {
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
                        <Calendar value={value} setValue={setValue} />
                    </C.Calendar>
                </C.BoxCalendar>
                <C.BoxSide>
                    <C.BoxSideSearch>
                        <C.SearchBox>
                            <C.SearchInput type='text' placeholder='Busque aqui a sua atividade' />
                        </C.SearchBox>
                    </C.BoxSideSearch>
                    <C.TodoList>

                        {allEvents &&
                            allEvents.map((item, index) => (
                                <C.TodoItem key={index}>
                                    <C.ItemDetails>
                                        <C.ItemTitle>
                                            {item.title}
                                        </C.ItemTitle>
                                        <C.ItemSubtitle>
                                            {item.description}
                                        </C.ItemSubtitle>
                                        <C.ItemDatetime>
                                            {moment(item.date).format('DD/MM/YYYY')} || {item.timestart} - {item.timeend}
                                        </C.ItemDatetime>
                                    </C.ItemDetails>
                                    <C.ItemButtons>
                                        <C.ItemButtonExcluir onClick={() => handleDeleteTodo(item.id)}>X</C.ItemButtonExcluir>
                                    </C.ItemButtons>
                                </C.TodoItem>
                            ))
                        }

                    </C.TodoList>
                </C.BoxSide>
            </C.Screen>
        </C.Container>
    );
}

export default App