import React from 'react';
import {ClockViewPropsType} from './DigitalClockView';
import styles from './AnalogClockView.module.css'
//import './AnalogClockView.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date, intervalID}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
            </div>
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