import NewsCategory from "./NewsCategory.tsx";
import {NewsGrid} from "./NewsGrid.tsx";
import {useEffect, useState} from "react";
import styles from './News.module.css';


const items = [
    {

    }
]

export const News = () => {
    const [active, setActive] = useState(0);
    const [tags, setTags] = useState("all");

    return (
        <>
            <div className={`${styles.news}`}>
                <div className={`${styles.news__container}`}>
                    <div className={`${styles.news__inner}`}>
                        <div className={`${styles.news__text_wrapper}`}>
                            <div className={`${styles.news__text}`}>
                                <strong>Новости</strong>
                            </div>
                        </div>
                    </div>

                    <div id={"newsBlog"}>
                        <NewsCategory active={active} setActive={setActive} setCategory={setTags}/>
                        <NewsGrid items={items} category={tags}/>
                    </div>
                </div>
            </div>

        </>
    )
}