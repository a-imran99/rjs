import React, { Component } from 'react'
import withCounter from "./withCounter";
class ClickCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//     console.log(this.state.count + 1);
//   };
//     incrementCount = () => {
//       this.setState(prevState => {
//        return { count: prevState.count + 1}
//   })
//     };
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Click {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
