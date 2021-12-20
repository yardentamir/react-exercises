import React from 'react';

export default function buttonComp({ type, value, text, callback }) {
  return (
    <button className="ui button" type={type} value={value} onClick={callback}>{text}</button>
  )
}