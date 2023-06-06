import styled from "styled-components";

export const Todolist = styled.div`
  background: ${(props) => props.theme.colorTodolistBackground};
  border-radius: 7px;
  font-size: 14px;
  padding: 10px;
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colorHeadText};
`

