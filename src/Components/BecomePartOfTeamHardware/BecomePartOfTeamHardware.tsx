import styles from './BecomePartOfTeamHardware.module.css';

interface props {
    imageUrl: string,
    title: string,
}

export const BecomePartOfTeamHardware = ({imageUrl, title} : props) => {
    return (
        <div className={`${styles.becomePart}`}>
            <img alt={''} src={imageUrl}/>
            <div className={`${styles.inputInfo}`}>
                <h1>{title}</h1>
                <input className={`${styles.input}`} placeholder='Email'/>
                <input className={`${styles.input}`} placeholder='ФИО'/>
                <input className={`${styles.input}`} placeholder='+9 (999) 999 99 99'/>

                <span className={`${styles.textareaSpan}`}>Мотивационное письмо.</span>
                <textarea placeholder='Почему вы хотите к нам присоединиться?'></textarea>
                <button>Отправить</button>
            </div>
        </div>
    );
}
