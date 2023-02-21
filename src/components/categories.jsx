import React from 'react'
import styled from 'styled-components'
import CategoryItem  from './categoryItem';
import { categories } from './data';
import { Mobile } from '../Responsible';
const Container=styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${Mobile (
{padding:"0px",flexDirection:"column"}
)}
`;
const Categories = () => {
  return (
    <Container>
        {
            categories.map(item=>
            (<CategoryItem item={item}/>))
        }
    </Container>
  )
}

export default Categories;