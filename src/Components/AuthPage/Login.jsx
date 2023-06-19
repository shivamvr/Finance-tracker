
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Login = ({toggleHandler,userHandler}) => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const loginHandler = async (email,password)=>{
    let url = `https://63f63abd59c944921f6ff45a.mockapi.io/users`
    let res = await axios.get(url)
    if(res.status==200 && res.data.length){
      let user = res.data.filter(e=>{
       return e.email==email && e.password==password
      })
      if(user.length){
        localStorage.setItem('user',JSON.stringify({username: user[0].name, auth: true}))
        userHandler({username: user[0].name, auth: true})
      }else{
        alert('wrong credentials')
      }
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    loginHandler(email,password)
  };

  return (
    <LoginStyled>
      <h2>Login</h2>
      <form style={{marginTop: '1.5rem'}} onSubmit={submitHandler}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='email' />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password' />
        <button type='submit'>Log in</button>
      </form>
      <p style={{marginTop: '1.5rem'}}>Create an account <span style={{color: '#23A8F2',fontSize: '18px',cursor: 'pointer'}} onClick={toggleHandler}>Sign up</span></p>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  /* min-width: 100vw; */
  /* min-height: 80vh; */
  margin-top: 3rem;
  display: flex;
  /* background: pink; */
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* background: skyblue; */
    gap: 1rem;
}
input {
    outline: none;
    border-radius: 4px;
    color: #333;
    padding: 12px;
    width: 300px;
    border: solid 1px #ccc;
}
button {
    color: #333;
    border: none;
    width: fit-content;
    background: #B8FF4A;
    border-radius: 4px;
    padding: 9px 14px;
    cursor: pointer;
    outline: none
  }
`;

export default Login;
