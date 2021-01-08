import React, { Component } from "react";

export class lifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Imran",
    };
    console.log(" LifeCycleB Consrtructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log(" LifeCycleB componentDidMount");
  }

  render() {
    console.log(" LifeCycleB render");
    return <div>Life Cycle B</div>;
  }
}

export default lifeCycleB;
