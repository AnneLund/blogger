import { useState } from "react"
import Axios from "axios"
import { useForm } from "react-hook-form";

const Form = () => {

const [title, setTitle] = useState("")
const handleChange = (e) => {setTitle(e.target.value)}
const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = () => {
        const data = {title}
        Axios.post('http://localhost:1337/api/blogs', data)
  .then(response => {
    console.log(response);
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
}
                return (
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <article className='form'>
                        <h3 className='formTitle'>Skriv det ønske du vil opfylde!</h3>
                       <div>
                          <>
                              <input 
                              placeholder="title"
                              type="text" 
                              id="id"
                              value={title}
                              onChange={handleChange}
                              />
                              <button type="submit">Send</button>
                          </>
                          </div>
                          </article>
                    </form>
                );
}
}


export default Form;