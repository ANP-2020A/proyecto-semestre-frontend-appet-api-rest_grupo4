import React, {useState} from 'react';
import {Layout, Row, Col, Button, Card, Radio, Skeleton, Avatar,Input, Form} from 'antd';
import {EditOutlined, EllipsisOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import '../styles/advertisements.css'
import Routes from '../constants/routes';
import API from "../data";
import {mutate} from "swr";
/*import {translateMessage} from "../utils/translateMessage";*/
import {useServicesList} from "../data/useServicesList";
import ShowError from '../components/ShowError';
import {Link} from "react-router-dom";

/*const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;*/

/**
 * Fetch Services from DB
 */
export const fetchServices = async () => {
    // console.log( `Show data fetched. Services: ${ JSON.stringify( articles ) }` );

    return await API.get('/services');
};

/**
 * Services list page
 * @param props
 * @constructor
 */
const Advertisements = (props) => {
    const {services, mutate, isLoading, isError} = useServicesList();

    const [visible, setVisible] = useState(false);
    /*const categories = useCategories();
    const auth = useAuth();
    console.log( 'categories', categories );*/

    /**
     * Executed after the form is submitted
     * Fetches all the articles and refreshes the list
     * Closes the modal
     */
    const afterCreate = async () => {
        try {
            // show skeleton
            await mutate('/services', async services => {
                return {data: [{}, ...services.data]};
            }, false);

            await mutate('/services');
            setVisible(false); // close the modal
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            );
        }
    };
    const {Meta} = Card;
    if (isLoading) {
        return <Row justify='center' gutter={30}>
            {
                [...new Array(9)].map((_, i) =>
                    <Col xs={24} sm={12} md={8} style={{marginBottom: 30}} key={i}>
                        <div style={{textAlign: 'center'}}>
                            <Skeleton.Image style={{width: 200}}/>
                            <Card title='' extra='' cover='' loading/>
                        </div>
                    </Col>
                )
            }
        </Row>;
    }

    if (isError) {
        return <ShowError error={isError}/>;
    }
    return (
        <>
            {services.map((service) => (
                <Card position={'center'}
                    style={{width: 300}}

                    cover={
                        <img
                            alt="example"
                            src={`http://localhost:8000/storage/${service.image}`}
                        />
                    }
                    title={service.title}

                    actions={[
                        <SettingOutlined key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={`http://localhost:8000/storage/${service.image}`}/>}
                        title="Card title"
                        description="This is the description"
                    />
                    <Form.Item>
                        {<Button position='center' type="primary"  href={Routes.ORDERDETAIL}>Solicitar</Button>}
                    </Form.Item>
                </Card>

            ))
            }
        </>
    );
};
export default Advertisements;

