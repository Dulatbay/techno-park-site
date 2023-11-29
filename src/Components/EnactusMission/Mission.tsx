import styles from './Mission.module.css';

export const Mission = () => {

    return (
        <div className={`${styles.mission}`}>
            <h1>Миссия</h1>
            <p>
                Развивать предпринимательское мышления студентов СДУ для
                возможности раскрытия их потенциалов, воспитании идеи
                глобального гражданина и проявления помощи другим на локальном уровне.
            </p>
            <div className={`${styles.video}`}>
                <iframe className={`${styles.iframe}`} src="https://www.youtube.com/embed/3GzXbli6eic?si=QJn2xO-J19dm5EVO" title="Mission video" allowFullScreen/>
            </div>
        </div>
    );
};
