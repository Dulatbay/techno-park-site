import styles from './News.module.css';
import React from "react";

interface MenuProps {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}


const data = [
    {
        id: 1,
        name: 'Software'
    }
]

const NewsCategory: React.FC<MenuProps> = ({active, setActive, setCategory}) => {

    const onClick = (id: number, value: string) => {
        setActive(id);
        setCategory(value);
    };


    return (
        <>
            <div className={`${styles.newsCategory}`}>
                <div className={`${styles.newsCategory__container}`}>
                    <div className={`${styles.newsCategory__inner}`}>
                        <nav className={`${styles.menu}`}>
                            <ul>
                                {data?.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${styles[active === link.id ? "active" : "inactive"]}`}
                                        onClick={() => onClick(link.id, link.name.toLowerCase())}
                                    >
                                        <a>
                                            {link.name.charAt(0).toUpperCase() + link.name.slice(1).toLowerCase()}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    );
};

export default NewsCategory;
