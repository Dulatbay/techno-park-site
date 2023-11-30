import styles from './FAQ.module.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
export const FAQ = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className={`${styles.faq}`}>
            <h1>FAQ</h1>
            <Button
                className={`${styles.button}`}
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}
            >
                Требуется ли мне компьютер ?
            </Button>
            <Collapse in={open1}>
                <div className={`${styles.text}`} >
                    Bы выбираете программу обучения в режиме online –
                    поэтому вам необходимо иметь компьютер, соответствующий
                    техническим характеристикам проходимого курса.
                </div>
            </Collapse>
            <Button
                className={`${styles.button}`}
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
            >
                Сколько времени потребуется для обучения ?
            </Button>
            <Collapse in={open2}>
                <div className={`${styles.text}`} >
                    Продолжительность одного урока составляет 2 часа. Занятия проводятся 2 раза в неделю.
                </div>
            </Collapse>
            <Button
                className={`${styles.button}`}
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
            >
                Сколько времени потребуется для обучения ?
            </Button>
            <Collapse in={open3}>
                <div className={`${styles.text}`} >
                    Продолжительность одного урока составляет 2 часа. Занятия проводятся 2 раза в неделю.
                </div>
            </Collapse>
            <Button
                className={`${styles.button}`}
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}
            >
                Сколько времени потребуется для обучения ?
            </Button>
            <Collapse in={open4}>
                <div className={`${styles.text}`} >
                    Продолжительность одного урока составляет 2 часа. Занятия проводятся 2 раза в неделю.
                </div>
            </Collapse>
        </div>
    );

}
