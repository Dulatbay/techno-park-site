import styles from './Slider.module.css';
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider: React.FC = () => {
    // const [firstSwiper, setFirstSwiper] = useState({});
    // const [secondSwiper, setSecondSwiper] = useState({});
    return (
        <div className={styles.sliderPart}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.image}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
