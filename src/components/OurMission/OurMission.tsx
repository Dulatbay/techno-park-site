import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './OurMission.module.css';

export const OurMission = () => {
    return (
        <Container fluid className={styles.ourMission}>
            <Container className={styles.ourMission__container}>
                <Row>
                    <Col lg={5} className={`position-relative ${styles.ourMission__left__side}`}>
                        <div className={styles.ourMission__left__side__box}>
                            <div className={styles.ourMission__left__side__box_title}>
                                Наша миссия
                            </div>
                            <div className={styles.ourMission__left__side__box__line_wrapper}>
                                <div className={styles.ourMission__left__side__box__line}></div>
                            </div>
                            <div className={styles.ourMission__left__side__box_description}>
                                <span>
                                    Миссия Технопарка заключается в обучении и
                                    воспитании студентов, способных успешно
                                    реализовываться используя практические знания и
                                    навыки, решать актуальные проблемы и передавать
                                    свой опыт новому поколению. Мы решаем,
                                    поддерживаем, направляем, обучаем и делимся!
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} className={`position-relative ${styles.ourMission__right__side}`}>
                        <Image
                            src={'/image/our_mission.jpg'}
                            alt="Photo mission!"
                            className={styles.ourMission__right__side_img}
                            fluid
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
