import styled from 'styled-components';

export const Edit = styled.div`
    border-left: 3px solid #242731;
    width: 30%;
    min-height: 84.3vh;
    padding: 17px 18px;
`;

export const FirstChild = styled.span`
    font-size: 12px;
    padding-right: 8px;
    color: #808191;
`

export const SecondChild = styled.span`
    font-size: 15px;
`

export const TaskName = styled.input`
  display: block;
  width: 100%;
  height: 8%;
  padding-left: 10px;
  margin: auto;
  background: #242731;
  color: #A6A6A6;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 20px;
  font-family: Poppins;
`

export const TaskDescription = styled.textarea`
  display: block;
  width: 100%;
  margin: auto;
  padding: 10px;
  background: #242731;
  color: #808191;
  margin-top: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  font-family: Inter;
`
export const SaveTodo = styled.button`
  width: 90%;
  display: block;
  margin: auto;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-family: Inter;
  font-weight: bold;
  background: ${(props) => props.theme.colorHeadBackground};
  color: ${(props) => props.theme.colorHeadText};
  cursor: pointer;
`