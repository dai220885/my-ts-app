import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type ClockPropsType = {
    mode?: 'digital' | 'analog'
}
//функция, которая будет добавлять нолик ко времени, когда количество часов/минут/секунд меньше десяти (чтобы выглядело нормально 00:00:01, а не 0:0:1


export const Clock: React.FC<ClockPropsType> = (props) => {
    const [ID, setID] = useState<number>(0)
    const [date, setDate] = useState(new Date())
    useEffect(() => {
            //запускаем сетинтервал в юзЭффекте
            const intervalID = setInterval(() => {
                setDate(new Date())
            }, 1000);
            setID(Number(intervalID))
            //setTimeout (()=>clearInterval(intervalID), 3000)
            //этот колбэк выполнится один раз, перед тем, как компонента будет размонтироваться
            return () => {
                clearInterval(intervalID)
            }
        },
        //массив зависимостей пустой т.к. сетинтервал нужно запустить один раз и он продолжит работать самостоятельно
        [])
    let viewMode;
    switch (props.mode) {
        case 'analog':
            viewMode = <AnalogClockView date={date} intervalID={ID}/>;
            break;
        case 'digital':
        default:
            viewMode = <DigitalClockView date={date} intervalID={ID}/>
    }
    return (
        <div>
            {viewMode}
        </div>
    );
};


