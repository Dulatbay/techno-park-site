import styles from './OurActivities.module.css';


export const OurActivities = () => {
    return (
        <div className={`${styles.ourActivities}`}>
            <div className={`${styles.leftBox}`}>
                <h2>Наша деятельность</h2>
                <p>
                    Мы занимаемся продвижением проектов, обучением студентов и организацией мероприятий!
                </p>
                <div className={`${styles.instLink}`}>
                    <span>Instagram: </span>
                    <a href={'https://www.instagram.com/enactussdu/'}>@enactussdu</a>
                </div>
            </div>
            <div className={`${styles.rightBox}`}>
                <div className={`${styles.video}`}>
                    <iframe className={`${styles.iframe}`} src="https://www.youtube.com/embed/n0cpRuFCrE0?si=pxMi525ui2O6jtgF" title="Our activities video" allowFullScreen/>
                </div>
                <span>Познакомьтесь с Enactus SDU!</span>
            </div>
        </div>
    );
}
