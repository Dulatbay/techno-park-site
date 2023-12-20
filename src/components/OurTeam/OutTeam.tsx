import styles from './OurTeam.module.css';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";


interface item {
    imageUrl: string,
    name: string,
    information: string,
    mail: string,
    mailLink: string,
    description: string
}

interface props extends item {
    show: boolean,
    onHide: () => void,
}

function VerticallyCenteredModal({show, onHide, imageUrl, name, mail, mailLink, information, description}: props) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body style={{
                padding: "calc(var(--index) * 1.5)"
            }}>
                <div className={`${styles.ourTeam__card__box__content__author}`}>
                    <div className={`${styles.content__author_img}`}>
                        <img
                            src={imageUrl}
                            alt="siuu" style={{borderRadius: "50%", objectFit: 'cover'}}/>
                    </div>
                    <div className={`${styles.content__author_information}`}>
                        <div className={`${styles.content__author_information_name}`}>
                            {name}
                        </div>
                        <div
                            className={`${styles.content__author_information_description}`}>
                            {information} <br/>
                            <a href={mailLink}>{mail}</a>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                        {description}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export const OurTeam = () => {
    const [modalShow, setModalShow] = useState(false);
    const [currentItem, setCurrentItem] = useState<item | null>(null)
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
                                    <div className={`${styles.ourTeam__card}`}>
                                        {/*Card - 1*/}
                                        <div className={`${styles.ourTeam__card__box}`}
                                             onClick={() => {
                                                 const item: item = {
                                                     name: "Толыбай Бекжан",
                                                     imageUrl: "/image/Bekzhan.jpeg",
                                                     mail: "bekzhan.tolybay@sdu.edu.kz",
                                                     mailLink: "mailto:bekzhan.tolybay@sdu.edu.kz",
                                                     information: "Директор департамента корпоративного развития,",
                                                     description: " Занимаю должность Директора департамента корпоративного развития, " +
                                                         "где я несу ответственность за координацию внешних связей факультетов и" +
                                                         "департаментов университета, разработку и внедрение инновационных\n" +
                                                         "коммерческих проектов.\n" +
                                                         "В роли куратора Технопарка я глубоко\n" +
                                                         "погружен в динамичную область информационных технологий, где\n" +
                                                         "организую совместные проекты с частными компаниями.\n" +
                                                         "Моей\n" +
                                                         "целью является поднятие корпоративного развития\n" +
                                                         "университета на новый уровень и внесение существенного\n" +
                                                         "вклада в его общий успех.\n" +
                                                         "Мой опыт включает в себя 10\n" +
                                                         "лет работы в квазигосударственном секторе, где я\n" +
                                                         "специализировался в области международных прямых\n" +
                                                         "инвестиций. В течение этого времени я сопровождал\n" +
                                                         "иностранных инвесторов, предоставлял консультации по\n" +
                                                         "определению оптимальных мест для размещения\n" +
                                                         "производственных объектов и эффективному подбору\n" +
                                                         "персонала для обеспечения успешной деятельности."
                                                 }
                                                 setCurrentItem(item)
                                                 setModalShow(true)
                                             }}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="/image/Bekzhan.jpeg"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Толыбай Бекжан
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Директор департамента корпоративного развития, <br/>
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
                                        <div className={`${styles.ourTeam__card__box}`} onClick={() => {
                                            const item: item = {
                                                name: "Ибрагимов Назим",
                                                imageUrl: "/image/Ibragim-Nazim.jpg",
                                                mail: "nazim.ibragimov@sdu.edu.kz",
                                                mailLink: "mailto:nazim.ibragimov@sdu.edu.kz",
                                                information: " Директор Технопарка,",
                                                description: "Докторант компьютерных наук, бакалавр автоматизации и\n" +
                                                    "управления.Инженер схемотехник, слаботочных систем и\n" +
                                                    "автоматизации производственных процессов. Специализация на\n" +
                                                    "дизайне и прототипировании электронных плат. Старший\n" +
                                                    "преподаватель - лектор дисциплин: электроника, цифровая\n" +
                                                    "электроника, IoT, промышленная электроника. Научная\n" +
                                                    "область интересов - радиочастотные метки\n" +
                                                    "(RFID). Должностные обязательства - управление\n" +
                                                    "проектами и организации технопарка. Сертифицированный\n" +
                                                    "тренер ораторского мастерства московского\n" +
                                                    "университета ораторского мастерства и\n" +
                                                    "риторики."
                                            }
                                            setCurrentItem(item)
                                            setModalShow(true)
                                        }}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="/image/Ibragim-Nazim.jpg"
                                                            alt="siuu"
                                                            style={{borderRadius: "50%", objectFit: 'cover'}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Ибрагимов Назим
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Директор Технопарка, <br/>
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

                                        {/* Card - 3: */}
                                        <div className={`${styles.ourTeam__card__box}`} onClick={() => {
                                            const item: item = {
                                                name: "Караманова Карлыгаш",
                                                imageUrl: "/image/Karlygash.jpeg",
                                                mail: "karlygash.karamanova@sdu.edu.kz",
                                                mailLink: "mailto:karlygash.karamanova@sdu.edu.kz",
                                                information: "Заведующий Офисом предпринимательства,",
                                                description: "Магистр государственной политики (University of Minnesota, Twin\n" +
                                                    "Cities), бакалавр политологии и государственного управления\n" +
                                                    "(Middle East Technical University).\n" +
                                                    "Опыт работы в сфере высшего образования, курирование\n" +
                                                    "академических программ.\n" +
                                                    "Организация обучающих программ, инкубаторов, семинаров и\n" +
                                                    "гостевых лекций."
                                            }
                                            setCurrentItem(item)
                                            setModalShow(true)
                                        }}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="/image/Karlygash.jpeg"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Караманова Карлыгаш
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Заведующий Офисом предпринимательства,
                                                            <br/>
                                                            <a href="mailto:karlygash.karamanova@sdu.edu.kz">karlygash.karamanova@sdu.edu.kz</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                                                        Магистр государственной политики (University of Minnesota, Twin
                                                        Cities), бакалавр политологии и государственного управления
                                                        (Middle East Technical University).
                                                        Опыт работы в сфере высшего образования, курирование
                                                        академических программ.
                                                        Организация обучающих программ, инкубаторов, семинаров и
                                                        гостевых лекций.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card - 4 */}
                                        <div className={`${styles.ourTeam__card__box}`} onClick={() => {
                                            const item: item = {
                                                name: "Эльнура Набигазинова",
                                                imageUrl: "/image/Elnura.jpeg",
                                                mail: "elnura.nabigazinova@sdu.edu.kz",
                                                mailLink: "mailto:elnura.nabigazinova@sdu.edu.kz",
                                                information: "Проектный менеджер Технопарка,",
                                                description: "Магистр Компьютерных Наук.\n" +
                                                    "Старший преподаватель в Бизнес школе курсов Python и Machine Learning.\n" +
                                                    "Ведение коммерческих проектов software разработки в SDU IT PARK.\n" +
                                                    "Контроль и мониторинг проектов в Технопарк.\n" +
                                                    "Преподаватель курса Data Science по программе Techorda от AstanaHUB"
                                            }
                                            setCurrentItem(item)
                                            setModalShow(true)
                                        }}>
                                            <div className={`${styles.ourTeam__card__box__content}`}>
                                                <div className={`${styles.ourTeam__card__box__content__author}`}>
                                                    <div className={`${styles.content__author_img}`}>
                                                        <img
                                                            src="/image/Elnura.jpeg"
                                                            alt="siuu" style={{borderRadius: "50%"}}/>
                                                    </div>
                                                    <div className={`${styles.content__author_information}`}>
                                                        <div className={`${styles.content__author_information_name}`}>
                                                            Эльнура Набигазинова
                                                        </div>
                                                        <div
                                                            className={`${styles.content__author_information_description}`}>
                                                            Проектный менеджер Технопарка, <br/>
                                                            <a href="mailto:elnura.nabigazinova@sdu.edu.kz">elnura.nabigazinova@sdu.edu.kz</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.ourTeam__card__box__content__review__wrapper}`}>
                                                    <div className={`${styles.ourTeam__card__box__content__review}`}>
                                                        Магистр Компьютерных Наук.
                                                        Старший преподаватель в Бизнес школе курсов Python и Machine
                                                        Learning.
                                                        Ведение коммерческих проектов software разработки в SDU IT PARK.
                                                        Контроль и мониторинг проектов в Технопарк.
                                                        Преподаватель курса Data Science по программе Techorda от
                                                        AstanaHUB
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
            {
                currentItem &&
                <VerticallyCenteredModal
                    {...currentItem}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            }
        </>
    )
}