import styles from './CoursesList.module.css';


export const CoursesList = () => {
    return (
        <div className={`${styles.coursesList}`}>
            <h2>Список курсов</h2>
            <p className={`${styles.coursesText}`}>
                Мы расширяем возможности и поддерживаем молодых ИТ-студентов и команды, внедряющие инновации в цифровую среду.
            </p>
            <div className={`${styles.cardList}`}>
                <div className={`${styles.nlp}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img alt={''} src={'https://static.tildacdn.com/tild6435-6431-4834-b861-316163393433/__16.svg'}/>
                    </div>
                    <h4>NLP</h4>
                    <p>
                        Наш курс по NLP разработанн для того, чтобы
                        вы могли освоить навыки обработки естественного языка и
                        стать уверенным и компетентным профессионалом в этой области.
                    </p>
                    <a href={''} className={`${styles.learnMore}`}>Узнать больше →</a>
                </div>

                <div className={`${styles.dataScience}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img alt={''} src={'https://static.tildacdn.com/tild3836-3536-4737-b863-646232623236/__1.svg'}/>
                    </div>
                    <h5>Data science</h5>
                    <p>
                        Наш курс по NLP разработанн для того, чтобы вы могли
                        освоить навыки обработки естественного языка и стать
                        уверенным и компетентным профессионалом в этой области.
                    </p>
                    <a href={''} className={`${styles.learnMore}`}>Узнать больше →</a>
                </div>
            </div>
        </div>
    );
}
