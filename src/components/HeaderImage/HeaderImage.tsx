import styles from './HeaderImage.module.css';

interface props {
    imageUrl: string,
    title: string,
    description: string
}

export const HeaderImage = ({imageUrl, title, description}: props) => {
    // useEffect(() => {
    //     const handleSmoothScroll = (e: Event) => {
    //         e.preventDefault();
    //
    //         const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //
    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth',
    //             });
    //         }
    //     };
    //
    //     document.querySelector('.scroll-arrow a')?.addEventListener('click', handleSmoothScroll);
    //
    //     // Cleanup event listener when the component unmounts
    //     return () => {
    //         document.querySelector('.scroll-arrow a')?.removeEventListener('click', handleSmoothScroll);
    //     };
    // }, []); // Empty dependency array ensures this effect runs once on mount

    return (
        <div className={styles.parallaxContainer}>
            <div className={styles.parallaxImage} style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className={styles.parallaxContent}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>);
};
