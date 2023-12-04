import React from 'react';
import styles from './News.module.css';

interface NewsItemProps {
    item: {
        img: string;
        title: string;
        createdAt: string;
        content: string;
    };
}

export const NewsItem: React.FC<NewsItemProps> = ({item}) => {
    return (
        <>
            <a href="#" className={`${styles.article}`}>
                <div className={`${styles.article__wrapper}`}>
                    <div className={`${styles.article_image}`}>
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <div className={`${styles.article__about_post}`}>
                        <div className={`${styles.article_title}`}>
                            {item.title}
                        </div>
                        <div className={`${styles.article_details}`}>
                            <span>
                                {item.createdAt}
                            </span>
                        </div>
                        <div className={`${styles.article_description}`}>{item.content}</div>
                    </div>
                </div>
            </a>
        </>
    );
};
