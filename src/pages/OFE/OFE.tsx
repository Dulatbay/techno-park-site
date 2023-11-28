<<<<<<< HEAD
<<<<<<< HEAD:src/pages/OFE/OFE.tsx
=======
>>>>>>> 5ddc8a6 (getting update from master branch)
import AboutOFE from '../../components/About/AboutOFE.tsx';
import OfficeActivity from '../../components/OfficeActivity/OfficeActivity.tsx';
import OurGuests from '../../components/OurGuests/OurGuests.tsx';
import {Incubators} from '../../components/Incubators/Incubators.tsx';
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import Slider from "../../components/SliderPart/Slider.tsx";
import Contacts from "../../components/Contacts/Contacts.tsx";
import styles from "./OFE.module.css";
<<<<<<< HEAD
=======
import AboutOFE from '../../Components/About/AboutOFE';
import OfficeActivity from '../../Components/OfficeActivity/OfficeActivity';
import OurGuests from '../../Components/OurGuests/OurGuests';
import { Incubators } from '../../Components/Incubators/Incubators';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import Slider from '../../Components/Slider/Slider';
import Contacts from '../../Components/Contacts/Contacts';
import styles from './OFE.module.css';
>>>>>>> 2e46686 (in front of classNames added their class name like className__container and so on, and updated css file using this changes):src/Pages/OFE/OFE.tsx
=======
>>>>>>> 5ddc8a6 (getting update from master branch)

function OFE() {
    const imageUrl =
        'https://thumb.tildacdn.com/tild3436-3561-4164-a537-653933353833/-/format/webp/photo_2023-11-08_101.jpeg';
    const title = 'Офис предпринимательства';
    const description =
        'Офис предпринимательства СДУ был открыт в августе 2022 года, главной целью которого является создать предпринимательскую экосистему в Университете.';

    return (
        <>
            <HeaderImage
                imageUrl={imageUrl}
                title={title}
                description={description}
            />

            <main id={'main'}>
                <div className={`${styles.content}`}>
                    <AboutOFE />
                    <Slider />
                    <OfficeActivity />
                    <OurGuests />
                    <Incubators />
                    <Contacts />
                </div>
            </main>
        </>
    );
}

export default OFE;
