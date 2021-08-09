import React from 'react';

import { isValueZero, isValueNegative } from "../library/number";

const IconInput = ({
    label, icon, placeholder, id, name, alt, value, onChange
}) => {
    const updateValue = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="field">
            <label htmlFor={id}>{label}</label>
            <span className="icon-input">
                <img className="icon" src={icon} alt={alt}/>
                { isValueZero(value) && <span className="error">Can't be zero</span> }
                { isValueNegative(value) && <span className="error">Can't be negative</span> }
                <input type="number" name={name} id={id} placeholder={placeholder} value={value} onChange={updateValue} className={isValueZero(value) ? 'zero_value' : ''}/>
            </span>
        </div>)
}

export default IconInput;