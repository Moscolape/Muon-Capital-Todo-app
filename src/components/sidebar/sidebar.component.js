import React from "react";

import { ReactComponent as SlideLeftIcon } from "../../assets/slide-left.svg";


import SidebarMenu from "../sidebar-menu/sidebar-menu.component";
import ToggleMode from "../toggle-mode/toggle-mode.component";
import SalesButton from "../button/button.component";



const string = 'Name';
const initial = string.charAt(0);

const Sidebar = () => {
    return(
        <div className="side-bar">
            <div className="top-side-bar">
                <div className="user-only">
                    <span className="initials">{initial}</span>
                    <span className="username">{string}</span>
                </div>
                <span className="slide"><SlideLeftIcon/></span>
            </div>
            <SidebarMenu/>
            <SalesButton initial={initial}/>
            <ToggleMode/>
        </div>
    );
}

export default Sidebar;