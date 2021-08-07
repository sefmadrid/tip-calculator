import React from 'react';

const Header = ({
    logo
}) => {
    return (
        <header>
            <img src={logo} alt="Logo" />
        </header>
    )
}

export default Header