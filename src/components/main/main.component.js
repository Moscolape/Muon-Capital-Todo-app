import { ReactComponent as Wallet } from "../../assets/Wallet.svg";
import Todos from "../todos/todos.component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ESpan, Etrf, EWallet } from "./main.styles";

const Main = (props) => {
    return(
        <div className={props.active ? "main-component-occupy" : "main-component"}>
            <div data-aos="fade-down" className="main-nav">
                <span className="main-nav-text">
                    {props.active ? 
                    <span onClick={props.clickIt}><FontAwesomeIcon icon={faArrowRight} /> Show sidebar</span>
                    :
                    <span>Section</span>}
                </span>
                <EWallet>
                    <Etrf>
                        <Wallet/>
                        <ESpan>0.2 $XYZ</ESpan>
                    </Etrf>
                    <span className="tier">Tier 1</span>
                </EWallet>
            </div>
            <Todos/>
        </div>
    );
}

export default Main;