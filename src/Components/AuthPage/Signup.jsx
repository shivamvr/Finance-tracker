
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Signup = ({toggleHandler}) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")

  const postUser = async(name,email,password)=>{
    let url =  `https://63f63abd59c944921f6ff45a.mockapi.io/users`
    let res = await axios.post(url,{name,email,password})
    if(res.status==201){
      toggleHandler()
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(!name || !email || !password){
        alert('Enter all details')
        return
    }
    postUser(name,email,password)
  };


  return (
    <SignupStyled>
      <h2>Sign up</h2>
      <form  style={{marginTop: '1.5rem'}} onSubmit={submitHandler}>
        <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='name' />
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type='text' placeholder='email' />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='password' />
        <input type='password' placeholder='confirm password' />
        <button type='submit'>Sign up</button>
      </form>
      <p style={{marginTop: '1.5rem'}}>Already have an account <span style={{color: '#23A8F2',fontSize: '18px',cursor: 'pointer'}}  onClick={toggleHandler}>Login</span></p>
    </SignupStyled>
  );
};

const SignupStyled = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

export default Signup;
