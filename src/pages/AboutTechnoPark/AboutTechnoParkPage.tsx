import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import styles from './AboutTechnoPark.module.css'
import {OurOffice} from "../../components/OutOffice/OurOffice.tsx";

const imageUrl = 'public/image/about-techno-park-page-header.jpg'
const title = "ТЕХНОПАРК"
const description = "Технопарк - это лаборатория прототипирования и научных исследований для одаренных студентов. Это пространство, где решаются актуальные проблемы, и база, где теория превращается в практические навыки. Мастерская, где знания и навыки передаются от старшего поколения новичкам уже с первого курса.";
const getChronologyComponent = () => {
    return (
        <div>
            <div className={styles.chronologyComponent}>
                <div style={{
                    flex: 1,
                    alignSelf: "end",
                    margin: "auto"
                }}>
                    <div className="h3">Хронология</div>
                    <div className="text-secondary">
                        <strong>2017</strong>
                        <span> - открытие лаборатории IOT</span><br/>
                        <strong>2018</strong>
                        <span> - открытие практической мастерской электроники для студентов 40 кв.м</span><br/>
                        <strong>2019</strong>
                        <span> - расширение мастерской до 100 кв.м</span><br/>
                        <strong>2020</strong>
                        <span> - открытие Технопарка 200 кв.м</span><br/>
                        <strong>2021</strong>
                        <span> - расширение Технопарка до 600 кв.м</span>
                    </div>
                </div>
                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end"
                }}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    );
};


export const AboutTechnoParkPage = () => {
    return (
        <div>
            <HeaderImage imageUrl={imageUrl} title={title} description={description}/>
            <div className={styles.content}>
                {
                    getChronologyComponent()
                }
                <OurOffice />
            </div>
        </div>
    )
}
