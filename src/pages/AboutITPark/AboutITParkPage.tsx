import Corporation from "../../components/Corporation/Corporation.tsx";
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {Link} from "react-router-dom";


const getSection = (imageUrl: string, title: string, description: string, redirectTo: string) => {
    return (
        <div className="card w-75 m-auto">
            <a href={redirectTo} style={{textDecoration: "none"}}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title text-black">{title}</h5>
                            <p className="card-text text-black">{description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export const AboutITParkPage = () => {
    console.log("created AboutITParkPage")
    const imageUrl = '/image/about-it-park-page-header.jpg'
    const title = "SDU IT Park"
    const description = "SDU IT Park - товарищество с ограниченной ответственностью, единственным учредителем которого является университет СДУ.";
    return (
        <div>
            <HeaderImage imageUrl={imageUrl}
                         title={title}
                         description={description}
            />
            <main className={"bg-white p-5 d-flex flex-column justify-content-center align-items-center gap-5"}>
                {
                    getSection("/image/mainCourse.jpg", "Курсы", "Курсы от SDU IT Park", "/courses")
                }
                {
                    getSection("/image/mainProject.jpg", "Проекты", "Проекты выполненные в рамках SDU IT Park", '/it-park-projects')
                }
            </main>
            <Corporation/>
        </div>
    )
}