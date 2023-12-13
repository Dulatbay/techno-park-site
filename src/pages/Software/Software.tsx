import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {SoftwareOurProjects} from "../../components/SoftwareOurProjects/SoftwareOurProjects.tsx";
import {AssistantTraining} from "../../components/AssistantTraining/AssistantTraining.tsx";
import {BecomePartOfTeam} from "../../components/BecomePartOfTeam/BecomePartOfTeam.tsx";

const headerImageUrl = '/image/software-page-header.jpg'
const headerTitle = "Software"
const headerDescription = "";

const partOfTeamImageUrl = '/image/become-part-of-team.jpg'
const partOfTeamTitle = 'Станьте частью команды!'
const partOfTeamIsRadio = true


export const Software = () => {

    return (
        <>
            <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}/>
            <SoftwareOurProjects/>
            <AssistantTraining/>
            <BecomePartOfTeam imageUrl={partOfTeamImageUrl} title={partOfTeamTitle} isRadio={partOfTeamIsRadio}/>
        </>
    );
};
