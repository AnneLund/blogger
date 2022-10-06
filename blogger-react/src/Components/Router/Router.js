import {Routes, Route} from 'react-router-dom'
import Home from '../../Pages/Home'
import BlogList from '../../Pages/Blogs/BlogList'
import BlogDetails from '../../Pages/Blogs/BlogDetails'
import About from '../../Pages/About'

export const Router = () => {
  return (
    <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="blogs" element={<BlogList/>}/>
        <Route path="blogs/:id" element={<BlogDetails/>}/>   
        <Route path="about" element={<About/>}/>  
    </Routes>
  )
}
