import styled from 'styled-components';

export const Container = styled.div`
    background-color: #16425B;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 90%;
`

export const BoxCalendar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 72.5%;
`;

export const BoxCalendarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 20%;
    width: 95%;
    color: #FFF;
`;

export const BoxSubheader = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Lobster';
    font-size: 4rem;
`;

export const Subtitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    font-family: 'verdana';
    font-size: 1.2rem;
    letter-spacing: 1px;
`;  

export const Button = styled.div`
    padding: 15px 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #3A7CA5;
    margin-left: 10px;
    margin-bottom: -20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: 0.1s;
        :hover{
            margin-bottom: -10px;
        }
`;

export const Calendar = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
`;

export const CalendarHeader = styled.div`
    background-color: #3A7CA5;
    width: 100%;
    height: 15%;
    margin-bottom: 2px;
    border-top-left-radius: 20px;
`;

export const CalendarHeader1 = styled.div`
    width: 90%;
    height: 60%;
    margin: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CalendarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-size: 1.1rem;
    font-weight: 600;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
        scale: 1.1;
    }

`;

export const ImageArrowL = styled.img`
    width: 100%;
    transform: rotate(180deg);
`;

export const ImageArrowR = styled.img`
    width: 100%;
`;

export const CalendarHeader2 = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Weekday = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-weight: 600;
    color: #fff;
`;

export const CalendarBody = styled.div`
    background-color: #FFF;
    width: 95%;
    height: 90%;
`;

export const BoxSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 27.5%;
`;

export const BoxSideSearch = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const SearchBox = styled.div`
    border: 5px solid #3A7CA5;
    height: 50px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`;

export const SearchInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border-radius: 20px;
    border-color: transparent;
    outline: none;
    color: #fff;
    text-align: center;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #fff;
        text-align: center;
        opacity: 0.7;
    }
`;

export const TodoList = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    overflow-y: auto;
`;

export const TodoItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    min-height: 70px;
    background-color: #3A7CA5;
    font-size: 0.8rem;
    color: #FFF;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
        :nth-child(2n) {
            background-color: #1D5676;
        }
`;

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex;
    justify-content: flex-start;
    width: 80%;
`;

export const ItemTitle = styled.div`
    width: 95%;
    margin-left: 5%;
    font-weight: 700;
`;

export const ItemSubtitle = styled.div`
    width: 95%;
    margin-left: 5%;
`;

export const ItemDatetime = styled.div`
    width: 95%;
    margin-left: 5%;
`;

export const ItemButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
`;

export const ItemButtonExcluir = styled.div`
    width: 20px;
    height: 20px;
    background-color: #F00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
        :hover {
            border: 1px solid #F00;
        }
`;



export const CalendarInput = styled.div<{addEventOn: boolean}>`
    display: ${p => (p.addEventOn ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 50%;
    height: 400px;
    position: absolute;
    background-color: #FFF;
    box-shadow: 0 0 30px #000;
    z-index: 20;
`;

export const CIHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 20%;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: #3A7CA5;
`;

export const CIInputArea = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const Input = styled.input`
    height: 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    text-align: center;
`;

export const ButtonsArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button2 = styled.button`
    padding: 9px 20px;
    background-color: #3A7CA5;
    width: 50%;
    border-radius: 20px;
    border: 2px solid #3A7CA5;
    cursor: pointer;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    transition: 0.3s;
        :hover {
            border: 2px solid #FFF;
        }
`;

export const Button1 = styled.button`
    padding: 9px 20px;
    background-color: #FFF;
    width: 50%;
    border-radius: 20px;
    border: 2px solid #808080;
    cursor: pointer;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    color: #808080;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
`;