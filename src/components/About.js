import React from 'react';

function About(props) {

    const content_string = [
        `Ben Moxon is a driven and creative electrical engineering student. He is a skilled programmer, proficient in Python, C, Java, JavaScript, 
        HTML, SQL, Verilog, and System Verilog, with extensive experience in full-stack web development using the MERN stack.`,

        `As a self-motivated and ambitious individual, Ben has gained valuable experience from various internships, including his work at No 
        Boundaries Marketing Group, Chandler Innovations, and UC Davis, where he researched, designed, and presented a drone and sensor package 
        project for gathering atmospheric data. He has also worked in customer service as a help desk call center worker at Arizona State 
        University and has honed his design skills in computer-aided design using Onshape and SolidWorks and circuit design using Quartus and 
        physical design.`,

        `Ben has a passion for creating innovative and efficient solutions to complex problems, and his portfolio showcases his impressive portfolio
        of projects, including a full MERN stack social media application with integration for Facebook, Instagram, Google, and Discord APIs and an 
        optimization of the sha256 bitcoin algorithm.`,

        `With his diverse skillset and experience, Ben is well-equipped to tackle any challenges that come his way and is eager to make his mark in 
        the world of electrical engineering and computer science.`
    ]

    return (
        <div id='about' className='section_parent'>
            <div className='heading'>About</div>
            <div className='about_parent'>
                <div className='about_image'>
                    <img src={`${process.env.PUBLIC_URL}/images/profile_pic.jpg`} alt="personal"></img>
                </div>
                <div className='about_text'>
                    <div>{content_string[0]}</div>
                    <div>{content_string[1]}</div>
                    <div>{content_string[2]}</div>
                    <div>{content_string[3]}</div>
                </div>
            </div>
        </div>
    );
}

export default About;