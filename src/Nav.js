import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = ({search, setSearch, showSearch}) => {
const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'IndianRed'
};  
  return (
    <nav className='Nav'>
        {showSearch && (
        <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
            <input 
                id='search'
                type='text'
                placeholder='Search Post'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
        )}
        <br></br>
        <ul>
            <li><Link to="/basic-social-media-app" style={linkStyle}>Home</Link></li>
            <li><Link to="/basic-social-media-app/post" style={linkStyle}>Post</Link></li>
            <li><Link to="/basic-social-media-app/about" style={linkStyle}>About Me</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;