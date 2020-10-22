import React from 'react';

const Aux = (props) => {
    return ( 
        <div className={props.className}>
        {props.children}
        </div>
     );
}
 
export default Aux;