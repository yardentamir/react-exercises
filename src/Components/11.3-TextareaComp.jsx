import React from 'react';

export default function textareaComp({ callback, value, text, name }) {
  return (
    <div>
      <label htmlFor="textarea0">{text}</label>
      <textarea id="textarea0" rows="4" cols="50" onChange={callback} value={value} name={name}></textarea>
    </div>
  )
}