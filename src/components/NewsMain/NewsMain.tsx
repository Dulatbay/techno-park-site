import styles from './NewsMain.module.css';
import {baseUrl} from "../../services/technoHubApi.ts";

interface props {
    imageUrl: string,
    title: string,
    description: string,
    date: string,
    genre: string[]
}

function formatDate(isoDateString: string) {
    const date = new Date(isoDateString);

    // Extracting day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export const NewsMain = ({imageUrl, title, description, date, genre}: props) => {

    return (
        <div className={`${styles.newsMain}`}>
            <div className={`${styles.container}`}>

                <div>
                    <img className={`${styles.img}`} alt={''} src={baseUrl + 'files/' + imageUrl}/>
                </div>

                <div className={`${styles.content}`}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div className={`${styles.contentBottom}`}>
                        <span>{formatDate(date)}</span>
                        {genre && genre.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );

}
