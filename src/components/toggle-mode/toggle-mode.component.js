import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
        <div className ="theme-switch-wrapper">
            <span><World/></span>
            <label className="theme-switch">
                <span className="world"><FontAwesomeIcon icon={faMoon} /></span>
                <span className="world2"><FontAwesomeIcon icon={faSun} /></span>
                <input type="checkbox" checked={isToggle} onChange={onToggle} />
                <div className ="slider round"></div>
            </label>
        </div>
    )
};

export default ToggleMode;