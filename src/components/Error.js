import React, { Component } from 'react'

class Error extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
     componentDidCatch(error, info) {
         console.log(error)
     }
    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }
    render() {
        if(this.state.hasError){
            return  <h1>Something wrong </h1>
        }
        return this.props.children
    }
}

export default Error
