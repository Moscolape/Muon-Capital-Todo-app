import React from "react";

import { ReactComponent as HomeIcon } from "../../assets/Category.svg";
import { ReactComponent as SectionOneIcon } from "../../assets/Group 15792.svg";
import { ReactComponent as SectionTwoIcon } from "../../assets/Group 15799.svg";
import { ReactComponent as ShareIcon } from "../../assets/Share.svg";

// function initialsHandler() {
    
// }

const SidebarMenu = () => {
    return(
        <>
            <div className="home">
                <HomeIcon/>
                <span className="home-text">Home</span>
            </div>
            <div className="home">
                <SectionOneIcon/>
                <span className="home-text">Section 1</span>
            </div>
            <div className="home">
                <SectionTwoIcon/>
                <span className="home-text">Section 2</span>
            </div>
            <div className="home">
                <ShareIcon/>
                <span className="home-text">Section 8</span>
            </div>
            <div className="home">
                <ShareIcon/>
                <span className="home-text">Section 8</span>
            </div>
        </>
    );
}


export default SidebarMenu;