import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsible'

const Container=styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://w0.peakpx.com/wallpaper/570/449/HD-wallpaper-kiki-hsieh-model-women-brunette-long-hair-red-dress-arms-crossed-smiling-fashion-white-background-portrait-display-looking-at-viewer-chinese-model-chinese.jpg")  center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper=styled.div`
padding:20px;
width:40%;
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
flex-wrap:wrap;`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement=styled.span`
font-size:12px;
margin:20px 0px;`;
const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`;
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE NEW ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, i consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register