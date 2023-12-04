import styles from './AssistantTraining.module.css';

export const AssistantTraining = () => {
    return (
        <div className={`${styles.assistantTraining}`}>
            <h1>Обучение ассистентов</h1>
            <div className={`${styles.list}`}>

                <div className={`${styles.frontend}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img src={'public/image/assistant-training-frontend.png'}/>
                    </div>

                    <div className={`${styles.content}`}>
                        <h3>Frontend</h3>

                        <ul>
                            <li>Git, HTML, CSS, Javascript - базовый курс</li>
                            <li>Typescript, React, CI/CD, Testing - продвинутый курс</li>
                        </ul>

                        <p>
                            Работаем над проектами, участвуем в хакатонах и мероприятиях в Технопарке.
                        </p>
                    </div>
                </div>

                <div className={`${styles.backend}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img alt={''} src={'public/image/assistant-training-backend.png'}/>
                    </div>

                    <div className={`${styles.content}`}>
                        <h3>Backend</h3>

                        <ul>
                            <li>Python, Java (Spring, EE), Go</li>
                            <li>Database, Rest Api</li>
                        </ul>

                        <p>
                            Работаем над проектами, участвуем в хакатонах и мероприятиях в Технопарке.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

