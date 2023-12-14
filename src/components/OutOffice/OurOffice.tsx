import styles from './OurOffice.module.css'
import {useState} from "react";

export const OurOffice = () => {
    const [selectedIndex, setSelectedIndex] = useState(1)
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <div className={styles.titleImage} style={{
                    backgroundImage: `url(/image/about-office-images/${selectedIndex}.jpg)`,
                    transition: "background-image ease-in-out .3s"
                }}></div>
                <div className={styles.images}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(i =>
                            <div
                                className={styles.image}
                            >
                                <img
                                    loading={"lazy"}
                                    src={`/image/about-office-images/resize-${i}.jpg`}
                                    alt={"."}
                                    onClick={() => {
                                        setSelectedIndex(i)
                                    }}
                                    key={i}
                                >
                                </img>
                            </div>)
                    }
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.title}>Наш офис</div>
                <ul>
                    <li>Welcome зона</li>
                    <li>Зона отдыха</li>
                    <li>Кухня</li>
                    <li>Коворкинг</li>
                    <li>Кабинет старших software ассистентов</li>
                    <li>Кабинет старших hardware ассистентов</li>
                    <li>Мастерские для hardware ассистентов</li>
                    <li>Зона ЧПУ станков</li>
                    <li>Мультимедийная лаборатория</li>
                    <li>Кабинет директора</li>
                    <li>IOT, ML лаборатории (в процессе)</li>
                </ul>
            </div>
        </div>
    );
};
