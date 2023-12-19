import {NewsTop} from "../../components/NewsTop/NewsTop.tsx";
import {NewsMain} from "../../components/NewsMain/NewsMain.tsx";
import styles from './News.module.css'
import React, {useEffect, useState} from "react";
import {useGetAllBlogsQuery} from "../../services/technoHubApi.ts";


export const News = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const {data, isError} = useGetAllBlogsQuery()
    const [items, setItems] = useState<typeof data>(undefined)

    useEffect(() => {
        if (!isError && data) {
            setItems(data)
        }
    }, [data, isError]);


    useEffect(() => {
        setItems(data?.filter(i => i.tags.some(j => activeCategory === 'all' ? true : activeCategory === j.name)))
        console.log(items, activeCategory)
    }, [data, activeCategory]);


    return (
        <div className={styles.news}>
            <NewsTop setActiveCategory={setActiveCategory}/>
            <div className={styles.newsContainerList}>
                {
                    items && items.map((i) => (
                        <React.Fragment key={i.id}>
                            <hr className={styles.hr}/>
                            <NewsMain imageUrl={i.image_url} title={i.title} description={i.content} date={i.created_at}
                                      genre={i.tags.map(j => j.name)}
                            />
                        </React.Fragment>
                    ))
                }
                <hr className={styles.hr}/>
            </div>
        </div>
    );

};
