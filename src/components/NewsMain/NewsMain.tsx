import styles from './NewsMain.module.css';

interface props {
    imageUrl: string,
    title: string,
    description: string,
    date: string,
    genre: string[]
}

export const NewsMain = ({imageUrl, title, description, date, genre}: props) => {

    return (
        <div className={`${styles.newsMain}`}>
            <div className={`${styles.container}`}>

                <div>
                    <img className={`${styles.img}`} alt={''} src={imageUrl}/>
                </div>

                <div className={`${styles.content}`}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div className={`${styles.contentBottom}`}>
                        <span>{date}</span>
                        {genre && genre.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );

}
