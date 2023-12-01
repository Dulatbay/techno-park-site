import AboutOFE from "../../components/About/AboutOFE.tsx";
import OurGuests from "../../components/OurGuests/OurGuests.tsx";
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";

const imageUrl = 'public/image/ofe-page-header.jpeg'
const title = "Офис предпринимательства"
const description = "Офис предпринимательства СДУ был открыт в августе 2022 года, главной целью которого является создать предпринимательскую экосистему в Университете.";


function EntrepreneurshipOffice() {

    return (
        <>

            <HeaderImage imageUrl={imageUrl} title={title} description={description}/>
            <div className={"bg-white pt-xxl-5 pb-xxl-5"}>
                <AboutOFE/>
                <OurGuests/>
                 {/*<Slider />*/}
                {/*<OfficeActivity/>*/}
                {/*<Incubators/>*/}
            </div>
        </>
    );
}

export default EntrepreneurshipOffice;
