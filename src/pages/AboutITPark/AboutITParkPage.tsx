import Footer from "../../components/Cooperation/Cooperation.tsx";
import './AboutItPark.css'
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";

export const AboutITParkPage = () => {
    const imageUrl = 'public/image/cooperation.png'
    return (
        <>
            <HeaderImage imageUrl={imageUrl}/>
            <div className='main'>
                <div className='course'>
                    <div className='text'>
                        <h1>Курсы</h1>
                        <p>Курсы от SDU IT Park</p>
                    </div>
                    <div className='courseImage'></div>
                </div>
                <div className='project'>
                    <div className='text'>
                        <h1>Проекты</h1>
                        <p>Проекты выполненные в рамках SDU IT Park</p>
                    </div>
                    <div className='projectImage'></div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
