import styles from './ProjectLifeCycle.module.css';

export const ProjectLifeCycle = () => {
    return (
        <div className={`${styles.lifeCycle}`}>
            <h1>Жизненный цикл проекта</h1>
            <div className={`${styles.list}`}>

                <div className={`${styles.digitList}`}>

                    <div className={`${styles.figuredNum}`}>1</div>
                    <div className={`${styles.line}`}></div>
                    <div className={`${styles.figuredNum}`}>2</div>
                    <div className={`${styles.line}`}></div>
                    <div className={`${styles.figuredNum}`}>3</div>
                    <div className={`${styles.line}`}></div>
                    <div className={`${styles.figuredNum}`}>4</div>

                </div>
                <div className={`${styles.textList}`}>
                    <h6>Создание команд, формирование идеи</h6>
                    <h6>Разработка проекта</h6>
                    <h6>Участие в соревнованиях</h6>
                    <h6>Достижения и призы</h6>
                </div>

            </div>
        </div>
    );
};
