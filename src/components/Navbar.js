import React, { useState } from 'react'


const Navbar = () => {


    function scrollToSection(event,targetId) {
        event.preventDefault();
        const section = document.getElementById(targetId);
        section.scrollIntoView({ behavior: "smooth" });
        if (targetId === "home") { //if the compenent is "home" it sends to default url
            window.history.pushState(null, null, `/`);
            console.log("change")
        } else {
            window.history.pushState(null, null, `#${targetId}`);
        }
      }
      

    return (
        <div className='navbar_parent'>
            <nav className='navbar'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'onClick={(event) => scrollToSection(event, 'home')}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={(event) => scrollToSection(event, 'about')}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#resume' onClick={(event) => scrollToSection(event, 'resume')}>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={(event) => scrollToSection(event, 'projects')}>Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar