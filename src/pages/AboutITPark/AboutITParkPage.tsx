import Footer from "../../components/Corporation/Corporation.tsx";
import './AboutItPark.css'
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";

export const AboutITParkPage = () => {
    console.log("created AboutITParkPage")
    const imageUrl = 'public/image/about-it-park-page-header.jpg'
    const title = "SDU IT Park"
    const description = "SDU IT Park - товарищество с ограниченной ответственностью, единственным учредителем которого является университет СДУ.";
    return (
        <>
            <HeaderImage imageUrl={imageUrl}
                         title={title}
                         description={description}
            />
            <div className='main'>
                <div className='courses'>
                    <div className='text-courses'>
                        <h1>Курсы</h1>
                        <p>Курсы от SDU IT Park</p>
                    </div>
                    <div className='coursesImage'></div>
                </div>
                <div className='projects'>
                    <div className='text-projects'>
                        <h1>Проекты</h1>
                        <p>Проекты выполненные в рамках SDU IT Park</p>
                    </div>
                    <div className='projectsImage'></div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
