// import React from 'react';
import styles from './OfficeActivity.module.css';

const OfficeActivity: React.FC = () => {
    return (
        <div className={`${styles.office__activity}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.office__activity_inner}`}>
                    <div className={`${styles.office__activity_title}`}>
                        <div className={`${styles.title__span_1}`}>
                            <span>Деятельность Офиса</span>
                        </div>
                        <div className={`${styles.title__span_2}`}>
                            <span>Направления</span>
                        </div>
                    </div>

                    <div className={`${styles.office__activity_cards}`}>
                        <div className={`${styles.card__line_wrapper}`}>
                            <div className={`${styles.card__line}`}></div>
                        </div>

                        <div className={`${styles.office__activity_card}`}>
                            <div className={`${styles.card_text_1}`}>
                                <span>В рамках учебной программы</span>
                            </div>
                            <div className={`${styles.card_text_2}`}>
                                <span>
                                    Содействие курсам по предпринимательству на
                                    факультетах СДУ в дополнение к уже
                                    существующим курсам. Поддержка ППС учебными
                                    планами, методологией, материалами по мере
                                    необходимости. Основная цель обучения
                                    заключается в том, чтобы студенты приобрели
                                    базовое понимание о предпринимательстве и
                                    соответствующие навыки. Примерное общее
                                    количество студентов составит около 100-150
                                    студентов в год.
                                </span>
                            </div>
                        </div>

                        <div className={`${styles.card__line_wrapper}`}>
                            <div className={`${styles.card__line}`}></div>
                        </div>

                        <div className={`${styles.office__activity_card}`}>
                            <div className={`${styles.card_text_1}`}>
                                <span>Дополнительные меры поддержки</span>
                            </div>
                            <div
                                className={`${styles.card_text_2}`}
                                style={{ color: '#052555' }}
                            >
                                <p>
                                    а&#x29; Серия гостевых лекций от действующих
                                    предпринимателей:
                                </p>
                                <p>
                                    Встречи, лекции от действующих
                                    предпринимателей, чтобы вдохновиться
                                    историями и лучше узнать их личный опыт.
                                </p>
                                <p>б&#x29; Бизнес-акселератор:</p>
                                <p>
                                    Эта программа будет проходить во время
                                    зимних и/или летних каникул
                                    продолжительностью 3-4 недели.
                                </p>
                                <p>
                                    в&#x29; Бизнес-инкубатор и программа
                                    наставничества:
                                </p>
                                <p>
                                    Программа наставничества, бизнес-инкубатор
                                    призваны объединить сообщество
                                    единомышленников, оказать поддержку и
                                    ресурсы по мере необходимости. Участие будет
                                    открытым для студентов, сотрудников, ППС кто
                                    хочет начать свой бизнес, независимо от
                                    стадии (от идеи до запуска, MVP), отрасли
                                    или типа бизнеса. Участие в этой программе
                                    будет длится до 6 месяцев и будет включать в
                                    себя доступ к офисным помещениям, технопарку
                                    и консультационным услугам, таким как
                                    юридические, бухгалтерские, финансовые и т.
                                    д.
                                </p>
                                <p>
                                    г&#x29; Поддержка технического
                                    предпринимательства в содействии с
                                    Технопарком СДУ
                                </p>
                                <p>
                                    д&#x29; Программа создания венчурных
                                    предприятий
                                </p>
                            </div>
                        </div>

                        <div className="card__line_wrapper">
                            <div className={`${styles.card__line}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeActivity;
