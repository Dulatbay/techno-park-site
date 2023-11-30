import styles from './EnactusKazakhstan.module.css';

export const EnactusKazakhstan = () => {
    return (
        <div className={`${styles.enactusKaz}`}>
            <div>
                <h2>Enactus Казахстан</h2>
                <p>
                    Enactus Казахстан помогает студентам создавать и продвигать команды в
                    университетах по всей стране. Национальный офис Enactus координирует
                    деятельность команд и развивает студенческое сообщество предпринимателей.
                    Студенты Enactus реализуют социально-экономические проекты, которые
                    позволяют людям улучшить свою жизнь и развить предпринимательские навыки участников.
                    Преподаватели и бизнес-партнеры Enactus направляют студентов и становятся наставниками команд.
                </p>
            </div>
            <img alt={''} src={'public/image/enactus-kazakhstan.png'} loading='lazy'/>
        </div>
    );
};
