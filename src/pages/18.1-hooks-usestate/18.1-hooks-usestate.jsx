
import React, { useState } from 'react';

export default function ShowText({ str = "some text make long text please", maxLength = 3 }) {

  const [hideState, setHide] = useState(true);

  const renderHalfText = () => {
    const shortText = str.slice(0, maxLength);
    return <p>{shortText}...<button onClick={updateState}>Read more</button></p>
  }

  const renderFullText = () => {
    return <p>{str}<button onClick={updateState}>Less more</button></p>
  }

  const updateState = () => {
    setHide(!hideState);
  }

  return (
    <div>
      {hideState ? renderHalfText() : renderFullText()}
    </div>
  )
}