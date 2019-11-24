import React, {Component} from 'react';

class Popup extends Component{
    constructor(props){
        super(props)
        this.state={
            progress:'',
            date:'',
            problem:''
        }
    }

    handleChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div id='popup'>
                <div id='inner-popup'>

                    

                    <h3>what problem are you working to solve?</h3>
                    <input className = 'popup-input' name='problem' autocomplete = 'off'/>

                    <h3>what progress do you want to make?</h3>
                    <input className = 'popup-input' name='progress' autocomplete='off'/>

                    <h3>by when do you want to make this progress?</h3>
                    <input className = 'popup-input' name='date' autocomplete = 'off'/>
                </div>
            </div>
        )
    }
}

export default Popup