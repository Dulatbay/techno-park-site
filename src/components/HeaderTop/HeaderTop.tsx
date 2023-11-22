import style from './HeaderTop.module.css'
import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (
        <header className={style.headerTop}>
            <div className={style.leftHeader}>
                <a href='#'>
                    <div className=''>
                        SDU Технопарк
                    </div>
                </a>
            </div>
            <div className={style.rightHeader}>
                <ul className={style.menu}>
                    <li className={style.links}>
                        <span>SDU IT Park</span>
                        <ul>
                            <li>
                                <Link to="/">
                                    О нас, IT Park
                                </Link>
                            </li>
                            <li>
                                <Link to={'/it-park-projects'}>
                                    Проекты
                                </Link>
                            </li>
                            <li><a href="#">Курсы</a></li>
                        </ul>
                    </li>
                    <li className={style.links}>
                        <span>Технопарк</span>
                        <ul>
                            <li><a href="#">О нас, Технопарк</a></li>
                            <li><a href="#">Software</a></li>
                            <li><a href="#">Hardware</a></li>
                        </ul>
                    </li>
                    <li className={style.links}>
                        <span>Офис предпринимательства</span>
                        <ul>
                            <li><a href="#">О нас, ОП</a></li>
                            <li><a href="#">Enactus</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Новости</a></li>
                </ul>

                <div className={style.burger}>
                    <span></span>
                </div>
            </div>
        </header>
    );
}


export default HeaderTop;