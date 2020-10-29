import React, { useState } from 'react';

import Aux from '../../../hoc/Auxil'
import classes from './Login.module.css'
import illustration1 from '../../../assets/images/illustration1.svg'
// import styled, {keyframes} from 'styled-components'
import axios from 'axios'



// const bounceAnimation = keyframes`
//   from, 20%, 100%, to {
//     transform: translate3d(0,0,0);
//   }
//   40%, 43% {
//     transform: translate3d(0, -50px, 0);
//   }
//   70% {
//     transform: translate3d(0, 0, 0);
//   }
// `

// const IMG = styled.img`
//  /* width: auto; */
//  animation-name: ${bounceAnimation};
//  animation-duration: 25s;
//  animation-iteration-count: infinite;
//  `


const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const  [check, setCheck] = useState(false)
    const [formDisplayValue, setFormDisplayValue] = useState('none') 
    const [joinUsDisplayValue, setJoinUsDisplayValue] = useState('block') 
    
    
  const handleCheck =()=>{
       setCheck(!check)
   }

const handleFirstName =(e)=>{
    setFirstName(e.target.value)
    // console.log(firstName)
}
const handleEmail =(e)=>{
    setEmail(e.target.value)
    // console.log(email)
}

const handleSubmit=(e)=>{
    //Send name and email
    e.preventDefault();
    

    const data = {
      firstName: firstName,
      email: email,
      confirmed: check
    }
    
    
  //   axios.post('https://gobe-home.herokuapp.com/frontend/api/users/', data, {
  //     'Content-Type': 'application/json'
  // })
  //   .then(response=> {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
    
    fetch("https://jsonplaceholder.typicode.com/users/", { 
    method: "POST", 
    body: JSON.stringify({ 
     data
    }), 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
    })
    .then(response => response.json())
    .then(json => console.log(json)); 
    // alert(firstName + " Submitted!");
    // window.location.reload();
}

const handleDisplayValue=()=>{
  setJoinUsDisplayValue('none');
  setFormDisplayValue('block')
}

    return ( 
        <Aux className={classes.Login}>
          
                <div className={classes.Text}> 
                
                 Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.
               

              
                <form onSubmit={handleSubmit} style={{display:formDisplayValue}}>
                <input placeholder='First Name' 
                type='name' 
                value={firstName} 
                className={classes.TextBox} 
                style={{marginTop: "80px"}} 
                onChange={(e) => handleFirstName(e)}
                required
                />
                
                <input placeholder='Email'
                 type='email'
                 value={email} 
                 className={classes.TextBox} 
                 onChange={e=> handleEmail(e)}
                 required
                 />
                <input type="checkbox" 
                checked={check} 
                onChange={handleCheck} 
                name="subscribe" 
                style={{marginLeft: "20px"}}
                /> 
                <span className={classes.SubscribeText}
                onClick={handleCheck} >Subscribe to our newsletter</span>
                <button className={classes.Button} 
                type='submit' 
                > Submit </button>
                </form>
                
                <button className={classes.Button} 
                style={{display:joinUsDisplayValue, marginTop: "50px"}}  
                onClick={handleDisplayValue}> Join Us </button>
                  </div>  
                  <div className={classes.imgDiv}>
                      
                    {/* <IMG src={illustration1} alt='ils'/> */}
                    <img src={illustration1} alt='ils'/>
                    <div className={classes.Shadow}></div>
                  </div>

                
             
        </Aux>
     );
}
 
export default Login;