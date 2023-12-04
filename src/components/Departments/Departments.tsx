import styles from './Departments.module.css';

export const Departments = () => {
    return (
        <>
            <div className={`${styles.departments}`}>
                <div className={`${styles.departments__container}`}>
                    <div className={`${styles.departments__inner}`}>
                        <div className={`${styles.departments__title__wrapper}`}>
                            <div className={`${styles.departments__title}`}>
                                <span>Департаменты</span>
                            </div>
                        </div>

                        <div className={styles.departments__about__columns}>
                            <div className={`${styles.departments__about__column}`}>
                                <div className={`${styles.departments__about__column_text}`}>
                                    <div className={`${styles.departments__about__column_text_title}`}>
                                        <strong>Технопарк</strong>
                                    </div>
                                    <div className={`${styles.departments__about__column_text_description}`}>
                                        <span>Техническое подразделение занимающееся внутренними проектами по направлениям hardware и software</span>
                                    </div>
                                </div>
                                <div className={`${styles.departments__about__column_line}`}></div>
                                <div className={`${styles.departments__about__column_circle}`}></div>
                            </div>

                            <div className={`${styles.departments__about__column_flipped}`}>
                                <div className={`${styles.departments__about__column_text_flipped}`}>
                                    <div className={`${styles.departments__about__column_text_title}`}>
                                        <strong>SDU IT Park</strong>
                                    </div>
                                    <div className={`${styles.departments__about__column_text_description}`}>
                                        <span>
                                            ТОО компания направленная на
                                            <br/>
                                            Образовательный контент и software разработку
                                            <br/>
                                            <br/>
                                            Дата создания: 7.03.2023
                                            <br/>
                                            Сотрудничество с университетом СДУ: 4.04.2023
                                            <br/>
                                            <br/>
                                        </span>
                                    </div>
                                </div>
                                <div className={`${styles.departments__about__column_line}`}></div>
                                <div className={`${styles.departments__about__column_circle}`}></div>
                            </div>

                            <div className={`${styles.departments__about__column_last}`}>
                                <div className={`${styles.departments__about__column_text}`}>
                                    <div className={`${styles.departments__about__column_text_title}`}>
                                        <strong>Офис предпринимательства</strong>
                                    </div>
                                    <div className={`${styles.departments__about__column_text_description}`}>
                                        <span>Департамент занимающийся развитием студенческих проектов в бизнес сфере, находится под Департаментом корпоративного развития</span>
                                    </div>
                                </div>
                                <div className={`${styles.departments__about__column_line_last}`}></div>
                                <div className={`${styles.departments__about__column_circle}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}