import React from 'react';

const Header = ({
    logo
}) => {
    return (
        <header role="banner">
            <img src={logo} alt="Logo" />
        </header>
    )
}

export default Header