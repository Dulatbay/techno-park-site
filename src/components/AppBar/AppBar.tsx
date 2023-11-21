import './AppBar.css'

function AppBar() {


    return (
        <header>
            <div className="header_wrapper">
                <div className="header_logo">
                    <span>SDU Технопарк</span>
                </div>
                <div className={"header_pages"}>
                    <ul className="header_pages-list">
                        <li>
                            <a>SDU IT Park</a>
                        </li>
                        <li>
                            <a>Технопарк</a>
                        </li>
                        <li>
                            <a>Офис предпринимательства</a>
                        </li>
                        <li>
                            <a>Новости</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default AppBar;