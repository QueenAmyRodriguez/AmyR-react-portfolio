import React from 'react';
import aboutMeImg from '../../assets/images/Me.jpeg'

function About() {
    return (
        <section className='row'>
            <div className='col-6'>
                <h1 id="about">About Me</h1>
                <img src={aboutMeImg} className='aboutMe' style={{ height: "300px" }} alt="Selfie taken in the Garden of Eden on Maui" />
            </div>
            <div className='col-6 bio'>
                <p>
                    Amy Rodriguez is enrolled in a full-stack web development boot camp as a way to change career tracks and jump straight into the development environment. With a wide range of topics from HTML, CSS, and JavaScript to Node.js, MySQL, and RESTful API's, this immersive boot camp has provided an overview of the field, and Amy is excited to continue learning and growing. As a self-labeled 'lifelong student', she is eager to continue to learn new skills in this ever-changing ladscape and improve her strengths and weaknesses. Take a look below at a few of her recent projects.
                </p>
            </div>
        </section>

    );
}

export default About;