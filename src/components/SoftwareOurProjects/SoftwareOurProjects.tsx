import styles from './SoftwareOurProjects.module.css';
export const SoftwareOurProjects = () => {
    return (
        <div className={`${styles.ourProjects}`}>
            <h1>Наши проекты</h1>
            <div className={`${styles.projectsContent}`}>
                <img alt={''} src={'/image/software-our-projects.png'} />
                <div>
                    <h3>UNT Informatics</h3>
                    <p>
                        Платформа для подготовки к ЕНТ по информатике с отслеживанием прогресса,
                        онлайн тренажерами для практики кодирования, пробными тестами
                        с возможностью анализа ошибок и другими полезными функциями.
                    </p>
                    <button>Сайт проекта</button>
                </div>


            </div>


        </div>
    );
}
