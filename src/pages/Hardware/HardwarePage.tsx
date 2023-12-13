import styles from './Hardware.module.css';
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {HardwareOurProjects} from "../../components/HardwareOurProjects/HardwareOurProjects.tsx";
import {BecomePartOfTeamHardware} from "../../components/BecomePartOfTeamHardware/BecomePartOfTeamHardware.tsx";

const headerImageUrl = '/image/hardware-page.jpg'
const headerTitle = "HARDWARE"
const headerDescription = "";
export const HardwarePage = () => {

    return (

        <div className={styles.hardware_page}>
            <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}/>
            <HardwareOurProjects/>
            <BecomePartOfTeamHardware imageUrl="/public/image/hardware-partOfTeam.jpg" title="Стань частью команды!"/>
        </div>
    );
}