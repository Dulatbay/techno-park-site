import {NewsTop} from "../../components/NewsTop/NewsTop.tsx";
import {NewsMain} from "../../components/NewsMain/NewsMain.tsx";
import styles from './News.module.css'
export const News = () => {

    const imageUrl = '/image/software-page-header.jpg'
    const title = "Summer IT Camp   "
    const description = "Офис предпринимательства СДУ был открыт в августе 2022 года, главной целью которого является создать предпринимательскую экосистему в Университете.августе 2022 года, главной целью которого является создать предпринимательскую экосистему в Университете.";
    const date = "20.10.2020"
    const genre = ['События', 'Software', 'Hardware']
    return (
        <>
            <NewsTop/>
            <div className={styles.newsContainerList}>
                <hr className={styles.hr} />
                <NewsMain imageUrl={imageUrl} title={title} description={description} date={date} genre={genre}/>
                <hr className={styles.hr} />
                <NewsMain imageUrl={imageUrl} title={title} description={description} date={date} genre={genre}/>
                <hr className={styles.hr} />
                <NewsMain imageUrl={imageUrl} title={title} description={description} date={date} genre={genre}/>
                <hr className={styles.hr} />
                <NewsMain imageUrl={imageUrl} title={title} description={description} date={date} genre={genre}/>
                <hr className={styles.hr} />
            </div>
        </>
    );
};
