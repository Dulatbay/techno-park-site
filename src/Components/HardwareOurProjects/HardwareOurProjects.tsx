import styles from './HardwareOurProjects.module.css'
import React from "react";
import {BecomePartOfTeamHardware} from "../BecomePartOfTeamHardware/BecomePartOfTeamHardware.tsx";

export  const HardwareOurProjects=()=>{

    return(

        <div className={`${styles.ourProjects}`}>
            <h1>Наши проекты</h1>
            <div className={styles.proj1}>
                <img src="/public/image/hardware-our-projects1.jpg" alt=""/>
                <div className={styles.container1}>
                    <h3>Game of Drones</h3>
                    <p>
                        Game of Drones – это уникальный онлайн сервис без аналогов в стране, созданный для
                        управления настоящей механической техникой через интернет.
                        Для вас продумана специальная трасса, несколько вариантов гонок и ценные призы.

                        <br/>
                        <br/>
                        Новые технологии позволяют участвовать с любой точки Казахстана.
                        Соревнуйтесь за звание победителя на гоночных машинках не выходя из дома.
                        Играть можно в одиночку или в команде.
                    </p>
                    <a href="https://gameofdrones.kz/"><button>Офицальный сайт стартапа</button></a>
                </div>

            </div>
            <div className={styles.proj2}>
                <div className={styles.container1}>
                    <h3>N1</h3>
                    <p>Разработали электро болид для участия на мировых гоночных соревнованиях Formula Student.</p>
                    <p>Достижения:</p>
                    <ul>
                        <li><p>Первые участники гоночного соревнования Formula Student
                            в Санкт Петербурге из Центральной Азии.</p></li>
                        <li><p>Получили 5 грантов на обучение в ВАЗ в Тольятти.</p></li>
                        <li><p>Открыли N1 Academy, обучают 30 студентов в области 3D-моделирования и электроники.</p></li>
                    </ul>
                    <a href="https://qtap.kz/N1Group?fbclid=PAAaaeyhs7XJzunzkBuU_SfbwLyoj1wkYTlGHrknU_UoJTXKd8bsbE1IDZsdo_aem_AVpW3A3qdVjtGgNacK6Zi4nDUIPnTAos4XN_sLeqwUkaBo5UccCF9tXdYN0bYP5EPXg"><button>Соцсети стартапа</button></a>
                </div>
                <img src="/public/image/hardware-our-projects2.jpeg" alt=""/>

            </div>
            <BecomePartOfTeamHardware imageUrl="/public/image/hardware-partOfTeam.jpg" title="Стань частью команды!"/>
        </div>


    );
}