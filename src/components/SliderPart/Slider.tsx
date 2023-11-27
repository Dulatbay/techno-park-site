import styles from './Slider.module.css';

const Slider: React.FC = () => {
    return (
        <>
            <div className={`${styles.sliderPart}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.sliderPart__inner}`}>
                        TEST
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
