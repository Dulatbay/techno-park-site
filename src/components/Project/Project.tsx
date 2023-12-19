import styles from './Project.module.css'

export const Project = ({projectName, projectTitle, projectImage}: {
    projectName: string,
    projectTitle: string,
    projectImage: string
}) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectImage}>
                <img src={projectImage} alt=".."/>
                <span>{projectName}</span>
            </div>
            <div className={styles.projectTitle}>
                {projectTitle}
            </div>
        </div>
    );
};
