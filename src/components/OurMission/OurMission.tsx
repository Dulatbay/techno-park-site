import styles from './OurMission.module.css';

export const OurMission = () => {
    return (
        <div className={`${styles.ourMission}`}>
            <div className={`${styles.ourMission__container}`}>
                <div className={`${styles.ourMission__inner}`}>
                    <div className={`${styles.ourMission__left__side}`}>
                        <div className={`${styles.ourMission__left__side__box}`}>
                            <div className={`${styles.ourMission__left__side__box_title}`}>
                                Наша миссия
                            </div>

                            <div className={`${styles.ourMission__left__side__box__line_wrapper}`}>
                                <div className={`${styles.ourMission__left__side__box__line}`}></div>
                            </div>

                            <div className={`${styles.ourMission__left__side__box_description}`}>
                            <span>
                                Миссия Технопарка заключается в обучении и
                                воспитании студентов, способных успешно
                                реализовываться используя практические знания и
                                навыки, решать актуальные проблемы и передавать
                                свой опыт новому поколению. Мы решаем,
                                поддерживаем, направляем, обучаем и делимся!
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.ourMission__right__side}`}>
                        <div className={`${styles.ourMission__right__side_img}`}>
                            <img
                                src={'../../../public/image/our_mission.jpg'}
                                alt="Photo mission!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
