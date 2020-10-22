import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Aux from '../../../hoc/Auxil'
import classes from './Login.module.css'


const login = (prop) => {
    return ( 
        <Aux className={classes.Login}>
            <Container>
                <Row>
                <div className={classes.Text}>
                    <p>
                    Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.
                    </p>
                <input placeholder='First Name' className={classes.Form} />
                <input placeholder='Email' className={classes.Form} />
                </div>
                 </Row>
            </Container>
        </Aux>
     );
}
 
export default login;