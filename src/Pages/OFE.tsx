// import Slider from '../Components/SliderPart/Slider';
import AboutOFE from '../Components/About/AboutOFE';
import Footer from '../Components/Footer/Footer';
import OfficeActivity from '../Components/OfficeActivity/OfficeActivity';
import OurGuests from '../Components/OurGuests/OurGuests';
import Incubators from '../Components/Incubators/Incubators';

function OFE() {
    return (
        <>
            <AboutOFE />
            {/* <Slider /> */}
            <OfficeActivity />
            <OurGuests />
            <Incubators />
            <Footer />
        </>
    );
}

export default OFE;
