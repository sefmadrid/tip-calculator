import React from 'react';

const RadioOption = ({
    id, name, value, tip_percent_value, label, className, onChange, onClick
}) => {
    return (
        <span className={`${className} radio-option`}>
            <input type="radio" id={id} name={name} value={value} checked={value === tip_percent_value} onChange={onChange} onClick={onClick}/>
            <label htmlFor={id}>{label}</label>
        </span>
    )
}

export default RadioOption