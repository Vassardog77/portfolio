import React from 'react';

function Projects(props) {
    return (
        <div id='projects' className='section_parent'>
            <div className='heading'>Projects</div>
            <div className='project_parent'>
                <div className='project_element1'>
                <div className='project_heading'>Bitcoin Mining Optimizations</div>
                    <img src={`${process.env.PUBLIC_URL}/images/bitcoin_project.png`} alt="bitcoin project"></img>
                    <div className='project_element_text'>My final project for my undergraduate degree. An optimization of the double SHA256 bitcoin mining algorithm, coded in system verilog.</div>
                    <a href='https://github.com/Vassardog77/SHA256_optimizations' target='_blank' rel='noreferrer'>Check out the code!</a>
                </div>
                <div className='project_element2'>
                <div className='project_heading'>Social Media Manager</div>
                    <img src={`${process.env.PUBLIC_URL}/images/media_project.png`} alt="media project"></img>
                    <div className='project_element_text'>By far the a largest project I've ever done. A fully functional MERN stack social media manager. Unfortuanly due to api app restrictions, the application will only work for test users.</div>
                    <a href='https://github.com/Vassardog77/Network4_test' target='_blank' rel='noreferrer'>Check out the code!</a>
                </div>
            </div>
            <div className='project_parent2'>
                <div className='project_element4'>
                    <div className='project_heading'>Pygame Raycasing</div>
                    <img src={`${process.env.PUBLIC_URL}/images/pygame_project.png`} alt="pygame project"></img>
                    <div className='project_element_text'>A pygame raycasting maze game. This taught me a lot about the intrcacies of python, game development, and applied trigonometry.</div>
                    <a className='link' href='https://github.com/Vassardog77/raycasting_maze' target='_blank' rel='noreferrer'>Check out the code!</a>
                </div>
                <div className='project_element3'>
                <div className='project_heading'>Portfolio Website</div>
                    <img src={`${process.env.PUBLIC_URL}/images/portfolio_project.png`} alt="portfolio project"></img>
                    <div className='project_element_text'>The porfolio website you're looking at right now was coded completely from scratch using React. It's a great showcase of my frontend development skills.</div>
                    <a href='https://github.com/Vassardog77/portfolio' target='_blank' rel='noreferrer'>Check out the code!</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;