import { ReactComponent as HomeIcon } from "../../assets/Category.svg";
import { ReactComponent as SectionOneIcon } from "../../assets/Group 15792.svg";
import { ReactComponent as SectionTwoIcon } from "../../assets/Group 15799.svg";
import { ReactComponent as ShareIcon } from "../../assets/Share.svg";

import { Home, HomeText } from "./sidebar-menu.styles";



const SidebarMenu = () => {
    return(
        <>
            <Home>
                <HomeIcon/>
                <HomeText>Home</HomeText>
            </Home>
            <Home>
                <SectionOneIcon/>
                <HomeText>Section 1</HomeText>
            </Home>
            <Home>
                <SectionTwoIcon/>
                <HomeText>Section 2</HomeText>
            </Home>
            <Home>
                <ShareIcon/>
                <HomeText>Section 8</HomeText>
            </Home>
            <Home>
                <ShareIcon/>
                <HomeText>Section 8</HomeText>
            </Home>
        </>
    );
}


export default SidebarMenu;