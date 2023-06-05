import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as World } from "../../assets/Vector (1).svg";



const ToggleMode = () => {
    return(
        <div class="theme-switch-wrapper">
            <span><World/></span>
            <label class="theme-switch">
                <span className="world"><FontAwesomeIcon icon={faMoon} /></span>
                <input type="checkbox" />
                <div class="slider round"></div>
            </label>
        </div>
    )
};

export default ToggleMode;