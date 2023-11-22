// import Slider from '../Components/SliderPart/Slider';

import OfficeActivity from "../../components/OfficeActivity/OfficeActivity.tsx";
import OurGuests from "../../components/OurGuests/OurGuests.tsx";
import Incubators from "../../components/Incubators/Incubators.tsx";
// import Footer from "../components/Footer/Footer.tsx";
import AboutOFE from "../../components/About/AboutOFE.tsx";

function EntrepreneurshipOffice() {
    return (
        <>
            <AboutOFE />
            {/* <Slider /> */}
            <OfficeActivity />
            <OurGuests />
            <Incubators />
            {/*<Footer />*/}
        </>
    );
}

export default EntrepreneurshipOffice;
