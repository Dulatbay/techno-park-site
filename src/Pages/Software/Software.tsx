// import styles from './Software.module.css'
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {SoftwareOurProjects} from "../../components/SoftwareOurProjects/SoftwareOurProjects.tsx";
import {AssistantTraining} from "../../components/AssistantTraining/AssistantTraining.tsx";
import {BecomePartOfTeam} from "../../components/BecomePartOfTeam/BecomePartOfTeam.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";
export const Software = () => {
    const headerImageUrl = 'public/image/'
    const headerTitle = "Software"
    const headerDescription = "";

    const partOfTeamImageUrl = 'public/image/become-part-of-team.jpg'
    const partOfTeamTitle = 'Станьте частью команды!'
    const partOfTeamIsRadio = true

    return (
        <>
            <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}/>
            <SoftwareOurProjects/>
            <AssistantTraining/>
            <BecomePartOfTeam imageUrl={partOfTeamImageUrl} title={partOfTeamTitle} isRadio={partOfTeamIsRadio}/>
            {/*<Footer/>   */}
        </>
    );
};
