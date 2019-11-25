import React from 'react';

function CatPick(props){
    return (
        <div className='popup'>
            <div className='inner-popup' id='catPop'>
                <button 
                    className='popup-button'
                    name='emotional'
                    onClick={props.changeCatFn}>
                    emotional</button>
                <button 
                    className='popup-button'
                    name='environmental'
                    onClick={props.changeCatFn}>
                    environmental</button>
                <button 
                    className='popup-button'
                    name='intellectual'
                    onClick={props.changeCatFn}>
                    intellectual</button>
                <button 
                    className='popup-button'
                    name='occupational'
                    onClick={props.changeCatFn}>
                    occupational</button>
                <button 
                    className='popup-button'
                    name='physical'
                    onClick={props.changeCatFn}>
                    physical</button>
                <button 
                    className='popup-button'
                    name='social'
                    onClick={props.changeCatFn}>
                    social</button>
                <button 
                    className='popup-button' 
                    id='spiritual'
                    name='spiritual'
                    onClick={props.changeCatFn}>
                    spiritual</button>
            </div>
        </div>
    )
}
export default CatPick;