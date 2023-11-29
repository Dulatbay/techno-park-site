import styles from './Hardware.module.css';
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {HardwareOurProjects} from "../../components/HardwareOurProjects/HardwareOurProjects.tsx";
import {BecomePartOfTeam} from "../../components/BecomePartOfTeam/BecomePartOfTeam.tsx";

const headerImageUrl = '/public/image/hardware-page.jpg'
const headerTitle = "HARDWARE"
const headerDescription = "";
export const HardwarePage = () => {

    return (

        <div className={styles.hardware_page}>
            <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}/>
            <HardwareOurProjects/>
            <BecomePartOfTeam imageUrl="/public/image/hardware-partOfTeam.jpg" title="Стань частью команды!" isRadio={false}/>
        </div>
    );
}