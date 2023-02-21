import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsible';
import {Link} from "react-router-dom";
const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`;
const Image=styled.img`
width:100%;
height:100%;
object-fix:cover;
${Mobile (
{height:"2ovh"}
)}
`;
const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title=styled.h1`
color:white;
margin-bottom:20px;
`;
const Button=styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Button> {item.Button} </Button>
        </Info>
        </Link>  
    </Container>
  )
}

export default CategoryItem;