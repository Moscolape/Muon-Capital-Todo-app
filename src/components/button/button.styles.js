import styled from 'styled-components';

export const Buy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    position: fixed;
    left: 2%;
    bottom: 12%;
    width: 19%;
    font-family: Inter;
`

export const UserBuy = styled.div`
    display: flex;
    align-items: center;
    background: #353945;
    border-radius: 5px;
    padding: 5px 15px;
    cursor: pointer;
`

export const BuyButton = styled.button`
    background: #A3E3FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    color: #3772FF;
    padding: 7px 13px;
    border-radius: 5px;
    cursor: pointer;
`

export const Initials = styled.span`
    background: #3772FF;
    padding: 2px 5px;
    margin-right: 8px;
    font-size: 10px;
    border-radius: 50%;
`
