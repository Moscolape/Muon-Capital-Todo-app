import {useState} from "react";
import Main from "../main/main.component";
import Sidebar from "../sidebar/sidebar.component";
import { Flex } from "./full-body.styles";

const FullBody = ({toggleTheme}) => {

    const [isActive, setIsActive] = useState(false);

    const hideSidebarHandler = () => {
        setIsActive(true);
    };

    const showSidebarHandler = () => {
        setIsActive(false);
    };

    return(
        <Flex>        
            <Sidebar toggleTheme = {toggleTheme} active={isActive} clickIt = {hideSidebarHandler}/>
            <Main active={isActive} clickIt={showSidebarHandler}/>
        </Flex>
    )
};

export default FullBody;