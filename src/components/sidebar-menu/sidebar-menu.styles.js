import styled from 'styled-components';

export const Home = styled.div`
  padding: 10px 13px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorSideBarMenuText};
  cursor: pointer;
  margin: 2px 12% 2px 5%;
  border-radius: 12px;
  font-weight: bold;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

  :hover {
    background: #353945;
    color: white;
    mix-blend-mode: normal;
    border-radius: 12px;
  }
`

export const HomeText = styled.span`
  font-family: Inter;
  padding-left: 15px;
  font-size: 14px;
`