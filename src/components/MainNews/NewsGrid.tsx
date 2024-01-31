import React from 'react';
import {NewsArticle, NewsItem} from './NewsItem.tsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './News.module.css';



interface NewsGridProps {
    items: NewsArticle[];
    category: string;
}

export const NewsGrid: React.FC<NewsGridProps> = ({ items }) => {
    return (
        <div className={styles.news_grid}>
            {items.map((item, i) => (
                <NewsItem key={i} item={item} />
            ))}
        </div>
    );
};
