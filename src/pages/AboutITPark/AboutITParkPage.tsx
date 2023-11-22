import Footer from "../../components/Cooperation/Cooperation.tsx";
import HeaderTop from "../../components/HeaderTop/HeaderTop.tsx";
import './AboutItPark.css'
export const AboutITParkPage = () => {
    return (
        <>
            <HeaderTop/>
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
