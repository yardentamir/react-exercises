import React from 'react';
import { data } from "./data";
import { getPersons } from "./UtilityFunctions";

console.log({ data });

export default class DataMassaging extends React.Component {

  state = { data };

  render() {
    return (
      <div>
        {getPersons(data)}
      </div>
    )
  }


}