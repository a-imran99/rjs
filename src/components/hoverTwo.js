import React, { Component } from 'react'

class hoverTwo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   //   incrementCount = () => {
//   //     this.setState({
//   //       count: this.state.count + 1,
//   //     });
//   //     console.log(this.state.count + 1);
//   //   };
//   incrementCount = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };
  render() {
       const { count, incrementCount } = this.props;
    return (
       
        <h1 onMouseOver={incrementCount}>
          Click {count} times
        </h1>
    );
  }
}

export default hoverTwo
