import styles from './TrainingFormat.module.css';


export const TrainingFormat = () => {
    return (
        <div className={`${styles.trainingFormat}`}>
            <div className={`${styles.text}`}>
                <h2>Формат обучения - online</h2>
                <div className={`${styles.line}`}></div>
                <p>
                    Все наши курсы вы можете проходить онлайн и участвовать в групповых заданиях.
                    Kурсы предлагают возможность взаимодействия с опытными преподавателями и
                    другими студентами. Вы сможете применить полученные знания на практике и
                    развить свои навыки через выполнение групповых заданий, которые способствуют
                    коллективному обучению и обмену опытом.
                </p>
            </div>
            {/*<div className={`${styles.imgBox}`}>*/}
            <img className={`${styles.img}`} alt={''} src={'/image/courses-training-format.png'}/>
            {/*</div>*/}
        </div>
    );
}
