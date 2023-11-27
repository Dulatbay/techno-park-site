<<<<<<< HEAD
<<<<<<< HEAD
import './HeaderImage.module.css'
import styles from './HeaderImage.module.css';
=======
import './HeaderImage.css';
import { useEffect } from 'react';
>>>>>>> 2e46686 (in front of classNames added their class name like className__container and so on, and updated css file using this changes)
=======
import './HeaderImage.css';
import { useEffect } from 'react';
>>>>>>> 2e46686 (in front of classNames added their class name like className__container and so on, and updated css file using this changes)

// import {useEffect} from "react";
interface props {
    imageUrl: string;
    title: string;
    description: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 2e46686 (in front of classNames added their class name like className__container and so on, and updated css file using this changes)
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
>>>>>>> 2e46686 (in front of classNames added their class name like className__container and so on, and updated css file using this changes)
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {/*<div className={styles.scrollArrowWrapper}>*/}
            {/*  <div className={styles.scrollArrow}>*/}
            {/*    <a href="#main">&#8595;</a>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </div>);
};
