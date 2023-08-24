import React from "react";

const Myselect = ({options, defaultValue}) => {
    return (
        <select>
          <option value=''>{defaultValue}</option>
        {options.map(option => 
            <option value={option.value}>
                {option.map}
            </option>
            )}
        </select>
    )
}

export default Myselect;