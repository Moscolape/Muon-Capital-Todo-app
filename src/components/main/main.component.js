import React from "react";

import { ReactComponent as Wallet } from "../../assets/Wallet.svg";
import Todos from "../todos/todos.component";

const Main = () => {
    return(
        <div className="main-component">
            <div className="main-nav">
                <span className="main-nav-text">Section</span>
                <div className="e-wallet">
                    <div className="e-trf">
                        <Wallet/>
                        <span>0.2 $XYZ</span>
                    </div>
                    <span className="tier">Tier 1</span>
                </div>
            </div>
            <Todos/>
        </div>
    );
}

export default Main;