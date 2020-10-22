import React from 'react';
import Aux from '../Auxil'
// import Header from '../../components/Header/Header'
import classes from './Layout.module.css'

const layout = (props) => {
    return ( 
        <Aux className={classes.Layout}>
        {/* <Header /> */}
        {props.children}
        </Aux>
     );
}
 
export default layout;