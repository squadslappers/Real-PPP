import React, {Component} from 'react';
import Progression from './progression';
import Popup from './popup'
import axios from 'axios';

class Progress extends Component{
    constructor(props){
        super(props)
        this.state={
            progressions: [],
            showPopup: true
        }
    }

    componentDidMount(){
        axios.get('/api/ppp').then(res => {
            this.setState({
                progressions: res.data
            })
            console.log(this.state)
        })
    }

    render(){
        return(
            <div id='entireOperation'>
                {this.state.showPopup ?
                    <Popup />
                    : null}
                <header className='header'>
                    <button className='headbutt'>☰</button>
                    <h1 className='title'>progress</h1>
                    <button className='headbutt'>+</button>
                </header>
                {this.state.progressions.map((ele, ind) => {
                    return (
                        <Progression 
                            progress = {ele.progress}
                            date = {ele.date}
                            problem = {ele.problem}
                            key = {ind} />
                    )
                })}
            </div>
        )
    }
}

export default Progress