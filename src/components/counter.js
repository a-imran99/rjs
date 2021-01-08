import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
    
    increment() {
        this.setState({ 
            count: this.state.count + 1
        },()=> {
            console.log("value - ", this.state.count)
        }) /* Store the count Value and Increment */
        this.state.count = this.state.count + 1
        console.log(this.state.count) /* prints only on Console */
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>count  -  {this.state.count}</div>
                <button onClick={() => this.increment()}> Increment </button>

                <button onClick={() => this.incrementFive()}> Increment Five</button>
            </div>
        )
    }
}

export default Counter
