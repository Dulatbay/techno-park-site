import styles from './FAQ.module.css';
import Accordion from 'react-bootstrap/Accordion';
export const FAQ = () => {

    return (
        <div className={`${styles.faq}`}>
            <h1>FAQ</h1>

            <Accordion className={`${styles.according}`} defaultActiveKey="0">

                <Accordion.Item eventKey="0">
                    <Accordion.Header>Требуется ли мне компьютер ?</Accordion.Header>
                    <Accordion.Body>
                        Bы выбираете программу обучения в режиме online – поэтому
                        вам необходимо иметь компьютер, соответствующий
                        техническим характеристикам проходимого курса.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>Сколько времени потребуется для обучения ?</Accordion.Header>
                    <Accordion.Body>
                        Продолжительность одного урока составляет 2 часа. Занятия проводятся 2 раза в неделю.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header>Что мне нужно знать для участия на курсах ?</Accordion.Header>
                    <Accordion.Body>
                        Наши программы разработаны для новичков и продолжающих. Если у вас нет каких-либо предварительных знаний или опыта в программировании - ничего страшного.
                    </Accordion.Body>
                    <Accordion.Body>
                        Мы поможем вам подобрать курс с учетом возраста, интересов и уровня подготовки.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );

}
