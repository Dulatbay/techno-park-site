import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <>
            <div className={`${styles.contacts}`}>
                <div className={`${styles.contacts__container}`}>
                    <div className={`${styles.contacts__inner}`}>
                        <div className={`${styles.contacts__left_side}`}>
                            <div className={`${styles.left_side__title}`}>
                                <span>Партнеры, контакты</span>
                            </div>
                            <div className={`${styles.left_side__description}`}>
                                <div
                                    className={`${styles.left_side__partners}`}
                                >
                                    <p className="partners_text">
                                        Партнеры:
                                        <br />{' '}
                                        <span>
                                            NURIS:{' '}
                                            <a href="https://www.instagram.com/nuris_cluster/">
                                                @nuris_cluster,
                                            </a>
                                        </span>
                                        <br />{' '}
                                        <span>
                                            JasVentures Almaty:{' '}
                                            <a href="https://www.instagram.com/jas.ventures/">
                                                @jas.ventures
                                            </a>
                                        </span>
                                    </p>
                                </div>

                                <div className="left_side__address">
                                    <p className="address__text">
                                        <br />
                                        Расположение:
                                        <br />
                                        <span>
                                            СДУ Университет, G 318, G 320
                                            (напротив Бизнес школы)
                                        </span>
                                    </p>
                                </div>

                                <div className="left_side__contacts">
                                    <p className="contacts__text">
                                        <br />
                                        Контакты:
                                        <br />{' '}
                                        <span>
                                            Instagram:{' '}
                                            <a href="https://www.instagram.com/ofe_sdu/">
                                                @ofe_sdu
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.contacts__right_side}`}>
                            <div className={`${styles.right_side__img}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
