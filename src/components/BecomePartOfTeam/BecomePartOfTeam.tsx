import styles from './BecomePartOfTeam.module.css';

interface props {
    imageUrl: string,
    title: string,
    isRadio: boolean
}

export const BecomePartOfTeam = ({imageUrl, title, isRadio} : props) => {
    return (
        <div className={`${styles.becomePart}`}>
            <img alt={''} src={imageUrl}/>
            <div className={`${styles.inputInfo}`}>
                <h1>{title}</h1>
                <input className={`${styles.input}`} placeholder='Email'/>
                <input className={`${styles.input}`} placeholder='ФИО'/>
                <input className={`${styles.input}`} placeholder='+9 (999) 999 99 99'/>
                {isRadio && (
                        <div className={`${styles.radios}`}>
                            <label>Выберите направление</label>
                            <label>
                                <input className={`${styles.radioInput}`} type="radio" name="option" value="option1" />
                                <span>Frontend</span>
                            </label>
                            <label>
                                <input className={`${styles.radioInput}`} type="radio" name="option" value="option2" />
                                <span>Backend</span>
                            </label>
                        </div>
                )}
                <span className={`${styles.textareaSpan}`}>Мотивационное письмо.</span>
                <textarea placeholder='Почему вы хотите к нам присоединиться?'></textarea>
                <button>Отправить</button>
            </div>
        </div>
    );
}
