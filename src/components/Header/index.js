import React from "react";
import Nav from '../Nav';

function Header(props) {

    const {
        navSelected,
        setNavSelected
    } = props;

    return (
        <header>
            <h2>
                <a href="/">
                    Amy Rodriguez
                </a>
            </h2>
            <Nav
                navSelected={navSelected}
                setNavSelected={setNavSelected}
            ></Nav>
        </header>
    )
}

export default Header;