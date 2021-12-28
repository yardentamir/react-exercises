import React, { useState, useRef, useEffect } from 'react';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';

export default function Editing() {

  const [isDisplayDataState, isDisplayDataText] = useState(false);
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    if (isDisplayDataState) {
      inputRef.current.focus();
    }
  })

  return (
    <div>
      {isDisplayDataState && <input ref={inputRef} text="Change query:" />}
      <button ref={buttonRef} onClick={() => { isDisplayDataText(!isDisplayDataState) }}>{isDisplayDataState ? "save" : "edit"}</button>
    </div>
  )
}