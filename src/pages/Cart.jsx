import { Add, Remove } from '@mui/icons-material'
import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import styled from 'styled-components'
import { Mobile } from '../Responsible'
import {useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react'
import { userRequest } from '../components/Request';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
const KEY="pk_test_51LkwMOJgVfZ20RwIgAMCrt2TuYtP1t3H7EJ7RBtCciYoYAC8hiqPtgXO5CK040af2iZy6m9lbAR3MhjGOyA1TK2300jG4NXYIF"

const Container=styled.div``

const Wrapper=styled.div`
padding:20px;
${Mobile (
{padding:"10px"}
)}`
const Title=styled.h1`
font-weight:300;
text-align:center;`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;`

const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type==="filled" && "none"};
background-color:${(props)=>props.type==="filled"? "black":"transparent"};
color:${(props)=>props.type==="filled"&&"white"};`


const Toptexts=styled.div`
${Mobile (
{display:"none"}
)}`
const Toptext=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`

const Bottom=styled.div`
display:flex;
justify-content:space-between;
${Mobile (
{flexDirection:"column"}
)}`

const Info=styled.div`
flex:3`

const Product=styled.div`
display:flex;
justify-content:space-between;
${Mobile (
{flexDirection:"column"}
)}`

const Image=styled.img`
width:200px;`
const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`

const ProductDetail=styled.div`
display:flex;
flex:2;`

const ProductName=styled.span``

const ProductId=styled.span``

const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color};
`

const ProductSize=styled.span``

const PriceDetail=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;`
const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;`
const ProductAmount=styled.div`
font-size:24px;
margin:5px;
${Mobile (
{margin:"5px 15px"}
)}`
const ProductPrice=styled.div`
font-size:30px;
font-weight:200;
${Mobile (
{marginBottom:"20px"}
)}`

const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;`

const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const SummaryTitle=styled.h1`
font-weight:200;`

const SummaryItem=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type==="total"&&"500"};
font-size:${props=>props.type==="total"&&"24px"};
`

const SummaryItemText=styled.span``

const SummaryItemPrice=styled.span``

const Button=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;`



const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [stripeToken,setStripeToken] = useState(null);
    const navigate = useNavigate();
  
  
    const onToken = (token)=>{
    setStripeToken(token);
    
  };
//   useEffect(()=>{
//     const makeRequest = async()=>{
//       try {
//       const res = await axios.post("http://localhost:5000/api/checkout/payment",
//       {
//         tokenId:stripeToken.id,
//         amount:2000,
//       });
//       console.log(res.data);
//       } catch (err) {
//         console.log(err);
//       }
     
//     };
//     stripeToken && makeRequest();
//   },[stripeToken])
  useEffect( ()=> {
    
    const makeRequest = async ()=>{
    try {
        const res = await userRequest.post("/checkout/payment",{
            tokenId:stripeToken.id,
            amount:300});
            navigate("/success",{state:{data:res.data}});
        
       
    } catch (error) {
        
    }

  };
 stripeToken && makeRequest();
},[stripeToken,cart.total,navigate])
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <Toptexts>
                    <Toptext>SHOPPING(2)</Toptext>
                    <Toptext>WISHLIST(0)</Toptext>
                </Toptexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cart.products.map((product)=>(

                    <Product>
                        <ProductDetail>
                            
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title} </ProductName>
                            <ProductId><b>ID:</b> {product._id} </ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size:</b> {product.size} </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount> {product.quantity} </ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price*product.quantity} </ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                ))
                    }
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total} </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText> Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}  </SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Fraser Shop "
                            image="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                            >

                                <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart;