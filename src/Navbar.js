import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {links, social} from './data'


function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1>Logo</h1>
                    <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks) }>
                        <FaBars />
                    </button>
                </div>
                <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                    <ul className='links'>
                        {links.map(link => {return  <li key={link.id}>
                                                        <a href={link.url}>{link.text}</a>
                                                    </li>
                        })}
                    </ul>
                </div> 
                <ul className='social-icons'>
                    {social.map(link => {return <li key={link.id}>
                                                    <a href={link.url}>{link.icon}</a>
                                                </li>})}                                  
                </ul>
            </div>          
        </nav>
    )
}

export default Navbar
