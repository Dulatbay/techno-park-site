import styles from './News.module.css';
import {baseUrl, NewsArticle} from "../../services/technoHubApi.ts";


export const NewsItem = ({item}: { item: NewsArticle }) => {
    return (
        <>
            <a href="/" className={`${styles.article}`}>
                <div className={`${styles.article__wrapper}`}>
                    <div className={`${styles.article_image}`}>
                        <img src={baseUrl + "files/" + item.image_url} alt={item.title}/>
                    </div>
                    <div className={`${styles.article__about_post}`}>
                        <div className={`${styles.article_title}`}>
                            {item.title}
                        </div>
                        <div className={`${styles.article_details}`}>
                            <span>
                                {item.created_at}
                            </span>
                        </div>
                        <div className={`${styles.article_description}`}>{item.content}</div>
                    </div>
                </div>
            </a>
        </>
    );
};
