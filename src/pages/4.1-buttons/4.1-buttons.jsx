import React from "react";
import './4.1-buttons.css';

const Button = (props) => {
  return <button className={props.className}>{props.buttonText}</button>
}

export const ButtonApp = () => {
  return (
    <div>
      <Button buttonText="Important" className="bold" />
      <Button buttonText="Not Important" />
    </div>
  )
}

export default ButtonApp;