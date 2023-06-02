import React from "react";

const SalesButton = (props) => {
    return(
        <div className="buy">
            <div className="user-buy">
                <span className="initial">{props.initial}</span>
                <span>$0.90</span>
            </div>
            <button>Buy $XYZ</button>
        </div>   
    )
};

export default SalesButton;