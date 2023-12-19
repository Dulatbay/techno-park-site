import './Project.css'

export const Project = ({projectName, projectTitle, projectImage}: {
    projectName: string,
    projectTitle: string,
    projectImage: string
}) => {
    return (
        <div className="project">
            <div className="project-image" style={{background: `url(${projectImage})`}}>
                <span>{projectName}</span>
            </div>
            <div className="project-title">
                {projectTitle}
            </div>
        </div>
    );
};
