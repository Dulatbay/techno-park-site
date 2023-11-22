import styles from './Incubators.module.css';

const Incubators: React.FC = () => {
    return (
        <div className={`${styles.incubators}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.incubators_inner}`}>
                    <div className={`${styles.incubators_title}`}>
                        <div className={`${styles.title__span}`}>
                            <span>Инкубаторы</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Incubators;
