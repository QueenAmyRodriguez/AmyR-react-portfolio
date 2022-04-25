import React from 'react';
import resume from '../../assets/AmyZRodriguez_Resume.pdf'

function Resume() {
    return (
        <section className='row'>
            <div className='col-6'>
                <h1 id="resume">Resume</h1>
            </div>
            <div className='col-6'>
                <a href={resume} download> Resume</a>
            </div>
            <div>
                <h2>Proficiencies</h2>
                <ul>
                    <li>Git</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>CSS Frameworks</li>
                    <li>JavaScript</li>
                    <li>RESTful APIs</li>
                    <li>React</li>
                    <li>Express,js</li>
                    <li>Node.js</li>
                    <li>NPM</li>
                    <li>SQL and MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </section>

    );
}

export default Resume;