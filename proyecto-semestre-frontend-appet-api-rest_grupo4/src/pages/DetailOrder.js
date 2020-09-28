import React, {useState} from 'react';
import {
    Layout, Row, Col, Button, Popover, Divider, Space, Card, Image, Skeleton, Input,Form} from 'antd';
import '../styles/inicio.css'
import {DollarCircleOutlined} from '@ant-design/icons'
import {useServicesList} from "../data/useServicesList";
import ShowError from "../components/ShowError";
import API from "../data";




export const fetchServices = async() => {
    // console.log( `Show data fetched. Services: ${ JSON.stringify( articles ) }` );

    return await API.get( '/services' );
};

const DetailOrder = (props) => {
    const [ visible, setVisible ] = useState( false );
    const { services, isLoading, isError, mutate } = useServicesList();


    const afterCreate = async() => {
        try {
            // show skeleton
            await mutate( '/services', async services => {
                return { data: [ {}, ...services.data ] };
            }, false );

            await mutate( '/services' );
            setVisible( false ); // close the modal
        } catch( error ) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );


        }
    };

    if( isLoading ) {
        return <Row justify='center' gutter={ 30 }>
            {
                [ ...new Array( 9 ) ].map( ( _, i ) =>
                    <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
                        <div style={ { textAlign: 'center' } }>
                            <Skeleton.Image style={ { width: 200 } } />
                            <Card title='' extra='' cover='' loading />
                        </div>
                    </Col>
                )
            }
        </Row>;
    }

    if( isError ) {
        return <ShowError error={ isError } />;
    }


    return (
        <>
            <div align={"center"}>
                        <Image height={200} width={1265} src={"/images/10.jpeg"} ></Image>
            </div>

            <h2 align={"center"}>
                DETALLE DEL PEDIDO
            </h2>
                {
                    services.map((service,index)=>{
                        return(
                            <Card title={service.type} bordered={false} style={{ width: 500 }} key={index}>
                                <h1 > Precio de Consulta: <DollarCircleOutlined /> {service.price}</h1>
                                <h1> Precio: <DollarCircleOutlined /> {service.price}</h1>
                                <h1>Enviar un Mensaje a {service.user}</h1>
                                <Form.Item name={['user', 'introduction']} >
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Enviar
                                    </Button>
                                </Form.Item>
                            </Card>
                        )
                    })
                }
        </>
    );
};

export default DetailOrder;