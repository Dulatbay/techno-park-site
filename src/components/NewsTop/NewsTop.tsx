import styles from './NewsTop.module.css';
import {useState} from "react";

const data = [
    {
        id: 1,
        name: 'Software'
    },
    {
        id: 2,
        name: 'Hardware'
    },
    {
        id: 3,
        name: 'Проекты'
    },
    {
        id: 4,
        name: 'События'
    },
    {
        id: 5,
        name: 'Достижения'
    }
]

export const NewsTop = ({setActiveCategory}: {
    setActiveCategory: (name: string) => void,
}) => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)


    function onClick(id: number, name: string) {
        setActiveCategoryIndex(id)
        setActiveCategory(name)
    }

    return (
        <div className={`${styles.newsCategory}`}>
            <div className={`${styles.newsCategory__container}`}>
                <div className={`${styles.newsCategory__inner}`}>
                    <nav className={`${styles.menu}`}>
                        <ul>
                            <li className={`${styles[activeCategoryIndex === 0 ? "active" : "inactive"]}`}
                                onClick={() => onClick(0, "all")}>
                                <a href="#">Все</a>
                            </li>
                            {data?.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${styles[activeCategoryIndex === link.id ? "active" : "inactive"]}`}
                                    onClick={() => onClick(link.id, link.name.toLowerCase())}
                                >
                                    <a href="#">
                                        {link.name.charAt(0).toUpperCase() + link.name.slice(1).toLowerCase()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );

}
