import React, {Component} from 'react';
import Progression from './progression';
import Popup from './popup'
import Catpick from './catpick'
import axios from 'axios';

class Progress extends Component{
    constructor(props){
        super(props)
        this.state={
            progressions: [],
            showPopup: false,
            showCatPick: false,
            category: 'emotional'
        }
        this.togglePopup = this.togglePopup.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.getGoals = this.getGoals.bind(this)
        this.toggleCatPick = this.toggleCatPick.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    async wait() {
        return await Promise.resolve(1);
    }
 
    componentDidUpdate(){
        this.getGoals()
    }

    changeCategory(event){
        const {name} = event.target;
        this.wait();
        console.log(this.state.category)
        this.setState({
            category: name
        })
        this.wait();
        this.toggleCatPick();
        this.wait();
        this.getGoals();
        console.log(this.state.category)
    }

    getGoals(){
        axios.get(`/api/ppp/?category=${this.state.category}`).then(res => {
            console.log(this.state.progressions)
            this.setState({
                progressions: res.data
            })
            console.log(this.state.progressions)
        })
    }

    componentDidMount(){
        this.getGoals()
    }

    // ======== HOW CAN I GET THESE TWO FUNCTIONS TO BE ONE??? ========
    togglePopup(){
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    toggleCatPick(){
        this.setState({
            showCatPick: !this.state.showCatPick
        })
    }
    // ======== ======== ======== ======== ======== ======== ========
   
    render(){
        return(
            <div id='entireOperation'>
                
                {this.state.showPopup ?
                    <Popup 
                        togglePopupFn = {this.togglePopup}
                        refreshFn = {this.componentDidMount}
                        category = {this.state.category}/>
                    : null}
                
                <header className='header'>
                    <button className='headbutt'>☰</button>
                    <h1 className='title'>progress</h1>
                    <button 
                        className='headbutt'
                        onClick={this.togglePopup}>+</button>
                </header>

                <button 
                    id='category'
                    onClick={this.toggleCatPick}>{this.state.category}</button>

                {this.state.showCatPick ?
                    <Catpick 
                        changeCatFn = {this.changeCategory}/>
                    : null}
                
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