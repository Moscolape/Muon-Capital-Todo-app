import styled from "styled-components";

export const TopSideBar = styled.div`
  width: 100%;
  height: 7%;
  padding: 25px;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserOnly = styled.div`
  display: flex;
  align-items: center;
`

export const Initials = styled.span`
  background: #3772FF;
  padding: 3px 7px;
  margin-right: 8px;
  font-size: 15px;
  border-radius: 50%;
`

export const Slide = styled.span`
  cursor: pointer;
`

export const Username = styled.span`
    font-size: 20px;
    color: ${(props) => props.theme.colorSideBarText};
`