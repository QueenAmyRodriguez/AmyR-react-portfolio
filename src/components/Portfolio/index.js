import React from 'react';
import Project from '../Project';

function Portfolio() {
    return (
        <section className='row'>
            <div className='col-6'>
                <h1 id="portfolio">Portfolio</h1>
            </div>
            <div className='col-6'>
                <Project></Project>
            </div>
        </section>

    );
}

export default Portfolio;