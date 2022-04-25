import React, { useState } from 'react';

function Project() {
    const [projects] = useState([
        {
            name: 'food-festival-pwa.png',
            link: 'https://queenamyrodriguez.github.io/food-festival/',
            gitHub: 'https://github.com/QueenAmyRodriguez/food-festival',
            description: ''
        },
        {
            name: 'lettuceBfrank-project2.png',
            link: 'https://mysterious-sands-14513.herokuapp.com/',
            gitHub: 'https://github.com/cynogriffin/lettuce-b-frank',
            description: ''
        },
        {
            name: 'NE-Fullpage.png',
            link: 'https://jbiske.github.io/Novel_Experiences/',
            gitHub: 'https://github.com/Jbiske/Novel_Experiences',
            description: ''
        },
        {
            name: 'README-Generator.png',
            link: 'https://github.com/QueenAmyRodriguez/AmyR-README-generator',
            gitHub: 'https://github.com/QueenAmyRodriguez/AmyR-README-generator',
            description: ''
        },
        {
            name: 'run-buddy-responsive.png',
            link: 'https://queenamyrodriguez.github.io/run-buddy/',
            gitHub: 'https://github.com/QueenAmyRodriguez/run-buddy',
            description: ''
        },
        {
            name: 'WDash.png',
            link: 'https://queenamyrodriguez.github.io/AmyR-Weather-dashboard/',
            gitHub: 'https://github.com/QueenAmyRodriguez/AmyR-Weather-dashboard',
            description: ''
        }
    ])

    return (
        <section className='row'>
            <div className='col-6'>
                {projects.map((project) => (
                    <img 
                    src={require(`../../assets/images/${project.name}`)}
                    className="img-responsive"
                    key={project.name}
                    />
                ))}
            </div> 
        </section>

    );
}

export default Project;