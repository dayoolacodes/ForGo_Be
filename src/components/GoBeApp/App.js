import React from 'react';
import Header from '../Header/Header'
import Aux from '../../hoc/Auxil'
import Login from './Login/Login'

const App = (props) => {
    return ( 
        <Aux>
            <Header />
            <Login />
        </Aux>
     );
}
 
export default App;