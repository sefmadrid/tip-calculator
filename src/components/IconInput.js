import React from 'react';

const IconInput = ({
    label, icon, placeholder, id, name, alt, value, onChange
}) => {
    const updateValue = (e) => {
        onChange(Number(e.target.value));
    }

    return (
        <div className="field">
            <label htmlFor={id}>{label}</label>
            <span className="icon-input">
                <img className="icon" src={icon} alt={alt}/>
                <input type="text" name={name} id={id} placeholder={placeholder} value={value} onChange={updateValue}/>
            </span>
        </div>)
}

export default IconInput;