import styled from "styled-components";

export const EWallet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24%;
  background: ${(props) => props.theme.colorDescribeBackground};
  padding: 10px;
  border-radius: 5px;
`

export const Etrf = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ESpan = styled.span`
  margin-left: 10px;
  color: ${(props) => props.theme.colorSideBarText};
`