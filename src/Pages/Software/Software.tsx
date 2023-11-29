import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {SoftwareOurProjects} from "../../components/SoftwareOurProjects/SoftwareOurProjects.tsx";
import {AssistantTraining} from "../../components/AssistantTraining/AssistantTraining.tsx";
import {BecomePartOfTeam} from "../../components/BecomePartOfTeam/BecomePartOfTeam.tsx";
// import Footer from "../../components/Footer/Footer.tsx";
export const Software = () => {
    const headerImageUrl = "https://thumb.tildacdn.com/tild3939-3366-4639-b237-653431626331/-/format/webp/resize-image-onlinec.jpg"
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
        </>
    );
};
