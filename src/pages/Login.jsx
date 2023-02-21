import React from 'react'
import styled from 'styled-components'
import {Mobile} from "../Responsible"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../Redux/apiCalls';
const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://media.istockphoto.com/photos/curly-redhead-model-on-summer-nature-background-spring-rose-flower-picture-id1409100141?b=1&k=20&m=1409100141&s=170667a&w=0&h=srGJX9u4CIcFLdl6D3dTEOP1qCj2rT87_1Itto-wQ9Y=")  center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper=styled.div`
padding:20px;
width:25%;
background-color:white;
${Mobile (
{width:"75%"}
)}
`
const Title=styled.h1`
font-size:24px;
font-weight:300;`
const Form=styled.form`
display:flex;
flex-direction:column;
`
;
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px ;
padding:10px;
`;
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:5px;
&:disabled {
  color:green;
  cursor:not-allowed;
};

`;
const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
margin-bottom:10px;`;
const Error = styled.span`
color:red;
`;

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const dispatch= useDispatch();
  const {isFetching,error} = useSelector(state=>state.user)
  const handleClick = (e)=>{
    e.preventDefault();
    login(dispatch,{username,password});
  }
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>DO NOT REMEMBER THE PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login