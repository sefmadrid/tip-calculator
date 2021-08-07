import React from 'react';
import RadioOption from "./RadioOption";

const TipPercentOptions = () => {
    return (
        <div className="field">
            <label htmlFor="tip-percent">Select Tip %</label>
            <div id="tip-percent-options-group">
                <RadioOption id="five_percent" name="tip_percent" value={5} label="5%" className="tip-percent-options"/>
                <RadioOption id="ten_percent" name="tip_percent" value={10} label="10%" className="tip-percent-options"/>
                <RadioOption id="fifteen_percent" name="tip_percent" value={15} label="15%" className="tip-percent-options"/>
                <RadioOption id="twenty_five_percent" name="tip_percent" value={25} label="25%" className="tip-percent-options"/>
                <RadioOption id="fifty_percent" name="tip_percent" value={50} label="50%" className="tip-percent-options"/>
                <span className="tip-percent-options custom-option">
                    <input type="text" placeholder="Custom"/>
                </span>
            </div>
        </div>
    );
}

export default TipPercentOptions