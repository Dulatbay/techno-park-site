import styles from './NewsTop.module.css';
export const NewsTop = () => {

    return (
        <div className={`${styles.newsTop}`}>
            <div className={`${styles.container}`}>
                <h1>Новости</h1>
                <div className={`${styles.linkList}`}>
                    <a>Все</a>
                    <a>Hardware</a>
                    <a>Software</a>
                    <a>Проекты</a>
                    <a>События</a>
                    <a>Достижения</a>
                </div>
            </div>
        </div>
    );

}
