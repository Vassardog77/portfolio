import React from 'react';

function Projects(props) {
    return (
        <div id='projects' className='section_parent'>
            <div className='heading'>Projects</div>
            <div className='project_element_right'>
                <img src={`${process.env.PUBLIC_URL}/images/forest.jpg`} alt="pygame project"></img>
                <div className='project_element_text'>A pygame raycasting maze project. This taught me a lot about the intrcacies of python, game development, and applied trigonometry.</div>
            </div>
            <div className='project_element_left'>
                <img src={`${process.env.PUBLIC_URL}/images/forest.jpg`} alt="pygame project"></img>
                <div className='project_element_text'>This is a pygame maze project that I created for blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</div>
            </div>
            <div className='project_element_right'>
                <img src={`${process.env.PUBLIC_URL}/images/forest.jpg`} alt="pygame project"></img>
                <div className='project_element_text'>This is a pygame maze project that I created for blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</div>
            </div>
            <div className='project_element_left'>
                <img src={`${process.env.PUBLIC_URL}/images/forest.jpg`} alt="pygame project"></img>
                <div className='project_element_text'>This is a pygame maze project that I created for blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</div>
            </div>
        </div>
    );
}

export default Projects;