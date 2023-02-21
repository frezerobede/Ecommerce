import { Email,Facebook, Instagram, LinkedIn,LocationOn,Phone, Twitter } from '@mui/icons-material'
import image from "../images/payment-method2.png"
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsible'
const Container=styled.div`
display:flex;
${Mobile (
{flexDirection:"column"}
)}
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;


`
const Logo=styled.h1`
${Mobile (
{fontSize:"24px"}
)}
`
const Desc=styled.p`
margin:20px 0;
`
const SocialContainer=styled.div`
display:flex;
margin:20px 0px 0px 0px;
`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;

`

const Center=styled.div`
flex:1;
padding:20px;
${Mobile (
{display:"none"}
)}
`
const Title=styled.h3`
margin-bottom:30px;`

const List=styled.ul`
margin:0;
padding:0;
display:flex;
flex-wrap:wrap;
list-style:none;
`

const Listitem=styled.li`
width:50%;
margin-bottom:10px;
`
const Right=styled.div`
flex:1;
padding:20px;
${Mobile (
{backgroundColor:"#fff8f8"}
)}
`
const Contactitem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment=styled.img`
width:100%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Fraser.</Logo>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Vivamus vitae eros id augue consequat dignissim. 
            Ut a mattis lectus, sit amet dictum nunc. Quisque id
             ante rhoncus lacus hendrerit maximus eget eu nisi.
             </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon  color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>SOCIAL LINKS</Title>
            <List>
                <Listitem>HOME</Listitem>
                <Listitem>CART</Listitem>
                <Listitem>MAN FASHION</Listitem>
                <Listitem>WOMAN FASHION</Listitem>
                <Listitem>ACCESSORIES</Listitem>
                <Listitem>MY ACCOUNT</Listitem>
                <Listitem>ORDER TRACKING</Listitem>
                <Listitem>WISHLIST</Listitem>
                <Listitem>TERMS</Listitem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <Contactitem><LocationOn style={{marginRight:"10px"}}/>Boukidan, Al-Hoceima</Contactitem>
            <Contactitem><Phone style={{marginRight:"10px"}}/>+1 234 567 890</Contactitem>
            <Contactitem><Email style={{marginRight:"10px"}}/>louwe@gmail.com</Contactitem>
            <Payment src={image}/>
        </Right>
    </Container>
  )
}

export default Footer