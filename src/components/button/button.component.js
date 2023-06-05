import React from "react";
import { Buy, BuyButton, Initials, UserBuy } from "./button.styles";

const SalesButton = (props) => {
    return(
        <Buy>
            <UserBuy>
                <Initials>{props.initial}</Initials>
                <span>$0.90</span>
            </UserBuy>
            <BuyButton>Buy $XYZ</BuyButton>
        </Buy>   
    )
};

export default SalesButton;