import React, {useState} from 'react';

type OnOffPropsType = {
    //on: boolean
}


function UnControlledOnOff() {
    console.log('OnOff rendering')
    let [on, setOn] = useState<boolean>(false)

const onStyle = {
    width: '40px',
    height: '20px',
    border: '1px solid black',
    padding: '3px',
    display: 'inline-block',
    marginLeft: '2px',
    backgroundColor: on ? 'green': 'white'
}
const offStyle = {
    width: '40px',
    height: '20px',
    border: '1px solid black',
    padding: '3px',
    display: 'inline-block',
    marginLeft: '2px',
    backgroundColor: !on ? 'red': 'white'
}
const indicatorStyle = {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: on ? 'green': 'red'
}
    const onClickOnHandler = ()=>setOn(true)
    const onClickOffHandler = ()=>setOn(false)
    return (
        <div>
            <div style={onStyle} onClick={onClickOnHandler}> <b>on </b></div>
            <div style={offStyle} onClick={onClickOffHandler}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UnControlledOnOff;