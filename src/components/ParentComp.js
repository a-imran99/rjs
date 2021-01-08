import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComponent';
import RegComp from './RegComp';
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : 'imran'
        }
    }

    componentDidMount() {
        setInterval(() => {
           this.setState({ 
               name: 'imran' }) 
        }, 2000);
    }
    
    render() {
        console.log("p comp render");
        return (
            
            <div>
                Parent component
                <MemoComp name= {this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
