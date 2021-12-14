import React from 'react';
import './8.1-box_animation.css';

function Box(props) {
  return <div style={{ width: props.size, height: props.size }} className="box start-animation"></div>
}

const boxArray = [
  {
    id: 0,
    size: "100px"
  },
  {
    id: 1,
    size: "75px"
  },
  {
    id: 2,
    size: "125px"
  }
];

class BoxAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showToggler: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showToggler: true })
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ showToggler: false })
    }, 4000);
  }

  render() {
    return (
      <div>
        {this.state.showToggler &&
          boxArray.map((box) => {
            return <Box key={box.id} size={box.size} />;
          })}
      </div>
    )
  }

}

export default BoxAnimation;