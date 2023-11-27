import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import './ProjectsPage.css'
import {Project} from "../../components/Project/Project.tsx";


export const ProjectsPage = () => {
    console.log("created ProjectsPage")
    const imageUrl = 'public/image/projects-page-header.jpg'
    const title = "Проекты"
    const description = "Коммерческие проекты заказанные у SDU IT Park.";

    return (
        <div className={"projects-page"}>
            <HeaderImage
                imageUrl={imageUrl}
                title={title}
                description={description}
            />
            <main id={'main'}>
                <div className="content">
                    <div className="content-title">Текущие проекты</div>
                    <div className="project-list">
                        <Project/>
                        <Project/>
                    </div>
                </div>
            </main>
        </div>
    );
};
