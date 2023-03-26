import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean)=>void
}


function OnOff(props: OnOffPropsType) {
    console.log('OnOff rendering')

const onStyle = {
    width: '40px',
    height: '20px',
    border: '1px solid black',
    padding: '3px',
    display: 'inline-block',
    marginLeft: '2px',
    backgroundColor: props.on ? 'green': 'white'
}
const offStyle = {
    width: '40px',
    height: '20px',
    border: '1px solid black',
    padding: '3px',
    display: 'inline-block',
    marginLeft: '2px',
    backgroundColor: !props.on ? 'red': 'white'
}
const indicatorStyle = {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: props.on ? 'green': 'red'
}

const onClickOnHandler = ()=>props.onChange(true)
const onClickOffHandler = ()=>props.onChange(false)
    return (
        <div>
            <div style={onStyle} onClick={onClickOnHandler}> <b>on </b></div>
            <div style={offStyle} onClick={onClickOffHandler}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;