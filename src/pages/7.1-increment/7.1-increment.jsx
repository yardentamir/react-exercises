import React from 'react';
import "./7.1-increment.css"

// function Increment() {
//   // Declare a new state variable, which we'll call "count"  
//   const [count, setCount] = useState(0);
//   return (
//     <div className="flex">
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//       <p>click counter: {count}</p>
//     </div>
//   );
// }

class Increment extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 };
  }
  render() {
    return (<div className="flex">
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Increment
      </button>
      <p>click counter: {this.state.count}</p>
    </div>)
  }
}



export default Increment;