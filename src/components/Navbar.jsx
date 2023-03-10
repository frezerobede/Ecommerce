import { SearchOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import styled from "styled-components"
import {Mobile} from "../Responsible"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container=styled.div`
height:60px ;
${Mobile (
{height:"50px"}
)}
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${Mobile (
{display:"none"}
)}
`;

const Wrapper=styled.div`
padding:10px 20px;
align-items: center;
display: flex;
justify-content:space-between;
${Mobile (
{padding:"5px 0px"}
)}
`;

const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Input=styled.input`
border:none;
${Mobile (
{width:"50px"}
)}`;

const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items: center;
margin-left:25px ;
padding: 5px;

`;

const Center=styled.div`
flex:1;
text-align:center;
`;
const Logo=styled.h1`
font-weight:bold;
${Mobile (
{fontSize:"24px"}
)}`;

const Right=styled.div`
flex:1;
display:flex ;
align-items: center;
justify-content:flex-end ;
${Mobile (
{justifyContent:"center",flex:2}
)}
`;

const MenuItem=styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px;
${Mobile (
{fontSize:"12px",marginLeft:"10px"}
)}
`;


const Navbar = () => {
  const quantity =useSelector(state=>state.cart.quantity)
  return (
    <Container>
      
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                   <SearchOutlined style={{color:"gray", fontSize:10}}/>
                </SearchContainer>
            </Left>
            <Center>
              <Logo>Fraser.</Logo>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <Link to="/cart">
              <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon/>
              </Badge>
              </MenuItem>
              </Link>

            </Right>
        </Wrapper>
    </Container>
  );
}

export default Navbar;
