import React, {useEffect, useState} from 'react';
import styles from './News.module.css';
import {useGetAllTagsQuery} from "../../services/technoHubApi.ts";

interface MenuProps {
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const NewsCategory: React.FC<MenuProps> = ({active, setActive, setCategory}) => {
    const {data, isError} = useGetAllTagsQuery()
    const [links, setLinks] = useState<typeof data>(undefined)

    useEffect(() => {
        if (!isError && data?.length) {
            setLinks([{id: 0, name: "All"}, ...data])
        }
    }, [data, isError])

    const onClick = (id: number, value: string) => {
        setActive(id);
        setCategory(value);
    };

    if (isError)
        return <h1>Не удалось свзязаться с сервером</h1>

    return (
        <>
            <div className={`${styles.newsCategory}`}>
                <div className={`${styles.newsCategory__container}`}>
                    <div className={`${styles.newsCategory__inner}`}>
                        <nav className={`${styles.menu}`}>
                            <ul>
                                {links?.map((link) => (
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
