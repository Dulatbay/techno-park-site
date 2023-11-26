import styles from './SoftwareOurProjects.module.css';

// interface props {
//     imageUrl: string,
//     cardTitle: string,
//     cardDescription: string,
//     buttonContent: string
// }

// export const HeaderImage = ({imageUrl, title, description} : props) => {

// export const SoftwareOurProjects = ({imageUrl, cardTitle, cardDescription, buttonContent} : props) : void => {
//     return (
//         <>
//             <div className={`${styles.ourProjects}`}>
//                 <h1>Наши проекты</h1>
//                 <div className={`${styles.Content}`}>
//                     <img src={imageUrl} />
//                     <div>
//                         <h2>{cardTitle}</h2>
//                         <p>{cardDescription}</p>
//                         <button>{buttonContent}</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
export const SoftwareOurProjects = () => {
    return (
        <div className={`${styles.ourProjects}`}>
            <h1>Наши проекты</h1>
            <div className={`${styles.projectsContent}`}>
                {/*<img src={'public/image/software-our-projects.png'} />*/}
                <img/>
                <div>
                    <h3>UNT Informatics</h3>
                    <p>
                        Платформа для подготовки к ЕНТ по информатике с отслеживанием прогресса,
                        онлайн тренажерами для практики кодирования, пробными тестами
                        с возможностью анализа ошибок и другими полезными функциями.
                    </p>
                    <button>Сайт проекта</button>
                </div>
            </div>
        </div>
    );
}
