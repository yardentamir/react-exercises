import React from "react";
import CustomButton from "./11.1-child_to-parentComp";

const colors = ["blue", "red", "yellow"];

class ChildToParent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedColor: "" };
  }

  updateColor = (color) => {
    this.setState({ selectedColor: color });
  };

  render() {
    return (
      <div>
        <h1>The color selected is : {this.state.selectedColor}</h1>
        {colors.map((btn) => {
          return (
            < CustomButton
              callBack={this.updateColor}
              color={btn}
            />
          );
        })}
      </div>
    );
  }
}

export default ChildToParent;



//-------------another ways----------------//

// const colors = [
//   { color: "blue", id: 0 },
//   { color: "red", id: 1 },
//   { color: "yellow", id: 2 },
//   { color: "green", id: 3 }
// ];

// class ChildToParent extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { selectedColor: "" };
//   }

//   updateColor = (color) => {
//     this.setState({ selectedColor: color });
//   };

//   render() {
//     return (
//       <div>
//         <h1>The color selected is : {this.state.selectedColor}</h1>
//         {colors.map((btn) => {
//           return (
//             < CustomButton
//               callBack={this.updateColor}
//               id={btn.id}
//               key={btn.id}
//               color={btn.color}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ChildToParent;

// const App = () => {
//   const [selectedColor, setSelectedColor] = React.useState("");

//   const updateColor = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div>
//       <h1>The color selected is : {selectedColor}</h1>
//       {colors.map((btn) => {
//         return (
//           <Btn
//             callBack={updateColor}
//             id={btn.id}
//             key={btn.id}
//             color={btn.color}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default App;
