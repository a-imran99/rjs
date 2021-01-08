import React, { Component } from 'react'

class withCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //   incrementCount = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //     console.log(this.state.count + 1);
  //   };
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return <div>
        {this.props.render(this.state.count, this.incrementCount)}
    </div>;
  }
}

export default withCounterTwo
