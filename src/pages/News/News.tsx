import {NewsTop} from "../../components/NewsTop/NewsTop.tsx";
import {NewsMain} from "../../components/NewsMain/NewsMain.tsx";
import styles from './News.module.css'
import React, {useEffect, useState} from "react";


const data = [
    {
        id: 1,
        image_url: '/image/news_photos/news_1.jpg',
        title: "N1",
        tags: [
            {
                name: 'HARDWARE'
            },
            {
                name: 'ДОСТИЖЕНИЯ'
            },
            {
                name: 'СОБЫТИЯ'
            }
        ],
        content: "Первая страна из Центральной Азии - Казахстан - дебютировала в международных гонках «Формула студент». Студенты разработали автомобиль для гонки и выиграли грант на обучение.",
        created_at: "19.08.2023",

    },
    {
        id: 2,
        image_url: '/image/news_photos/news_2.jpg',
        title: "Summer IT Camp",
        tags: [
            {
                name: 'СОБЫТИЯ'
            },
            {
                name: 'SOFTWARE'
            }
        ],
        content: "Это 2-недельное онлайн-мероприятие предназначено для того, чтобы погрузить вас в мир передовых технологий, развить ваши soft skills, получить бесценный опыт, отточить ваши знания английского языка и вызвать волну восторга!",
        created_at: "17.06.2023",
    },
    {
        id: 3,
        image_url: '/image/news_photos/news_3.jpg',
        title: "Technopark&Office for Entrepreneurship",
        tags: [
            {
                name: 'СОБЫТИЯ'
            }
        ],
        content: "Офис предпринимательства и @technopark_sdu собирают книги по бизнесу, IT, предпринимательству. Все собранные книги будут доступны для чтения.",
        created_at: "17.06.2023",
    },
    {
        id: 4,
        image_url: '/image/news_photos/news_4.jpg',
        title: "Decentrathon",
        tags: [
            {
                name: 'СОБЫТИЯ'
            },
            {
                name: 'SOFTWARE'
            }
        ],
        content: "Decentrathon хакатон. Команды принявшие участие получат ценные знания и призы. Общий призовой фонд составляет 10,000 $",
        created_at: "17.06.2023",
    },
    {
        id: 5,
        image_url: '/image/news_photos/news_5.jpg',
        title: "Web3 хакатон",
        tags: [
            {
                name: 'СОБЫТИЯ'
            },
            {
                name: 'SOFTWARE'
            }
        ],
        content: "Blockchain Center совместно с Binance, BNB Chain и Astana Hub объявляют о старте первого мультилокационного хакатона -Decentrathon!",
        created_at: "17.06.2023",
    }
]

export const News = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [items, setItems] = useState(data)


    useEffect(() => {
        setItems(data?.filter(i => i.tags.some(j => activeCategory === 'all' ? true : activeCategory.toLowerCase() === j.name.toLowerCase())))
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
