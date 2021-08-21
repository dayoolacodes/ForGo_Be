import React, { useState } from 'react';

import Aux from '../../../hoc/Auxil'
import classes from './Login.module.css'
import illustration1 from '../../../assets/images/illustration1.svg'
import Spinner from '../Spinner/Spinner'
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
    const [errorDisplay, setErrorDisplay] = useState('') 
    const  [isLoading, setIsLoading] = useState(false)
    
    
  const handleCheck =()=>{
       setCheck(!check)
   }

const handleFirstName =(e)=>{
    setFirstName(e.target.value)
    if(firstName!==e.target.value){
      setErrorDisplay("")
      setIsLoading(false);
    }
    // console.log(firstName)
}
const handleEmail =(e)=>{
    setEmail(e.target.value)
    if(email!==e.target.value){
      setErrorDisplay("")
      setIsLoading(false);
    }
    // console.log(email)
}

const handleSubmit=(e)=>{
    //Send name and email
    e.preventDefault();
    setIsLoading(true);
    
    const data = {
      first_name: firstName,
      email: email,
      confirmed: check
    }
    
    
    axios.post('https://gobe-home.herokuapp.com/frontend/api/users/', data)
    .then(response=> {
      console.log(response);
      setIsLoading(false);
    })
    .catch(error => {
      // console.log(error);
      if(error.message === "Request failed with status code 400"){
        setErrorDisplay("Seems this email already exists!");
        setIsLoading(false);
      }
      else{
        setErrorDisplay(error.message);
        setIsLoading(false);
        
      }
    });
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
                <p style={{color:"red",letterSpacing: ".045em", fontSize:"25px"}}>{errorDisplay}</p>
                <input type="checkbox" 
                checked={check} 
                onChange={handleCheck} 
                name="subscribe" 
                style={{marginLeft: "20px"}}
                /> 
                <span className={classes.SubscribeText}
                onClick={handleCheck} >Subscribe to our newsletter</span>
                <button className={classes.Button} 
                type='submit' style={{display: isLoading? "none" : "block"}}
                > Submit</button>
                </form>
                {isLoading? <Spinner />: ""}
                <button className={classes.Button} 
                style={{display:joinUsDisplayValue, marginTop: "50px"}}  
                onClick={handleDisplayValue}> Join Us 
                </button>
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