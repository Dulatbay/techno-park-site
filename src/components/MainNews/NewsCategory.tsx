import React from 'react';
import styles from './News.module.css';

interface MenuProps {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const NewsCategory: React.FC<MenuProps> = ({active, setActive, setCategory}) => {
    const links = [
        {id: 1, name: "All", value: "all"},
        {id: 2, name: "Hardware", value: "hardware"},
        {id: 3, name: "Software", value: "software"},
        {id: 4, name: "Projects", value: "projects"},
        {id: 5, name: "Events", value: "events"},
        {id: 6, name: "Achievements", value: "achievements"},
    ];

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
                                {links.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${styles[active === link.id ? "active" : "inactive"]}`}
                                        onClick={() => onClick(link.id, link.value)}
                                    >
                                        <a>
                                            {link.name}
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
