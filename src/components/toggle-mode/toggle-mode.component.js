import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as World } from "../../assets/Vector (1).svg";
import { useState, useContext } from 'react';

import { AuthContext } from '../../App';


const ToggleMode = () => {

    const value = useContext(AuthContext);

    const [isToggle, setIsToggle] = useState(false);

    const onToggle = () => {
        setIsToggle(!isToggle);
        value();
    }
    
    return(
        <div class="theme-switch-wrapper">
            <span><World/></span>
            <label class="theme-switch">
                <span className="world"><FontAwesomeIcon icon={faMoon} /></span>
                <input type="checkbox" checked={isToggle} onChange={onToggle} />
                <div class="slider round"></div>
            </label>
        </div>
    )
};

export default ToggleMode;