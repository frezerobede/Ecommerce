import styled from "styled-components"

const Container = styled.div`
height:30px;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
background-color:teal;
`

const Announcement = () => {
  return (
    <Container>
      Super deal!Free shipping on orders over $50.
    </Container>
  );
}

export default Announcement;
