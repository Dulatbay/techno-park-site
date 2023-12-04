// NewsGrid.tsx
import React from 'react';
import { NewsItem } from './NewsItem.tsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NewsItem {
    img: string;
    title: string;
    categories: string[];
    createdAt: string;
    content: string;
}

interface NewsGridProps {
    items: NewsItem[];
    category: string;
}

export const NewsGrid: React.FC<NewsGridProps> = ({ items, category }) => {
    // Filter items based on the selected category
    const filteredItems = category === 'all'
        ? items
        : items.filter((item) => item.categories.includes(category.toLowerCase()));

    return (
        <div className="news-grid">
            {filteredItems.map((item, i) => (
                <NewsItem key={i} item={item} />
            ))}
        </div>
    );
};
