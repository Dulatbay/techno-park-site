import styles from './Incubators.module.css';

export const Incubators: React.FC = () => {
    return (
        <div className={`${styles.incubators}`}>
            <div className={`${styles.incubators__container}`}>
                <div className={`${styles.incubators__inner}`}>
                    <div className={`${styles.incubators__title}`}>
                        <div className={`${styles.incubators__title_span}`}>
                            <span>Инкубаторы</span>
                        </div>
                    </div>

                    <div className={`${styles.incubators__description}`}>
                        <div className={`${styles.incubators__description_text}`}>
                            <span>
                                В период с февраля по апрель 2023 года - провели
                                пилотный стартап инкубатор с участием 8
                                студенческих проектов. В конце программы провели
                                DemoDay, денежный приз на покрытие расходов
                                стартапа выиграл стартап UNT Informatics. UNT
                                informatics предлагает абитуриентам
                                подготовиться к ЕНТ по информатике. Пользователь
                                готовится проходя практические тесты, выполняя
                                практические задания и запоминания ответы на
                                теоретические вопросы.
                            </span>
                        </div>
                        <div className={`${styles.incubators__description_text}`}>
                            <span>
                                <br />В августе - октябрь 2023 года - в
                                сотрудничестве с JasVentures Almaty, студенты
                                СДУ приняли участие в инкубаторе JAS Incubation
                                Fall Season в рамках финансирования от
                                QazInnovations.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.incubators__image_container}`}>
                <div className={`${styles.incubators__image_wrapper}`}>
                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_1.jpg"
                            alt="Photo1"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_2.jpeg"
                            alt="Photo2"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_3.jpeg"
                            alt="Photo3"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_4.jpg"
                            alt="Photo4"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_5.jpg"
                            alt="Photo4"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_6.jpeg"
                            alt="Photo4"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_7.jpg"
                            alt="Photo4"
                        />
                    </div>

                    <div className={`${styles.incubators__image}`}>
                        <img
                            src="../../../public/image/incubator_photos/photo_8.jpg"
                            alt="Photo4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
