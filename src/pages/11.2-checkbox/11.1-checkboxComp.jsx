import React from 'react';

export default function CheckBoxComp({ id, checked, callBack, text }) {
  return (
    <div>
      <input type="checkbox" id={id} value={id} onChange={callBack} checked={checked} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}