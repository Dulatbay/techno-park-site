import styles from './NewsTop.module.css';
import {useState} from "react";

const data = [
    {
        id: 1,
        name: 'Software'
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
