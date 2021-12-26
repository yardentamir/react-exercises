import React, { useState } from 'react';

export default function ShowText() {

  const [TimeState, setTime] = useState({});

  const checkInputs = ({ target: { value, name } }) => {
    setTime(prevState => ({ ...prevState, [name]: value }));
    switch (name) {
      case "seconds":
        setTime(prevState => ({ ...prevState, minutes: value / 60 }));
        setTime(prevState => ({ ...prevState, hours: value / 3600 }));
        break;

      case "minutes":
        setTime(prevState => ({ ...prevState, minutes: value * 60 }));
        setTime(prevState => ({ ...prevState, hours: value / 60 }));
        break;

      case "hours":
        setTime(prevState => ({ ...prevState, minutes: value * 3600 }));
        setTime(prevState => ({ ...prevState, hours: 60 / value }));
        break;

      default:
        break;
    }

  }

  return (
    <div>
      <label>Seconds:<div><input name="seconds" defaultValue={TimeState.seconds} type="number" onChange={checkInputs} /></div></label>
      <label>Minutes:<div><input name="minutes" defaultValue={TimeState.minutes} type="number" onChange={checkInputs} /></div></label>
      <label>Hours:<div><input name="hours" defaultValue={TimeState.hours} type="number" onChange={checkInputs} /></div></label>
    </div>
  )
}