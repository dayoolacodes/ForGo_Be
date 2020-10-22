import React from 'react';
import Aux from '../../hoc/Auxil'
import classes from './Header.module.css'
import gobe from '../../assets/images/gobelogo.svg'
import Nav from 'react-bootstrap/Nav'

const header = () => {
    return ( 
        <Aux className={classes.Header}>
        <Nav.Link href='/'><img src={gobe} alt='Logo'/></Nav.Link>
        </Aux>
     );
}
 
export default header;