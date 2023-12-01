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

export const NewsItem: React.FC<NewsItemProps> = ({ item }) => {
    return (
        <>
            <a href="#" className={`${styles.article}`}>
                <div className={`${styles.article_image}`}>
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className={`${styles.article_title}`}>
                    <h2>{item.title}</h2>
                </div>
                <div className={`${styles.article_details}`}>
                    <small>
                        <b>Published At: {item.createdAt}</b>
                    </small>
                </div>
                <p className={`${styles.article_description}`}>{item.content}</p>
            </a>
        </>
    );
};
