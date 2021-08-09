import React from 'react';

const Header = ({
    logo
}) => {
    return (
        <header role="banner">
            <img src={logo} alt="A logo for Splitter." />
        </header>
    )
}

export default Header