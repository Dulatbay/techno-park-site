import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import styles from './AboutTechnoPark.module.css'

const imageUrl = 'public/image/about-techno-park-page-header.jpg'
const title = "ТЕХНОПАРК"
const description = "Технопарк - это лаборатория прототипирования и научных исследований для одаренных студентов. Это пространство, где решаются актуальные проблемы, и база, где теория превращается в практические навыки. Мастерская, где знания и навыки передаются от старшего поколения новичкам уже с первого курса.";


export const AboutTechnoParkPage = () => {
    return (
        <div className={styles.aboutTechnoParkPage}>
            <HeaderImage imageUrl={imageUrl} title={title} description={description}/>
            <div className={styles.main}>
                <div className={styles.section}>
                    <div className={styles.content1}>
                        <div className={styles.content1Left}>
                            ХРОНОЛОГИЯ
                        </div>
                        <div className={styles.content1Right}>
                            <div className={styles.content1Right_image1}>image1</div>
                            <div className={styles.content1Right_image2}>image2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
