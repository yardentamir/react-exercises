import React, { useState } from 'react';
import CustomButton from "../../Components/CustomButton";

export default function ShowText() {

  const InitialState = [{ num: "one", isChecked: false }, { num: "two", isChecked: false }, { num: "three", isChecked: false }, { num: "four", isChecked: false }, { num: "five", isChecked: false }];
  const [checkboxState, setCheckbox] = useState(InitialState);

  const renderCheckBoxes = () => {
    return checkboxState.map((value, index) => {
      return (<div key={value.num}>
        <input type="checkbox" id={value.num} value={value.isChecked} onChange={() => handleChange(index)} />
        <label htmlFor={value.num}> {value.num}</label><br />
      </div>)
    })
  }

  const handleDelete = () => {
    const filteredArr = checkboxState.filter((item) => !item.isChecked);
    setCheckbox(filteredArr);
  }

  const handleChange = (index) => {
    const data = [...checkboxState];
    data[index].isChecked = !data[index].isChecked;
    setCheckbox(data);
  }

  const handleReset = () => {
    setCheckbox(InitialState);
  }


  return (
    <div>
      <CustomButton text="delete" callback={handleDelete} />
      <CustomButton text="reset" callback={handleReset} />
      <br />
      {renderCheckBoxes()}
    </div>
  )
}
