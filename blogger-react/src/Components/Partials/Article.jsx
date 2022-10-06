import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import appService from '../../Components/Appservices/AppService'

const Article = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      const getData = async() => {
          try {
          const result = await appService.GetNews();
          setData(result.data.data);
        
          } catch (error) {
           console.log(error)   
          }
      }
      getData();
  }, [])

console.log(data) 

const News_article = styled.article`
figure{
  display: flex;
  gap: 3em;
  margin: auto;
  width: 50%;
  padding: 2em;
  background-color:rgba(255, 228, 196, 0.106);
  box-shadow: black 5px 5px 10px;

img{
  width: 300px;
  height: 250px;
  margin: auto;
}

figcaption{
  text-align: left;

  p, h2{
    margin: 0;
  }
div{
  margin-top: 1em
}
}
}

@media screen and (max-width: 800px) {
figure{
width: 60%;
display: flex;
flex-direction: column;
  }
}
`

return (
<>
{data.map(news => {
  return(
       <News_article key={news.id}>
    <figure>
    <figcaption>
    <h2>{news.title}</h2>
    <p>{news.author}</p>
    <p>{news.date}</p>
    <div>{news.article}</div>
    </figcaption>
    <img src={'http://localhost:1337' + news.image.url}/>
    </figure>
    </News_article>  
  )
})}
</>  
  ) 
}

export default Article;