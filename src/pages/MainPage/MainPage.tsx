import styles from "../OFE/OFE.module.css";
import {OurMission} from "../../components/OurMission/OurMission.tsx";
import {Departments} from "../../components/Departments/Departments.tsx";
import {OurTeam} from "../../components/OurTeam/OutTeam.tsx";
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {NewsGrid} from "../../components/MainNews/NewsGrid.tsx";
import {useEffect, useState} from "react";
import Menu from "../../components/MainNews/Menu.tsx";

interface NewsArticle {
    img: string;
    title: string;
    categories: string[];
    createdAt: string;
    content: string;
}

export const MainPage = () => {

    const newsData: NewsArticle[] = [
        {
            img: 'https://static.tildacdn.com/tild3839-6635-4332-a631-363064653063/IMAGE_2023-08-19_223.jpg',
            categories: ['achievements', 'hardware'],
            title: 'N1',
            createdAt: 'August 19, 2023',
            content: 'Первая страна из Центральной Азии - Казахстан - дебютировала в международных гонках «Формула студент». Студенты разработали автомобиль для гонки и выиграли грант на обучение.',
        },
        {
            img: 'https://static.tildacdn.com/tild3236-6337-4832-b966-396163643331/IMG_3274.jpg',
            categories: ['software', 'events'],
            title: 'Summer IT Camp',
            createdAt: 'Июнь 17, 2023',
            content: 'Это 2-недельное онлайн-мероприятие предназначено для того, чтобы погрузить вас в мир передовых технологий, развить ваши soft skills, получить бесценный опыт, отточить ваши знания английского языка и вызвать волну восторга!',
        },
        {
            img: 'https://static.tildacdn.com/tild6233-3966-4637-b464-633561633030/IMG_3282.jpg',
            categories: ['events'],
            title: 'Technopark Office for Entrepreneurship',
            createdAt: 'Июнь 11, 2023',
            content: ' Как внести свой вклад:\n' +
                '\n' +
                'Оставьте книги в нашем офисе (G 320, 3-й этаж напротив бизнес-школы) или свяжитесь с нами, и мы организуем доставку.\n' +
                'Пожертвуйте сумму в тенге и укажите желаемое название книг. Мы приобретем указанные книги от вашего имени.'
        },
    ];


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

    const imageUrl = 'https://thumb.tildacdn.com/tild6362-3661-4038-a430-653263343961/-/format/webp/image.png'
    const title = "SDU Технопарк"
    const description = "Технопарк - это объединение департаментов, направленных на воспитание и обучение студентов, способных создавать свои проекты и стартапы.";

    return (
        <>
            <HeaderImage imageUrl={imageUrl}
                         title={title}
                         description={description}
            />

            <main id={'main'}>
                <div className={`${styles.content}`}>
                    <OurMission/>
                    <Departments/>
                    <Menu active={active} setActive={setActive} setCategory={setCategory}/>
                    <NewsGrid items={newsData} category={category}/>
                    <OurTeam/>
                </div>
            </main>
        </>
    );
};
