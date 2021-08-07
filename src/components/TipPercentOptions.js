import React from 'react';
import RadioOption from "./RadioOption";

const TipPercentOptions = ({
    value, onChange
}) => {
    const fixed_values = [5, 10, 15, 25, 50];

    const changeValue = (e) => {
        onChange(Number(e.target.value))
    }

    const checkIfValueIsCustom = (fixed_values, value) => {
       return !value ? false : fixed_values.find(fixed_value => fixed_value === value)
    }

    const resetTipPercent = () => {
        onChange('')
    }

    return (
        <div className="field">
            <label htmlFor="tip-percent">Select Tip %</label>
            <div id="tip-percent-options-group">
                <RadioOption id="five_percent" name="tip_percent" value={5} label="5%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue}/>
                <RadioOption id="ten_percent" name="tip_percent" value={10} label="10%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue}/>
                <RadioOption id="fifteen_percent" name="tip_percent" value={15} label="15%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue}/>
                <RadioOption id="twenty_five_percent" name="tip_percent" value={25} label="25%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue}/>
                <RadioOption id="fifty_percent" name="tip_percent" value={50} label="50%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue}/>
                <span className="tip-percent-options custom-option">
                    <input type="text" placeholder="Custom" value={ checkIfValueIsCustom(fixed_values, value) ? '' : value } onChange={changeValue} onClick={resetTipPercent}/>
                </span>
            </div>
        </div>
    );
}

export default TipPercentOptions