import { ReactComponent as Wallet } from "../../assets/Wallet.svg";
import Todos from "../todos/todos.component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
    return(
        <div className={props.active ? "main-component-occupy" : "main-component"}>
            <div className="main-nav">
                <span className="main-nav-text">
                    {props.active ? 
                    <span onClick={props.clickIt}><FontAwesomeIcon icon={faArrowRight} /> Show sidebar</span>
                    :
                    <span>Section</span>}
                </span>
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