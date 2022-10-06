import React from 'react'
import styled from 'styled-components'
import bg from '../Assets/Images/bg.jpeg'
import Sidebar from '../Components/Partials/Sidebar'
import Article from '../Components/Partials/Article'

const FrontPage = styled.div`
    padding-top: 1em;
    background-image: url(${bg});
    width: 100%;
    height: 180vh;
    margin: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.635);
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    text-align: center;
    overflow: hidden;

    h1{
      font-size: 3em;
      text-align: left;
      margin-bottom: 1em;
    }

    section{
      display: flex;
    }

@media screen and (max-width: 800px){
width: 100%;
display: flex;
flex-direction: column;
gap: 2em;
height: 270vh;
margin: 0 auto; 
h1{
  font-size: 7vw;
  margin-top: 5em;
}
}

`

const Home = () => {
  return (
      <FrontPage>
      <h1>Velkommen til mad-bloggen!</h1>
      <Sidebar/>
      <>
      <Article/>  
      </>
      </FrontPage>
  )
}

export default Home;