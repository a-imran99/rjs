import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
export class lifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
            name:"Imran"
        }
        console.log(' LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log( ' LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log(' LifeCycleA componentDidMount')
    }
    
    render() {
        console.log( ' LifeCycleA render')
        return (
            <div>
                Lifecycle A 
                <div>
                    <LifeCycleB></LifeCycleB>
                </div>
            </div>
        )
    }
}

export default lifeCycleA
