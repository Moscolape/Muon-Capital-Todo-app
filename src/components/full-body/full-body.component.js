import React from "react";
import Main from "../main/main.component";
import Sidebar from "../sidebar/sidebar.component";

const FullBody = () => {
    return(
        <div className = "flex">        
            <Sidebar/>
            <Main/>
        </div>
    )
};

export default FullBody;