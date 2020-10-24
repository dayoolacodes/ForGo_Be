import React from 'react';
import Aux from '../../hoc/Auxil'
import classes from './Header.module.css'
import gobe from '../../assets/images/gobelogo.svg'


const header = () => {
    return ( 
        <Aux className={classes.Header}>
        <a href='/'><img src={gobe} alt='Logo'/></a>
        </Aux>
     );
}
 
export default header;