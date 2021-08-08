import React from 'react';

const IconInput = ({
    label, icon, placeholder, id, name, alt, value, onChange
}) => {
    const updateValue = (e) => {
        onChange(e.target.value);
    }

    const value_is_zero = value !== "" && Number(value) === 0;

    return (
        <div className="field">
            <label htmlFor={id}>{label}</label>
            <span className="icon-input">
                <img className="icon" src={icon} alt={alt}/>
                { value_is_zero && <span className="error">Can't be zero</span> }
                <input type="number" name={name} id={id} placeholder={placeholder} value={value} onChange={updateValue} className={value_is_zero ? 'zero_value' : ''}/>
            </span>
        </div>)
}

export default IconInput;