import styles from './Hardware.module.css';
import {HeaderImage} from "../../Components/HeaderImage/HeaderImage.tsx";
import {SoftwareOurProjects} from "../../Components/SoftwareOurProjects/SoftwareOurProjects.tsx";
import {HardwareOurProjects} from "../../Components/HardwareOurProjects/HardwareOurProjects.tsx";
const headerImageUrl = '/public/image/hardware-page.jpg'
const headerTitle = "HARDWARE"
const headerDescription = "";
export const  HardwarePage = ()=>{

return (

  <div className={styles.hardware_page}>
    <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}   />
      <HardwareOurProjects/>
  </div>
);
}