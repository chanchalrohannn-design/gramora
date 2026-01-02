import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(){

    
        const[email, setEmail]=useState();
        const[password, setPassword]=useState();
       

        const navigate=useNavigate();   //navigate function button function ya waha likna hai jisko click karke humko dusra page me jaana hai

        

    function handelEmailChange(event){  
      setEmail(event.target.value);
      console.log(event.target.value);

    }

      function handelPasswordChange(event){
        setPassword(event.target.value);
      console.log(event.target.value);
      }

      function LoginButton(event){
      event.preventDefault();
      alert("Login Successful");
      navigate('/home')
    }




  
    return (
      <div>
        <form>
            <div>
                <h1>Login</h1>
                <label><p>Email</p></label>
                <input type="email" value={email} onChange={handelEmailChange}/>
                <label><p>Password</p></label>
                <input type="password" value={password} onChange={handelPasswordChange}/>
                <button onClick={LoginButton}>Login</button>
                

            </div>
        </form>
        
      </div>
    )
  
}

export default Login