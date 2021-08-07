import React from 'react';

const IconInput = ({
    label, icon, placeholder, id, name, alt
}) => {
    return (
        <div className="field">
            <label htmlFor={id}>{label}</label>
            <span className="icon-input">
                <img className="icon" src={icon} alt={alt}/>
                <input type="text" name={name} id={id} placeholder={placeholder}/>
            </span>
        </div>)
}

export default IconInput;