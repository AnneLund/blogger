import styled from "styled-components";

const Sidebar_Styled = styled.div`
      width: 18vw;
      position: fixed;
      height: 600px;
      right: -18%;
      top: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 1em;
      background-color:rgba(255, 228, 196, 0.119);
      padding: 0.5em;
      box-shadow: black 10px 10px 20px;

      .arrow{
      display: flex;
      align-items: center;
      height: 100px;
      font-size: 1.5em;
      position: absolute;
      justify-content: space-between;
      }
       h2{
        margin: 2em 0;
      }

    &:hover{
      animation: slide_in 1s ease forwards;
      transition: 300ms;
      .arrow{
        display: none;
      }
    }
    @keyframes slide_in{
        0%{
          right: -15%;
        }
        100%{
          right: 0px;
        }
      }

    .sidebar_figures{
      display: flex;
      margin: auto;
      padding: 0.7em 0;
      width: 100%;
      picture{
      width: 50%;
      margin: auto;
        img{
          width: 100px;
          height: 80px;
          margin: 0.5em;
          align-items: center;
          box-shadow: black 5px 5px 10px;
        }
      }
    
      figcaption{
      text-align: left;
      h3{
        font-size: 1.2em;
        margin: 0.5em 1em 0.5em 0;
        border-bottom: 1px solid white;
      }
      p{
        margin: 0;
      }
      }

      &:hover{
        background-color:rgba(255, 228, 196, 0.663);
        transition: 1s;
        color: #000000e2;
      }
    }

@media screen and (max-width: 800px) {
width: 60vw;
display: block;
position: relative;
top: 0;
margin-bottom: 2em;
height: 90vh;
padding: 1em;

.arrow{
  display: none;
}

.sidebar_figures{
display: flex;
flex-direction: column;
justify-content: center;
figcaption{
  padding: 0;
}
h3{
  margin: 0 0 10px 0;
}
p{
  margin: 0;
}
}

}
`

export default Sidebar_Styled;