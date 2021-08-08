import React from 'react';

const TotalSection = ({
    text, value, id
}) => {
    return (
        <div id={id ?? ''} className="total-section">
            <span className="text">{text}
                <small>/ person</small>
            </span>
            <span className="value">
                ${isNaN(value) || !isFinite(value) ? '0.00' : value}
            </span>
        </div>
    );
}

export default TotalSection;