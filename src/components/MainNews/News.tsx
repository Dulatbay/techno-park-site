import NewsCategory from "./NewsCategory.tsx";
import {NewsGrid} from "./NewsGrid.tsx";
import {useEffect, useState} from "react";
import styles from './News.module.css';



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
                        <NewsCategory setCategory={setActiveCategory}/>
                        <NewsGrid items={items} />
                    </div>
                </div>
            </div>

        </>
    )
}