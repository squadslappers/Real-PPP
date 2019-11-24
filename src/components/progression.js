import React, {Component} from 'react';

class Progression extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='progression'>
                <h2>{this.props.progress}</h2>
                <p>{this.props.date}</p>
                <p>{this.props.problem}</p>
            </div>
        )
    }
}

export default Progression