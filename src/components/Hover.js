import React, { Component } from 'react'
import withCounter from "./withCounter";
class Hover extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//       incrementCount = () => {
//         this.setState(prevState => {
//          return { count: prevState.count + 1}
//     })
//       };
  render() {
      const { count, incrementCount } = this.props

    return (
      <div>
        <h1 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</h1>
      </div>
    );
  }
}

export default withCounter(Hover);
