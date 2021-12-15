import React from 'react';

export default function selectComp({ callback, value, text, name }) {
  return (
    <div>
      <label htmlFor={name} >{text}</label>
      <select name={name} id={name} value={value} onChange={callback}>
        <option value="0-15">0-15</option>
        <option value="15-30">15-30</option>
        <option value="15-30">15-30</option>
        <option value="45-50">45-50</option>
      </select>
    </div>
  )
}