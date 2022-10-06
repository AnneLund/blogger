import styled from "styled-components";

const Figure_Styled = styled.figure`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
gap: 1em;
width: 300px;
background-color: rgba(255, 228, 196, 0.400);
padding: 1em;
height: 250px;
box-shadow: black 10px 10px 20px;

a{
  display: flex;
  gap: 2em;
}

img{
  width: 100px;
  height: 100px;
  margin: auto;
  box-shadow: black 5px 5px 10px;
} 

figcaption{
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
header{
  h3{
    margin: 0;
  }
  p{
    margin: 0;
  }
}

span{
  text-decoration: overline;
}
}

&:hover{
        background-color:rgba(255, 228, 196, 0.650);
        transition: 1s;
        color: #000000e2;
        a{
          transition: 1s;
          color: #000000e2;
        }
      }
`

export default Figure_Styled;