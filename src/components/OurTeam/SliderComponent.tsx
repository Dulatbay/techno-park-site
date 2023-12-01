import React from 'react';
import Slider from 'react-slick';
import CardComponent from './CardComponent';
import 'slick-carousel/slick/slick.css';

interface DataItem {
    avatar: string;
    name: string;
    description: string;
    reviewText: string;
}

interface SliderProps {
    data: DataItem[];
}

const SliderComponent: React.FC<SliderProps> = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                    <CardComponent
                        avatar={item.avatar}
                        name={item.name}
                        description={item.description}
                        reviewText={item.reviewText}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SliderComponent;
