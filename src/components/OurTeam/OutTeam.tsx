import styles from './OurTeam.module.css';
import SliderComponent from "./SliderComponent.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';


export const OurTeam = () => {
    const data = [
        {
            avatar: 'https://thumb.tildacdn.com/tild3163-3265-4935-a462-666562303433/-/cover/120x120/center/center/-/format/webp/photo_2023-11-25_223.jpeg',
            name: 'John Doe',
            description: 'Customer',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
    ];

    return (
        <>
            <div className={`${styles.ourTeam}`}>
                <div className={`${styles.ourTeam__container}`}>
                    <div className={`${styles.ourTeam__inner}`}>
                        <div className={`${styles.ourTeam__title__wrapper}`}>
                            <div className={`${styles.ourTeam__title}`}>
                                <span>Наша команда</span>
                            </div>
                        </div>

                        <SliderComponent data={data}/>
                    </div>
                </div>
            </div>
        </>
    )
}