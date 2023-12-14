import NewsCategory from "./NewsCategory.tsx";
import {NewsGrid} from "./NewsGrid.tsx";
import {useEffect, useState} from "react";
import styles from './News.module.css';

interface NewsArticle {
    img: string;
    title: string;
    categories: string[];
    createdAt: string;
    content: string;
}

const newsData: NewsArticle[] = [
    {
        img: 'https://thumb.tildacdn.com/tild3839-6635-4332-a631-363064653063/-/cover/432x324/center/center/-/format/webp/IMAGE_2023-08-19_223.jpg',
        categories: ['achievements', 'hardware'],
        title: 'N1',
        createdAt: 'August 19, 2023',
        content: 'Первая страна из Центральной Азии - Казахстан - дебютировала в международных гонках «Формула студент». Студенты разработали автомобиль для гонки и выиграли грант на обучение.',
    },
    {
        img: 'https://thumb.tildacdn.com/tild3236-6337-4832-b966-396163643331/-/cover/432x324/center/center/-/format/webp/IMG_3274.jpg',
        categories: ['software', 'events'],
        title: 'Summer IT Camp',
        createdAt: 'Июнь 17, 2023',
        content: 'Это 2-недельное онлайн-мероприятие предназначено для того, чтобы погрузить вас в мир передовых технологий, развить ваши soft skills, получить бесценный опыт, отточить ваши знания английского языка и вызвать волну восторга!',
    },
    {
        img: 'https://thumb.tildacdn.com/tild6233-3966-4637-b464-633561633030/-/cover/432x324/center/center/-/format/webp/IMG_3282.jpg',
        categories: ['events'],
        title: 'Technopark Office for Entrepreneurship',
        createdAt: 'Июнь 11, 2023',
        content: ' Как внести свой вклад:\n' +
            '\n' +
            'Оставьте книги в нашем офисе (G 320, 3-й этаж напротив бизнес-школы) или свяжитесь с нами, и мы организуем доставку.\n' +
            'Пожертвуйте сумму в тенге и укажите желаемое название книг. Мы приобретем указанные книги от вашего имени.'
    },
];
export const News = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [items, setItems] = useState<NewsArticle[]>([]);
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        // Set items based on the selected category
        const filteredItems = category === 'all'
            ? newsData
            : newsData.filter((item) => item.categories.includes(category.toLowerCase()));

        setItems(filteredItems);
    }, [category]);

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
                        <NewsCategory active={active} setActive={setActive} setCategory={setCategory}/>
                        <NewsGrid items={items} category={category}/>
                    </div>
                </div>
            </div>

        </>
    )
}