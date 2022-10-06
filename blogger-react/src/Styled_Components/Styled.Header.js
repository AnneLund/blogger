import styled from "styled-components";


const Header_Styled = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
position: relative;
width: 100%;
height: 15vh;
position: fixed;
width: 100%;
background-color:rgba(255, 228, 196, 0.44);
box-shadow: black 5px 5px 10px;

ul{
    display: flex;
    gap: 3em;
    margin: 1em 2em;
}

a{
    font-size: 2em;
    &:hover{
        color: #000000e2;
        transition: 300ms ease-in-out;
    }
}

&:hover{
        background-color:rgba(255, 228, 196, 0.663);
        transition: 1s ease-in-out;  
      }


@media screen and (max-width: 800px) {
display: flex;
margin: 0;
width: 100%;
a{
font-size: 5vw;    
}

}
`

export default Header_Styled;