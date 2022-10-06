import React from 'react'
import {Page} from '../../Components/Layout/Page'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Article_Styled, Gallery} from '../../Styled_Components/Styled.Article'

const BlogDetails = () => {
const [data, setData] = useState("");  
const {id} =  useParams();

//Jeg bruger useParams fra react-router-dom som returnerer et object fra mit dynamiske parameter
//(id'et fra hver blog)
//Her bruger jeg fetch-metoden fordi det er en dynamisk route jeg arbejder med. (De individuelle blogs bliver først loaded
//ved forespørgsel)

    const getData = () => {
    fetch("http://localhost:1337/api/blogs/" + id + '?populate=*')
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data.data)
          })
      }

useEffect(() => {      
    getData();
}, [id])

//Vha en ternary condition, skal der alt efter om der er data at fetche, enten vises en side med bloggen,
//eller en besked med teksten 'indlæser'.
return (
    <section>
      {data && data ? (
<>
         <h1>{data.title}</h1>
      
      <Gallery>  
      {data.images.map((img) => {
        return (
          <picture key={img.id}>
            <img className="zoom" src={'http://localhost:1337' + img.url}/>      
            </picture>
            )
      })}
       </Gallery> 
        <Article_Styled>
         <div className='resume'>{data.resume}
         </div> 
        </Article_Styled> 
      </>
) : (
<>
<p>Indlæser...</p>
</>)}
    </section>
  )
}

export default BlogDetails;