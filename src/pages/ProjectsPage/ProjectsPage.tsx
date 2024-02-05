import {HeaderImage} from '../../components/HeaderImage/HeaderImage.tsx';
import {Project} from '../../components/Project/Project.tsx';
import styles from './ProjectsPage.module.css';


export const ProjectsPage = () => {

    const imageUrl = '/image/projects-page-header.jpg';
    const title = 'Проекты';
    const description = 'Коммерческие проекты заказанные у SDU IT Park.';

    return (
        <div className={styles.projectsPage}>
            <HeaderImage imageUrl={imageUrl} title={title} description={description}/>
            <main>
                <div className={styles.projectsPageContent}>
                    <div className={styles.projectsPageContentTitle}>Текущие проекты</div>
                    <div className={styles.projectList}>
                        <Project projectImage={"/image/project-1.png"} projectName={"OZYURT GROUP"}
                                 projectTitle={"Сайт для сети OZYURT GROUP"}/>
                        <Project projectImage={"/image/akimat.png"} projectName={"Акимат города Алматы"}
                                 projectTitle={"Портал для отдела ономастики аппарата акима города Алматы"}/>
                    </div>
                </div>
            </main>
        </div>
    );
};
