import NewsCategory from "./NewsCategory.tsx";
import {NewsGrid} from "./NewsGrid.tsx";
import {useEffect, useState} from "react";
import styles from './News.module.css';
import {NewsArticle, useGetAllBlogsQuery} from "../../services/technoHubApi.ts";


export const News = () => {
    const [active, setActive] = useState(1);
    const [tags, setTags] = useState("all");
    const {data, error, isFetching, isSuccess} = useGetAllBlogsQuery()
    const [items, setItems] = useState<NewsArticle[]>([]);
    useEffect(() => {
        if (data != undefined && !isFetching && isSuccess) {
            const filteredItems = tags === 'all'
                ? data
                : data.filter((item) => item.tags.forEach(i => {
                    if(i.title === undefined) return false;
                    console.log(i.title.toLowerCase() === tags.toLowerCase())
                    return i.title.toLowerCase() === tags.toLowerCase()
                }));
            setItems(filteredItems);
        }
    }, [tags, data, isFetching, isSuccess]);

    if (error) {
        console.log(error)
        return <h1>Unknown error</h1>
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