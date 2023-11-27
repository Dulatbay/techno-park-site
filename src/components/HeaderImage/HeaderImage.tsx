import './HeaderImage.css';
import { useEffect } from 'react';

interface props {
    imageUrl: string;
    title: string;
    description: string;
}

export const HeaderImage = ({ imageUrl, title, description }: props) => {
    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            e.preventDefault();

            const targetId = (e.target as HTMLAnchorElement).getAttribute(
                'href'
            );
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        };

        document
            .querySelector('.scroll-arrow a')
            ?.addEventListener('click', handleSmoothScroll);

        // Cleanup event listener when the component unmounts
        return () => {
            document
                .querySelector('.scroll-arrow a')
                ?.removeEventListener('click', handleSmoothScroll);
        };
    }, []); // Empty dependency array ensures this effect runs once on mount

    return (
        <div className="parallax-container">
            <div
                className="parallax-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>
            <div className="parallax-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="scroll-arrow-wrapper">
                <div className="scroll-arrow">
                    <a href="#main">&#8595;</a>
                </div>
            </div>
        </div>
    );
};
