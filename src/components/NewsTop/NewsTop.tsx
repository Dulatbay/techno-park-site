import styles from './NewsTop.module.css';
export const NewsTop = () => {
    const links = [
        {id: 1, name: "All", value: "all"},
        {id: 2, name: "Hardware", value: "hardware"},
        {id: 3, name: "Software", value: "software"},
        {id: 4, name: "Projects", value: "projects"},
        {id: 5, name: "Events", value: "events"},
        {id: 6, name: "Achievements", value: "achievements"},
    ];
    return (
        <div className={`${styles.newsCategory}`}>
            <div className={`${styles.newsCategory__container}`}>
                <div className={`${styles.newsCategory__inner}`}>
                    <nav className={`${styles.menu}`}>
                        <ul>
                            {links.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${styles[1 === link.id ? "active" : "inactive"]}`}
                                    // onClick={() => onClick(link.id, link.value)}
                                >
                                    <a href="#">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );

}
