import styles from './Corporation.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Corporation = () => {
    return (
        <div className={styles.footerTop}>
            <div className={styles.footerTopContent}>
                <h1>Сотрудничество</h1>
                <p>
                    Если вы хотите стать нашим партнером, инвестором или заказчиком, то просим вас заполнить данную форму.
                </p>
                <form className={styles.footerTopInput}>
                    <Form.Control type="email" placeholder="Почта" size="lg" />
                    <Form.Control type="phone" placeholder="+9 (999) 999 99 99" size="lg" />
                    <Form.Control type="text" placeholder="ФИО" size="lg" />
                    <Button variant="primary" size="lg">
                        Отправить
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Corporation;
