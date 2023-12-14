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
                        <img alt={''} src={'/image/course-1.svg'}/>
                    </div>
                    <h4>NLP</h4>
                    <p>
                        Наш курс по NLP разработанн для того, чтобы
                        вы могли освоить навыки обработки естественного языка и
                        стать уверенным и компетентным профессионалом в этой области.
                    </p>
                    <a href={'https://docs.google.com/document/d/1IaQ98oztlAHscq5N4BVmesrQgmo8VX0EfniH6VxXJsA/edit'} className={`${styles.learnMore}`}>Узнать больше →</a>
                </div>

                <div className={`${styles.dataScience}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img alt={''} src={'/image/course-2.svg'}/>
                    </div>
                    <h5>Data science</h5>
                    <p>
                        Наш курс по NLP разработанн для того, чтобы вы могли
                        освоить навыки обработки естественного языка и стать
                        уверенным и компетентным профессионалом в этой области.
                    </p>
                    <a href={'https://docs.google.com/document/d/1ydZyJCwia5VEyT3mA1xNFdyV9vKJtHc8U4nuEHQuD9g/edit#heading=h.gjdgxs'} className={`${styles.learnMore}`}>Узнать больше →</a>
                </div>
            </div>
        </div>
    );
}
