import React from 'react';

const RadioOption = ({
    id, name, value, label, className
}) => {
    return (
        <span className={`${className} radio-option`}>
            <input type="radio" id={id} name={name} value={value}/>
            <label htmlFor={id}>{label}</label>
        </span>
    )
}

export default RadioOption