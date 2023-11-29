import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {EnactusKazakhstan} from "../../components/EnactusKazakhstan/EnactusKazakhstan.tsx";
import {Mission} from "../../components/EnactusMission/Mission.tsx";
import {SocialEntrepreneurship} from "../../components/EnactusSocialEntrepreneurship/SocialEntrepreneurship.tsx";
import {ProjectLifeCycle} from "../../components/ProjectLifeCycle/ProjectLifeCycle.tsx";
import {OurActivities} from "../../components/EnactusOurActivities/OurActivities.tsx";
// import {Footer} from "../../components/Footer/Footer.tsx";

export const Enactus = () => {
    const headerImageUrl = 'public/image/enactus-header-image.png'
    const headerTitle = "Enactus"
    const headerDescription = "Мы верим, что инвестирование в студентов, которые совершают предпринимательские действия для других, создает лучший мир для всех нас.";

    return (
        <>
            <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}/>
            <EnactusKazakhstan/>
            <Mission/>
            <SocialEntrepreneurship/>
            <ProjectLifeCycle/>
            <OurActivities/>
        </>
    );
};
