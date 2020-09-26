import React from 'react';
import { Layout, Row, Col, Button, Popover,Divider,Space,Card } from 'antd';
import Icon from '@ant-design/icons';
import '../styles/advertisements.css'
import { Link, useLocation } from 'react-router-dom';
import {
    BookOutlined, CopyOutlined, LoginOutlined, QuestionCircleOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import Routes from '../constants/routes';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const Advertisements = () => {

    return (
        <>
            <Row className='first-part' position={'center'}>
                <Col span={12}>
                    <h1>Médico Veterinario</h1>
                    <img src="/images/anuncio.jpeg" width={300} height={200}/>
                    <h3>Médico veterinario especialista
                        en perros con 12 años de ezperiencia en la
                        práctica veterinaria, cursos y residencias en
                        centros de especialidad veterinaria en Sudamérica</h3>
                    <h2>Dias de atención</h2>
                    <h3>Lunes a viernes 9h00-16h00</h3>
                    <h2>Servicios que ofrece:</h2>
                    <h3>-Vacunas</h3>
                    <h3>-Esterilización</h3>
                </Col>
                <Col span={12} >
                    <h4 justify='center'>$20</h4>
                    <img src="/images/cara.png" width={100} height={70}/>
                    <Button type="primary"  href={Routes.ORDERDETAIL}>Solicitar</Button>
                </Col>
            </Row>

        </>
    );
};


export default Advertisements;