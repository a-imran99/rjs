import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef =React.createRef()
    }
    componentDidMount(){
        
        console.log(this.inputRef)
    }
    clickHandler = ()=>{
        this.inputRef.current.focus();
        //alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef}/>
                <button type="button" onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
