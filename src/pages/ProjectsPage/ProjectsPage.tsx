import { HeaderImage } from '../../components/HeaderImage/HeaderImage.tsx';
import { Project } from '../../components/Project/Project.tsx';
import styles from './ProjectsPage.module.css';


const imageUrl = 'public/image/projects-page-header.jpg';
const title = 'Проекты';
const description = 'Коммерческие проекты заказанные у SDU IT Park.';

export const ProjectsPage = () => {
    console.log('created ProjectsPage');

    return (
        <div className={styles.projectsPage}>
            <HeaderImage imageUrl={imageUrl} title={title} description={description} />
            <main id="main">
                <div className={styles.projectsPageContent}>
                    <div className={styles.projectsPageContentTitle}>Текущие проекты</div>
                    <div className={styles.projectList}>
                        <Project />
                        <Project />
                    </div>
                </div>
            </main>
        </div>
    );
};
