import React from 'react';

export type ClockViewPropsType = {
    date: Date
    intervalID: number
}

export const get2DigitString = (number: number) => number < 10 ? `0${number}` : number
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date, intervalID}) => {
    return (
        <div>
            <span>{get2DigitString(date.getHours())}</span>
            :
            <span>{get2DigitString(date.getMinutes())}</span>
            :
            <span>{get2DigitString(date.getSeconds())}</span>
            <span>
                    <button onClick={() => {
                        clearInterval(intervalID);
                        console.log(`ID = ${intervalID}`)
                    }}>stop
                    </button>
                {/*<button onClick={() => { setDate(new Date())} }>start</button>*/}
                </span>
        </div>
    )
}