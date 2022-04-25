import React, { useState } from "react"



function Nav(props) {
    const {
        navSelected,
        setNavSelected
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
    }
    return (
        <nav>
            <ul className="flex-row">
                <li className={`${navSelected === '#about' && 'navActive'}`}>
                    <a href="#about" onClick={() => setNavSelected('about')}> About Me</a>
                </li>

                <li className={`${navSelected === "#portfolio" && 'navActive'}`} >
                    <a href="#portfolio" onClick={() => setNavSelected('portfolio')}> Portfolio</a>
                </li>
                <li className={`${navSelected === "#contact" && 'navActive'}`}>
                    <a href="#contact" onClick={() => setNavSelected('contact')}> Contact Me</a>
                </li>
                <li className={`${navSelected === "#resume" && 'navActive'}`}>
                    <a href="#resume" onClick={() => setNavSelected('resume') && console.log("hu")}> Resume</a>
                </li>

            </ul>
        </nav>)
}

export default Nav;