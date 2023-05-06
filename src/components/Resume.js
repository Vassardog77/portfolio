import React from 'react';

function Resume(props) {
    return (
        <div id='resume' className='section_parent'>
            <div className='heading'>Resume</div>
            <div className='resume_parent'>
                <div className='resume_list'>
                    <div className='sub_heading'>Skills</div>
                    <ul>
                        <li>Full Stack Web Development (MERN Stack)</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>SQL</li>
                        <li>Verilog and VHDLs</li>
                        <li>Computer Aided Design (Onshape, SolidWorks)</li>
                        <li>Circuit Design (Quartus, and physical design)</li>
                    </ul>
                    </div>
                <div className='resume_list'>
                    <div className='sub_heading'>Experience</div>
                    <ul>
                        <li>No Boundaries Marketing Group (5/22 – current) (writing webpages for clients)</li>
                        <li>Chandler Innovations Internship (5/21-8/21) (web page design)</li>
                    </ul>
                    <a href={`${process.env.PUBLIC_URL}/images/Resume_4.14.23.pdf`} download>Download Resume PDF</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;