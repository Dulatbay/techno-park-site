import Corporation from "../../components/Corporation/Corporation.tsx";
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";


const getSection = (imageUrl: string, title: string, description: string) => {
    return (
        <div className="card w-75 m-auto">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={imageUrl} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title text-black">{title}</h5>
                        <p className="card-text text-black">{description}</p>
                        <p className="card-text"><small className="text-muted">Тут еще какой-то интересный текст</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export const AboutITParkPage = () => {
    console.log("created AboutITParkPage")
    const imageUrl = 'public/image/about-it-park-page-header.jpg'
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
                    getSection("/public/image/mainCourse.jpg", "Курсы", "Курсы от SDU IT Park")
                }
                {
                    getSection("/public/image/mainProject.jpg", "Проекты", "Проекты выполненные в рамках SDU IT Park")
                }
            </main>
            <Corporation/>
        </div>
    )
}