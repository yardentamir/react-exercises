import React from 'react';

export default function CustomInput({ callback, value, text, name, type }) {
  return (
    <div>
      <label htmlFor="var">{text}
        <input type={type} id="var" onChange={callback} value={value} name={name} />
      </label>
    </div>
  )
}

// export default function InputText({ callback, value, text, name }) {
//   return (
//     <div>
//       <label htmlFor="var">{text}
//         <input ref={ref} type="text" id="var" onChange={callback} value={value} name={name} />
//       </label>
//     </div>
//   )
// }