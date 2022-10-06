import {createGlobalStyle} from 'styled-components'
import bg from '../Assets/Images/blog-bg.jpeg'

const Globals = createGlobalStyle`

body{
    width: 100%;
    padding: 0;
    background: #282c34;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    min-height: 170vh;
    color: white;
    background-image: url(${bg});
    background-color: rgba(0, 0, 0, 0.635);
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    font-family: 'Lobster Two', cursive;

h1{
  margin: 3em auto 0 auto;
  font-size: 3em;
  font-weight: 100;
  width: 80%;
  border-bottom: 1px white solid;
}

 .details{
  background-color: #B1B4B5;
  box-shadow: black 5px 5px 5px;
  padding: 1em;

  header{
    margin: 2em 1em;
  }
 }

 .bloglist{
  display: flex;
  justify-content: center;
  gap: 4em;
 }

    li{
        list-style: none;  
    }
  }

a{
  text-decoration: none;
  color: white;
}

.zoom{
  transition: transform .2s;
  &:hover{
    transform: scale(1.5);
 
  }
}

section{
      padding: 3em;
    }


@media screen and (max-width: 800px) {
section{
padding: 1em 0;
display: flex;
justify-content: center;
flex-direction: column;   
  }

}
`
export default Globals;