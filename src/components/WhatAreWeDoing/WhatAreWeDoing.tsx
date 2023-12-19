import styles from './WhatAreWeDoing.module.css';

export const WhatAreWeDoing = () => {
    return (
        <div className={`${styles.whatAreWeDoing}`}>
            <h1>Чем мы занимаемся?</h1>
            <p className={`${styles.newsText}`}>
                Вы можете узнать о деятельности Технопарка и наших проектах
                перейдя по страницам ниже. Также вы можете
                узнать больше о нас в разделе <a href={''}>"Новости"</a>
            </p>

            <div className={`${styles.list}`}>

                <a href={'/hardware'} className={`${styles.hardware}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img alt={''} src={'/image/hardware-page.jpg'}/>
                    </div>

                    <div className={`${styles.content}`}>
                        <p>SUNDAY, JUNE 18</p>
                        <h3>Hardware</h3>
                        <p>Hardware направление в Технопарке</p>
                    </div>
                </a>

                <a href={'/software'} className={`${styles.software}`}>
                    <div className={`${styles.imgContainer}`}>
                        <img src={'/image/software-page-header.jpg'}/>
                    </div>

                    <div className={`${styles.content}`}>
                        <p>SUNDAY, JUNE 18</p>
                        <h3>Software</h3>
                        <p>Software направление в Технопарке</p>
                    </div>
                </a>

            </div>
        </div>
    );
};

