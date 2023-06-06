import styled from 'styled-components';

export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5.3%;
    background: ${(props) => props.theme.colorHeadBackground};
    color: ${(props) => props.theme.colorHeadText};
    font-size: 14px;
    font-family: Poppins;
    position: fixed;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    box-shadow: ${(props) => props.theme.shadowHead};
`