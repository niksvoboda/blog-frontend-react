import React from "react";

const MySelect = ({options, defaultValue, onChange}) => {
    return(
        <select
        onChange={event => onChange(event.target.value)}
        >
        <option disabled >{defaultValue}</option>
        {
        options.map(option => (
        <option value={option.type} key={options.indexOf(option)}>{option.name}  </option>
         ))
         }
        </select>
    );
}

export default MySelect;