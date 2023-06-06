import { ReactComponent as HomeIcon } from "../../assets/Category.svg";
import { ReactComponent as SectionOneIcon } from "../../assets/Group 15792.svg";
import { ReactComponent as SectionTwoIcon } from "../../assets/Group 15799.svg";
import { ReactComponent as ShareIcon } from "../../assets/Share.svg";

import { Home, HomeText } from "./sidebar-menu.styles";


import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});


const SidebarMenu = () => {
    return(
        <>
            <Home data-aos="fade-right">
                <HomeIcon/>
                <HomeText>Home</HomeText>
            </Home>
            <Home data-aos="fade-right" data-aos-delay="400">
                <SectionOneIcon/>
                <HomeText>Section 1</HomeText>
            </Home>
            <Home data-aos="fade-right" data-aos-delay="600">
                <SectionTwoIcon/>
                <HomeText>Section 2</HomeText>
            </Home>
            <Home data-aos="fade-right" data-aos-delay="800">
                <ShareIcon/>
                <HomeText>Section 8</HomeText>
            </Home>
            <Home data-aos="fade-right" data-aos-delay="1000">
                <ShareIcon/>
                <HomeText>Section 8</HomeText>
            </Home>
        </>
    );
}


export default SidebarMenu;