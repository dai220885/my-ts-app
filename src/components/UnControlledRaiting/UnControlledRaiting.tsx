import React, {useState} from 'react';
import star from './star.jpg'

export function UnControlledRaiting() {
    //локальный стейт для хранения количества звезд (значения рейтинга)
    let [starValue, setstarValue] = useState<number>(0)

    console.log('Raiting rendering')
    return (
        <div>
            <img src={star} alt="star img"/>
            <button onClick={()=>{setstarValue(0)}}>0</button>
            <UnControlledStar selected={starValue > 0}/><button onClick={()=>{setstarValue(1)}}>1</button>
            <UnControlledStar selected={starValue > 1}/><button onClick={()=>{setstarValue(2)}}>2</button>
            <UnControlledStar selected={starValue > 2}/><button onClick={()=>{setstarValue(3)}}>3</button>
            <UnControlledStar selected={starValue > 3}/><button onClick={()=>{setstarValue(4)}}>4</button>
            <UnControlledStar selected={starValue > 4}/><button onClick={()=>{setstarValue(5)}}>5</button>
        </div>
    );

}

type UnControlledStarPropsType = {
    selected: boolean;
}

function UnControlledStar(props: UnControlledStarPropsType) {
    console.log('Star rendering')
    return (
        <>
            {props.selected&&(<span> <b>star </b></span>)}
            {!props.selected&&<span>star </span>}
        </>
    );
}