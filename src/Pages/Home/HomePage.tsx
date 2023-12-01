import './Home.module.css'
import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
// @ts-ignore
import React from "react";
import styles from "../OFE/OFE.module.css";
import {OurMission} from "../../components/OurMission/OurMission.tsx";
import {Departments} from "../../components/Departments/Departments.tsx";
import {OurTeam} from "../../components/OurTeam/OutTeam.tsx";
import {News} from "../../components/MainNews/News.tsx";

// const getSectionTeam = (imageUrl: string, name: string, job_title: string, mail: string, description: string) => {
//     return (
//         <div className="card mb-3">
//             <div className="row g-0">
//                 <div className="col-md-4">
//                     <img src="..." className="img-fluid rounded-start" alt="..."/>
//                 </div>
//                 <div className="col-md-8">
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
//                             additional content. This content is a little bit longer.</p>
//                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                     </div>
//                 </div>
//             </div>
//         </div>);
// }

export const Homepage = () => {


    const imageUrl = 'public/image/home-page-header.png'
    const title = "SDU Tехнопарк"
    const description = "Технопарк - это объединение департаментов, направленных на воспитание и обучение студентов, способных создавать свои проекты и стартапы.";


    return (
        <div className={"about-it-park-page"}>
            <HeaderImage imageUrl={imageUrl}
                         title={title}
                         description={description}
            />

            <main id={'main'}>
                <div className={`${styles.content}`}>
                    <OurMission/>
                    <Departments/>
                    <OurTeam/>
                    <News />
                </div>
            </main>
        </div>
    );
}
