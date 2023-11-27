import React from 'react';
// import './Slider.module.css';

import 'bootstrap/dist/css/bootstrap.css';
import styles from './Slider.module.css';
import heroImage from '../../../public/image/carousel_photos/phoyo.svg';
import {Carousel} from "react-bootstrap";

interface Hero {
    id: number;
    image: string; // Assuming the image path is a string
    title: string;
    description: string;
    link: string;
}

const heroData: Hero[] = [
    {
        id: 1,
        image: heroImage,
        title: 'The perfect design for your website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: heroImage,
        title: 'Start Your Future Financial Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: heroImage,
        title: 'Enjoy the Difference',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.twitter.com'
    }
];


const Slider = () => {
    // const slides = [
    //     {
    //         imageSrc: '../../../public/image/carousel_photos/image_1.png',
    //         caption: 'Caption for image 1',
    //     },
    //     {
    //         imageSrc: '../../../public/image/carousel_photos/image_2.png',
    //         caption: 'Caption for image 2',
    //     },
    //     {
    //         imageSrc: '../../../public/image/carousel_photos/image_3.png',
    //         caption: 'Caption for image 3',
    //     },
    // ];
    return (
        <>
            <div className={`${styles.carousel__component}`}>
                <div className="carousel__container">
                    <div className="carousel__inner">
                        <section id="home" className="hero-block">
                            <Carousel>
                                {
                                    heroData.map(hero => {
                                        return (
                                            <Carousel.Item key={hero.id}>
                                                <img
                                                    className="d-block w-100"
                                                    style={{width: '800px', height: '400px'}}
                                                    src={hero.image}
                                                    alt={"slide " + hero.id}
                                                />
                                                <Carousel.Caption>
                                                    <h2>{hero.title}</h2>
                                                    <p>{hero.description}</p>
                                                    <a className="btn btn-primary" href={hero.link}>Learn More <i
                                                        className="fas fa-chevron-right"></i></a>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        );
                                    })
                                }
                            </Carousel>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
