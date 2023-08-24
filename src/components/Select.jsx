import React from "react";

const Select = ({option, defaultValue, value, onChange}) => {
    return (
        <div>
            <hr className="m-2"/>
                <select
                value={value}
                onChange={event => onChange(event.target.value)}
                >
                <option disabled value="value1">{defaultValue}</option>
                {option.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
                </select>
        </div>
    )
}

export default Select