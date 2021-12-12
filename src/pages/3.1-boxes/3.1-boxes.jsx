import React from "react";

function Box4(props) {
  return <div style={props.styles}></div>
}

function Box3() {
  return <div style={{ backgroundColor: "lightPink", width: "900px", height: "400px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
    <Box4 styles={{ backgroundColor: "rgb(255 138 255)", width: "500px", height: "160px", marginBottom: "20px" }} />
    <Box4 styles={{ backgroundColor: "rgb(255 138 255)", width: "500px", height: "160px" }} />
  </div>
}

function Box2() {
  return <div style={{ backgroundColor: "lightBlue", width: "950px", height: "450px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Box3 />
  </div>
}

function Box1() {
  return <div style={{ backgroundColor: "lightGreen", width: "1000px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Box2 />
  </div>
}

function Boxes() {
  return <Box1 />
}

export default Boxes;
// const element = <Box />;