import React from 'react';

const RadioOption = ({
    id, name, value, tip_percent_value, label, className, onChange
}) => {
    return (
        <span className={`${className} radio-option`}>
            <input type="radio" id={id} name={name} value={value} onChange={onChange} checked={value === tip_percent_value}/>
            <label htmlFor={id}>{label}</label>
        </span>
    )
}

export default RadioOption