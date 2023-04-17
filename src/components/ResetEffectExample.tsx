import React, {useEffect, useState} from 'react';


export const ResetEffectExample: React.FC<any> = (props) => {
    const [counter, setCounter] = useState<number>(0)
    const [counter2, setCounter2] = useState<number>(0)
    useEffect(() => {
            //запускаем сетинтервал в юзЭффекте
            const intervalID = setInterval(() => {
                setCounter(counter + 1) //так в counter будет постоянно сетаться единица, т.к. setInterval запускается один раз, берет начальное значение counter (оно равно нулю) и работает с ним.
                setCounter2(state => state + 1) //так в counter2 каждую секунду будет обновляться значение т.к. в setCounter2 передается не само значение, а логика его изменения и в state каждый раз будет актуальное значение, взятое из counter2
            }, 1000);
            //setTimeout (()=>clearInterval(intervalID), 3000)
            //этот колбэк выполнится один раз, перед тем, как компонента будет размонтироваться
            return () => {
                clearInterval(intervalID)
                console.log(`cleared useEffect setInterval = ${intervalID}`)
            }
        },
        //массив зависимостей пустой т.к. сетинтервал нужно запустить один раз и он продолжит работать самостоятельно
        [])

    return (
        <div>
            {counter} <button onClick={()=>{setCounter(counter+1)}}>+</button>
            {counter2} <button onClick={()=>{setCounter2(counter2+1)}}>+</button>
        </div>
    );
};


