import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <>
            <div className={`${styles.contacts}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.contacts__inner}`}>
                        <div className={`${styles.contacts__left_side}`}>
                            <div className={`${styles.left_side_title}`}>
                                <span>Партнеры, контакты</span>
                            </div>
                            <div className={`${styles.left_side_description}`}>
                                <div className={`${styles.left_side_partners}`}>
                                    <p className="partners_text">Партнеры:
                                        <br/> <span>NURIS: <a
                                            href="https://www.instagram.com/nuris_cluster/">@nuris_cluster,</a></span>
                                        <br/> <span>JasVentures Almaty: <a
                                            href="https://www.instagram.com/jas.ventures/">@jas.ventures</a></span>
                                    </p>
                                </div>

                                <div className="left_side_address">
                                    <p className="address_text"><br/>Расположение:
                                        <br/><span>СДУ Университет, G 318, G 320 (напротив Бизнес школы)</span></p>
                                </div>

                                <div className="left_side_contacts">
                                    <p className="contacts_text"><br/>Контакты:
                                        <br/> <span>Instagram: <a
                                            href="https://www.instagram.com/ofe_sdu/">@ofe_sdu</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.contacts__right_side}`}>
                            <div className={`${styles.right_side_img}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacts;