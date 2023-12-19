import styles from './NewsTop.module.css';
import {useGetAllTagsQuery} from "../../services/technoHubApi.ts";
import {useEffect, useState} from "react";

export const NewsTop = ({setActiveCategory}: {
    setActiveCategory: (name: string) => void,
}) => {
    const {data, isError} = useGetAllTagsQuery()
    const [items, setItems] = useState<typeof data>(undefined)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

    useEffect(() => {

        if (!isError && data) {
            setItems([{id: 0, name: "All"}, ...data])
        }

    }, [data, isError])

    function onClick(id: number, name: string) {
        setActiveCategoryIndex(id)
        setActiveCategory(name)
    }

    if (isError || !data)
        return <h1>Не удалось соедениться с сервером</h1>

    return (
        <div className={`${styles.newsCategory}`}>
            <div className={`${styles.newsCategory__container}`}>
                <div className={`${styles.newsCategory__inner}`}>
                    <nav className={`${styles.menu}`}>
                        <ul>
                            {items?.map((link) => (
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
