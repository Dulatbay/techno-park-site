import AboutOFE from '../../components/About/AboutOFE.tsx';
import OfficeActivity from '../../components/OfficeActivity/OfficeActivity.tsx';
import OurGuests from '../../components/OurGuests/OurGuests.tsx';
import Incubators from '../../components/Incubators/Incubators.tsx';
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import Contacts from "../../components/Contacts/Contacts.tsx";
import styles from "./OFE.module.css";

function OFE() {
    const imageUrl = '/image/ofe-page-header.jpeg'
    const title = "Офис предпринимательства"
    const description = "Офис предпринимательства СДУ был открыт в августе 2022 года, главной целью которого является создать предпринимательскую экосистему в Университете.";

    return (
        <>
            <HeaderImage imageUrl={imageUrl}
                         title={title}
                         description={description}
            />

            <main id={'main'}>
                <div className={`${styles.content}`}>
                    <AboutOFE/>
                    {/*<Slider/>*/}
                    {/*<OfficeActivity/>*/}
                    <OurGuests/>
                    <Incubators/>
                    <Contacts />
                </div>
            </main>
        </>
    );
}

export default OFE;
