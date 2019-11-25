import React, {Component} from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';

class Popup extends Component{
    constructor(props){
        super(props)
        this.state={
            progress:'',
            date: new Date(),
            problem:'',
            category: this.props.category
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.calendar=this.calendar.bind(this);
    }

    handleChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    calendar(date){
        this.setState({ date })
    }

    handleInput(){
        axios.post('/api/ppp', this.state).then(res => {
            this.setState ({
                progressions: res.data
            })
        })
        this.props.togglePopupFn();
        this.props.refreshFn();
        }

    render(){
        return(
            <div className='popup'>
                <div className='inner-popup'>

                    <button 
                        className='close'
                        name='showPopup'
                        onClick={this.props.togglePopupFn}>×</button>

                    <h3>what {this.props.category} <span id='prob'>problem</span> are you working to solve?</h3>
                    <input 
                        className='popup-input' 
                        name='problem' 
                        autoComplete='off'
                        onChange={this.handleChange}/>

                    <h3>what {this.props.category} <span id='prog'>progress</span> do you want to make?</h3>
                    <input 
                        className='popup-input' 
                        name='progress' 
                        autoComplete='off'
                        onChange={this.handleChange}/>

                    <h3>by when do you want to make this progress?</h3>
                    {/* <input 
                        className='popup-input' 
                        name='date' 
                        autoComplete='off'
                        onChange={this.handleChange}/> */}
                    <Calendar 
                        className='calendar' 
                        onChange={this.calendar}/>

                    <button 
                        id='create'
                        onClick={this.handleInput}>create</button>
                </div>
            </div>
        )
    }
}

export default Popup