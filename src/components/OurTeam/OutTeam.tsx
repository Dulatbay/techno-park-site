import styles from './OurTeam.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const OurTeam = () => {
    return (
        <>
            <div className={`${styles.ourTeam}`}>
                <div className={`${styles.ourTeam__container}`}>
                    <div className={`${styles.ourTeam__inner}`}>
                        <div className={`${styles.ourTeam__title__wrapper}`}>
                            <div className={`${styles.ourTeam__title}`}>
                                <span>Наша команда</span>
                            </div>
                        </div>

                        <div className={`${styles.ourTeam__cards__wrapper}`}>
                            <div className={`${styles.ourTeam__cards__carousel_content}`}>
                                <div className={`${styles.ourTeam__card__wrapper}`}>
                                    {/*Card - 1*/}
                                    <div className={`${styles.ourTeam__card}`}>
                                        {/*Card - 1*/}
                                        <div className={`${styles.ourTeam__card__box}`}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="https://thumb.tildacdn.com/tild3163-3265-4935-a462-666562303433/-/cover/120x120/center/center/-/format/webp/photo_2023-11-25_223.jpeg"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Толыбай Бекжан
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Директор департамента корпоративного развития,
                                                            <a href="mailto:bekzhan.tolybay@sdu.edu.kz">bekzhan.tolybay@sdu.edu.kz</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                                                        Занимаю должность Директора департамента корпоративного
                                                        развития, где я
                                                        несу ответственность за координацию внешних связей факультетов и
                                                        департаментов университета, разработку и внедрение инновационных
                                                        коммерческих проектов.
                                                        <br/>В роли куратора Технопарка я глубоко
                                                        погружен в динамичную область информационных технологий, где
                                                        организую совместные проекты с частными компаниями.
                                                        <br/>Моей
                                                        целью является поднятие корпоративного развития
                                                        университета на новый уровень и внесение существенного
                                                        вклада в его общий успех.
                                                        <br/>Мой опыт включает в себя 10
                                                        лет работы в квазигосударственном секторе, где я
                                                        специализировался в области международных прямых
                                                        инвестиций. В течение этого времени я сопровождал
                                                        иностранных инвесторов, предоставлял консультации по
                                                        определению оптимальных мест для размещения
                                                        производственных объектов и эффективному подбору
                                                        персонала для обеспечения успешной деятельности.
                                                    </div>
                                                </div>
                                                <div className={`${styles.ourTeam__card__box__content__dots__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__dots}`}>
                                                    <span
                                                        className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*Card - 2*/}
                                        <div className={`${styles.ourTeam__card__box}`}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="https://thumb.tildacdn.com/tild3837-6237-4166-a336-383162663835/-/cover/120x120/center/center/-/format/webp/IMG_6063_1.JPG"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Ибрагимов Назим
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Директор Технопарка,
                                                            <a href="mailto:nazim.ibragimov@sdu.edu.kz">nazim.ibragimov@sdu.edu.kz</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                                                        Докторант компьютерных наук, бакалавр автоматизации и
                                                        управления.<br/>Инженер схемотехник, слаботочных систем и
                                                        автоматизации производственных процессов. <br/>Специализация на
                                                        дизайне и прототипировании электронных плат.<br/>Старший
                                                        преподаватель - лектор дисциплин: электроника, цифровая
                                                        электроника, IoT, промышленная электроника. <br/>Научная
                                                        область интересов - радиочастотные метки
                                                        (RFID). <br/>Должностные обязательства - управление
                                                        проектами и организации технопарка.<br/>Сертифицированный
                                                        тренер ораторского мастерства московского
                                                        университета ораторского мастерства и
                                                        риторики.
                                                    </div>
                                                </div>
                                                <div className={`${styles.ourTeam__card__box__content__dots__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__dots}`}>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card - 3: DISPLAY: NONE */ }
                                        <div className={`${styles.ourTeam__card__box}`} style={{display: "none"}}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="https://thumb.tildacdn.com/tild3163-3265-4935-a462-666562303433/-/cover/120x120/center/center/-/format/webp/photo_2023-11-25_223.jpeg"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Толыбай Бекжан
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Директор департамента корпоративного развития,
                                                            <a href="mailto:bekzhan.tolybay@sdu.edu.kz">bekzhan.tolybay@sdu.edu.kz</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                                                        Занимаю должность Директора департамента корпоративного
                                                        развития, где я
                                                        несу ответственность за координацию внешних связей факультетов и
                                                        департаментов университета, разработку и внедрение инновационных
                                                        коммерческих проектов.
                                                        <br/>В роли куратора Технопарка я глубоко
                                                        погружен в динамичную область информационных технологий, где
                                                        организую совместные проекты с частными компаниями.
                                                        <br/>Моей
                                                        целью является поднятие корпоративного развития
                                                        университета на новый уровень и внесение существенного
                                                        вклада в его общий успех.
                                                        <br/>Мой опыт включает в себя 10
                                                        лет работы в квазигосударственном секторе, где я
                                                        специализировался в области международных прямых
                                                        инвестиций. В течение этого времени я сопровождал
                                                        иностранных инвесторов, предоставлял консультации по
                                                        определению оптимальных мест для размещения
                                                        производственных объектов и эффективному подбору
                                                        персонала для обеспечения успешной деятельности.
                                                    </div>
                                                </div>
                                                <div className={`${styles.ourTeam__card__box__content__dots__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__dots}`}>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card - 4  DISPLAY: NONE */}
                                        <div className={`${styles.ourTeam__card__box}`} style={{display: "none"}}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="https://thumb.tildacdn.com/tild3163-3265-4935-a462-666562303433/-/cover/120x120/center/center/-/format/webp/photo_2023-11-25_223.jpeg"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Толыбай Бекжан
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Директор департамента корпоративного развития,
                                                            <a href="mailto:bekzhan.tolybay@sdu.edu.kz">bekzhan.tolybay@sdu.edu.kz</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                                                        Занимаю должность Директора департамента корпоративного
                                                        развития, где я
                                                        несу ответственность за координацию внешних связей факультетов и
                                                        департаментов университета, разработку и внедрение инновационных
                                                        коммерческих проектов.
                                                        <br/>В роли куратора Технопарка я глубоко
                                                        погружен в динамичную область информационных технологий, где
                                                        организую совместные проекты с частными компаниями.
                                                        <br/>Моей
                                                        целью является поднятие корпоративного развития
                                                        университета на новый уровень и внесение существенного
                                                        вклада в его общий успех.
                                                        <br/>Мой опыт включает в себя 10
                                                        лет работы в квазигосударственном секторе, где я
                                                        специализировался в области международных прямых
                                                        инвестиций. В течение этого времени я сопровождал
                                                        иностранных инвесторов, предоставлял консультации по
                                                        определению оптимальных мест для размещения
                                                        производственных объектов и эффективному подбору
                                                        персонала для обеспечения успешной деятельности.
                                                    </div>
                                                </div>
                                                <div className={`${styles.ourTeam__card__box__content__dots__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__dots}`}>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                        <span
                                                            className={`${styles.ourTeam__card__box__content__dot}`}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}