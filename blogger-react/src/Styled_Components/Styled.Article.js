import styled from 'styled-components'

const Article_Styled = styled.article`
position: relative;
display: flex;
width: 80%;
justify-content: center;
margin: auto;

header{
    margin: 0 2em 2em 2em;
    width: 100%;
}

.resume{
    padding: 3em 6em;
    font-size: 1.5em;
    font-weight: 100;
    line-height: 30px;
}

@media screen and (max-width: 800px) {
display: flex;
justify-content: center;
margin: auto;
width: 100%;

.resume{
    padding: 2em 1em;
}
}
`

const Gallery = styled.div`
display: flex;
justify-content: center;
margin: 3em auto;
width: 80%;
padding: 1em;
flex-wrap: wrap;
grid-gap: 10px;

picture{
width: 300px;
display: flex;
justify-content: center;
margin: auto;
 
 img{
  width: 50%;
  height: 160px;
 }
}

@media screen and (max-width: 800px) {
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
width: 100%;
padding: 0;
grid-gap: 10px;

img{
    width: 100%;
   margin: auto;
}
}
`
export {Article_Styled, Gallery};