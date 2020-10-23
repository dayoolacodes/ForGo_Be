import React from 'react';

import Aux from '../../../hoc/Auxil'
import classes from './Login.module.css'
import illustration1 from '../../../assets/images/illustration1.svg'



const Login = (prop) => {
//    const  [check, setCheck] = useState(false)

//    const handleCheck =()=>{
//        setCheck({check: !check})
//    }

    return ( 
        <Aux className={classes.Login}>
          
                <div className={classes.Text}> 
                
                 Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.
                <input placeholder='First Name' type='name' className={classes.TextBox} style={{marginTop: "80px"}}/>
                <input placeholder='Email' type='email' className={classes.TextBox} />
                <input type="checkbox"  name="subscribe" style={{marginLeft: "20px"}}/> 
                <span className={classes.SubscribeText} >Subscribe to our newsletter</span>
                <button className={classes.Button} type='submit'> Submit </button>
                  </div>  
                  <div style={{width:"800px", margin: "100px", minWidth: "500px"}}>
                    <img src={illustration1} alt='ils'/>
                  </div>

                
             
        </Aux>
     );
}
 
export default Login;