import React from 'react'
import { Link } from 'react-router-dom'
import Header_Styled from '../../Styled_Components/Styled.Header'


const Header = () => {
  return (
    <Header_Styled>
        <nav>
            <ul>
                <li>
                    <Link to="/">Forside</Link>
                </li>
                <li>
                    <Link to="blogs">Blogs</Link>
                </li>

                <li>
                    <Link to="about">Om</Link>
                </li>
            </ul>
        </nav>
    </Header_Styled>
  )
}

export default Header