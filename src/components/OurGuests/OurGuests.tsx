import styles from './OurGuests.module.css';

function OurGuests() {
    return (
        <>
            <div className={`${styles.ourGuests}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.ourGuests__inner}`}>
                        <div className={`${styles.ourGuests__title}`}>
                            <span>Наши гости</span>
                        </div>

                        <div className={`${styles.ourGuests__cards}`}>
                            {/* Card 1: Askhat  */}
                            <div className={`${styles.ourGuests__card}`}>
                                <div
                                    className={`${styles.card__image_wrapper}`}
                                >
                                    <img
                                        src="/image/guest_photos/guest_1.png"
                                        alt="Асхат Солтанов"
                                    />
                                </div>

                                <div className={`${styles.card__text_wrapper}`}>
                                    <div
                                        className={`${styles.card__text_name}`}
                                    >
                                        Асхат Солтанов
                                    </div>
                                    <div
                                        className={`${styles.card__text_description}`}
                                    >
                                        Основатель сети кондитерских Happy cake.
                                        Happy Сake начали свою работу в 2013
                                        году в г. Астана. В 2016 году открылась
                                        первая точка в Алматы. Сейчас Happy Сake
                                        являются владельцами франшизы в 25
                                        городах и открываются в США.
                                        <br />
                                        Гостевая лекция 7 октября 2022 года была
                                        организована в сотрудничестве с
                                        профессорско-преподавательским составом
                                        Школы бизнеса.
                                    </div>
                                </div>
                            </div>

                            {/* Card 2:  Zhasulan*/}
                            <div className={`${styles.ourGuests__card}`}>
                                <div
                                    className={`${styles.card__image_wrapper}`}
                                >
                                    <img
                                        src="/image/guest_photos/guest_2.png"
                                        alt="Жасулан Лес"
                                    />
                                </div>

                                <div className={`${styles.card__text_wrapper}`}>
                                    <div
                                        className={`${styles.card__text_name}`}
                                    >
                                        Жасулан Лес
                                    </div>
                                    <div
                                        className={`${styles.card__text_description}`}
                                    >
                                        Директор SDU store. На встрече спикер
                                        рассказал про зарождение идеи и ее
                                        реализации. Встреча была полезна для
                                        тех, кто задумывается об открытии своего
                                        магазина брендированной одежды, или
                                        покупки франшизы.
                                    </div>
                                </div>
                            </div>

                            {/* Card 3:  Dauren*/}
                            <div className={`${styles.ourGuests__card}`}>
                                <div
                                    className={`${styles.card__image_wrapper}`}
                                >
                                    <img
                                        src="/image/guest_photos/guest_3.png"
                                        alt="Дәурен Мұратханұлы"
                                    />
                                </div>

                                <div className={`${styles.card__text_wrapper}`}>
                                    <div
                                        className={`${styles.card__text_name}`}
                                    >
                                        Дәурен Мұратханұлы
                                    </div>
                                    <div
                                        className={`${styles.card__text_description}`}
                                    >
                                        Основатель сети кофеен Urbo coffee
                                        рассказал про свой путь к созданию сети
                                        и франшизы, ингредиенты успеха
                                        Urbocoffee, что ожидать начинающим
                                        предпринимателям и многое другое.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurGuests;
