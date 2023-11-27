import AboutOFE from "../../components/About/AboutOFE.tsx";
import OfficeActivity from "../../components/OfficeActivity/OfficeActivity.tsx";
import OurGuests from "../../components/OurGuests/OurGuests.tsx";
import Incubators from "../../components/Incubators/Incubators.tsx";

function EntrepreneurshipOffice() {
    return (
        <>
            <AboutOFE />
            {/* <Slider /> */}
            <OfficeActivity />
            <OurGuests />
            <Incubators />
        </>
    );
}

export default EntrepreneurshipOffice;
