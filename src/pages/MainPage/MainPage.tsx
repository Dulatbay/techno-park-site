import styles from "../OFE/OFE.module.css";
import {OurMission} from "../../components/OurMission/OurMission.tsx";
import {Departments} from "../../components/Departments/Departments.tsx";
import {OurTeam} from "../../components/OurTeam/OutTeam.tsx";
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {News} from "../../components/MainNews/News.tsx";

export const MainPage = () => {
    const imageUrl = 'https://thumb.tildacdn.com/tild6362-3661-4038-a430-653263343961/-/format/webp/image.png'
    const title = "SDU Технопарк"
    const description = "Технопарк - это объединение департаментов, направленных на воспитание и обучение студентов, способных создавать свои проекты и стартапы.";

    return (
        <>
            <HeaderImage imageUrl={imageUrl}
                         title={title}
                         description={description}
            />

            <main id={'main'}>
                <div className={`${styles.content}`}>
                    <OurMission/>
                    <Departments/>
                    <OurTeam/>
                    <News />
                </div>
            </main>
        </>
    );
};
