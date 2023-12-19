import NewsCategory from "./NewsCategory.tsx";
import {NewsGrid} from "./NewsGrid.tsx";
import {useEffect, useState} from "react";
import styles from './News.module.css';
import {NewsArticle, useGetAllBlogsQuery} from "../../services/technoHubApi.ts";


export const News = () => {
    const [active, setActive] = useState(0);
    const [tags, setTags] = useState("all");
    const {data, error, isFetching, isSuccess} = useGetAllBlogsQuery()
    const [items, setItems] = useState<NewsArticle[]>([]);
    useEffect(() => {
        if (data != undefined && !isFetching && isSuccess) {
            const filteredItems = tags === 'all'
                ? data
                : data.filter((item) => item.tags.some(i =>
                    i.name && i.name.toLowerCase() === tags));
            setItems(filteredItems);
        }
    }, [tags, data, isFetching, isSuccess]);

    if (error) {
        console.log(error)
        return <h1>Не удалось связаться с сервером</h1>
    }
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

                    <div className={`${styles.news__blog}`} id={"newsBlog"}>
                        <NewsCategory active={active} setActive={setActive} setCategory={setTags}/>
                        <NewsGrid items={items} category={tags}/>
                    </div>
                </div>
            </div>

        </>
    )
}