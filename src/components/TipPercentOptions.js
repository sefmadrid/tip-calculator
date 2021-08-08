import React, {useState} from 'react';
import RadioOption from "./RadioOption";

const TipPercentOptions = ({
    value, onChange
}) => {
    const [is_custom_value, setIfCustomValue] = useState(false);

    const changeValue = (e) => {
        onChange(e.target.value)
    }

    const resetTipPercent = () => {
        if(!is_custom_value)
        {
            onChange('')
            setIfCustomValue(true)
        }
    }

    const fixedValueSelected = (e) => {
        setIfCustomValue(false)
        changeValue(e)
    }

    return (
        <div className="field">
            <label htmlFor="tip-percent">Select Tip %</label>
            <div id="tip-percent-options-group">
                <RadioOption id="five_percent" name="tip_percent" value={5} label="5%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue} onClick={fixedValueSelected}/>
                <RadioOption id="ten_percent" name="tip_percent" value={10} label="10%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue} onClick={fixedValueSelected}/>
                <RadioOption id="fifteen_percent" name="tip_percent" value={15} label="15%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue} onClick={fixedValueSelected}/>
                <RadioOption id="twenty_five_percent" name="tip_percent" value={25} label="25%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue} onClick={fixedValueSelected}/>
                <RadioOption id="fifty_percent" name="tip_percent" value={50} label="50%" className="tip-percent-options" tip_percent_value={value} onChange={changeValue} onClick={fixedValueSelected}/>
                <span className="tip-percent-options custom-option">
                    <input type="number" placeholder="Custom" value={ is_custom_value ? value : '' } onChange={changeValue} onClick={resetTipPercent}/>
                </span>
            </div>
        </div>
    );
}

export default TipPercentOptions