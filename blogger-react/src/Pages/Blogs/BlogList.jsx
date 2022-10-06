import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Page } from '../../Components/Layout/Page';
import Styled_Figure from '../../Styled_Components/Styled.Figure'
import appService from '../../Components/Appservices/AppService'
import Form from '../../Components/Partials/Form';

//Jeg fetcher mine data vha min appservice der laver en GET-request til min Strapi-API.

const Bloglist = () => {
const [data, setData] = useState([]);

    useEffect(() => {
    const getData = async() => {
        try {
        const result = await appService.GetList();
        setData(result.data.data);
        } 
        catch(error) {
        console.log(error)   
        }
    }
        getData();
    }, [])

console.log(data)
//Jeg looper over mit array af blogs med en map-function og returnerer en figure for hver blog
//ud fra deres id. Jeg indkapsler den i et link-tag der sender brugeren videre til bloggens egen side med flere detaljer.

  return(
<Page title="Blogs">       
    <section className='bloglist'> 
        {data.map((blog) => {
    return(
        <Styled_Figure key={blog.id}>
            <Link to={"/blogs/" + blog.id}>
                <img src={'http://localhost:1337' + blog.front_img.url} alt={blog.front_img.name}/>
                    <figcaption>
                        <header>
                            <h3>{blog.title}</h3>
                            <p>{blog.date}</p>     
                        </header>
                        <p>Forfatter <br></br> <span>{blog.author}</span></p>
                    </figcaption> 
            </Link> 
        </Styled_Figure>
    )
})}

<Form/>
  </section>    
</Page>
  )
}

export default Bloglist;