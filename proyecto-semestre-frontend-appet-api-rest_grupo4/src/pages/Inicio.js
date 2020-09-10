import React from 'react';
import { Layout, Row, Col, Button, Popover,Divider,Space,Card } from 'antd';
import '../styles/inicio.css'
import { Link, useLocation } from 'react-router-dom';
import {
    BookOutlined, CopyOutlined, LoginOutlined, QuestionCircleOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import Routes from '../constants/routes';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const AboutPage = () => {

    return (
        <>
            <Row className='first-part'>
                <Col span={24}>
                    <img src="/images/2.jpeg" />

                    <h2 >Deja a tu hijo peludo con un anfitrión
                        que lo cuida como si fuera de la familia.
                    </h2>

                    <h3> Nuestro servicio está ubicado dentro del perímetro
                        urbano de la ciudad, ofreciendo a nuestros clientes
                        perrunos adecuadas y funcionales áreas para su cuidado
                        y distracción, contando con personal calificado para el cuidado de sus mascotas.
                        Appet es un sueño hecho realidad..!!</h3>

                </Col>
            </Row>
            <Row justify='center' className='second-part'>

                <Col span={24}>

                    <Button type="primary"  href={Routes.SERVICES}>Reserva ahora</Button>
                    <br/>
                    <Row justify='center'>
                        <Col span={6}>
                            <Card title="Amor" >
                                <div >
                                    <img width={150} height={120} src="/images/1.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>

                        <Col span={6}>
                            <Card title="Seguridad" >
                                <div >
                                    <img width={150} height={120} src="/images/2.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                        <Col span={6}>
                            <Card title="Áreas amplias" >
                                <div >
                                    <img width={150} height={120} src="/images/3.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                        <Col span={6}>
                            <Card title="Medicina" >
                                <div >
                                    <img width={150} height={120} src="/images/4.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                        <Col span={6}>
                            <Card title="Lealtad" >
                                <div >
                                    <img width={150} height={120} src="/images/5.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                        <Col span={6}>
                            <Card title="Cuidado" >
                                <div >
                                    <img width={150} height={120} src="/images/6.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                        <Col span={6}>
                            <Card title="Cariño" >
                                <div >
                                    <img width={150} height={120} src="/images/7.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                        <Col span={6}>
                            <Card title="Felicidad" >
                                <div >
                                    <img width={150} height={120} src="/images/8.jpeg" />
                                </div>
                                <br/>

                                <br/>
                            </Card>
                            <br/>
                        </Col>
                    </Row>



                </Col>
            </Row>

        </>
    );
};


export default AboutPage;