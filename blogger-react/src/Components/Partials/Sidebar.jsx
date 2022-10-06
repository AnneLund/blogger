import React from 'react'
import {Link} from 'react-router-dom'
import appService from '../../Components/Appservices/AppService'
import {useState, useEffect} from 'react'
import Sidebar_Styled from '../../Styled_Components/Styled.Sidebar'

const Sidebar = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async() => {
            try {
            const result = await appService.GetList();
            setData(result.data.data);
          
            } catch (error) {
             console.log(error)   
            }
        }
        getData();
    }, [])
  
  console.log(data)

    const d = new Date();
    const past = new Date()
    
    past.setDate(d.getDate() -30)
    // let today = d.toISOString();
    let latest = past.toISOString();
    // console.log(latest)
  return (
    <Sidebar_Styled>
        <div className='arrow'>
          ← 
        </div>  
          <h2>Nyeste blogs</h2>
     
{data.map(text => {
return(
  text.createdAt > latest ? <div key={text.id}>
     <Link to={"/blogs/" + text.id}>   
  <figure className='sidebar_figures'>
    <picture>
    <img src={text.front_img.alternativeText}/>
    </picture>
    <div>
     <h3>{text.title}</h3>
     <p>Af {text.author}</p>
      <p>Oprettet {text.date}</p> 
    </div>
  </figure>
  </Link>
</div> 
: <p>Indlæser...</p>
)
})}  
    </Sidebar_Styled>
  )
}

export default Sidebar