import React from 'react';

export default function InputText({ callback, value, text, name }) {
  return (
    <div>
      <label htmlFor="var">{text}
        <input type="text" id="var" onChange={callback} value={value} name={name} />
      </label>
    </div>
  )
}