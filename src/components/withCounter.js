import React from 'react'

const withCounter = (WrappedComponent) =>{
    class WithCounter extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          count: 0,
        };
      }
      incrementCount = () => {
        this.setState({
          count: this.state.count + 1,
        });
        console.log(this.state.count + 1);
      };
      render() {
        return (
          <WrappedComponent
            name="Imran"
            count={this.state.count}
            incrementCount={this.incrementCount}
          />
        );
      }
    }
    return WithCounter
}
    export default withCounter