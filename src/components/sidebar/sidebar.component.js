import styled from "styled-components";

import { ReactComponent as SlideLeftIcon } from "../../assets/slide-left.svg";


import SidebarMenu from "../sidebar-menu/sidebar-menu.component";
import ToggleMode from "../toggle-mode/toggle-mode.component";
import SalesButton from "../button/button.component";
import { Initials, Slide, TopSideBar, Username, UserOnly } from "./sidebar.styles";


export const SideBar = styled.div`
    width: ${(props) => props.active ? '0%' : '25%'};
    height: 95%;
    margin-top: ${(props) => props.active ? '4%' : '3.2%'};
    background: ${(props) => props.theme.colorSideBarBackground};
    color: white;
    position: fixed;
    transition: width 0.2s ease-in-out, margin-top 0.2s ease-in-out;
`


const Sidebar = (props) => {
    const string = 'Name';
    const initial = string.charAt(0);


    return(
        <SideBar>
            <TopSideBar>
                <UserOnly>
                    <Initials>{initial}</Initials>
                    <Username>{string}</Username>
                </UserOnly>
                <Slide onClick={props.clickIt}><SlideLeftIcon/></Slide>
            </TopSideBar>
            <SidebarMenu/>
            <SalesButton initial={initial}/>
            <ToggleMode/>
        </SideBar>
    );
}

export default Sidebar;